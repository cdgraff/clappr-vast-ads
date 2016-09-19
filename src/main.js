import {Events, UICorePlugin} from 'Clappr'
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

    this.initVAST()
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
    console.log('initializing VAST')
    if (!this._options.VastAdsConfig || this._options.VastAdsConfig.AdXMLUrl == '') {
      return
    }

    const originalSource = this._options.source
    const vastUrl = this._options.VastAdsConfig.AdXMLUrl
    const container = this.container || this.core.mediaControl.container
    const playback = this.core.getCurrentPlayback()

    VastClient.client.get(vastUrl, response => {
      if (response) {
        for (var adIdx = 0, adLen = response.ads.length; adIdx < adLen; adIdx++) {
          var ad = response.ads[adIdx]

          for (var creaIdx = 0, creaLen = ad.creatives.length; creaIdx < creaLen; creaIdx++) {
            var creative = ad.creatives[creaIdx]

            switch (creative.type) {
              case "linear":
                for (var mfIdx = 0, mfLen = creative.mediaFiles.length; mfIdx < mfLen; mfIdx++) {
                  var mediaFile = creative.mediaFiles[mfIdx]
                  if (mediaFile.mimeType != "video/mp4") {
                    continue
                  }

                  // put player in ad mode
                  this.core.load(mediaFile.fileURL)

                  // Track ad events and send them
                  this.vastTracker = new VastClient.tracker(ad, creative)
                  // player.vastTracker.on('clickthrough', function(url) {
                  //   document.location.href = url
                  // });

                  const pauseFn = () => {
                    this.vastTracker.setPaused(true);
                    this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_PLAY, () => this.vastTracker.setPaused(false))
                  }

                  this.listenTo(this.core.getCurrentPlayback(), Events.PLAYBACK_READY, () => this.vastTracker.load())
                  this.listenTo(this.core.getCurrentPlayback(), Events.PLAYBACK_PAUSE, pauseFn)
                  this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => this.vastTracker.setProgress(progress.current))

                  if (this._options.mute) {
                    // this.core.getCurrentPlayback().volume(50)
                  }

                  this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => {
                    if (Math.round(progress.current) === 10) {
                      $('body').prepend($('<button/>', {
                        id: 'ad-skip',
                        class: 'plugin-ads',
                        text: 'Skip Ad',
                        style: `position: absolute;
                                z-index: 3;
                                bottom: 80px;
                                right: 30px;
                                background-color: #637aad;
                                border: 1px solid #314179;
                                display: inline-block;
                                cursor: pointer;
                                color: #ffffff;
                                font-family: sans-serif;
                                font-size: 28px;
                                font-weight: bold;
                                padding: 22px 42px;
                                text-decoration: none;`
                      }).click(() => {
                        this.vastTracker.skip()
                        this.core.getCurrentPlayback().seekPercentage(100)
                      }))
                    }
                  })

                  this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_PLAY, () => {
                    // this.core.mediaControl.container.disableMediaControl()
                    this.core.mediaControl.container.settings.seekEnabled = false
                    this.core.mediaControl.container.getPlugin('click_to_pause').disable()
                    $('body').prepend($('<h1/>', {
                      id: 'ad-text',
                      class: 'plugin-ads',
                      text: 'Advertisement',
                      style: `position: absolute;
                              z-index: 3;
                              top: 0;
                              left: 20px;
                              color: white;
                              background: rgba(0, 0, 0, .5);
                              padding: 10px;
                              font-family: sans-serif;`
                    }))
                  })

                  this.listenToOnce(this.core.getCurrentPlayback(), Events.PLAYBACK_ENDED, () => {
                    $('.plugin-ads').remove();
                    this.core.configure({ autoPlay: true })
                    this.core.load(originalSource)
                  })
                }
                break

              case "non-linear":
                // TODO
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

          if (player.vastTracker) {
            break
          } else {
            // Inform ad server we can't find suitable media file for this ad
            VastClient.util.track(ad.errorURLTemplates, {ERRORCODE: 403})
          }
        }
      }

      if (!player.vastTracker) {
        // No pre-roll, start video
      }
    })
  }
}
