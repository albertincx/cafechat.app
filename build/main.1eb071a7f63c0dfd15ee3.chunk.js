(window.maxJsonpForm3=window.maxJsonpForm3||[]).push([[0],{0:function(e,r,t){t("8c8e4f08a118a28666b0"),e.exports=t("948d15f81701a1a1b3fc")},"1283171292070762fea8":function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t("ab4cb61bcb2dc161defb"),o=t("3aced5b508e7389026da"),a=t("3562001638983595ee40"),c=t.n(a),i=t("491cc2e27aa2b4221847");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=n.compose,a={};var f=c()(a),l=[f,Object(o.routerMiddleware)(r)],d=[n.applyMiddleware.apply(void 0,l)],u=Object(n.createStore)(Object(i.a)(),e,t.apply(void 0,d));return u.runSaga=f.run,u.injectedReducers={},u.injectedSagas={},u}},"491cc2e27aa2b4221847":function(e,r,t){"use strict";var n=t("ab4cb61bcb2dc161defb"),o=t("3aced5b508e7389026da"),a=t("5e98cee1846dbfd41421"),c=t("7edf83707012a871cdfb"),i={loading:!1,error:!1,currentUser:!1,userData:{repositories:!1}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1?arguments[1]:void 0;return Object(c.a)(e,(function(e){switch(r.type){case"boilerplate/App/LOAD_REPOS":e.loading=!0,e.error=!1,e.userData.repositories=!1;break;case"boilerplate/App/LOAD_REPOS_SUCCESS":e.userData.repositories=r.repos,e.loading=!1,e.currentUser=r.username;break;case"boilerplate/App/LOAD_REPOS_ERROR":e.error=r.error,e.loading=!1}}))};function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(n.combineReducers)(d({global:f,router:Object(o.connectRouter)(a.a)},e));return r}t.d(r,"a",(function(){return b}))},"5e98cee1846dbfd41421":function(e,r,t){"use strict";var n=t("12ba4fef039ee145f0aa"),o=Object(n.createBrowserHistory)();r.a=o},"69c05b858495b6ceb01c":function(e,r,t){"use strict";var n,o=t("8af190b70a6bc55c6f1b"),a=t.n(o);function c(e,r,t,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(r||0===c||(r={children:void 0}),1===c)r.children=o;else if(c>1){for(var i=new Array(c),f=0;f<c;f++)i[f]=arguments[f+3];r.children=i}if(r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fallback:null},t=r.fallback,n=void 0===t?null:t,i=Object(o.lazy)(e);return function(e){return c(o.Suspense,{fallback:n},void 0,a.a.createElement(i,e))}};r.a=i((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,"5c50d2b85340885ac833"))}))},"948d15f81701a1a1b3fc":function(e,r,t){"use strict";t.r(r),function(e){t("8af190b70a6bc55c6f1b");var r,n=t("63f14ac74ce296f77f4d"),o=t.n(n),a=t("d7dd51e1bf6bfc2c9c3d"),c=t("5e98cee1846dbfd41421"),i=t("1283171292070762fea8"),f=t("69c05b858495b6ceb01c");function l(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),1===c)t.children=o;else if(c>1){for(var i=new Array(c),f=0;f<c;f++)i[f]=arguments[f+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var d=Object(i.a)({},c.a),u=l(a.Provider,{store:d},void 0,l(f.a,{})),b=function(e){o.a.render(u,e.elem||e.selector)};if(window.onAppMounted&&!e.env.VERSION)window.onAppMounted(b);else{window.location.href.match("safiullin.com")&&(window.__arsfChatIdg="401507133"),window.location.href.match("cafechat.app")&&(window.__arsfChatIdg="336925909"),window.__arsfChatIdg="336925909";var p=document.getElementById("apppopupmax");p||(p=document.getElementById("apppopupmax122"))&&(window.__arsfChatIdg="336925909"),p&&b({selector:p})}}.call(this,t("26d59f808dff3e83c741"))}},[[0,1,2]]]);