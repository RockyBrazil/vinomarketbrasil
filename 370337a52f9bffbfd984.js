(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{232:function(e,t,s){var r;window,r=function(e,t,s,r,i,n,a){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/vendor/",s(s.s=21)}([function(t,s){t.exports=e},function(e,t,s){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s,r,i,n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(s=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);s&&(i[2]?i[2]="".concat(s," and ").concat(i[2]):i[2]=s),t.push(i)}},t}},function(e,t,s){"use strict";function r(e,t){for(var s=[],r={},i=0;i<t.length;i++){var n=t[i],a=n[0],o={id:e+":"+i,css:n[1],media:n[2],sourceMap:n[3]};r[a]?r[a].parts.push(o):s.push(r[a]={id:a,parts:[o]})}return s}s.r(t),s.d(t,"default",(function(){return h}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},a=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,l=!1,d=function(){},u=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,s,i){l=s,u=i||{};var a=r(e,t);return _(a),function(t){for(var s=[],i=0;i<a.length;i++){var o=a[i];(c=n[o.id]).refs--,s.push(c)}for(t?_(a=r(e,t)):a=[],i=0;i<s.length;i++){var c;if(0===(c=s[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete n[c.id]}}}}function _(e){for(var t=0;t<e.length;t++){var s=e[t],r=n[s.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](s.parts[i]);for(;i<s.parts.length;i++)r.parts.push(g(s.parts[i]));r.parts.length>s.parts.length&&(r.parts.length=s.parts.length)}else{var a=[];for(i=0;i<s.parts.length;i++)a.push(g(s.parts[i]));n[s.id]={id:s.id,refs:1,parts:a}}}}function f(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,s,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(p){var i=c++;r=o||(o=f()),t=v.bind(null,r,i,!1),s=v.bind(null,r,i,!0)}else r=f(),t=y.bind(null,r),s=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else s()}}var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function v(e,t,s,r){var i=s?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var n=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function y(e,t){var s=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(s+="\n/*# sourceURL="+i.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}},function(e,t,s){var r=s(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("36d272bd",r,!0,{})},function(e,t,s){var r=s(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("05bb3383",r,!0,{})},function(e,t,s){var r=s(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("07f6a160",r,!0,{})},function(e,t,s){var r=s(20);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s(2).default)("0ea34d22",r,!0,{})},function(e,s){e.exports=t},function(e,t){e.exports=s},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t,s){"use strict";var r=s(3);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-image img{max-width:100%;height:auto}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(4);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-prices{line-height:1.2}.ec-prices:not(.ec-prices--big){font-size:.95rem}.ec-prices:not(.ec-prices--big) .ec-prices__installments{font-weight:300}.ec-prices__value{display:block;font-size:1.25rem}.ec-prices--big .ec-prices__value{font-size:250%;margin-bottom:.25rem}.ec-prices--literal .ec-prices__discount span,.ec-prices--literal .ec-prices__installments span{font-weight:700}.ec-prices--literal small{font-size:100%}.ec-prices:not(.ec-prices--literal) .ec-prices__compare{color:var(--gray)}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(5);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-product-card{position:relative;padding-bottom:.1rem;margin-bottom:0}.ec-product-card--inactive,.ec-product-card--inactive img{opacity:.7}.ec-product-card__offer-stamp{background-color:var(--success);color:var(--success-yiq);min-width:40px;font-size:.78rem;line-height:1.8;text-align:center;position:absolute;z-index:9;top:.35rem;right:.35rem;border-radius:.125rem;opacity:.9}.ec-product-card__link:hover h3{text-decoration:underline}.ec-product-card__name{margin-top:.5rem;font-size:.88rem;line-height:1.2;height:3.168rem;overflow:hidden;font-weight:400;display:block;z-index:1}.ec-product-card__pictures{display:-webkit-box;display:flex;background-color:var(--body-bg);-webkit-box-align:center;align-items:center;text-align:center;overflow:hidden}@media (max-width:575.98px){.ec-product-card__pictures{height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__pictures{height:200px}}@media (min-width:992px){.ec-product-card__pictures{height:250px}}.ec-product-card__picture{display:block;-webkit-box-flex:0;flex:0 0 100%;opacity:0;-webkit-transition:opacity .25s;transition:opacity .25s}.ec-product-card__picture:first-child{opacity:1}@media (max-width:300px){.ec-product-card__picture{max-width:100px}}@media (max-width:575.98px){.ec-product-card__picture img{max-height:180px}}@media (min-width:576px) and (max-width:991.98px){.ec-product-card__picture img{max-height:200px}}@media (min-width:992px){.ec-product-card__picture img{max-height:250px}}.ec-product-card__prices{margin-bottom:.15rem;height:4.95rem;overflow:hidden;white-space:nowrap}.ec-product-card__prices .ec-prices__value:first-child{margin-top:1.14rem}.ec-product-card:hover .ec-product-card__picture{display:none}.ec-product-card:hover .ec-product-card__picture:last-child{display:block;opacity:1}.ec-product-card:hover .ec-product-card__buy{opacity:1}",""]),e.exports=t},function(e,t,s){"use strict";var r=s(6);s.n(r).a},function(e,t,s){(t=s(1)(!1)).push([e.i,".ec-search-engine__nav{background:hsla(0,0%,50.2%,.1);color:var(--gray)}.ec-search-engine__count{padding-left:.5rem;position:relative;line-height:2.5}.ec-search-engine__spinner{position:absolute;top:.4rem;right:-3rem;color:var(--secondary);margin-left:1.5rem;width:1.75rem;height:1.75rem}.ec-search-engine__toggle{color:inherit;display:inline-block;text-decoration:none;-webkit-transition:opacity .15s,color .2s;transition:opacity .15s,color .2s;padding:0 .5rem;opacity:.75;line-height:2.5;border:none}.ec-search-engine__toggle i,.ec-search-engine__toggle svg{font-size:.825rem;color:var(--gray-dark);margin-right:.15rem}.ec-search-engine__toggle:focus,.ec-search-engine__toggle:hover{opacity:1;text-decoration:none;color:inherit;box-shadow:none}.ec-search-engine__toggle[aria-expanded=true]{color:var(--gray-dark);opacity:1}.ec-search-engine__results{-webkit-transition:opacity .25s;transition:opacity .25s}.ec-search-engine__info{margin-bottom:1.5rem;padding-top:1rem}.ec-search-engine__terms{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.ec-search-engine__terms small{font-size:.95rem;color:var(--gray)}.ec-search-engine__retail{padding-top:.5rem}.ec-search-engine__item{margin-bottom:1rem}.ec-search-engine__sidebar{position:fixed;width:280px;max-width:100%;height:100%;top:0;right:0;z-index:1100;border-radius:0}.ec-search-engine__sidebar .card-body{overflow-y:auto}.ec-search-engine__filter:not(:first-child){margin-top:1rem}.ec-search-engine__filter:last-child{margin-bottom:1.5rem}.ec-search-engine__filter__btn{padding-left:0;color:var(--secondary);font-size:1.2rem;font-weight:300}.ec-search-engine__filter__btn i,.ec-search-engine__filter__btn svg{margin-right:.25rem;color:var(--gray);opacity:.6}.ec-search-engine__filter__btn:focus{box-shadow:none}.ec-search-engine__option small{color:var(--gray)}",""]),e.exports=t},function(e,t,s){"use strict";s.r(t);var r=s(7),i=s.n(r),n=(s(12),s(0)),a=s(8),o=s.n(a);const c={items:{en_us:"items",pt_br:"itens"},filter:{en_us:"filter",pt_br:"filtrar"},results:{en_us:"results",pt_br:"resultados"},sort:{en_us:"sort",pt_br:"ordenar"},searching_for:{en_us:"Searching for",pt_br:"Buscando por"},no_results_for:{en_us:"No results for",pt_br:"Nenhum resultado para"},brands:{en_us:"Brands",pt_br:"Marcas"},categories:{en_us:"Categories",pt_br:"Categorias"},refine_search:{en_us:"Refine search",pt_br:"Refinar busca"},close_filters:{en_us:"Close filters",pt_br:"Fechar filtros"},clear_filters:{en_us:"Clear filters",pt_br:"Limpar filtros"},relevance:{en_us:"Most relevant",pt_br:"Mais relevantes"},sales:{en_us:"Best sellers",pt_br:"Mais vendidos"},lowest_price:{en_us:"Lowest price",pt_br:"Menor preço"},highest_price:{en_us:"Highest price",pt_br:"Maior preço"},popular_products:{en_us:"Popular products",pt_br:"Produtos populares"},search_again:{en_us:"Search again",pt_br:"Buscar novamente"}};var l=s(9),d=s(10),u=s.n(d);const p={from:{en_us:"from",pt_br:"de"},to:{en_us:"to",pt_br:"por"},unavailable:{en_us:"Unavailable",pt_br:"Indisponível"},out_of_stock:{en_us:"Out of stock",pt_br:"Sem estoque"},buy:{en_us:"Buy",pt_br:"Comprar"},up_to:{en_us:"up to",pt_br:"até"},zip:{en_us:"Zip code",pt_br:"CEP"},calculate_shipping:{en_us:"Calculate shipping",pt_br:"Calcular frete e prazo"},days:{en_us:"days",pt_br:"dias"},working_days:{en_us:"working days",pt_br:"dias úteis"},free_shipping:{en_us:"free shipping",pt_br:"frete grátis"},interest_free:{en_us:"interest free",pt_br:"sem juros"},discount_of:{en_us:"discount of",pt_br:"desconto de"}};var h=function(e,t){return t||(t=this&&this.lang||"en_us"),p[e]&&p[e][t]||""},_=s(11),f=s.n(_),g={name:"EcImage",props:{src:{type:[String,Object]},alt:{type:String,default:""},fade:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},pictureBreakpoint:{type:Number,default:576}},data(){return{imgClasses:`lozad ${this.fade?"fade":"show"}`}},computed:{imgObj(){return Object(n.img)(this.src)}},mounted(){const e=this.$refs.lazyImg;e&&f()(e,{loaded(e){e.classList.add("show")}}).observe()}};function m(e,t,s,r,i,n,a,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),r&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}s(13);var b=m(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-image"},["string"==typeof e.src?s("img",{ref:"lazyImg",class:e.imgClasses,attrs:{alt:e.alt,"data-src":e.src}}):e.src&&e.imgObj?s("picture",{ref:"lazyImg",class:e.imgClasses,attrs:{"data-iesrc":e.imgObj.url,"data-alt":e.imgObj.alt}},[e.src.small?s("source",{attrs:{srcset:e.src.small.url,media:"(max-width: "+(e.pictureBreakpoint-.02)+"px)"}}):e._e(),s("source",{attrs:{srcset:e.imgObj.url,media:"(min-width: "+e.pictureBreakpoint+"px)"}})]):s("img",{attrs:{src:e.placeholder,alt:"No image"}})])}),[],!1,null,null,null).exports,v={name:"EcPrices",props:{lang:{type:String,default:n.$ecomConfig.get("lang")},product:{type:Object,required:!0},literal:{type:Boolean},big:{type:Boolean},installmentsOption:{type:Object},discountOption:{type:Object},discountText:{type:[String,Boolean],default:""}},data(){return{interestFreeInstallments:0,discount:{type:null,value:0},discountLabel:this.discountText}},methods:{dictionary:h,onPromotion:n.onPromotion,formatMoney:n.formatMoney,updateInstallments(e){if(e&&!e.monthly_interest){const t=e.min_installment||5,s=parseInt(this.price/t,10);this.interestFreeInstallments=Math.min(s,e.max_number)}},updateDiscount(e){e&&(!e.min_amount||e.min_amount<=this.price)&&(this.discount=e,!this.discountText&&!1!==this.discountText&&e.label&&(this.discountLabel=`via ${e.label}`))}},computed:{price(){return Object(n.price)(this.product)},priceWithDiscount(){const{type:e,value:t}=this.discount;if(t)return"percentage"===e?this.price*(100-t)/100:this.price-t}},created(){if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{const{storefront:e}=window;if(e){const t=()=>{const t=e.info&&e.info.list_payments;return!!t&&(this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option),Object.keys(t).length>0)};t()||e.on("info:list_payments",t)}}}},y=(s(15),{name:"EcProductCard",components:{EcImage:b,EcPrices:m(v,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-prices",class:{"ec-prices--literal":e.literal,"ec-prices--big":e.big}},[e.onPromotion(e.product)?s("span",{staticClass:"ec-prices__compare"},[e.literal?[e._v(" "+e._s(e.dictionary("from"))+" "),s("s",[e._v(e._s(e.formatMoney(e.product.base_price)))]),e._v(" "+e._s(e.dictionary("to"))+" ")]:s("s",[e._v(e._s(e.formatMoney(e.product.base_price)))])],2):e._e(),s("strong",{staticClass:"ec-prices__value"},[e._v(" "+e._s(e.formatMoney(e.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[e.interestFreeInstallments>1?s("div",{key:"installments",staticClass:"ec-prices__installments"},[e._v(" "+e._s(e.interestFreeInstallments)+"x "),s("span",[e._v(" "+e._s(e.formatMoney(e.price/e.interestFreeInstallments))+" ")]),e.literal?s("small",[e._v(" "+e._s(e.dictionary("interest_free"))+" ")]):e._e()]):e._e(),"number"==typeof e.priceWithDiscount&&e.priceWithDiscount<e.price?s("div",{key:"discount",staticClass:"ec-prices__discount"},[s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")]),"string"==typeof e.discountLabel?s("small",[e._v(" "+e._s(e.discountLabel)+" ")]):e._e()]):e._e()])],1)}),[],!1,null,null,null).exports},props:{lang:{type:String,default:n.$ecomConfig.get("lang")},storeId:{type:Number,default:n.$ecomConfig.get("store_id")},productId:String,product:Object,buyText:String,canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,prerenderedHTML:String},data:()=>({body:{},isLoading:!1,error:""}),computed:{strBuy(){return this.buyText||this.dictionary("buy")},isActive(){const{body:e}=this;return e.available&&e.visible&&Object(n.inStock)(e)},discount(){const{body:e}=this;return Object(n.onPromotion)(e)?Math.round(100*(e.base_price-Object(n.price)(e))/e.base_price):0}},methods:{dictionary:h,name:n.name,inStock:n.inStock,setBody(e){this.body=Object.assign({},e),delete this.body.body_html,delete this.body.body_text},fetchItem(){if(this.productId){this.isLoading=!0;const{storeId:e,productId:t}=this;Object(l.store)({url:`/products/${t}.json`,storeId:e}).then(({data:e})=>{this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)}).catch(e=>{console.error(e),this.body.name&&this.body.slug&&this.body.pictures||(this.error="pt_br"===this.lang?"Erro de conexão, clique no produto para tentar novamente":"Connection error, click product to try again")}).finally(()=>{this.isLoading=!1})}},buy(){const e=this.body;if(this.$emit("buy",{product:e}),this.canAddToCart){const{variations:t,slug:s}=e;t&&t.length?window.location=`/${s}`:u.a.addProduct(e)}}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}}),w=(s(17),{name:"EcSearchEngine",components:{EcProductCard:m(y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-product-card",class:e.body._id&&!e.isActive?"ec-product-card--inactive":null},[s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[e.isLoading?e._e():s("section",[e.isActive&&e.discount>0?s("span",{staticClass:"ec-product-card__offer-stamp"},[e._v(" -"),s("b",[e._v(e._s(e.discount))]),e._v("% ")]):e._e(),s("a",{staticClass:"ec-product-card__link",attrs:{href:"/"+e.body.slug,title:e.name(e.body)}},[s("div",{staticClass:"ec-product-card__pictures"},[e.body.pictures&&e.body.pictures.length?e._l(e.body.pictures.slice(0,2),(function(e,t){return s("ec-image",{key:t,staticClass:"ec-product-card__picture",attrs:{src:e,pictureBreakpoint:300}})})):s("ec-image",{staticClass:"ec-product-card__picture"})],2),s("h3",{staticClass:"ec-product-card__name"},[e._v(" "+e._s(e.name(e.body))+" ")])]),e.body.available&&e.body.visible?e.inStock(e.body)?[s("ec-prices",{staticClass:"ec-product-card__prices",attrs:{lang:e.lang,product:e.body}}),s("div",{staticClass:"ec-product-card__buy fade",on:{click:e.buy}},[e._t("buy",[s("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),e._v(" "+e._s(e.strBuy)+" ")])])],2)]:s("p",{staticClass:"badge badge-dark"},[e._v(" "+e._s(e.dictionary("out_of_stock"))+" ")]):s("p",{staticClass:"badge badge-warning"},[e._v(" "+e._s(e.dictionary("unavailable"))+" ")])],2)]),e.isLoading?[e._t("default",[s("div",{domProps:{innerHTML:e._s(e.prerenderedHTML)}})]),e.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")]):e._e()]:e._e()],2)}),[],!1,null,null,null).exports},props:{lang:{type:String,default:n.$ecomConfig.get("lang")},storeId:{type:Number,default:n.$ecomConfig.get("store_id")},term:{type:String},page:{type:Number},pageSize:{type:Number},brands:{type:Array},categories:{type:Array},autoFixScore:{type:[Number,Boolean],default:.6},showFilters:{type:Boolean,default:!1},navbarId:String,prerenderedHTML:String},data(){return{ecomSearch:new o.a(this.storeId),currentPage:0,resultItems:[],fixedTerm:"",totalSearchResults:0,searching:!1,loadingMore:!1,searched:!1,emptyResult:!1,networkError:!1,filters:[],lastSelectedFilter:null,selectedOptions:{},sortOptions:[null,"sales","lowest_price","highest_price"],selectedSortOption:null}},computed:{hasSelectedOptions(){for(const e in this.selectedOptions)if(this.selectedOptions[e]&&this.selectedOptions[e].length)return!0;return!1},countedItems(){return(this.pageSize||24)*(this.currentPage-1)+this.resultItems.length}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),c[e]&&c[e][t]||""},fixTerm(){if(this.term){let e=this.term,t=!0;if(this.ecomSearch.getTermSuggestions().forEach(({options:s,text:r})=>{if(s.length){const i=s[0];i.score<this.autoFixScore&&(t=!1),e=e.replace(r,i.text)}}),t&&e!==this.term)return this.fixedTerm=e,this.ecomSearch.setSearchTerm(e).history.shift(),this.fetchItems(),!0}return!1},updateFilters(){const e=this.filters.find(({filter:e})=>e===this.lastSelectedFilter);this.filters=e?[e]:[];const t=(e,t,s)=>{if(this.lastSelectedFilter!==e){this.filters.push({filter:e,filterObj:{show:this.filters.length<5,options:t},isSpec:s});const{selectedOptions:r}=this,i=r[e]?r[e].filter(e=>t.find(({key:t})=>t===e)):[];this.$set(this.selectedOptions,e,i)}};["Brands","Categories"].forEach(e=>{t(e,this.ecomSearch[`get${e}`]())}),this.ecomSearch.getSpecs().forEach(({key:e,options:s},r)=>{t(e,s,!0)})},fetchItems(e,t){const{ecomSearch:s}=this;this.searching=!0,this.loadingMore=e>1||this.page>1,s.setPageNumber(e).fetch().then(()=>{if(this.totalSearchResults=s.getTotalCount(),this.totalSearchResults||this.fixedTerm||!this.fixTerm()){if(e?(this.currentPage=e,this.resultItems=this.resultItems.concat(s.getItems())):(this.currentPage=1,this.resultItems=s.getItems()),!this.searched){if(!this.resultItems.length)return s.reset(),this.emptyResult=!0,this.fetchItems();setTimeout(()=>{this.searched=!0},10)}this.updateFilters(),this.networkError=!1}}).catch(s=>{console.error(s),t||s.response&&400===s.response.status?this.networkError=!0:this.fetchItems(e,!0)}).finally(()=>{this.searching=this.loadingMore=!1})},toggleFilters(e=!1){this.$emit("update:showFilters",e)},filterLabel(e){const t=this.dictionary(e.toLowerCase());if(!t&&window._data&&Array.isArray(window._data.grids)){const t=window._data.grids.find(t=>t.grid_id===e);if(t)return t.title||t.grid_id}return t||e},updateSearchFilter(e){const{ecomSearch:t}=this;let s=this.selectedOptions[e];switch(s.length||(s=null),e){case"Brands":t.setBrandNames(s);break;case"Categories":t.setCategoryNames(s);break;default:t.setSpec(e,s)}},setFilterOption(e,t,s){const{selectedOptions:r}=this,i=r[e];if(s)this.lastSelectedFilter=e,i.push(t);else{const s=i.indexOf(t);s>-1&&i.splice(s,1),i.length||this.lastSelectedFilter!==e||(this.lastSelectedFilter=null)}this.updateSearchFilter(e),this.fetchItems()},clearFilters(){const{selectedOptions:e}=this;for(const t in e)e[t]&&(e[t]=[],this.updateSearchFilter(t));this.fetchItems()},setSortOrder(e){this.selectedSortOption=e,this.ecomSearch.setSortOrder(e),this.fetchItems()}},created(){const{ecomSearch:e,term:t,page:s,pageSize:r,brands:i,categories:n}=this;t&&e.setSearchTerm(t),Array.isArray(i)&&i.length&&e.setBrandNames(i),Array.isArray(n)&&n.length&&e.setCategoryNames(n),e.setPageSize(r||24),this.fetchItems(s||1)},mounted(){if(this.navbarId){const e=this.$refs.nav;document.getElementById(this.navbarId).appendChild(e)}let e;window.addEventListener("scroll",()=>{clearTimeout(e),!this.searching&&this.totalSearchResults>this.countedItems&&(e=setTimeout(()=>{const{offsetTop:e,offsetHeight:t}=this.$el;window.pageYOffset+window.screen.height>=e+t&&this.fetchItems(this.currentPage+1)},100))})}}),x=(s(19),m(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"ec-search-engine"},[s("nav",{ref:"nav"},[s("portal-target",{attrs:{name:"search-nav"}})],1),s("portal",{attrs:{to:"search-nav"}},[s("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[e.searched&&(e.searching||e.totalSearchResults>8||e.hasSelectedOptions)?s("div",{staticClass:"ec-search-engine__nav"},[e._t("nav",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"ec-search-engine__count"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("items"))+" "),e.searching?s("div",{staticClass:"spinner-grow ec-search-engine__spinner",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()])]),s("div",{staticClass:"text-right col"},[e.hasSelectedOptions||e.filters.find((function(e){return e.filterObj.options.length}))?s("button",{staticClass:"btn ec-search-engine__toggle",attrs:{type:"button"},on:{click:function(t){return e.toggleFilters(!0)}}},[s("i",{staticClass:"fas fa-filter"}),e._v(" "+e._s(e.dictionary("filter"))+" "),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.dictionary("results"))+" ")])]):e._e(),s("b-dropdown",{attrs:{variant:"link","toggle-class":"ec-search-engine__toggle",right:"","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[s("i",{staticClass:"fas fa-sort"}),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.dictionary("sort"))+" ")])]},proxy:!0}],null,!1,2883328033)},e._l(e.sortOptions,(function(t,r){return s("b-dropdown-item",{key:"sort-"+r,attrs:{href:"#",active:e.selectedSortOption===t},on:{click:function(s){return s.preventDefault(),e.setSortOrder(t)}}},[e._v(" "+e._s(e.dictionary(t||"relevance"))+" ")])})),1)],1)])])],null,{totalSearchResults:e.totalSearchResults,toggleFilters:e.toggleFilters})],2):e._e()])],1),s("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[s("aside",{directives:[{name:"show",rawName:"v-show",value:e.showFilters,expression:"showFilters"}],staticClass:"ec-search-engine__sidebar card shadow"},[e._t("filters",[s("header",{staticClass:"card-header"},[e._v(" "+e._s(e.dictionary("refine_search"))+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":e.dictionary("close_filters")},on:{click:function(t){return e.toggleFilters(!1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{staticClass:"card-body"},e._l(e.filters,(function(t){var r=t.filter,i=t.filterObj,n=t.isSpec;return i.options.length?s("div",{key:"filters-"+r,staticClass:"ec-search-engine__filter",class:"ec-search-engine__filter--"+r},[s("button",{staticClass:"btn ec-search-engine__filter__btn",attrs:{type:"button","aria-expanded":i.show?"true":"false","aria-controls":"collapse-"+r},on:{click:function(e){i.show=!i.show}}},[s("i",{staticClass:"fas fa-chevron-down"}),e._v(" "+e._s(e.filterLabel(r))+" ")]),s("b-collapse",{attrs:{id:"collapse-"+r},model:{value:i.show,callback:function(t){e.$set(i,"show",t)},expression:"filterObj.show"}},e._l(i.options,(function(t,i){return s("div",{key:r+"-"+i,staticClass:"custom-control custom-checkbox ec-search-engine__option"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:r+"-"+i},domProps:{checked:e.selectedOptions[r].indexOf(t.key)>-1},on:{change:function(s){return e.setFilterOption(r,t.key,s.target.checked)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:r+"-"+i}},[e._v(" "+e._s(t.key)+" "),n?e._e():s("small",[e._v(" ("+e._s(t.doc_count)+") ")])])])})),0)],1):e._e()})),0),s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "+e._s(e.dictionary("clear_filters"))+" ")])])])],2)]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[e.searched?s("div",{staticClass:"ec-search-engine__results",style:{opacity:e.searching&&!e.loadingMore?.4:1}},[s("div",{staticClass:"ec-search-engine__info"},[e.term?[e.emptyResult?s("div",{staticClass:"ec-search-engine__no-results"},[s("div",{staticClass:"lead"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.term))])]),s("h1",[e._v(e._s(e.dictionary("popular_products")))])]):s("div",{staticClass:"ec-search-engine__terms"},[s("h1",[s("small",{staticClass:"d-none d-md-block"},[e._v(" "+e._s(e.dictionary("searching_for"))+": ")]),e._v(" "+e._s(e.fixedTerm||e.term)+" ")]),e.fixedTerm?s("em",{staticClass:"d-none d-lg-block"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("s",[e._v(e._s(e.term))])]):e._e()])]:e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.hasSelectedOptions?s("div",[s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "+e._s(e.dictionary("clear_filters"))+" ")]),e._l(e.selectedOptions,(function(t,r){return e._l(t,(function(t){return s("button",{staticClass:"btn m-1 btn-sm btn-light",attrs:{type:"button"},on:{click:function(s){return e.setFilterOption(r,t,!1)}}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-times"})]),e._v(" "+e._s(t)+" "),s("small",[e._v("\\ "+e._s(e.filterLabel(r)))])])}))}))],2):e._e()])],2),s("article",{staticClass:"ec-search-engine__retail"},[s("div",{staticClass:"row"},e._l(e.resultItems,(function(t){return s("div",{key:t._id,staticClass:"col-6 col-md-4 col-lg-3"},[e._t("product",[s("ec-product-card",{staticClass:"ec-search-engine__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})],null,{product:t})],2)})),0)]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.networkError?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[e._v("Offline")]),"pt_br"===e.lang?[e._v(" Não foi possível buscar os produtos, por favor verifique sua conexão com a internet. ")]:[e._v(" Unable to fetch the products, please check your internet connection. ")],s("hr"),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.fetchItems(e.currentPage)}}},[s("i",{staticClass:"fas fa-search mr-1"}),e._v(" "+e._s(e.dictionary("search_again"))+" ")])],2):e._e()])],1):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[!e.searched||e.loadingMore?e._t("default",[s("div",{domProps:{innerHTML:e._s(e.prerenderedHTML)}})]):e._e()],2)],1)}),[],!1,null,null,null).exports);t.default=(e={},t="search-engine")=>{const s=document.getElementById(t);if(s){const{$overlay:r}=window.storefront,n=new URLSearchParams(window.location.search);new i.a({data:{showFilters:!1},render(i){const a=this;return i(x,{attrs:{id:t},props:{...e.props,term:n.get("term"),page:parseInt(n.get("page"),10),brands:n.getAll("brands"),categories:n.getAll("categories"),navbarId:"header",showFilters:a.showFilters,prerenderedHTML:s.outerHTML},on:{"update:showFilters"(e){a.showFilters=e,r&&(e?(r.show(),r.once("hide",()=>{a.showFilters=!1})):r.hide())}}})}}).$mount(s)}}}]).default},e.exports=r(s(4),s(70),s(167),s(10),s(121),s(122),s(161))}}]);
//# sourceMappingURL=370337a52f9bffbfd984.js.map