webpackJsonp([1],{"m/F8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o("TToO"),l=o("2Je8"),a=o("NVOs"),r=o("3j3K"),i=o("5oXY");console.log("`Detail` component loaded asynchronously");var u=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Detail` component")},n})();u=t.a([Object(r.o)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],u);var c=[{path:"",children:[{path:"",component:u},{path:"child-detail",loadChildren:function(){return o.e(3).then(o.bind(null,"02s1")).then((function(n){return n.ChildDetailModule}))}}]}];console.log("`Detail` bundle loaded asynchronously");var d=(function(){function n(){}return n})();d.routes=c,d=t.a([Object(r.M)({declarations:[u],imports:[l.b,a.a,i.c.forChild(c)]})],d),o.d(e,"DetailModule",(function(){return d}))}});