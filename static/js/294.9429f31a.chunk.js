"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{2294:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),a=e(2791),c=e(6871),u=e(7897),i=e(2679),o=e(7656),s=e(184),p=function(){var n=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.v_)(o).then(i).catch((function(n){return console.log(n)}))}),[o]),e}();return(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[null===n&&(0,s.jsx)(o.a,{}),null!==n&&n.length<0&&"We don't have any information.",null!==n&&n.length>0&&n.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path,c=null===a?i:"".concat("https://image.tmdb.org/t/p/w500").concat(a);return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:c,alt:e}),(0,s.jsx)("p",{children:e}),(0,s.jsx)("p",{children:r})]},t)}))]})})};p.defaultProps={array:[]};var f=p},7897:function(n,t,e){e.d(t,{CN:function(){return v},CP:function(){return s},Si:function(){return f},l_:function(){return p},v_:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="efb495fff3706abe3c98fcab5615ca8d";i().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2679:function(n,t,e){n.exports=e.p+"static/media/no-img.604dbe3178ce7fbd4541.jpg"}}]);
//# sourceMappingURL=294.9429f31a.chunk.js.map