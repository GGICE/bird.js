module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(1);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Bird = function () {
	  function Bird(options) {
	    _classCallCheck(this, Bird);

	    var wrap = document.querySelector(options.el);

	    wrap.innerHTML = options.template;
	    this.randers();
	  }

	  /**
	   * @param {string} template 
	   * @param {object} data
	   */


	  _createClass(Bird, [{
	    key: 'component',
	    value: function component(name, options) {
	      var Temp = function (_Base) {
	        _inherits(Temp, _Base);

	        function Temp() {
	          _classCallCheck(this, Temp);

	          return _possibleConstructorReturn(this, Object.getPrototypeOf(Temp).apply(this, arguments));
	        }

	        _createClass(Temp, [{
	          key: 'getOptions',
	          value: function getOptions() {
	            return options;
	          }
	        }]);

	        return Temp;
	      }(_base2.default);

	      document.registerElement(name, Temp);
	    }
	  }, {
	    key: 'randers',
	    value: function randers() {}
	  }]);

	  return Bird;
	}();

	exports.default = Bird;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _btp = __webpack_require__(2);

	var _btp2 = _interopRequireDefault(_btp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _window = window;
	var console = _window.console;

	var Base = function (_HTMLElement) {
	  _inherits(Base, _HTMLElement);

	  function Base() {
	    _classCallCheck(this, Base);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).call(this));
	  }

	  _createClass(Base, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._init();
	    }
	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var attached = this.attached;


	      attached && attached.apply(this);
	    }
	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      var removed = this.removed;


	      removed && removed.apply(this);
	    }
	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(name, oldVal, newVal) {
	      var attributeChanged = this.attributeChanged;


	      attributeChanged && attributeChanged.apply(this, name, oldVal, newVal);
	      if (oldVal === null && JSON.stringify(this.initData[name]) === newVal) {
	        //跳过初始时的reRender
	        return;
	      }
	      this._reRender(name);
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      var options = this.getOptions();
	      var template = options.template;
	      var data = options.data;
	      var created = options.created;
	      var styles = options.styles;
	      var rendered = options.rendered;


	      this._initShadowEL();
	      if (!template) {
	        this.template = null;
	        console.warn('No template!');
	      } else {
	        this.template = template;
	      }
	      if (!data) {
	        this.data = null;
	        console.warn('No data!');
	      } else {
	        this.data = data;
	        this.initData = Object.assign({}, data);
	      }
	      this._styles = styles;
	      this._rendered = rendered;
	      this._btp = new _btp2.default();
	      this._bindAttr();
	      this._render();
	      created && created.apply(this);
	    }
	  }, {
	    key: '_parse',
	    value: function _parse() {
	      return this._btp._parse(this);
	    }
	  }, {
	    key: '_initShadowEL',
	    value: function _initShadowEL() {
	      this._tempShadow = document.createElement('div').createShadowRoot();
	      this._shadow = this.createShadowRoot();
	    }
	  }, {
	    key: '_applyDataToAttr',
	    value: function _applyDataToAttr(data) {
	      for (var key in data) {
	        this.setAttribute(key, JSON.stringify(data[key]));
	      }
	    }

	    /**
	     * 绑定data到Attribute
	     */

	  }, {
	    key: '_bindAttr',
	    value: function _bindAttr() {
	      var data = this.data;

	      this._applyDataToAttr(data);
	    }

	    /**
	     * 操作data的方法
	     */

	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this.data = Object.assign(this.data, data);
	      this._applyDataToAttr(data);
	    }
	  }, {
	    key: '_render',
	    value: function _render() {
	      this._shadow.innerHTML = this._parse();
	      this._bindEvents();
	      this._rendered && this._rendered();
	    }
	  }, {
	    key: '_reRender',
	    value: function _reRender() {
	      this._tempShadow.innerHTML = this._parse();
	      this._diff(this._tempShadow, this._shadow);
	      this._rendered && this._rendered();
	    }

	    /**
	     *  需要支持增删改
	     *  1.改  done
	     *  2.增
	     *  3.删
	     */

	  }, {
	    key: '_diff',
	    value: function _diff(newDom, oldDom) {
	      var _this2 = this;

	      if (newDom.innerHTML === oldDom.innerHTML) {
	        return console.log('diff Same!');
	      }
	      [].forEach.call(newDom.childNodes, function (el, index) {
	        if (el.innerHTML !== oldDom.childNodes[index].innerHTML) {
	          if (el.childNodes.length > 1) {
	            _this2._diff(el, oldDom.childNodes[index]);
	          } else {
	            oldDom.childNodes[index].innerHTML = el.innerHTML;
	          }
	        }
	      });
	    }

	    /**
	     * 绑定事件的方法，需要在render之后执行
	     */

	  }, {
	    key: '_bindEvents',
	    value: function _bindEvents() {
	      var els = this._shadow;
	      this._buildChildEvents(els);
	    }
	  }, {
	    key: '_buildChildEvents',
	    value: function _buildChildEvents(fEl) {
	      var _this3 = this;

	      [].forEach.call(fEl.childNodes, function (el) {
	        if (el.attributes && el.attributes.length > 0) {
	          [].forEach.call(el.attributes, function (attr) {
	            var funName = attr.value.match(/function\[(\w+)\]/);
	            var eventName, funText;

	            if (!funName || !funName[1]) {
	              return;
	            }
	            funText = _this3.data[funName[1]];
	            eventName = attr.name.replace('on-', '').toLowerCase();
	            if (funText) {
	              el.addEventListener(eventName, funText.bind(_this3));
	            }
	          });
	        }
	        _this3._buildChildEvents(el);
	      });
	    }
	  }]);

	  return Base;
	}(HTMLElement);

	exports.default = Base;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Btp = function () {
	  /**
	   * 模板引擎
	   * TODO 需要优化匹配
	   * TODO XSS 攻击过滤
	   * 
	   * 需要支持以下几种匹配规则:
	   * 
	   * _parseNormal do
	   * {someVar} => ${data.someVar}
	   * {someVar.someVar} => ${data.someVar.someVar}
	   * 
	   * _parseMap() do
	   * {users.map(user => "
	   *   <p>我叫{user.name}, 年龄{user.age}</p>
	   * ")} 
	   * => 
	   * ${data.users.map(user => "
	   *   <p>我叫{user.name}, 年龄{user.age}</p>
	   * ").join('')} 
	   * 
	   * 临时占位符： 'b-@@##'
	   */

	  function Btp() {
	    //Do nothing

	    _classCallCheck(this, Btp);
	  }

	  _createClass(Btp, [{
	    key: '_parse',
	    value: function _parse(options) {
	      /*eslint no-unused-vars: "warn"*/
	      var template = options.template;
	      var data = options.data;
	      var _styles = options._styles;

	      var html = template.replace(/\s*/g, '');

	      html = this._parseMap(html);
	      html = this._parseEvent(html);
	      html = this._parseNormal(html);
	      html = html.replace(/b-@@##/g, '${');
	      html = '`' + html + '`';
	      try {
	        html = eval(html);
	      } catch (e) {
	        window.console.warn(e);
	      }
	      if (_styles) {
	        html = '<style>' + _styles + '</style>' + html;
	      }
	      return html;
	    }
	  }, {
	    key: '_parseMap',
	    value: function _parseMap(html) {
	      return html.replace(/\w*.map\(\S*\)/g, function ($1) {
	        $1 = $1.replace(/{/g, 'b-@@##');
	        $1 = $1.replace(/"/g, '`');
	        return $1 + '.join("")';
	      });
	    }
	  }, {
	    key: '_parseEvent',
	    value: function _parseEvent(html) {
	      return html.replace(/on-\w*={\w*}/g, function ($1) {
	        return ' ' + $1.replace(/{(\w*)}/, function ($2, $3) {
	          return 'function[' + $3 + ']';
	        });
	      });
	    }
	  }, {
	    key: '_parseNormal',
	    value: function _parseNormal(html) {
	      return html.replace('{', '${data.');
	    }
	  }]);

	  return Btp;
	}();

	exports.default = Btp;

/***/ }
/******/ ]);