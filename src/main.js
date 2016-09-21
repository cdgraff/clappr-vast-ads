import {Events, Styler, UICorePlugin} from 'Clappr'
import pluginHtml from './public/vast-ads.html'
import pluginStyle from './public/style.scss'
import VastClient from 'vast-client'

export default class VastAds extends UICorePlugin {

  static get version() { return VERSION }

  get name() { return 'vast_ads' }
  get template() { return template(pluginHtml) }

  get attributes() {
    return {
      'class': this.name,
      'data-vast-ads': ''
    }
  }

  get events() {
    return {
      'click [data-settings-menu-button]': 'onShowSettingsMenu'
    }
  }

  constructor(...args) {
    super(...args)

    this.i18n = {
      'en': {
        'vast_ads_text': 'Advertisement',
        'vast_ads_skip': 'Skip ad'
      },
      'ru': {
        'vast_ads_text': 'Реклама',
        'vast_ads_skip': 'Пропустить'
      }
    }
  }

  bindEvents() {
    this.listenTo(this.core, Events.CORE_READY, this.initVAST)
  }

  unBindEvents() {
    this.stopListening(this.core, Events.CORE_READY)
  }

  reload() {
    this.unBindEvents()
    this.bindEvents()
  }

  _onCoreReady() {
    // Attempt to get poster plugin
    this._posterPlugin =  this.core.mediaControl
      && this.core.mediaControl.container
      && this.core.mediaControl.container.getPlugin('poster')

    if (!this._posterPlugin) {
      throw new Error('Failed to get Clappr internal poster plugin')
    }

    // Attempt to get click-to-pause plugin
    this._clickToPausePlugin =  this.core.mediaControl
      && this.core.mediaControl.container
      && this.core.mediaControl.container.getPlugin('click_to_pause')

    if (!this._clickToPausePlugin) {
      throw new Error('Failed to get Clappr internal click-to-pause plugin')
    }

    this.renderStyles()
    this.initVAST()
  }

  renderStyles() {
    const style = Styler.getStyleFor(pluginStyle, {baseUrl: this.core.options.baseUrl})
    $('[data-player]').append(style)
  }

  _disableControls() {
    if (this._posterPlugin) {
      this._posterPlugin.container.disableMediaControl()
      this._posterPlugin.disable()
    }
    if (this._clickToPausePlugin) {
      this._clickToPausePlugin.disable()
    }
  }

  _enableControls() {
    if (this._posterPlugin) {
      this._posterPlugin.container.enableMediaControl()
      this._posterPlugin.enable()
    }
    if (this._clickToPausePlugin) {
      this._clickToPausePlugin.enable()
    }
  }

