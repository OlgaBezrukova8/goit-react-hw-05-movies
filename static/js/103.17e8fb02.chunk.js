"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[103],{6103:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(885),a=t(2791),u=t(6871),c=t(7897),i=t(184),o=function(n){return n.array.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:t}),(0,i.jsx)("p",{children:r})]},e)}))},s=t(7656),f=function(){var n=function(){var n=(0,a.useState)(null),e=(0,r.Z)(n,2),t=e[0],i=e[1],o=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.CN)(o).then(i)}),[o]),t}();return(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[null===n&&(0,i.jsx)(s.a,{}),null!==n&&n.length<0&&"We don't have any reviews for this movie.",null!==n&&n.length>0&&(0,i.jsx)(o,{array:n})]})})}},7897:function(n,e,t){t.d(e,{CN:function(){return v},CP:function(){return s},Si:function(){return p},l_:function(){return f},v_:function(){return l}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c),o="efb495fff3706abe3c98fcab5615ca8d";i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=103.17e8fb02.chunk.js.map