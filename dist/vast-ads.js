(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["VastAds"] = factory(require("Clappr"));
	else
		root["VastAds"] = factory(root["Clappr"]);
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

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _Clappr=__webpack_require__(2);var _publicVastAdsHtml=__webpack_require__(3);var _publicVastAdsHtml2=_interopRequireDefault(_publicVastAdsHtml);var _publicStyleScss=__webpack_require__(4);var _publicStyleScss2=_interopRequireDefault(_publicStyleScss);var _vastClient=__webpack_require__(6);var _vastClient2=_interopRequireDefault(_vastClient);var VastAds=(function(_UICorePlugin){_inherits(VastAds,_UICorePlugin);_createClass(VastAds,[{key:'name',get:function get(){return 'vast_ads';}},{key:'template',get:function get(){return template(_publicVastAdsHtml2['default']);}},{key:'attributes',get:function get(){return {'class':this.name,'data-vast-ads':''};}},{key:'events',get:function get(){return {'click [data-settings-menu-button]':'onShowSettingsMenu'};}}],[{key:'version',get:function get(){return VERSION;}}]);function VastAds(){_classCallCheck(this,VastAds);for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}_get(Object.getPrototypeOf(VastAds.prototype),'constructor',this).apply(this,args);this.i18n = {'en':{'vast_ads_text':'Advertisement','vast_ads_skip':'Skip ad'},'ru':{'vast_ads_text':'Реклама','vast_ads_skip':'Пропустить'}};}_createClass(VastAds,[{key:'bindEvents',value:function bindEvents(){this.listenTo(this.core,_Clappr.Events.CORE_READY,this.initVAST);}},{key:'unBindEvents',value:function unBindEvents(){this.stopListening(this.core,_Clappr.Events.CORE_READY);}},{key:'reload',value:function reload(){this.unBindEvents();this.bindEvents();}},{key:'_onCoreReady',value:function _onCoreReady(){ // Attempt to get poster plugin
	this._posterPlugin = this.core.mediaControl && this.core.mediaControl.container && this.core.mediaControl.container.getPlugin('poster');if(!this._posterPlugin){throw new Error('Failed to get Clappr internal poster plugin');} // Attempt to get click-to-pause plugin
	this._clickToPausePlugin = this.core.mediaControl && this.core.mediaControl.container && this.core.mediaControl.container.getPlugin('click_to_pause');if(!this._clickToPausePlugin){throw new Error('Failed to get Clappr internal click-to-pause plugin');}this.renderStyles();this.initVAST();}},{key:'renderStyles',value:function renderStyles(){var style=_Clappr.Styler.getStyleFor(_publicStyleScss2['default'],{baseUrl:this.core.options.baseUrl});$('[data-player]').append(style);}},{key:'_disableControls',value:function _disableControls(){if(this._posterPlugin){this._posterPlugin.container.disableMediaControl();this._posterPlugin.disable();}if(this._clickToPausePlugin){this._clickToPausePlugin.disable();}}},{key:'_enableControls',value:function _enableControls(){if(this._posterPlugin){this._posterPlugin.container.enableMediaControl();this._posterPlugin.enable();}if(this._clickToPausePlugin){this._clickToPausePlugin.enable();}}},{key:'initVAST',value:function initVAST(){var _this=this;if(!this._options.VastAdsConfig || this._options.VastAdsConfig.AdXMLUrl == ''){return;}this.renderStyles();var originalSource=this._options.source;var vastUrl=this._options.VastAdsConfig.AdXMLUrl;_vastClient2['default'].client.get(vastUrl,function(response){if(response){for(var adIdx in response.ads) {var ad=response.ads[adIdx];for(var creaIdx in ad.creatives) {var creative=ad.creatives[creaIdx]; // Track ad events and send them
	_this.vastTracker = new _vastClient2['default'].tracker(ad,creative);switch(creative.type){case "linear":for(var mfIdx in creative.mediaFiles) {var mediaFile=creative.mediaFiles[mfIdx];if(mediaFile.mimeType != "video/mp4"){continue;} // put player in ad mode
	_this.core.load(mediaFile.fileURL); // player.vastTracker.on('clickthrough', function(url) {
	//   document.location.href = url
	// })
	var pauseFn=function pauseFn(){_this.vastTracker.setPaused(true);_this.listenToOnce(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_PLAY,function(){return _this.vastTracker.setPaused(false);});};_this.listenTo(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_READY,function(){return _this.vastTracker.load();});_this.listenTo(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_PAUSE,pauseFn);_this.listenTo(_this.core.mediaControl.container,_Clappr.Events.CONTAINER_TIMEUPDATE,function(progress){return _this.vastTracker.setProgress(progress.current);});_this.listenTo(_this.core.mediaControl.container,_Clappr.Events.CONTAINER_TIMEUPDATE,function(progress){if(Math.round(progress.current) === 10){if($('#ad-skip').length === 0){$('[data-player]').prepend($('<button/>',{id:'ad-skip','class':'plugin-ads linear-skip',text:(_this._options.VastAdsConfig.skipMessage || _this.i18n[_this._options.language || 'en']['vast_ads_skip']) + ' ➜'}).click(function(){_this.vastTracker.skip();_this.core.getCurrentPlayback().seekPercentage(100);}));}}});_this.listenToOnce(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_PLAY,function(){ // this.core.mediaControl.container.disableMediaControl()
	_this.core.mediaControl.container.settings.seekEnabled = false;_this.core.mediaControl.container.getPlugin('click_to_pause').disable();$('[data-player]').prepend($('<h1/>',{id:'ad-text','class':'plugin-ads linear-text',text:_this._options.VastAdsConfig.textMessage || _this.i18n[_this._options.language || 'en']['vast_ads_text']}));});_this.listenToOnce(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_ENDED,function(){$('.plugin-ads').remove();_this.core.configure({autoPlay:true});_this.core.load(originalSource);});}break;case 'nonlinear': // console.log('non-linear ad')
	var nonlinearStart=+_this._options.VastAdsConfig.nonlinearStart || 60;var _loop=function(mfIdx){var mediaFile=creative.variations[mfIdx];var $adElement=$('<div/>',{id:mediaFile.id,'class':'plugin-ads nonlinear',style:'\n                      left: ' + (_this.core.el.clientWidth / 2 - +mediaFile.width / 2) + ';\n                      height: ' + mediaFile.height + ';\n                      width: ' + mediaFile.width + ';\n                      background: url(' + mediaFile.staticResource + ');\n                    '}).click(function(){_this.vastTracker.click();window.open(mediaFile.nonlinearClickThroughURLTemplate);});$adElement.append($('<span>&#10006</span>').click(function(e){e.stopPropagation();$(this).parent().remove();}));_this.listenToOnce(_this.core.getCurrentPlayback(),_Clappr.Events.PLAYBACK_PLAY,function(){setTimeout(function(){_this.vastTracker.load();$('[data-player]').prepend($adElement);},nonlinearStart * 1000);}); // this.listenTo(this.core.mediaControl.container, Events.CONTAINER_TIMEUPDATE, progress => {
	//   if (Math.round(progress.current) === nonlinearStart) {
	//     if ($('#' + mediaFile.id).length === 0) {
	//       this.vastTracker.load()
	//       $('[data-player]').prepend($adElement)
	//     }
	//   }
	// })
	};for(var mfIdx in creative.variations) {_loop(mfIdx);}break;case "companion":for(var cpIdx=0,cpLen=creative.variations.length;cpIdx < cpLen;cpIdx++) {var companionAd=creative.variations[cpIdx];var docElement=document.createElement("div");switch(companionAd.type){case 'image/jpeg':var aElement=document.createElement('a');var companionAsset=new Image();aElement.setAttribute('target','_blank');companionAsset.src = companionAd.staticResource;companionAsset.width = companionAd.width;companionAsset.height = companionAd.height;aElement.href = companionAd.companionClickThroughURLTemplate;aElement.appendChild(companionAsset);docElement.appendChild(aElement);document.body.appendChild(docElement);break;case 'text/html':docElement.innerHTML = companionAd.htmlResource;document.body.appendChild(docElement);break;default:if(companionAd.iframeResource){var aElement=document.createElement('iframe');aElement.src = companionAd.staticResource;aElement.width = companionAd.width;aElement.height = companionAd.height;docElement.appendChild(aElement);document.body.appendChild(docElement);break;}break;}}break;default:break;}}if(player.vastTracker){break;}else { // Inform ad server we can't find suitable media file for this ad
	_vastClient2['default'].util.track(ad.errorURLTemplates,{ERRORCODE:403});}}}if(!player.vastTracker){ // No pre-roll, start video
	}});}}]);return VastAds;})(_Clappr.UICorePlugin);exports['default'] = VastAds;module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".plugin-ads.nonlinear {\n  position: absolute;\n  bottom: 50;\n  z-index: 3;\n  cursor: pointer; }\n  .plugin-ads.nonlinear span {\n    position: absolute;\n    top: -7px;\n    right: -7px;\n    color: black;\n    background: #fff;\n    padding: 0 2px;\n    opacity: .8;\n    cursor: pointer;\n    font-size: 15px; }\n\n.plugin-ads.linear-skip {\n  position: absolute;\n  z-index: 3;\n  bottom: 80px;\n  right: 30px;\n  background-color: #637aad;\n  border: 1px solid #314179;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 15px 30px;\n  text-decoration: none; }\n\n.plugin-ads.linear-text {\n  position: absolute;\n  z-index: 3;\n  top: 40px;\n  left: 20px;\n  color: white;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 32px; }\n", ""]);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){module.exports = {client:__webpack_require__(7),tracker:__webpack_require__(63),parser:__webpack_require__(8),util:__webpack_require__(58)};}).call(undefined);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var VASTClient,VASTParser,VASTUtil;VASTParser = __webpack_require__(8);VASTUtil = __webpack_require__(58);VASTClient = (function(){function VASTClient(){}VASTClient.cappingFreeLunch = 0;VASTClient.cappingMinimumTimeInterval = 0;VASTClient.options = {withCredentials:false,timeout:0};VASTClient.get = function(url,opts,cb){var extend,now,options;now = +new Date();extend = exports.extend = function(object,properties){var key,val;for(key in properties) {val = properties[key];object[key] = val;}return object;};if(!cb){if(typeof opts === 'function'){cb = opts;}options = {};}options = extend(this.options,opts);if(this.totalCallsTimeout < now){this.totalCalls = 1;this.totalCallsTimeout = now + 60 * 60 * 1000;}else {this.totalCalls++;}if(this.cappingFreeLunch >= this.totalCalls){cb(null);return;}if(now - this.lastSuccessfullAd < this.cappingMinimumTimeInterval){cb(null);return;}return VASTParser.parse(url,options,(function(_this){return function(response){return cb(response);};})(this));};(function(){var defineProperty,storage;storage = VASTUtil.storage;defineProperty = Object.defineProperty;['lastSuccessfullAd','totalCalls','totalCallsTimeout'].forEach(function(property){defineProperty(VASTClient,property,{get:function get(){return storage.getItem(property);},set:function set(value){return storage.setItem(property,value);},configurable:false,enumerable:true});});if(VASTClient.totalCalls == null){VASTClient.totalCalls = 0;}if(VASTClient.totalCallsTimeout == null){VASTClient.totalCallsTimeout = 0;}})();return VASTClient;})();module.exports = VASTClient;}).call(undefined);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var EventEmitter,URLHandler,VASTAd,VASTAdExtension,VASTAdExtensionChild,VASTCompanionAd,VASTCreativeCompanion,VASTCreativeLinear,VASTCreativeNonLinear,VASTMediaFile,VASTNonLinear,VASTParser,VASTResponse,VASTUtil,__indexOf=[].indexOf || function(item){for(var i=0,l=this.length;i < l;i++) {if(i in this && this[i] === item)return i;}return -1;};URLHandler = __webpack_require__(9);VASTResponse = __webpack_require__(54);VASTAd = __webpack_require__(55);VASTAdExtension = __webpack_require__(56);VASTAdExtensionChild = __webpack_require__(57);VASTUtil = __webpack_require__(58);VASTCreativeLinear = __webpack_require__(59).VASTCreativeLinear;VASTCreativeCompanion = __webpack_require__(59).VASTCreativeCompanion;VASTCreativeNonLinear = __webpack_require__(59).VASTCreativeNonLinear;VASTMediaFile = __webpack_require__(60);VASTCompanionAd = __webpack_require__(61);VASTNonLinear = __webpack_require__(62);EventEmitter = __webpack_require__(20).EventEmitter;VASTParser = (function(){var URLTemplateFilters;function VASTParser(){}URLTemplateFilters = [];VASTParser.addURLTemplateFilter = function(func){if(typeof func === 'function'){URLTemplateFilters.push(func);}};VASTParser.removeURLTemplateFilter = function(){return URLTemplateFilters.pop();};VASTParser.countURLTemplateFilters = function(){return URLTemplateFilters.length;};VASTParser.clearUrlTemplateFilters = function(){return URLTemplateFilters = [];};VASTParser.parse = function(url,options,cb){if(!cb){if(typeof options === 'function'){cb = options;}options = {};}return this._parse(url,null,options,function(err,response){return cb(response);});};VASTParser.vent = new EventEmitter();VASTParser.track = function(templates,errorCode){this.vent.emit('VAST-error',errorCode);return VASTUtil.track(templates,errorCode);};VASTParser.on = function(eventName,cb){return this.vent.on(eventName,cb);};VASTParser.once = function(eventName,cb){return this.vent.once(eventName,cb);};VASTParser._parse = function(url,parentURLs,options,cb){var filter,_i,_len;if(!cb){if(typeof options === 'function'){cb = options;}options = {};}for(_i = 0,_len = URLTemplateFilters.length;_i < _len;_i++) {filter = URLTemplateFilters[_i];url = filter(url);}if(parentURLs == null){parentURLs = [];}parentURLs.push(url);return URLHandler.get(url,options,(function(_this){return function(err,xml){var ad,complete,loopIndex,node,response,_j,_k,_len1,_len2,_ref,_ref1;if(err != null){return cb(err);}response = new VASTResponse();if(!((xml != null?xml.documentElement:void 0) != null && xml.documentElement.nodeName === "VAST")){return cb();}_ref = xml.documentElement.childNodes;for(_j = 0,_len1 = _ref.length;_j < _len1;_j++) {node = _ref[_j];if(node.nodeName === 'Error'){response.errorURLTemplates.push(_this.parseNodeText(node));}}_ref1 = xml.documentElement.childNodes;for(_k = 0,_len2 = _ref1.length;_k < _len2;_k++) {node = _ref1[_k];if(node.nodeName === 'Ad'){ad = _this.parseAdElement(node);if(ad != null){response.ads.push(ad);}else {_this.track(response.errorURLTemplates,{ERRORCODE:101});}}}complete = function(errorAlreadyRaised){var _l,_len3,_ref2;if(errorAlreadyRaised == null){errorAlreadyRaised = false;}if(!response){return;}_ref2 = response.ads;for(_l = 0,_len3 = _ref2.length;_l < _len3;_l++) {ad = _ref2[_l];if(ad.nextWrapperURL != null){return;}}if(response.ads.length === 0){if(!errorAlreadyRaised){_this.track(response.errorURLTemplates,{ERRORCODE:303});}response = null;}return cb(null,response);};loopIndex = response.ads.length;while(loopIndex--) {ad = response.ads[loopIndex];if(ad.nextWrapperURL == null){continue;}(function(ad){var baseURL,protocol,_ref2;if(parentURLs.length >= 10 || (_ref2 = ad.nextWrapperURL,__indexOf.call(parentURLs,_ref2) >= 0)){_this.track(ad.errorURLTemplates,{ERRORCODE:302});response.ads.splice(response.ads.indexOf(ad),1);complete();return;}if(ad.nextWrapperURL.indexOf('//') === 0){protocol = location.protocol;ad.nextWrapperURL = "" + protocol + ad.nextWrapperURL;}else if(ad.nextWrapperURL.indexOf('://') === -1){baseURL = url.slice(0,url.lastIndexOf('/'));ad.nextWrapperURL = "" + baseURL + "/" + ad.nextWrapperURL;}return _this._parse(ad.nextWrapperURL,parentURLs,options,function(err,wrappedResponse){var creative,errorAlreadyRaised,eventName,index,wrappedAd,_base,_l,_len3,_len4,_len5,_len6,_m,_n,_o,_ref3,_ref4,_ref5,_ref6;errorAlreadyRaised = false;if(err != null){_this.track(ad.errorURLTemplates,{ERRORCODE:301});response.ads.splice(response.ads.indexOf(ad),1);errorAlreadyRaised = true;}else if(wrappedResponse == null){_this.track(ad.errorURLTemplates,{ERRORCODE:303});response.ads.splice(response.ads.indexOf(ad),1);errorAlreadyRaised = true;}else {response.errorURLTemplates = response.errorURLTemplates.concat(wrappedResponse.errorURLTemplates);index = response.ads.indexOf(ad);response.ads.splice(index,1);_ref3 = wrappedResponse.ads;for(_l = 0,_len3 = _ref3.length;_l < _len3;_l++) {wrappedAd = _ref3[_l];wrappedAd.errorURLTemplates = ad.errorURLTemplates.concat(wrappedAd.errorURLTemplates);wrappedAd.impressionURLTemplates = ad.impressionURLTemplates.concat(wrappedAd.impressionURLTemplates);if(ad.trackingEvents != null){_ref4 = wrappedAd.creatives;for(_m = 0,_len4 = _ref4.length;_m < _len4;_m++) {creative = _ref4[_m];if(creative.type === 'linear' || creative.type === 'nonlinear'){_ref5 = Object.keys(ad.trackingEvents);for(_n = 0,_len5 = _ref5.length;_n < _len5;_n++) {eventName = _ref5[_n];(_base = creative.trackingEvents)[eventName] || (_base[eventName] = []);creative.trackingEvents[eventName] = creative.trackingEvents[eventName].concat(ad.trackingEvents[eventName]);}}}}if(ad.videoClickTrackingURLTemplates != null){_ref6 = wrappedAd.creatives;for(_o = 0,_len6 = _ref6.length;_o < _len6;_o++) {creative = _ref6[_o];if(creative.type === 'linear' || creative.type === 'nonlinear'){creative.videoClickTrackingURLTemplates = creative.videoClickTrackingURLTemplates.concat(ad.videoClickTrackingURLTemplates);}}}response.ads.splice(index,0,wrappedAd);}}delete ad.nextWrapperURL;return complete(errorAlreadyRaised);});})(ad);}return complete();};})(this));};VASTParser.childByName = function(node,name){var child,_i,_len,_ref;_ref = node.childNodes;for(_i = 0,_len = _ref.length;_i < _len;_i++) {child = _ref[_i];if(child.nodeName === name){return child;}}};VASTParser.childsByName = function(node,name){var child,childs,_i,_len,_ref;childs = [];_ref = node.childNodes;for(_i = 0,_len = _ref.length;_i < _len;_i++) {child = _ref[_i];if(child.nodeName === name){childs.push(child);}}return childs;};VASTParser.parseAdElement = function(adElement){var adTypeElement,_i,_len,_ref;_ref = adElement.childNodes;for(_i = 0,_len = _ref.length;_i < _len;_i++) {adTypeElement = _ref[_i];adTypeElement.id = adElement.getAttribute("id");if(adTypeElement.nodeName === "Wrapper"){return this.parseWrapperElement(adTypeElement);}else if(adTypeElement.nodeName === "InLine"){return this.parseInLineElement(adTypeElement);}}};VASTParser.parseWrapperElement = function(wrapperElement){var ad,creative,wrapperCreativeElement,wrapperURLElement,_i,_len,_ref;ad = this.parseInLineElement(wrapperElement);wrapperURLElement = this.childByName(wrapperElement,"VASTAdTagURI");if(wrapperURLElement != null){ad.nextWrapperURL = this.parseNodeText(wrapperURLElement);}else {wrapperURLElement = this.childByName(wrapperElement,"VASTAdTagURL");if(wrapperURLElement != null){ad.nextWrapperURL = this.parseNodeText(this.childByName(wrapperURLElement,"URL"));}}_ref = ad.creatives;for(_i = 0,_len = _ref.length;_i < _len;_i++) {creative = _ref[_i];wrapperCreativeElement = null;if(creative.type === 'linear' || creative.type === 'nonlinear'){wrapperCreativeElement = creative;if(wrapperCreativeElement != null){if(wrapperCreativeElement.trackingEvents != null){ad.trackingEvents = wrapperCreativeElement.trackingEvents;}if(wrapperCreativeElement.videoClickTrackingURLTemplates != null){ad.videoClickTrackingURLTemplates = wrapperCreativeElement.videoClickTrackingURLTemplates;}}}}if(ad.nextWrapperURL != null){return ad;}};VASTParser.parseInLineElement = function(inLineElement){var ad,creative,creativeElement,creativeTypeElement,node,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_ref2;ad = new VASTAd();ad.id = inLineElement.id;_ref = inLineElement.childNodes;for(_i = 0,_len = _ref.length;_i < _len;_i++) {node = _ref[_i];switch(node.nodeName){case "Error":ad.errorURLTemplates.push(this.parseNodeText(node));break;case "Impression":ad.impressionURLTemplates.push(this.parseNodeText(node));break;case "Creatives":_ref1 = this.childsByName(node,"Creative");for(_j = 0,_len1 = _ref1.length;_j < _len1;_j++) {creativeElement = _ref1[_j];_ref2 = creativeElement.childNodes;for(_k = 0,_len2 = _ref2.length;_k < _len2;_k++) {creativeTypeElement = _ref2[_k];switch(creativeTypeElement.nodeName){case "Linear":creative = this.parseCreativeLinearElement(creativeTypeElement);if(creative){ad.creatives.push(creative);}break;case "NonLinearAds":creative = this.parseNonLinear(creativeTypeElement);if(creative){ad.creatives.push(creative);}break;case "CompanionAds":creative = this.parseCompanionAd(creativeTypeElement);if(creative){ad.creatives.push(creative);}}}}break;case "Extensions":this.parseExtension(ad.extensions,this.childsByName(node,"Extension"));}}return ad;};VASTParser.parseExtension = function(collection,extensions){var childNode,ext,extChild,extChildNodeAttr,extNode,extNodeAttr,_i,_j,_k,_l,_len,_len1,_len2,_len3,_ref,_ref1,_ref2,_results;_results = [];for(_i = 0,_len = extensions.length;_i < _len;_i++) {extNode = extensions[_i];ext = new VASTAdExtension();if(extNode.attributes){_ref = extNode.attributes;for(_j = 0,_len1 = _ref.length;_j < _len1;_j++) {extNodeAttr = _ref[_j];ext.attributes[extNodeAttr.nodeName] = extNodeAttr.nodeValue;}}_ref1 = extNode.childNodes;for(_k = 0,_len2 = _ref1.length;_k < _len2;_k++) {childNode = _ref1[_k];if(childNode.nodeName !== '#text'){extChild = new VASTAdExtensionChild();extChild.name = childNode.nodeName;extChild.value = this.parseNodeText(childNode);if(childNode.attributes){_ref2 = childNode.attributes;for(_l = 0,_len3 = _ref2.length;_l < _len3;_l++) {extChildNodeAttr = _ref2[_l];extChild.attributes[extChildNodeAttr.nodeName] = extChildNodeAttr.nodeValue;}}ext.children.push(extChild);}}_results.push(collection.push(ext));}return _results;};VASTParser.parseCreativeLinearElement = function(creativeElement){var adParamsElement,clickTrackingElement,creative,customClickElement,eventName,maintainAspectRatio,mediaFile,mediaFileElement,mediaFilesElement,offset,percent,scalable,skipOffset,trackingElement,trackingEventsElement,trackingURLTemplate,videoClicksElement,_base,_i,_j,_k,_l,_len,_len1,_len2,_len3,_len4,_len5,_m,_n,_ref,_ref1,_ref2,_ref3,_ref4,_ref5;creative = new VASTCreativeLinear();creative.duration = this.parseDuration(this.parseNodeText(this.childByName(creativeElement,"Duration")));if(creative.duration === -1 && creativeElement.parentNode.parentNode.parentNode.nodeName !== 'Wrapper'){return null;}skipOffset = creativeElement.getAttribute("skipoffset");if(skipOffset == null){creative.skipDelay = null;}else if(skipOffset.charAt(skipOffset.length - 1) === "%"){percent = parseInt(skipOffset,10);creative.skipDelay = creative.duration * (percent / 100);}else {creative.skipDelay = this.parseDuration(skipOffset);}videoClicksElement = this.childByName(creativeElement,"VideoClicks");if(videoClicksElement != null){creative.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(videoClicksElement,"ClickThrough"));_ref = this.childsByName(videoClicksElement,"ClickTracking");for(_i = 0,_len = _ref.length;_i < _len;_i++) {clickTrackingElement = _ref[_i];creative.videoClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));}_ref1 = this.childsByName(videoClicksElement,"CustomClick");for(_j = 0,_len1 = _ref1.length;_j < _len1;_j++) {customClickElement = _ref1[_j];creative.videoCustomClickURLTemplates.push(this.parseNodeText(customClickElement));}}adParamsElement = this.childByName(creativeElement,"AdParameters");if(adParamsElement != null){creative.adParameters = this.parseNodeText(adParamsElement);}_ref2 = this.childsByName(creativeElement,"TrackingEvents");for(_k = 0,_len2 = _ref2.length;_k < _len2;_k++) {trackingEventsElement = _ref2[_k];_ref3 = this.childsByName(trackingEventsElement,"Tracking");for(_l = 0,_len3 = _ref3.length;_l < _len3;_l++) {trackingElement = _ref3[_l];eventName = trackingElement.getAttribute("event");trackingURLTemplate = this.parseNodeText(trackingElement);if(eventName != null && trackingURLTemplate != null){if(eventName === "progress"){offset = trackingElement.getAttribute("offset");if(!offset){continue;}if(offset.charAt(offset.length - 1) === '%'){eventName = "progress-" + offset;}else {eventName = "progress-" + Math.round(this.parseDuration(offset));}}if((_base = creative.trackingEvents)[eventName] == null){_base[eventName] = [];}creative.trackingEvents[eventName].push(trackingURLTemplate);}}}_ref4 = this.childsByName(creativeElement,"MediaFiles");for(_m = 0,_len4 = _ref4.length;_m < _len4;_m++) {mediaFilesElement = _ref4[_m];_ref5 = this.childsByName(mediaFilesElement,"MediaFile");for(_n = 0,_len5 = _ref5.length;_n < _len5;_n++) {mediaFileElement = _ref5[_n];mediaFile = new VASTMediaFile();mediaFile.id = mediaFileElement.getAttribute("id");mediaFile.fileURL = this.parseNodeText(mediaFileElement);mediaFile.deliveryType = mediaFileElement.getAttribute("delivery");mediaFile.codec = mediaFileElement.getAttribute("codec");mediaFile.mimeType = mediaFileElement.getAttribute("type");mediaFile.apiFramework = mediaFileElement.getAttribute("apiFramework");mediaFile.bitrate = parseInt(mediaFileElement.getAttribute("bitrate") || 0);mediaFile.minBitrate = parseInt(mediaFileElement.getAttribute("minBitrate") || 0);mediaFile.maxBitrate = parseInt(mediaFileElement.getAttribute("maxBitrate") || 0);mediaFile.width = parseInt(mediaFileElement.getAttribute("width") || 0);mediaFile.height = parseInt(mediaFileElement.getAttribute("height") || 0);scalable = mediaFileElement.getAttribute("scalable");if(scalable && typeof scalable === "string"){scalable = scalable.toLowerCase();if(scalable === "true"){mediaFile.scalable = true;}else if(scalable === "false"){mediaFile.scalable = false;}}maintainAspectRatio = mediaFileElement.getAttribute("maintainAspectRatio");if(maintainAspectRatio && typeof maintainAspectRatio === "string"){maintainAspectRatio = maintainAspectRatio.toLowerCase();if(maintainAspectRatio === "true"){mediaFile.maintainAspectRatio = true;}else if(maintainAspectRatio === "false"){mediaFile.maintainAspectRatio = false;}}creative.mediaFiles.push(mediaFile);}}return creative;};VASTParser.parseNonLinear = function(creativeElement){var creative,eventName,htmlElement,iframeElement,nonlinearAd,nonlinearResource,staticElement,trackingElement,trackingEventsElement,trackingURLTemplate,_base,_i,_j,_k,_l,_len,_len1,_len2,_len3,_len4,_len5,_m,_n,_ref,_ref1,_ref2,_ref3,_ref4,_ref5;creative = new VASTCreativeNonLinear();_ref = this.childsByName(creativeElement,"TrackingEvents");for(_i = 0,_len = _ref.length;_i < _len;_i++) {trackingEventsElement = _ref[_i];_ref1 = this.childsByName(trackingEventsElement,"Tracking");for(_j = 0,_len1 = _ref1.length;_j < _len1;_j++) {trackingElement = _ref1[_j];eventName = trackingElement.getAttribute("event");trackingURLTemplate = this.parseNodeText(trackingElement);if(eventName != null && trackingURLTemplate != null){if((_base = creative.trackingEvents)[eventName] == null){_base[eventName] = [];}creative.trackingEvents[eventName].push(trackingURLTemplate);}}}_ref2 = this.childsByName(creativeElement,"NonLinear");for(_k = 0,_len2 = _ref2.length;_k < _len2;_k++) {nonlinearResource = _ref2[_k];nonlinearAd = new VASTNonLinear();nonlinearAd.id = nonlinearResource.getAttribute("id") || null;nonlinearAd.width = nonlinearResource.getAttribute("width");nonlinearAd.height = nonlinearResource.getAttribute("height");nonlinearAd.minSuggestedDuration = nonlinearResource.getAttribute("minSuggestedDuration");nonlinearAd.apiFramework = nonlinearResource.getAttribute("apiFramework");_ref3 = this.childsByName(nonlinearResource,"HTMLResource");for(_l = 0,_len3 = _ref3.length;_l < _len3;_l++) {htmlElement = _ref3[_l];nonlinearAd.type = htmlElement.getAttribute("creativeType") || 'text/html';nonlinearAd.htmlResource = this.parseNodeText(htmlElement);}_ref4 = this.childsByName(nonlinearResource,"IFrameResource");for(_m = 0,_len4 = _ref4.length;_m < _len4;_m++) {iframeElement = _ref4[_m];nonlinearAd.type = iframeElement.getAttribute("creativeType") || 0;nonlinearAd.iframeResource = this.parseNodeText(iframeElement);}_ref5 = this.childsByName(nonlinearResource,"StaticResource");for(_n = 0,_len5 = _ref5.length;_n < _len5;_n++) {staticElement = _ref5[_n];nonlinearAd.type = staticElement.getAttribute("creativeType") || 0;nonlinearAd.staticResource = this.parseNodeText(staticElement);}nonlinearAd.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(nonlinearResource,"NonLinearClickThrough"));creative.variations.push(nonlinearAd);}return creative;};VASTParser.parseCompanionAd = function(creativeElement){var companionAd,companionResource,creative,eventName,htmlElement,iframeElement,staticElement,trackingElement,trackingEventsElement,trackingURLTemplate,_base,_i,_j,_k,_l,_len,_len1,_len2,_len3,_len4,_len5,_m,_n,_ref,_ref1,_ref2,_ref3,_ref4,_ref5;creative = new VASTCreativeCompanion();_ref = this.childsByName(creativeElement,"Companion");for(_i = 0,_len = _ref.length;_i < _len;_i++) {companionResource = _ref[_i];companionAd = new VASTCompanionAd();companionAd.id = companionResource.getAttribute("id") || null;companionAd.width = companionResource.getAttribute("width");companionAd.height = companionResource.getAttribute("height");_ref1 = this.childsByName(companionResource,"HTMLResource");for(_j = 0,_len1 = _ref1.length;_j < _len1;_j++) {htmlElement = _ref1[_j];companionAd.type = htmlElement.getAttribute("creativeType") || 'text/html';companionAd.htmlResource = this.parseNodeText(htmlElement);}_ref2 = this.childsByName(companionResource,"IFrameResource");for(_k = 0,_len2 = _ref2.length;_k < _len2;_k++) {iframeElement = _ref2[_k];companionAd.type = iframeElement.getAttribute("creativeType") || 0;companionAd.iframeResource = this.parseNodeText(iframeElement);}_ref3 = this.childsByName(companionResource,"StaticResource");for(_l = 0,_len3 = _ref3.length;_l < _len3;_l++) {staticElement = _ref3[_l];companionAd.type = staticElement.getAttribute("creativeType") || 0;companionAd.staticResource = this.parseNodeText(staticElement);}_ref4 = this.childsByName(companionResource,"TrackingEvents");for(_m = 0,_len4 = _ref4.length;_m < _len4;_m++) {trackingEventsElement = _ref4[_m];_ref5 = this.childsByName(trackingEventsElement,"Tracking");for(_n = 0,_len5 = _ref5.length;_n < _len5;_n++) {trackingElement = _ref5[_n];eventName = trackingElement.getAttribute("event");trackingURLTemplate = this.parseNodeText(trackingElement);if(eventName != null && trackingURLTemplate != null){if((_base = companionAd.trackingEvents)[eventName] == null){_base[eventName] = [];}companionAd.trackingEvents[eventName].push(trackingURLTemplate);}}}companionAd.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(companionResource,"CompanionClickThrough"));companionAd.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(companionResource,"CompanionClickTracking"));creative.variations.push(companionAd);}return creative;};VASTParser.parseDuration = function(durationString){var durationComponents,hours,minutes,seconds,secondsAndMS;if(!(durationString != null)){return -1;}durationComponents = durationString.split(":");if(durationComponents.length !== 3){return -1;}secondsAndMS = durationComponents[2].split(".");seconds = parseInt(secondsAndMS[0]);if(secondsAndMS.length === 2){seconds += parseFloat("0." + secondsAndMS[1]);}minutes = parseInt(durationComponents[1] * 60);hours = parseInt(durationComponents[0] * 60 * 60);if(isNaN(hours || isNaN(minutes || isNaN(seconds || minutes > 60 * 60 || seconds > 60)))){return -1;}return hours + minutes + seconds;};VASTParser.parseNodeText = function(node){return node && (node.textContent || node.text || '').trim();};return VASTParser;})();module.exports = VASTParser;}).call(undefined);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var URLHandler,flash,xhr;xhr = __webpack_require__(10);flash = __webpack_require__(11);URLHandler = (function(){function URLHandler(){}URLHandler.get = function(url,options,cb){var _ref;if(!cb){if(typeof options === 'function'){cb = options;}options = {};}if(options.response != null){return cb(null,options.response);}else if((_ref = options.urlhandler) != null?_ref.supported():void 0){return options.urlhandler.get(url,options,cb);}else if(typeof window === "undefined" || window === null){return __webpack_require__(12).get(url,options,cb);}else if(xhr.supported()){return xhr.get(url,options,cb);}else if(flash.supported()){return flash.get(url,options,cb);}else {return cb();}};return URLHandler;})();module.exports = URLHandler;}).call(undefined);

