"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(e,t,n){n.r(t);var r=n(885),a=n(2791),u=n(6871),c=n(501),o=n(5264),s=n(7897),i=n(184);t.default=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],f=t[1],p=(0,a.useState)(null),l=(0,r.Z)(p,2),h=l[0],v=l[1],d=(0,u.TH)();return(0,a.useEffect)((function(){(0,s.CP)().then(f).catch((function(e){v({error:e})}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Trending today"}),h&&o.Notify.failure("Ooops, something happend wrong ".concat(h.message,". Please, reload the page")),(0,i.jsx)("ul",{children:n&&n.results.map((function(e){var t=e.title,n=e.id;return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{state:{from:d},to:"/movies/".concat(n),children:t})},n)}))})]})}},7897:function(e,t,n){n.d(t,{CN:function(){return h},CP:function(){return i},Si:function(){return p},l_:function(){return f},v_:function(){return l}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),o=n.n(c),s="efb495fff3706abe3c98fcab5615ca8d";o().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.133c1f82.chunk.js.map