import r from"react";"function"==typeof SuppressedError&&SuppressedError;!function(r,o){void 0===o&&(o={});var t=o.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===t&&n.firstChild?n.insertBefore(e,n.firstChild):n.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}}(".storybook-button {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n    border: 0;\r\n    border-radius: 3em;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    line-height: 1;\r\n}\r\n\r\n.storybook-button--primary {\r\n    color: white;\r\n    background-color: #1ea7fd;\r\n}\r\n\r\n.storybook-button--secondary {\r\n    color: #333;\r\n    background-color: transparent;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n\r\n.storybook-button--small {\r\n    font-size: 12px;\r\n    padding: 10px 16px;\r\n}\r\n\r\n.storybook-button--medium {\r\n    font-size: 14px;\r\n    padding: 11px 20px;\r\n}\r\n\r\n.storybook-button--large {\r\n    font-size: 16px;\r\n    padding: 12px 24px;\r\n}");const o=o=>{var{primary:t=!1,size:n="medium",backgroundColor:e,label:s}=o,a=function(r,o){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&o.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(n=Object.getOwnPropertySymbols(r);e<n.length;e++)o.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(r,n[e])&&(t[n[e]]=r[n[e]])}return t}(o,["primary","size","backgroundColor","label"]);const i=t?"storybook-button--primary":"storybook-button--secondary";return r.createElement("button",Object.assign({type:"button",className:["storybook-button",`storybook-button--${n}`,i].join(" "),style:{backgroundColor:e}},a),s)};export{o as Button};
//# sourceMappingURL=index.mjs.map