  initVAST() {
    if (!this._options.VastAdsConfig || this._options.VastAdsConfig.AdXMLUrl == '') {
      return
    }

    this.renderStyles()

    const originalSource = this._options.source
    const vastUrl = this._options.VastAdsConfig.AdXMLUrl

    VastClient.client.get(vastUrl, response => {
      if (response) {
        for (let adIdx in response.ads) {
          const ad = response.ads[adIdx]

          for (let creaIdx in ad.creatives) {
            const creative = ad.creatives[creaIdx]

            // Track ad events and send them
            this.vastTracker = new VastClient.tracker(ad, creative)

            switch (creative.type) {
              case "linear":
                for (let mfIdx in creative.mediaFiles) {
                  const mediaFile = creative.mediaFiles[mfIdx]

                  if (mediaFile.mimeType != "video/mp4") {
                    continue
                  }

                  // put player in ad mode
                  this.core.load(mediaFile.fileURL)

                  // player.vastTracker.on('clickthrough', function(url) {
                  //   document.location.href = url
                  // })

                  const pauseFn = () => {
                    this.vastTracker.setPaused(true)
                    this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_PLAY, () => this.vastTracker.setPaused(false))
                  }

                  this.listenTo(this.core.getCurrentPlayback(), Events.PLAYBACK_READY, () => this.vastTracker.load())
                  this.listenTo(this.core.getCurrentPlayback(), Events.PLAYBACK_PAUSE, pauseFn)
                  this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => this.vastTracker.setProgress(progress.current))

                  this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => {
                    if (Math.round(progress.current) === 10) {
                      if ($('#ad-skip').length === 0) {
                        $('[data-player]').prepend($('<button/>', {
                          id: 'ad-skip',
                          class: 'plugin-ads linear-skip',
                          text: (this._options.VastAdsConfig.skipMessage || this.i18n[this._options.language || 'en']['vast_ads_skip']) +  ' ➜'
                        }).click(() => {
                          this.vastTracker.skip()
                          this.core.getCurrentPlayback().seekPercentage(100)
                        }))
                      }
                    }
                  })

                  this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_PLAY, () => {
                    // this.core.mediaControl.container.disableMediaControl()
                    this.core.mediaControl.container.settings.seekEnabled = false
                    this.core.mediaControl.container.getPlugin('click_to_pause').disable()
                    $('[data-player]').prepend($('<h1/>', {
                      id: 'ad-text',
                      class: 'plugin-ads linear-text',
                      text: this._options.VastAdsConfig.textMessage || this.i18n[this._options.language || 'en']['vast_ads_text']
                    }))
                  })

                  this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_ENDED, () => {
                    $('.plugin-ads').remove();
                    this.core.configure({ autoPlay: true })
                    this.core.load(originalSource)
                  })
                }
                break

              case 'nonlinear':
                // console.log('non-linear ad')
                const nonlinearStart = +this._options.VastAdsConfig.nonlinearStart || 60

                for (let mfIdx in creative.variations) {
                  const mediaFile = creative.variations[mfIdx]
                  const $adElement = $('<div/>', {
                    id: mediaFile.id,
                    class: 'plugin-ads nonlinear',
                    style: `
                      left: ${(this.core.el.clientWidth / 2) - (+mediaFile.width / 2)}px;
                      height: ${mediaFile.height}px;
                      width: ${mediaFile.width}px;
                      background: url(${mediaFile.staticResource});
                    `
                  }).click(() => {
                    this.vastTracker.click()
                    window.open(mediaFile.nonlinearClickThroughURLTemplate)
                  })

                  $adElement.append($('<span>&#10006</span>').click(function(e) {
                    e.stopPropagation()
                    $(this).parent().remove()
                  }))

                  this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_PLAY, () => {
                    setTimeout(() => {
                      this.vastTracker.load()
                      $('[data-player]').prepend($adElement)
                    }, nonlinearStart * 1000)
                  })

                  // this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => {
                  //   if (Math.round(progress.current) === nonlinearStart) {
                  //     if ($('#' + mediaFile.id).length === 0) {
                  //       this.vastTracker.load()
                  //       $('[data-player]').prepend($adElement)
                  //     }
                  //   }
                  // })

                }

                break

              case "companion":
                for (var cpIdx = 0, cpLen = creative.variations.length; cpIdx < cpLen; cpIdx++) {
                  var companionAd = creative.variations[cpIdx]
                  var docElement = document.createElement("div")

                  switch (companionAd.type) {
                    case 'image/jpeg':
                      var aElement = document.createElement('a')
                      var companionAsset = new Image()
                      aElement.setAttribute('target', '_blank')
                      companionAsset.src = companionAd.staticResource
                      companionAsset.width = companionAd.width
                      companionAsset.height = companionAd.height

                      aElement.href = companionAd.companionClickThroughURLTemplate
                      aElement.appendChild(companionAsset)

                      docElement.appendChild(aElement)
                      document.body.appendChild(docElement)
                      break

                    case 'text/html':
                      docElement.innerHTML = companionAd.htmlResource
                      document.body.appendChild(docElement)
                      break

                    default:
                      if (companionAd.iframeResource) {
                        var aElement = document.createElement('iframe')
                        aElement.src = companionAd.staticResource
                        aElement.width = companionAd.width
                        aElement.height = companionAd.height
                        docElement.appendChild(aElement)
                        document.body.appendChild(docElement)
                        break
                      }
                      break
                  }
                }

                break

              default:
                break
            }

          }

          if (this.vastTracker) {
            break
          } else {
            // Inform ad server we can't find suitable media file for this ad
            VastClient.util.track(ad.errorURLTemplates, {ERRORCODE: 403})
          }
        }
      }

      if (!this.vastTracker) {
        // No pre-roll, start video
      }
    })
  }
}
