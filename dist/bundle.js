(()=>{var t={426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([t.id,"\n/* -------------------------------------------------------- VARIABLES */\n\n:root {\n\t\n\t--sans-serif: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;\n\t--serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\t--monospace: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n\t\n\t--main-font-family: var(--sans-serif);\n\t--alternative-font-family: var(--serif);\n\t\n\t--column-folders-background-color: hsl(0deg, 0%, 99%);\n\t\n\t--form-input-background-color: hsl(0deg, 0%, 95%);\n\t--form-input-focus-outline-color: hsl(50deg, 100%, 50%);\n\t\n\t--form-button-background-color: hsl(50deg, 100%, 50%);\n\t--form-button-text-color: #FFFFFF;\n\t\n\t--form-select-background-color: var(--form-input-background-color);\n\t\n\t--form-edit-background-color: hsla(0deg, 0%, 100%, 100%);\n\t\n\t--folder-background-color: hsl(50deg, 100%, 50%);\n\t--folder-active-background-color: hsl(25deg, 100%, 50%);\n\t--folder-text-color: #FFFFFF;\n\t\n\t--task-background-color: hsla(0deg, 0%, 95%, 0%);\n\t--task-span-background-color: hsl(0deg, 0%, 95%);\n\t--task-remove-button-background-color: var(--form-button-background-color);\n\t--task-remove-button-text-color: var(--form-button-text-color);\n\t\n\t\n}\n\n/* ------------------------------------------------------------ RESET */\n\n*,\n*::before,\n*::after {\n  border: 0;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  font-size: 10px;\n}\n\ninput,\nbutton,\nselect {\n  font: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* ---------------------------------------------------------- GENERAL */\n\nbody {\n\tfont: calc(1.6rem + .5vmin) var(--main-font-family);\n}\n\n/* -------------------------------------------------------- CONTAINER */\n\n.container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n\tgrid-template-rows: 1fr;\n}\n\n/* ---------------------------------------------------------- COLUMNS */\n\n.column {\n\theight: 100vh;\n}\n\n.column-folders {\n\tbackground-color: var(--column-folders-background-color);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr 5fr;\n}\n\n.column-tasks {}\n\n/* ------------------------------------------------------------ FORMS */\n\n.form input {\n\tbackground-color: var(--form-input-background-color);\n\tborder-radius: 15px;\n\tpadding: 1ch;\n}\n\n.form input:focus,\n.form select:focus {\n\toutline-color: var(--form-input-focus-outline-color);\n}\n\n.form button {\n\taspect-ratio: 1;\n\tbackground-color: var(--form-button-background-color);\n\tborder-radius: 50%;\n\tcolor: var(--form-button-text-color);\n\tfont-size: 2em;\n\tfont-weight: bold;\n\ttransition: all .25s ease-in-out;\n\twidth: 50px;\n}\n\n.form button:hover {\n\tcursor: pointer;\n\ttransform: scale(1.125);\n}\n\n.form select {\n\tbackground-color: var(--form-select-background-color);\n\tborder-radius: 15px;\n\tpadding: 1ch 2ch 1ch 1ch;\n}\n\n.form-folder {\n\tdisplay: grid;\n\tgap: 15px;\n\tgrid-template-columns: auto 50px;\n\tplace-content: center;\n\tplace-items: center;\n\twidth: 100%;\n}\n\n.form-task {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, 1fr) 50px;\n\tgap: 30px;\n\tpadding: 30px 30px;\n\tplace-content: center flex-start;\n\tplace-items: center;\n\twidth: 100%;\n}\n\n.form-edit {\n\tbackground-color: var(--form-edit-background-color);\n\tborder-radius: 15px;\n\tbox-shadow: 0 0 5px 0 hsl(0deg 0% 0% / 10%);\n\tdisplay: grid;\n\tgap: 15px;\n\tgrid-template-columns: repeat(5, 1fr) repeat(2, 50px);\n\theight: auto;\n\tleft: 30px;\n\tpadding: 15px;\n\tposition: absolute;\n\ttop: 30px;\n\twidth: calc(100vw - 60px);\n}\n\n/* ------------------------------------------------------------ LISTS */\n\n.folders,\n.tasks {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\tlist-style: none;\n\tpadding: 15px;\n\toverflow: auto;\n\tmax-height: 100%;\n}\n\n.folders {\n\tplace-content: center flex-start;\n\tplace-items: center;\n}\n\n.folders .folder {\n\tbackground-color: var(--folder-background-color);\n\tborder-radius: 15px;\n\tcolor: var(--folder-text-color);\n\tfont-size: 1.25em;\n\tfont-weight: bold;\n\tpadding: 1ch 2ch;\n\ttransition: all .25s ease-in-out;\n\twidth: 80%;\n}\n\n.folders .folder.isActive {\n\tbackground-color: var(--folder-active-background-color);\n}\n\n.folders .folder:hover {\n\tcursor: pointer;\n\ttransform: scale(1.075);\n}\n\n.tasks .task.isActive {\n\tbackground-color: var(--task-background-color);\n\tborder-radius: 15px;\n\tdisplay: grid;\n\tgap: 15px;\n\tgrid-template-columns: auto repeat(2, 50px);\n\tpadding: 10px;\n}\n\n.tasks .task:not(.isActive) {\n\tdisplay: none;\n}\n\n.tasks .task div {\n\tdisplay: grid;\n\tgap: 15px;\n\tgrid-template-columns: 1fr 2fr repeat(3, 1fr);\n\tplace-content: center flex-start;\n\tplace-items: center;\n}\n\n.tasks .task div span {\n\tbackground-color: var(--task-span-background-color);\n\tborder-radius: 15px;\n\tfont-size: .85em;\n\tpadding: 1ch 2ch;\n}\n\n.tasks .task div span:nth-child(2) {\n\tmax-width: 100%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.tasks .task button {\n\taspect-ratio: 1;\n\tbackground-color: var(--task-remove-button-background-color);\n\tborder-radius: 50%;\n\tcolor:  var(--task-remove-button-text-color);\n\tdisplay: flex;\n\tfont-size: 2em;\n\tfont-weight: bold;\n\tplace-content: center;\n\tplace-items: center;\n\ttransition: all .25s ease-in-out;\n\twidth: 50px;\n}\n\n.tasks .task button:hover {\n\tcursor: pointer;\n\ttransform: scale(1.125);\n}\n",""]);const c=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},s=[],c=0;c<t.length;c++){var i=t[c],l=o.base?i[0]+o.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var c=n(a[s]);e[c].references--}for(var i=o(t,r),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=i}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},31:()=>{const t=document.querySelectorAll("[data-folder]"),e=document.querySelectorAll("[data-folder]");t[0].classList.add("isActive"),e.forEach((e=>{e.dataset.folder==t[0].dataset.folder&&e.classList.add("isActive")})),t.forEach((n=>{n.addEventListener("click",(()=>{t.forEach((t=>t.classList.remove("isActive"))),n.classList.add("isActive"),e.forEach((t=>{t.dataset.folder==n.dataset.folder?t.classList.add("isActive"):t.classList.remove("isActive")}))}))}))}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),s=n.n(a),c=n(565),i=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(t,e,n,o,r){this.title=t,this.description=e,this.dueDate=new Date(n),this.priority=o,this.folder=r,this.id=function(t=20){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<t;o++)n+=e[Math.floor(Math.random()*e.length)];return n}(),localStorage[`task-${this.id}`]=JSON.stringify(this)}}class v{constructor(t){this.name=t,localStorage[`folder-${t.toLowerCase().replaceAll(" ","")}`]=JSON.stringify(this)}}function h(){return Object.keys(localStorage).filter((t=>t.startsWith("folder-"))).map((t=>JSON.parse(localStorage[t])))}const b=document.querySelector(".container");function k(t){const e=Object.assign(document.createElement("div"),{className:`column column-${t}`});return b.appendChild(e),e}function x(t,e){const n=Object.assign(document.createElement("div"),{className:`form form-${t}`});return e.appendChild(n),n}function y(t,e){const n=Object.assign(document.createElement("button"),{textContent:t});return e.appendChild(n),n}(function(){const t=k("folders"),e=function(){const e=x("folder",t),n=Object.assign(document.createElement("input"),{id:"folder-name",type:"text",placeholder:"Folder/Project Name"});return e.appendChild(n),{columnForm:e,columnFormInput:n,columnFormButton:y("+",e)}}(),n=function(){const e=h(),n=Object.assign(document.createElement("ul"),{className:"folders"});return t.appendChild(n),e.forEach((t=>{const e=t.name,o=e.toLowerCase().replaceAll(" ",""),r=Object.assign(document.createElement("li"),{className:`folder folder-${o}`,textContent:e});r.setAttribute("data-folder",e),n.appendChild(r)})),{folders:e,columnUl:n}}();!function(){const t=n.folders.map((t=>t.name)),o=e.columnFormButton,r=e.columnFormInput;o.addEventListener("click",(()=>{t.includes(r.value)||""==r.value||(new v(r.value),E())}))}()})(),function(){const t=k("tasks"),e=x("task",t),n=(t,e,n,o)=>{const r=Object.assign(document.createElement("input"),{id:t,name,type:e,placeholder:n,defaultText:n});return o.appendChild(r),r},o=(t,e,n)=>{const o=Object.assign(document.createElement("select"),{id:t,name:t});return e.forEach((t=>{const e=Object.assign(document.createElement("option"),{value:t,textContent:t});o.appendChild(e)})),n.appendChild(o),o},r=(function(){const e=Object.keys(localStorage).filter((t=>t.startsWith("task-"))).map((t=>JSON.parse(localStorage[t]))),r=Object.assign(document.createElement("ul"),{className:"tasks"});t.appendChild(r),e.forEach((t=>{const e=Object.assign(document.createElement("li"),{className:`task task-${t.id}`});e.setAttribute("data-folder",t.folder);const a=Object.assign(document.createElement("button"),{textContent:"-",className:"remove-button"}),s=Object.assign(document.createElement("button"),{textContent:"✎",className:"edit-button"}),c=(a.addEventListener("click",(()=>{const e=`task-${t.id}`;localStorage.removeItem(e),E()})),s.addEventListener("click",(()=>{const e=`task-${t.id}`;!function(){const t=x("edit",b),r=h().map((t=>t.name)),a=n("task-edit-title","text","Title",t),s=n("task-edit-description","text","Description",t),c=n("task-edit-dueDate","date","",t),i=o("task-priority",["High","Medium","Low"],t),l=o("task-folder",r,t),d=Object.assign(document.createElement("button"),{textContent:"+"}),u=Object.assign(document.createElement("button"),{textContent:"x"});u.addEventListener("click",(()=>t.remove())),t.appendChild(d),t.appendChild(u),d.addEventListener("click",(()=>p()));const p=()=>{const t=a.value,n=s.value,o=c.value,r=i.value,d=l.value;new g(t,n,o,r,d),localStorage.removeItem(e),E()}}()})),Object.entries(t)),i=document.createElement("div");for(let t=0;t<c.length-2;t++){let n=c[t][0],o=c[t][1];if("dueDate"==n){let t=new Date(o),e=t.getFullYear();o=`${t.getMonth()+1<10?`0${t.getMonth()+1}`:`${t.get()+1}`}/${t.getDate()<10?`0${t.getDate()}`:`${t.getDate()}`}/${e}`}const r=Object.assign(document.createElement("span"),{textContent:o});i.appendChild(r),e.appendChild(i)}e.appendChild(s),e.appendChild(a),r.appendChild(e)}))}(),function(){const t=h().map((t=>t.name));return{taskTitle:n("task-title","text","Title",e),taskDescription:n("task-description","text","Description",e),taskDueDate:n("task-date","date","",e),taskPriority:o("task-priority",["High","Medium","Low"],e),taskFolder:o("task-folder",t,e)}}());y("+",e).addEventListener("click",(()=>{const t=r.taskTitle.value,e=r.taskDescription.value,n=r.taskDueDate.value,o=r.taskPriority.value,a=r.taskFolder.value;new g(t,e,n,o,a),E()}))}(),window.addEventListener("storage",(()=>window.location.reload(!0)));const E=()=>{window.location.reload(!0)};n(31)})()})();