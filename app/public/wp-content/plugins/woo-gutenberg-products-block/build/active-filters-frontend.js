!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=234)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},101:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(7),o=r(11),c=r(0),a=r(44),i=r(93),s=function(e){var t=e.namespace,r=e.resourceName,s=e.resourceValues,u=void 0===s?[]:s,l=e.query,p=void 0===l?{}:l,f=e.shouldSelect,b=void 0===f||f;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(c.useRef)({results:[],isLoading:!0}),m=Object(a.a)(p),y=Object(a.a)(u),g=Object(i.a)(),v=Object(o.useSelect)((function(e){if(!b)return null;var o=e(n.COLLECTIONS_STORE_KEY),c=[t,r,m,y],a=o.getCollectionError.apply(o,c);return a&&g(a),{results:o.getCollection.apply(o,c),isLoading:!o.hasFinishedResolution("getCollection",c)}}),[t,r,y,m,b]);return null!==v&&(d.current=v),d.current}},11:function(e,t){e.exports=window.wp.data},120:function(e,t,r){"use strict";var n=r(0),o=r(7),c=r(11),a=r(79);t.a=function(e){return function(t){var r;return r=Object(n.useRef)(a.n.restApiRoutes||{}),Object(c.useSelect)((function(e,t){if(r.current){var n=e(o.SCHEMA_STORE_KEY),c=n.isResolving,a=n.hasFinishedResolution,i=t.dispatch(o.SCHEMA_STORE_KEY),s=i.receiveRoutes,u=i.startResolution,l=i.finishResolution;Object.keys(r.current).forEach((function(e){var t=r.current[e];c("getRoutes",[e])||a("getRoutes",[e])||(u("getRoutes",[e]),s(t,[e]),l("getRoutes",[e]))}))}}),[]),React.createElement(e,t)}}},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));var n=r(2),o=Object(n.getSetting)("attributes",[]).reduce((function(e,t){var r,n=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;return n.id&&e.push(n),e}),[]),c=function(e){if(e)return o.find((function(t){return t.id===e}))},a=function(e){if(e)return o.find((function(t){return t.taxonomy===e}))}},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r(6),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=e.filter((function(e){return e.attribute===r.taxonomy})),a=c.length?c[0]:null;if(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(o)){var i=a.slug.filter((function(e){return e!==o})),s=e.filter((function(e){return e.attribute!==r.taxonomy}));i.length>0&&(a.slug=i.sort(),s.push(a)),t(Object(n.sortBy)(s,"attribute"))}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",a=e.filter((function(e){return e.attribute!==r.taxonomy}));0===o.length?t(a):(a.push({attribute:r.taxonomy,operator:c,slug:o.map((function(e){return e.slug})).sort()}),t(Object(n.sortBy)(a,"attribute")))}},149:function(e,t,r){"use strict";var n=r(4),o=r.n(n),c=r(26),a=r.n(c),i=r(0),s=["srcElement","size"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=a()(e,s);return Object(i.isValidElement)(t)?Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},156:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},21:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},212:function(e,t,r){"use strict";var n=r(21),o=r.n(n),c=r(26),a=r.n(c),i=r(39),s=["className","size"],u=function(e){var t=e.className,r=e.size,n=a()(e,s);return React.createElement(i.SVG,o()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:r,height:r},n),React.createElement("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))},l=React.createElement(u,null);t.a=l},217:function(e,t,r){"use strict";var n=r(21),o=r.n(n),c=r(26),a=r.n(c),i=(r(9),r(8)),s=r.n(i),u=r(1),l=r(149),p=r(212),f=(r(156),["text","screenReaderText","element","className","radius","children"]),b=function(e){var t=e.text,r=e.screenReaderText,n=void 0===r?"":r,c=e.element,i=void 0===c?"li":c,u=e.className,l=void 0===u?"":u,p=e.radius,b=void 0===p?"small":p,d=e.children,m=void 0===d?null:d,y=a()(e,f),g=i,v=s()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+b),O=Boolean(n&&n!==t);return React.createElement(g,o()({className:v},y),React.createElement("span",{"aria-hidden":O,className:"wc-block-components-chip__text"},t),O&&React.createElement("span",{className:"screen-reader-text"},n),m)},d=["ariaLabel","className","disabled","onRemove","removeOnAnyClick","text","screenReaderText"];t.a=function(e){var t=e.ariaLabel,r=void 0===t?"":t,n=e.className,c=void 0===n?"":n,i=e.disabled,f=void 0!==i&&i,m=e.onRemove,y=void 0===m?function(){}:m,g=e.removeOnAnyClick,v=void 0!==g&&g,O=e.text,_=e.screenReaderText,h=void 0===_?"":_,w=a()(e,d),x=v?"span":"button";if(!r){var j=h&&"string"==typeof h?h:O;r="string"!=typeof j?
/* translators: Remove chip. */
Object(u.__)("Remove","woo-gutenberg-products-block"):Object(u.sprintf)(
/* translators: %s text of the chip to remove. */
Object(u.__)('Remove "%s"',"woo-gutenberg-products-block"),j)}var E={"aria-label":r,disabled:f,onClick:y,onKeyDown:function(e){"Backspace"!==e.key&&"Delete"!==e.key||y()}},R=v?E:{},S=v?{"aria-hidden":!0}:E;return React.createElement(b,o()({},w,R,{className:s()(c,"is-removable"),element:v?"button":w.element,screenReaderText:h,text:O}),React.createElement(x,o()({className:"wc-block-components-chip__remove"},S),React.createElement(l.a,{className:"wc-block-components-chip__remove-icon",srcElement:p.a,size:16})))}},22:function(e,t){e.exports=window.wp.isShallowEqual},23:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},234:function(e,t,r){e.exports=r(254)},235:function(e,t){},254:function(e,t,r){"use strict";r.r(t);var n=r(120),o=r(95),c=r(5),a=r.n(c),i=r(1),s=r(74),u=r(2),l=r(0),p=r(8),f=r.n(p),b=(r(9),r(48)),d=(r(235),r(144)),m=r(63),y=r(217),g=function(e,t){return Number.isFinite(e)&&Number.isFinite(t)?Object(i.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(i.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(m.formatPrice)(e),Object(m.formatPrice)(t)):Number.isFinite(e)?Object(i.sprintf)(
/* translators: %s min price */
Object(i.__)("From %s","woo-gutenberg-products-block"),Object(m.formatPrice)(e)):Object(i.sprintf)(
/* translators: %s max price */
Object(i.__)("Up to %s","woo-gutenberg-products-block"),Object(m.formatPrice)(t))},v=function(e){var t=e.type,r=e.name,n=e.prefix,o=e.removeCallback,c=void 0===o?function(){}:o,a=e.showLabel,s=void 0===a||a,u=e.displayStyle,l=n?React.createElement(React.Fragment,null,n," ",r):r,p=Object(i.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(i.__)("Remove %s filter","woo-gutenberg-products-block"),r);return React.createElement("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},s&&React.createElement("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===u?React.createElement(y.a,{element:"span",text:l,onRemove:c,radius:"large",ariaLabel:p}):React.createElement("span",{className:"wc-block-active-filters__list-item-name"},l,React.createElement("button",{className:"wc-block-active-filters__list-item-remove",onClick:c},React.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("ellipse",{cx:"8",cy:"8",rx:"8",ry:"8",transform:"rotate(-180 8 8)",fill:"currentColor",fillOpacity:"0.7"}),React.createElement("rect",{x:"10.636",y:"3.94983",width:"2",height:"9.9466",transform:"rotate(45 10.636 3.94983)",fill:"white"}),React.createElement("rect",{x:"12.0503",y:"11.0209",width:"2",height:"9.9466",transform:"rotate(135 12.0503 11.0209)",fill:"white"})),React.createElement(b.a,{screenReaderLabel:p}))))},O=r(101),_=r(31),h=r(145),w=function(e){var t=e.attributeObject,r=void 0===t?{}:t,n=e.slugs,o=void 0===n?[]:n,c=e.operator,u=void 0===c?"in":c,l=e.displayStyle,p=Object(O.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[r.id]}),f=p.results,b=p.isLoading,d=Object(s.b)("attributes",[]),m=a()(d,2),y=m[0],g=m[1];if(b)return null;var w=r.label;return React.createElement("li",null,React.createElement("span",{className:"wc-block-active-filters__list-item-type"},w,":"),React.createElement("ul",null,o.map((function(e,t){var n=f.find((function(t){return t.slug===e}));if(!n)return null;var o="";return t>0&&"and"===u&&(o=React.createElement("span",{className:"wc-block-active-filters__list-item-operator"},Object(i.__)("and","woo-gutenberg-products-block"))),v({type:w,name:Object(_.decodeEntities)(n.name||e),prefix:o,removeCallback:function(){Object(h.a)(y,g,r,e)},showLabel:!1,displayStyle:l})}))))};Object(o.a)({selector:".wp-block-woocommerce-active-filters",Block:Object(n.a)((function(e){var t=e.attributes,r=e.isEditor,n=void 0!==r&&r,o=Object(s.b)("attributes",[]),c=a()(o,2),p=c[0],m=c[1],y=Object(s.b)("stock_status",[]),O=a()(y,2),_=O[0],h=O[1],x=Object(s.b)("min_price"),j=a()(x,2),E=j[0],R=j[1],S=Object(s.b)("max_price"),k=a()(S,2),P=k[0],T=k[1],M=Object(u.getSetting)("stockStatusOptions",[]),N=Object(l.useMemo)((function(){if(_.length>0)return _.map((function(e){return v({type:Object(i.__)("Stock Status","woo-gutenberg-products-block"),name:M[e],removeCallback:function(){var t=_.filter((function(t){return t!==e}));h(t)},displayStyle:t.displayStyle})}))}),[M,_,h,t.displayStyle]),A=Object(l.useMemo)((function(){return Number.isFinite(E)||Number.isFinite(P)?v({type:Object(i.__)("Price","woo-gutenberg-products-block"),name:g(E,P),removeCallback:function(){R(void 0),T(void 0)},displayStyle:t.displayStyle}):null}),[E,P,t.displayStyle,R,T]),C=Object(l.useMemo)((function(){return p.map((function(e){var r=Object(d.b)(e.attribute);return React.createElement(w,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}))}),[p,t.displayStyle]);if(!(p.length>0||_.length>0||Number.isFinite(E)||Number.isFinite(P)||n))return null;var L="h".concat(t.headingLevel),B=f()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return React.createElement(React.Fragment,null,!n&&t.heading&&React.createElement(L,{className:"wc-block-active-filters__title"},t.heading),React.createElement("div",{className:"wc-block-active-filters"},React.createElement("ul",{className:B},n?React.createElement(React.Fragment,null,v({type:Object(i.__)("Size","woo-gutenberg-products-block"),name:Object(i.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),v({type:Object(i.__)("Color","woo-gutenberg-products-block"),name:Object(i.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):React.createElement(React.Fragment,null,A,N,C)),React.createElement("button",{className:"wc-block-active-filters__clear-all",onClick:function(){R(void 0),T(void 0),m([]),h([])}},React.createElement(b.a,{label:Object(i.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(i.__)("Clear All Filters","woo-gutenberg-products-block")}))))})),getProps:function(e){return{attributes:{displayStyle:e.dataset.displayStyle,heading:e.dataset.heading,headingLevel:e.dataset.headingLevel||3}}}})},26:function(e,t,r){var n=r(72);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=window.React},31:function(e,t){e.exports=window.wp.htmlEntities},34:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},35:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},36:function(e,t,r){var n=r(65);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,t,r){var n=r(23).default,o=r(27);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},39:function(e,t){e.exports=window.wp.primitives},4:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},40:function(e,t,r){"use strict";var n=r(34),o=r.n(n),c=r(35),a=r.n(c),i=r(27),s=r.n(i),u=r(36),l=r.n(u),p=r(37),f=r.n(p),b=r(28),d=r.n(b),m=r(4),y=r.n(m),g=(r(9),r(3)),v=r(1),O=r(79),_=function(e){var t=e.imageUrl,r=void 0===t?"".concat(O.l,"/block-error.svg"):t,n=e.header,o=void 0===n?Object(v.__)("Oops!","woo-gutenberg-products-block"):n,c=e.text,a=void 0===c?Object(v.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,i=e.errorMessage,s=e.errorMessagePrefix,u=void 0===s?Object(v.__)("Error:","woo-gutenberg-products-block"):s,l=e.button;return React.createElement("div",{className:"wc-block-error wc-block-components-error"},r&&React.createElement("img",{className:"wc-block-error__image wc-block-components-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&React.createElement("p",{className:"wc-block-error__header wc-block-components-error__header"},o),a&&React.createElement("p",{className:"wc-block-error__text wc-block-components-error__text"},a),i&&React.createElement("p",{className:"wc-block-error__message wc-block-components-error__message"},u?u+" ":"",i),l&&React.createElement("p",{className:"wc-block-error__button wc-block-components-error__button"},l)))};r(71);var h=function(e){l()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var o=d()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return f()(this,e)});function c(){var e;o()(this,c);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),y()(s()(e),"state",{errorMessage:"",hasError:!1}),e}return a()(c,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,a=e.renderError,i=e.button,s=this.state,u=s.errorMessage;return s.hasError?"function"==typeof a?a({errorMessage:u}):React.createElement(_,{errorMessage:n?u:null,header:t,imageUrl:r,text:o,errorMessagePrefix:c,button:i}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(React.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),c}(g.Component);h.defaultProps={showErrorMessage:!0},t.a=h},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r(22),c=r.n(o);function a(e){var t=Object(n.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},48:function(e,t,r){"use strict";var n=r(4),o=r.n(n),c=r(0),a=r(8),i=r.n(a);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,a=e.wrapperProps,s=void 0===a?{}:a,l=null!=r,p=null!=n;return!l&&p?(t=o||"span",s=u(u({},s),{},{className:i()(s.className,"screen-reader-text")}),React.createElement(t,s,n)):(t=o||c.Fragment,l&&p&&r!==n?React.createElement(t,s,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,s,r))}},5:function(e,t,r){var n=r(76),o=r(77),c=r(58),a=r(78);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=Object(n.createContext)("page"),c=function(){return Object(n.useContext)(o)};o.Provider},58:function(e,t,r){var n=r(59);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},59:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t){e.exports=window.lodash},63:function(e,t){e.exports=window.wc.priceFormat},65:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},69:function(e,t,r){"use strict";var n=r(70);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},7:function(e,t){e.exports=window.wc.wcBlocksData},70:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},71:function(e,t){},72:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return m}));var n=r(5),o=r.n(n),c=r(7),a=r(11),i=r(0),s=r(22),u=r.n(s),l=r(44),p=r(96),f=r(51),b=function(e){var t=Object(f.a)();e=e||t;var r=Object(a.useSelect)((function(t){return t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),n=Object(a.useDispatch)(c.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[r,Object(i.useCallback)((function(t){n(e,t)}),[e,n])]},d=function(e,t,r){var n=Object(f.a)();r=r||n;var o=Object(a.useSelect)((function(n){return n(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)}),[r,e]),s=Object(a.useDispatch)(c.QUERY_STATE_STORE_KEY).setQueryValue;return[o,Object(i.useCallback)((function(t){s(r,e,t)}),[r,e,s])]},m=function(e,t){var r=Object(f.a)(),n=b(t=t||r),c=o()(n,2),a=c[0],s=c[1],d=Object(l.a)(a),m=Object(l.a)(e),y=Object(p.a)(m),g=Object(i.useRef)(!1);return Object(i.useEffect)((function(){u()(y,m)||(s(Object.assign({},d,m)),g.current=!0)}),[d,m,y,s]),g.current?[a,s]:[e,s]}},76:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},77:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw o}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},78:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},79:function(e,t,r){"use strict";r.d(t,"n",(function(){return c})),r.d(t,"l",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"m",(function(){return s})),r.d(t,"i",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return p})),r.d(t,"j",(function(){return f})),r.d(t,"c",(function(){return b})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"a",(function(){return y})),r.d(t,"h",(function(){return g})),r.d(t,"b",(function(){return v}));var n,o=r(2),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",i=c.pluginUrl+"build/",s=c.buildPhase,u=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=(o.STORE_PAGES.checkout.id,o.STORE_PAGES.checkout.permalink),p=o.STORE_PAGES.privacy.permalink,f=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),b=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id,o.STORE_PAGES.cart.permalink),d=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),m=Object(o.getSetting)("shippingCountries",{}),y=Object(o.getSetting)("allowedCountries",{}),g=Object(o.getSetting)("shippingStates",{}),v=Object(o.getSetting)("allowedStates",{})},8:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},9:function(e,t,r){e.exports=r(69)()},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(5),o=r.n(n),c=r(0),a=function(){var e=Object(c.useState)(),t=o()(e,2)[1];return Object(c.useCallback)((function(e){t((function(){throw e}))}),[])}},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(21),o=r.n(n),c=r(4),a=r.n(c),i=r(0),s=r(40);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=[".wp-block-woocommerce-cart"],f=function(e){var t=e.Block,r=e.containers,n=e.getProps,c=void 0===n?function(){return{}}:n,a=e.getErrorBoundaryProps,u=void 0===a?function(){return{}}:a;0!==r.length&&Array.prototype.forEach.call(r,(function(e,r){var n=c(e,r),a=u(e,r),p=l(l({},e.dataset),n.attributes||{});e.classList.remove("is-loading"),Object(i.render)(React.createElement(s.a,a,React.createElement(i.Suspense,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(t,o()({},n,{attributes:p})))),e)}))},b=function(e){var t,r,n,o,c,a,i,s=document.body.querySelectorAll(p.join(","));t=l(l({},e),{},{wrappers:s}),r=t.Block,n=t.getProps,o=t.getErrorBoundaryProps,c=t.selector,a=t.wrappers,i=document.body.querySelectorAll(c),a.length>0&&Array.prototype.filter.call(i,(function(e){return!function(e,t){return Array.prototype.some.call(t,(function(t){return t.contains(e)&&!t.isSameNode(e)}))}(e,a)})),f({Block:r,containers:i,getProps:n,getErrorBoundaryProps:o}),Array.prototype.forEach.call(s,(function(t){t.addEventListener("wc-blocks_render_blocks_frontend",(function(){var r,n,o,c,a,i;n=(r=l(l({},e),{},{wrapper:t})).Block,o=r.getProps,c=r.getErrorBoundaryProps,a=r.selector,i=r.wrapper.querySelectorAll(a),f({Block:n,containers:i,getProps:o,getErrorBoundaryProps:c})}))}))}},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3);function o(e,t){var r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current===e||t&&!t(e,r.current)||(r.current=e)}),[e,t]),r.current}}});