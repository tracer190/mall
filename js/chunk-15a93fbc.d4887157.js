(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15a93fbc"],{"16c0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"banner"},[s("el-carousel",{attrs:{"indicator-position":"outside",height:"480px"}},t._l(t.banner,(function(e,a){return s("el-carousel-item",{key:a},[e.picUrl?s("img",{staticClass:"img1",attrs:{src:e.picUrl,alt:""}}):t._e(),e.picUrl2?s("img",{staticClass:"img2 a",attrs:{src:e.picUrl2,alt:""}}):t._e(),e.picUrl3?s("img",{staticClass:"img3 b",attrs:{src:e.picUrl3,alt:""}}):t._e()])})),1)],1),t._l(t.homeList,(function(e,a){return s("div",{key:a},[1===e.type?s("div",{staticClass:"activity-panel"},[s("el-row",t._l(e.panelContents,(function(t){return s("el-col",{key:t.id,staticClass:"content",attrs:{span:8}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"i",attrs:{src:t.picUrl}}),s("a",{staticClass:"cover-link",attrs:{href:"#"}})])],1)})),1)],1):t._e(),2===e.type?s("section",{staticClass:"w mt30 clearfix"},[s("m-shelf",{attrs:{title:e.name}},[s("div",{staticClass:"hot",attrs:{slot:"content"},slot:"content"},t._l(e.panelContents,(function(t,e){return s("mall-goods",{key:e,attrs:{goods:t}})})),1)])],1):t._e(),3===e.type?s("section",{staticClass:"w mt30 clearfix"},[s("m-shelf",{attrs:{title:e.name}},[s("div",{staticClass:"floors",attrs:{slot:"content"},slot:"content"},[t._l(e.panelContents,(function(e,a){return 2===e.type||3===e.type?s("div",{key:a,staticClass:"imgbanner"},[s("img",{attrs:{src:e.picUrl,alt:""}})]):t._e()})),t._l(e.panelContents,(function(e,a){return 0===e.type?s("mall-goods",{key:a,attrs:{goods:e}}):t._e()}))],2)])],1):t._e()])}))],2)},r=[],i=(s("7db0"),s("96cf"),s("1da1")),n=s("ed91"),o=s("7b92"),c={data:function(){return{banner:[],homeList:[]}},components:{MShelf:n["a"],MallGoods:o["a"]},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/api/goods/home");case 3:s=e.sent,a=s.data,200===a.code&&(r=a.result,t.homeList=r,i=r.find((function(t){return 0===t.type})),t.banner=i.panelContents),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},l=c,d=(s("e80b"),s("2877")),u=Object(d["a"])(l,a,r,!1,null,"f20ed57a",null);e["default"]=u.exports},2853:function(t,e,s){},"38db":function(t,e,s){},"7b92":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"good-item"},[s("el-col",[s("el-card",{attrs:{"body-style":{padding:0}}},[s("div",{staticClass:"good-img"},[s("a",[s("img",{attrs:{src:t.goods.productImageBig,alt:""}})])]),s("h6",{staticClass:"good-title"},[t._v(t._s(t.goods.productName))]),s("h3",{staticClass:"sub-title ellipsis"},[t._v(t._s(t.goods.subTitle))]),s("div",{staticClass:"good-price pr"},[s("div",{staticClass:"ds pa"},[s("a",{attrs:{href:"javascript:;"}},[s("el-button",{attrs:{type:"default",size:"medium"},on:{click:function(e){return t.productDetail(t.goods.productId)}}},[t._v("查看详情")])],1),s("a",{attrs:{href:"javascript:;"}},[s("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.addCart(t.goods.productId,t.goods.salePrice,t.goods.productName,t.goods.productImageBig)}}},[t._v("加入购物车")])],1)]),s("p",[s("span",{staticStyle:{"font-size":"14px"}},[t._v("¥")]),t._v(" "+t._s(Number(t.goods.salePrice).toFixed(2))+" ")])])])],1)],1)},r=[],i=s("5530"),n=s("2f62"),o=s("5d2d"),c={props:["goods"],computed:Object(i["a"])({},Object(n["c"])(["login"])),methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["ADDCART"])),{},{productDetail:function(t){this.$router.push({name:"goodsDetail",query:{productId:t}})},addCart:function(t,e,s,a){this.login?(this.$http.post("/api/addCart",{userId:Object(o["a"])("id"),productId:t,productNum:1}),this.ADDCART({productId:t,salePrice:e,productName:s,productImageBig:a})):this.ADDCART({productId:t,salePrice:e,productName:s,productImageBig:a})}})},l=c,d=(s("9079"),s("2877")),u=Object(d["a"])(l,a,r,!1,null,"26ffe7c9",null);e["a"]=u.exports},"7db0":function(t,e,s){"use strict";var a=s("23e7"),r=s("b727").find,i=s("44d2"),n=s("ae40"),o="find",c=!0,l=n(o);o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},9079:function(t,e,s){"use strict";var a=s("2853"),r=s.n(a);r.a},d840:function(t,e,s){"use strict";var a=s("fa62"),r=s.n(a);r.a},e80b:function(t,e,s){"use strict";var a=s("38db"),r=s.n(a);r.a},ed91:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gray-box"},[s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.title))])]),s("div",[t._t("content")],2)])},r=[],i={props:["title"]},n=i,o=(s("d840"),s("2877")),c=Object(o["a"])(n,a,r,!1,null,"608f030e",null);e["a"]=c.exports},fa62:function(t,e,s){}}]);
//# sourceMappingURL=chunk-15a93fbc.d4887157.js.map