(this.webpackJsonpcarsharing=this.webpackJsonpcarsharing||[]).push([[0],{199:function(e,t,c){},200:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},207:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){},210:function(e,t,c){},407:function(e,t,c){},408:function(e,t,c){},409:function(e,t,c){},410:function(e,t,c){},411:function(e,t,c){},412:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(40),s=c.n(a),i=c(31),r=c(164),l=c(5),d=Object(i.c)({changeLanguage:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_LANGUAGE"===t.type?!t.payload:e},setTown:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_TOWN"===t.type?t.payload:e},setAdress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_ADRESS"===t.type?t.payload:e},citiesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_CITIES"===t.type?t.payload:e},points:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_POINTS"===t.type?t.payload:e}}),o=c(47),u=c(6),j=c(1),b=function(e){var t=e.newMenu;return Object(j.jsxs)("div",{className:"menu-btn",onClick:function(){t(!0)},children:[Object(j.jsx)("div",{className:"vector"}),Object(j.jsx)("div",{className:"vector"}),Object(j.jsx)("div",{className:"vector"})]})},m=c(49),h=c.n(m),v=c(98),f=c(166),O=c.n(f).a.create({baseURL:"https://api-factory.simbirsoft1.com/api/db/",headers:{"Access-Control-Allow-Headers":"X-Api-Factory-Application-Id, Authorization","X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}),x=function(e){return{type:"SET_LANGUAGE",payload:e}},g=function(e){return{type:"SET_ADRESS",payload:e}},p=(c(199),Object(l.b)((function(e){return{changeLanguage:e.changeLanguage}}),{setLanguage:x})((function(e){var t=e.menu,c=e.changeLanguage,n=e.setLanguage,a=[{value:!1,text:"\u0420\u0443\u0441"},{value:!0,text:"Eng"}];return Object(j.jsxs)("div",{className:"Sidebar",children:[Object(j.jsx)(b,{newMenu:function(e){t(e)}}),Object(j.jsx)("div",{className:"ellipse",children:Object(j.jsx)("div",{className:"language",onClick:function(){return n(c)},children:a.map((function(e){if(e.value===c)return e.text}))})})]})}))),N=(c(200),c(201),c(202),c(203),c.p+"static/media/car1.f576cc98.svg"),y=c.p+"static/media/car2.b22e2cb2.svg",w=c.p+"static/media/car3.c0fc7cc7.svg",k=c.p+"static/media/car4.0d2c9f74.svg",C=function(e){var t=e.position;return[{id:0,url:N,heading:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",text:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",style:"90deg, #13493F 0%, #0C7B1B 100%"},{id:1,url:y,heading:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",text:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",style:"90deg, #132949 0%, #0C7B67 100%"},{id:2,url:w,heading:"\u0411\u0435\u043d\u0437\u0438\u043d",text:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",style:"90deg, #493013 0%, #7B0C3B 100%"},{id:3,url:k,heading:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",text:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",style:"90deg, #281349 0%, #720C7B 100%"}].map((function(e){return Object(j.jsxs)("div",{className:"carousel-inner",style:{backgroundImage:"url(".concat(e.url,")"),transform:"translateX(".concat(t,"%)")},children:[Object(j.jsx)("div",{className:"dark-slide"}),Object(j.jsx)("div",{className:"heading",children:e.heading}),Object(j.jsx)("div",{className:"text",children:e.text}),Object(j.jsx)("div",{className:"button",style:{background:"linear-gradient(".concat(e.style,")"),cursor:"pointer"},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},e.id)}))},L=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("div",{className:"right-side",children:[Object(j.jsx)(C,{position:c}),Object(j.jsx)("div",{className:"test",children:[{id:0,pos:0},{id:1,pos:-100},{id:2,pos:-200},{id:3,pos:-300}].map((function(e){return Object(j.jsx)("div",{className:e.pos===c?"radio-active":"radio",onClick:function(){return t=e.pos,void a(t);var t}},e.id)}))}),Object(j.jsx)("div",{className:"left-block",onClick:function(){c<0?a(c+100):c>=0&&a(c-300)},children:Object(j.jsx)("div",{className:"left-arrow"})}),Object(j.jsx)("div",{className:"right-block",onClick:function(){c>=-200?a(c-100):c<-200&&a(0)},children:Object(j.jsx)("div",{className:"right-arrow"})})]})},T=(c(204),function(e){var t=e.text,c=e.width,n=e.activeBTN,a=e.disabled;return Object(j.jsx)("button",{className:n,style:{width:"".concat(c)},disabled:a,children:t})}),A=c.p+"static/media/location.a73e42ff.svg",E=function(){return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"left-side",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"logo",children:"Need for drive"}),Object(j.jsxs)("div",{className:"location",children:[Object(j.jsx)("img",{src:A,className:"loc-pic",alt:"location"}),Object(j.jsx)("div",{className:"town",children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})]}),Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("div",{className:"carsharing-text",children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(j.jsx)("div",{className:"big-logo",children:"Need for drive"}),Object(j.jsx)("div",{className:"purpose",children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(j.jsx)("div",{className:"btn-form",children:Object(j.jsx)(o.b,{to:"/carsharing/order-page",children:Object(j.jsx)(T,{text:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",width:"100%",activeBTN:"order-btn",disabled:""})})})]}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("div",{className:"cop-mark",children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(j.jsx)("a",{className:"support-phone",children:"8 (495) 234-22-44"})]})]}),Object(j.jsx)(L,{})]})},S=c.p+"static/media/exit.0ee221b7.svg",I=c(71),B=(c(207),c.p+"static/media/telegram.198f9ca6.svg"),G=c.p+"static/media/instagram.98094ec4.svg",R=c.p+"static/media/facebook.936a27e8.svg",_=function(){var e=[{id:0,value:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410"},{id:2,value:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410"},{id:3,value:"\u0411\u0415\u041d\u0417\u0418\u041d"},{id:4,value:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"}].map((function(e){return Object(j.jsx)("a",{className:"link",children:e.value},e.id)}));return Object(j.jsxs)("div",{className:"links-form",children:[e,Object(j.jsxs)("div",{className:"social-link",children:[Object(j.jsx)("a",{className:"telegram-pic",children:Object(j.jsx)(I.a,{src:B,className:"telegram-pic",alt:"telegram"})}),Object(j.jsx)("a",{className:"facebook-pic",children:Object(j.jsx)(I.a,{src:R,className:"facebook-pic",alt:"facebook"})}),Object(j.jsx)("a",{className:"instagram-pic",children:Object(j.jsx)(I.a,{src:G,className:"instagram-pic",alt:"instagram"})})]})]})},M=(c(208),Object(l.b)((function(e){return{changeLanguage:e.changeLanguage}}),{setLanguage:x})((function(e){var t=e.menuChange,c=e.switchMenu,n=e.changeLanguage,a=e.setLanguage,s=[{value:!1,text:"\u0420\u0443\u0441"},{value:!0,text:"Eng"}];return Object(j.jsxs)("div",{className:!0===c?"menu-active":"menu",children:[Object(j.jsxs)("div",{className:"left-side-menu",children:[Object(j.jsx)("img",{src:S,alt:"exit-pic",className:"exit-pic",onClick:function(){t(!1)}}),Object(j.jsx)(_,{}),Object(j.jsx)("div",{className:"language-in-menu",onClick:function(){return a(n)},children:s.map((function(e){if(e.value===n)return e.text}))})]}),Object(j.jsx)("div",{className:"right-side-menu"})]})}))),F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],s=function(e){a(e)};return Object(j.jsxs)("div",{className:"qwe",children:[Object(j.jsx)(p,{menu:s}),Object(j.jsx)(E,{}),Object(j.jsx)(M,{switchMenu:c,menuChange:s})]})},H=(c(209),Object(l.b)((function(e){return{setTown:e.setTown,points:e.points,setAdress:e.setAdress}}))((function(e){var t=e.setTown,c=e.points,a=e.setAdress,s=Object(n.useState)([]),i=Object(u.a)(s,2),r=i[0],l=i[1];Object(n.useEffect)((function(){void 0!=c.data&&l(c.data.filter((function(e){return null!=e.cityId&&e.cityId.name===t&&e.address===a})))}),[t,a]);return Object(j.jsxs)("div",{className:"loc-right-side",children:[Object(j.jsx)("div",{className:"order-text",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"}),void 0===c.data?"Loading...":c.data.map((function(e){if(null!==e.cityId&&e.cityId.name===t&&e.address===a)return Object(j.jsxs)("div",{className:"pick-up-point",children:[Object(j.jsx)("div",{className:"pick-up-text",children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(j.jsx)("div",{className:"point-line"}),Object(j.jsxs)("div",{className:"picked-loc",children:[Object(j.jsxs)("div",{className:"picked-town",children:[t,","]}),Object(j.jsx)("div",{className:"picked-street",children:a})]})]})})),Object(j.jsxs)("div",{className:"price-block",children:[Object(j.jsx)("div",{className:"price-name",children:"\u0426\u0435\u043d\u0430:"}),Object(j.jsx)("div",{className:"price",children:"\u043e\u0442 8 000 \u0434\u043e 15 000 \u20bd"})]}),Object(j.jsx)("div",{className:"loc-btn-form",children:0!=r.length?Object(j.jsx)(T,{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c",width:"100%",activeBTN:"order-btn",disabled:""}):Object(j.jsx)(T,{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c",width:"100%",activeBTN:"unactive-btn",disabled:"disabled"})})]})}))),U=(c(210),c(70)),P=Object(l.b)(null)((function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){a("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I")}),[]);var s=Object(U.withScriptjs)(Object(U.withGoogleMap)((function(){return Object(j.jsx)(U.GoogleMap,{defaultZoom:10,defaultCenter:{lat:54.269839,lng:48.289852}})})));return Object(j.jsx)("div",{className:"map-container",children:Object(j.jsxs)("div",{className:"map-form",children:[Object(j.jsx)("div",{className:"map-text",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"}),Object(j.jsx)("div",{className:"map",children:""!=c?Object(j.jsx)(s,{googleMapURL:"".concat(c),loadingElement:Object(j.jsx)("div",{style:{height:"100%"}}),containerElement:Object(j.jsx)("div",{style:{height:"100%"}}),mapElement:Object(j.jsx)("div",{style:{height:"100%"}})}):null})]})})})),z=c.p+"static/media/exitBtn.13854ee1.svg",D=Object(l.b)((function(e){return{setTown:e.setTown,citiesReducer:e.citiesReducer,setAdress:e.setAdress,points:e.points}}),{changeTown:function(e){return{type:"SET_TOWN",payload:e}}})((function(e){var t=e.setTown,c=e.citiesReducer,a=e.changeTown,s=e.setAdress,i=e.points,r=Object(n.useState)(!1),l=Object(u.a)(r,2),d=l[0],o=l[1],b=Object(n.useState)([]),m=Object(u.a)(b,2),h=m[0],v=m[1],f=Object(n.useRef)();Object(n.useEffect)((function(){void 0!=c.data&&v(c.data.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})))}),[t]),window.addEventListener("click",(function(e){null!=e.target.className&&null!=f.current.className&&(e.target.className!==f.current.className?o(!1):o(!0))}));var O=function(e){a(e)},x=function(e){o(e)},g=function(){return c.data.map((function(e){if(e.name.toLowerCase().includes(t.toLowerCase()))return Object(j.jsx)("option",{className:"loc-name",onClick:function(){return O(e.name)},children:e.name},e.id)}))};return Object(j.jsxs)("form",{className:"input-form",children:[Object(j.jsx)("div",{className:"town-name",children:"\u0413\u043e\u0440\u043e\u0434:"}),Object(j.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434 ...",className:"loc-input",value:t,onChange:function(e){return function(e){a(e.target.value)}(e)},onClick:function(){return x(!0)},ref:f}),t.length>0?Object(j.jsx)("button",{type:"reset",className:"reset-btn",onClick:function(){a("")},children:Object(j.jsx)("img",{src:"".concat(z)})}):null,0===h.length&&t.length>=2?null:0===s.length&&t.length>=2&&d||0===s.length&&d?Object(j.jsx)("div",{className:"selector",onClick:function(){return x(!1)},children:void 0===c.data?"Loading...":g()}):s.length>=2&&0===t.length?Object(j.jsx)("div",{className:"selector",onClick:function(){return x(!1)},children:void 0===c.data&&void 0===i.data?"Loading...":i.data.map((function(e){e.address===s&&O(e.cityId.name)}))}):void 0]})})),J=Object(l.b)((function(e){return{setTown:e.setTown,setAdress:e.setAdress,points:e.points}}),{changeAdress:g})((function(e){var t=e.setAdress,c=e.changeAdress,a=e.points,s=e.setTown,i=Object(n.useState)([]),r=Object(u.a)(i,2),l=r[0],d=r[1],o=Object(n.useState)(!1),b=Object(u.a)(o,2),m=b[0],h=b[1],v=Object(n.useRef)();Object(n.useEffect)((function(){void 0!=a.data&&d(a.data.filter((function(e){return e.address.toLowerCase().includes(t.toLowerCase())})))}),[t]),window.addEventListener("click",(function(e){e.target.className!==v.current.className?h(!1):h(!0)}));var f=function(e){c(e)},O=function(e){h(e)};return Object(j.jsxs)("form",{className:"input-form",children:[Object(j.jsx)("div",{className:"town-name",children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438:"}),Object(j.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442 ...",className:"address-loc-input",value:t,onChange:function(e){return function(e){c(e.target.value)}(e)},onClick:function(){return O(!0)},ref:v}),t.length>0?Object(j.jsx)("button",{type:"reset",className:"reset-btn",onClick:function(){c("")},children:Object(j.jsx)("img",{src:"".concat(z)})}):null,0===l.length&&t.length>=2?null:0===s.length&&t.length>=2&&m?Object(j.jsx)("div",{className:"selector",onClick:function(){return O(!0)},children:void 0===a.data[0].address?"Loading...":a.data.map((function(e){if(e.address.toLowerCase().includes(t.toLowerCase()))return Object(j.jsx)("option",{className:"loc-name",onClick:function(){return f(e.address)},children:e.address},e.id)}))}):0===s.length&&m?Object(j.jsx)("div",{className:"selector",onClick:function(){return O(!0)},children:void 0===a.data?"Loading...":a.data.map((function(e){if(null!==e.cityId&&0===t.length)return Object(j.jsx)("option",{className:"loc-name",onClick:function(){return f(e.address)},children:e.address},e.id)}))}):s.length>=2&&m?Object(j.jsx)("div",{className:"selector",onClick:function(){return O(!0)},children:void 0===a.data?"Loading...":a.data.map((function(e){if(null!==e.cityId&&e.cityId.name===s)return Object(j.jsx)("option",{className:"loc-name",onClick:function(){return f(e.address)},children:e.address},e.id)}))}):void 0]})})),X=(c(407),Object(l.b)((function(e){return{setAdress:e.setAdress,points:e.points}}),{changeAdress:g})((function(){return Object(j.jsxs)("div",{className:"loc-content",children:[Object(j.jsxs)("div",{className:"loc-left-side",children:[Object(j.jsxs)("div",{className:"input-loc",children:[Object(j.jsx)(D,{}),Object(j.jsx)(J,{})]}),Object(j.jsx)(P,{})]}),Object(j.jsx)(H,{})]})}))),W=(c(408),function(){return Object(j.jsxs)("div",{className:"header-form",children:[Object(j.jsx)("div",{className:"loc-logo",children:"Need for drive"}),Object(j.jsxs)("div",{className:"loc-form",children:[Object(j.jsx)("img",{src:A,className:"loc-pic",alt:"location"}),Object(j.jsx)("div",{className:"town",children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})]})}),q=c.p+"static/media/triangle.ce81e742.svg",Q=(c(409),function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],a=t[1],s=[{id:0,value:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{id:1,value:"\u041c\u043e\u0434\u0435\u043b\u044c"},{id:2,value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},{id:3,value:"\u0418\u0442\u043e\u0433\u043e"}];return Object(j.jsx)("div",{className:"order-links-form",children:s.map((function(e){return Object(j.jsxs)("div",{className:"order-links",children:[Object(j.jsx)("a",{className:e.id===c?"order-link-active":"order-link",onClick:function(){return t=e.id,void a(t);var t},children:e.value}),Object(j.jsx)("div",{className:e.id===s.length-1?"triangle-hidden":"triangle",children:Object(j.jsx)("img",{className:"triangle-pic",src:q})})]},e.id)}))})}),V=(c(410),Object(l.b)(null,{fetchPoints:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("point/");case 2:c=e.sent,t({type:"FETCH_POINTS",payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchCities:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("city/");case 2:c=e.sent,t({type:"FETCH_CITIES",payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchPoints,c=e.fetchCities,a=Object(n.useState)(!1),s=Object(u.a)(a,2),i=s[0],r=s[1];Object(n.useEffect)((function(){t(),c()}),[]);var l=function(e){r(e)};return Object(j.jsxs)("div",{className:"order-page",children:[Object(j.jsx)(p,{menu:l}),Object(j.jsx)(W,{}),Object(j.jsx)(Q,{}),Object(j.jsx)(X,{}),Object(j.jsx)(M,{switchMenu:i,menuChange:l})]})}))),Z=c(4),K=(c(411),function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(Z.a,{path:"/carsharing",component:F,exact:!0}),Object(j.jsx)(Z.a,{path:"/carsharing/order-page",component:V,exact:!0})]})}),Y=Object(i.d)(d,Object(i.a)(r.a));s.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{store:Y,children:Object(j.jsx)(K,{})})}),document.getElementById("root"))}},[[412,1,2]]]);
//# sourceMappingURL=main.4e13a26e.chunk.js.map