(function(t){function e(e){for(var r,a,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-stripe-menu/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push(["a1ec","chunk-vendors"]),n()})({"0a56":function(t,e,n){"use strict";var r=n("c248"),o=n.n(r);o.a},"20a4":function(t,e,n){},2855:function(t,e,n){"use strict";var r=n("5cdf"),o=n.n(r);o.a},"3ea7":function(t,e,n){"use strict";var r=n("cd92"),o=n.n(r);o.a},"433d":function(t,e,n){"use strict";var r=n("20a4"),o=n.n(r);o.a},4717:function(t,e,n){"use strict";var r=n("6f48"),o=n.n(r);o.a},5503:function(t,e,n){},"56d7":function(t,e,n){"use strict";(function(t){n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("fb62");n("8594");function o(t){o.installed||(o.installed=!0,t.component("vsmMenu",r["a"]))}var s={install:o},a=null;"undefined"!==typeof window?a=window.Vue:"undefined"!==typeof t&&(a=t.Vue),a&&a.use(s),e["a"]=r["a"]}).call(this,n("c8ba"))},"5cdf":function(t,e,n){},"6f48":function(t,e,n){},8594:function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"a":"https://github.com/Alexeykhr/vue-stripe-menu#readme"}')},a1ec:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=(n("ca29"),n("56d7")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header"),n("main",[n("example-docs"),n("install-docs"),n("attributes-docs"),n("menu-object-docs"),n("slots-docs"),n("events-docs"),n("demo-docs")],1),n("base-footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Props"}}),n("base-table",{attrs:{columns:t.columns,rows:t.rows}})],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",t._l(t.columns,(function(e,r){return n("th",{key:r},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0)]),n("tbody",t._l(t.rows,(function(e,r){return n("tr",{key:r,class:{required:e.required}},t._l(t.columns,(function(r,o){return n("td",{key:o,class:"column column_"+r.attr},[t._v("\n        "+t._s(e[r.attr])+"\n      ")])})),0)})),0)])},u=[],d={props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0}}},p=d,m=(n("2855"),n("2877")),f=Object(m["a"])(p,c,u,!1,null,"8761a72c",null),v=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"section",attrs:{href:"#"+t.generatedId,id:t.generatedId}},[t._v("\n  # "),t._t("default",[t._v(t._s(t.title))])],2)},b=[],g=(n("a481"),{props:{title:{type:String,default:""},id:{type:String,default:""}},computed:{generatedId:function(){if(this.id)return this.id;var t=this.title;return this.$slots.default&&(t=this.$slots.default[0].text),t.trim().toLowerCase().replace(/[^a-z-]/gi,"-")}}}),y=g,w=Object(m["a"])(y,h,b,!1,null,null,null),_=w.exports,x={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"property",name:"Property"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"},{attr:"type",name:"Type"},{attr:"default",name:"Default"}],rows:[{property:"menu",type:"Array",parameters:"MenuObject",description:"",required:!0},{property:"element",description:"HTML element for root element",type:"String",default:"header"},{property:"base-width",description:"The relationship between the width of the content and this value",type:"string, number",default:380},{property:"base-height",description:"The relationship between the height of the content and this value",type:"string, number",default:380}]}}},C=x,D=Object(m["a"])(C,i,l,!1,null,null,null),O=D.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"MenuObject"}}),n("base-table",{attrs:{columns:t.columns,rows:t.rows}})],1)},T=[],k={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"property",name:"Property"},{attr:"type",name:"type"},{attr:"description",name:"Description"}],rows:[{property:"title",type:"String",description:"Menu item name. Can also be redefined through the slot"},{property:"dropdown",type:"String",description:"Unique value indicates that this item has a dropdown menu"},{property:"element",type:"String",description:"HTML element in the header element, if not specified, it will be <button /> or <a />"},{property:"attributes",type:"Object",description:"All attributes to be assigned in the header element (v-bind)"},{property:"listeners",type:"Object",description:"All events to be assigned in the header element (v-on)"}]}}},$=k,S=Object(m["a"])($,E,T,!1,null,null,null),j=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Example"}}),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.ExampleRaw))])])],1)},H=[],M="<template>\r\n  <vsm-menu :menu=\"menu\">\r\n    <template #default=\"data\">\r\n      {{ data }}\r\n    </template>\r\n  </vsm-menu>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      menu: [\r\n        { title: 'First item', dropdown: 'first' },\r\n        { title: 'Second item', dropdown: 'second' },\r\n        { title: 'No dropdown' }\r\n      ]\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n",B=n("1487"),z=n.n(B),A={components:{BaseTitle:_},data:function(){return{ExampleRaw:M}},mounted:function(){z.a.initHighlightingOnLoad()}},P=A,V=Object(m["a"])(P,L,H,!1,null,null,null),I=V.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Install"}}),n("pre",[n("code",{staticClass:"shell"},[t._v(t._s(t.shell))])]),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.vue))])])],1)},q=[],R={components:{BaseTitle:_},data:function(){return{shell:"$ npm i vue-stripe-menu\n// or\n$ yarn add vue-stripe-menu",vue:"import Vue from 'Vue'\nimport VueStripeMenu from 'vue-stripe-menu'\n\nVue.use(VueStripeMenu)"}},mounted:function(){z.a.initHighlightingOnLoad()}},G=R,F=Object(m["a"])(G,N,q,!1,null,null,null),X=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Events"}}),n("base-table",{attrs:{columns:t.columns,rows:t.rows}})],1)},W=[],Y={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"description",name:"Description"},{attr:"return",name:"Return"}],rows:[{name:"open-dropdown",description:"Open the dropdown menu, return the active DOM Element",return:"Element"},{name:"close-dropdown",description:"Close the dropdown menu, return the active DOM Element",return:"Element"}]}}},U=Y,K=Object(m["a"])(U,J,W,!1,null,null,null),Q=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vsm-menu",{attrs:{menu:t.menu},on:{"open-dropdown":t.onOpenDropdown,"close-dropdown":t.onCloseDropdown},scopedSlots:t._u([{key:"default",fn:function(t){return[n(t.item.content,{tag:"component",staticClass:"content"}),n(t.item.secondary,{tag:"component",staticClass:"content--secondary"})]}}])},[n("li",{staticClass:"vsm-section",attrs:{slot:"before-nav"},slot:"before-nav"},[n("stripe-logo")],1),n("li",{staticClass:"vsm-section",attrs:{slot:"after-nav"},slot:"after-nav"},[t._v("\n    Sign In\n  ")])])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-group",{attrs:{color:"secondary"}}),n("base-group",{attrs:{color:"secondary"}})],1)},nt=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["base-group","base-group_size_"+t.size,"background-hover"]},[n("div",{class:["base-group__img",t.background]}),n("div",{staticClass:"base-group__content"},[n("base-text",{staticClass:"base-group__content__title",attrs:{color:t.color,min:70,max:100,height:"small"===t.size?13:16}}),n("base-text",{staticClass:"base-group__content__subtitle",attrs:{color:t.color,min:200,max:300,height:"small"===t.size?11:14}})],1)])},ot=[],st=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["base-text",t.typeClasses]},[n("div",{class:["base-text__content",t.background],style:{width:t.width+"px",height:t.height+"px"}})])},it=[],lt=(n("c5f6"),{props:{min:{type:Number,default:120},max:{type:Number,default:300},height:{type:Number,default:16},type:{type:String,default:"text",validator:function(t){return~["text","title"].indexOf(t)}},color:{type:String,default:"primary",validator:function(t){return~["primary","secondary"].indexOf(t)}}},computed:{width:function(){return st(this.min,this.max)},typeClasses:function(){return"text"===this.type?"mb-5":["mb-20","background-hover"]},background:function(){return"primary"===this.color?"background":"background--secondary"}}}),ct=lt,ut=(n("d54e"),Object(m["a"])(ct,at,it,!1,null,"36557c1e",null)),dt=ut.exports,pt={components:{BaseText:dt},props:{size:{type:String,default:"medium",validator:function(t){return~["medium","small"].indexOf(t)}},color:{type:String,default:"primary",validator:function(t){return~["primary","secondary"].indexOf(t)}}},computed:{background:function(){return"primary"===this.color?"background":"background--secondary"}},methods:{rnd:st}},mt=pt,ft=(n("4717"),Object(m["a"])(mt,rt,ot,!1,null,"380f4c16",null)),vt=ft.exports,ht={components:{BaseGroup:vt}},bt=ht,gt=Object(m["a"])(bt,et,nt,!1,null,null,null),yt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-text",{attrs:{max:200,type:"title"}}),t._l(2,(function(t){return n("base-group",{key:"g1-"+t})}))],2)},_t=[],xt={components:{BaseText:dt,BaseGroup:vt}},Ct=xt,Dt=Object(m["a"])(Ct,wt,_t,!1,null,null,null),Ot=Dt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divide"},[n("div",{staticClass:"primary"},[t._l(2,(function(e){return[n("base-text",{key:"g1-"+e,attrs:{max:200,type:"title"}}),t._l(3,(function(t){return n("base-group",{key:"g1-"+e+"-"+t})})),n("br",{key:"g1b-"+e})]}))],2),n("div",{staticClass:"secondary"},[t._l(3,(function(e){return[n("base-text",{key:"g3-"+e,attrs:{max:200,height:15,type:"title",color:"secondary"}}),t._l(2,(function(t){return n("base-group",{key:"g4-"+e+"-"+t,attrs:{size:"small",color:"secondary"}})}))]}))],2)])},Tt=[],kt={components:{BaseText:dt,BaseGroup:vt}},$t=kt,St=(n("3ea7"),Object(m["a"])($t,Et,Tt,!1,null,"2222c677",null)),jt=St.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-text",{attrs:{max:200,type:"title"}}),t._l(3,(function(t){return n("base-group",{key:"g1-"+t})})),n("br"),n("base-text",{attrs:{max:200,type:"title"}}),t._l(2,(function(t){return n("base-group",{key:"g2-"+t})}))],2)},Ht=[],Mt={components:{BaseText:dt,BaseGroup:vt}},Bt=Mt,zt=Object(m["a"])(Bt,Lt,Ht,!1,null,null,null),At=zt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"62",height:"25"}},[n("title",[t._v("Stripe")]),n("path",{attrs:{d:"M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"}})])},Vt=[],It={},Nt=Object(m["a"])(It,Pt,Vt,!1,null,null,null),qt=Nt.exports,Rt={components:{StripeLogo:qt},data:function(){return{menu:[{title:"Products",dropdown:"products",content:jt,element:"span"},{title:"Developers",dropdown:"developers",content:Ot,secondary:yt},{title:"Company",dropdown:"company",content:At,listeners:{mouseover:this.onMouseOver}},{title:"Source",attributes:{href:"https://github.com/Alexeykhr/vue-stripe-menu/blob/master/demo/components/Header.vue",target:"_blank"}}]}},methods:{onMouseOver:function(t){console.log("mouse over",t)},onOpenDropdown:function(t){console.log("open dropdown",t)},onCloseDropdown:function(t){console.log("close dropdown",t)}}},Gt=Rt,Ft=(n("433d"),Object(m["a"])(Gt,Z,tt,!1,null,null,null)),Xt=Ft.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:t.homepage,title:"Repository",target:"_blank"}},[n("github-svg")],1)])},Wt=[],Yt=n("9224"),Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24"}},[n("title",[t._v("GitHub icon")]),n("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])},Kt=[],Qt={},Zt=Object(m["a"])(Qt,Ut,Kt,!1,null,null,null),te=Zt.exports,ee={components:{GithubSvg:te},data:function(){return{homepage:Yt["a"]}}},ne=ee,re=Object(m["a"])(ne,Jt,Wt,!1,null,null,null),oe=re.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Slots"}}),n("base-table",{attrs:{columns:t.columns,rows:t.rows}})],1)},ae=[],ie={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"}],rows:[{name:"default",parameters:"MenuItem, index",description:"The main content for the drop-down list"},{name:"before-nav",description:"Content to the left of the list"},{name:"after-nav",description:"Content to the right of the list"}]}}},le=ie,ce=Object(m["a"])(le,se,ae,!1,null,null,null),ue=ce.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-title",{attrs:{title:"Demo"}}),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.DemoHeaderRaw))])])],1)},pe=[],me="<template>\r\n  <vsm-menu\r\n    :menu=\"menu\"\r\n    @open-dropdown=\"onOpenDropdown\"\r\n    @close-dropdown=\"onCloseDropdown\"\r\n  >\r\n    <li\r\n      slot=\"before-nav\"\r\n      class=\"vsm-section\"\r\n    >\r\n      <stripe-logo />\r\n    </li>\r\n    \x3c!--Add a title using the slot:--\x3e\r\n    \x3c!--<template #title=\"data\">{{ data.item.title }}</template>--\x3e\r\n    <template #default=\"data\">\r\n      <component\r\n        :is=\"data.item.content\"\r\n        class=\"content\"\r\n      />\r\n      <component\r\n        :is=\"data.item.secondary\"\r\n        class=\"content--secondary\"\r\n      />\r\n    </template>\r\n    <li\r\n      slot=\"after-nav\"\r\n      class=\"vsm-section\"\r\n    >\r\n      Sign In\r\n    </li>\r\n  </vsm-menu>\r\n</template>\r\n\r\n<script>\r\nimport HorizontalSecondaryContent from '../components/content/HorizontalSecondary'\r\nimport HorizontalPrimaryContent from '../components/content/HorizontalPrimary'\r\nimport VerticalContent from '../components/content/Vertical'\r\nimport DefaultContent from '../components/content/Default'\r\nimport StripeLogo from '../components/svg/StripeLogo'\r\n\r\nexport default {\r\n  components: {\r\n    StripeLogo\r\n  },\r\n  data () {\r\n    return {\r\n      menu: [\r\n        { title: 'Products', dropdown: 'products', content: VerticalContent, element: 'span' },\r\n        { title: 'Developers', dropdown: 'developers', content: HorizontalPrimaryContent, secondary: HorizontalSecondaryContent },\r\n        { title: 'Company', dropdown: 'company', content: DefaultContent, listeners: { mouseover: this.onMouseOver } },\r\n        { title: 'Source', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu/blob/master/demo/components/Header.vue', target: '_blank' } }\r\n      ]\r\n    }\r\n  },\r\n  methods: {\r\n    onMouseOver (evt) {\r\n      console.log('mouse over', evt)\r\n    },\r\n    onOpenDropdown (el) {\r\n      console.log('open dropdown', el)\r\n    },\r\n    onCloseDropdown (el) {\r\n      console.log('close dropdown', el)\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<style lang=\"scss\">\r\n@import \"../scss/variables\";\r\n\r\n/*\r\n * Some configuration library style for own website\r\n */\r\n\r\n.vsm-menu {\r\n  position: relative;\r\n  ul {\r\n    max-width: $laptop;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n.vsm-root {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.vsm-section_menu {\r\n  flex: 1;\r\n  justify-content: center;\r\n  > * {\r\n    padding: 0 25px;\r\n    font-weight: 500;\r\n    font-family: inherit;\r\n  }\r\n}\r\n\r\n.vsm-link {\r\n  color: #6772e5;\r\n  &.vsm-active,\r\n  &:hover {\r\n    color: #32325d;\r\n  }\r\n}\r\n\r\n/*\r\n * Now configuration\r\n */\r\n\r\n.content {\r\n  padding: 30px;\r\n}\r\n\r\n.content--secondary {\r\n  padding: 30px;\r\n}\r\n</style>\r\n",fe={components:{BaseTitle:_},data:function(){return{DemoHeaderRaw:me}},mounted:function(){z.a.initHighlightingOnLoad()}},ve=fe,he=Object(m["a"])(ve,de,pe,!1,null,null,null),be=he.exports,ge={components:{AttributesDocs:O,MenuObjectDocs:j,ExampleDocs:I,InstallDocs:X,BaseHeader:Xt,EventsDocs:Q,BaseFooter:oe,SlotsDocs:ue,DemoDocs:be}},ye=ge,we=(n("0a56"),Object(m["a"])(ye,s,a,!1,null,"42d56006",null)),_e=we.exports;r["a"].component("vsmMenu",o["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(_e)}}).$mount("#app")},c248:function(t,e,n){},ca29:function(t,e,n){},cd92:function(t,e,n){},d54e:function(t,e,n){"use strict";var r=n("5503"),o=n.n(r);o.a},fb62:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.element,{tag:"component",staticClass:"vsm-menu vsm-no-transition"},[n("nav",[n("ul",{ref:"root",staticClass:"vsm-root"},[t._t("before-nav"),n("li",{staticClass:"vsm-section vsm-section_menu"},t._l(t.menu,(function(e,r){return n(e.element||(e.dropdown?"button":"a"),t._g(t._b({key:r,ref:"links",refInFor:!0,tag:"component",class:["vsm-link",{"vsm-has-dropdown":e.dropdown}],attrs:{"data-dropdown":e.dropdown,"aria-haspopup":e.dropdown&&"true","aria-expanded":e.dropdown&&"false"}},"component",e.attributes,!1),e.listeners),[t._t("title",[n("span",[t._v(t._s(e.title))])],{item:e,index:r})],2)})),1),t._t("after-nav")],2)]),n("div",{staticClass:"vsm-dropdown"},[n("div",{ref:"background",staticClass:"vsm-background"},[n("div",{ref:"backgroundAlt",staticClass:"vsm-background-alt"})]),n("div",{ref:"arrow",staticClass:"vsm-arrow"}),n("div",{ref:"dropdownContainer",staticClass:"vsm-dropdown-container"},t._l(t.menuHasDropdown,(function(e,r){return n("div",{key:r,ref:"sections",refInFor:!0,staticClass:"vsm-dropdown-section",attrs:{"data-dropdown":e.dropdown,"aria-hidden":"false"}},[n("div",{staticClass:"vsm-dropdown-content"},[t._t("default",null,{item:e,index:r})],2)])})),0)])])},o=[],s=(n("7f7f"),n("ac6a"),n("c5f6"),window.PointerEvent?{end:"pointerup",enter:"pointerenter",leave:"pointerleave"}:{end:"touchend",enter:"mouseenter",leave:"mouseleave"}),a={name:"vsmMenu",props:{element:{type:String,default:"header"},menu:{type:Array,required:!0},baseWidth:{type:[Number,String],default:380,validator:function(t){return+t>0}},baseHeight:{type:[Number,String],default:400,validator:function(t){return+t>0}}},computed:{menuHasDropdown:function(){return this.menu.filter((function(t){return t.dropdown}))}},created:function(){var t=this;this._touchMoveHandler=function(){t._isDragging=!0},this._touchStartHandler=function(){t._isDragging=!1},this._pointerEventEndHandler=function(){t._isDragging||t.closeDropdown()},document.addEventListener("touchmove",this._touchMoveHandler),document.addEventListener("touchstart",this._touchStartHandler),document.body.addEventListener(s.end,this._pointerEventEndHandler)},mounted:function(){var t=this;this._linksHasDropdown=this.$refs.links.filter((function(t){return t.classList.contains("vsm-has-dropdown")})),this._sections=this.$refs.sections.map((function(t){return{el:t,name:t.getAttribute("data-dropdown"),content:t.children[0]}})),this._linksHasDropdown.forEach((function(e){e.addEventListener(s.end,(function(n){n.preventDefault(),n.stopPropagation(),t.toggleDropdown(e)})),e.addEventListener("focusin",(function(){t.stopCloseTimeout(),t.openDropdown(e)})),e.addEventListener(s.enter,(function(n){"touch"!==n.pointerType&&(t.stopCloseTimeout(),t.openDropdown(e))})),e.addEventListener(s.leave,(function(e){"touch"!==e.pointerType&&t.startCloseTimeout()}))})),this.$refs.dropdownContainer.addEventListener(s.end,(function(t){t.stopPropagation()})),this.$refs.dropdownContainer.addEventListener(s.enter,(function(e){"touch"!==e.pointerType&&t.stopCloseTimeout()})),this.$refs.dropdownContainer.addEventListener(s.leave,(function(e){"touch"!==e.pointerType&&t.startCloseTimeout()}))},beforeDestroy:function(){document.removeEventListener("touchmove",this._touchMoveHandler),document.removeEventListener("touchstart",this._touchStartHandler),document.body.removeEventListener(s.end,this._pointerEventEndHandler)},methods:{toggleDropdown:function(t){this._activeDropdown===t?this.closeDropdown():this.openDropdown(t)},openDropdown:function(t){var e=this;if(this._activeDropdown!==t){this.$emit("open-dropdown",t),this.$el.classList.add("vsm-overlay-active"),this.$el.classList.add("vsm-dropdown-active"),this._activeDropdown=t,this._activeDropdown.setAttribute("aria-expanded","true"),this._linksHasDropdown.forEach((function(t){return t.classList.remove("vsm-active")})),t.classList.add("vsm-active");var n,r,o,s=t.getAttribute("data-dropdown"),a="vsm-left";this._sections.forEach((function(t){t.el.classList.remove("vsm-active"),t.el.classList.remove("vsm-left"),t.el.classList.remove("vsm-right"),t.name===s?(t.el.setAttribute("aria-hidden","false"),t.el.classList.add("vsm-active"),a="vsm-right",n=t.content.offsetWidth,r=t.content.offsetHeight,o=t.content):(t.el.classList.add(a),t.el.setAttribute("aria-hidden","true"))}));var i=n/+this.baseWidth,l=r/+this.baseHeight,c=t.getBoundingClientRect(),u=Math.round(Math.max(c.left+c.width/2-n/2,10));clearTimeout(this._disableTransitionTimeout),this._enableTransitionTimeout=setTimeout((function(){e.$el.classList.remove("vsm-no-transition")}),50),this.$refs.dropdownContainer.style.transform="translateX(".concat(u,"px)"),this.$refs.dropdownContainer.style.width="".concat(n,"px"),this.$refs.dropdownContainer.style.height="".concat(r,"px"),this.$refs.arrow.style.transform="translateX(".concat(Math.round(c.left+c.width/2),"px) rotate(45deg)"),this.$refs.background.style.transform="translateX(".concat(u,"px) scaleX(").concat(i,") scaleY(").concat(l,")"),this.$refs.backgroundAlt.style.transform="translateY(".concat(o.children[0].offsetHeight/l,"px)")}},closeDropdown:function(){var t=this;if(this._activeDropdown){this.$emit("close-dropdown",this._activeDropdown),this._linksHasDropdown.forEach((function(t){t.classList.remove("vsm-active")}));var e=this.$refs.dropdownContainer.querySelector('[aria-hidden="false"]');e&&e.setAttribute("aria-hidden","true"),clearTimeout(this._enableTransitionTimeout),this._disableTransitionTimeout=setTimeout((function(){t.$el.classList.add("vsm-no-transition")}),50),this.$el.classList.remove("vsm-overlay-active"),this.$el.classList.remove("vsm-dropdown-active"),this._activeDropdown.setAttribute("aria-expanded","false"),this._activeDropdown=void 0}},startCloseTimeout:function(){var t=this;this._closeDropdownTimeout=setTimeout((function(){t.closeDropdown()}),50)},stopCloseTimeout:function(){clearTimeout(this._closeDropdownTimeout)}}},i=a,l=n("2877"),c=Object(l["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.a0454a1f.js.map