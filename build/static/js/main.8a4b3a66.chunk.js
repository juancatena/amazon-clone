(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{40:function(e,a,t){e.exports=t(66)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),r=t(34),l=t.n(r),i=(t(45),t(35)),m=t(8),o=(t(46),t(47),t(36)),s=t.n(o),u=t(37),d=t.n(u),E=t(12),p=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},g=function(){return Object(n.useContext)(p)},h=t(29),v=(h.a.initializeApp({apiKey:"AIzaSyBXDQQ_TkiWJ4sCBKCstnkiwgrvk3MaWxQ",authDomain:"challenge-d58bc.firebaseapp.com",databaseURL:"https://challenge-d58bc.firebaseio.com",projectId:"challenge-d58bc",storageBucket:"challenge-d58bc.appspot.com",messagingSenderId:"10822830220",appId:"1:10822830220:web:f3351635c0ec2d42bb53a9"}).firestore(),h.a.auth());var f=function(){var e=g(),a=Object(m.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement(E.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(s.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(E.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&v.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(E.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};t(57),t(58);var b=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,i=g(),o=Object(m.a)(i,2),s=(o[0].basket,o[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:r,rating:l}})}},"Add to Basket"))};var N=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"12321341",title:"The Lean Startup",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),c.a.createElement(b,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,image:"https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",rating:3}),c.a.createElement(b,{id:"23445930",title:"Amazon Echo (3rd generation) / Smart Speaker with Alexa, Charcoal Fabric",price:98.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",rating:5}),c.a.createElement(b,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4yh Generation)",price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(b,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",rating:4}))))},k=t(7),S=(t(59),t(60),t(38)),y=t.n(S),O=t(20),C=t(21),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},j=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(O.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(O.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:a.user});default:return e}};var w=function(){var e=Object(k.f)(),a=g(),t=Object(m.a)(a,2),n=t[0].basket;return t[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(y.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",null===n||void 0===n?void 0:n.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:A(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proced to Checkout"))};t(62);var L=function(e){var a=e.id,t=e.image,n=e.title,r=e.price,l=e.rating,i=g(),o=Object(m.a)(i,2),s=(o[0].basket,o[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{src:t,className:"checkoutProduct__image"}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){s({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))};var B=function(){var e=g(),a=Object(m.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"",className:"checkout__ad"}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return c.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(w,null)))};t(63);var P=function(){var e=Object(k.f)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),s=o[0],u=o[1];return c.a.createElement("div",{className:"login"},c.a.createElement(E.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),v.signInWithEmailAndPassword(r,s).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Plase see our Privacity Notice, our Cookies Notice and our Interest-Bassed Ads Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),v.createUserWithEmailAndPassword(r,s).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your amazon account")))};t(64);var T=function(){var e=g(),a=Object(m.a)(e,2),t=a[0],n=t.basket,r=t.user;return a[1],c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(E.b,{to:"/checkout"},null===n||void 0===n?void 0:n.length," items "),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery Adress")),c.a.createElement("div",{className:"payment__adress"},c.a.createElement("p",null,null===r||void 0===r?void 0:r.email),c.a.createElement("p",null,"123 React Lane"),c.a.createElement("p",null,"Los Angeles, CA"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment__items"},n.map((function(e){return c.a.createElement(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment__details"}))))};var I=function(){var e=g(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("THE USER IS >>>>",e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(E.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(k.c,null,c.a.createElement(k.a,{path:"/login"},c.a.createElement(P,null)),c.a.createElement(k.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(B,null)),c.a.createElement(k.a,{path:"/payment"},c.a.createElement(f,null),c.a.createElement(T,null)),c.a.createElement(k.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:j},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8a4b3a66.chunk.js.map