(self.webpackChunkvue_wp_plugin_starter=self.webpackChunkvue_wp_plugin_starter||[]).push([[467],{277:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"X",{value:!0});var a=n(5),u=r(n(97));t.Z=a.defineComponent({mounted:function(){u.default("vue-app")}})},81:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};var a=n(5),u=r(n(537)),o=r(n(915));n(498),a.createApp(u.default).use(o.default).mount("#vue-admin-app")},915:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(119),u=r(n(520)),o=r(n(284)),c=[{path:"/",component:u.default},{path:"/settings",component:o.default}],s=a.createRouter({history:a.createWebHashHistory(),routes:c});t.default=s},498:function(){},505:function(e,t,n){"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=(0,n(5).defineComponent)({name:"Dashboard",props:{msg:{type:String,required:!1,default:"Welcome to Your Vue.js Backend App"}}});t.Z=r},561:function(e,t,n){"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=(0,n(5).defineComponent)({name:"Settings",data:function(){return{}}});t.Z=r},924:function(e,t,n){"use strict";t.s=void 0;var r=n(5),a=(0,r.withScopeId)("data-v-246da6c4");(0,r.pushScopeId)("data-v-246da6c4");var u=(0,r.createVNode)("h3",null,"Backend App",-1),o={class:"main-wrapper"};(0,r.popScopeId)();var c=a((function(e,t,n,a,c,s){var i=(0,r.resolveComponent)("router-view");return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[u,(0,r.createVNode)("div",o,[(0,r.createVNode)(i,{key:e.$route.path})])],64)}));t.s=c},386:function(e,t,n){"use strict";t.s=void 0;var r=n(5),a=(0,r.withScopeId)("data-v-7187ce99");(0,r.pushScopeId)("data-v-7187ce99");var u={class:"app-dashboard"};(0,r.popScopeId)();var o=a((function(e,t,n,a,o,c){return(0,r.openBlock)(),(0,r.createBlock)("div",u,[(0,r.createVNode)("span",null,(0,r.toDisplayString)(e.msg),1)])}));t.s=o},180:function(e,t,n){"use strict";t.s=void 0;var r=n(5),a=(0,r.withScopeId)("data-v-18c63862");(0,r.pushScopeId)("data-v-18c63862");var u={class:"app-settings"};(0,r.popScopeId)();var o=a((function(e,t,n,a,o,c){return(0,r.openBlock)(),(0,r.createBlock)("div",u," The Settings Page ")}));t.s=o},97:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t=document.querySelector("#toplevel_page_".concat(e)),n=window.location.href,r=n.substr(n.indexOf("admin.php"));t&&(t.addEventListener("click",(function(e){for(var t=e.target,n=this.querySelectorAll("li"),r=0;r<n.length;r++){var a=n[r];a!==e.target.parentElement?a.classList.remove("current"):t.parentElement.classList.add("current")}})),t.querySelector('.wp-submenu a[href="'.concat(r,'"')).parentElement.classList.add("current"))};t.default=n},766:function(){},591:function(){},537:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return u}});var r=n(924),a=n(277);a.Z.render=r.s,a.Z.__scopeId="data-v-246da6c4";var u=a.Z},520:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return u}});var r=n(386),a=n(505);a.Z.render=r.s,a.Z.__scopeId="data-v-7187ce99";var u=a.Z},284:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return a.X},default:function(){return u}});var r=n(180),a=n(561);a.Z.render=r.s,a.Z.__scopeId="data-v-18c63862";var u=a.Z},5:function(e){"use strict";e.exports=Vue}},function(e){"use strict";var t=function(t){return e(e.s=t)};e.O(0,[582,703,898],(function(){return t(81),t(766),t(591)}));e.O()}]);
//# sourceMappingURL=admin.js.map