/***/ },
/* 10 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var XHRURLHandler;XHRURLHandler = (function(){function XHRURLHandler(){}XHRURLHandler.xhr = function(){var xhr;xhr = new window.XMLHttpRequest();if('withCredentials' in xhr){return xhr;}};XHRURLHandler.supported = function(){return !!this.xhr();};XHRURLHandler.get = function(url,options,cb){var xhr;if(window.location.protocol === 'https:' && url.indexOf('http://') === 0){return cb(new Error('Cannot go from HTTPS to HTTP.'));}try{xhr = this.xhr();xhr.open('GET',url);xhr.timeout = options.timeout || 0;xhr.withCredentials = options.withCredentials || false;xhr.overrideMimeType('text/xml');xhr.send();return xhr.onreadystatechange = function(){if(xhr.readyState === 4){return cb(null,xhr.responseXML);}};}catch(_error) {return cb();}};return XHRURLHandler;})();module.exports = XHRURLHandler;}).call(undefined);

/***/ },
/* 11 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var FlashURLHandler;FlashURLHandler = (function(){function FlashURLHandler(){}FlashURLHandler.xdr = function(){var xdr;if(window.XDomainRequest){xdr = new XDomainRequest();}return xdr;};FlashURLHandler.supported = function(){return !!this.xdr();};FlashURLHandler.get = function(url,options,cb){var xdr,xmlDocument;if(xmlDocument = typeof window.ActiveXObject === "function"?new window.ActiveXObject("Microsoft.XMLDOM"):void 0){xmlDocument.async = false;}else {return cb();}xdr = this.xdr();xdr.open('GET',url);xdr.timeout = options.timeout || 0;xdr.withCredentials = options.withCredentials || false;xdr.send();xdr.onprogress = function(){};return xdr.onload = function(){xmlDocument.loadXML(xdr.responseText);return cb(null,xmlDocument);};};return FlashURLHandler;})();module.exports = FlashURLHandler;}).call(undefined);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var DOMParser,NodeURLHandler,fs,http,uri;uri = __webpack_require__(13);fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));http = __webpack_require__(19);DOMParser = __webpack_require__(51).DOMParser;NodeURLHandler = (function(){function NodeURLHandler(){}NodeURLHandler.get = function(url,options,cb){var data,fn,req,timeout_wrapper,timing;url = uri.parse(url);if(url.protocol === 'file:'){return fs.readFile(url.pathname,'utf8',function(err,data){var xml;if(err){return cb(err);}xml = new DOMParser().parseFromString(data);return cb(null,xml);});}else {data = '';timeout_wrapper = function(req){return function(){return req.abort();};};req = http.get(url.href,function(res){res.on('data',function(chunk){var timing;data += chunk;clearTimeout(timing);return timing = setTimeout(fn,options.timeout || 120000);});return res.on('end',function(){var xml;clearTimeout(timing);xml = new DOMParser().parseFromString(data);return cb(null,xml);});});req.on('error',function(err){clearTimeout(timing);return cb(err);});fn = timeout_wrapper(req);return timing = setTimeout(fn,options.timeout || 120000);}};return NodeURLHandler;})();module.exports = NodeURLHandler;}).call(undefined);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';var punycode=__webpack_require__(14);exports.parse = urlParse;exports.resolve = urlResolve;exports.resolveObject = urlResolveObject;exports.format = urlFormat;exports.Url = Url;function Url(){this.protocol = null;this.slashes = null;this.auth = null;this.host = null;this.port = null;this.hostname = null;this.hash = null;this.search = null;this.query = null;this.pathname = null;this.path = null;this.href = null;} // Reference: RFC 3986, RFC 1808, RFC 2396
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/, // RFC 2396: characters reserved for delimiting URLs.
	// We actually just auto-escape these.
	delims=['<','>','"','`',' ','\r','\n','\t'], // RFC 2396: characters not allowed for various reasons.
	unwise=['{','}','|','\\','^','`'].concat(delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	autoEscape=['\''].concat(unwise), // Characters that are never ever allowed in a hostname.
	// Note that any invalid chars are also handled, but these
	// are the ones that are *expected* to be seen, so we fast-path
	// them.
	nonHostChars=['%','/','?',';','#'].concat(autoEscape),hostEndingChars=['/','?','#'],hostnameMaxLen=255,hostnamePartPattern=/^[a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
	unsafeProtocol={'javascript':true,'javascript:':true}, // protocols that never have a hostname.
	hostlessProtocol={'javascript':true,'javascript:':true}, // protocols that always contain a // bit.
	slashedProtocol={'http':true,'https':true,'ftp':true,'gopher':true,'file':true,'http:':true,'https:':true,'ftp:':true,'gopher:':true,'file:':true},querystring=__webpack_require__(16);function urlParse(url,parseQueryString,slashesDenoteHost){if(url && isObject(url) && url instanceof Url)return url;var u=new Url();u.parse(url,parseQueryString,slashesDenoteHost);return u;}Url.prototype.parse = function(url,parseQueryString,slashesDenoteHost){if(!isString(url)){throw new TypeError("Parameter 'url' must be a string, not " + typeof url);}var rest=url; // trim before proceeding.
	// This is to support parse stuff like "  http://foo.com  \n"
	rest = rest.trim();var proto=protocolPattern.exec(rest);if(proto){proto = proto[0];var lowerProto=proto.toLowerCase();this.protocol = lowerProto;rest = rest.substr(proto.length);} // figure out if it's got a host
	// user@server is *always* interpreted as a hostname, and url
	// resolution will treat //foo/bar as host=foo,path=bar because that's
	// how the browser resolves relative URLs.
	if(slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes=rest.substr(0,2) === '//';if(slashes && !(proto && hostlessProtocol[proto])){rest = rest.substr(2);this.slashes = true;}}if(!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])){ // there's a hostname.
	// the first instance of /, ?, ;, or # ends the host.
	//
	// If there is an @ in the hostname, then non-host chars *are* allowed
	// to the left of the last @ sign, unless some host-ending character
	// comes *before* the @-sign.
	// URLs are obnoxious.
	//
	// ex:
	// http://a@b@c/ => user:a@b host:c
	// http://a@b?@c => user:a host:c path:/?@c
	// v0.12 TODO(isaacs): This is not quite how Chrome does things.
	// Review our test case against browsers more comprehensively.
	// find the first instance of any hostEndingChars
	var hostEnd=-1;for(var i=0;i < hostEndingChars.length;i++) {var hec=rest.indexOf(hostEndingChars[i]);if(hec !== -1 && (hostEnd === -1 || hec < hostEnd))hostEnd = hec;} // at this point, either we have an explicit point where the
	// auth portion cannot go past, or the last @ char is the decider.
	var auth,atSign;if(hostEnd === -1){ // atSign can be anywhere.
	atSign = rest.lastIndexOf('@');}else { // atSign must be in auth portion.
	// http://a@b/c@d => host:b auth:a path:/c@d
	atSign = rest.lastIndexOf('@',hostEnd);} // Now we have a portion which is definitely the auth.
	// Pull that off.
	if(atSign !== -1){auth = rest.slice(0,atSign);rest = rest.slice(atSign + 1);this.auth = decodeURIComponent(auth);} // the host is the remaining to the left of the first non-host char
	hostEnd = -1;for(var i=0;i < nonHostChars.length;i++) {var hec=rest.indexOf(nonHostChars[i]);if(hec !== -1 && (hostEnd === -1 || hec < hostEnd))hostEnd = hec;} // if we still have not hit it, then the entire thing is a host.
	if(hostEnd === -1)hostEnd = rest.length;this.host = rest.slice(0,hostEnd);rest = rest.slice(hostEnd); // pull out port.
	this.parseHost(); // we've indicated that there is a hostname,
	// so even if it's empty, it has to be present.
	this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
	// assume that it's an IPv6 address.
	var ipv6Hostname=this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.
	if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(var i=0,l=hostparts.length;i < l;i++) {var part=hostparts[i];if(!part)continue;if(!part.match(hostnamePartPattern)){var newpart='';for(var j=0,k=part.length;j < k;j++) {if(part.charCodeAt(j) > 127){ // we replace non-ASCII char with a temporary placeholder
	// we need this to make sure size of hostname is not
	// broken by replacing non-ASCII by nothing
	newpart += 'x';}else {newpart += part[j];}} // we test again with ASCII char only
	if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i);var notHost=hostparts.slice(i + 1);var bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2]);}if(notHost.length){rest = '/' + notHost.join('.') + rest;}this.hostname = validParts.join('.');break;}}}}if(this.hostname.length > hostnameMaxLen){this.hostname = '';}else { // hostnames are always lower case.
	this.hostname = this.hostname.toLowerCase();}if(!ipv6Hostname){ // IDNA Support: Returns a puny coded representation of "domain".
	// It only converts the part of the domain name that
	// has non ASCII characters. I.e. it dosent matter if
	// you call it with a domain that already is in ASCII.
	var domainArray=this.hostname.split('.');var newOut=[];for(var i=0;i < domainArray.length;++i) {var s=domainArray[i];newOut.push(s.match(/[^A-Za-z0-9_-]/)?'xn--' + punycode.encode(s):s);}this.hostname = newOut.join('.');}var p=this.port?':' + this.port:'';var h=this.hostname || '';this.host = h + p;this.href += this.host; // strip [ and ] from the hostname
	// the host field still retains them, though
	if(ipv6Hostname){this.hostname = this.hostname.substr(1,this.hostname.length - 2);if(rest[0] !== '/'){rest = '/' + rest;}}} // now rest is set to the post-host stuff.
	// chop off any delim chars.
	if(!unsafeProtocol[lowerProto]){ // First, make 100% sure that any "autoEscape" chars get
	// escaped, even if encodeURIComponent doesn't think they
	// need to be.
	for(var i=0,l=autoEscape.length;i < l;i++) {var ae=autoEscape[i];var esc=encodeURIComponent(ae);if(esc === ae){esc = escape(ae);}rest = rest.split(ae).join(esc);}} // chop off from the tail first.
	var hash=rest.indexOf('#');if(hash !== -1){ // got a fragment string.
	this.hash = rest.substr(hash);rest = rest.slice(0,hash);}var qm=rest.indexOf('?');if(qm !== -1){this.search = rest.substr(qm);this.query = rest.substr(qm + 1);if(parseQueryString){this.query = querystring.parse(this.query);}rest = rest.slice(0,qm);}else if(parseQueryString){ // no query string, but parseQueryString still requested
	this.search = '';this.query = {};}if(rest)this.pathname = rest;if(slashedProtocol[lowerProto] && this.hostname && !this.pathname){this.pathname = '/';} //to support http.request
	if(this.pathname || this.search){var p=this.pathname || '';var s=this.search || '';this.path = p + s;} // finally, reconstruct the href based on what has been validated.
	this.href = this.format();return this;}; // format a parsed object into a url string
	function urlFormat(obj){ // ensure it's an object, and not a string url.
	// If it's an obj, this is a no-op.
	// this way, you can call url_format() on strings
	// to clean up potentially wonky urls.
	if(isString(obj))obj = urlParse(obj);if(!(obj instanceof Url))return Url.prototype.format.call(obj);return obj.format();}Url.prototype.format = function(){var auth=this.auth || '';if(auth){auth = encodeURIComponent(auth);auth = auth.replace(/%3A/i,':');auth += '@';}var protocol=this.protocol || '',pathname=this.pathname || '',hash=this.hash || '',host=false,query='';if(this.host){host = auth + this.host;}else if(this.hostname){host = auth + (this.hostname.indexOf(':') === -1?this.hostname:'[' + this.hostname + ']');if(this.port){host += ':' + this.port;}}if(this.query && isObject(this.query) && Object.keys(this.query).length){query = querystring.stringify(this.query);}var search=this.search || query && '?' + query || '';if(protocol && protocol.substr(-1) !== ':')protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	// unless they had them to begin with.
	if(this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false){host = '//' + (host || '');if(pathname && pathname.charAt(0) !== '/')pathname = '/' + pathname;}else if(!host){host = '';}if(hash && hash.charAt(0) !== '#')hash = '#' + hash;if(search && search.charAt(0) !== '?')search = '?' + search;pathname = pathname.replace(/[?#]/g,function(match){return encodeURIComponent(match);});search = search.replace('#','%23');return protocol + host + pathname + search + hash;};function urlResolve(source,relative){return urlParse(source,false,true).resolve(relative);}Url.prototype.resolve = function(relative){return this.resolveObject(urlParse(relative,false,true)).format();};function urlResolveObject(source,relative){if(!source)return relative;return urlParse(source,false,true).resolveObject(relative);}Url.prototype.resolveObject = function(relative){if(isString(relative)){var rel=new Url();rel.parse(relative,false,true);relative = rel;}var result=new Url();Object.keys(this).forEach(function(k){result[k] = this[k];},this); // hash is always overridden, no matter what.
	// even href="" will remove it.
	result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.
	if(relative.href === ''){result.href = result.format();return result;} // hrefs like //foo/bar always cut to the protocol.
	if(relative.slashes && !relative.protocol){ // take everything except the protocol from relative
	Object.keys(relative).forEach(function(k){if(k !== 'protocol')result[k] = relative[k];}); //urlParse appends trailing / to urls like http://www.example.com
	if(slashedProtocol[result.protocol] && result.hostname && !result.pathname){result.path = result.pathname = '/';}result.href = result.format();return result;}if(relative.protocol && relative.protocol !== result.protocol){ // if it's a known url protocol, then changing
	// the protocol does weird things
	// first, if it's not file:, then we MUST have a host,
	// and if there was a path
	// to begin with, then we MUST have a path.
	// if it is file:, then the host is dropped,
	// because that's known to be hostless.
	// anything else is assumed to be absolute.
	if(!slashedProtocol[relative.protocol]){Object.keys(relative).forEach(function(k){result[k] = relative[k];});result.href = result.format();return result;}result.protocol = relative.protocol;if(!relative.host && !hostlessProtocol[relative.protocol]){var relPath=(relative.pathname || '').split('/');while(relPath.length && !(relative.host = relPath.shift()));if(!relative.host)relative.host = '';if(!relative.hostname)relative.hostname = '';if(relPath[0] !== '')relPath.unshift('');if(relPath.length < 2)relPath.unshift('');result.pathname = relPath.join('/');}else {result.pathname = relative.pathname;}result.search = relative.search;result.query = relative.query;result.host = relative.host || '';result.auth = relative.auth;result.hostname = relative.hostname || relative.host;result.port = relative.port; // to support http.request
	if(result.pathname || result.search){var p=result.pathname || '';var s=result.search || '';result.path = p + s;}result.slashes = result.slashes || relative.slashes;result.href = result.format();return result;}var isSourceAbs=result.pathname && result.pathname.charAt(0) === '/',isRelAbs=relative.host || relative.pathname && relative.pathname.charAt(0) === '/',mustEndAbs=isRelAbs || isSourceAbs || result.host && relative.pathname,removeAllDots=mustEndAbs,srcPath=result.pathname && result.pathname.split('/') || [],relPath=relative.pathname && relative.pathname.split('/') || [],psychotic=result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
	// links like ../.. should be able
	// to crawl up to the hostname, as well.  This is strange.
	// result.protocol has already been set by now.
	// Later on, put the first path part into the host field.
	if(psychotic){result.hostname = '';result.port = null;if(result.host){if(srcPath[0] === '')srcPath[0] = result.host;else srcPath.unshift(result.host);}result.host = '';if(relative.protocol){relative.hostname = null;relative.port = null;if(relative.host){if(relPath[0] === '')relPath[0] = relative.host;else relPath.unshift(relative.host);}relative.host = null;}mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');}if(isRelAbs){ // it's absolute.
	result.host = relative.host || relative.host === ''?relative.host:result.host;result.hostname = relative.hostname || relative.hostname === ''?relative.hostname:result.hostname;result.search = relative.search;result.query = relative.query;srcPath = relPath; // fall through to the dot-handling below.
	}else if(relPath.length){ // it's relative
	// throw away the existing file, and take the new path instead.
	if(!srcPath)srcPath = [];srcPath.pop();srcPath = srcPath.concat(relPath);result.search = relative.search;result.query = relative.query;}else if(!isNullOrUndefined(relative.search)){ // just pull out the search.
	// like href='?foo'.
	// Put this after the other two cases because it simplifies the booleans
	if(psychotic){result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
	//this especialy happens in cases like
	//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	var authInHost=result.host && result.host.indexOf('@') > 0?result.host.split('@'):false;if(authInHost){result.auth = authInHost.shift();result.host = result.hostname = authInHost.shift();}}result.search = relative.search;result.query = relative.query; //to support http.request
	if(!isNull(result.pathname) || !isNull(result.search)){result.path = (result.pathname?result.pathname:'') + (result.search?result.search:'');}result.href = result.format();return result;}if(!srcPath.length){ // no path at all.  easy.
	// we've already handled the other stuff above.
	result.pathname = null; //to support http.request
	if(result.search){result.path = '/' + result.search;}else {result.path = null;}result.href = result.format();return result;} // if a url ENDs in . or .., then it must get a trailing slash.
	// however, if it ends in anything else non-slashy,
	// then it must NOT get a trailing slash.
	var last=srcPath.slice(-1)[0];var hasTrailingSlash=(result.host || relative.host) && (last === '.' || last === '..') || last === ''; // strip single dots, resolve double dots to parent dir
	// if the path tries to go above the root, `up` ends up > 0
	var up=0;for(var i=srcPath.length;i >= 0;i--) {last = srcPath[i];if(last == '.'){srcPath.splice(i,1);}else if(last === '..'){srcPath.splice(i,1);up++;}else if(up){srcPath.splice(i,1);up--;}} // if the path is allowed to go above the root, restore leading ..s
	if(!mustEndAbs && !removeAllDots){for(;up--;up) {srcPath.unshift('..');}}if(mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')){srcPath.unshift('');}if(hasTrailingSlash && srcPath.join('/').substr(-1) !== '/'){srcPath.push('');}var isAbsolute=srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/'; // put the host back
	if(psychotic){result.hostname = result.host = isAbsolute?'':srcPath.length?srcPath.shift():''; //occationaly the auth can get stuck only in host
	//this especialy happens in cases like
	//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	var authInHost=result.host && result.host.indexOf('@') > 0?result.host.split('@'):false;if(authInHost){result.auth = authInHost.shift();result.host = result.hostname = authInHost.shift();}}mustEndAbs = mustEndAbs || result.host && srcPath.length;if(mustEndAbs && !isAbsolute){srcPath.unshift('');}if(!srcPath.length){result.pathname = null;result.path = null;}else {result.pathname = srcPath.join('/');} //to support request.http
	if(!isNull(result.pathname) || !isNull(result.search)){result.path = (result.pathname?result.pathname:'') + (result.search?result.search:'');}result.auth = relative.auth || result.auth;result.slashes = result.slashes || relative.slashes;result.href = result.format();return result;};Url.prototype.parseHost = function(){var host=this.host;var port=portPattern.exec(host);if(port){port = port[0];if(port !== ':'){this.port = port.substr(1);}host = host.substr(0,host.length - port.length);}if(host)this.hostname = host;};function isString(arg){return typeof arg === "string";}function isObject(arg){return typeof arg === 'object' && arg !== null;}function isNull(arg){return arg === null;}function isNullOrUndefined(arg){return arg == null;}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */'use strict';;(function(root){ /** Detect free variables */var freeExports=typeof exports == 'object' && exports && !exports.nodeType && exports;var freeModule=typeof module == 'object' && module && !module.nodeType && module;var freeGlobal=typeof global == 'object' && global;if(freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal){root = freeGlobal;} /**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */var punycode, /** Highest positive signed 32-bit float value */maxInt=2147483647, // aka. 0x7FFFFFFF or 2^31-1
	/** Bootstring parameters */base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128, // 0x80
	delimiter='-', // '\x2D'
	/** Regular expressions */regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	/** Error messages */errors={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'}, /** Convenience shortcuts */baseMinusTMin=base - tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode, /** Temporary variable */key; /*--------------------------------------------------------------------------*/ /**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */function error(type){throw RangeError(errors[type]);} /**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */function map(array,fn){var length=array.length;var result=[];while(length--) {result[length] = fn(array[length]);}return result;} /**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */function mapDomain(string,fn){var parts=string.split('@');var result='';if(parts.length > 1){ // In email addresses, only the domain name should be punycoded. Leave
	// the local part (i.e. everything up to `@`) intact.
	result = parts[0] + '@';string = parts[1];} // Avoid `split(regex)` for IE8 compatibility. See #17.
	string = string.replace(regexSeparators,'\x2E');var labels=string.split('.');var encoded=map(labels,fn).join('.');return result + encoded;} /**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter < length) {value = string.charCodeAt(counter++);if(value >= 0xD800 && value <= 0xDBFF && counter < length){ // high surrogate, and there is a next character
	extra = string.charCodeAt(counter++);if((extra & 0xFC00) == 0xDC00){ // low surrogate
	output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);}else { // unmatched surrogate; only append this code unit, in case the next
	// code unit is the high surrogate of a surrogate pair
	output.push(value);counter--;}}else {output.push(value);}}return output;} /**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */function ucs2encode(array){return map(array,function(value){var output='';if(value > 0xFFFF){value -= 0x10000;output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);value = 0xDC00 | value & 0x3FF;}output += stringFromCharCode(value);return output;}).join('');} /**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */function basicToDigit(codePoint){if(codePoint - 48 < 10){return codePoint - 22;}if(codePoint - 65 < 26){return codePoint - 65;}if(codePoint - 97 < 26){return codePoint - 97;}return base;} /**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */function digitToBasic(digit,flag){ //  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);} /**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */function adapt(delta,numPoints,firstTime){var k=0;delta = firstTime?floor(delta / damp):delta >> 1;delta += floor(delta / numPoints);for(; /* no initialization */delta > baseMinusTMin * tMax >> 1;k += base) {delta = floor(delta / baseMinusTMin);}return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));} /**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */function decode(input){ // Don't use UCS-2
	var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t, /** Cached calculation results */baseMinusT; // Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.
	basic = input.lastIndexOf(delimiter);if(basic < 0){basic = 0;}for(j = 0;j < basic;++j) { // if it's not a basic code point
	if(input.charCodeAt(j) >= 0x80){error('not-basic');}output.push(input.charCodeAt(j));} // Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.
	for(index = basic > 0?basic + 1:0;index < inputLength;)  /* no final expression */{ // `index` is the index of the next character to be consumed.
	// Decode a generalized variable-length integer into `delta`,
	// which gets added to `i`. The overflow checking is easier
	// if we increase `i` as we go, then subtract off its starting
	// value at the end to obtain `delta`.
	for(oldi = i,w = 1,k = base;; /* no condition */k += base) {if(index >= inputLength){error('invalid-input');}digit = basicToDigit(input.charCodeAt(index++));if(digit >= base || digit > floor((maxInt - i) / w)){error('overflow');}i += digit * w;t = k <= bias?tMin:k >= bias + tMax?tMax:k - bias;if(digit < t){break;}baseMinusT = base - t;if(w > floor(maxInt / baseMinusT)){error('overflow');}w *= baseMinusT;}out = output.length + 1;bias = adapt(i - oldi,out,oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
	// incrementing `n` each time, so we'll fix that now:
	if(floor(i / out) > maxInt - n){error('overflow');}n += floor(i / out);i %= out; // Insert `n` at position `i` of the output
	output.splice(i++,0,n);}return ucs2encode(output);} /**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[], /** `inputLength` will hold the number of code points in `input`. */inputLength, /** Cached calculation results */handledCPCountPlusOne,baseMinusT,qMinusT; // Convert the input in UCS-2 to Unicode
	input = ucs2decode(input); // Cache the length
	inputLength = input.length; // Initialize the state
	n = initialN;delta = 0;bias = initialBias; // Handle the basic code points
	for(j = 0;j < inputLength;++j) {currentValue = input[j];if(currentValue < 0x80){output.push(stringFromCharCode(currentValue));}}handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.
	// Finish the basic string - if it is not empty - with a delimiter
	if(basicLength){output.push(delimiter);} // Main encoding loop:
	while(handledCPCount < inputLength) { // All non-basic code points < n have been handled already. Find the next
	// larger one:
	for(m = maxInt,j = 0;j < inputLength;++j) {currentValue = input[j];if(currentValue >= n && currentValue < m){m = currentValue;}} // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
	// but guard against overflow
	handledCPCountPlusOne = handledCPCount + 1;if(m - n > floor((maxInt - delta) / handledCPCountPlusOne)){error('overflow');}delta += (m - n) * handledCPCountPlusOne;n = m;for(j = 0;j < inputLength;++j) {currentValue = input[j];if(currentValue < n && ++delta > maxInt){error('overflow');}if(currentValue == n){ // Represent delta as a generalized variable-length integer
	for(q = delta,k = base;; /* no condition */k += base) {t = k <= bias?tMin:k >= bias + tMax?tMax:k - bias;if(q < t){break;}qMinusT = q - t;baseMinusT = base - t;output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT,0)));q = floor(qMinusT / baseMinusT);}output.push(stringFromCharCode(digitToBasic(q,0)));bias = adapt(delta,handledCPCountPlusOne,handledCPCount == basicLength);delta = 0;++handledCPCount;}}++delta;++n;}return output.join('');} /**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string;});} /**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?'xn--' + encode(string):string;});} /*--------------------------------------------------------------------------*/ /** Define the public API */punycode = { /**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */'version':'1.3.2', /**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */'ucs2':{'decode':ucs2decode,'encode':ucs2encode},'decode':decode,'encode':encode,'toASCII':toASCII,'toUnicode':toUnicode}; /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return punycode;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(freeExports && freeModule){if(module.exports == freeExports){ // in Node.js or RingoJS v0.8.0+
	freeModule.exports = punycode;}else { // in Narwhal or RingoJS v0.7.0-
	for(key in punycode) {punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);}}}else { // in Rhino or a web browser
	root.punycode = punycode;}})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module), (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";module.exports = function(module){if(!module.webpackPolyfill){module.deprecate = function(){};module.paths = []; // module.parent = undefined by default
	module.children = [];module.webpackPolyfill = 1;}return module;};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.decode = exports.parse = __webpack_require__(17);exports.encode = exports.stringify = __webpack_require__(18);

