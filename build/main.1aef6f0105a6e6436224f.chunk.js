(window.maxJsonpForm3=window.maxJsonpForm3||[]).push([[0],{0:function(e,r,n){n("8c8e4f08a118a28666b0"),e.exports=n("948d15f81701a1a1b3fc")},"1283171292070762fea8":function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var t=n("ab4cb61bcb2dc161defb"),o=n("3aced5b508e7389026da"),c=n("3562001638983595ee40"),a=n.n(c),i=n("491cc2e27aa2b4221847");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=t.compose,c={};var l=a()(c),f=[l,Object(o.routerMiddleware)(r)],d=[t.applyMiddleware.apply(void 0,f)],u=Object(t.createStore)(Object(i.a)(),e,n.apply(void 0,d));return u.runSaga=l.run,u.injectedReducers={},u.injectedSagas={},u}},"491cc2e27aa2b4221847":function(e,r,n){"use strict";var t=n("ab4cb61bcb2dc161defb"),o=n("3aced5b508e7389026da"),c=n("5e98cee1846dbfd41421"),a=n("7edf83707012a871cdfb"),i={loading:!1,error:!1,currentUser:!1,userData:{repositories:!1}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,(function(e){switch(r.type){case"boilerplate/App/LOAD_REPOS":e.loading=!0,e.error=!1,e.userData.repositories=!1;break;case"boilerplate/App/LOAD_REPOS_SUCCESS":e.userData.repositories=r.repos,e.loading=!1,e.currentUser=r.username;break;case"boilerplate/App/LOAD_REPOS_ERROR":e.error=r.error,e.loading=!1}}))};function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){u(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(t.combineReducers)(d({global:l,router:Object(o.connectRouter)(c.a)},e));return r}n.d(r,"a",(function(){return b}))},"5e98cee1846dbfd41421":function(e,r,n){"use strict";var t=n("12ba4fef039ee145f0aa"),o=Object(t.createBrowserHistory)();r.a=o},"69c05b858495b6ceb01c":function(e,r,n){"use strict";var t,o=n("8af190b70a6bc55c6f1b"),c=n.n(o);function a(e,r,n,o){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),1===a)r.children=o;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];r.children=i}if(r&&c)for(var f in c)void 0===r[f]&&(r[f]=c[f]);else r||(r=c||{});return{$$typeof:t,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}var i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fallback:null},n=r.fallback,t=void 0===n?null:n,i=Object(o.lazy)(e);return function(e){return a(o.Suspense,{fallback:t},void 0,c.a.createElement(i,e))}};r.a=i((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,"5c50d2b85340885ac833"))}))},"948d15f81701a1a1b3fc":function(e,r,n){"use strict";n.r(r),function(e){n("8af190b70a6bc55c6f1b");var r,t=n("63f14ac74ce296f77f4d"),o=n.n(t),c=n("d7dd51e1bf6bfc2c9c3d"),a=n("5e98cee1846dbfd41421"),i=n("1283171292070762fea8"),l=n("69c05b858495b6ceb01c");function f(e,n,t,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];n.children=i}if(n&&c)for(var f in c)void 0===n[f]&&(n[f]=c[f]);else n||(n=c||{});return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var d=Object(i.a)({},a.a),u=f(c.Provider,{store:d},void 0,f(l.a,{})),b=function(e){o.a.render(u,e.elem||e.selector)};if(window.onAppMounted&&!e.env.VERSION)window.onAppMounted(b);else{console.log("loc",window.location.href),window.location.href.match("safiullin.com")&&(window.__arsfChatIdg="401507133"),window.location.href.match("cafechat.app")&&(window.__arsfChatIdg="336925909");var p=document.getElementById("apppopupmax");p||(p=document.getElementById("apppopupmax122")),p&&b({selector:p})}}.call(this,n("26d59f808dff3e83c741"))}},[[0,1,2]]]);