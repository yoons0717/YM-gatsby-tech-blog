(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var c=u[s];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(8416),o=r(7424),a=r(861);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(8936),c=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function g(t,e){return e.decode?c(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&g(r,t).includes(t.arrayFormatSeparator);r=a?g(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)})):null===r?r:g(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?g(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var s=a.value;if(""!==s){var c=l(e.decode?s.replace(/\+/g," "):s,"="),f=o(c,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:g(m,e),r(g(p,e),m,n)}}}catch(Z){u.e(Z)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var S=j[k];w[S]=b(w[S],e)}else n[h]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[",o,"]"].join("")]:[[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[]"].join("")]:[[m(e,t),"[]=",m(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),":list="].join("")]:[[m(e,t),":list=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(e,t)]:[[m(e,t),"=",m(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var s=u[i];r(s)||(o[s]=t[s])}var c=Object.keys(o);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var o=t[r];return void 0===o?"":null===o?m(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?m(r,e)+"[]":o.reduce(n(r),[]).join("&"):m(r,e)+"="+m(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),s=e.stringify(u,r);s&&(s="?".concat(s));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[p]?m(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(s).concat(c)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,s=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:s},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},4461:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return U}});var n=r(7294),o=r(2203),a=r(1008),i=r(3431);var u=(0,a.Z)("img",{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),s=function(t){var e=t.profileImage;return(0,i.tZ)(u,{image:e,alt:"Profile Image"})};var c=(0,a.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),l=(0,a.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),f=(0,a.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),p=(0,a.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(c,null,(0,i.tZ)(l,null,(0,i.tZ)(s,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(f,null,"Nice to Meet You,"),(0,i.tZ)(p,null,"I'm Junior Frontend Developer Yoon."))))};var m=r(1082),g=["active"];var y=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),x=(0,a.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,g);return(0,i.tZ)(m.rU,e)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),v=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(y,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(x,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},b=r(7462),h=r(3723);var w=(0,a.Z)(m.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),k=(0,a.Z)(h.G,{target:"e1eg5kak6"})({name:"pxpl23",styles:"width:100%;height:200px;border-radius:10px 10px 0 0;object-fit:cover"}),j=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),S=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),Z=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),O=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),_=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),A=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,u=t.link;return(0,i.tZ)(w,{to:u},(0,i.tZ)(k,{image:a,alt:"Post Item Image"}),(0,i.tZ)(j,null,(0,i.tZ)(S,null,e),(0,i.tZ)(Z,null,r),(0,i.tZ)(I,null,n.map((function(t){return(0,i.tZ)(O,{key:t},t)}))),(0,i.tZ)(_,null,o)))},F=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useState)(1),i=a[0],u=a[1],s=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){10*i>=s.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:s.slice(0,10*i)}};var E=(0,a.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),M=function(t){var e=t.selectedCategory,r=t.posts,n=F(e,r).containerRef;return(0,i.tZ)(E,{ref:n},r.map((function(t){var e=t.node,r=e.id,n=e.frontmatter,o=e.fields.slug;return(0,i.tZ)(A,(0,b.Z)({},n,{link:o,key:r}))})))},C=r(7196),U=function(t){var e=t.location.search,r=t.data,a=r.site.siteMetadata,u=a.title,s=a.description,c=a.siteUrl,l=r.allMarkdownRemark.edges,f=r.file,p=f.childImageSharp.gatsbyImageData,m=f.publicURL,g=o.parse(e),y="string"==typeof g.category&&g.category?g.category:"All",x=(0,n.useMemo)((function(){return l.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(C.Z,{title:u,description:s,url:c,image:m},(0,i.tZ)(d,{profileImage:p}),(0,i.tZ)(v,{selectedCategory:y,categoryList:x}),(0,i.tZ)(M,{selectedCategory:y,posts:l}))}},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},5372:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t,e,r){var n=r(4062);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8872:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,u=[],s=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(u.push(n.value),u.length!==e);s=!0);}catch(l){c=!0,o=l}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}},t.exports.__esModule=!0,t.exports.default=t.exports},2218:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7424:function(t,e,r){var n=r(5372),o=r(8872),a=r(6116),i=r(2218);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},5036:function(t,e,r){var n=r(8698).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},4062:function(t,e,r){var n=r(8698).default,o=r(5036);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,r){var n=r(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3413c4467af68eebf2ac.js.map