/***/ },
/* 17 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict'; // If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}module.exports = function(qs,sep,eq,options){sep = sep || '&';eq = eq || '=';var obj={};if(typeof qs !== 'string' || qs.length === 0){return obj;}var regexp=/\+/g;qs = qs.split(sep);var maxKeys=1000;if(options && typeof options.maxKeys === 'number'){maxKeys = options.maxKeys;}var len=qs.length; // maxKeys <= 0 means that we should not limit keys count
	if(maxKeys > 0 && len > maxKeys){len = maxKeys;}for(var i=0;i < len;++i) {var x=qs[i].replace(regexp,'%20'),idx=x.indexOf(eq),kstr,vstr,k,v;if(idx >= 0){kstr = x.substr(0,idx);vstr = x.substr(idx + 1);}else {kstr = x;vstr = '';}k = decodeURIComponent(kstr);v = decodeURIComponent(vstr);if(!hasOwnProperty(obj,k)){obj[k] = v;}else if(Array.isArray(obj[k])){obj[k].push(v);}else {obj[k] = [obj[k],v];}}return obj;};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';var stringifyPrimitive=function stringifyPrimitive(v){switch(typeof v){case 'string':return v;case 'boolean':return v?'true':'false';case 'number':return isFinite(v)?v:'';default:return '';}};module.exports = function(obj,sep,eq,name){sep = sep || '&';eq = eq || '=';if(obj === null){obj = undefined;}if(typeof obj === 'object'){return Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k)) + eq;if(Array.isArray(obj[k])){return obj[k].map(function(v){return ks + encodeURIComponent(stringifyPrimitive(v));}).join(sep);}else {return ks + encodeURIComponent(stringifyPrimitive(obj[k]));}}).join(sep);}if(!name)return '';return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var http=module.exports;var EventEmitter=__webpack_require__(20).EventEmitter;var Request=__webpack_require__(21);var url=__webpack_require__(13);http.request = function(params,cb){if(typeof params === 'string'){params = url.parse(params);}if(!params)params = {};if(!params.host && !params.port){params.port = parseInt(window.location.port,10);}if(!params.host && params.hostname){params.host = params.hostname;}if(!params.protocol){if(params.scheme){params.protocol = params.scheme + ':';}else {params.protocol = window.location.protocol;}}if(!params.host){params.host = window.location.hostname || window.location.host;}if(/:/.test(params.host)){if(!params.port){params.port = params.host.split(':')[1];}params.host = params.host.split(':')[0];}if(!params.port)params.port = params.protocol == 'https:'?443:80;var req=new Request(new xhrHttp(),params);if(cb)req.on('response',cb);return req;};http.get = function(params,cb){params.method = 'GET';var req=http.request(params,cb);req.end();return req;};http.Agent = function(){};http.Agent.defaultMaxSockets = 4;var xhrHttp=(function(){if(typeof window === 'undefined'){throw new Error('no window object present');}else if(window.XMLHttpRequest){return window.XMLHttpRequest;}else if(window.ActiveXObject){var axs=['Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.3.0','Microsoft.XMLHTTP'];for(var i=0;i < axs.length;i++) {try{var ax=new window.ActiveXObject(axs[i]);return function(){if(ax){var ax_=ax;ax = null;return ax_;}else {return new window.ActiveXObject(axs[i]);}};}catch(e) {}}throw new Error('ajax not supported in this browser');}else {throw new Error('ajax not supported in this browser');}})();http.STATUS_CODES = {100:'Continue',101:'Switching Protocols',102:'Processing', // RFC 2518, obsoleted by RFC 4918
	200:'OK',201:'Created',202:'Accepted',203:'Non-Authoritative Information',204:'No Content',205:'Reset Content',206:'Partial Content',207:'Multi-Status', // RFC 4918
	300:'Multiple Choices',301:'Moved Permanently',302:'Moved Temporarily',303:'See Other',304:'Not Modified',305:'Use Proxy',307:'Temporary Redirect',400:'Bad Request',401:'Unauthorized',402:'Payment Required',403:'Forbidden',404:'Not Found',405:'Method Not Allowed',406:'Not Acceptable',407:'Proxy Authentication Required',408:'Request Time-out',409:'Conflict',410:'Gone',411:'Length Required',412:'Precondition Failed',413:'Request Entity Too Large',414:'Request-URI Too Large',415:'Unsupported Media Type',416:'Requested Range Not Satisfiable',417:'Expectation Failed',418:'I\'m a teapot', // RFC 2324
	422:'Unprocessable Entity', // RFC 4918
	423:'Locked', // RFC 4918
	424:'Failed Dependency', // RFC 4918
	425:'Unordered Collection', // RFC 4918
	426:'Upgrade Required', // RFC 2817
	428:'Precondition Required', // RFC 6585
	429:'Too Many Requests', // RFC 6585
	431:'Request Header Fields Too Large', // RFC 6585
	500:'Internal Server Error',501:'Not Implemented',502:'Bad Gateway',503:'Service Unavailable',504:'Gateway Time-out',505:'HTTP Version Not Supported',506:'Variant Also Negotiates', // RFC 2295
	507:'Insufficient Storage', // RFC 4918
	509:'Bandwidth Limit Exceeded',510:'Not Extended', // RFC 2774
	511:'Network Authentication Required' // RFC 6585
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';function EventEmitter(){this._events = this._events || {};this._maxListeners = this._maxListeners || undefined;}module.exports = EventEmitter; // Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;EventEmitter.prototype._events = undefined;EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n){if(!isNumber(n) || n < 0 || isNaN(n))throw TypeError('n must be a positive number');this._maxListeners = n;return this;};EventEmitter.prototype.emit = function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events = {}; // If there is no 'error' event listener then throw.
	if(type === 'error'){if(!this._events.error || isObject(this._events.error) && !this._events.error.length){er = arguments[1];if(er instanceof Error){throw er; // Unhandled 'error' event
	}throw TypeError('Uncaught, unspecified "error" event.');}}handler = this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){ // fast cases
	case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break; // slower
	default:len = arguments.length;args = new Array(len - 1);for(i = 1;i < len;i++) args[i - 1] = arguments[i];handler.apply(this,args);}}else if(isObject(handler)){len = arguments.length;args = new Array(len - 1);for(i = 1;i < len;i++) args[i - 1] = arguments[i];listeners = handler.slice();len = listeners.length;for(i = 0;i < len;i++) listeners[i].apply(this,args);}return true;};EventEmitter.prototype.addListener = function(type,listener){var m;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events)this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
	// adding it to the listeners, first emit "newListener".
	if(this._events.newListener)this.emit('newListener',type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
	this._events[type] = listener;else if(isObject(this._events[type])) // If we've already got an array, just append.
	this._events[type].push(listener);else  // Adding the second element, need to change to array.
	this._events[type] = [this._events[type],listener]; // Check for listener leak
	if(isObject(this._events[type]) && !this._events[type].warned){var m;if(!isUndefined(this._maxListeners)){m = this._maxListeners;}else {m = EventEmitter.defaultMaxListeners;}if(m && m > 0 && this._events[type].length > m){this._events[type].warned = true;console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.',this._events[type].length);if(typeof console.trace === 'function'){ // not supported in IE 10
	console.trace();}}}return this;};EventEmitter.prototype.on = EventEmitter.prototype.addListener;EventEmitter.prototype.once = function(type,listener){if(!isFunction(listener))throw TypeError('listener must be a function');var fired=false;function g(){this.removeListener(type,g);if(!fired){fired = true;listener.apply(this,arguments);}}g.listener = listener;this.on(type,g);return this;}; // emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events || !this._events[type])return this;list = this._events[type];length = list.length;position = -1;if(list === listener || isFunction(list.listener) && list.listener === listener){delete this._events[type];if(this._events.removeListener)this.emit('removeListener',type,listener);}else if(isObject(list)){for(i = length;i-- > 0;) {if(list[i] === listener || list[i].listener && list[i].listener === listener){position = i;break;}}if(position < 0)return this;if(list.length === 1){list.length = 0;delete this._events[type];}else {list.splice(position,1);}if(this._events.removeListener)this.emit('removeListener',type,listener);}return this;};EventEmitter.prototype.removeAllListeners = function(type){var key,listeners;if(!this._events)return this; // not listening for removeListener, no need to emit
	if(!this._events.removeListener){if(arguments.length === 0)this._events = {};else if(this._events[type])delete this._events[type];return this;} // emit removeListener for all listeners on all events
	if(arguments.length === 0){for(key in this._events) {if(key === 'removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events = {};return this;}listeners = this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners);}else { // LIFO order
	while(listeners.length) this.removeListener(type,listeners[listeners.length - 1]);}delete this._events[type];return this;};EventEmitter.prototype.listeners = function(type){var ret;if(!this._events || !this._events[type])ret = [];else if(isFunction(this._events[type]))ret = [this._events[type]];else ret = this._events[type].slice();return ret;};EventEmitter.listenerCount = function(emitter,type){var ret;if(!emitter._events || !emitter._events[type])ret = 0;else if(isFunction(emitter._events[type]))ret = 1;else ret = emitter._events[type].length;return ret;};function isFunction(arg){return typeof arg === 'function';}function isNumber(arg){return typeof arg === 'number';}function isObject(arg){return typeof arg === 'object' && arg !== null;}function isUndefined(arg){return arg === void 0;}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Stream=__webpack_require__(22);var Response=__webpack_require__(46);var Base64=__webpack_require__(50);var inherits=__webpack_require__(23);var Request=module.exports = function(xhr,params){var self=this;self.writable = true;self.xhr = xhr;self.body = [];self.uri = (params.protocol || 'http:') + '//' + params.host + (params.port?':' + params.port:'') + (params.path || '/');if(typeof params.withCredentials === 'undefined'){params.withCredentials = true;}try{xhr.withCredentials = params.withCredentials;}catch(e) {}if(params.responseType)try{xhr.responseType = params.responseType;}catch(e) {}xhr.open(params.method || 'GET',self.uri,true);xhr.onerror = function(event){self.emit('error',new Error('Network error'));};self._headers = {};if(params.headers){var keys=objectKeys(params.headers);for(var i=0;i < keys.length;i++) {var key=keys[i];if(!self.isSafeRequestHeader(key))continue;var value=params.headers[key];self.setHeader(key,value);}}if(params.auth){ //basic auth
	this.setHeader('Authorization','Basic ' + Base64.btoa(params.auth));}var res=new Response();res.on('close',function(){self.emit('close');});res.on('ready',function(){self.emit('response',res);});res.on('error',function(err){self.emit('error',err);});xhr.onreadystatechange = function(){ // Fix for IE9 bug
	// SCRIPT575: Could not complete the operation due to error c00c023f
	// It happens when a request is aborted, calling the success callback anyway with readyState === 4
	if(xhr.__aborted)return;res.handle(xhr);};};inherits(Request,Stream);Request.prototype.setHeader = function(key,value){this._headers[key.toLowerCase()] = value;};Request.prototype.getHeader = function(key){return this._headers[key.toLowerCase()];};Request.prototype.removeHeader = function(key){delete this._headers[key.toLowerCase()];};Request.prototype.write = function(s){this.body.push(s);};Request.prototype.destroy = function(s){this.xhr.__aborted = true;this.xhr.abort();this.emit('close');};Request.prototype.end = function(s){if(s !== undefined)this.body.push(s);var keys=objectKeys(this._headers);for(var i=0;i < keys.length;i++) {var key=keys[i];var value=this._headers[key];if(isArray(value)){for(var j=0;j < value.length;j++) {this.xhr.setRequestHeader(key,value[j]);}}else this.xhr.setRequestHeader(key,value);}if(this.body.length === 0){this.xhr.send('');}else if(typeof this.body[0] === 'string'){this.xhr.send(this.body.join(''));}else if(isArray(this.body[0])){var body=[];for(var i=0;i < this.body.length;i++) {body.push.apply(body,this.body[i]);}this.xhr.send(body);}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){var len=0;for(var i=0;i < this.body.length;i++) {len += this.body[i].length;}var body=new this.body[0].constructor(len);var k=0;for(var i=0;i < this.body.length;i++) {var b=this.body[i];for(var j=0;j < b.length;j++) {body[k++] = b[j];}}this.xhr.send(body);}else if(isXHR2Compatible(this.body[0])){this.xhr.send(this.body[0]);}else {var body='';for(var i=0;i < this.body.length;i++) {body += this.body[i].toString();}this.xhr.send(body);}}; // Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
	Request.unsafeHeaders = ["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];Request.prototype.isSafeRequestHeader = function(headerName){if(!headerName)return false;return indexOf(Request.unsafeHeaders,headerName.toLowerCase()) === -1;};var objectKeys=Object.keys || function(obj){var keys=[];for(var key in obj) keys.push(key);return keys;};var isArray=Array.isArray || function(xs){return Object.prototype.toString.call(xs) === '[object Array]';};var indexOf=function indexOf(xs,x){if(xs.indexOf)return xs.indexOf(x);for(var i=0;i < xs.length;i++) {if(xs[i] === x)return i;}return -1;};var isXHR2Compatible=function isXHR2Compatible(obj){if(typeof Blob !== 'undefined' && obj instanceof Blob)return true;if(typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer)return true;if(typeof FormData !== 'undefined' && obj instanceof FormData)return true;};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';module.exports = Stream;var EE=__webpack_require__(20).EventEmitter;var inherits=__webpack_require__(23);inherits(Stream,EE);Stream.Readable = __webpack_require__(24);Stream.Writable = __webpack_require__(42);Stream.Duplex = __webpack_require__(43);Stream.Transform = __webpack_require__(44);Stream.PassThrough = __webpack_require__(45); // Backwards-compat with node 0.4.x
	Stream.Stream = Stream; // old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.
	function Stream(){EE.call(this);}Stream.prototype.pipe = function(dest,options){var source=this;function ondata(chunk){if(dest.writable){if(false === dest.write(chunk) && source.pause){source.pause();}}}source.on('data',ondata);function ondrain(){if(source.readable && source.resume){source.resume();}}dest.on('drain',ondrain); // If the 'end' option is not supplied, dest.end() will be called when
	// source gets the 'end' or 'close' events.  Only dest.end() once.
	if(!dest._isStdio && (!options || options.end !== false)){source.on('end',onend);source.on('close',onclose);}var didOnEnd=false;function onend(){if(didOnEnd)return;didOnEnd = true;dest.end();}function onclose(){if(didOnEnd)return;didOnEnd = true;if(typeof dest.destroy === 'function')dest.destroy();} // don't leave dangling pipes when there are errors.
	function onerror(er){cleanup();if(EE.listenerCount(this,'error') === 0){throw er; // Unhandled stream error in pipe.
	}}source.on('error',onerror);dest.on('error',onerror); // remove all the event listeners that were added.
	function cleanup(){source.removeListener('data',ondata);dest.removeListener('drain',ondrain);source.removeListener('end',onend);source.removeListener('close',onclose);source.removeListener('error',onerror);dest.removeListener('error',onerror);source.removeListener('end',cleanup);source.removeListener('close',cleanup);dest.removeListener('close',cleanup);}source.on('end',cleanup);source.on('close',cleanup);dest.on('close',cleanup);dest.emit('pipe',source); // Allow for unix-like usage: A.pipe(B).pipe(C)
	return dest;};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';if(typeof Object.create === 'function'){ // implementation from standard node.js 'util' module
	module.exports = function inherits(ctor,superCtor){ctor.super_ = superCtor;ctor.prototype = Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else { // old school shim for old browsers
	module.exports = function inherits(ctor,superCtor){ctor.super_ = superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype = superCtor.prototype;ctor.prototype = new TempCtor();ctor.prototype.constructor = ctor;};}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';exports = module.exports = __webpack_require__(26);exports.Stream = __webpack_require__(22);exports.Readable = exports;exports.Writable = __webpack_require__(38);exports.Duplex = __webpack_require__(37);exports.Transform = __webpack_require__(40);exports.PassThrough = __webpack_require__(41);if(!process.browser && process.env.READABLE_STREAM === 'disable'){module.exports = __webpack_require__(22);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	// shim for using process in browser
	'use strict';var process=module.exports = {}; // cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout === 'function'){cachedSetTimeout = setTimeout;}else {cachedSetTimeout = defaultSetTimout;}}catch(e) {cachedSetTimeout = defaultSetTimout;}try{if(typeof clearTimeout === 'function'){cachedClearTimeout = clearTimeout;}else {cachedClearTimeout = defaultClearTimeout;}}catch(e) {cachedClearTimeout = defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout === setTimeout){ //normal enviroments in sane situations
	return setTimeout(fun,0);} // if setTimeout wasn't available but was latter defined
	if((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout){cachedSetTimeout = setTimeout;return setTimeout(fun,0);}try{ // when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedSetTimeout(fun,0);}catch(e) {try{ // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	return cachedSetTimeout.call(null,fun,0);}catch(e) { // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout === clearTimeout){ //normal enviroments in sane situations
	return clearTimeout(marker);} // if clearTimeout wasn't available but was latter defined
	if((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout){cachedClearTimeout = clearTimeout;return clearTimeout(marker);}try{ // when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedClearTimeout(marker);}catch(e) {try{ // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	return cachedClearTimeout.call(null,marker);}catch(e) { // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	// Some versions of I.E. have different rules for clearTimeout vs setTimeout
	return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining || !currentQueue){return;}draining = false;if(currentQueue.length){queue = currentQueue.concat(queue);}else {queueIndex = -1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining = true;var len=queue.length;while(len) {currentQueue = queue;queue = [];while(++queueIndex < len) {if(currentQueue){currentQueue[queueIndex].run();}}queueIndex = -1;len = queue.length;}currentQueue = null;draining = false;runClearTimeout(timeout);}process.nextTick = function(fun){var args=new Array(arguments.length - 1);if(arguments.length > 1){for(var i=1;i < arguments.length;i++) {args[i - 1] = arguments[i];}}queue.push(new Item(fun,args));if(queue.length === 1 && !draining){runTimeout(drainQueue);}}; // v8 likes predictible objects
	function Item(fun,array){this.fun = fun;this.array = array;}Item.prototype.run = function(){this.fun.apply(null,this.array);};process.title = 'browser';process.browser = true;process.env = {};process.argv = [];process.version = ''; // empty string to avoid regexp issues
	process.versions = {};function noop(){}process.on = noop;process.addListener = noop;process.once = noop;process.off = noop;process.removeListener = noop;process.removeAllListeners = noop;process.emit = noop;process.binding = function(name){throw new Error('process.binding is not supported');};process.cwd = function(){return '/';};process.chdir = function(dir){throw new Error('process.chdir is not supported');};process.umask = function(){return 0;};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';module.exports = Readable; /*<replacement>*/var isArray=__webpack_require__(27); /*</replacement>*/ /*<replacement>*/var Buffer=__webpack_require__(28).Buffer; /*</replacement>*/Readable.ReadableState = ReadableState;var EE=__webpack_require__(20).EventEmitter; /*<replacement>*/if(!EE.listenerCount)EE.listenerCount = function(emitter,type){return emitter.listeners(type).length;}; /*</replacement>*/var Stream=__webpack_require__(22); /*<replacement>*/var util=__webpack_require__(35);util.inherits = __webpack_require__(23); /*</replacement>*/var StringDecoder; /*<replacement>*/var debug=__webpack_require__(36);if(debug && debug.debuglog){debug = debug.debuglog('stream');}else {debug = function(){};} /*</replacement>*/util.inherits(Readable,Stream);function ReadableState(options,stream){var Duplex=__webpack_require__(37);options = options || {}; // the point at which it stops calling _read() to fill the buffer
	// Note: 0 is a valid value, means "don't call _read preemptively ever"
	var hwm=options.highWaterMark;var defaultHwm=options.objectMode?16:16 * 1024;this.highWaterMark = hwm || hwm === 0?hwm:defaultHwm; // cast to ints.
	this.highWaterMark = ~ ~this.highWaterMark;this.buffer = [];this.length = 0;this.pipes = null;this.pipesCount = 0;this.flowing = null;this.ended = false;this.endEmitted = false;this.reading = false; // a flag to be able to tell if the onwrite cb is called immediately,
	// or on a later tick.  We set this to true at first, because any
	// actions that shouldn't happen until "later" should generally also
	// not happen before the first write call.
	this.sync = true; // whenever we return null, then we set a flag to say
	// that we're awaiting a 'readable' event emission.
	this.needReadable = false;this.emittedReadable = false;this.readableListening = false; // object stream flag. Used to make read(n) ignore n and to
	// make all the buffer merging and length checks go away
	this.objectMode = !!options.objectMode;if(stream instanceof Duplex)this.objectMode = this.objectMode || !!options.readableObjectMode; // Crypto is kind of old and crusty.  Historically, its default string
	// encoding is 'binary' so we have to make this configurable.
	// Everything else in the universe uses 'utf8', though.
	this.defaultEncoding = options.defaultEncoding || 'utf8'; // when piping, we only care about 'readable' events that happen
	// after read()ing all the bytes and not getting any pushback.
	this.ranOut = false; // the number of writers that are awaiting a drain event in .pipe()s
	this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
	this.readingMore = false;this.decoder = null;this.encoding = null;if(options.encoding){if(!StringDecoder)StringDecoder = __webpack_require__(39).StringDecoder;this.decoder = new StringDecoder(options.encoding);this.encoding = options.encoding;}}function Readable(options){var Duplex=__webpack_require__(37);if(!(this instanceof Readable))return new Readable(options);this._readableState = new ReadableState(options,this); // legacy
	this.readable = true;Stream.call(this);} // Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk,encoding){var state=this._readableState;if(util.isString(chunk) && !state.objectMode){encoding = encoding || state.defaultEncoding;if(encoding !== state.encoding){chunk = new Buffer(chunk,encoding);encoding = '';}}return readableAddChunk(this,state,chunk,encoding,false);}; // Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk){var state=this._readableState;return readableAddChunk(this,state,chunk,'',true);};function readableAddChunk(stream,state,chunk,encoding,addToFront){var er=chunkInvalid(state,chunk);if(er){stream.emit('error',er);}else if(util.isNullOrUndefined(chunk)){state.reading = false;if(!state.ended)onEofChunk(stream,state);}else if(state.objectMode || chunk && chunk.length > 0){if(state.ended && !addToFront){var e=new Error('stream.push() after EOF');stream.emit('error',e);}else if(state.endEmitted && addToFront){var e=new Error('stream.unshift() after end event');stream.emit('error',e);}else {if(state.decoder && !addToFront && !encoding)chunk = state.decoder.write(chunk);if(!addToFront)state.reading = false; // if we want the data now, just emit it.
	if(state.flowing && state.length === 0 && !state.sync){stream.emit('data',chunk);stream.read(0);}else { // update the buffer info.
	state.length += state.objectMode?1:chunk.length;if(addToFront)state.buffer.unshift(chunk);else state.buffer.push(chunk);if(state.needReadable)emitReadable(stream);}maybeReadMore(stream,state);}}else if(!addToFront){state.reading = false;}return needMoreData(state);} // if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state){return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);} // backwards compatibility.
	Readable.prototype.setEncoding = function(enc){if(!StringDecoder)StringDecoder = __webpack_require__(39).StringDecoder;this._readableState.decoder = new StringDecoder(enc);this._readableState.encoding = enc;return this;}; // Don't raise the hwm > 128MB
	var MAX_HWM=0x800000;function roundUpToNextPowerOf2(n){if(n >= MAX_HWM){n = MAX_HWM;}else { // Get the next highest power of 2
	n--;for(var p=1;p < 32;p <<= 1) n |= n >> p;n++;}return n;}function howMuchToRead(n,state){if(state.length === 0 && state.ended)return 0;if(state.objectMode)return n === 0?0:1;if(isNaN(n) || util.isNull(n)){ // only flow one buffer at a time
	if(state.flowing && state.buffer.length)return state.buffer[0].length;else return state.length;}if(n <= 0)return 0; // If we're asking for more than the target buffer level,
	// then raise the water mark.  Bump up to the next highest
	// power of 2, to prevent increasing it excessively in tiny
	// amounts.
	if(n > state.highWaterMark)state.highWaterMark = roundUpToNextPowerOf2(n); // don't have that much.  return null, unless we've ended.
	if(n > state.length){if(!state.ended){state.needReadable = true;return 0;}else return state.length;}return n;} // you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n){debug('read',n);var state=this._readableState;var nOrig=n;if(!util.isNumber(n) || n > 0)state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
	// already have a bunch of data in the buffer, then just trigger
	// the 'readable' event and move on.
	if(n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)){debug('read: emitReadable',state.length,state.ended);if(state.length === 0 && state.ended)endReadable(this);else emitReadable(this);return null;}n = howMuchToRead(n,state); // if we've ended, and we're now clear, then finish it up.
	if(n === 0 && state.ended){if(state.length === 0)endReadable(this);return null;} // All the actual chunk generation logic needs to be
	// *below* the call to _read.  The reason is that in certain
	// synthetic stream cases, such as passthrough streams, _read
	// may be a completely synchronous operation which may change
	// the state of the read buffer, providing enough data when
	// before there was *not* enough.
	//
	// So, the steps are:
	// 1. Figure out what the state of things will be after we do
	// a read from the buffer.
	//
	// 2. If that resulting state will trigger a _read, then call _read.
	// Note that this may be asynchronous, or synchronous.  Yes, it is
	// deeply ugly to write APIs this way, but that still doesn't mean
	// that the Readable class should behave improperly, as streams are
	// designed to be sync/async agnostic.
	// Take note if the _read call is sync or async (ie, if the read call
	// has returned yet), so that we know whether or not it's safe to emit
	// 'readable' etc.
	//
	// 3. Actually pull the requested chunks out of the buffer and return.
	// if we need a readable event, then we need to do some reading.
	var doRead=state.needReadable;debug('need readable',doRead); // if we currently have less than the highWaterMark, then also read some
	if(state.length === 0 || state.length - n < state.highWaterMark){doRead = true;debug('length less than watermark',doRead);} // however, if we've ended, then there's no point, and if we're already
	// reading, then it's unnecessary.
	if(state.ended || state.reading){doRead = false;debug('reading or ended',doRead);}if(doRead){debug('do read');state.reading = true;state.sync = true; // if the length is currently zero, then we *need* a readable event.
	if(state.length === 0)state.needReadable = true; // call internal read method
	this._read(state.highWaterMark);state.sync = false;} // If _read pushed data synchronously, then `reading` will be false,
	// and we need to re-evaluate how much data we can return to the user.
	if(doRead && !state.reading)n = howMuchToRead(nOrig,state);var ret;if(n > 0)ret = fromList(n,state);else ret = null;if(util.isNull(ret)){state.needReadable = true;n = 0;}state.length -= n; // If we have nothing in the buffer, then we want to know
	// as soon as we *do* get something into the buffer.
	if(state.length === 0 && !state.ended)state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
	if(nOrig !== n && state.ended && state.length === 0)endReadable(this);if(!util.isNull(ret))this.emit('data',ret);return ret;};function chunkInvalid(state,chunk){var er=null;if(!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode){er = new TypeError('Invalid non-string/buffer chunk');}return er;}function onEofChunk(stream,state){if(state.decoder && !state.ended){var chunk=state.decoder.end();if(chunk && chunk.length){state.buffer.push(chunk);state.length += state.objectMode?1:chunk.length;}}state.ended = true; // emit 'readable' now to make sure it gets picked up.
	emitReadable(stream);} // Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream){var state=stream._readableState;state.needReadable = false;if(!state.emittedReadable){debug('emitReadable',state.flowing);state.emittedReadable = true;if(state.sync)process.nextTick(function(){emitReadable_(stream);});else emitReadable_(stream);}}function emitReadable_(stream){debug('emit readable');stream.emit('readable');flow(stream);} // at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream,state){if(!state.readingMore){state.readingMore = true;process.nextTick(function(){maybeReadMore_(stream,state);});}}function maybeReadMore_(stream,state){var len=state.length;while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {debug('maybeReadMore read 0');stream.read(0);if(len === state.length) // didn't get any data, stop spinning.
	break;else len = state.length;}state.readingMore = false;} // abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n){this.emit('error',new Error('not implemented'));};Readable.prototype.pipe = function(dest,pipeOpts){var src=this;var state=this._readableState;switch(state.pipesCount){case 0:state.pipes = dest;break;case 1:state.pipes = [state.pipes,dest];break;default:state.pipes.push(dest);break;}state.pipesCount += 1;debug('pipe count=%d opts=%j',state.pipesCount,pipeOpts);var doEnd=(!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;var endFn=doEnd?onend:cleanup;if(state.endEmitted)process.nextTick(endFn);else src.once('end',endFn);dest.on('unpipe',onunpipe);function onunpipe(readable){debug('onunpipe');if(readable === src){cleanup();}}function onend(){debug('onend');dest.end();} // when the dest drains, it reduces the awaitDrain counter
	// on the source.  This would be more elegant with a .once()
	// handler in flow(), but adding and removing repeatedly is
	// too slow.
	var ondrain=pipeOnDrain(src);dest.on('drain',ondrain);function cleanup(){debug('cleanup'); // cleanup event handlers once the pipe is broken
	dest.removeListener('close',onclose);dest.removeListener('finish',onfinish);dest.removeListener('drain',ondrain);dest.removeListener('error',onerror);dest.removeListener('unpipe',onunpipe);src.removeListener('end',onend);src.removeListener('end',cleanup);src.removeListener('data',ondata); // if the reader is waiting for a drain event from this
	// specific writer, then it would cause it to never start
	// flowing again.
	// So, if this is awaiting a drain, then we just call it now.
	// If we don't know, then assume that we are waiting for one.
	if(state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))ondrain();}src.on('data',ondata);function ondata(chunk){debug('ondata');var ret=dest.write(chunk);if(false === ret){debug('false write response, pause',src._readableState.awaitDrain);src._readableState.awaitDrain++;src.pause();}} // if the dest has an error, then stop piping into it.
	// however, don't suppress the throwing behavior for this.
	function onerror(er){debug('onerror',er);unpipe();dest.removeListener('error',onerror);if(EE.listenerCount(dest,'error') === 0)dest.emit('error',er);} // This is a brutally ugly hack to make sure that our error handler
	// is attached before any userland ones.  NEVER DO THIS.
	if(!dest._events || !dest._events.error)dest.on('error',onerror);else if(isArray(dest._events.error))dest._events.error.unshift(onerror);else dest._events.error = [onerror,dest._events.error]; // Both close and finish should trigger unpipe, but only once.
	function onclose(){dest.removeListener('finish',onfinish);unpipe();}dest.once('close',onclose);function onfinish(){debug('onfinish');dest.removeListener('close',onclose);unpipe();}dest.once('finish',onfinish);function unpipe(){debug('unpipe');src.unpipe(dest);} // tell the dest that it's being piped to
	dest.emit('pipe',src); // start the flow if it hasn't been started already.
	if(!state.flowing){debug('pipe resume');src.resume();}return dest;};function pipeOnDrain(src){return function(){var state=src._readableState;debug('pipeOnDrain',state.awaitDrain);if(state.awaitDrain)state.awaitDrain--;if(state.awaitDrain === 0 && EE.listenerCount(src,'data')){state.flowing = true;flow(src);}};}Readable.prototype.unpipe = function(dest){var state=this._readableState; // if we're not piping anywhere, then do nothing.
	if(state.pipesCount === 0)return this; // just one destination.  most common case.
	if(state.pipesCount === 1){ // passed in one, but it's not the right one.
	if(dest && dest !== state.pipes)return this;if(!dest)dest = state.pipes; // got a match.
	state.pipes = null;state.pipesCount = 0;state.flowing = false;if(dest)dest.emit('unpipe',this);return this;} // slow case. multiple pipe destinations.
	if(!dest){ // remove all.
	var dests=state.pipes;var len=state.pipesCount;state.pipes = null;state.pipesCount = 0;state.flowing = false;for(var i=0;i < len;i++) dests[i].emit('unpipe',this);return this;} // try to find the right one.
	var i=indexOf(state.pipes,dest);if(i === -1)return this;state.pipes.splice(i,1);state.pipesCount -= 1;if(state.pipesCount === 1)state.pipes = state.pipes[0];dest.emit('unpipe',this);return this;}; // set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev,fn){var res=Stream.prototype.on.call(this,ev,fn); // If listening to data, and it has not explicitly been paused,
	// then call resume to start the flow of data on the next tick.
	if(ev === 'data' && false !== this._readableState.flowing){this.resume();}if(ev === 'readable' && this.readable){var state=this._readableState;if(!state.readableListening){state.readableListening = true;state.emittedReadable = false;state.needReadable = true;if(!state.reading){var self=this;process.nextTick(function(){debug('readable nexttick read 0');self.read(0);});}else if(state.length){emitReadable(this,state);}}}return res;};Readable.prototype.addListener = Readable.prototype.on; // pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function(){var state=this._readableState;if(!state.flowing){debug('resume');state.flowing = true;if(!state.reading){debug('resume read 0');this.read(0);}resume(this,state);}return this;};function resume(stream,state){if(!state.resumeScheduled){state.resumeScheduled = true;process.nextTick(function(){resume_(stream,state);});}}function resume_(stream,state){state.resumeScheduled = false;stream.emit('resume');flow(stream);if(state.flowing && !state.reading)stream.read(0);}Readable.prototype.pause = function(){debug('call pause flowing=%j',this._readableState.flowing);if(false !== this._readableState.flowing){debug('pause');this._readableState.flowing = false;this.emit('pause');}return this;};function flow(stream){var state=stream._readableState;debug('flow',state.flowing);if(state.flowing){do {var chunk=stream.read();}while(null !== chunk && state.flowing);}} // wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream){var state=this._readableState;var paused=false;var self=this;stream.on('end',function(){debug('wrapped end');if(state.decoder && !state.ended){var chunk=state.decoder.end();if(chunk && chunk.length)self.push(chunk);}self.push(null);});stream.on('data',function(chunk){debug('wrapped data');if(state.decoder)chunk = state.decoder.write(chunk);if(!chunk || !state.objectMode && !chunk.length)return;var ret=self.push(chunk);if(!ret){paused = true;stream.pause();}}); // proxy all the other methods.
	// important when wrapping filters and duplexes.
	for(var i in stream) {if(util.isFunction(stream[i]) && util.isUndefined(this[i])){this[i] = (function(method){return function(){return stream[method].apply(stream,arguments);};})(i);}} // proxy certain important events.
	var events=['error','close','destroy','pause','resume'];forEach(events,function(ev){stream.on(ev,self.emit.bind(self,ev));}); // when we try to consume some more bytes, simply unpause the
	// underlying stream.
	self._read = function(n){debug('wrapped _read',n);if(paused){paused = false;stream.resume();}};return self;}; // exposed for testing purposes only.
	Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n,state){var list=state.buffer;var length=state.length;var stringMode=!!state.decoder;var objectMode=!!state.objectMode;var ret; // nothing in the list, definitely empty.
	if(list.length === 0)return null;if(length === 0)ret = null;else if(objectMode)ret = list.shift();else if(!n || n >= length){ // read it all, truncate the array.
	if(stringMode)ret = list.join('');else ret = Buffer.concat(list,length);list.length = 0;}else { // read just some of it.
	if(n < list[0].length){ // just take a part of the first list item.
	// slice is the same for buffers and strings.
	var buf=list[0];ret = buf.slice(0,n);list[0] = buf.slice(n);}else if(n === list[0].length){ // first list is a perfect match
	ret = list.shift();}else { // complex case.
	// we have enough to cover it, but it spans past the first buffer.
	if(stringMode)ret = '';else ret = new Buffer(n);var c=0;for(var i=0,l=list.length;i < l && c < n;i++) {var buf=list[0];var cpy=Math.min(n - c,buf.length);if(stringMode)ret += buf.slice(0,cpy);else buf.copy(ret,c,0,cpy);if(cpy < buf.length)list[0] = buf.slice(cpy);else list.shift();c += cpy;}}}return ret;}function endReadable(stream){var state=stream._readableState; // If we get here before consuming all the bytes, then that is a
	// bug in node.  Should never happen.
	if(state.length > 0)throw new Error('endReadable called on non-empty stream');if(!state.endEmitted){state.ended = true;process.nextTick(function(){ // Check that we didn't get one last unshift.
	if(!state.endEmitted && state.length === 0){state.endEmitted = true;stream.readable = false;stream.emit('end');}});}}function forEach(xs,f){for(var i=0,l=xs.length;i < l;i++) {f(xs[i],i);}}function indexOf(xs,x){for(var i=0,l=xs.length;i < l;i++) {if(xs[i] === x)return i;}return -1;}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';module.exports = Array.isArray || function(arr){return Object.prototype.toString.call(arr) == '[object Array]';};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */'use strict';var base64=__webpack_require__(33);var ieee754=__webpack_require__(31);var isArray=__webpack_require__(34);exports.Buffer = Buffer;exports.SlowBuffer = Buffer;exports.INSPECT_MAX_BYTES = 50;Buffer.poolSize = 8192; // not used by this implementation
	var kMaxLength=0x3fffffff; /**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */Buffer.TYPED_ARRAY_SUPPORT = (function(){try{var buf=new ArrayBuffer(0);var arr=new Uint8Array(buf);arr.foo = function(){return 42;};return 42 === arr.foo() &&  // typed array instances can be augmented
	typeof arr.subarray === 'function' &&  // chrome 9-10 lack `subarray`
	new Uint8Array(1).subarray(1,1).byteLength === 0; // ie10 has broken `subarray`
	}catch(e) {return false;}})(); /**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */function Buffer(subject,encoding,noZero){if(!(this instanceof Buffer))return new Buffer(subject,encoding,noZero);var type=typeof subject; // Find the length
	var length;if(type === 'number')length = subject > 0?subject >>> 0:0;else if(type === 'string'){if(encoding === 'base64')subject = base64clean(subject);length = Buffer.byteLength(subject,encoding);}else if(type === 'object' && subject !== null){ // assume object is array-like
	if(subject.type === 'Buffer' && isArray(subject.data))subject = subject.data;length = +subject.length > 0?Math.floor(+subject.length):0;}else throw new TypeError('must start with number, buffer, array or string');if(this.length > kMaxLength)throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength.toString(16) + ' bytes');var buf;if(Buffer.TYPED_ARRAY_SUPPORT){ // Preferred: Return an augmented `Uint8Array` instance for best performance
	buf = Buffer._augment(new Uint8Array(length));}else { // Fallback: Return THIS instance of Buffer (created by `new`)
	buf = this;buf.length = length;buf._isBuffer = true;}var i;if(Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number'){ // Speed optimization -- use set if we're copying from a typed array
	buf._set(subject);}else if(isArrayish(subject)){ // Treat array-ish objects as a byte array
	if(Buffer.isBuffer(subject)){for(i = 0;i < length;i++) buf[i] = subject.readUInt8(i);}else {for(i = 0;i < length;i++) buf[i] = (subject[i] % 256 + 256) % 256;}}else if(type === 'string'){buf.write(subject,0,encoding);}else if(type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero){for(i = 0;i < length;i++) {buf[i] = 0;}}return buf;}Buffer.isBuffer = function(b){return !!(b != null && b._isBuffer);};Buffer.compare = function(a,b){if(!Buffer.isBuffer(a) || !Buffer.isBuffer(b))throw new TypeError('Arguments must be Buffers');var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i < len && a[i] === b[i];i++) {}if(i !== len){x = a[i];y = b[i];}if(x < y)return -1;if(y < x)return 1;return 0;};Buffer.isEncoding = function(encoding){switch(String(encoding).toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'raw':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return true;default:return false;}};Buffer.concat = function(list,totalLength){if(!isArray(list))throw new TypeError('Usage: Buffer.concat(list[, length])');if(list.length === 0){return new Buffer(0);}else if(list.length === 1){return list[0];}var i;if(totalLength === undefined){totalLength = 0;for(i = 0;i < list.length;i++) {totalLength += list[i].length;}}var buf=new Buffer(totalLength);var pos=0;for(i = 0;i < list.length;i++) {var item=list[i];item.copy(buf,pos);pos += item.length;}return buf;};Buffer.byteLength = function(str,encoding){var ret;str = str + '';switch(encoding || 'utf8'){case 'ascii':case 'binary':case 'raw':ret = str.length;break;case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':ret = str.length * 2;break;case 'hex':ret = str.length >>> 1;break;case 'utf8':case 'utf-8':ret = utf8ToBytes(str).length;break;case 'base64':ret = base64ToBytes(str).length;break;default:ret = str.length;}return ret;}; // pre-set for values that may exist in the future
	Buffer.prototype.length = undefined;Buffer.prototype.parent = undefined; // toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function(encoding,start,end){var loweredCase=false;start = start >>> 0;end = end === undefined || end === Infinity?this.length:end >>> 0;if(!encoding)encoding = 'utf8';if(start < 0)start = 0;if(end > this.length)end = this.length;if(end <= start)return '';while(true) {switch(encoding){case 'hex':return hexSlice(this,start,end);case 'utf8':case 'utf-8':return utf8Slice(this,start,end);case 'ascii':return asciiSlice(this,start,end);case 'binary':return binarySlice(this,start,end);case 'base64':return base64Slice(this,start,end);case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: ' + encoding);encoding = (encoding + '').toLowerCase();loweredCase = true;}}};Buffer.prototype.equals = function(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');return Buffer.compare(this,b) === 0;};Buffer.prototype.inspect = function(){var str='';var max=exports.INSPECT_MAX_BYTES;if(this.length > 0){str = this.toString('hex',0,max).match(/.{2}/g).join(' ');if(this.length > max)str += ' ... ';}return '<Buffer ' + str + '>';};Buffer.prototype.compare = function(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');return Buffer.compare(this,b);}; // `get` will be removed in Node 0.13+
	Buffer.prototype.get = function(offset){console.log('.get() is deprecated. Access using array indexes instead.');return this.readUInt8(offset);}; // `set` will be removed in Node 0.13+
	Buffer.prototype.set = function(v,offset){console.log('.set() is deprecated. Access using array indexes instead.');return this.writeUInt8(v,offset);};function hexWrite(buf,string,offset,length){offset = Number(offset) || 0;var remaining=buf.length - offset;if(!length){length = remaining;}else {length = Number(length);if(length > remaining){length = remaining;}} // must be an even number of digits
	var strLen=string.length;if(strLen % 2 !== 0)throw new Error('Invalid hex string');if(length > strLen / 2){length = strLen / 2;}for(var i=0;i < length;i++) {var byte=parseInt(string.substr(i * 2,2),16);if(isNaN(byte))throw new Error('Invalid hex string');buf[offset + i] = byte;}return i;}function utf8Write(buf,string,offset,length){var charsWritten=blitBuffer(utf8ToBytes(string),buf,offset,length);return charsWritten;}function asciiWrite(buf,string,offset,length){var charsWritten=blitBuffer(asciiToBytes(string),buf,offset,length);return charsWritten;}function binaryWrite(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){var charsWritten=blitBuffer(base64ToBytes(string),buf,offset,length);return charsWritten;}function utf16leWrite(buf,string,offset,length){var charsWritten=blitBuffer(utf16leToBytes(string),buf,offset,length,2);return charsWritten;}Buffer.prototype.write = function(string,offset,length,encoding){ // Support both (string, offset, length, encoding)
	// and the legacy (string, encoding, offset, length)
	if(isFinite(offset)){if(!isFinite(length)){encoding = length;length = undefined;}}else { // legacy
	var swap=encoding;encoding = offset;offset = length;length = swap;}offset = Number(offset) || 0;var remaining=this.length - offset;if(!length){length = remaining;}else {length = Number(length);if(length > remaining){length = remaining;}}encoding = String(encoding || 'utf8').toLowerCase();var ret;switch(encoding){case 'hex':ret = hexWrite(this,string,offset,length);break;case 'utf8':case 'utf-8':ret = utf8Write(this,string,offset,length);break;case 'ascii':ret = asciiWrite(this,string,offset,length);break;case 'binary':ret = binaryWrite(this,string,offset,length);break;case 'base64':ret = base64Write(this,string,offset,length);break;case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':ret = utf16leWrite(this,string,offset,length);break;default:throw new TypeError('Unknown encoding: ' + encoding);}return ret;};Buffer.prototype.toJSON = function(){return {type:'Buffer',data:Array.prototype.slice.call(this._arr || this,0)};};function base64Slice(buf,start,end){if(start === 0 && end === buf.length){return base64.fromByteArray(buf);}else {return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){var res='';var tmp='';end = Math.min(buf.length,end);for(var i=start;i < end;i++) {if(buf[i] <= 0x7F){res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);tmp = '';}else {tmp += '%' + buf[i].toString(16);}}return res + decodeUtf8Char(tmp);}function asciiSlice(buf,start,end){var ret='';end = Math.min(buf.length,end);for(var i=start;i < end;i++) {ret += String.fromCharCode(buf[i]);}return ret;}function binarySlice(buf,start,end){return asciiSlice(buf,start,end);}function hexSlice(buf,start,end){var len=buf.length;if(!start || start < 0)start = 0;if(!end || end < 0 || end > len)end = len;var out='';for(var i=start;i < end;i++) {out += toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i < bytes.length;i += 2) {res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);}return res;}Buffer.prototype.slice = function(start,end){var len=this.length;start = ~ ~start;end = end === undefined?len:~ ~end;if(start < 0){start += len;if(start < 0)start = 0;}else if(start > len){start = len;}if(end < 0){end += len;if(end < 0)end = 0;}else if(end > len){end = len;}if(end < start)end = start;if(Buffer.TYPED_ARRAY_SUPPORT){return Buffer._augment(this.subarray(start,end));}else {var sliceLen=end - start;var newBuf=new Buffer(sliceLen,undefined,true);for(var i=0;i < sliceLen;i++) {newBuf[i] = this[i + start];}return newBuf;}}; /*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */function checkOffset(offset,ext,length){if(offset % 1 !== 0 || offset < 0)throw new RangeError('offset is not uint');if(offset + ext > length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUInt8 = function(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE = function(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset] | this[offset + 1] << 8;};Buffer.prototype.readUInt16BE = function(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset] << 8 | this[offset + 1];};Buffer.prototype.readUInt32LE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;};Buffer.prototype.readUInt32BE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);};Buffer.prototype.readInt8 = function(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset] & 0x80))return this[offset];return (0xff - this[offset] + 1) * -1;};Buffer.prototype.readInt16LE = function(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset] | this[offset + 1] << 8;return val & 0x8000?val | 0xFFFF0000:val;};Buffer.prototype.readInt16BE = function(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset + 1] | this[offset] << 8;return val & 0x8000?val | 0xFFFF0000:val;};Buffer.prototype.readInt32LE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;};Buffer.prototype.readInt32BE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];};Buffer.prototype.readFloatLE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE = function(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE = function(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE = function(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('buffer must be a Buffer instance');if(value > max || value < min)throw new TypeError('value is out of bounds');if(offset + ext > buf.length)throw new TypeError('index out of range');}Buffer.prototype.writeUInt8 = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value = Math.floor(value);this[offset] = value;return offset + 1;};function objectWriteUInt16(buf,value,offset,littleEndian){if(value < 0)value = 0xffff + value + 1;for(var i=0,j=Math.min(buf.length - offset,2);i < j;i++) {buf[offset + i] = (value & 0xff << 8 * (littleEndian?i:1 - i)) >>> (littleEndian?i:1 - i) * 8;}}Buffer.prototype.writeUInt16LE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value;this[offset + 1] = value >>> 8;}else objectWriteUInt16(this,value,offset,true);return offset + 2;};Buffer.prototype.writeUInt16BE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 8;this[offset + 1] = value;}else objectWriteUInt16(this,value,offset,false);return offset + 2;};function objectWriteUInt32(buf,value,offset,littleEndian){if(value < 0)value = 0xffffffff + value + 1;for(var i=0,j=Math.min(buf.length - offset,4);i < j;i++) {buf[offset + i] = value >>> (littleEndian?i:3 - i) * 8 & 0xff;}}Buffer.prototype.writeUInt32LE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset + 3] = value >>> 24;this[offset + 2] = value >>> 16;this[offset + 1] = value >>> 8;this[offset] = value;}else objectWriteUInt32(this,value,offset,true);return offset + 4;};Buffer.prototype.writeUInt32BE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 24;this[offset + 1] = value >>> 16;this[offset + 2] = value >>> 8;this[offset + 3] = value;}else objectWriteUInt32(this,value,offset,false);return offset + 4;};Buffer.prototype.writeInt8 = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(!Buffer.TYPED_ARRAY_SUPPORT)value = Math.floor(value);if(value < 0)value = 0xff + value + 1;this[offset] = value;return offset + 1;};Buffer.prototype.writeInt16LE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value;this[offset + 1] = value >>> 8;}else objectWriteUInt16(this,value,offset,true);return offset + 2;};Buffer.prototype.writeInt16BE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 8;this[offset + 1] = value;}else objectWriteUInt16(this,value,offset,false);return offset + 2;};Buffer.prototype.writeInt32LE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value;this[offset + 1] = value >>> 8;this[offset + 2] = value >>> 16;this[offset + 3] = value >>> 24;}else objectWriteUInt32(this,value,offset,true);return offset + 4;};Buffer.prototype.writeInt32BE = function(value,offset,noAssert){value = +value;offset = offset >>> 0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value < 0)value = 0xffffffff + value + 1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 24;this[offset + 1] = value >>> 16;this[offset + 2] = value >>> 8;this[offset + 3] = value;}else objectWriteUInt32(this,value,offset,false);return offset + 4;};function checkIEEE754(buf,value,offset,ext,max,min){if(value > max || value < min)throw new TypeError('value is out of bounds');if(offset + ext > buf.length)throw new TypeError('index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert)checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);ieee754.write(buf,value,offset,littleEndian,23,4);return offset + 4;}Buffer.prototype.writeFloatLE = function(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE = function(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert)checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);ieee754.write(buf,value,offset,littleEndian,52,8);return offset + 8;}Buffer.prototype.writeDoubleLE = function(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE = function(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function(target,target_start,start,end){var source=this;if(!start)start = 0;if(!end && end !== 0)end = this.length;if(!target_start)target_start = 0; // Copy 0 bytes; we're done
	if(end === start)return;if(target.length === 0 || source.length === 0)return; // Fatal error conditions
	if(end < start)throw new TypeError('sourceEnd < sourceStart');if(target_start < 0 || target_start >= target.length)throw new TypeError('targetStart out of bounds');if(start < 0 || start >= source.length)throw new TypeError('sourceStart out of bounds');if(end < 0 || end > source.length)throw new TypeError('sourceEnd out of bounds'); // Are we oob?
	if(end > this.length)end = this.length;if(target.length - target_start < end - start)end = target.length - target_start + start;var len=end - start;if(len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i < len;i++) {target[i + target_start] = this[i + start];}}else {target._set(this.subarray(start,start + len),target_start);}}; // fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function(value,start,end){if(!value)value = 0;if(!start)start = 0;if(!end)end = this.length;if(end < start)throw new TypeError('end < start'); // Fill 0 bytes; we're done
	if(end === start)return;if(this.length === 0)return;if(start < 0 || start >= this.length)throw new TypeError('start out of bounds');if(end < 0 || end > this.length)throw new TypeError('end out of bounds');var i;if(typeof value === 'number'){for(i = start;i < end;i++) {this[i] = value;}}else {var bytes=utf8ToBytes(value.toString());var len=bytes.length;for(i = start;i < end;i++) {this[i] = bytes[i % len];}}return this;}; /**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */Buffer.prototype.toArrayBuffer = function(){if(typeof Uint8Array !== 'undefined'){if(Buffer.TYPED_ARRAY_SUPPORT){return new Buffer(this).buffer;}else {var buf=new Uint8Array(this.length);for(var i=0,len=buf.length;i < len;i += 1) {buf[i] = this[i];}return buf.buffer;}}else {throw new TypeError('Buffer.toArrayBuffer not supported in this browser');}}; // HELPER FUNCTIONS
	// ================
	var BP=Buffer.prototype; /**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */Buffer._augment = function(arr){arr.constructor = Buffer;arr._isBuffer = true; // save reference to original Uint8Array get/set methods before overwriting
	arr._get = arr.get;arr._set = arr.set; // deprecated, will be removed in node 0.13+
	arr.get = BP.get;arr.set = BP.set;arr.write = BP.write;arr.toString = BP.toString;arr.toLocaleString = BP.toString;arr.toJSON = BP.toJSON;arr.equals = BP.equals;arr.compare = BP.compare;arr.copy = BP.copy;arr.slice = BP.slice;arr.readUInt8 = BP.readUInt8;arr.readUInt16LE = BP.readUInt16LE;arr.readUInt16BE = BP.readUInt16BE;arr.readUInt32LE = BP.readUInt32LE;arr.readUInt32BE = BP.readUInt32BE;arr.readInt8 = BP.readInt8;arr.readInt16LE = BP.readInt16LE;arr.readInt16BE = BP.readInt16BE;arr.readInt32LE = BP.readInt32LE;arr.readInt32BE = BP.readInt32BE;arr.readFloatLE = BP.readFloatLE;arr.readFloatBE = BP.readFloatBE;arr.readDoubleLE = BP.readDoubleLE;arr.readDoubleBE = BP.readDoubleBE;arr.writeUInt8 = BP.writeUInt8;arr.writeUInt16LE = BP.writeUInt16LE;arr.writeUInt16BE = BP.writeUInt16BE;arr.writeUInt32LE = BP.writeUInt32LE;arr.writeUInt32BE = BP.writeUInt32BE;arr.writeInt8 = BP.writeInt8;arr.writeInt16LE = BP.writeInt16LE;arr.writeInt16BE = BP.writeInt16BE;arr.writeInt32LE = BP.writeInt32LE;arr.writeInt32BE = BP.writeInt32BE;arr.writeFloatLE = BP.writeFloatLE;arr.writeFloatBE = BP.writeFloatBE;arr.writeDoubleLE = BP.writeDoubleLE;arr.writeDoubleBE = BP.writeDoubleBE;arr.fill = BP.fill;arr.inspect = BP.inspect;arr.toArrayBuffer = BP.toArrayBuffer;return arr;};var INVALID_BASE64_RE=/[^+\/0-9A-z]/g;function base64clean(str){ // Node strips out invalid characters like \n and \t from the string, base64-js does not
	str = stringtrim(str).replace(INVALID_BASE64_RE,''); // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	while(str.length % 4 !== 0) {str = str + '=';}return str;}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,'');}function isArrayish(subject){return isArray(subject) || Buffer.isBuffer(subject) || subject && typeof subject === 'object' && typeof subject.length === 'number';}function toHex(n){if(n < 16)return '0' + n.toString(16);return n.toString(16);}function utf8ToBytes(str){var byteArray=[];for(var i=0;i < str.length;i++) {var b=str.charCodeAt(i);if(b <= 0x7F){byteArray.push(b);}else {var start=i;if(b >= 0xD800 && b <= 0xDFFF)i++;var h=encodeURIComponent(str.slice(start,i + 1)).substr(1).split('%');for(var j=0;j < h.length;j++) {byteArray.push(parseInt(h[j],16));}}}return byteArray;}function asciiToBytes(str){var byteArray=[];for(var i=0;i < str.length;i++) { // Node's code seems to be doing this and not & 0x7F..
	byteArray.push(str.charCodeAt(i) & 0xFF);}return byteArray;}function utf16leToBytes(str){var c,hi,lo;var byteArray=[];for(var i=0;i < str.length;i++) {c = str.charCodeAt(i);hi = c >> 8;lo = c % 256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(str);}function blitBuffer(src,dst,offset,length,unitSize){if(unitSize)length -= length % unitSize;for(var i=0;i < length;i++) {if(i + offset >= dst.length || i >= src.length)break;dst[i + offset] = src[i];}return i;}function decodeUtf8Char(str){try{return decodeURIComponent(str);}catch(err) {return String.fromCharCode(0xFFFD); // UTF 8 invalid char
	}}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */ /* eslint-disable no-proto */'use strict';var base64=__webpack_require__(30);var ieee754=__webpack_require__(31);var isArray=__webpack_require__(32);exports.Buffer = Buffer;exports.SlowBuffer = SlowBuffer;exports.INSPECT_MAX_BYTES = 50; /**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined?global.TYPED_ARRAY_SUPPORT:typedArraySupport(); /*
	 * Export kMaxLength after typed array support is determined.
	 */exports.kMaxLength = kMaxLength();function typedArraySupport(){try{var arr=new Uint8Array(1);arr.__proto__ = {__proto__:Uint8Array.prototype,foo:function foo(){return 42;}};return arr.foo() === 42 &&  // typed array instances can be augmented
	typeof arr.subarray === 'function' &&  // chrome 9-10 lack `subarray`
	arr.subarray(1,1).byteLength === 0; // ie10 has broken `subarray`
	}catch(e) {return false;}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff;}function createBuffer(that,length){if(kMaxLength() < length){throw new RangeError('Invalid typed array length');}if(Buffer.TYPED_ARRAY_SUPPORT){ // Return an augmented `Uint8Array` instance, for best performance
	that = new Uint8Array(length);that.__proto__ = Buffer.prototype;}else { // Fallback: Return an object instance of the Buffer class
	if(that === null){that = new Buffer(length);}that.length = length;}return that;} /**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */function Buffer(arg,encodingOrOffset,length){if(!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)){return new Buffer(arg,encodingOrOffset,length);} // Common case.
	if(typeof arg === 'number'){if(typeof encodingOrOffset === 'string'){throw new Error('If encoding is specified then the first argument must be a string');}return allocUnsafe(this,arg);}return from(this,arg,encodingOrOffset,length);}Buffer.poolSize = 8192; // not used by this implementation
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function(arr){arr.__proto__ = Buffer.prototype;return arr;};function from(that,value,encodingOrOffset,length){if(typeof value === 'number'){throw new TypeError('"value" argument must not be a number');}if(typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer){return fromArrayBuffer(that,value,encodingOrOffset,length);}if(typeof value === 'string'){return fromString(that,value,encodingOrOffset);}return fromObject(that,value);} /**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/Buffer.from = function(value,encodingOrOffset,length){return from(null,value,encodingOrOffset,length);};if(Buffer.TYPED_ARRAY_SUPPORT){Buffer.prototype.__proto__ = Uint8Array.prototype;Buffer.__proto__ = Uint8Array;if(typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer){ // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:true});}}function assertSize(size){if(typeof size !== 'number'){throw new TypeError('"size" argument must be a number');}else if(size < 0){throw new RangeError('"size" argument must not be negative');}}function alloc(that,size,fill,encoding){assertSize(size);if(size <= 0){return createBuffer(that,size);}if(fill !== undefined){ // Only pay attention to encoding if it's a string. This
	// prevents accidentally sending in a number that would
	// be interpretted as a start offset.
	return typeof encoding === 'string'?createBuffer(that,size).fill(fill,encoding):createBuffer(that,size).fill(fill);}return createBuffer(that,size);} /**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/Buffer.alloc = function(size,fill,encoding){return alloc(null,size,fill,encoding);};function allocUnsafe(that,size){assertSize(size);that = createBuffer(that,size < 0?0:checked(size) | 0);if(!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i < size;++i) {that[i] = 0;}}return that;} /**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */Buffer.allocUnsafe = function(size){return allocUnsafe(null,size);}; /**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */Buffer.allocUnsafeSlow = function(size){return allocUnsafe(null,size);};function fromString(that,string,encoding){if(typeof encoding !== 'string' || encoding === ''){encoding = 'utf8';}if(!Buffer.isEncoding(encoding)){throw new TypeError('"encoding" must be a valid string encoding');}var length=byteLength(string,encoding) | 0;that = createBuffer(that,length);var actual=that.write(string,encoding);if(actual !== length){ // Writing a hex string, for example, that contains invalid characters will
	// cause everything after the first invalid character to be ignored. (e.g.
	// 'abxxcd' will be treated as 'ab')
	that = that.slice(0,actual);}return that;}function fromArrayLike(that,array){var length=array.length < 0?0:checked(array.length) | 0;that = createBuffer(that,length);for(var i=0;i < length;i += 1) {that[i] = array[i] & 255;}return that;}function fromArrayBuffer(that,array,byteOffset,length){array.byteLength; // this throws if `array` is not a valid ArrayBuffer
	if(byteOffset < 0 || array.byteLength < byteOffset){throw new RangeError('\'offset\' is out of bounds');}if(array.byteLength < byteOffset + (length || 0)){throw new RangeError('\'length\' is out of bounds');}if(byteOffset === undefined && length === undefined){array = new Uint8Array(array);}else if(length === undefined){array = new Uint8Array(array,byteOffset);}else {array = new Uint8Array(array,byteOffset,length);}if(Buffer.TYPED_ARRAY_SUPPORT){ // Return an augmented `Uint8Array` instance, for best performance
	that = array;that.__proto__ = Buffer.prototype;}else { // Fallback: Return an object instance of the Buffer class
	that = fromArrayLike(that,array);}return that;}function fromObject(that,obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length) | 0;that = createBuffer(that,len);if(that.length === 0){return that;}obj.copy(that,0,0,len);return that;}if(obj){if(typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj){if(typeof obj.length !== 'number' || isnan(obj.length)){return createBuffer(that,0);}return fromArrayLike(that,obj);}if(obj.type === 'Buffer' && isArray(obj.data)){return fromArrayLike(that,obj.data);}}throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');}function checked(length){ // Note: cannot use `length < kMaxLength()` here because that fails when
	// length is NaN (which is otherwise coerced to zero.)
	if(length >= kMaxLength()){throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');}return length | 0;}function SlowBuffer(length){if(+length != length){ // eslint-disable-line eqeqeq
	length = 0;}return Buffer.alloc(+length);}Buffer.isBuffer = function isBuffer(b){return !!(b != null && b._isBuffer);};Buffer.compare = function compare(a,b){if(!Buffer.isBuffer(a) || !Buffer.isBuffer(b)){throw new TypeError('Arguments must be Buffers');}if(a === b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i < len;++i) {if(a[i] !== b[i]){x = a[i];y = b[i];break;}}if(x < y)return -1;if(y < x)return 1;return 0;};Buffer.isEncoding = function isEncoding(encoding){switch(String(encoding).toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'latin1':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return true;default:return false;}};Buffer.concat = function concat(list,length){if(!isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers');}if(list.length === 0){return Buffer.alloc(0);}var i;if(length === undefined){length = 0;for(i = 0;i < list.length;++i) {length += list[i].length;}}var buffer=Buffer.allocUnsafe(length);var pos=0;for(i = 0;i < list.length;++i) {var buf=list[i];if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers');}buf.copy(buffer,pos);pos += buf.length;}return buffer;};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length;}if(typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)){return string.byteLength;}if(typeof string !== 'string'){string = '' + string;}var len=string.length;if(len === 0)return 0; // Use a for loop to avoid recursion
	var loweredCase=false;for(;;) {switch(encoding){case 'ascii':case 'latin1':case 'binary':return len;case 'utf8':case 'utf-8':case undefined:return utf8ToBytes(string).length;case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return len * 2;case 'hex':return len >>> 1;case 'base64':return base64ToBytes(string).length;default:if(loweredCase)return utf8ToBytes(string).length; // assume utf8
	encoding = ('' + encoding).toLowerCase();loweredCase = true;}}}Buffer.byteLength = byteLength;function slowToString(encoding,start,end){var loweredCase=false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	// property of a typed array.
	// This behaves neither like String nor Uint8Array in that we set start/end
	// to their upper/lower bounds if the value passed is out of range.
	// undefined is handled specially as per ECMA-262 6th Edition,
	// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	if(start === undefined || start < 0){start = 0;} // Return early if start > this.length. Done here to prevent potential uint32
	// coercion fail below.
	if(start > this.length){return '';}if(end === undefined || end > this.length){end = this.length;}if(end <= 0){return '';} // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	end >>>= 0;start >>>= 0;if(end <= start){return '';}if(!encoding)encoding = 'utf8';while(true) {switch(encoding){case 'hex':return hexSlice(this,start,end);case 'utf8':case 'utf-8':return utf8Slice(this,start,end);case 'ascii':return asciiSlice(this,start,end);case 'latin1':case 'binary':return latin1Slice(this,start,end);case 'base64':return base64Slice(this,start,end);case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: ' + encoding);encoding = (encoding + '').toLowerCase();loweredCase = true;}}} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;function swap(b,n,m){var i=b[n];b[n] = b[m];b[m] = i;}Buffer.prototype.swap16 = function swap16(){var len=this.length;if(len % 2 !== 0){throw new RangeError('Buffer size must be a multiple of 16-bits');}for(var i=0;i < len;i += 2) {swap(this,i,i + 1);}return this;};Buffer.prototype.swap32 = function swap32(){var len=this.length;if(len % 4 !== 0){throw new RangeError('Buffer size must be a multiple of 32-bits');}for(var i=0;i < len;i += 4) {swap(this,i,i + 3);swap(this,i + 1,i + 2);}return this;};Buffer.prototype.swap64 = function swap64(){var len=this.length;if(len % 8 !== 0){throw new RangeError('Buffer size must be a multiple of 64-bits');}for(var i=0;i < len;i += 8) {swap(this,i,i + 7);swap(this,i + 1,i + 6);swap(this,i + 2,i + 5);swap(this,i + 3,i + 4);}return this;};Buffer.prototype.toString = function toString(){var length=this.length | 0;if(length === 0)return '';if(arguments.length === 0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.equals = function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this === b)return true;return Buffer.compare(this,b) === 0;};Buffer.prototype.inspect = function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;if(this.length > 0){str = this.toString('hex',0,max).match(/.{2}/g).join(' ');if(this.length > max)str += ' ... ';}return '<Buffer ' + str + '>';};Buffer.prototype.compare = function compare(target,start,end,thisStart,thisEnd){if(!Buffer.isBuffer(target)){throw new TypeError('Argument must be a Buffer');}if(start === undefined){start = 0;}if(end === undefined){end = target?target.length:0;}if(thisStart === undefined){thisStart = 0;}if(thisEnd === undefined){thisEnd = this.length;}if(start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length){throw new RangeError('out of range index');}if(thisStart >= thisEnd && start >= end){return 0;}if(thisStart >= thisEnd){return -1;}if(start >= end){return 1;}start >>>= 0;end >>>= 0;thisStart >>>= 0;thisEnd >>>= 0;if(this === target)return 0;var x=thisEnd - thisStart;var y=end - start;var len=Math.min(x,y);var thisCopy=this.slice(thisStart,thisEnd);var targetCopy=target.slice(start,end);for(var i=0;i < len;++i) {if(thisCopy[i] !== targetCopy[i]){x = thisCopy[i];y = targetCopy[i];break;}}if(x < y)return -1;if(y < x)return 1;return 0;}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){ // Empty buffer means no match
	if(buffer.length === 0)return -1; // Normalize byteOffset
	if(typeof byteOffset === 'string'){encoding = byteOffset;byteOffset = 0;}else if(byteOffset > 0x7fffffff){byteOffset = 0x7fffffff;}else if(byteOffset < -0x80000000){byteOffset = -0x80000000;}byteOffset = +byteOffset; // Coerce to Number.
	if(isNaN(byteOffset)){ // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	byteOffset = dir?0:buffer.length - 1;} // Normalize byteOffset: negative offsets start from the end of the buffer
	if(byteOffset < 0)byteOffset = buffer.length + byteOffset;if(byteOffset >= buffer.length){if(dir)return -1;else byteOffset = buffer.length - 1;}else if(byteOffset < 0){if(dir)byteOffset = 0;else return -1;} // Normalize val
	if(typeof val === 'string'){val = Buffer.from(val,encoding);} // Finally, search either indexOf (if dir is true) or lastIndexOf
	if(Buffer.isBuffer(val)){ // Special case: looking for empty string/buffer always fails
	if(val.length === 0){return -1;}return arrayIndexOf(buffer,val,byteOffset,encoding,dir);}else if(typeof val === 'number'){val = val & 0xFF; // Search for a byte value [0-255]
	if(Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset);}else {return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset);}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir);}throw new TypeError('val must be string, number or Buffer');}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1;var arrLength=arr.length;var valLength=val.length;if(encoding !== undefined){encoding = String(encoding).toLowerCase();if(encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le'){if(arr.length < 2 || val.length < 2){return -1;}indexSize = 2;arrLength /= 2;valLength /= 2;byteOffset /= 2;}}function read(buf,i){if(indexSize === 1){return buf[i];}else {return buf.readUInt16BE(i * indexSize);}}var i;if(dir){var foundIndex=-1;for(i = byteOffset;i < arrLength;i++) {if(read(arr,i) === read(val,foundIndex === -1?0:i - foundIndex)){if(foundIndex === -1)foundIndex = i;if(i - foundIndex + 1 === valLength)return foundIndex * indexSize;}else {if(foundIndex !== -1)i -= i - foundIndex;foundIndex = -1;}}}else {if(byteOffset + valLength > arrLength)byteOffset = arrLength - valLength;for(i = byteOffset;i >= 0;i--) {var found=true;for(var j=0;j < valLength;j++) {if(read(arr,i + j) !== read(val,j)){found = false;break;}}if(found)return i;}}return -1;}Buffer.prototype.includes = function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding) !== -1;};Buffer.prototype.indexOf = function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true);};Buffer.prototype.lastIndexOf = function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false);};function hexWrite(buf,string,offset,length){offset = Number(offset) || 0;var remaining=buf.length - offset;if(!length){length = remaining;}else {length = Number(length);if(length > remaining){length = remaining;}} // must be an even number of digits
	var strLen=string.length;if(strLen % 2 !== 0)throw new TypeError('Invalid hex string');if(length > strLen / 2){length = strLen / 2;}for(var i=0;i < length;++i) {var parsed=parseInt(string.substr(i * 2,2),16);if(isNaN(parsed))return i;buf[offset + i] = parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length - offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length - offset),buf,offset,length);}Buffer.prototype.write = function write(string,offset,length,encoding){ // Buffer#write(string)
	if(offset === undefined){encoding = 'utf8';length = this.length;offset = 0; // Buffer#write(string, encoding)
	}else if(length === undefined && typeof offset === 'string'){encoding = offset;length = this.length;offset = 0; // Buffer#write(string, offset[, length][, encoding])
	}else if(isFinite(offset)){offset = offset | 0;if(isFinite(length)){length = length | 0;if(encoding === undefined)encoding = 'utf8';}else {encoding = length;length = undefined;} // legacy write(string, encoding, offset, length) - remove in v0.13
	}else {throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');}var remaining=this.length - offset;if(length === undefined || length > remaining)length = remaining;if(string.length > 0 && (length < 0 || offset < 0) || offset > this.length){throw new RangeError('Attempt to write outside buffer bounds');}if(!encoding)encoding = 'utf8';var loweredCase=false;for(;;) {switch(encoding){case 'hex':return hexWrite(this,string,offset,length);case 'utf8':case 'utf-8':return utf8Write(this,string,offset,length);case 'ascii':return asciiWrite(this,string,offset,length);case 'latin1':case 'binary':return latin1Write(this,string,offset,length);case 'base64': // Warning: maxLength not taken into account in base64Write
	return base64Write(this,string,offset,length);case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: ' + encoding);encoding = ('' + encoding).toLowerCase();loweredCase = true;}}};Buffer.prototype.toJSON = function toJSON(){return {type:'Buffer',data:Array.prototype.slice.call(this._arr || this,0)};};function base64Slice(buf,start,end){if(start === 0 && end === buf.length){return base64.fromByteArray(buf);}else {return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end = Math.min(buf.length,end);var res=[];var i=start;while(i < end) {var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte > 0xEF?4:firstByte > 0xDF?3:firstByte > 0xBF?2:1;if(i + bytesPerSequence <= end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte < 0x80){codePoint = firstByte;}break;case 2:secondByte = buf[i + 1];if((secondByte & 0xC0) === 0x80){tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;if(tempCodePoint > 0x7F){codePoint = tempCodePoint;}}break;case 3:secondByte = buf[i + 1];thirdByte = buf[i + 2];if((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80){tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;if(tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)){codePoint = tempCodePoint;}}break;case 4:secondByte = buf[i + 1];thirdByte = buf[i + 2];fourthByte = buf[i + 3];if((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80){tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;if(tempCodePoint > 0xFFFF && tempCodePoint < 0x110000){codePoint = tempCodePoint;}}}}if(codePoint === null){ // we did not generate a valid codePoint so insert a
	// replacement char (U+FFFD) and advance only 1 byte
	codePoint = 0xFFFD;bytesPerSequence = 1;}else if(codePoint > 0xFFFF){ // encode to utf16 (surrogate pair dance)
	codePoint -= 0x10000;res.push(codePoint >>> 10 & 0x3FF | 0xD800);codePoint = 0xDC00 | codePoint & 0x3FF;}res.push(codePoint);i += bytesPerSequence;}return decodeCodePointsArray(res);} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len <= MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints); // avoid extra slice()
	} // Decode in chunks to avoid "call stack size exceeded".
	var res='';var i=0;while(i < len) {res += String.fromCharCode.apply(String,codePoints.slice(i,i += MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end = Math.min(buf.length,end);for(var i=start;i < end;++i) {ret += String.fromCharCode(buf[i] & 0x7F);}return ret;}function latin1Slice(buf,start,end){var ret='';end = Math.min(buf.length,end);for(var i=start;i < end;++i) {ret += String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start || start < 0)start = 0;if(!end || end < 0 || end > len)end = len;var out='';for(var i=start;i < end;++i) {out += toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i < bytes.length;i += 2) {res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);}return res;}Buffer.prototype.slice = function slice(start,end){var len=this.length;start = ~ ~start;end = end === undefined?len:~ ~end;if(start < 0){start += len;if(start < 0)start = 0;}else if(start > len){start = len;}if(end < 0){end += len;if(end < 0)end = 0;}else if(end > len){end = len;}if(end < start)end = start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf = this.subarray(start,end);newBuf.__proto__ = Buffer.prototype;}else {var sliceLen=end - start;newBuf = new Buffer(sliceLen,undefined);for(var i=0;i < sliceLen;++i) {newBuf[i] = this[i + start];}}return newBuf;}; /*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */function checkOffset(offset,ext,length){if(offset % 1 !== 0 || offset < 0)throw new RangeError('offset is not uint');if(offset + ext > length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE = function readUIntLE(offset,byteLength,noAssert){offset = offset | 0;byteLength = byteLength | 0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i < byteLength && (mul *= 0x100)) {val += this[offset + i] * mul;}return val;};Buffer.prototype.readUIntBE = function readUIntBE(offset,byteLength,noAssert){offset = offset | 0;byteLength = byteLength | 0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset + --byteLength];var mul=1;while(byteLength > 0 && (mul *= 0x100)) {val += this[offset + --byteLength] * mul;}return val;};Buffer.prototype.readUInt8 = function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE = function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset] | this[offset + 1] << 8;};Buffer.prototype.readUInt16BE = function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset] << 8 | this[offset + 1];};Buffer.prototype.readUInt32LE = function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;};Buffer.prototype.readUInt32BE = function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);};Buffer.prototype.readIntLE = function readIntLE(offset,byteLength,noAssert){offset = offset | 0;byteLength = byteLength | 0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i < byteLength && (mul *= 0x100)) {val += this[offset + i] * mul;}mul *= 0x80;if(val >= mul)val -= Math.pow(2,8 * byteLength);return val;};Buffer.prototype.readIntBE = function readIntBE(offset,byteLength,noAssert){offset = offset | 0;byteLength = byteLength | 0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset + --i];while(i > 0 && (mul *= 0x100)) {val += this[offset + --i] * mul;}mul *= 0x80;if(val >= mul)val -= Math.pow(2,8 * byteLength);return val;};Buffer.prototype.readInt8 = function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset] & 0x80))return this[offset];return (0xff - this[offset] + 1) * -1;};Buffer.prototype.readInt16LE = function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset] | this[offset + 1] << 8;return val & 0x8000?val | 0xFFFF0000:val;};Buffer.prototype.readInt16BE = function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset + 1] | this[offset] << 8;return val & 0x8000?val | 0xFFFF0000:val;};Buffer.prototype.readInt32LE = function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;};Buffer.prototype.readInt32BE = function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];};Buffer.prototype.readFloatLE = function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE = function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE = function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE = function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance');if(value > max || value < min)throw new RangeError('"value" argument is out of bounds');if(offset + ext > buf.length)throw new RangeError('Index out of range');}Buffer.prototype.writeUIntLE = function writeUIntLE(value,offset,byteLength,noAssert){value = +value;offset = offset | 0;byteLength = byteLength | 0;if(!noAssert){var maxBytes=Math.pow(2,8 * byteLength) - 1;checkInt(this,value,offset,byteLength,maxBytes,0);}var mul=1;var i=0;this[offset] = value & 0xFF;while(++i < byteLength && (mul *= 0x100)) {this[offset + i] = value / mul & 0xFF;}return offset + byteLength;};Buffer.prototype.writeUIntBE = function writeUIntBE(value,offset,byteLength,noAssert){value = +value;offset = offset | 0;byteLength = byteLength | 0;if(!noAssert){var maxBytes=Math.pow(2,8 * byteLength) - 1;checkInt(this,value,offset,byteLength,maxBytes,0);}var i=byteLength - 1;var mul=1;this[offset + i] = value & 0xFF;while(--i >= 0 && (mul *= 0x100)) {this[offset + i] = value / mul & 0xFF;}return offset + byteLength;};Buffer.prototype.writeUInt8 = function writeUInt8(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value = Math.floor(value);this[offset] = value & 0xff;return offset + 1;};function objectWriteUInt16(buf,value,offset,littleEndian){if(value < 0)value = 0xffff + value + 1;for(var i=0,j=Math.min(buf.length - offset,2);i < j;++i) {buf[offset + i] = (value & 0xff << 8 * (littleEndian?i:1 - i)) >>> (littleEndian?i:1 - i) * 8;}}Buffer.prototype.writeUInt16LE = function writeUInt16LE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value & 0xff;this[offset + 1] = value >>> 8;}else {objectWriteUInt16(this,value,offset,true);}return offset + 2;};Buffer.prototype.writeUInt16BE = function writeUInt16BE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 8;this[offset + 1] = value & 0xff;}else {objectWriteUInt16(this,value,offset,false);}return offset + 2;};function objectWriteUInt32(buf,value,offset,littleEndian){if(value < 0)value = 0xffffffff + value + 1;for(var i=0,j=Math.min(buf.length - offset,4);i < j;++i) {buf[offset + i] = value >>> (littleEndian?i:3 - i) * 8 & 0xff;}}Buffer.prototype.writeUInt32LE = function writeUInt32LE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset + 3] = value >>> 24;this[offset + 2] = value >>> 16;this[offset + 1] = value >>> 8;this[offset] = value & 0xff;}else {objectWriteUInt32(this,value,offset,true);}return offset + 4;};Buffer.prototype.writeUInt32BE = function writeUInt32BE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 24;this[offset + 1] = value >>> 16;this[offset + 2] = value >>> 8;this[offset + 3] = value & 0xff;}else {objectWriteUInt32(this,value,offset,false);}return offset + 4;};Buffer.prototype.writeIntLE = function writeIntLE(value,offset,byteLength,noAssert){value = +value;offset = offset | 0;if(!noAssert){var limit=Math.pow(2,8 * byteLength - 1);checkInt(this,value,offset,byteLength,limit - 1,-limit);}var i=0;var mul=1;var sub=0;this[offset] = value & 0xFF;while(++i < byteLength && (mul *= 0x100)) {if(value < 0 && sub === 0 && this[offset + i - 1] !== 0){sub = 1;}this[offset + i] = (value / mul >> 0) - sub & 0xFF;}return offset + byteLength;};Buffer.prototype.writeIntBE = function writeIntBE(value,offset,byteLength,noAssert){value = +value;offset = offset | 0;if(!noAssert){var limit=Math.pow(2,8 * byteLength - 1);checkInt(this,value,offset,byteLength,limit - 1,-limit);}var i=byteLength - 1;var mul=1;var sub=0;this[offset + i] = value & 0xFF;while(--i >= 0 && (mul *= 0x100)) {if(value < 0 && sub === 0 && this[offset + i + 1] !== 0){sub = 1;}this[offset + i] = (value / mul >> 0) - sub & 0xFF;}return offset + byteLength;};Buffer.prototype.writeInt8 = function writeInt8(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(!Buffer.TYPED_ARRAY_SUPPORT)value = Math.floor(value);if(value < 0)value = 0xff + value + 1;this[offset] = value & 0xff;return offset + 1;};Buffer.prototype.writeInt16LE = function writeInt16LE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value & 0xff;this[offset + 1] = value >>> 8;}else {objectWriteUInt16(this,value,offset,true);}return offset + 2;};Buffer.prototype.writeInt16BE = function writeInt16BE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 8;this[offset + 1] = value & 0xff;}else {objectWriteUInt16(this,value,offset,false);}return offset + 2;};Buffer.prototype.writeInt32LE = function writeInt32LE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value & 0xff;this[offset + 1] = value >>> 8;this[offset + 2] = value >>> 16;this[offset + 3] = value >>> 24;}else {objectWriteUInt32(this,value,offset,true);}return offset + 4;};Buffer.prototype.writeInt32BE = function writeInt32BE(value,offset,noAssert){value = +value;offset = offset | 0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value < 0)value = 0xffffffff + value + 1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset] = value >>> 24;this[offset + 1] = value >>> 16;this[offset + 2] = value >>> 8;this[offset + 3] = value & 0xff;}else {objectWriteUInt32(this,value,offset,false);}return offset + 4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset + ext > buf.length)throw new RangeError('Index out of range');if(offset < 0)throw new RangeError('Index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset + 4;}Buffer.prototype.writeFloatLE = function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE = function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset + 8;}Buffer.prototype.writeDoubleLE = function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE = function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target,targetStart,start,end){if(!start)start = 0;if(!end && end !== 0)end = this.length;if(targetStart >= target.length)targetStart = target.length;if(!targetStart)targetStart = 0;if(end > 0 && end < start)end = start; // Copy 0 bytes; we're done
	if(end === start)return 0;if(target.length === 0 || this.length === 0)return 0; // Fatal error conditions
	if(targetStart < 0){throw new RangeError('targetStart out of bounds');}if(start < 0 || start >= this.length)throw new RangeError('sourceStart out of bounds');if(end < 0)throw new RangeError('sourceEnd out of bounds'); // Are we oob?
	if(end > this.length)end = this.length;if(target.length - targetStart < end - start){end = target.length - targetStart + start;}var len=end - start;var i;if(this === target && start < targetStart && targetStart < end){ // descending copy from end
	for(i = len - 1;i >= 0;--i) {target[i + targetStart] = this[i + start];}}else if(len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT){ // ascending copy from start
	for(i = 0;i < len;++i) {target[i + targetStart] = this[i + start];}}else {Uint8Array.prototype.set.call(target,this.subarray(start,start + len),targetStart);}return len;}; // Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val,start,end,encoding){ // Handle string cases:
	if(typeof val === 'string'){if(typeof start === 'string'){encoding = start;start = 0;end = this.length;}else if(typeof end === 'string'){encoding = end;end = this.length;}if(val.length === 1){var code=val.charCodeAt(0);if(code < 256){val = code;}}if(encoding !== undefined && typeof encoding !== 'string'){throw new TypeError('encoding must be a string');}if(typeof encoding === 'string' && !Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: ' + encoding);}}else if(typeof val === 'number'){val = val & 255;} // Invalid ranges are not set to a default, so can range check early.
	if(start < 0 || this.length < start || this.length < end){throw new RangeError('Out of range index');}if(end <= start){return this;}start = start >>> 0;end = end === undefined?this.length:end >>> 0;if(!val)val = 0;var i;if(typeof val === 'number'){for(i = start;i < end;++i) {this[i] = val;}}else {var bytes=Buffer.isBuffer(val)?val:utf8ToBytes(new Buffer(val,encoding).toString());var len=bytes.length;for(i = 0;i < end - start;++i) {this[i + start] = bytes[i % len];}}return this;}; // HELPER FUNCTIONS
	// ================
	var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;function base64clean(str){ // Node strips out invalid characters like \n and \t from the string, base64-js does not
	str = stringtrim(str).replace(INVALID_BASE64_RE,''); // Node converts strings with length < 2 to ''
	if(str.length < 2)return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	while(str.length % 4 !== 0) {str = str + '=';}return str;}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,'');}function toHex(n){if(n < 16)return '0' + n.toString(16);return n.toString(16);}function utf8ToBytes(string,units){units = units || Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i < length;++i) {codePoint = string.charCodeAt(i); // is surrogate component
	if(codePoint > 0xD7FF && codePoint < 0xE000){ // last char was a lead
	if(!leadSurrogate){ // no lead yet
	if(codePoint > 0xDBFF){ // unexpected trail
	if((units -= 3) > -1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i + 1 === length){ // unpaired lead
	if((units -= 3) > -1)bytes.push(0xEF,0xBF,0xBD);continue;} // valid lead
	leadSurrogate = codePoint;continue;} // 2 leads in a row
	if(codePoint < 0xDC00){if((units -= 3) > -1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate = codePoint;continue;} // valid surrogate pair
	codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;}else if(leadSurrogate){ // valid bmp char, but last char was a lead
	if((units -= 3) > -1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate = null; // encode utf8
	if(codePoint < 0x80){if((units -= 1) < 0)break;bytes.push(codePoint);}else if(codePoint < 0x800){if((units -= 2) < 0)break;bytes.push(codePoint >> 0x6 | 0xC0,codePoint & 0x3F | 0x80);}else if(codePoint < 0x10000){if((units -= 3) < 0)break;bytes.push(codePoint >> 0xC | 0xE0,codePoint >> 0x6 & 0x3F | 0x80,codePoint & 0x3F | 0x80);}else if(codePoint < 0x110000){if((units -= 4) < 0)break;bytes.push(codePoint >> 0x12 | 0xF0,codePoint >> 0xC & 0x3F | 0x80,codePoint >> 0x6 & 0x3F | 0x80,codePoint & 0x3F | 0x80);}else {throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i < str.length;++i) { // Node's code seems to be doing this and not & 0x7F..
	byteArray.push(str.charCodeAt(i) & 0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i < str.length;++i) {if((units -= 2) < 0)break;c = str.charCodeAt(i);hi = c >> 8;lo = c % 256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i < length;++i) {if(i + offset >= dst.length || i >= src.length)break;dst[i + offset] = src[i];}return i;}function isnan(val){return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';exports.toByteArray = toByteArray;exports.fromByteArray = fromByteArray;var lookup=[];var revLookup=[];var Arr=typeof Uint8Array !== 'undefined'?Uint8Array:Array;function init(){var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';for(var i=0,len=code.length;i < len;++i) {lookup[i] = code[i];revLookup[code.charCodeAt(i)] = i;}revLookup['-'.charCodeAt(0)] = 62;revLookup['_'.charCodeAt(0)] = 63;}init();function toByteArray(b64){var i,j,l,tmp,placeHolders,arr;var len=b64.length;if(len % 4 > 0){throw new Error('Invalid string. Length must be a multiple of 4');} // the number of equal signs (place holders)
	// if there are two placeholders, than the two characters before it
	// represent one byte
	// if there is only one, then the three characters before it represent 2 bytes
	// this is just a cheap hack to not do indexOf twice
	placeHolders = b64[len - 2] === '='?2:b64[len - 1] === '='?1:0; // base64 is 4/3 + up to two characters of the original data
	arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars
	l = placeHolders > 0?len - 4:len;var L=0;for(i = 0,j = 0;i < l;i += 4,j += 3) {tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];arr[L++] = tmp >> 16 & 0xFF;arr[L++] = tmp >> 8 & 0xFF;arr[L++] = tmp & 0xFF;}if(placeHolders === 2){tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;arr[L++] = tmp & 0xFF;}else if(placeHolders === 1){tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;arr[L++] = tmp >> 8 & 0xFF;arr[L++] = tmp & 0xFF;}return arr;}function tripletToBase64(num){return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];}function encodeChunk(uint8,start,end){var tmp;var output=[];for(var i=start;i < end;i += 3) {tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];output.push(tripletToBase64(tmp));}return output.join('');}function fromByteArray(uint8){var tmp;var len=uint8.length;var extraBytes=len % 3; // if we have 1 byte left, pad 2 bytes
	var output='';var parts=[];var maxChunkLength=16383; // must be multiple of 3
	// go through the array every three bytes, we'll deal with trailing stuff later
	for(var i=0,len2=len - extraBytes;i < len2;i += maxChunkLength) {parts.push(encodeChunk(uint8,i,i + maxChunkLength > len2?len2:i + maxChunkLength));} // pad the end with zeros, but make sure to not forget the extra bytes
	if(extraBytes === 1){tmp = uint8[len - 1];output += lookup[tmp >> 2];output += lookup[tmp << 4 & 0x3F];output += '==';}else if(extraBytes === 2){tmp = (uint8[len - 2] << 8) + uint8[len - 1];output += lookup[tmp >> 10];output += lookup[tmp >> 4 & 0x3F];output += lookup[tmp << 2 & 0x3F];output += '=';}parts.push(output);return parts.join('');}

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";exports.read = function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes * 8 - mLen - 1;var eMax=(1 << eLen) - 1;var eBias=eMax >> 1;var nBits=-7;var i=isLE?nBytes - 1:0;var d=isLE?-1:1;var s=buffer[offset + i];i += d;e = s & (1 << -nBits) - 1;s >>= -nBits;nBits += eLen;for(;nBits > 0;e = e * 256 + buffer[offset + i],i += d,nBits -= 8) {}m = e & (1 << -nBits) - 1;e >>= -nBits;nBits += mLen;for(;nBits > 0;m = m * 256 + buffer[offset + i],i += d,nBits -= 8) {}if(e === 0){e = 1 - eBias;}else if(e === eMax){return m?NaN:(s?-1:1) * Infinity;}else {m = m + Math.pow(2,mLen);e = e - eBias;}return (s?-1:1) * m * Math.pow(2,e - mLen);};exports.write = function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes * 8 - mLen - 1;var eMax=(1 << eLen) - 1;var eBias=eMax >> 1;var rt=mLen === 23?Math.pow(2,-24) - Math.pow(2,-77):0;var i=isLE?0:nBytes - 1;var d=isLE?1:-1;var s=value < 0 || value === 0 && 1 / value < 0?1:0;value = Math.abs(value);if(isNaN(value) || value === Infinity){m = isNaN(value)?1:0;e = eMax;}else {e = Math.floor(Math.log(value) / Math.LN2);if(value * (c = Math.pow(2,-e)) < 1){e--;c *= 2;}if(e + eBias >= 1){value += rt / c;}else {value += rt * Math.pow(2,1 - eBias);}if(value * c >= 2){e++;c /= 2;}if(e + eBias >= eMax){m = 0;e = eMax;}else if(e + eBias >= 1){m = (value * c - 1) * Math.pow(2,mLen);e = e + eBias;}else {m = value * Math.pow(2,eBias - 1) * Math.pow(2,mLen);e = 0;}}for(;mLen >= 8;buffer[offset + i] = m & 0xff,i += d,m /= 256,mLen -= 8) {}e = e << mLen | m;eLen += mLen;for(;eLen > 0;buffer[offset + i] = e & 0xff,i += d,e /= 256,eLen -= 8) {}buffer[offset + i - d] |= s * 128;};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';var toString=({}).toString;module.exports = Array.isArray || function(arr){return toString.call(arr) == '[object Array]';};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lookup='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';;(function(exports){'use strict';var Arr=typeof Uint8Array !== 'undefined'?Uint8Array:Array;var PLUS='+'.charCodeAt(0);var SLASH='/'.charCodeAt(0);var NUMBER='0'.charCodeAt(0);var LOWER='a'.charCodeAt(0);var UPPER='A'.charCodeAt(0);function decode(elt){var code=elt.charCodeAt(0);if(code === PLUS)return 62; // '+'
	if(code === SLASH)return 63; // '/'
	if(code < NUMBER)return -1; //no match
	if(code < NUMBER + 10)return code - NUMBER + 26 + 26;if(code < UPPER + 26)return code - UPPER;if(code < LOWER + 26)return code - LOWER + 26;}function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr;if(b64.length % 4 > 0){throw new Error('Invalid string. Length must be a multiple of 4');} // the number of equal signs (place holders)
	// if there are two placeholders, than the two characters before it
	// represent one byte
	// if there is only one, then the three characters before it represent 2 bytes
	// this is just a cheap hack to not do indexOf twice
	var len=b64.length;placeHolders = '=' === b64.charAt(len - 2)?2:'=' === b64.charAt(len - 1)?1:0; // base64 is 4/3 + up to two characters of the original data
	arr = new Arr(b64.length * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars
	l = placeHolders > 0?b64.length - 4:b64.length;var L=0;function push(v){arr[L++] = v;}for(i = 0,j = 0;i < l;i += 4,j += 3) {tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));push((tmp & 0xFF0000) >> 16);push((tmp & 0xFF00) >> 8);push(tmp & 0xFF);}if(placeHolders === 2){tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;push(tmp & 0xFF);}else if(placeHolders === 1){tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;push(tmp >> 8 & 0xFF);push(tmp & 0xFF);}return arr;}function uint8ToBase64(uint8){var i,extraBytes=uint8.length % 3, // if we have 1 byte left, pad 2 bytes
	output="",temp,length;function encode(num){return lookup.charAt(num);}function tripletToBase64(num){return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);} // go through the array every three bytes, we'll deal with trailing stuff later
	for(i = 0,length = uint8.length - extraBytes;i < length;i += 3) {temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];output += tripletToBase64(temp);} // pad the end with zeros, but make sure to not forget the extra bytes
	switch(extraBytes){case 1:temp = uint8[uint8.length - 1];output += encode(temp >> 2);output += encode(temp << 4 & 0x3F);output += '==';break;case 2:temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];output += encode(temp >> 10);output += encode(temp >> 4 & 0x3F);output += encode(temp << 2 & 0x3F);output += '=';break;}return output;}exports.toByteArray = b64ToByteArray;exports.fromByteArray = uint8ToBase64;})( false?undefined.base64js = {}:exports);

