// [AIV_SHORT]  Build version: 1.0.6 - Saturday, February 23rd, 2019, 10:23:25 AM  
 /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/inc/Templates.js":
/*!******************************!*\
  !*** ./src/inc/Templates.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Templates; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Templates = function () {\n  function Templates() {\n    _classCallCheck(this, Templates);\n  }\n\n  _createClass(Templates, null, [{\n    key: \"getNode\",\n    value: function getNode(html) {\n      var fragment = document.createElement('div');\n      fragment.innerHTML = html;\n      return fragment.children[0];\n    }\n  }]);\n\n  return Templates;\n}();\n\n_defineProperty(Templates, \"Button\", \"<a class=\\\"button-link js-tpu-stackedit\\\" href=\\\"#\\\" title=\\\"Open in stackedit\\\">\\n            <span class=\\\"icon-sm icon-small\\\">\\n                <svg width=\\\"100%\\\" height=\\\"100%\\\" viewBox=\\\"0 0 24 24\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xml:space=\\\"preserve\\\" xmlns:serif=\\\"http://www.serif.com/\\\" style=\\\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\\\"><path d=\\\"M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z\\\" style=\\\"fill:none;\\\"/><clipPath id=\\\"_clip1\\\"><path d=\\\"M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z\\\"/></clipPath><g clip-path=\\\"url(#_clip1)\\\"><path d=\\\"M23.997,0.003l-24,0l12,12l12,-12Z\\\" style=\\\"fill:#ffd700;\\\"/><path d=\\\"M-0.003,0.003l0,24l12,-12l-12,-12Z\\\" style=\\\"fill:#a5c700;\\\"/><path d=\\\"M-0.003,24.003l24,0l-12,-12l-12,12Z\\\" style=\\\"fill:#ff8a00;\\\"/><path d=\\\"M23.997,24.003l0,-24l-12,12l12,12Z\\\" style=\\\"fill:#66aefd;\\\"/><path d=\\\"M22.497,-1.497l-10.5,10.497l3,3.003l10.5,-10.5l-3,-3Z\\\" style=\\\"fill:url(#_Linear2);\\\"/><path d=\\\"M25.499,22.503l-10.498,-10.5l-3.002,3l10.5,10.5l3,-3Z\\\" style=\\\"fill:url(#_Linear3);\\\"/><path d=\\\"M1.497,25.501l10.5,-10.497l-3,-3.003l-10.5,10.5l3,3Z\\\" style=\\\"fill:url(#_Linear4);\\\"/><path d=\\\"M-1.503,1.503l10.498,10.5l3.002,-3l-10.5,-10.5l-3,3Z\\\" style=\\\"fill:url(#_Linear5);\\\"/></g><path d=\\\"M21.75,5.852c0,-2.195 -1.782,-3.977 -3.977,-3.977l-11.546,0c-2.195,0 -3.977,1.782 -3.977,3.977l0,11.546c0,2.195 1.782,3.977 3.977,3.977l11.546,0c2.195,0 3.977,-1.782 3.977,-3.977l0,-11.546Z\\\" style=\\\"fill:#fff;\\\"/><path d=\\\"M4.633,6.013l1.37,0l0,-1.828l1.399,0l0,1.828l1.696,0l0,-1.828l1.399,0l0,1.828l1.37,0l0,1.691l-1.37,0l0,1.902l1.37,0l0,1.69l-1.37,0l0,1.829l-1.399,0l0,-1.829l-1.696,0l0,1.829l-1.399,0l0,-1.829l-1.37,0l0,-1.69l1.37,0l0,-1.902l-1.37,0l0,-1.691Zm2.769,1.691l0,1.902l1.696,0l0,-1.902l-1.696,0Z\\\" style=\\\"fill:#737373;\\\"/><defs><linearGradient id=\\\"_Linear2\\\" x1=\\\"0\\\" y1=\\\"0\\\" x2=\\\"1\\\" y2=\\\"0\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"matrix(-2.99995,-3,3,-2.99995,23.9974,3.00265)\\\"><stop offset=\\\"0\\\" style=\\\"stop-color:#66aefd;stop-opacity:1\\\"/><stop offset=\\\"1\\\" style=\\\"stop-color:#ffd700;stop-opacity:1\\\"/></linearGradient><linearGradient id=\\\"_Linear3\\\" x1=\\\"0\\\" y1=\\\"0\\\" x2=\\\"1\\\" y2=\\\"0\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"matrix(3,-2.99995,2.99995,3,20.9987,24.0027)\\\"><stop offset=\\\"0\\\" style=\\\"stop-color:#ff8a00;stop-opacity:1\\\"/><stop offset=\\\"1\\\" style=\\\"stop-color:#66aefd;stop-opacity:1\\\"/></linearGradient><linearGradient id=\\\"_Linear4\\\" x1=\\\"0\\\" y1=\\\"0\\\" x2=\\\"1\\\" y2=\\\"0\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"matrix(2.99995,3,-3,2.99995,-0.00255928,21.0013)\\\"><stop offset=\\\"0\\\" style=\\\"stop-color:#a5c700;stop-opacity:1\\\"/><stop offset=\\\"1\\\" style=\\\"stop-color:#ff8a00;stop-opacity:1\\\"/></linearGradient><linearGradient id=\\\"_Linear5\\\" x1=\\\"0\\\" y1=\\\"0\\\" x2=\\\"1\\\" y2=\\\"0\\\" gradientUnits=\\\"userSpaceOnUse\\\" gradientTransform=\\\"matrix(-3,2.99995,-2.99995,-3,2.99744,0.00265252)\\\"><stop offset=\\\"0\\\" style=\\\"stop-color:#ffd700;stop-opacity:1\\\"/><stop offset=\\\"1\\\" style=\\\"stop-color:#a5c700;stop-opacity:1\\\"/></linearGradient></defs></svg>\\n            </span>\\n            <span>Edit SE</span>\\n        </a>\");\n\n_defineProperty(Templates, \"Styles\", '<link rel=\"stylesheet\" type=\"text/css\" href=\"https://927ow4oqqr.codesandbox.io/src/styles.css\" media=\"all\"/>');\n\n_defineProperty(Templates, \"TpuStackeditIframeWrapper\", \"<div id=\\\"\".concat(ID_TPU_STACKEDIT_IFRAME, \"\\\"></div>\"));\n\n_defineProperty(Templates, \"IframeHtml\", \"<div class=\\\"stackedit-iframe-container\\\" data-style=\\\"position: absolute; top: 0; left: 0; z-index: 1000\\\">\\n            <iframe style=\\\"width: 100%; height: 100%;\\\" src=\\\"https://stackedit.io/app#origin=https%3A%2F%2Ftrello.com&fileName=trello.com&contentText={{{content}}}\\\" class=\\\"stackedit-iframe\\\"></iframes>\\n            </div>\");\n\n\n\n//# sourceURL=webpack:///./src/inc/Templates.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inc_Templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc/Templates */ \"./src/inc/Templates.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar ID_TPU_STACKEDIT_IFRAME = 'JSTpuStackeditIframe';\nvar CLASS_JS_SHOW_WITH_DESC = 'js-show-with-desc';\nvar Rx;\n\nfunction ready() {\n  Rx = rxjs;\n  new Styles().init();\n  new AddButton().init();\n  console.log(Rx);\n  var _Rx = Rx,\n      iif = _Rx.iif,\n      Subject = _Rx.Subject;\n  var _Rx$operators = Rx.operators,\n      map = _Rx$operators.map,\n      filter = _Rx$operators.filter,\n      debounceTime = _Rx$operators.debounceTime,\n      mergeMap = _Rx$operators.mergeMap,\n      switchMap = _Rx$operators.switchMap,\n      tap = _Rx$operators.tap;\n  var stackEditChange$ = new Subject().pipe(debounceTime(800));\n  var stackEditClose$ = new Subject();\n  stackEditChange$.subscribe(function (val) {\n    console.log('stackEditChange val:', val);\n  });\n  stackEditClose$.subscribe(function (val) {\n    console.log('stackEditClose val:', val);\n  });\n  var stackEdit$ = Rx.fromEvent(window, 'message').pipe(filter(function (event) {\n    return event.origin === 'https://stackedit.io';\n  }), map(function (event) {\n    return event.data;\n  }), tap(function (data) {\n    return console.log(data);\n  })).subscribe(function (data) {\n    console.log('Debounced Input:', data);\n\n    switch (data.type) {\n      case 'fileChange':\n        stackEditChange$.next(data);\n        break;\n\n      case 'close':\n        console.log('close action');\n    }\n  });\n}\n\nvar StackEdit = function () {\n  function StackEdit() {\n    _classCallCheck(this, StackEdit);\n  }\n\n  _createClass(StackEdit, [{\n    key: \"listener\",\n    value: function listener() {}\n  }]);\n\n  return StackEdit;\n}();\n\nvar Styles = function () {\n  function Styles() {\n    _classCallCheck(this, Styles);\n\n    this.styleContent = '\\n.stackedit-no-overflow {\\n  overflow: hidden;\\n}\\n\\n.stackedit-container {\\n  background-color: rgba(160, 160, 160, 0.5);\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 9999;\\n}\\n\\n.stackedit-hidden-container {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  left: -99px;\\n}\\n\\n.stackedit-iframe-container {\\n  background-color: #fff;\\n  position: absolute;\\n  margin: auto;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  height: 98%;\\n  width: 98%;\\n  max-width: 1280px;\\n  border-radius: 2px;\\n  overflow: hidden;\\n}\\n\\n.stackedit-iframe {\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  border: 0;\\n  border-radius: 2px;\\n}\\n\\n@media (max-width: 740px) {\\n  .stackedit-iframe-container {\\n    height: 100%;\\n    width: 100%;\\n    border-radius: 0;\\n  }\\n\\n  .stackedit-iframe {\\n    border-radius: 0;\\n  }\\n}\\n\\n.stackedit-close-button {\\n  position: absolute !important;\\n  box-sizing: border-box !important;\\n  width: 38px !important;\\n  height: 36px !important;\\n  margin: 4px !important;\\n  padding: 0 4px !important;\\n  text-align: center !important;\\n  vertical-align: middle !important;\\n  text-decoration: none !important;\\n}\\n';\n  }\n\n  _createClass(Styles, [{\n    key: \"init\",\n    value: function init() {\n      this._addStyles();\n    }\n  }, {\n    key: \"_addStyles\",\n    value: function _addStyles() {\n      document.head.appendChild(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getNode(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Styles));\n    }\n  }, {\n    key: \"_createStyle\",\n    value: function _createStyle() {\n      var styleEl = document.createElement('style');\n      styleEl.type = 'text/css';\n      styleEl.innerHTML = this.styleContent;\n      document.head.appendChild(styleEl);\n\n      this._createStyle = function createStyle() {};\n    }\n  }]);\n\n  return Styles;\n}();\n\nvar AddButton = function () {\n  function AddButton() {\n    _classCallCheck(this, AddButton);\n\n    this._listChangeHandler = Utils.throttle(2000, this._listChangeHandler);\n    $(document.body).append(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TpuStackeditIframeWrapper);\n  }\n\n  _createClass(AddButton, [{\n    key: \"init\",\n    value: function init() {\n      this._addOpenerObserver();\n    }\n  }, {\n    key: \"_addButton\",\n    value: function _addButton() {\n      var firstList = $('.window-sidebar .window-module .u-clearfix').first();\n\n      if (!firstList.hasClass('js-btn-added')) {\n        console.log('try add button');\n        firstList.prepend(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getNode(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button)).addClass('js-btn-added');\n        $('.js-tpu-stackedit').click(this._addButtonClickHandler);\n      }\n    }\n  }, {\n    key: \"_addButtonClickHandler\",\n    value: function _addButtonClickHandler() {\n      $(\".\".concat(CLASS_JS_SHOW_WITH_DESC)).click();\n      var content = $('.js-description-draft').val();\n      content = encodeURIComponent(content);\n      var iframeHtml = \"<div class=\\\"stackedit-iframe-container\\\" data-style=\\\"position: absolute; top: 0; left: 0; z-index: 1000\\\">\\n            <iframe style=\\\"width: 100%; height: 100%;\\\" src=\\\"https://stackedit.io/app#origin=https%3A%2F%2Ftrello.com&fileName=trello.com&contentText={{{content}}}\\\" class=\\\"stackedit-iframe\\\"></iframes>\\n            </div>\";\n      $(\"#\".concat(ID_TPU_STACKEDIT_IFRAME)).html(_inc_Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IframeHtml.replace('{{{content}}}', content));\n    }\n  }, {\n    key: \"_listChangeHandler\",\n    value: function _listChangeHandler(observer, p2, p3) {\n      if ($('.js-tab-parent').is(':visible')) {\n        console.log('visible');\n\n        this._addButton();\n      }\n    }\n  }, {\n    key: \"_addOpenerObserver\",\n    value: function _addOpenerObserver() {\n      var _this2 = this;\n\n      var observer = new MutationObserver(function () {\n        return _this2._listChangeHandler(observer);\n      });\n      observer.observe(document.querySelector('.js-tab-parent'), {\n        childList: true,\n        subtree: true,\n        attributes: true\n      });\n    }\n  }]);\n\n  return AddButton;\n}();\n\nvar Utils = function () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, null, [{\n    key: \"throttle\",\n    value: function throttle(wait, fn) {\n      var lastCalled = void 0;\n      var timeout = void 0;\n      return function () {\n        var _this = this;\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        var now = Date.now();\n        var diff = lastCalled + wait - now;\n\n        if (lastCalled && diff > 0) {\n          clearTimeout(timeout);\n          timeout = setTimeout(function () {\n            lastCalled = now;\n            fn.apply(_this, args);\n          }, diff);\n        } else {\n          lastCalled = now;\n          fn.apply(this, args);\n        }\n      };\n    }\n  }, {\n    key: \"loadDynamicScript\",\n    value: function loadDynamicScript(url, id) {\n      var existingScript = document.getElementById(id);\n      return new Promise(function (res) {\n        if (!existingScript) {\n          var script = document.createElement('script');\n          script.src = url;\n          script.id = id;\n          script.defer = true;\n          document.body.appendChild(script);\n\n          script.onload = function () {\n            res();\n          };\n        }\n\n        if (existingScript) {\n          res();\n        }\n      });\n    }\n  }]);\n\n  return Utils;\n}();\n\nUtils.loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'tpuJquery').then(function () {\n  return Utils.loadDynamicScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js', 'tpuRxjs');\n}).then(setTimeout(ready, 1000));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ }); 