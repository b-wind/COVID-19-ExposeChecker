(function(t){function e(e){for(var a,o,l=e[0],c=e[1],i=e[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(v.length)v.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[t._v(" iOS接触通知ログ解析ツール ")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("ExposeChecker")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4 mt-8"},[a("h1",{staticClass:"display-2 font-weight-bold mb-8"},[t._v(" iOS接触通知ログ解析ツール ")]),a("p",{attrs:{"mr-8":"","ml-8":""}},[t._v(" iOSの設定アプリから閲覧できる接触通知のログデータを解析し、"),a("br"),t._v(" 約2週間の間にCOCOA上の陽性者登録者との接触通知のログを表示します。 ")]),a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("注意事項/詳細説明")]),a("v-expansion-panel-content",{staticClass:"text-left"},[a("ul",[a("li",[t._v("iOSで収集されている COVID-19 接触のログデータの中で、COCOA上の陽性者登録者の端末の近くにいた記録があるかを確認するツールです。")]),a("li",[t._v("具体的には、接触ログデータの中のMatchCountが0ではない値(接触が疑われるデータ)を抽出するだけのツールです")]),a("li",[t._v("クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。")]),a("li",[t._v("このログデータで分かることは、COCOA陽性登録者が付近にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。")]),a("li",[t._v("本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。")])])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("使い方")]),a("v-expansion-panel-content",[a("p",{staticClass:"text-left"},[t._v("Step1. iOSの接触通知ログをコピーする")]),a("v-img",{attrs:{src:n("c2a8")}}),a("br"),a("p",{staticClass:"text-left"},[t._v("Step2. 下記入力枠にペーストする")]),a("v-img",{attrs:{src:n("71a6")}})],1)],1)],1)],1),a("v-col",{staticClass:"mb-5 mt-10",attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",label:"ここに接触通知のログファイルのjsonをペーストしてください"},model:{value:t.exposeJsonText,callback:function(e){t.exposeJsonText=e},expression:"exposeJsonText"}}),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{staticClass:"mb-10",on:{click:t.clearJson}},[t._v(" クリア ")])],1),a("v-col",{attrs:{cols:"3"}},[a("v-btn",{staticClass:"mb-10",attrs:{color:"primary"},on:{click:t.checkJson}},[t._v(" チェックする ")])],1)],1),a("p",[a("b",[t._v("結果:")]),t._v(" "+t._s(t.resultText)+" ")]),a("v-textarea",{staticClass:"mt-12 mb-4",attrs:{outlined:"","auto-grow":"",readonly:"",label:"ここに詳細な結果のデータが出ます",value:t.resultJsonText}})],1),a("v-col",{staticClass:"mb-16",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" もし陽性者と近くにいたことが疑われる場合は、 ")]),a("p",[t._v(" 上記Hash値をコピーし、 "),a("a",{attrs:{href:"https://cacaotest.sakura.ne.jp/",target:"_blank"}},[t._v("HASH値より陽性者と近くにいた日を検索するサイト(別サイト)")]),t._v(" を使用して、"),a("br"),t._v("具体的な近くにいた時間(24時間単位)で特定することができます。 ")])])],1)],1)},l=[],c=(n("159b"),{name:"ExposeChecker",methods:{checkJson:function(){try{var t=JSON.parse(this.exposeJsonText),e=t.ExposureChecks;this.resultJsonText=e;var n="",a=0;e.forEach((function(t){t.Files.forEach((function(t){0!=t.MatchCount&&(n+=JSON.stringify(t,null,2)+",\n",a+=1)}))})),this.resultJsonText=n,this.resultText=0==a?"陽性者が近くにいた記録はありませんでした。":a+"件の陽性者が近くにいた記録が確認されました。"}catch(r){alert("データフォーマットエラー")}},clearJson:function(){this.exposeJsonText=""}},data:function(){return{resultJsonText:"",resultText:"",exposeJsonText:""}}}),i=c,p=n("2877"),u=n("6544"),v=n.n(u),f=n("8336"),x=n("62ad"),d=n("a523"),h=n("cd55"),b=n("49e2"),m=n("c865"),_=n("0393"),C=n("adda"),y=n("0fd9"),g=n("a844"),O=Object(p["a"])(i,o,l,!1,null,null,null),w=O.exports;v()(O,{VBtn:f["a"],VCol:x["a"],VContainer:d["a"],VExpansionPanel:h["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:m["a"],VExpansionPanels:_["a"],VImg:C["a"],VRow:y["a"],VTextarea:g["a"]});var J={name:"App",components:{ExposeChecker:w},data:function(){return{}}},S=J,T=n("7496"),V=n("40dc"),k=n("132d"),j=n("f6c4"),E=n("2fa4"),P=Object(p["a"])(S,r,s,!1,null,null,null),A=P.exports;v()(P,{VApp:T["a"],VAppBar:V["a"],VBtn:f["a"],VIcon:k["a"],VMain:j["a"],VSpacer:E["a"]});var M=n("f309");a["a"].use(M["a"]);var H=new M["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:H,render:function(t){return t(A)}}).$mount("#app")},"71a6":function(t,e,n){t.exports=n.p+"img/instruction-paste.00203555.png"},c2a8:function(t,e,n){t.exports=n.p+"img/instruction-copy.e28c8dc6.png"}});
//# sourceMappingURL=app.c823add9.js.map