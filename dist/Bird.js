!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=function(){function e(t){u(this,e);var n=document.querySelector(t.el);n.innerHTML=t.template,this.randers()}return i(e,[{key:"component",value:function(e,t){var n=t.template,r=function(e){function t(){return u(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"getTemplate",value:function(){return n}}]),t}(l.default);document.registerElement(e,r)}},{key:"randers",value:function(){document.registerElement("b-base",l.default)}}]),e}();window.Bird=f,t.default=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).call(this))}return o(t,e),a(t,[{key:"createdCallback",value:function(){this._rander()}},{key:"attachedCallback",value:function(){window.console.log("attachedCallback")}},{key:"detachedCallback",value:function(){window.console.log("detachedCallback")}},{key:"attributeChangedCallback",value:function(e,t,n){window.console.log(e,t,n)}},{key:"_rander",value:function(){this._shadow||(this._shadow=this.createShadowRoot()),this._shadow.innerHTML=this.getTemplate()}}]),t}(HTMLElement);t.default=u}]);