/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * isArray
	 */'use strict';var isArray=Array.isArray; /**
	 * toString
	 */var str=Object.prototype.toString; /**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */module.exports = isArray || function(val){return !!val && '[object Array]' == str.call(val);};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	'use strict';function isArray(arg){if(Array.isArray){return Array.isArray(arg);}return objectToString(arg) === '[object Array]';}exports.isArray = isArray;function isBoolean(arg){return typeof arg === 'boolean';}exports.isBoolean = isBoolean;function isNull(arg){return arg === null;}exports.isNull = isNull;function isNullOrUndefined(arg){return arg == null;}exports.isNullOrUndefined = isNullOrUndefined;function isNumber(arg){return typeof arg === 'number';}exports.isNumber = isNumber;function isString(arg){return typeof arg === 'string';}exports.isString = isString;function isSymbol(arg){return typeof arg === 'symbol';}exports.isSymbol = isSymbol;function isUndefined(arg){return arg === void 0;}exports.isUndefined = isUndefined;function isRegExp(re){return objectToString(re) === '[object RegExp]';}exports.isRegExp = isRegExp;function isObject(arg){return typeof arg === 'object' && arg !== null;}exports.isObject = isObject;function isDate(d){return objectToString(d) === '[object Date]';}exports.isDate = isDate;function isError(e){return objectToString(e) === '[object Error]' || e instanceof Error;}exports.isError = isError;function isFunction(arg){return typeof arg === 'function';}exports.isFunction = isFunction;function isPrimitive(arg){return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' ||  // ES6 symbol
	typeof arg === 'undefined';}exports.isPrimitive = isPrimitive;exports.isBuffer = Buffer.isBuffer;function objectToString(o){return Object.prototype.toString.call(o);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 36 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.
	'use strict';module.exports = Duplex; /*<replacement>*/var objectKeys=Object.keys || function(obj){var keys=[];for(var key in obj) keys.push(key);return keys;}; /*</replacement>*/ /*<replacement>*/var util=__webpack_require__(35);util.inherits = __webpack_require__(23); /*</replacement>*/var Readable=__webpack_require__(26);var Writable=__webpack_require__(38);util.inherits(Duplex,Readable);forEach(objectKeys(Writable.prototype),function(method){if(!Duplex.prototype[method])Duplex.prototype[method] = Writable.prototype[method];});function Duplex(options){if(!(this instanceof Duplex))return new Duplex(options);Readable.call(this,options);Writable.call(this,options);if(options && options.readable === false)this.readable = false;if(options && options.writable === false)this.writable = false;this.allowHalfOpen = true;if(options && options.allowHalfOpen === false)this.allowHalfOpen = false;this.once('end',onend);} // the no-half-open enforcer
	function onend(){ // if we allow half-open state, or if the writable side ended,
	// then we're ok.
	if(this.allowHalfOpen || this._writableState.ended)return; // no more data can be written.
	// But allow more writes to happen in this tick.
	process.nextTick(this.end.bind(this));}function forEach(xs,f){for(var i=0,l=xs.length;i < l;i++) {f(xs[i],i);}}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.
	'use strict';module.exports = Writable; /*<replacement>*/var Buffer=__webpack_require__(28).Buffer; /*</replacement>*/Writable.WritableState = WritableState; /*<replacement>*/var util=__webpack_require__(35);util.inherits = __webpack_require__(23); /*</replacement>*/var Stream=__webpack_require__(22);util.inherits(Writable,Stream);function WriteReq(chunk,encoding,cb){this.chunk = chunk;this.encoding = encoding;this.callback = cb;}function WritableState(options,stream){var Duplex=__webpack_require__(37);options = options || {}; // the point at which write() starts returning false
	// Note: 0 is a valid value, means that we always return false if
	// the entire buffer is not flushed immediately on write()
	var hwm=options.highWaterMark;var defaultHwm=options.objectMode?16:16 * 1024;this.highWaterMark = hwm || hwm === 0?hwm:defaultHwm; // object stream flag to indicate whether or not this stream
	// contains buffers or objects.
	this.objectMode = !!options.objectMode;if(stream instanceof Duplex)this.objectMode = this.objectMode || !!options.writableObjectMode; // cast to ints.
	this.highWaterMark = ~ ~this.highWaterMark;this.needDrain = false; // at the start of calling end()
	this.ending = false; // when end() has been called, and returned
	this.ended = false; // when 'finish' is emitted
	this.finished = false; // should we decode strings into buffers before passing to _write?
	// this is here so that some node-core streams can optimize string
	// handling at a lower level.
	var noDecode=options.decodeStrings === false;this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
	// encoding is 'binary' so we have to make this configurable.
	// Everything else in the universe uses 'utf8', though.
	this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
	// of how much we're waiting to get pushed to some underlying
	// socket or file.
	this.length = 0; // a flag to see when we're in the middle of a write.
	this.writing = false; // when true all writes will be buffered until .uncork() call
	this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
	// or on a later tick.  We set this to true at first, because any
	// actions that shouldn't happen until "later" should generally also
	// not happen before the first write call.
	this.sync = true; // a flag to know if we're processing previously buffered items, which
	// may call the _write() callback in the same tick, so that we don't
	// end up in an overlapped onwrite situation.
	this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
	this.onwrite = function(er){onwrite(stream,er);}; // the callback that the user supplies to write(chunk,encoding,cb)
	this.writecb = null; // the amount that is being written when _write is called.
	this.writelen = 0;this.buffer = []; // number of pending user-supplied write callbacks
	// this must be 0 before 'finish' can be emitted
	this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
	// This is relevant for synchronous Transform streams
	this.prefinished = false; // True if the error was already emitted and should not be thrown again
	this.errorEmitted = false;}function Writable(options){var Duplex=__webpack_require__(37); // Writable ctor is applied to Duplexes, though they're not
	// instanceof Writable, they're instanceof Readable.
	if(!(this instanceof Writable) && !(this instanceof Duplex))return new Writable(options);this._writableState = new WritableState(options,this); // legacy.
	this.writable = true;Stream.call(this);} // Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function(){this.emit('error',new Error('Cannot pipe. Not readable.'));};function writeAfterEnd(stream,state,cb){var er=new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb
	stream.emit('error',er);process.nextTick(function(){cb(er);});} // If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream,state,chunk,cb){var valid=true;if(!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode){var er=new TypeError('Invalid non-string/buffer chunk');stream.emit('error',er);process.nextTick(function(){cb(er);});valid = false;}return valid;}Writable.prototype.write = function(chunk,encoding,cb){var state=this._writableState;var ret=false;if(util.isFunction(encoding)){cb = encoding;encoding = null;}if(util.isBuffer(chunk))encoding = 'buffer';else if(!encoding)encoding = state.defaultEncoding;if(!util.isFunction(cb))cb = function(){};if(state.ended)writeAfterEnd(this,state,cb);else if(validChunk(this,state,chunk,cb)){state.pendingcb++;ret = writeOrBuffer(this,state,chunk,encoding,cb);}return ret;};Writable.prototype.cork = function(){var state=this._writableState;state.corked++;};Writable.prototype.uncork = function(){var state=this._writableState;if(state.corked){state.corked--;if(!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)clearBuffer(this,state);}};function decodeChunk(state,chunk,encoding){if(!state.objectMode && state.decodeStrings !== false && util.isString(chunk)){chunk = new Buffer(chunk,encoding);}return chunk;} // if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream,state,chunk,encoding,cb){chunk = decodeChunk(state,chunk,encoding);if(util.isBuffer(chunk))encoding = 'buffer';var len=state.objectMode?1:chunk.length;state.length += len;var ret=state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
	if(!ret)state.needDrain = true;if(state.writing || state.corked)state.buffer.push(new WriteReq(chunk,encoding,cb));else doWrite(stream,state,false,len,chunk,encoding,cb);return ret;}function doWrite(stream,state,writev,len,chunk,encoding,cb){state.writelen = len;state.writecb = cb;state.writing = true;state.sync = true;if(writev)stream._writev(chunk,state.onwrite);else stream._write(chunk,encoding,state.onwrite);state.sync = false;}function onwriteError(stream,state,sync,er,cb){if(sync)process.nextTick(function(){state.pendingcb--;cb(er);});else {state.pendingcb--;cb(er);}stream._writableState.errorEmitted = true;stream.emit('error',er);}function onwriteStateUpdate(state){state.writing = false;state.writecb = null;state.length -= state.writelen;state.writelen = 0;}function onwrite(stream,er){var state=stream._writableState;var sync=state.sync;var cb=state.writecb;onwriteStateUpdate(state);if(er)onwriteError(stream,state,sync,er,cb);else { // Check if we're actually ready to finish, but don't emit yet
	var finished=needFinish(stream,state);if(!finished && !state.corked && !state.bufferProcessing && state.buffer.length){clearBuffer(stream,state);}if(sync){process.nextTick(function(){afterWrite(stream,state,finished,cb);});}else {afterWrite(stream,state,finished,cb);}}}function afterWrite(stream,state,finished,cb){if(!finished)onwriteDrain(stream,state);state.pendingcb--;cb();finishMaybe(stream,state);} // Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream,state){if(state.length === 0 && state.needDrain){state.needDrain = false;stream.emit('drain');}} // if there's something in the buffer waiting, then process it
	function clearBuffer(stream,state){state.bufferProcessing = true;if(stream._writev && state.buffer.length > 1){ // Fast case, write everything using _writev()
	var cbs=[];for(var c=0;c < state.buffer.length;c++) cbs.push(state.buffer[c].callback); // count the one we are adding, as well.
	// TODO(isaacs) clean this up
	state.pendingcb++;doWrite(stream,state,true,state.length,state.buffer,'',function(err){for(var i=0;i < cbs.length;i++) {state.pendingcb--;cbs[i](err);}}); // Clear buffer
	state.buffer = [];}else { // Slow case, write chunks one-by-one
	for(var c=0;c < state.buffer.length;c++) {var entry=state.buffer[c];var chunk=entry.chunk;var encoding=entry.encoding;var cb=entry.callback;var len=state.objectMode?1:chunk.length;doWrite(stream,state,false,len,chunk,encoding,cb); // if we didn't call the onwrite immediately, then
	// it means that we need to wait until it does.
	// also, that means that the chunk and cb are currently
	// being processed, so move the buffer counter past them.
	if(state.writing){c++;break;}}if(c < state.buffer.length)state.buffer = state.buffer.slice(c);else state.buffer.length = 0;}state.bufferProcessing = false;}Writable.prototype._write = function(chunk,encoding,cb){cb(new Error('not implemented'));};Writable.prototype._writev = null;Writable.prototype.end = function(chunk,encoding,cb){var state=this._writableState;if(util.isFunction(chunk)){cb = chunk;chunk = null;encoding = null;}else if(util.isFunction(encoding)){cb = encoding;encoding = null;}if(!util.isNullOrUndefined(chunk))this.write(chunk,encoding); // .end() fully uncorks
	if(state.corked){state.corked = 1;this.uncork();} // ignore unnecessary end() calls.
	if(!state.ending && !state.finished)endWritable(this,state,cb);};function needFinish(stream,state){return state.ending && state.length === 0 && !state.finished && !state.writing;}function prefinish(stream,state){if(!state.prefinished){state.prefinished = true;stream.emit('prefinish');}}function finishMaybe(stream,state){var need=needFinish(stream,state);if(need){if(state.pendingcb === 0){prefinish(stream,state);state.finished = true;stream.emit('finish');}else prefinish(stream,state);}return need;}function endWritable(stream,state,cb){state.ending = true;finishMaybe(stream,state);if(cb){if(state.finished)process.nextTick(cb);else stream.once('finish',cb);}state.ended = true;}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';var Buffer=__webpack_require__(28).Buffer;var isBufferEncoding=Buffer.isEncoding || function(encoding){switch(encoding && encoding.toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':return true;default:return false;}};function assertEncoding(encoding){if(encoding && !isBufferEncoding(encoding)){throw new Error('Unknown encoding: ' + encoding);}} // StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder=exports.StringDecoder = function(encoding){this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/,'');assertEncoding(encoding);switch(this.encoding){case 'utf8': // CESU-8 represents each of Surrogate Pair by 3-bytes
	this.surrogateSize = 3;break;case 'ucs2':case 'utf16le': // UTF-16 represents each of Surrogate Pair by 2-bytes
	this.surrogateSize = 2;this.detectIncompleteChar = utf16DetectIncompleteChar;break;case 'base64': // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	this.surrogateSize = 3;this.detectIncompleteChar = base64DetectIncompleteChar;break;default:this.write = passThroughWrite;return;} // Enough space to store all bytes of a single character. UTF-8 needs 4
	// bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	this.charBuffer = new Buffer(6); // Number of bytes received for the current incomplete multi-byte character.
	this.charReceived = 0; // Number of bytes expected for the current incomplete multi-byte character.
	this.charLength = 0;}; // write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer){var charStr=''; // if our last write ended with an incomplete multibyte character
	while(this.charLength) { // determine how many remaining bytes this buffer has to offer for this char
	var available=buffer.length >= this.charLength - this.charReceived?this.charLength - this.charReceived:buffer.length; // add the new bytes to the char buffer
	buffer.copy(this.charBuffer,this.charReceived,0,available);this.charReceived += available;if(this.charReceived < this.charLength){ // still not enough chars in this buffer? wait for more ...
	return '';} // remove bytes belonging to the current character from the buffer
	buffer = buffer.slice(available,buffer.length); // get the character that was split
	charStr = this.charBuffer.slice(0,this.charLength).toString(this.encoding); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	var charCode=charStr.charCodeAt(charStr.length - 1);if(charCode >= 0xD800 && charCode <= 0xDBFF){this.charLength += this.surrogateSize;charStr = '';continue;}this.charReceived = this.charLength = 0; // if there are no more bytes in this buffer, just emit our char
	if(buffer.length === 0){return charStr;}break;} // determine and set charLength / charReceived
	this.detectIncompleteChar(buffer);var end=buffer.length;if(this.charLength){ // buffer the incomplete character bytes we got
	buffer.copy(this.charBuffer,0,buffer.length - this.charReceived,end);end -= this.charReceived;}charStr += buffer.toString(this.encoding,0,end);var end=charStr.length - 1;var charCode=charStr.charCodeAt(end); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	if(charCode >= 0xD800 && charCode <= 0xDBFF){var size=this.surrogateSize;this.charLength += size;this.charReceived += size;this.charBuffer.copy(this.charBuffer,size,0,size);buffer.copy(this.charBuffer,0,0,size);return charStr.substring(0,end);} // or just emit the charStr
	return charStr;}; // detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer){ // determine how many bytes we have to check at the end of this buffer
	var i=buffer.length >= 3?3:buffer.length; // Figure out if one of the last i bytes of our buffer announces an
	// incomplete char.
	for(;i > 0;i--) {var c=buffer[buffer.length - i]; // See http://en.wikipedia.org/wiki/UTF-8#Description
	// 110XXXXX
	if(i == 1 && c >> 5 == 0x06){this.charLength = 2;break;} // 1110XXXX
	if(i <= 2 && c >> 4 == 0x0E){this.charLength = 3;break;} // 11110XXX
	if(i <= 3 && c >> 3 == 0x1E){this.charLength = 4;break;}}this.charReceived = i;};StringDecoder.prototype.end = function(buffer){var res='';if(buffer && buffer.length)res = this.write(buffer);if(this.charReceived){var cr=this.charReceived;var buf=this.charBuffer;var enc=this.encoding;res += buf.slice(0,cr).toString(enc);}return res;};function passThroughWrite(buffer){return buffer.toString(this.encoding);}function utf16DetectIncompleteChar(buffer){this.charReceived = buffer.length % 2;this.charLength = this.charReceived?2:0;}function base64DetectIncompleteChar(buffer){this.charReceived = buffer.length % 3;this.charLength = this.charReceived?3:0;}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.
	'use strict';module.exports = Transform;var Duplex=__webpack_require__(37); /*<replacement>*/var util=__webpack_require__(35);util.inherits = __webpack_require__(23); /*</replacement>*/util.inherits(Transform,Duplex);function TransformState(options,stream){this.afterTransform = function(er,data){return afterTransform(stream,er,data);};this.needTransform = false;this.transforming = false;this.writecb = null;this.writechunk = null;}function afterTransform(stream,er,data){var ts=stream._transformState;ts.transforming = false;var cb=ts.writecb;if(!cb)return stream.emit('error',new Error('no writecb in Transform class'));ts.writechunk = null;ts.writecb = null;if(!util.isNullOrUndefined(data))stream.push(data);if(cb)cb(er);var rs=stream._readableState;rs.reading = false;if(rs.needReadable || rs.length < rs.highWaterMark){stream._read(rs.highWaterMark);}}function Transform(options){if(!(this instanceof Transform))return new Transform(options);Duplex.call(this,options);this._transformState = new TransformState(options,this); // when the writable side finishes, then flush out anything remaining.
	var stream=this; // start out asking for a readable event once data is transformed.
	this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
	// that Readable wants before the first _read call, so unset the
	// sync guard flag.
	this._readableState.sync = false;this.once('prefinish',function(){if(util.isFunction(this._flush))this._flush(function(er){done(stream,er);});else done(stream);});}Transform.prototype.push = function(chunk,encoding){this._transformState.needTransform = false;return Duplex.prototype.push.call(this,chunk,encoding);}; // This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk,encoding,cb){throw new Error('not implemented');};Transform.prototype._write = function(chunk,encoding,cb){var ts=this._transformState;ts.writecb = cb;ts.writechunk = chunk;ts.writeencoding = encoding;if(!ts.transforming){var rs=this._readableState;if(ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)this._read(rs.highWaterMark);}}; // Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n){var ts=this._transformState;if(!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming){ts.transforming = true;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform);}else { // mark that we need a transform, so that any data that comes in
	// will get processed, now that we've asked for it.
	ts.needTransform = true;}};function done(stream,er){if(er)return stream.emit('error',er); // if there's nothing in the write buffer, then that means
	// that nothing more will ever be provided
	var ws=stream._writableState;var ts=stream._transformState;if(ws.length)throw new Error('calling transform done when ws.length != 0');if(ts.transforming)throw new Error('calling transform done when still transforming');return stream.push(null);}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.
	'use strict';module.exports = PassThrough;var Transform=__webpack_require__(40); /*<replacement>*/var util=__webpack_require__(35);util.inherits = __webpack_require__(23); /*</replacement>*/util.inherits(PassThrough,Transform);function PassThrough(options){if(!(this instanceof PassThrough))return new PassThrough(options);Transform.call(this,options);}PassThrough.prototype._transform = function(chunk,encoding,cb){cb(null,chunk);};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports = __webpack_require__(38);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports = __webpack_require__(37);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports = __webpack_require__(40);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports = __webpack_require__(41);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Stream=__webpack_require__(22);var util=__webpack_require__(47);var Response=module.exports = function(res){this.offset = 0;this.readable = true;};util.inherits(Response,Stream);var capable={streaming:true,status2:true};function parseHeaders(res){var lines=res.getAllResponseHeaders().split(/\r?\n/);var headers={};for(var i=0;i < lines.length;i++) {var line=lines[i];if(line === '')continue;var m=line.match(/^([^:]+):\s*(.*)/);if(m){var key=m[1].toLowerCase(),value=m[2];if(headers[key] !== undefined){if(isArray(headers[key])){headers[key].push(value);}else {headers[key] = [headers[key],value];}}else {headers[key] = value;}}else {headers[line] = true;}}return headers;}Response.prototype.getResponse = function(xhr){var respType=String(xhr.responseType).toLowerCase();if(respType === 'blob')return xhr.responseBlob || xhr.response;if(respType === 'arraybuffer')return xhr.response;return xhr.responseText;};Response.prototype.getHeader = function(key){return this.headers[key.toLowerCase()];};Response.prototype.handle = function(res){if(res.readyState === 2 && capable.status2){try{this.statusCode = res.status;this.headers = parseHeaders(res);}catch(err) {capable.status2 = false;}if(capable.status2){this.emit('ready');}}else if(capable.streaming && res.readyState === 3){try{if(!this.statusCode){this.statusCode = res.status;this.headers = parseHeaders(res);this.emit('ready');}}catch(err) {}try{this._emitData(res);}catch(err) {capable.streaming = false;}}else if(res.readyState === 4){if(!this.statusCode){this.statusCode = res.status;this.emit('ready');}this._emitData(res);if(res.error){this.emit('error',this.getResponse(res));}else this.emit('end');this.emit('close');}};Response.prototype._emitData = function(res){var respBody=this.getResponse(res);if(respBody.toString().match(/ArrayBuffer/)){this.emit('data',new Uint8Array(respBody,this.offset));this.offset = respBody.byteLength;return;}if(respBody.length > this.offset){this.emit('data',respBody.slice(this.offset));this.offset = respBody.length;}};var isArray=Array.isArray || function(xs){return Object.prototype.toString.call(xs) === '[object Array]';};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	'use strict';var formatRegExp=/%[sdj%]/g;exports.format = function(f){if(!isString(f)){var objects=[];for(var i=0;i < arguments.length;i++) {objects.push(inspect(arguments[i]));}return objects.join(' ');}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x === '%%')return '%';if(i >= len)return x;switch(x){case '%s':return String(args[i++]);case '%d':return Number(args[i++]);case '%j':try{return JSON.stringify(args[i++]);}catch(_) {return '[Circular]';}default:return x;}});for(var x=args[i];i < len;x = args[++i]) {if(isNull(x) || !isObject(x)){str += ' ' + x;}else {str += ' ' + inspect(x);}}return str;}; // Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn,msg){ // Allow for deprecating things in the process of starting up.
	if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments);};}if(process.noDeprecation === true){return fn;}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg);}else if(process.traceDeprecation){console.trace(msg);}else {console.error(msg);}warned = true;}return fn.apply(this,arguments);}return deprecated;};var debugs={};var debugEnviron;exports.debuglog = function(set){if(isUndefined(debugEnviron))debugEnviron = process.env.NODE_DEBUG || '';set = set.toUpperCase();if(!debugs[set]){if(new RegExp('\\b' + set + '\\b','i').test(debugEnviron)){var pid=process.pid;debugs[set] = function(){var msg=exports.format.apply(exports,arguments);console.error('%s %d: %s',set,pid,msg);};}else {debugs[set] = function(){};}}return debugs[set];}; /**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */ /* legacy: obj, showHidden, depth, colors*/function inspect(obj,opts){ // default options
	var ctx={seen:[],stylize:stylizeNoColor}; // legacy...
	if(arguments.length >= 3)ctx.depth = arguments[2];if(arguments.length >= 4)ctx.colors = arguments[3];if(isBoolean(opts)){ // legacy...
	ctx.showHidden = opts;}else if(opts){ // got an "options" object
	exports._extend(ctx,opts);} // set default options
	if(isUndefined(ctx.showHidden))ctx.showHidden = false;if(isUndefined(ctx.depth))ctx.depth = 2;if(isUndefined(ctx.colors))ctx.colors = false;if(isUndefined(ctx.customInspect))ctx.customInspect = true;if(ctx.colors)ctx.stylize = stylizeWithColor;return formatValue(ctx,obj,ctx.depth);}exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {'bold':[1,22],'italic':[3,23],'underline':[4,24],'inverse':[7,27],'white':[37,39],'grey':[90,39],'black':[30,39],'blue':[34,39],'cyan':[36,39],'green':[32,39],'magenta':[35,39],'red':[31,39],'yellow':[33,39]}; // Don't use 'blue' not visible on cmd.exe
	inspect.styles = {'special':'cyan','number':'yellow','boolean':'yellow','undefined':'grey','null':'bold','string':'green','date':'magenta', // "name": intentionally not styling
	'regexp':'red'};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';}else {return str;}}function stylizeNoColor(str,styleType){return str;}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val] = true;});return hash;}function formatValue(ctx,value,recurseTimes){ // Provide a hook for user-specified inspect functions.
	// Check that value is an object with an inspect function on it
	if(ctx.customInspect && value && isFunction(value.inspect) &&  // Filter out the util module, it's inspect function is special
	value.inspect !== exports.inspect &&  // Also filter out any prototype objects using the circular check.
	!(value.constructor && value.constructor.prototype === value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret = formatValue(ctx,ret,recurseTimes);}return ret;} // Primitive types cannot have properties
	var primitive=formatPrimitive(ctx,value);if(primitive){return primitive;} // Look up the keys of the object.
	var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys = Object.getOwnPropertyNames(value);} // IE doesn't make error fields non-enumerable
	// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	if(isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)){return formatError(value);} // Some type of object without properties can be shortcutted.
	if(keys.length === 0){if(isFunction(value)){var name=value.name?': ' + value.name:'';return ctx.stylize('[Function' + name + ']','special');}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),'date');}if(isError(value)){return formatError(value);}}var base='',array=false,braces=['{','}']; // Make Array say that they are Array
	if(isArray(value)){array = true;braces = ['[',']'];} // Make functions say that they are functions
	if(isFunction(value)){var n=value.name?': ' + value.name:'';base = ' [Function' + n + ']';} // Make RegExps say that they are RegExps
	if(isRegExp(value)){base = ' ' + RegExp.prototype.toString.call(value);} // Make dates with properties first say the date
	if(isDate(value)){base = ' ' + Date.prototype.toUTCString.call(value);} // Make error with message first say the error
	if(isError(value)){base = ' ' + formatError(value);}if(keys.length === 0 && (!array || value.length == 0)){return braces[0] + base + braces[1];}if(recurseTimes < 0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}else {return ctx.stylize('[Object]','special');}}ctx.seen.push(value);var output;if(array){output = formatArray(ctx,value,recurseTimes,visibleKeys,keys);}else {output = keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);});}ctx.seen.pop();return reduceToSingleString(output,base,braces);}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize('undefined','undefined');if(isString(value)){var simple='\'' + JSON.stringify(value).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"') + '\'';return ctx.stylize(simple,'string');}if(isNumber(value))return ctx.stylize('' + value,'number');if(isBoolean(value))return ctx.stylize('' + value,'boolean'); // For some reason typeof null is "object", so special case here.
	if(isNull(value))return ctx.stylize('null','null');}function formatError(value){return '[' + Error.prototype.toString.call(value) + ']';}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i < l;++i) {if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true));}else {output.push('');}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true));}});return output;}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc = Object.getOwnPropertyDescriptor(value,key) || {value:value[key]};if(desc.get){if(desc.set){str = ctx.stylize('[Getter/Setter]','special');}else {str = ctx.stylize('[Getter]','special');}}else {if(desc.set){str = ctx.stylize('[Setter]','special');}}if(!hasOwnProperty(visibleKeys,key)){name = '[' + key + ']';}if(!str){if(ctx.seen.indexOf(desc.value) < 0){if(isNull(recurseTimes)){str = formatValue(ctx,desc.value,null);}else {str = formatValue(ctx,desc.value,recurseTimes - 1);}if(str.indexOf('\n') > -1){if(array){str = str.split('\n').map(function(line){return '  ' + line;}).join('\n').substr(2);}else {str = '\n' + str.split('\n').map(function(line){return '   ' + line;}).join('\n');}}}else {str = ctx.stylize('[Circular]','special');}}if(isUndefined(name)){if(array && key.match(/^\d+$/)){return str;}name = JSON.stringify('' + key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name = name.substr(1,name.length - 2);name = ctx.stylize(name,'name');}else {name = name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name = ctx.stylize(name,'string');}}return name + ': ' + str;}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf('\n') >= 0)numLinesEst++;return prev + cur.replace(/\u001b\[\d\d?m/g,'').length + 1;},0);if(length > 60){return braces[0] + (base === ''?'':base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];}return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];} // NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar){return Array.isArray(ar);}exports.isArray = isArray;function isBoolean(arg){return typeof arg === 'boolean';}exports.isBoolean = isBoolean;function isNull(arg){return arg === null;}exports.isNull = isNull;function isNullOrUndefined(arg){return arg == null;}exports.isNullOrUndefined = isNullOrUndefined;function isNumber(arg){return typeof arg === 'number';}exports.isNumber = isNumber;function isString(arg){return typeof arg === 'string';}exports.isString = isString;function isSymbol(arg){return typeof arg === 'symbol';}exports.isSymbol = isSymbol;function isUndefined(arg){return arg === void 0;}exports.isUndefined = isUndefined;function isRegExp(re){return isObject(re) && objectToString(re) === '[object RegExp]';}exports.isRegExp = isRegExp;function isObject(arg){return typeof arg === 'object' && arg !== null;}exports.isObject = isObject;function isDate(d){return isObject(d) && objectToString(d) === '[object Date]';}exports.isDate = isDate;function isError(e){return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);}exports.isError = isError;function isFunction(arg){return typeof arg === 'function';}exports.isFunction = isFunction;function isPrimitive(arg){return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' ||  // ES6 symbol
	typeof arg === 'undefined';}exports.isPrimitive = isPrimitive;exports.isBuffer = __webpack_require__(48);function objectToString(o){return Object.prototype.toString.call(o);}function pad(n){return n < 10?'0' + n.toString(10):n.toString(10);}var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; // 26 Feb 16:19:34
	function timestamp(){var d=new Date();var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');return [d.getDate(),months[d.getMonth()],time].join(' ');} // log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function(){console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));}; /**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */exports.inherits = __webpack_require__(49);exports._extend = function(origin,add){ // Don't do anything if add isn't an object
	if(!add || !isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--) {origin[keys[i]] = add[keys[i]];}return origin;};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(25)))

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';module.exports = function isBuffer(arg){return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';};

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';if(typeof Object.create === 'function'){ // implementation from standard node.js 'util' module
	module.exports = function inherits(ctor,superCtor){ctor.super_ = superCtor;ctor.prototype = Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else { // old school shim for old browsers
	module.exports = function inherits(ctor,superCtor){ctor.super_ = superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype = superCtor.prototype;ctor.prototype = new TempCtor();ctor.prototype.constructor = ctor;};}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';;(function(){var object= true?exports:this; // #8: web workers
	var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function InvalidCharacterError(message){this.message = message;}InvalidCharacterError.prototype = new Error();InvalidCharacterError.prototype.name = 'InvalidCharacterError'; // encoder
	// [https://gist.github.com/999166] by [https://github.com/nignag]
	object.btoa || (object.btoa = function(input){for( // initialize result and counter
	var block,charCode,idx=0,map=chars,output=''; // if the next input index does not exist:
	//   change the mapping table to "="
	//   check if d has no fractional digits
	input.charAt(idx | 0) || (map = '=',idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {charCode = input.charCodeAt(idx += 3 / 4);if(charCode > 0xFF){throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");}block = block << 8 | charCode;}return output;}); // decoder
	// [https://gist.github.com/1020396] by [https://github.com/atk]
	object.atob || (object.atob = function(input){input = input.replace(/=+$/,'');if(input.length % 4 == 1){throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");}for( // initialize result and counters
	var bc=0,bs,buffer,idx=0,output=''; // get next character
	buffer = input.charAt(idx++); // character found in table? initialize bit storage and add its ascii value;
	~buffer && (bs = bc % 4?bs * 64 + buffer:buffer, // and if not first of each 4 characters,
	// convert the first 8 bits to one ascii character
	bc++ % 4)?output += String.fromCharCode(255 & bs >> (-2 * bc & 6)):0) { // try to find character in table (0-63, not found => -1)
	buffer = chars.indexOf(buffer);}return output;});})();

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';function DOMParser(options){this.options = options || {locator:{}};}DOMParser.prototype.parseFromString = function(source,mimeType){var options=this.options;var sax=new XMLReader();var domBuilder=options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler
	var errorHandler=options.errorHandler;var locator=options.locator;var defaultNSMap=options.xmlns || {};var entityMap={'lt':'<','gt':'>','amp':'&','quot':'"','apos':"'"};if(locator){domBuilder.setDocumentLocator(locator);}sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);sax.domBuilder = options.domBuilder || domBuilder;if(/\/x?html?$/.test(mimeType)){entityMap.nbsp = '\xa0';entityMap.copy = '\xa9';defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';}if(source){sax.parse(source,defaultNSMap,entityMap);}else {sax.errorHandler.error("invalid document source");}return domBuilder.document;};function buildErrorHandler(errorImpl,domBuilder,locator){if(!errorImpl){if(domBuilder instanceof DOMHandler){return domBuilder;}errorImpl = domBuilder;}var errorHandler={};var isCallback=errorImpl instanceof Function;locator = locator || {};function build(key){var fn=errorImpl[key];if(!fn){if(isCallback){fn = errorImpl.length == 2?function(msg){errorImpl(key,msg);}:errorImpl;}else {var i=arguments.length;while(--i) {if(fn = errorImpl[arguments[i]]){break;}}}}errorHandler[key] = fn && function(msg){fn(msg + _locator(locator));} || function(){};}build('warning','warn');build('error','warn','warning');build('fatalError','warn','warning','error');return errorHandler;} /**
	 * +ContentHandler+ErrorHandler
	 * +LexicalHandler+EntityResolver2
	 * -DeclHandler-DTDHandler 
	 * 
	 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
	 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
	 */function DOMHandler(){this.cdata = false;}function position(locator,node){node.lineNumber = locator.lineNumber;node.columnNumber = locator.columnNumber;} /**
	 * @see org.xml.sax.ContentHandler#startDocument
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
	 */DOMHandler.prototype = {startDocument:function startDocument(){this.document = new DOMImplementation().createDocument(null,null,null);if(this.locator){this.document.documentURI = this.locator.systemId;}},startElement:function startElement(namespaceURI,localName,qName,attrs){var doc=this.document;var el=doc.createElementNS(namespaceURI,qName || localName);var len=attrs.length;appendElement(this,el);this.currentElement = el;this.locator && position(this.locator,el);for(var i=0;i < len;i++) {var namespaceURI=attrs.getURI(i);var value=attrs.getValue(i);var qName=attrs.getQName(i);var attr=doc.createAttributeNS(namespaceURI,qName);if(attr.getOffset){position(attr.getOffset(1),attr);}attr.value = attr.nodeValue = value;el.setAttributeNode(attr);}},endElement:function endElement(namespaceURI,localName,qName){var current=this.currentElement;var tagName=current.tagName;this.currentElement = current.parentNode;},startPrefixMapping:function startPrefixMapping(prefix,uri){},endPrefixMapping:function endPrefixMapping(prefix){},processingInstruction:function processingInstruction(target,data){var ins=this.document.createProcessingInstruction(target,data);this.locator && position(this.locator,ins);appendElement(this,ins);},ignorableWhitespace:function ignorableWhitespace(ch,start,length){},characters:function characters(chars,start,length){chars = _toString.apply(this,arguments); //console.log(chars)
	if(this.currentElement && chars){if(this.cdata){var charNode=this.document.createCDATASection(chars);this.currentElement.appendChild(charNode);}else {var charNode=this.document.createTextNode(chars);this.currentElement.appendChild(charNode);}this.locator && position(this.locator,charNode);}},skippedEntity:function skippedEntity(name){},endDocument:function endDocument(){this.document.normalize();},setDocumentLocator:function setDocumentLocator(locator){if(this.locator = locator){ // && !('lineNumber' in locator)){
	locator.lineNumber = 0;}}, //LexicalHandler
	comment:function comment(chars,start,length){chars = _toString.apply(this,arguments);var comm=this.document.createComment(chars);this.locator && position(this.locator,comm);appendElement(this,comm);},startCDATA:function startCDATA(){ //used in characters() methods
	this.cdata = true;},endCDATA:function endCDATA(){this.cdata = false;},startDTD:function startDTD(name,publicId,systemId){var impl=this.document.implementation;if(impl && impl.createDocumentType){var dt=impl.createDocumentType(name,publicId,systemId);this.locator && position(this.locator,dt);appendElement(this,dt);}}, /**
		 * @see org.xml.sax.ErrorHandler
		 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
		 */warning:function warning(error){console.warn(error,_locator(this.locator));},error:function error(_error){console.error(_error,_locator(this.locator));},fatalError:function fatalError(error){console.error(error,_locator(this.locator));throw error;}};function _locator(l){if(l){return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';}}function _toString(chars,start,length){if(typeof chars == 'string'){return chars.substr(start,length);}else { //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
	if(chars.length >= start + length || start){return new java.lang.String(chars,start,length) + '';}return chars;}} /*
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
	 * used method of org.xml.sax.ext.LexicalHandler:
	 *  #comment(chars, start, length)
	 *  #startCDATA()
	 *  #endCDATA()
	 *  #startDTD(name, publicId, systemId)
	 *
	 *
	 * IGNORED method of org.xml.sax.ext.LexicalHandler:
	 *  #endDTD()
	 *  #startEntity(name)
	 *  #endEntity(name)
	 *
	 *
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
	 * IGNORED method of org.xml.sax.ext.DeclHandler
	 * 	#attributeDecl(eName, aName, type, mode, value)
	 *  #elementDecl(name, model)
	 *  #externalEntityDecl(name, publicId, systemId)
	 *  #internalEntityDecl(name, value)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
	 * IGNORED method of org.xml.sax.EntityResolver2
	 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
	 *  #resolveEntity(publicId, systemId)
	 *  #getExternalSubset(name, baseURI)
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
	 * IGNORED method of org.xml.sax.DTDHandler
	 *  #notationDecl(name, publicId, systemId) {};
	 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
	 */"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){DOMHandler.prototype[key] = function(){return null;};}); /* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */function appendElement(hander,node){if(!hander.currentElement){hander.document.appendChild(node);}else {hander.currentElement.appendChild(node);}} //appendChild and setAttributeNS are preformance key
	if(true){var XMLReader=__webpack_require__(52).XMLReader;var DOMImplementation=exports.DOMImplementation = __webpack_require__(53).DOMImplementation;exports.XMLSerializer = __webpack_require__(53).XMLSerializer;exports.DOMParser = DOMParser;}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
	//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
	//[5]   	Name	   ::=   	NameStartChar (NameChar)*
	"use strict";var nameStartChar=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; //\u10000-\uEFFFF
	var nameChar=new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1,-1) + "·̀-ͯ\\ux203F-⁀]");var tagNamePattern=new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$'); //var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
	//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')
	//S_TAG,	S_ATTR,	S_EQ,	S_V
	//S_ATTR_S,	S_E,	S_S,	S_C
	var S_TAG=0; //tag name offerring
	var S_ATTR=1; //attr name offerring 
	var S_ATTR_S=2; //attr name end and space offer
	var S_EQ=3; //=space?
	var S_V=4; //attr value(no quot value only)
	var S_E=5; //attr value end and no space(quot end)
	var S_S=6; //(attr value end || tag end ) && (space offer)
	var S_C=7; //closed el<el />
	function XMLReader(){}XMLReader.prototype = {parse:function parse(source,defaultNSMap,entityMap){var domBuilder=this.domBuilder;domBuilder.startDocument();_copy(defaultNSMap,defaultNSMap = {});_parse(source,defaultNSMap,entityMap,domBuilder,this.errorHandler);domBuilder.endDocument();}};function _parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){function fixedFromCharCode(code){ // String.prototype.fromCharCode does not supports
	// > 2 bytes unicode chars directly
	if(code > 0xffff){code -= 0x10000;var surrogate1=0xd800 + (code >> 10),surrogate2=0xdc00 + (code & 0x3ff);return String.fromCharCode(surrogate1,surrogate2);}else {return String.fromCharCode(code);}}function entityReplacer(a){var k=a.slice(1,-1);if(k in entityMap){return entityMap[k];}else if(k.charAt(0) === '#'){return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')));}else {errorHandler.error('entity not found:' + a);return a;}}function appendText(end){ //has some bugs
	var xt=source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);locator && position(start);domBuilder.characters(xt,0,end - start);start = end;}function position(start,m){while(start >= endPos && (m = linePattern.exec(source))) {startPos = m.index;endPos = startPos + m[0].length;locator.lineNumber++; //console.log('line++:',locator,startPos,endPos)
	}locator.columnNumber = start - startPos + 1;}var startPos=0;var endPos=0;var linePattern=/.+(?:\r\n?|\n)|.*$/g;var locator=domBuilder.locator;var parseStack=[{currentNSMap:defaultNSMapCopy}];var closeMap={};var start=0;while(true) {var i=source.indexOf('<',start);if(i < 0){if(!source.substr(start).match(/^\s*$/)){var doc=domBuilder.document;var text=doc.createTextNode(source.substr(start));doc.appendChild(text);domBuilder.currentElement = text;}return;}if(i > start){appendText(i);}switch(source.charAt(i + 1)){case '/':var end=source.indexOf('>',i + 3);var tagName=source.substring(i + 2,end);var config=parseStack.pop();var localNSMap=config.localNSMap;if(config.tagName != tagName){errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);}domBuilder.endElement(config.uri,config.localName,tagName);if(localNSMap){for(var prefix in localNSMap) {domBuilder.endPrefixMapping(prefix);}}end++;break; // end elment
	case '?': // <?...?>
	locator && position(i);end = parseInstruction(source,i,domBuilder);break;case '!': // <!doctype,<![CDATA,<!--
	locator && position(i);end = parseDCC(source,i,domBuilder,errorHandler);break;default:try{locator && position(i);var el=new ElementAttributes(); //elStartEnd
	var end=parseElementStartPart(source,i,el,entityReplacer,errorHandler);var len=el.length; //position fixed
	if(len && locator){var backup=copyLocator(locator,{});for(var i=0;i < len;i++) {var a=el[i];position(a.offset);a.offset = copyLocator(locator,{});}copyLocator(backup,locator);}if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){el.closed = true;if(!entityMap.nbsp){errorHandler.warning('unclosed xml attribute');}}appendElement(el,domBuilder,parseStack);if(el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed){end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder);}else {end++;}}catch(e) {errorHandler.error('element parse error: ' + e);end = -1;}}if(end < 0){ //TODO: 这里有可能sax回退，有位置错误风险
	appendText(i + 1);}else {start = end;}}}function copyLocator(f,t){t.lineNumber = f.lineNumber;t.columnNumber = f.columnNumber;return t;} /**
	 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
	 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
	 */function parseElementStartPart(source,start,el,entityReplacer,errorHandler){var attrName;var value;var p=++start;var s=S_TAG; //status
	while(true) {var c=source.charAt(p);switch(c){case '=':if(s === S_ATTR){ //attrName
	attrName = source.slice(start,p);s = S_EQ;}else if(s === S_ATTR_S){s = S_EQ;}else { //fatalError: equal must after attrName or space after attrName
	throw new Error('attribute equal must after attrName');}break;case '\'':case '"':if(s === S_EQ){ //equal
	start = p + 1;p = source.indexOf(c,start);if(p > 0){value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);el.add(attrName,value,start - 1);s = S_E;}else { //fatalError: no end quot match
	throw new Error('attribute value no end \'' + c + '\' match');}}else if(s == S_V){value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer); //console.log(attrName,value,start,p)
	el.add(attrName,value,start); //console.dir(el)
	errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');start = p + 1;s = S_E;}else { //fatalError: no equal before
	throw new Error('attribute value must after "="');}break;case '/':switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_E:case S_S:case S_C:s = S_C;el.closed = true;case S_V:case S_ATTR:case S_ATTR_S:break; //case S_EQ:
	default:throw new Error("attribute invalid close char('/')");}break;case '': //end document
	//throw new Error('unexpected end of input')
	errorHandler.error('unexpected end of input');case '>':switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_E:case S_S:case S_C:break; //normal
	case S_V: //Compatible state
	case S_ATTR:value = source.slice(start,p);if(value.slice(-1) === '/'){el.closed = true;value = value.slice(0,-1);}case S_ATTR_S:if(s === S_ATTR_S){value = attrName;}if(s == S_V){errorHandler.warning('attribute "' + value + '" missed quot(")!!');el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start);}else {errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');el.add(value,value,start);}break;case S_EQ:throw new Error('attribute value missed!!');} //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
	return p; /*xml space '\x20' | #x9 | #xD | #xA; */case "":c = ' ';default:if(c <= ' '){ //space
	switch(s){case S_TAG:el.setTagName(source.slice(start,p)); //tagName
	s = S_S;break;case S_ATTR:attrName = source.slice(start,p);s = S_ATTR_S;break;case S_V:var value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);errorHandler.warning('attribute "' + value + '" missed quot(")!!');el.add(attrName,value,start);case S_E:s = S_S;break; //case S_S:
	//case S_EQ:
	//case S_ATTR_S:
	//	void();break;
	//case S_C:
	//ignore warning
	}}else { //not space
	//S_TAG,	S_ATTR,	S_EQ,	S_V
	//S_ATTR_S,	S_E,	S_S,	S_C
	switch(s){ //case S_TAG:void();break;
	//case S_ATTR:void();break;
	//case S_V:void();break;
	case S_ATTR_S:errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead!!');el.add(attrName,attrName,start);start = p;s = S_ATTR;break;case S_E:errorHandler.warning('attribute space is required"' + attrName + '"!!');case S_S:s = S_ATTR;start = p;break;case S_EQ:s = S_V;start = p;break;case S_C:throw new Error("elements closed character '/' and '>' must be connected to");}}}p++;}} /**
	 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
	 */function appendElement(el,domBuilder,parseStack){var tagName=el.tagName;var localNSMap=null;var currentNSMap=parseStack[parseStack.length - 1].currentNSMap;var i=el.length;while(i--) {var a=el[i];var qName=a.qName;var value=a.value;var nsp=qName.indexOf(':');if(nsp > 0){var prefix=a.prefix = qName.slice(0,nsp);var localName=qName.slice(nsp + 1);var nsPrefix=prefix === 'xmlns' && localName;}else {localName = qName;prefix = null;nsPrefix = qName === 'xmlns' && '';} //can not set prefix,because prefix !== ''
	a.localName = localName; //prefix == null for no ns prefix attribute 
	if(nsPrefix !== false){ //hack!!
	if(localNSMap == null){localNSMap = {}; //console.log(currentNSMap,0)
	_copy(currentNSMap,currentNSMap = {}); //console.log(currentNSMap,1)
	}currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;a.uri = 'http://www.w3.org/2000/xmlns/';domBuilder.startPrefixMapping(nsPrefix,value);}}var i=el.length;while(i--) {a = el[i];var prefix=a.prefix;if(prefix){ //no prefix attribute has no namespace
	if(prefix === 'xml'){a.uri = 'http://www.w3.org/XML/1998/namespace';}if(prefix !== 'xmlns'){a.uri = currentNSMap[prefix]; //{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
	}}}var nsp=tagName.indexOf(':');if(nsp > 0){prefix = el.prefix = tagName.slice(0,nsp);localName = el.localName = tagName.slice(nsp + 1);}else {prefix = null; //important!!
	localName = el.localName = tagName;} //no prefix element has default namespace
	var ns=el.uri = currentNSMap[prefix || ''];domBuilder.startElement(ns,localName,tagName,el); //endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){domBuilder.endElement(ns,localName,tagName);if(localNSMap){for(prefix in localNSMap) {domBuilder.endPrefixMapping(prefix);}}}else {el.currentNSMap = currentNSMap;el.localNSMap = localNSMap;parseStack.push(el);}}function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){if(/^(?:script|textarea)$/i.test(tagName)){var elEndStart=source.indexOf('</' + tagName + '>',elStartEnd);var text=source.substring(elStartEnd + 1,elEndStart);if(/[&<]/.test(text)){if(/^script$/i.test(tagName)){ //if(!/\]\]>/.test(text)){
	//lexHandler.startCDATA();
	domBuilder.characters(text,0,text.length); //lexHandler.endCDATA();
	return elEndStart; //}
	} //}else{//text area
	text = text.replace(/&#?\w+;/g,entityReplacer);domBuilder.characters(text,0,text.length);return elEndStart; //}
	}}return elStartEnd + 1;}function fixSelfClosed(source,elStartEnd,tagName,closeMap){ //if(tagName in closeMap){
	var pos=closeMap[tagName];if(pos == null){ //console.log(tagName)
	pos = closeMap[tagName] = source.lastIndexOf('</' + tagName + '>');}return pos < elStartEnd; //} 
	}function _copy(source,target){for(var n in source) {target[n] = source[n];}}function parseDCC(source,start,domBuilder,errorHandler){ //sure start with '<!'
	var next=source.charAt(start + 2);switch(next){case '-':if(source.charAt(start + 3) === '-'){var end=source.indexOf('-->',start + 4); //append comment source.substring(4,end)//<!--
	if(end > start){domBuilder.comment(source,start + 4,end - start - 4);return end + 3;}else {errorHandler.error("Unclosed comment");return -1;}}else { //error
	return -1;}default:if(source.substr(start + 3,6) == 'CDATA['){var end=source.indexOf(']]>',start + 9);domBuilder.startCDATA();domBuilder.characters(source,start + 9,end - start - 9);domBuilder.endCDATA();return end + 3;} //<!DOCTYPE
	//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
	var matchs=split(source,start);var len=matchs.length;if(len > 1 && /!doctype/i.test(matchs[0][0])){var name=matchs[1][0];var pubid=len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];var sysid=len > 4 && matchs[4][0];var lastMatch=matchs[len - 1];domBuilder.startDTD(name,pubid && pubid.replace(/^(['"])(.*?)\1$/,'$2'),sysid && sysid.replace(/^(['"])(.*?)\1$/,'$2'));domBuilder.endDTD();return lastMatch.index + lastMatch[0].length;}}return -1;}function parseInstruction(source,start,domBuilder){var end=source.indexOf('?>',start);if(end){var match=source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(match){var len=match[0].length;domBuilder.processingInstruction(match[1],match[2]);return end + 2;}else { //error
	return -1;}}return -1;} /**
	 * @param source
	 */function ElementAttributes(source){}ElementAttributes.prototype = {setTagName:function setTagName(tagName){if(!tagNamePattern.test(tagName)){throw new Error('invalid tagName:' + tagName);}this.tagName = tagName;},add:function add(qName,value,offset){if(!tagNamePattern.test(qName)){throw new Error('invalid attribute:' + qName);}this[this.length++] = {qName:qName,value:value,offset:offset};},length:0,getLocalName:function getLocalName(i){return this[i].localName;},getOffset:function getOffset(i){return this[i].offset;},getQName:function getQName(i){return this[i].qName;},getURI:function getURI(i){return this[i].uri;},getValue:function getValue(i){return this[i].value;} //	,getIndex:function(uri, localName)){
	//		if(localName){
	//			
	//		}else{
	//			var qName = uri
	//		}
	//	},
	//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
	//	getType:function(uri,localName){}
	//	getType:function(i){},
	};function _set_proto_(thiz,parent){thiz.__proto__ = parent;return thiz;}if(!(_set_proto_({},_set_proto_.prototype) instanceof _set_proto_)){_set_proto_ = function(thiz,parent){function p(){};p.prototype = parent;p = new p();for(parent in thiz) {p[parent] = thiz[parent];}return p;};}function split(source,start){var match;var buf=[];var reg=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;reg.lastIndex = start;reg.exec(source); //skip <
	while(match = reg.exec(source)) {buf.push(match);if(match[1])return buf;}}if(true){exports.XMLReader = XMLReader;}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * DOM Level 2
	 * Object DOMException
	 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
	 */'use strict';function copy(src,dest){for(var p in src) {dest[p] = src[p];}} /**
	^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
	^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
	 */function _extends(Class,Super){var pt=Class.prototype;if(Object.create){var ppt=Object.create(Super.prototype);pt.__proto__ = ppt;}if(!(pt instanceof Super)){var t=function t(){};;t.prototype = Super.prototype;t = new t();copy(pt,t);Class.prototype = pt = t;}if(pt.constructor != Class){if(typeof Class != 'function'){console.error("unknow Class:" + Class);}pt.constructor = Class;}}var htmlns='http://www.w3.org/1999/xhtml'; // Node Types
	var NodeType={};var ELEMENT_NODE=NodeType.ELEMENT_NODE = 1;var ATTRIBUTE_NODE=NodeType.ATTRIBUTE_NODE = 2;var TEXT_NODE=NodeType.TEXT_NODE = 3;var CDATA_SECTION_NODE=NodeType.CDATA_SECTION_NODE = 4;var ENTITY_REFERENCE_NODE=NodeType.ENTITY_REFERENCE_NODE = 5;var ENTITY_NODE=NodeType.ENTITY_NODE = 6;var PROCESSING_INSTRUCTION_NODE=NodeType.PROCESSING_INSTRUCTION_NODE = 7;var COMMENT_NODE=NodeType.COMMENT_NODE = 8;var DOCUMENT_NODE=NodeType.DOCUMENT_NODE = 9;var DOCUMENT_TYPE_NODE=NodeType.DOCUMENT_TYPE_NODE = 10;var DOCUMENT_FRAGMENT_NODE=NodeType.DOCUMENT_FRAGMENT_NODE = 11;var NOTATION_NODE=NodeType.NOTATION_NODE = 12; // ExceptionCode
	var ExceptionCode={};var ExceptionMessage={};var INDEX_SIZE_ERR=ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error",1);var DOMSTRING_SIZE_ERR=ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error",2);var HIERARCHY_REQUEST_ERR=ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error",3);var WRONG_DOCUMENT_ERR=ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document",4);var INVALID_CHARACTER_ERR=ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character",5);var NO_DATA_ALLOWED_ERR=ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed",6);var NO_MODIFICATION_ALLOWED_ERR=ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed",7);var NOT_FOUND_ERR=ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found",8);var NOT_SUPPORTED_ERR=ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported",9);var INUSE_ATTRIBUTE_ERR=ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use",10); //level2
	var INVALID_STATE_ERR=ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state",11);var SYNTAX_ERR=ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error",12);var INVALID_MODIFICATION_ERR=ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification",13);var NAMESPACE_ERR=ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace",14);var INVALID_ACCESS_ERR=ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access",15);function DOMException(code,message){if(message instanceof Error){var error=message;}else {error = this;Error.call(this,ExceptionMessage[code]);this.message = ExceptionMessage[code];if(Error.captureStackTrace)Error.captureStackTrace(this,DOMException);}error.code = code;if(message)this.message = this.message + ": " + message;return error;};DOMException.prototype = Error.prototype;copy(ExceptionCode,DOMException); /**
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
	 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
	 * The items in the NodeList are accessible via an integral index, starting from 0.
	 */function NodeList(){};NodeList.prototype = { /**
		 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
		 * @standard level1
		 */length:0, /**
		 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
		 * @standard level1
		 * @param index  unsigned long 
		 *   Index into the collection.
		 * @return Node
		 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
		 */item:function item(index){return this[index] || null;}};function LiveNodeList(node,refresh){this._node = node;this._refresh = refresh;_updateLiveList(this);}function _updateLiveList(list){var inc=list._node._inc || list._node.ownerDocument._inc;if(list._inc != inc){var ls=list._refresh(list._node); //console.log(ls.length)
	__set__(list,'length',ls.length);copy(ls,list);list._inc = inc;}}LiveNodeList.prototype.item = function(i){_updateLiveList(this);return this[i];};_extends(LiveNodeList,NodeList); /**
	 * 
	 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
	 * NamedNodeMap objects in the DOM are live.
	 * used for attributes or DocumentType entities 
	 */function NamedNodeMap(){};function _findNodeIndex(list,node){var i=list.length;while(i--) {if(list[i] === node){return i;}}}function _addNamedNode(el,list,newAttr,oldAttr){if(oldAttr){list[_findNodeIndex(list,oldAttr)] = newAttr;}else {list[list.length++] = newAttr;}if(el){newAttr.ownerElement = el;var doc=el.ownerDocument;if(doc){oldAttr && _onRemoveAttribute(doc,el,oldAttr);_onAddAttribute(doc,el,newAttr);}}}function _removeNamedNode(el,list,attr){var i=_findNodeIndex(list,attr);if(i >= 0){var lastIndex=list.length - 1;while(i < lastIndex) {list[i] = list[++i];}list.length = lastIndex;if(el){var doc=el.ownerDocument;if(doc){_onRemoveAttribute(doc,el,attr);attr.ownerElement = null;}}}else {throw DOMException(NOT_FOUND_ERR,new Error());}}NamedNodeMap.prototype = {length:0,item:NodeList.prototype.item,getNamedItem:function getNamedItem(key){ //		if(key.indexOf(':')>0 || key == 'xmlns'){
	//			return null;
	//		}
	var i=this.length;while(i--) {var attr=this[i];if(attr.nodeName == key){return attr;}}},setNamedItem:function setNamedItem(attr){var el=attr.ownerElement;if(el && el != this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR);}var oldAttr=this.getNamedItem(attr.nodeName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr;}, /* returns Node */setNamedItemNS:function setNamedItemNS(attr){ // raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
	var el=attr.ownerElement,oldAttr;if(el && el != this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR);}oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr;}, /* returns Node */removeNamedItem:function removeNamedItem(key){var attr=this.getNamedItem(key);_removeNamedNode(this._ownerElement,this,attr);return attr;}, // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	//for level2
	removeNamedItemNS:function removeNamedItemNS(namespaceURI,localName){var attr=this.getNamedItemNS(namespaceURI,localName);_removeNamedNode(this._ownerElement,this,attr);return attr;},getNamedItemNS:function getNamedItemNS(namespaceURI,localName){var i=this.length;while(i--) {var node=this[i];if(node.localName == localName && node.namespaceURI == namespaceURI){return node;}}return null;}}; /**
	 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
	 */function DOMImplementation( /* Object */features){this._features = {};if(features){for(var feature in features) {this._features = features[feature];}}};DOMImplementation.prototype = {hasFeature:function hasFeature( /* string */feature, /* string */version){var versions=this._features[feature.toLowerCase()];if(versions && (!version || version in versions)){return true;}else {return false;}}, // Introduced in DOM Level 2:
	createDocument:function createDocument(namespaceURI,qualifiedName,doctype){ // raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
	var doc=new Document();doc.doctype = doctype;if(doctype){doc.appendChild(doctype);}doc.implementation = this;doc.childNodes = new NodeList();if(qualifiedName){var root=doc.createElementNS(namespaceURI,qualifiedName);doc.appendChild(root);}return doc;}, // Introduced in DOM Level 2:
	createDocumentType:function createDocumentType(qualifiedName,publicId,systemId){ // raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
	var node=new DocumentType();node.name = qualifiedName;node.nodeName = qualifiedName;node.publicId = publicId;node.systemId = systemId; // Introduced in DOM Level 2:
	//readonly attribute DOMString        internalSubset;
	//TODO:..
	//  readonly attribute NamedNodeMap     entities;
	//  readonly attribute NamedNodeMap     notations;
	return node;}}; /**
	 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	 */function Node(){};Node.prototype = {firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null, // Modified in DOM Level 2:
	insertBefore:function insertBefore(newChild,refChild){ //raises 
	return _insertBefore(this,newChild,refChild);},replaceChild:function replaceChild(newChild,oldChild){ //raises 
	this.insertBefore(newChild,oldChild);if(oldChild){this.removeChild(oldChild);}},removeChild:function removeChild(oldChild){return _removeChild(this,oldChild);},appendChild:function appendChild(newChild){return this.insertBefore(newChild,null);},hasChildNodes:function hasChildNodes(){return this.firstChild != null;},cloneNode:function cloneNode(deep){return _cloneNode(this.ownerDocument || this,this,deep);}, // Modified in DOM Level 2:
	normalize:function normalize(){var child=this.firstChild;while(child) {var next=child.nextSibling;if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){this.removeChild(next);child.appendData(next.data);}else {child.normalize();child = next;}}}, // Introduced in DOM Level 2:
	isSupported:function isSupported(feature,version){return this.ownerDocument.implementation.hasFeature(feature,version);}, // Introduced in DOM Level 2:
	hasAttributes:function hasAttributes(){return this.attributes.length > 0;},lookupPrefix:function lookupPrefix(namespaceURI){var el=this;while(el) {var map=el._nsMap; //console.dir(map)
	if(map){for(var n in map) {if(map[n] == namespaceURI){return n;}}}el = el.nodeType == 2?el.ownerDocument:el.parentNode;}return null;}, // Introduced in DOM Level 3:
	lookupNamespaceURI:function lookupNamespaceURI(prefix){var el=this;while(el) {var map=el._nsMap; //console.dir(map)
	if(map){if(prefix in map){return map[prefix];}}el = el.nodeType == 2?el.ownerDocument:el.parentNode;}return null;}, // Introduced in DOM Level 3:
	isDefaultNamespace:function isDefaultNamespace(namespaceURI){var prefix=this.lookupPrefix(namespaceURI);return prefix == null;}};function _xmlEncoder(c){return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';}copy(NodeType,Node);copy(NodeType,Node.prototype); /**
	 * @param callback return true for continue,false for break
	 * @return boolean true: break visit;
	 */function _visitNode(node,callback){if(callback(node)){return true;}if(node = node.firstChild){do {if(_visitNode(node,callback)){return true;}}while(node = node.nextSibling);}}function Document(){}function _onAddAttribute(doc,el,newAttr){doc && doc._inc++;var ns=newAttr.namespaceURI;if(ns == 'http://www.w3.org/2000/xmlns/'){ //update namespace
	el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value;}}function _onRemoveAttribute(doc,el,newAttr,remove){doc && doc._inc++;var ns=newAttr.namespaceURI;if(ns == 'http://www.w3.org/2000/xmlns/'){ //update namespace
	delete el._nsMap[newAttr.prefix?newAttr.localName:''];}}function _onUpdateChild(doc,el,newChild){if(doc && doc._inc){doc._inc++; //update childNodes
	var cs=el.childNodes;if(newChild){cs[cs.length++] = newChild;}else { //console.log(1)
	var child=el.firstChild;var i=0;while(child) {cs[i++] = child;child = child.nextSibling;}cs.length = i;}}} /**
	 * attributes;
	 * children;
	 * 
	 * writeable properties:
	 * nodeValue,Attr:value,CharacterData:data
	 * prefix
	 */function _removeChild(parentNode,child){var previous=child.previousSibling;var next=child.nextSibling;if(previous){previous.nextSibling = next;}else {parentNode.firstChild = next;}if(next){next.previousSibling = previous;}else {parentNode.lastChild = previous;}_onUpdateChild(parentNode.ownerDocument,parentNode);return child;} /**
	 * preformance key(refChild == null)
	 */function _insertBefore(parentNode,newChild,nextChild){var cp=newChild.parentNode;if(cp){cp.removeChild(newChild); //remove and update
	}if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){var newFirst=newChild.firstChild;if(newFirst == null){return newChild;}var newLast=newChild.lastChild;}else {newFirst = newLast = newChild;}var pre=nextChild?nextChild.previousSibling:parentNode.lastChild;newFirst.previousSibling = pre;newLast.nextSibling = nextChild;if(pre){pre.nextSibling = newFirst;}else {parentNode.firstChild = newFirst;}if(nextChild == null){parentNode.lastChild = newLast;}else {nextChild.previousSibling = newLast;}do {newFirst.parentNode = parentNode;}while(newFirst !== newLast && (newFirst = newFirst.nextSibling));_onUpdateChild(parentNode.ownerDocument || parentNode,parentNode); //console.log(parentNode.lastChild.nextSibling == null)
	if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){newChild.firstChild = newChild.lastChild = null;}return newChild;}function _appendSingleChild(parentNode,newChild){var cp=newChild.parentNode;if(cp){var pre=parentNode.lastChild;cp.removeChild(newChild); //remove and update
	var pre=parentNode.lastChild;}var pre=parentNode.lastChild;newChild.parentNode = parentNode;newChild.previousSibling = pre;newChild.nextSibling = null;if(pre){pre.nextSibling = newChild;}else {parentNode.firstChild = newChild;}parentNode.lastChild = newChild;_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);return newChild; //console.log("__aa",parentNode.lastChild.nextSibling == null)
	}Document.prototype = { //implementation : null,
	nodeName:'#document',nodeType:DOCUMENT_NODE,doctype:null,documentElement:null,_inc:1,insertBefore:function insertBefore(newChild,refChild){ //raises 
	if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){var child=newChild.firstChild;while(child) {var next=child.nextSibling;this.insertBefore(child,refChild);child = next;}return newChild;}if(this.documentElement == null && newChild.nodeType == 1){this.documentElement = newChild;}return _insertBefore(this,newChild,refChild),newChild.ownerDocument = this,newChild;},removeChild:function removeChild(oldChild){if(this.documentElement == oldChild){this.documentElement = null;}return _removeChild(this,oldChild);}, // Introduced in DOM Level 2:
	importNode:function importNode(importedNode,deep){return _importNode(this,importedNode,deep);}, // Introduced in DOM Level 2:
	getElementById:function getElementById(id){var rtv=null;_visitNode(this.documentElement,function(node){if(node.nodeType == 1){if(node.getAttribute('id') == id){rtv = node;return true;}}});return rtv;}, //document factory method:
	createElement:function createElement(tagName){var node=new Element();node.ownerDocument = this;node.nodeName = tagName;node.tagName = tagName;node.childNodes = new NodeList();var attrs=node.attributes = new NamedNodeMap();attrs._ownerElement = node;return node;},createDocumentFragment:function createDocumentFragment(){var node=new DocumentFragment();node.ownerDocument = this;node.childNodes = new NodeList();return node;},createTextNode:function createTextNode(data){var node=new Text();node.ownerDocument = this;node.appendData(data);return node;},createComment:function createComment(data){var node=new Comment();node.ownerDocument = this;node.appendData(data);return node;},createCDATASection:function createCDATASection(data){var node=new CDATASection();node.ownerDocument = this;node.appendData(data);return node;},createProcessingInstruction:function createProcessingInstruction(target,data){var node=new ProcessingInstruction();node.ownerDocument = this;node.tagName = node.target = target;node.nodeValue = node.data = data;return node;},createAttribute:function createAttribute(name){var node=new Attr();node.ownerDocument = this;node.name = name;node.nodeName = name;node.localName = name;node.specified = true;return node;},createEntityReference:function createEntityReference(name){var node=new EntityReference();node.ownerDocument = this;node.nodeName = name;return node;}, // Introduced in DOM Level 2:
	createElementNS:function createElementNS(namespaceURI,qualifiedName){var node=new Element();var pl=qualifiedName.split(':');var attrs=node.attributes = new NamedNodeMap();node.childNodes = new NodeList();node.ownerDocument = this;node.nodeName = qualifiedName;node.tagName = qualifiedName;node.namespaceURI = namespaceURI;if(pl.length == 2){node.prefix = pl[0];node.localName = pl[1];}else { //el.prefix = null;
	node.localName = qualifiedName;}attrs._ownerElement = node;return node;}, // Introduced in DOM Level 2:
	createAttributeNS:function createAttributeNS(namespaceURI,qualifiedName){var node=new Attr();var pl=qualifiedName.split(':');node.ownerDocument = this;node.nodeName = qualifiedName;node.name = qualifiedName;node.namespaceURI = namespaceURI;node.specified = true;if(pl.length == 2){node.prefix = pl[0];node.localName = pl[1];}else { //el.prefix = null;
	node.localName = qualifiedName;}return node;}};_extends(Document,Node);function Element(){this._nsMap = {};};Element.prototype = {nodeType:ELEMENT_NODE,hasAttribute:function hasAttribute(name){return this.getAttributeNode(name) != null;},getAttribute:function getAttribute(name){var attr=this.getAttributeNode(name);return attr && attr.value || '';},getAttributeNode:function getAttributeNode(name){return this.attributes.getNamedItem(name);},setAttribute:function setAttribute(name,value){var attr=this.ownerDocument.createAttribute(name);attr.value = attr.nodeValue = "" + value;this.setAttributeNode(attr);},removeAttribute:function removeAttribute(name){var attr=this.getAttributeNode(name);attr && this.removeAttributeNode(attr);}, //four real opeartion method
	appendChild:function appendChild(newChild){if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){return this.insertBefore(newChild,null);}else {return _appendSingleChild(this,newChild);}},setAttributeNode:function setAttributeNode(newAttr){return this.attributes.setNamedItem(newAttr);},setAttributeNodeNS:function setAttributeNodeNS(newAttr){return this.attributes.setNamedItemNS(newAttr);},removeAttributeNode:function removeAttributeNode(oldAttr){return this.attributes.removeNamedItem(oldAttr.nodeName);}, //get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS:function removeAttributeNS(namespaceURI,localName){var old=this.getAttributeNodeNS(namespaceURI,localName);old && this.removeAttributeNode(old);},hasAttributeNS:function hasAttributeNS(namespaceURI,localName){return this.getAttributeNodeNS(namespaceURI,localName) != null;},getAttributeNS:function getAttributeNS(namespaceURI,localName){var attr=this.getAttributeNodeNS(namespaceURI,localName);return attr && attr.value || '';},setAttributeNS:function setAttributeNS(namespaceURI,qualifiedName,value){var attr=this.ownerDocument.createAttributeNS(namespaceURI,qualifiedName);attr.value = attr.nodeValue = value;this.setAttributeNode(attr);},getAttributeNodeNS:function getAttributeNodeNS(namespaceURI,localName){return this.attributes.getNamedItemNS(namespaceURI,localName);},getElementsByTagName:function getElementsByTagName(tagName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){ls.push(node);}});return ls;});},getElementsByTagNameNS:function getElementsByTagNameNS(namespaceURI,localName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node !== base && node.nodeType === ELEMENT_NODE && node.namespaceURI === namespaceURI && (localName === '*' || node.localName == localName)){ls.push(node);}});return ls;});}};Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;_extends(Element,Node);function Attr(){};Attr.prototype.nodeType = ATTRIBUTE_NODE;_extends(Attr,Node);function CharacterData(){};CharacterData.prototype = {data:'',substringData:function substringData(offset,count){return this.data.substring(offset,offset + count);},appendData:function appendData(text){text = this.data + text;this.nodeValue = this.data = text;this.length = text.length;},insertData:function insertData(offset,text){this.replaceData(offset,0,text);},appendChild:function appendChild(newChild){ //if(!(newChild instanceof CharacterData)){
	throw new Error(ExceptionMessage[3]); //}
	return Node.prototype.appendChild.apply(this,arguments);},deleteData:function deleteData(offset,count){this.replaceData(offset,count,"");},replaceData:function replaceData(offset,count,text){var start=this.data.substring(0,offset);var end=this.data.substring(offset + count);text = start + text + end;this.nodeValue = this.data = text;this.length = text.length;}};_extends(CharacterData,Node);function Text(){};Text.prototype = {nodeName:"#text",nodeType:TEXT_NODE,splitText:function splitText(offset){var text=this.data;var newText=text.substring(offset);text = text.substring(0,offset);this.data = this.nodeValue = text;this.length = text.length;var newNode=this.ownerDocument.createTextNode(newText);if(this.parentNode){this.parentNode.insertBefore(newNode,this.nextSibling);}return newNode;}};_extends(Text,CharacterData);function Comment(){};Comment.prototype = {nodeName:"#comment",nodeType:COMMENT_NODE};_extends(Comment,CharacterData);function CDATASection(){};CDATASection.prototype = {nodeName:"#cdata-section",nodeType:CDATA_SECTION_NODE};_extends(CDATASection,CharacterData);function DocumentType(){};DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;_extends(DocumentType,Node);function Notation(){};Notation.prototype.nodeType = NOTATION_NODE;_extends(Notation,Node);function Entity(){};Entity.prototype.nodeType = ENTITY_NODE;_extends(Entity,Node);function EntityReference(){};EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;_extends(EntityReference,Node);function DocumentFragment(){};DocumentFragment.prototype.nodeName = "#document-fragment";DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;_extends(DocumentFragment,Node);function ProcessingInstruction(){}ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;_extends(ProcessingInstruction,Node);function XMLSerializer(){}XMLSerializer.prototype.serializeToString = function(node){var buf=[];serializeToString(node,buf);return buf.join('');};Node.prototype.toString = function(){return XMLSerializer.prototype.serializeToString(this);};function serializeToString(node,buf){switch(node.nodeType){case ELEMENT_NODE:var attrs=node.attributes;var len=attrs.length;var child=node.firstChild;var nodeName=node.tagName;var isHTML=htmlns === node.namespaceURI;buf.push('<',nodeName);for(var i=0;i < len;i++) {serializeToString(attrs.item(i),buf,isHTML);}if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){buf.push('>'); //if is cdata child node
	if(isHTML && /^script$/i.test(nodeName)){if(child){buf.push(child.data);}}else {while(child) {serializeToString(child,buf);child = child.nextSibling;}}buf.push('</',nodeName,'>');}else {buf.push('/>');}return;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:var child=node.firstChild;while(child) {serializeToString(child,buf);child = child.nextSibling;}return;case ATTRIBUTE_NODE:return buf.push(' ',node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');case TEXT_NODE:return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));case CDATA_SECTION_NODE:return buf.push('<![CDATA[',node.data,']]>');case COMMENT_NODE:return buf.push("<!--",node.data,"-->");case DOCUMENT_TYPE_NODE:var pubid=node.publicId;var sysid=node.systemId;buf.push('<!DOCTYPE ',node.name);if(pubid){buf.push(' PUBLIC "',pubid);if(sysid && sysid != '.'){buf.push('" "',sysid);}buf.push('">');}else if(sysid && sysid != '.'){buf.push(' SYSTEM "',sysid,'">');}else {var sub=node.internalSubset;if(sub){buf.push(" [",sub,"]");}buf.push(">");}return;case PROCESSING_INSTRUCTION_NODE:return buf.push("<?",node.target," ",node.data,"?>");case ENTITY_REFERENCE_NODE:return buf.push('&',node.nodeName,';'); //case ENTITY_NODE:
	//case NOTATION_NODE:
	default:buf.push('??',node.nodeName);}}function _importNode(doc,node,deep){var node2;switch(node.nodeType){case ELEMENT_NODE:node2 = node.cloneNode(false);node2.ownerDocument = doc; //var attrs = node2.attributes;
	//var len = attrs.length;
	//for(var i=0;i<len;i++){
	//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
	//}
	case DOCUMENT_FRAGMENT_NODE:break;case ATTRIBUTE_NODE:deep = true;break; //case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}if(!node2){node2 = node.cloneNode(false); //false
	}node2.ownerDocument = doc;node2.parentNode = null;if(deep){var child=node.firstChild;while(child) {node2.appendChild(_importNode(doc,child,deep));child = child.nextSibling;}}return node2;} //
	//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
	//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
	function _cloneNode(doc,node,deep){var node2=new node.constructor();for(var n in node) {var v=node[n];if(typeof v != 'object'){if(v != node2[n]){node2[n] = v;}}}if(node.childNodes){node2.childNodes = new NodeList();}node2.ownerDocument = doc;switch(node2.nodeType){case ELEMENT_NODE:var attrs=node.attributes;var attrs2=node2.attributes = new NamedNodeMap();var len=attrs.length;attrs2._ownerElement = node2;for(var i=0;i < len;i++) {node2.setAttributeNode(_cloneNode(doc,attrs.item(i),true));}break;;case ATTRIBUTE_NODE:deep = true;}if(deep){var child=node.firstChild;while(child) {node2.appendChild(_cloneNode(doc,child,deep));child = child.nextSibling;}}return node2;}function __set__(object,key,value){object[key] = value;} //do dynamic
	try{if(Object.defineProperty){(function(){var getTextContent=function getTextContent(node){switch(node.nodeType){case 1:case 11:var buf=[];node = node.firstChild;while(node) {if(node.nodeType !== 7 && node.nodeType !== 8){buf.push(getTextContent(node));}node = node.nextSibling;}return buf.join('');default:return node.nodeValue;}};Object.defineProperty(LiveNodeList.prototype,'length',{get:function get(){_updateLiveList(this);return this.$$length;}});Object.defineProperty(Node.prototype,'textContent',{get:function get(){return getTextContent(this);},set:function set(data){switch(this.nodeType){case 1:case 11:while(this.firstChild) {this.removeChild(this.firstChild);}if(data || String(data)){this.appendChild(this.ownerDocument.createTextNode(data));}break;default: //TODO:
	this.data = data;this.value = value;this.nodeValue = data;}}});__set__ = function(object,key,value){ //console.log(value)
	object['$$' + key] = value;};})();}}catch(e) { //ie8
	}if(true){exports.DOMImplementation = DOMImplementation;exports.XMLSerializer = XMLSerializer;}

