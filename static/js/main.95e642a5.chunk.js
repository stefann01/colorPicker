(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{35:function(e,t,a){e.exports={test:"NavigationBar_test__vDAZh"}},41:function(e,t,a){e.exports=a(56)},46:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(46),a(47),a(28)),i=a(23),u=a(35),s=a.n(u);var m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{bg:"dark",expand:"lg",variant:"dark"},o.a.createElement(l.a.Brand,null,"Color Picker"),o.a.createElement(i.a,null,o.a.createElement(i.a.Link,{onClick:function(){console.log("Clicked")},className:s.a.test},"Create Pallete"),o.a.createElement(i.a.Link,null,"Choose from Image"))))},d=(a(52),a(29)),f=a(30),g=a(36),h=a(31),p=a(38),E=a(26),v=a(27),k=a(37),b=a.n(k),w=a(20),y=a(39),C=function e(t){Object(g.a)(this,e),this.colors=t},x=new C(["#ff2345","#dd5412","#ccdf90","#123456","#0000aa"]);var O=o.a.memo((function(){var e=Object(n.useState)(x),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),l=Object(f.a)(c,2),i=l[0],u=l[1],s=Object(w.b)(),m=s.enqueueSnackbar;s.closeSnackbar,Object(n.useEffect)((function(){var e,t=null===(e=document.getElementById("picker"))||void 0===e?void 0:e.offsetHeight;t&&u(t)}),[]);var g=function(e){if(console.log("A key was pressed",e.keyCode),32===e.keyCode){for(var t=[],n=0;n<a.colors.length;++n)t=[].concat(Object(d.a)(t),["#"+(16777215*Math.random()<<0).toString(16).padStart(6,"0")]);r(new C(t))}};return Object(n.useEffect)((function(){return window.addEventListener("keydown",g),function(){window.removeEventListener("keydown",g)}}),[g]),o.a.createElement(p.a,{fluid:!0},o.a.createElement(E.a,{style:{height:"400px",overflowY:"scroll",marginTop:"10px",marginBottom:"10px"}},o.a.createElement(v.a,null,o.a.createElement(h.a,{id:"picker"},a.colors.map((function(e,t){return o.a.createElement(h.a.Item,{key:t,style:{display:"flex",height:"60px"}},o.a.createElement("label",null,o.a.createElement("input",{type:"color",value:e,onChange:function(e){return function(e,t){var n=Object(d.a)(a.colors);n[t]=e.target.value,r(new C(n))}(e,t)}})),o.a.createElement("label",{style:{float:"right",marginLeft:"auto",textAlign:"left"}},e),o.a.createElement(y.a,{onClick:function(){!function(e){b()(e.toString()),m("Copied to clipboard",{variant:"success",autoHideDuration:1200})}(e)},style:{float:"right"},variant:"primary"},"Clipboard"))}))))),o.a.createElement(E.a,{style:{height:"400px"}},a.colors.map((function(e,t){return o.a.createElement(v.a,{key:t,style:{backgroundColor:e,width:"100%",height:i}})}))))}));var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w.a,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"center"}},o.a.createElement(m,null),o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.95e642a5.chunk.js.map