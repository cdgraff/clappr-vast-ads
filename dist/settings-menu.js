(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["SettingsMenu"] = factory(require("Clappr"));
	else
		root["SettingsMenu"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "<%=baseUrl%>/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = __webpack_require__(1);module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _Clappr=__webpack_require__(2);var _publicSettingsMenuHtml=__webpack_require__(3);var _publicSettingsMenuHtml2=_interopRequireDefault(_publicSettingsMenuHtml);var _publicStyleScss=__webpack_require__(4);var _publicStyleScss2=_interopRequireDefault(_publicStyleScss);var SettingsMenu=(function(_UICorePlugin){_inherits(SettingsMenu,_UICorePlugin);function SettingsMenu(){_classCallCheck(this,SettingsMenu);_get(Object.getPrototypeOf(SettingsMenu.prototype),'constructor',this).apply(this,arguments);}_createClass(SettingsMenu,[{key:'bindEvents',value:function bindEvents(){this.listenTo(this.core.mediaControl,_Clappr.Events.MEDIACONTROL_RENDERED,this.render);this.listenTo(this.core.mediaControl,_Clappr.Events.MEDIACONTROL_HIDE,this.hideSettingsMenu);}},{key:'unBindEvents',value:function unBindEvents(){this.stopListening(this.core,_Clappr.Events.MEDIACONTROL_RENDERED);this.stopListening(this.core,_Clappr.Events.MEDIACONTROL_HIDE);}},{key:'reload',value:function reload(){this.unBindEvents();this.bindEvents();}},{key:'render',value:function render(){var style=_Clappr.Styler.getStyleFor(_publicStyleScss2['default'],{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({'title':'Settings Menu'}));this.$el.append(style);this.core.mediaControl.$('.media-control-right-panel > button[data-hd-indicator]').before(this.el);return this;}},{key:'onShowSettingsMenu',value:function onShowSettingsMenu(event){this.toggleContextMenu();}},{key:'hideSettingsMenu',value:function hideSettingsMenu(){this.$('.settings_menu > .container').hide();}},{key:'toggleContextMenu',value:function toggleContextMenu(){this.$('.settings_menu > .container').toggle();}},{key:'name',get:function get(){return 'settings_menu';}},{key:'template',get:function get(){return (0,_Clappr.template)(_publicSettingsMenuHtml2['default']);}},{key:'attributes',get:function get(){return {'class':this.name,'data-settings-menu':''};}},{key:'events',get:function get(){return {'click [data-settings-menu-button]':'onShowSettingsMenu'};}}],[{key:'version',get:function get(){return VERSION;}}]);return SettingsMenu;})(_Clappr.UICorePlugin);exports['default'] = SettingsMenu;module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<button class=\"media-control-button media-control-icon\" data-settings-menu-button>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 268.765 268.765\" xml:space=\"preserve\">\n  <g id=\"Settings\">\n  \t<g>\n  \t\t<path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z\" fill=\"#FFFFFF\"/>\n  \t</g>\n  </g>\n  </svg>\n</button>\n<div class=\"container\">\n  <div class=\"section\" id=\"settings-quality-selector\">\n    <div class=\"label\" style=\"padding-right: 11px;\">Качество</div>\n  </div>\n\n  <div class=\"section\">\n    <div class=\"label\">Проблемы с просмотром?</div>\n    <div class=\"selector\" id=\"player-reload\">Перезапустить</div>\n  </div>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".settings_menu[data-settings-menu] {\n  float: right;\n  position: relative;\n  height: 100%;\n  width: 37px; }\n  .settings_menu[data-settings-menu] button[data-settings-menu-button] {\n    transform: scale(0.8); }\n  .settings_menu[data-settings-menu] > .container {\n    position: absolute;\n    bottom: 45px;\n    right: -125px;\n    width: 230px;\n    padding: 10px 25px 10px 10px;\n    border: 1px solid #2a3143;\n    background-color: #3f5778;\n    display: none;\n    opacity: .85; }\n    .settings_menu[data-settings-menu] > .container .section {\n      display: flex;\n      align-items: center;\n      padding: 10px 0 10px;\n      font-size: 12px;\n      color: #ddd; }\n      .settings_menu[data-settings-menu] > .container .section .header {\n        padding: 0 15px;\n        line-height: 20px;\n        margin: 0 0 10px;\n        color: #ddd;\n        white-space: nowrap;\n        font-size: 14px;\n        font-weight: 500; }\n      .settings_menu[data-settings-menu] > .container .section .label {\n        display: inline-block;\n        width: 50%;\n        text-align: right;\n        margin-right: 5px; }\n      .settings_menu[data-settings-menu] > .container .section .selector {\n        display: inline-block;\n        margin-left: 5px;\n        cursor: pointer;\n        background-color: #e6e6e6;\n        border: 1px solid #333;\n        padding: 4px 5px;\n        color: #222;\n        text-shadow: 0 0 1px white; }\n    .settings_menu[data-settings-menu] > .container:after {\n      font-size: 1em;\n      content: \"\";\n      position: absolute;\n      bottom: -12px;\n      right: 133px;\n      width: 0;\n      height: 0;\n      border: 6px solid #3f5778;\n      border-bottom-color: transparent;\n      border-left-color: transparent;\n      border-right-color: transparent;\n      z-index: 0; }\n  .settings_menu[data-settings-menu] > ul {\n    text-align: left;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid #333;\n    display: none;\n    background-color: white; }\n  .settings_menu[data-settings-menu] li {\n    font-size: 10px; }\n    .settings_menu[data-settings-menu] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px;\n      color: white; }\n    .settings_menu[data-settings-menu] li a {\n      color: #444;\n      padding: 5px 50px 5px 3px;\n      display: block;\n      text-decoration: none; }\n      .settings_menu[data-settings-menu] li a:hover {\n        background-color: #706db5;\n        color: white; }\n        .settings_menu[data-settings-menu] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .settings_menu[data-settings-menu] li.current a {\n      color: white;\n      background-color: #4641b6; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/ // css base code, injected by the css-loader
	"use strict";module.exports = function(){var list=[]; // return the list of modules as css string
	list.toString = function toString(){var result=[];for(var i=0;i < this.length;i++) {var item=this[i];if(item[2]){result.push("@media " + item[2] + "{" + item[1] + "}");}else {result.push(item[1]);}}return result.join("");}; // import a list of modules into the list
	list.i = function(modules,mediaQuery){if(typeof modules === "string")modules = [[null,modules,""]];var alreadyImportedModules={};for(var i=0;i < this.length;i++) {var id=this[i][0];if(typeof id === "number")alreadyImportedModules[id] = true;}for(i = 0;i < modules.length;i++) {var item=modules[i]; // skip already imported module
	// this implementation is not 100% perfect for weird media query combinations
	//  when a module is imported multiple times with different media queries.
	//  I hope this will never occur (Hey this way we have smaller bundles)
	if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]){if(mediaQuery && !item[2]){item[2] = mediaQuery;}else if(mediaQuery){item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";}list.push(item);}}};return list;};

/***/ }
/******/ ])
});
;