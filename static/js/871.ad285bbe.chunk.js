"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{2871:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(885),a=r(2791),c=r(501),u=r(6871),o=r(5264),i=r(7897),s=r(7656);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(184),v=function(e){var t=e.onSubmit,r=(0,a.useState)({search:""}),c=(0,n.Z)(r,2),u=c[0],o=c[1];return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(l({},u)),o({search:""})},children:[(0,h.jsx)("input",{onChange:function(e){var t=e.target,r=t.name,n=t.value;o(l(l({},u),{},f({},r,n)))},name:"search",value:u.search,placeholder:"...",required:!0}),(0,h.jsx)("button",{children:"Search"})]})},g=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],f=t[1],p=(0,a.useState)(null),l=(0,n.Z)(p,2),g=l[0],b=l[1],d=(0,a.useState)(!1),m=(0,n.Z)(d,2),y=m[0],w=m[1],j=(0,c.lr)(),x=(0,n.Z)(j,2),O=x[0],k=x[1],S=O.get("search"),_=(0,u.TH)();return(0,a.useEffect)((function(){S&&(w(!0),(0,i.l_)(S).then((function(e){f(e),w(!1)})).catch((function(e){b({error:e}),w(!1)})))}),[S]),(0,h.jsx)(h.Fragment,{children:y?(0,h.jsx)(s.a,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{onSubmit:function(e){var t=e.search;k({search:t})}}),g&&o.Notify.failure("Ooops, something went wrong ".concat(g.message,". Please, reload the page")),r.length>0&&(0,h.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{state:{from:_},to:"/movies/".concat(t),children:r})},t)}))})]})})}},7897:function(e,t,r){r.d(t,{CN:function(){return h},CP:function(){return s},Si:function(){return p},l_:function(){return f},v_:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),o=r.n(u),i="efb495fff3706abe3c98fcab5615ca8d";o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.ad285bbe.chunk.js.map