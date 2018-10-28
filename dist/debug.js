!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bird=e():t.bird=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){"use strict";const{console:n}=window;e.a={isDo:()=>window.DEBUG,handleArg(t,e){e(t.join(" "))},log(...t){this.isDo()&&this.handleArg(t,n.log)},warn(...t){this.isDo()&&this.handleArg(t,n.warn)},error(...t){this.isDo()&&this.handleArg(t,n.error)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2);window.DEBUG=!0;const a=new n.a({template:"\n    <p>Text: </p>\n    <hello-text>1</hello-text>\n    <p>List: </p>\n    <user-list>2</user-list>\n    <p>Input: </p>\n    <text-input></text-input>\n  ",el:"#app"});n.a.component("hello-text",{template:"\n    <div class='hello'>{{data.isShow ? data.text : 'hidden text'}}</div>",styles:"\n    div {\n      color: red;\n      font-size: 17px;\n    }\n  ",stylesLink:["debug/styles.css"],data:{isShow:!1},created(){setTimeout(()=>{this.setData({isShow:!0}),a.trigger("hello",{text:"hello!"})},2e3)},attached(){},removed(){},rendered(){console.log("rendered!")},attributeChanged(){},data:{text:"Hello Bird.js",test:"test"}}),n.a.component("user-list",{template:"\n    <div>\n      {{bMap('users', 'user', '<t-user b-model={{bString(user)}}></t-user>')}}\n      <div>{{bGet('users') && bGet('users').length > 0 ? '' : 'Not find!'}}</div>\n    <div>\n  ",data:{text:"Hello",users:[],usersData:[{name:"test0",age:20},{name:"test1",age:21}]},created(){setTimeout(()=>{this.setData({users:[{name:"n 1",age:2},{name:"n2",age:2},{name:"n3",age:2}]})},1e3),setTimeout(()=>{this.setData({text:"New message!"})},2e3)}}),n.a.component("t-user",{template:"\n    <p>Name: {{bGet('name')}}, Age:  {{bGet('age')}}</p>\n  ",created(){}}),n.a.component("text-input",{template:"<div>\n              <input on-keyup={{inputChange}}>\n              <div>{{data.result || ''}}</div>\n            </div>",data:{inputChange(t){this.setData({result:t.target.value})}}})},function(t,e,s){"use strict";var n=s(3);e.a=class{constructor(t){this.wrap=document.querySelector(t.el),this.wrap.innerHTML=t.template,this.customEventHost=document.createElement("div")}static component(t,e){customElements.define(t,class extends n.a{constructor(){super(e)}})}setTemplate(t){this.wrap.innerHTML=t}on(t,e){const{customEventHost:s}=this;s.addEventListener(t,t=>{t.preventDefault(),t.stopPropagation(),e(t.detail)})}trigger(t,e){const{customEventHost:s}=this,n=new CustomEvent(t,{detail:e});s.dispatchEvent(n)}}},function(t,e,s){"use strict";var n=s(0),a=s(4),i=s(5),r=s(7);e.a=class extends HTMLElement{constructor(t){super(),this.options=t}static get observedAttributes(){return["b-data"]}connectedCallback(){this.init();const{created:t}=this;t&&t.apply(this)}adoptedCallback(){const{attached:t}=this;t&&t.apply(this)}disconnectedCallback(){const{removed:t}=this;t&&t.apply(this)}attributeChangedCallback(t,e,s){const{attributeChanged:n}=this;n&&n.apply(this,t,e,s),this.reRender(t)}init(){const{template:t,data:e,created:s,styles:n,stylesLink:a,rendered:i}=this.options||{};e?(this.data=e,this.initData=Object.assign({},e)):this.data=null,this.initShadowEL(),this.applyAttrToData(),this.template=t||"",this.styles=n,this.stylesLink=a,this.rendered=i,this.created=s,this.applyDataToAttr(this.data),this.render(),this.options=null}parse(){return i.a.parse(this)}initShadowEL(){this.tempShadow=document.createElement("div").attachShadow({mode:"open"}),this.shadow=this.attachShadow({mode:"open"})}applyAttrToData(){let t=this.getAttribute("b-model");try{t=JSON.parse((t||"{}").replace(/&nbsp;/g," "))}catch(e){n.a.warn("Have error : ",e),t={}}this.data=Object.assign({},this.data,t),this.setAttribute("b-model",a.a.getNewId())}applyDataToAttr(){this.setAttribute("b-data",a.a.getNewId())}setData(t){this.data=Object.assign(this.data,t),this.applyDataToAttr(t)}render(){this.shadow.innerHTML=this.parse(),this.bindEvents(),this.rendered&&this.rendered()}reRender(){this.tempShadow.innerHTML=this.parse(),r.a.diffAsyn(this.tempShadow,this.shadow),this.rendered&&this.rendered()}bindEvents(){const t=this.shadow;this.buildChildEvents(t)}buildChildEvents(t){[].forEach.call(t.childNodes,t=>{t.attributes&&t.attributes.length>0&&[].forEach.call(t.attributes,e=>{const s=e.value.match(/function\[(\w+)\]/);if(!s||!s[1])return;const n=this.data[s[1]],a=e.name.replace("on-","").toLowerCase();n&&t.addEventListener(a,n.bind(this))}),this.buildChildEvents(t)})}}},function(t,e,s){"use strict";e.a={getNewId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s+=1)e+=t.charAt(Math.floor(Math.random()*t.length));return e}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_common_logs__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_1_common_filter_html__=__webpack_require__(6);const BTP={parse(options){const{template:template,data:data,styles:styles,stylesLink:stylesLink}=options;if(!template)return __WEBPACK_IMPORTED_MODULE_0_common_logs__.a.warn("No template!"),"";let html=template.replace(/\r|\f|\n/g,"").replace(/( )+/g," ");function bMap(name,oneName,tp){const mapData=data[name];return!mapData.length||mapData.length<1?"":mapData.map(one=>eval(`var ${oneName} = one;\`${tp}\``)).join("")}function bGet(t){const e=data[t];return void 0===e?"":__WEBPACK_IMPORTED_MODULE_1_common_filter_html__.a.escape(e)}function bString(t){return JSON.stringify(t).replace(/ /g,"&nbsp;")}html=BTP.parseEvent(html),html=BTP.parseNormal(html),html=html.replace(/b-@@##/g,"${"),html=`\`${html}\``;try{html=eval(html),__WEBPACK_IMPORTED_MODULE_0_common_logs__.a.log("html",html)}catch(t){window.console.warn(t)}return styles&&(html=`<style>${styles}</style>${html}`),stylesLink&&stylesLink.forEach(t=>{html=`<link href="${t}" rel="stylesheet">${html}`}),html},parseEvent:t=>t.replace(/on-\w*={{\w*}}/g,t=>` ${t.replace(/{{(\w*)}}/,(t,e)=>`function[${e}]`)}`),parseNormal:t=>t.replace(/{{/g,"${").replace(/}}/g,"}")};__webpack_exports__.a=BTP},function(t,e,s){"use strict";const n=/[&<>'"]/g,{replace:a}=String.prototype,i=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,r={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},o={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function l(t){return r[t]}function d(t){return o[t]}e.a={escape:function(t){return a.call(t,n,l)},unescape:function(t){return a.call(t,i,d)}}},function(t,e,s){"use strict";var n=s(0);e.a=class{static diff(t,e){if(t.innerHTML===e.innerHTML)return n.a.log("diff Same!");const s=this.getEls(e.childNodes),a=this.getEls(t.childNodes),i=s.length,r=a.length,o=Math.min(r,i);let l;if(r>i)for(l=i;l<r;l+=1)e.appendChild(a[l]);if(r<i)for(l=i;l>r;l-=1)e.removeChild(s[l-1]);for(l=0;l<o;l+=1)a[l].outerHTML!==s[l].outerHTML&&(a[l].tagName===s[l].tagName&&this.getEls(a[l].childNodes).length>0?this.diffAsyn(a[l],s[l]):e.replaceChild(a[l],s[l]));return!0}static diffAsyn(t,e){return new Promise(s=>{this.diff(t,e),s()})}static getEls(t){return[].filter.call(t,t=>1===t.nodeType)}}}])});