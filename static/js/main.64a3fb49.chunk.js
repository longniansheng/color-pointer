(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,t,r){n.exports=r(27)},27:function(n,t,r){"use strict";r.r(t);var o=r(0),e=r.n(o),i=r(9),a=r.n(i),c=r(3),u=r(1),s=r(2);function l(){var n=Object(u.a)(["\n  position: absolute;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.6s;\n  width: ",";\n  height: ",";\n  background-color: ",";\n  transform: ",";\n"]);return l=function(){return n},n}var h=s.a.div(l(),function(n){return"".concat(n.radius,"px")},function(n){return"".concat(n.radius,"px")},function(n){return n.color},function(n){return"translate(".concat(n.x,"px, ").concat(n.y,"px)")});var d=e.a.memo(function(n){return e.a.createElement(h,{x:n.point.x,y:n.point.y,color:n.point.color,radius:n.point.radius,onClick:n.handleClick})}),f=r(7),p=r(12),v=r(13),b=function(){function n(t,r,o,e){Object(p.a)(this,n),this.x=void 0,this.y=void 0,this.radius=void 0,this.color=void 0,this.x=t,this.y=r,this.radius=o,this.color=e}return Object(v.a)(n,[{key:"move",value:function(t,r){return new n(t,r,this.radius,this.color)}},{key:"changeColor",value:function(t){return new n(this.x,this.y,this.radius,t)}},{key:"changeRadius",value:function(t){return new n(this.x,this.y,t,this.color)}}]),n}();function x(n,t){var r=Math.min(n,t),o=Math.max(n,t);return Math.random()*(o-r)+r}function m(){var n=Object(o.useState)(function(){return function(){for(var n=[],t=0;t<100;t++){var r=x(590,0),o=x(590,0),e=Math.floor(x(16777215,0)).toString(16),i=new b(r,o,10,"#".concat(e));n.push(i)}return n}()}),t=Object(c.a)(n,2),r=t[0],e=t[1],i=Object(o.useCallback)(function(n){var t=Math.floor(x(16777215,0)).toString(16),o=x(20,10),i=x(600-o,o),a=x(600-o,o),c=r[n].move(i,a).changeColor("#".concat(t)).changeRadius(o),u=[].concat(Object(f.a)(r.slice(0,n)),[c],Object(f.a)(r.slice(n+1)));e(u)},[r]);return[r,i]}function g(){var n=Object(u.a)(["\n  width: 600px;\n  height: 600px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -300px;\n  margin-left: -300px;\n  border: 1px solid;\n  transition: all 1s;\n"]);return g=function(){return n},n}var w=s.a.div(g()),y=function(){var n=m(),t=Object(c.a)(n,2),r=t[0],o=t[1];return e.a.createElement(w,null,r.map(function(n,t){return e.a.createElement(d,{key:t,point:n,handleClick:function(){return o(t)}})}))};a.a.render(e.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.64a3fb49.chunk.js.map