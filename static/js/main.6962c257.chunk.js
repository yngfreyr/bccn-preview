(this.webpackJsonpapp000=this.webpackJsonpapp000||[]).push([[0],{21:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(8),a=n.n(o),s=n(3),c=n(13),p=n(2),d=n(12),u=n(1),g=p.a.main.withConfig({displayName:"App__Wrapper",componentId:"sc-1wdtgts-0"})(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:0;"]),h=p.a.div.withConfig({displayName:"App__Scene",componentId:"sc-1wdtgts-1"})(["position:absolute;width:","vw;height:","vh;perspective:","px;top:50%;left:50%;transform:translate(-50%,-50%);transition:all 1000ms ease-in-out;"],(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.perspective})),l=p.a.div.withConfig({displayName:"App__Carousel",componentId:"sc-1wdtgts-2"})(["position:absolute;width:100%;height:100%;transform-style:preserve-3d;transform:rotateY(","deg);transition:all 1000ms ease-in-out;"],(function(t){return t.degree})),f=p.a.div.withConfig({displayName:"App__Cell",componentId:"sc-1wdtgts-3"})(["position:absolute;width:","vw;height:","vh;transform:rotateY(","deg) translateZ(","vw);background-image:url(",");background-size:contain;background-repeat:no-repeat;background-position:center;overflow:hidden;border-width:1px;border-style:solid;border-color:#e5e7eb;"],(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.rotateY}),(function(t){return t.translateZ}),(function(t){return t.imageURL}));function m(){var t=Object(i.useState)(0),e=Object(c.a)(t,2),n=e[0],r=e[1],o=Object(d.useSwipeable)({onSwipedLeft:function(t){var e=t.deltaX;return r((function(t){return t+e}))},onSwipedRight:function(t){var e=t.deltaX;return r((function(t){return t-e}))},delta:10,preventDefaultTouchmoveEvent:!1,trackTouch:!0,trackMouse:!0}),a={width:30,height:40,perspective:2e3};return Object(u.jsx)(g,Object(s.a)(Object(s.a)({},o),{},{children:Object(u.jsx)(h,Object(s.a)(Object(s.a)({},a),{},{children:Object(u.jsx)(l,{degree:n,children:["/images/1615463949855.png","/images/1615464000408.png","/images/1615464009818.png","/images/1615464101710.png","/images/1615464109058.png","/images/1615464114780.png","/images/1615469250791.png"].map((function(t,e,n){return Object(u.jsx)(f,{width:a.width,height:a.height,translateZ:a.width/2/Math.tan(Math.PI/n.length),rotateY:360/n.length*e,imageURL:t},t)}))})}))}))}var b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),o(t),a(t)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),b()}},[[21,1,2]]]);
//# sourceMappingURL=main.6962c257.chunk.js.map