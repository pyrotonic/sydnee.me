(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sydnee.me/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"119d":function(t,e,n){"use strict";var r=n("797b"),o=n.n(r);o.a},"1aa7":function(t,e,n){"use strict";var r=n("4ccd"),o=n.n(r);o.a},"1d55":function(t,e,n){"use strict";var r=n("7636"),o=n.n(r);o.a},3812:function(t,e,n){},"452c":function(t,e,n){},"4a2c":function(t,e,n){},"4ccd":function(t,e,n){},"6b5d":function(t,e,n){"use strict";var r=n("4a2c"),o=n.n(r);o.a},"6dad":function(t,e,n){"use strict";var r=n("91e9"),o=n.n(r);o.a},7636:function(t,e,n){},7677:function(t,e,n){"use strict";var r=n("9407"),o=n.n(r);o.a},"797b":function(t,e,n){},"91e9":function(t,e,n){},9407:function(t,e,n){},9482:function(t,e,n){"use strict";var r=n("cbfc"),o=n.n(r);o.a},b0a0:function(t,e,n){"use strict";var r=n("452c"),o=n.n(r);o.a},cbfc:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",[n("router-view")],1),n("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("Title",[t._v("Sydnee Rodriguez")]),n("Navigation")],1)},c=[],u=n("9ab4"),s=n("2fe1"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._t("default")],2)},p=[],f=(n("6b5d"),n("2877")),h={},d=Object(f["a"])(h,l,p,!1,null,"3b0f42b2",null),b=d.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])},m=[],v=(n("9482"),{}),g=Object(f["a"])(v,j,m,!1,null,"4fd08df6",null),y=g.exports,O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),e=Object(u["c"])([Object(s["a"])({components:{Title:b,Navigation:y}})],e),e}(r["a"]),_=O,P=_,$=(n("6dad"),Object(f["a"])(P,i,c,!1,null,"1c87d600",null)),w=$.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer")},E=[],S=(n("1aa7"),{}),D=Object(f["a"])(S,x,E,!1,null,"5101d16b",null),k=D.exports,B=r["a"].extend({name:"App",components:{Header:w,Footer:k}}),I=B,T=(n("1d55"),n("b0a0"),Object(f["a"])(I,o,a,!1,null,"c16a8cb0",null)),C=T.exports,H=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,(function(e){var r=e.id;return n("router-link",{key:r,attrs:{to:"/project/"+r}},[t._v(" "+t._s(r)+" ")])})),1)},A=[],M=function(){return"/sydnee.me/api/blurhash.json"},N=function(){return Object(u["b"])(void 0,void 0,Promise,(function(){var t,e;return Object(u["e"])(this,(function(n){switch(n.label){case 0:return[4,fetch(M())];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),[2,e]}}))}))},z=function(){return"/sydnee.me/api/projects.json"},F=function(){return Object(u["b"])(void 0,void 0,Promise,(function(){var t,e;return Object(u["e"])(this,(function(n){switch(n.label){case 0:return[4,fetch(z())];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),[2,e]}}))}))},J=function(t){return"/sydnee.me/api/projects/"+t+".json"},R=function(t){return Object(u["b"])(void 0,void 0,Promise,(function(){var e,n;return Object(u["e"])(this,(function(r){switch(r.label){case 0:return[4,fetch(J(t))];case 1:return e=r.sent(),[4,e.json()];case 2:return n=r.sent(),[2,n]}}))}))},U=r["a"].observable({blurhash:{},list:[],projects:{}}),W={getBlurhash:function(t){return U.blurhash[t]||null},getProjectList:function(){return U.list},getProject:function(t){return U.projects[t]||null}},q={setBlurhash:function(t){return U.blurhash=t},setProjectList:function(t){return U.list=t},setProject:function(t,e){var n;return U.projects=Object(u["a"])(Object(u["a"])({},U.projects),(n={},n[t]=e,n))}},G={loadBlurhash:function(){N().then((function(t){return q.setBlurhash(t)}))},loadProjectList:function(){F().then((function(t){return q.setProjectList(t)}))},loadProject:function(t){R(t).then((function(e){return q.setProject(t,e)}))}},K=Object(u["a"])(Object(u["a"])(Object(u["a"])({},W),q),G),Q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),Object.defineProperty(e.prototype,"list",{get:function(){return K.getProjectList()},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){K.loadProjectList()},e=Object(u["c"])([Object(s["a"])({components:{}})],e),e}(r["a"]),V=Q,X=V,Y=(n("119d"),Object(f["a"])(X,L,A,!1,null,"7c1acaa0",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Paragraph",[t._v(" Hey! I’m Sydnee Rodriguez, an enthusiastic designer, gamer, and multimedia storyteller. ")]),n("Paragraph",[t._v(" I’m currently following my passion studying at the University of California, Davis where I major in Design and double minor in Professional Writing and Communications. ")]),n("Paragraph",[t._v(" I enjoy blending the lines between fields and embracing interdisciplinary design to combine media and develop design solutions. I deliberately chose my fields of study to compliment my desire to communicate ideas through visual design and language. ")])],1)},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._t("default")],2)},rt=[],ot={},at=Object(f["a"])(ot,nt,rt,!1,null,null,null),it=at.exports,ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),e=Object(u["c"])([Object(s["a"])({components:{Paragraph:it}})],e),e}(r["a"]),ut=ct,st=ut,lt=Object(f["a"])(st,tt,et,!1,null,null,null),pt=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.project?n("div",[n("Title",[t._v(t._s(t.project.title))]),n("Description",[t._v(t._s(t.project.description))]),n("Date",{attrs:{date:t.project.date}}),t._l(t.project.content,(function(e,r){return n("Content",t._b({key:r},"Content",e,!1))}))],2):t._e()},ht=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._t("default")],2)},bt=[],jt=(n("e903"),{}),mt=Object(f["a"])(jt,dt,bt,!1,null,"5a4d394a",null),vt=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(" "+t._s(t.timestamp.toString())+" ")])},yt=[],Ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),Object.defineProperty(e.prototype,"timestamp",{get:function(){return new window.Date(this.$props.date[0],this.$props.date[1]-1,this.$props.date[2])},enumerable:!0,configurable:!0}),e=Object(u["c"])([Object(s["a"])({props:{date:Array}})],e),e}(r["a"]),_t=Ot,Pt=_t,$t=Object(f["a"])(Pt,gt,yt,!1,null,null,null),wt=$t.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["image"===t.$props.type?n("Asset",{attrs:{file:t.$props.content}}):t._e(),"paragraph"===t.$props.type?n("Paragraph",[t._v(" "+t._s(t.$props.content)+" ")]):t._e()],1)},Et=[],St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.blurhash&&!t.loaded?n("BlurHash",{attrs:{hash:t.blurhash.hash,width:t.blurhash.width,height:t.blurhash.height}}):t._e(),n("img",{ref:"image",class:{loaded:t.loaded},attrs:{src:t.src}})],1)},Dt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"canvas"})},Bt=[],It=n("a161"),Tt=n.n(It),Ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),Object.defineProperty(e.prototype,"pixels",{get:function(){return Tt()(this.$props.hash,this.$props.width,this.$props.height)},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){var t=this.$refs.canvas;t.width=this.$props.width,t.height=this.$props.height;var e=t.getContext("2d"),n=e.createImageData(t.width,t.height);n.data.set(this.pixels),e.putImageData(n,0,0)},e=Object(u["c"])([Object(s["a"])({props:{hash:String,width:Number,height:Number}})],e),e}(r["a"]),Ht=Ct,Lt=Ht,At=Object(f["a"])(Lt,kt,Bt,!1,null,null,null),Mt=At.exports,Nt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loaded=!1,e}return Object(u["d"])(e,t),Object.defineProperty(e.prototype,"src",{get:function(){return"/sydnee.me/assets/"+this.$props.file},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blurhash",{get:function(){return K.getBlurhash(this.$props.file)},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){var t=this,e=this.$refs.image;e.decode().then((function(){return t.loaded=!0}))},e=Object(u["c"])([Object(s["a"])({props:{file:String},components:{BlurHash:Mt}})],e),e}(r["a"]),zt=Nt,Ft=zt,Jt=(n("7677"),Object(f["a"])(Ft,St,Dt,!1,null,"2d142f6a",null)),Rt=Jt.exports,Ut=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),e=Object(u["c"])([Object(s["a"])({props:{type:String,content:String},components:{Asset:Rt,Paragraph:it}})],e),e}(r["a"]),Wt=Ut,qt=Wt,Gt=Object(f["a"])(qt,xt,Et,!1,null,null,null),Kt=Gt.exports,Qt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(u["d"])(e,t),Object.defineProperty(e.prototype,"project",{get:function(){return K.getProject(this.$route.params.id)},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){K.loadProject(this.$route.params.id)},e=Object(u["c"])([Object(s["a"])({components:{Title:b,Description:vt,Date:wt,Content:Kt}})],e),e}(r["a"]),Vt=Qt,Xt=Vt,Yt=Object(f["a"])(Xt,ft,ht,!1,null,null,null),Zt=Yt.exports;r["a"].use(H["a"]);var te=[{path:"/",component:Z},{path:"/about",component:pt},{path:"/project/:id",component:Zt}],ee=new H["a"]({routes:te});r["a"].config.productionTip=!1,new r["a"]({router:ee,render:function(t){return t(C)},created:function(){K.loadBlurhash()}}).$mount("#app")},e903:function(t,e,n){"use strict";var r=n("3812"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f50e6603.js.map