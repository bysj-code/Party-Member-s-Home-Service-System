(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussxuexiziliao/add-or-update"],{"5b4b":function(e,t,r){"use strict";r.r(t);var n=r("e219"),a=r("e523");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("dfc3");var i,s=r("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"a335397c",null,!1,n["a"],i);t["default"]=c.exports},"5e6a":function(e,t,r){},dfc3:function(e,t,r){"use strict";var n=r("5e6a"),a=r.n(n);a.a},e219:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},e523:function(e,t,r){"use strict";r.r(t);var n=r("e74c"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},e74c:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,i){try{var s=e[u](i),c=s.value}catch(o){return void r(o)}s.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,c,"next",e)}function c(e){u(i,n,a,s,c,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("8860"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return i(n.default.mark((function a(){var u,i,s,c;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(i=a.sent,r.user=i.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("discussxuexiziliao",r.ruleForm.id);case 11:i=a.sent,r.ruleForm=i.data;case 13:if(r.cross=t.cross,!t.cross){a.next=41;break}s=e.getStorageSync("crossObj"),a.t0=n.default.keys(s);case 17:if((a.t1=a.t0()).done){a.next=41;break}if(c=a.t1.value,"refid"!=c){a.next=23;break}return r.ruleForm.refid=s[c],r.ro.refid=!0,a.abrupt("continue",17);case 23:if("userid"!=c){a.next=27;break}return r.ruleForm.userid=s[c],r.ro.userid=!0,a.abrupt("continue",17);case 27:if("nickname"!=c){a.next=31;break}return r.ruleForm.nickname=s[c],r.ro.nickname=!0,a.abrupt("continue",17);case 31:if("content"!=c){a.next=35;break}return r.ruleForm.content=s[c],r.ro.content=!0,a.abrupt("continue",17);case 35:if("reply"!=c){a.next=39;break}return r.ruleForm.reply=s[c],r.ro.reply=!0,a.abrupt("continue",17);case 39:a.next=17;break;case 41:r.styleChange();case 42:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(n.default.mark((function r(){var a,u,i,s,c,o,l,d,f,m;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.ruleForm.refid){r.next=3;break}return t.$utils.msg("关联表id不能为空"),r.abrupt("return");case 3:if(t.ruleForm.userid){r.next=6;break}return t.$utils.msg("用户id不能为空"),r.abrupt("return");case 6:if(t.ruleForm.content){r.next=9;break}return t.$utils.msg("评论内容不能为空"),r.abrupt("return");case 9:if(!t.cross){r.next=25;break}if(s=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==s){r.next=25;break}if(o=e.getStorageSync("crossObj"),s.startsWith("[")){r.next=21;break}for(l in o)l==s&&(o[l]=c);return d=e.getStorageSync("crossTable"),r.next=19,t.$api.update("".concat(d),o);case 19:r.next=25;break;case 21:a=Number(e.getStorageSync("userid")),u=o["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!a){r.next=48;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,f={page:1,limit:10,crossuserid:a,crossrefid:u},r.next=31,t.$api.list("discussxuexiziliao",f);case 31:if(m=r.sent,!(m.data.total>=i)){r.next=37;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!t.ruleForm.id){r.next=42;break}return r.next=40,t.$api.update("discussxuexiziliao",t.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,t.$api.add("discussxuexiziliao",t.ruleForm);case 44:e.setStorageSync("discussxuexiziliaoCleanType",!0),t.$utils.msgBack("提交成功");case 46:r.next=57;break;case 48:if(!t.ruleForm.id){r.next=53;break}return r.next=51,t.$api.update("discussxuexiziliao",t.ruleForm);case 51:r.next=55;break;case 53:return r.next=55,t.$api.add("discussxuexiziliao",t.ruleForm);case 55:e.setStorageSync("discussxuexiziliaoCleanType",!0),t.$utils.msgBack("提交成功");case 57:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},fd10:function(e,t,r){"use strict";(function(e){r("1e62");n(r("66fd"));var t=n(r("5b4b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])}},[["fd10","common/runtime","common/vendor"]]]);