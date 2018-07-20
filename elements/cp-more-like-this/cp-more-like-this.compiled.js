!function(e,n){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js","../rh-card/rh-card.compiled.js","../rh-datetime/rh-datetime.compiled.js","../../whatwg-fetch/fetch.js"],n);else if("undefined"!=typeof exports)n(require("../rhelement/rhelement.compiled.js"),require("../rh-card/rh-card.compiled.js"),require("../rh-datetime/rh-datetime.compiled.js"),require("../../whatwg-fetch/fetch.js"));else{n(e.rhelementCompiled,e.rhCardCompiled,e.rhDatetimeCompiled,e.fetch),e.cpMoreLikeThis={}}}(this,function(e){"use strict";var n,t=(n=e)&&n.__esModule?n:{default:n};var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i="cp-more-like-this",o=document.createElement("template"),a=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return e.handleResponse=e.handleResponse.bind(e),e.handleError=e.handleError.bind(e),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,t.default),r(n,null,[{key:"observedAttributes",get:function(){return["api-url","content-type"]}}]),r(n,[{key:"attributeChangedCallback",value:function(e,n,t){this[e]=t,this["api-url"]&&this["content-type"]&&(this.loading=!0,fetch(this["api-url"]).then(function(e){return e.json()}).then(this.handleResponse,this.handleError))}},{key:"handleResponse",value:function(e){this.loading=!1,e.response.docs.length||(console.warn("No docs found"),this.dispatchNoDataEvent()),this.data={contentType:this["content-type"],results:e.response.docs},this.render()}},{key:"handleError",value:function(e){console.warn("Error in retrieving data",e),this.dispatchNoDataEvent()}},{key:"dispatchNoDataEvent",value:function(){this.dispatchEvent(new CustomEvent("cp-more-like-this:no-data",{bubbles:!0}))}},{key:"render",value:function(){var e,n=(e=this.data,o.innerHTML="\n<style>:host {\n  display: block; }\n\nrh-card {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 32px; }\n  rh-card h4 {\n    margin-top: 0;\n    flex: 1 1 auto; }\n  rh-card a {\n    color: #06c;\n    text-decoration: none;\n    font-weight: 700; }\n  rh-card span {\n    font-size: .9rem;\n    font-weight: 400; }\n\n@media (min-width: 768px) {\n  .card-container {\n    display: flex; }\n    .card-container rh-card {\n      width: 33%;\n      margin: 16px;\n      margin-top: 8px; }\n      .card-container rh-card:first-child {\n        margin-left: 0; }\n      .card-container rh-card:last-child {\n        margin-right: 0; } }</style>\n<h3>People who viewed this "+e.contentType+' also viewed</h3>\n<div class="card-container">\n  '+e.results.map(function(e){return'\n    <rh-card theme="light">\n      <h4 slot="header"><a href="'+e.view_uri+'">'+e.allTitle+"</a></h4>\n      <span>\n        "+e.documentKind+' - <rh-datetime\n          datetime="'+e.lastModifiedDate+'"\n          type="local"\n          day="numeric"\n          month="short"\n          year="numeric">\n          '+e.lastModifiedDate+"\n        </rh-datetime>\n      </span>\n    </rh-card>\n  "}).join("\n")+"\n</div>\n",o);window.ShadyCSS&&ShadyCSS.prepareTemplate(n,i),this.shadowRoot.appendChild(n.content.cloneNode(!0)),window.ShadyCSS&&ShadyCSS.styleElement(this)}}]),n}();window.customElements.define(i,a)});