/***/ },
/* 54 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTResponse;VASTResponse = (function(){function VASTResponse(){this.ads = [];this.errorURLTemplates = [];}return VASTResponse;})();module.exports = VASTResponse;}).call(undefined);

/***/ },
/* 55 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTAd;VASTAd = (function(){function VASTAd(){this.id = null;this.errorURLTemplates = [];this.impressionURLTemplates = [];this.creatives = [];this.extensions = [];}return VASTAd;})();module.exports = VASTAd;}).call(undefined);

/***/ },
/* 56 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTAdExtension;VASTAdExtension = (function(){function VASTAdExtension(){this.attributes = {};this.children = [];}return VASTAdExtension;})();module.exports = VASTAdExtension;}).call(undefined);

/***/ },
/* 57 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTAdExtensionChild;VASTAdExtensionChild = (function(){function VASTAdExtensionChild(){this.name = null;this.value = null;this.attributes = {};}return VASTAdExtensionChild;})();module.exports = VASTAdExtensionChild;}).call(undefined);

/***/ },
/* 58 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTUtil;VASTUtil = (function(){function VASTUtil(){}VASTUtil.track = function(URLTemplates,variables){var URL,URLs,i,_i,_len,_results;URLs = this.resolveURLTemplates(URLTemplates,variables);_results = [];for(_i = 0,_len = URLs.length;_i < _len;_i++) {URL = URLs[_i];if(typeof window !== "undefined" && window !== null){i = new Image();_results.push(i.src = URL);}else {}}return _results;};VASTUtil.resolveURLTemplates = function(URLTemplates,variables){var URLTemplate,URLs,key,macro1,macro2,resolveURL,value,_i,_len;URLs = [];if(variables == null){variables = {};}if(!("CACHEBUSTING" in variables)){variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);}variables["random"] = variables["CACHEBUSTING"];for(_i = 0,_len = URLTemplates.length;_i < _len;_i++) {URLTemplate = URLTemplates[_i];resolveURL = URLTemplate;if(!resolveURL){continue;}for(key in variables) {value = variables[key];macro1 = "[" + key + "]";macro2 = "%%" + key + "%%";resolveURL = resolveURL.replace(macro1,value);resolveURL = resolveURL.replace(macro2,value);}URLs.push(resolveURL);}return URLs;};VASTUtil.storage = (function(){var data,isDisabled,storage,storageError;try{storage = typeof window !== "undefined" && window !== null?window.localStorage || window.sessionStorage:null;}catch(_error) {storageError = _error;storage = null;}isDisabled = function(store){var e,testValue;try{testValue = '__VASTUtil__';store.setItem(testValue,testValue);if(store.getItem(testValue) !== testValue){return true;}}catch(_error) {e = _error;return true;}return false;};if(storage == null || isDisabled(storage)){data = {};storage = {length:0,getItem:function getItem(key){return data[key];},setItem:function setItem(key,value){data[key] = value;this.length = Object.keys(data).length;},removeItem:function removeItem(key){delete data[key];this.length = Object.keys(data).length;},clear:function clear(){data = {};this.length = 0;}};}return storage;})();return VASTUtil;})();module.exports = VASTUtil;}).call(undefined);

/***/ },
/* 59 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTCreative,VASTCreativeCompanion,VASTCreativeLinear,VASTCreativeNonLinear,__hasProp=({}).hasOwnProperty,__extends=function __extends(child,parent){for(var key in parent) {if(__hasProp.call(parent,key))child[key] = parent[key];}function ctor(){this.constructor = child;}ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;};VASTCreative = (function(){function VASTCreative(){this.trackingEvents = {};}return VASTCreative;})();VASTCreativeLinear = (function(_super){__extends(VASTCreativeLinear,_super);function VASTCreativeLinear(){VASTCreativeLinear.__super__.constructor.apply(this,arguments);this.type = "linear";this.duration = 0;this.skipDelay = null;this.mediaFiles = [];this.videoClickThroughURLTemplate = null;this.videoClickTrackingURLTemplates = [];this.videoCustomClickURLTemplates = [];this.adParameters = null;}return VASTCreativeLinear;})(VASTCreative);VASTCreativeNonLinear = (function(_super){__extends(VASTCreativeNonLinear,_super);function VASTCreativeNonLinear(){VASTCreativeNonLinear.__super__.constructor.apply(this,arguments);this.type = "nonlinear";this.variations = [];this.videoClickTrackingURLTemplates = [];}return VASTCreativeNonLinear;})(VASTCreative);VASTCreativeCompanion = (function(_super){__extends(VASTCreativeCompanion,_super);function VASTCreativeCompanion(){this.type = "companion";this.variations = [];this.videoClickTrackingURLTemplates = [];}return VASTCreativeCompanion;})(VASTCreative);module.exports = {VASTCreativeLinear:VASTCreativeLinear,VASTCreativeNonLinear:VASTCreativeNonLinear,VASTCreativeCompanion:VASTCreativeCompanion};}).call(undefined);

/***/ },
/* 60 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTMediaFile;VASTMediaFile = (function(){function VASTMediaFile(){this.id = null;this.fileURL = null;this.deliveryType = "progressive";this.mimeType = null;this.codec = null;this.bitrate = 0;this.minBitrate = 0;this.maxBitrate = 0;this.width = 0;this.height = 0;this.apiFramework = null;this.scalable = null;this.maintainAspectRatio = null;}return VASTMediaFile;})();module.exports = VASTMediaFile;}).call(undefined);

/***/ },
/* 61 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTCompanionAd;VASTCompanionAd = (function(){function VASTCompanionAd(){this.id = null;this.width = 0;this.height = 0;this.type = null;this.staticResource = null;this.htmlResource = null;this.iframeResource = null;this.companionClickThroughURLTemplate = null;this.trackingEvents = {};}return VASTCompanionAd;})();module.exports = VASTCompanionAd;}).call(undefined);

/***/ },
/* 62 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	"use strict";(function(){var VASTNonLinear;VASTNonLinear = (function(){function VASTNonLinear(){this.id = null;this.width = 0;this.height = 0;this.minSuggestedDuration = "00:00:00";this.apiFramework = "static";this.type = null;this.staticResource = null;this.htmlResource = null;this.iframeResource = null;this.nonlinearClickThroughURLTemplate = null;}return VASTNonLinear;})();module.exports = VASTNonLinear;}).call(undefined);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	'use strict';(function(){var EventEmitter,VASTClient,VASTCreativeLinear,VASTTracker,VASTUtil,__hasProp=({}).hasOwnProperty,__extends=function __extends(child,parent){for(var key in parent) {if(__hasProp.call(parent,key))child[key] = parent[key];}function ctor(){this.constructor = child;}ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;};VASTClient = __webpack_require__(7);VASTUtil = __webpack_require__(58);VASTCreativeLinear = __webpack_require__(59).VASTCreativeLinear;EventEmitter = __webpack_require__(20).EventEmitter;VASTTracker = (function(_super){__extends(VASTTracker,_super);function VASTTracker(ad,creative){var eventName,events,_ref;this.ad = ad;this.creative = creative;this.muted = false;this.impressed = false;this.skipable = false;this.skipDelayDefault = -1;this.trackingEvents = {};this.emitAlwaysEvents = ['creativeView','start','firstQuartile','midpoint','thirdQuartile','complete','resume','pause','rewind','skip','closeLinear','close'];_ref = this.creative.trackingEvents;for(eventName in _ref) {events = _ref[eventName];this.trackingEvents[eventName] = events.slice(0);}if(this.creative instanceof VASTCreativeLinear){this.setDuration(this.creative.duration);this.skipDelay = this.creative.skipDelay;this.linear = true;this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate;this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;}else {this.skipDelay = -1;this.linear = false;}this.on('start',function(){VASTClient.lastSuccessfullAd = +new Date();});}VASTTracker.prototype.setDuration = function(duration){this.assetDuration = duration;return this.quartiles = {'firstQuartile':Math.round(25 * this.assetDuration) / 100,'midpoint':Math.round(50 * this.assetDuration) / 100,'thirdQuartile':Math.round(75 * this.assetDuration) / 100};};VASTTracker.prototype.setProgress = function(progress){var eventName,events,percent,quartile,skipDelay,time,_i,_len,_ref;skipDelay = this.skipDelay === null?this.skipDelayDefault:this.skipDelay;if(skipDelay !== -1 && !this.skipable){if(skipDelay > progress){this.emit('skip-countdown',skipDelay - progress);}else {this.skipable = true;this.emit('skip-countdown',0);}}if(this.linear && this.assetDuration > 0){events = [];if(progress > 0){events.push("start");percent = Math.round(progress / this.assetDuration * 100);events.push("progress-" + percent + "%");events.push("progress-" + Math.round(progress));_ref = this.quartiles;for(quartile in _ref) {time = _ref[quartile];if(time <= progress && progress <= time + 1){events.push(quartile);}}}for(_i = 0,_len = events.length;_i < _len;_i++) {eventName = events[_i];this.track(eventName,true);}if(progress < this.progress){this.track("rewind");}}return this.progress = progress;};VASTTracker.prototype.setMuted = function(muted){if(this.muted !== muted){this.track(muted?"mute":"unmute");}return this.muted = muted;};VASTTracker.prototype.setPaused = function(paused){if(this.paused !== paused){this.track(paused?"pause":"resume");}return this.paused = paused;};VASTTracker.prototype.setFullscreen = function(fullscreen){if(this.fullscreen !== fullscreen){this.track(fullscreen?"fullscreen":"exitFullscreen");}return this.fullscreen = fullscreen;};VASTTracker.prototype.setSkipDelay = function(duration){if(typeof duration === 'number'){return this.skipDelay = duration;}};VASTTracker.prototype.load = function(){if(!this.impressed){this.impressed = true;this.trackURLs(this.ad.impressionURLTemplates);return this.track("creativeView");}};VASTTracker.prototype.errorWithCode = function(errorCode){return this.trackURLs(this.ad.errorURLTemplates,{ERRORCODE:errorCode});};VASTTracker.prototype.complete = function(){return this.track("complete");};VASTTracker.prototype.close = function(){return this.track(this.linear?"closeLinear":"close");};VASTTracker.prototype.stop = function(){};VASTTracker.prototype.skip = function(){this.track("skip");return this.trackingEvents = [];};VASTTracker.prototype.click = function(){var clickThroughURL,variables,_ref;if((_ref = this.clickTrackingURLTemplates) != null?_ref.length:void 0){this.trackURLs(this.clickTrackingURLTemplates);}if(this.clickThroughURLTemplate != null){if(this.linear){variables = {CONTENTPLAYHEAD:this.progressFormated()};}clickThroughURL = VASTUtil.resolveURLTemplates([this.clickThroughURLTemplate],variables)[0];return this.emit("clickthrough",clickThroughURL);}};VASTTracker.prototype.track = function(eventName,once){var idx,trackingURLTemplates;if(once == null){once = false;}if(eventName === 'closeLinear' && this.trackingEvents[eventName] == null && this.trackingEvents['close'] != null){eventName = 'close';}trackingURLTemplates = this.trackingEvents[eventName];idx = this.emitAlwaysEvents.indexOf(eventName);if(trackingURLTemplates != null){this.emit(eventName,'');this.trackURLs(trackingURLTemplates);}else if(idx !== -1){this.emit(eventName,'');}if(once === true){delete this.trackingEvents[eventName];if(idx > -1){this.emitAlwaysEvents.splice(idx,1);}}};VASTTracker.prototype.trackURLs = function(URLTemplates,variables){if(variables == null){variables = {};}if(this.linear){variables["CONTENTPLAYHEAD"] = this.progressFormated();}return VASTUtil.track(URLTemplates,variables);};VASTTracker.prototype.progressFormated = function(){var h,m,ms,s,seconds;seconds = parseInt(this.progress);h = seconds / (60 * 60);if(h.length < 2){h = "0" + h;}m = seconds / 60 % 60;if(m.length < 2){m = "0" + m;}s = seconds % 60;if(s.length < 2){s = "0" + m;}ms = parseInt((this.progress - seconds) * 100);return "" + h + ":" + m + ":" + s + "." + ms;};return VASTTracker;})(EventEmitter);module.exports = VASTTracker;}).call(undefined);

/***/ }
/******/ ])
});
;