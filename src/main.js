import {Events, Styler, UICorePlugin, template} from 'Clappr'
import pluginHtml from './public/settings-menu.html'
import pluginStyle from './public/style.scss'

export default class SettingsMenu extends UICorePlugin {

  static get version() { return VERSION }

  get name() { return 'settings_menu' }
  get template() { return template(pluginHtml) }

  get attributes() {
    return {
      'class': this.name,
      'data-settings-menu': ''
    }
  }

  get events() {
    return {
      'click [data-settings-menu-button]': 'onShowSettingsMenu'
    }
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.render);
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_HIDE, this.hideSettingsMenu);
  }

  unBindEvents() {
    this.stopListening(this.core, Events.MEDIACONTROL_RENDERED)
    this.stopListening(this.core, Events.MEDIACONTROL_HIDE)
  }

  reload() {
    this.unBindEvents()
    this.bindEvents()
  }

  render() {
    var style = Styler.getStyleFor(pluginStyle, {baseUrl: this.core.options.baseUrl})

    this.$el.html(this.template({'title': 'Settings Menu'}))
    this.$el.append(style)
    this.core.mediaControl.$('.media-control-right-panel > button[data-hd-indicator]').before(this.el)

    return this
  }

  onShowSettingsMenu(event) { this.toggleContextMenu() }

  hideSettingsMenu() { this.$('.settings_menu > .container').hide() }

  toggleContextMenu() { this.$('.settings_menu > .container').toggle() }
}
