(this.webpackJsonpkavaglam_client=this.webpackJsonpkavaglam_client||[]).push([[0],{107:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a.n(n),r=a(7),s=a(29),i=a(3),o="https://nuooy0hvj2.execute-api.ca-central-1.amazonaws.com/dev",l="CURRENT_USER",d="CREATE_SESSION",u="DESTROY_SESSION",m="CREATE_USER",j="CREATE_PROFILE",b={email:"",admin:!1},p=a(66),h="INITIAL_STATE",O="CURRENT_CART",f="ADD_ITEM",x="REMOVE_ITEM",v="SUB_QUANTITY",g="ADD_QUANTITY",y="ADD_SHIPPING",_="SUB_SHIPPING",N="ADD_PROMO",w=function(e){return function(t){return fetch("".concat(o,"/promo/validate"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({promo:e})}).then((function(e){return e.json()})).then((function(e){return t({type:N,data:e})}))}},I={addedItems:[],total:0,promo:{},items:[]},k="PAYMENT_INTENT",G=Object(s.c)({currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:case d:return Object(i.a)(Object(i.a)({},e),{},{email:t.currentUser.email,admin:t.currentUser.admin});case u:return b;case m:return Object(i.a)(Object(i.a)({},e),{},{email:t.currentUser.email});case j:return t.data;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if(t.type===h)return Object(i.a)(Object(i.a)({},e),{},{items:t.items});if(t.type===O){var a=t.data.items?t.data.items.reduce((function(t,a){return t+a.quantity*e.items.find((function(e){return e.productID===a.product_id})).price}),0):0;return Object(i.a)(Object(i.a)({},e),{},{addedItems:t.data.items,total:a})}if(t.type===f){var n=e.items.find((function(e){return e.productID===t.data.product_id})),c=e.addedItems?e.addedItems.find((function(e){return e.product_id===t.data.product_id})):null;return c?(c.quantity+=1,Object(i.a)(Object(i.a)({},e),{},{total:e.total+n.price})):Object(i.a)(Object(i.a)({},e),{},{addedItems:[].concat(Object(p.a)(e.addedItems),[t.data]),total:e.total+n.price})}if(t.type===x){var r=e.items.find((function(e){return e.productID===t.data.product_id})),s=e.addedItems.find((function(e){return e.product_id===t.data.product_id})),o=e.addedItems.filter((function(e){return e.product_id!==t.data.product_id}));return Object(i.a)(Object(i.a)({},e),{},{addedItems:o,total:e.total-r.price*s.quantity})}if(t.type===g){var l=e.items.find((function(e){return e.productID===t.data.product_id}));return e.addedItems.find((function(e){return e.product_id===t.data.product_id})).quantity+=1,Object(i.a)(Object(i.a)({},e),{},{total:e.total+l.price})}if(t.type===v){var d=e.items.find((function(e){return e.productID===t.data.product_id})),u=e.addedItems.find((function(e){return e.product_id===t.data.product_id}));if(1===u.quantity){var m=e.addedItems.filter((function(e){return e.product_id!==t.data.product_id}));return Object(i.a)(Object(i.a)({},e),{},{addedItems:m,total:e.total-d.price})}return u.quantity-=1,Object(i.a)(Object(i.a)({},e),{},{total:e.total-d.price})}if(t.type===y)return Object(i.a)(Object(i.a)({},e),{},{total:e.total+0});if(t.type===_)return Object(i.a)(Object(i.a)({},e),{},{total:e.total-0});if(t.type===N){if(t.data.error)return Object.keys(e.promo).length?Object(i.a)(Object(i.a)({},e),{},{total:e.total/(100-e.promo.percent)*100}):Object(i.a)({},e);if(Object.keys(e.promo).length){var j=e.total/(100-e.promo.percent)*100,b=j-(e.total-e.total*t.data.percent/100);return Object(i.a)(Object(i.a)({},e),{},{promo:t.date,total:j-b})}return Object(i.a)(Object(i.a)({},e),{},{promo:t.data,total:e.total-e.total*t.data.percent/100})}return e},payment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===k?Object(i.a)(Object(i.a)({},e),{},{payment:t.payment}):e}}),S=a(62),P=a(0),T=a(10),C=a(9),D=a(134),E=a(132),M=a(63),z=a.n(M),J=a(1);function A(){var e=Object(r.c)((function(e){return{items:e.cart.addedItems,user:e.currentUser}})),t=e.items,a=e.user;return Object(J.jsx)("section",{id:"topbar",children:Object(J.jsx)("div",{className:"container-fluid",children:Object(J.jsxs)("div",{className:"row d-flex",children:[Object(J.jsx)("div",{className:"col col-left justify-content-center justify-content-sm-start",children:"Free Shipping on orders $49+ within Canada & USA"}),Object(J.jsxs)("div",{className:"col-8 col-right text-right d-none d-md-flex justify-content-sm-end",children:[Object(J.jsx)("div",{className:"mx-2",children:a?a.email:""}),"|",Object(J.jsx)("div",{className:"mx-2",children:"Sign In / Register"}),"|",Object(J.jsx)("div",{className:"mx-2",children:"Subscribe"}),"|",Object(J.jsx)("div",{className:"mx-2",children:"cad /usd"}),"|",Object(J.jsx)("div",{className:"mx-2",children:"Facebook | Instagram"}),Object(J.jsx)(T.b,{to:"/cart",className:"nav-link",children:Object(J.jsxs)(D.a,{"aria-label":"show cart",color:"inherit",children:[Object(J.jsx)(E.a,{badgeContent:t?t.reduce((function(e,t){return e+t.quantity}),0):null,color:"secondary"}),Object(J.jsx)(z.a,{})]})})]})]})})})}var U=a(133);function F(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.currentUser}));return Object(J.jsxs)(U.a.nav,{className:"navbar navbar-light container-fluid",initial:{y:"-100vh"},animate:{y:0},transition:{delay:1.5},children:[Object(J.jsx)("ul",{className:"navbar-nav",children:Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/",className:"nav-link",children:Object(J.jsx)("img",{src:"https://kavaglam.s3.ca-central-1.amazonaws.com/kavaglam_logo_long.png",height:"70px",alt:"Kavaglam Logo"})})})}),Object(J.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:[Object(J.jsx)("span",{className:"navbar-toggler-icon"}),Object(J.jsx)("div",{className:"collapse navbar-collapse justify-content-between",id:"collapsibleNavbar",children:Object(J.jsxs)("ul",{className:"navbar-nav p-4",children:[Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/",className:"nav-link",children:"Home"})}),Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/cart",className:"nav-link",children:"Cart"})}),Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/sign_in",className:"nav-link",children:"Sign In"})}),Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/sign_up",className:"nav-link",children:"Sign Up"})}),Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)("input",{type:"button",onClick:function(){return e((function(e){return fetch("".concat(o,"/auth/session"),{credentials:"include",method:"DELETE"}).then((function(e){return e.json()})).then((function(){return e({type:u})}))}))},className:"nav-link",value:"signout"})}),t.admin&&Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(T.b,{to:"/admin",className:"nav-link",children:"Admin"})})]})})]})]})}var R=a(11),q=a(52);function B(){var e=Object(P.useState)(0),t=Object(R.a)(e,2),a=t[0],n=t[1];return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(q.a,{activeIndex:a,onSelect:function(e,t){return n(e)},children:Object(J.jsx)(q.a.Item,{interval:1e3,children:Object(J.jsx)("img",{className:"d-block w-100",alt:"First Slider",src:"https://kavaglam.s3.ca-central-1.amazonaws.com/CFDD2143.JPG"})})})})}function L(){var e=Object(r.c)((function(e){return e.cart.items})),t=Object(r.b)();return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsx)("h3",{className:"center",children:"Our items"}),Object(J.jsx)("div",{className:"d-flex justify-content-between flex-wrap",children:e.map((function(e,a){return Object(J.jsxs)("div",{className:"card",children:[Object(J.jsxs)("div",{className:"card-image",children:[Object(J.jsx)("img",{src:e.images[0],alt:e.productID}),Object(J.jsx)("span",{className:"card-title",children:e.productID}),Object(J.jsx)("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light ",onClick:function(){return t((a=e.productID,function(e){return fetch("".concat(o,"/cart/item"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({product_id:a,quantity:1})}).then((function(e){return e.json()})).then((function(t){return e({type:f,data:t})}))}));var a},children:Object(J.jsx)("i",{className:"material-icons",children:"add"})})]}),Object(J.jsxs)("div",{className:"card-content",children:[Object(J.jsx)("p",{children:e.description}),Object(J.jsx)("p",{children:Object(J.jsxs)("b",{children:["Price: ",e.price,"$"]})})]})]},a)}))})]})}var H=a(45);function Q(e){var t=e.isAuth,a=e.component,n=Object(H.a)(e,["isAuth","component"]);return Object(J.jsx)(C.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return t?Object(J.jsx)(a,Object(i.a)({},e)):Object(J.jsx)(C.a,{to:"/"})}}))}function $(e){var t=e.history,a=Object(r.b)();return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:"container justify-content-center pt-4",children:Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,c=new FormData(e.currentTarget),r={email:c.get("email"),password_digest:c.get("password_digest")};a((n=r,function(e){return fetch("".concat(o,"/auth/session"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return e({type:d,currentUser:t})}))})),t.push("/")},children:[Object(J.jsx)("div",{className:"d-flex justify-content-center ",children:Object(J.jsx)("h1",{children:"Login"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",className:"form-control email"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"password_digest",type:"password",name:"password_digest",placeholder:"Password",className:"form-control password"})}),Object(J.jsx)("input",{type:"submit",value:"Sign In",className:"form-control btn btn-secondary mt-2"})]})})})}function Y(e){var t=e.history,a=Object(r.b)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h3",{children:"SignUp"}),Object(J.jsx)("div",{className:"container justify-content-center pt-4",children:Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,c=new FormData(e.currentTarget),r={email:c.get("email"),first_name:c.get("first_name"),last_name:c.get("last_name"),password_digest:c.get("password_digest")};a((n=r,function(e){return fetch("".concat(o,"/auth/create_user"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return e({type:m,currentUser:t})}))})),t.push("/")},children:[Object(J.jsx)("div",{className:"d-flex justify-content-center ",children:Object(J.jsx)("h1",{children:"Login"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",className:"form-control email"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"first_name",type:"text",name:"first_name",placeholder:"First Name",className:"form-control first_name"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"last_name",type:"text",name:"last_name",placeholder:"Last Name",className:"form-control last_name"})}),Object(J.jsx)("div",{className:"d-flex m-3",children:Object(J.jsx)("input",{id:"password_digest",type:"password",name:"password_digest",placeholder:"Password",className:"form-control password"})}),Object(J.jsx)("input",{type:"submit",value:"Sign Up",className:"form-control btn btn-secondary mt-2"})]})})]})}var V=a(15),W=a.n(V),K=a(26);function X(){var e=Object(r.c)((function(e){return{addedItems:e.cart.addedItems,items:e.cart.items,total:e.cart.total}})),t=e.total,a=e.items,n=e.addedItems,c=Object(r.b)(),s=Object(P.useState)(""),i=Object(R.a)(s,2),l=i[0],d=i[1],u=function(){var e=Object(K.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(w(t.target.promo_code.value));case 3:e.sent.data.error?d("Invalid promo code!"):d("Promo code added");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsxs)("div",{className:"cart",children:[Object(J.jsx)("h5",{children:"You have ordered:"}),Object(J.jsx)("ul",{className:"collection",children:n.length?n.map((function(e,t){return Object(J.jsxs)("li",{className:"collection-item avatar",children:[Object(J.jsx)("div",{className:"item-img",children:Object(J.jsx)("img",{src:a.find((function(t){return t.productID===e.product_id})).images[0],alt:e.product_id,className:""})}),Object(J.jsxs)("div",{className:"item-desc",children:[Object(J.jsx)("span",{className:"title",children:e.product_id}),Object(J.jsx)("p",{children:e.description}),Object(J.jsx)("p",{children:Object(J.jsxs)("b",{children:["Price: $",a.find((function(t){return t.productID===e.product_id})).price," CAD"]})}),Object(J.jsxs)("p",{children:[Object(J.jsxs)("b",{children:["Quantity: ",e.quantity]})," "]}),Object(J.jsxs)("div",{className:"add-remove",children:[Object(J.jsx)("i",{className:"material-icons",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/add"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:g,data:t})}))}}(e))},children:" + "}),Object(J.jsx)("i",{className:"material-icons",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/sub"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:v,data:t})}))}}(e))},children:" - "})]}),Object(J.jsx)("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/item"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"DELETE",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:x,data:t})}))}}(e))},children:"Remove"})]})]},t)})):Object(J.jsx)("p",{children:"Nothing."})})]}),Object(J.jsxs)("div",{className:"container",children:[Object(J.jsxs)("div",{className:"collection",children:[Object(J.jsx)("li",{className:"collection-item",children:Object(J.jsxs)("label",{children:[Object(J.jsx)("input",{type:"checkbox",onChange:function(e){return e.target.checked?c({type:y,id:t}):c(function(e){return{type:_,id:e}}());var t}}),Object(J.jsx)("span",{children:"Shipping(+FREE SHIPPING$)"})]})}),Object(J.jsx)("li",{className:"collection-item",children:Object(J.jsxs)("label",{children:[Object(J.jsxs)("form",{onSubmit:u,children:[Object(J.jsx)("span",{children:"Promo code"}),Object(J.jsx)("input",{type:"text",name:"promo_code"}),Object(J.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-secondary btn-sm"})]}),l&&Object(J.jsx)("p",{children:l})]})}),Object(J.jsx)("li",{className:"collection-item",children:Object(J.jsxs)("b",{children:["Total: ",t," $CAD"]})})]}),Object(J.jsx)("div",{className:"checkout",children:Object(J.jsx)(T.b,{to:"/info",children:Object(J.jsx)("button",{className:"waves-effect waves-light btn",children:"Checkout"})})})]})]})}var Z=a(42),ee=a(64),te=a.n(ee);function ae(e){var t=e.history,a=Object(r.b)(),n=Object(r.c)((function(e){return e.currentUser})),c=Object(P.useState)(""),s=Object(R.a)(c,2),o=s[0],l=s[1],d=Object(P.useState)({subpremise:"",street_number:"",route:"",locality:"",administrative_area_level_1:"",postal_code:"",country:""}),u=Object(R.a)(d,2),m=u[0],b=u[1],p=["Apartment, Unit, Suite, or Floor #","Steet Number*","Street Name*","City*","State/Province*","Postal Code*","Country/Region*"],h=function(e){var t=e.name,a=e.value;return"email"!==t?b((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(Z.a)({},t,a))})):l(a)};return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsx)("h3",{children:"Contact Information"}),Object(J.jsx)("input",{type:"text",name:"email",value:n&&n.email,placeholder:"Email",onChange:function(e){return h(e.currentTarget)},disabled:n&&n.email,required:!0}),Object(J.jsx)("h3",{children:"Enter your shipping address"}),Object(J.jsx)(te.a,{apiKey:"AIzaSyBvO7AGsQi0imnQdbIU-9RU0XvSzq2D-aw",id:"location",fields:{subpremise:"subpremise",streetAddress:"route",locality:"locality",cityOrState:"administrative_area_level_1",postalcode:"postal_code",country:"country"},callbackFunction:function(e){e.address_components.forEach((function(e){return h({name:[e.types[0]],value:e.long_name})}))}}),Object(J.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),n&&a((c={email:n?n.email:o,address:m},function(e){e({type:j,data:c})})),t.push("/checkout")},children:[Object.keys(m).map((function(e,t){return"administrative_area_level_2"!==e?Object(J.jsx)("input",{type:"text",name:e,value:m[e],placeholder:p[t],onChange:function(e){return h(e.currentTarget)},required:"subpremise"!==e},t):null})),Object(J.jsx)("input",{type:"submit",className:"btn btn-success",value:"Next"})]})]})}function ne(){return Object(J.jsx)("div",{children:Object(J.jsx)("h3",{children:"Confirmation"})})}var ce=a(34);function re(e){var t=e.history,a=Object(r.c)((function(e){return{total:e.cart.total,user:e.currentUser}})),n=a.total,c=a.user,s=Object(P.useState)(!1),i=Object(R.a)(s,2),l=i[0],d=i[1],u=Object(P.useState)(),m=Object(R.a)(u,2),j=m[0],b=m[1],p=Object(ce.useStripe)(),h=Object(ce.useElements)(),O=function(){var e=Object(K.a)(W.a.mark((function e(a){var r,s,i,l,u,m;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={name:a.target.name.value,email:c.email,address:{city:c.address.locality,line1:"".concat(c.address.subpremise," - ").concat(c.address.street_number," ").concat(c.address.route),state:c.address.administrative_area_level_1,postal_code:c.address.postal_code}},d(!0),s=h.getElement("card"),e.prev=4,e.next=7,j={amount:100*n},fetch("".concat(o,"/payment/payment_intent"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(j)}).then((function(e){return e.json()})).then((function(e){return e}));case 7:return i=e.sent,e.next=10,p.createPaymentMethod({type:"card",card:s,billing_details:r});case 10:if(!(l=e.sent).error){e.next=15;break}return b(l.error.message),d(!1),e.abrupt("return");case 15:return e.next=17,p.confirmCardPayment(i.client_secret,{payment_method:l.paymentMethod.id});case 17:if(u=e.sent,!(m=u.error)){e.next=23;break}return b(m.message),d(!1),e.abrupt("return");case 23:t.push("/success"),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(4),b("Payment failed!");case 29:case"end":return e.stop()}var j}),e,null,[[4,26]])})));return function(t){return e.apply(this,arguments)}}(),f={iconStyle:"solid",style:{base:{color:"#000",fontSize:"16px",iconColor:"#000","::placeholder":{color:"#87bbfd"}},invalid:{iconColor:"#FFC7EE",color:"#FFC7EE"},complete:{iconColor:"#cbf4c9"}},hidePostalCode:!0};return Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("form",{onSubmit:O,children:[Object(J.jsx)("input",{type:"text",name:"name",placeholder:"Full name on card",required:!0}),Object(J.jsx)(ce.CardElement,{options:f,onChange:function(e){return e.error?b(e.error.message):b()}}),j&&Object(J.jsx)("p",{children:j}),Object(J.jsx)("input",{type:"submit",className:"btn btn-success",disabled:l||!p,value:l?"Processing...":"Pay $".concat(n)})]})})}function se(){return Object(J.jsx)("div",{children:Object(J.jsx)("h1",{children:" Successfull payment "})})}function ie(e){var t=e.history,a=Object(P.useState)(""),n=Object(R.a)(a,2),c=n[0],r=n[1];return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("form",{onSubmit:function(e){var a;e.preventDefault(),c&&(a={email:c},fetch("".concat(o,"/newsletter/subscribe"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return e}))),t.push("/")},children:[Object(J.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:c,onChange:function(e){return function(e){var t=e.value;return r(t)}(e.currentTarget)}}),Object(J.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]})})}function oe(e){var t=e.isAuth,a=e.component,n=Object(H.a)(e,["isAuth","component"]);return Object(J.jsx)(C.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return t.admin?Object(J.jsx)(a,Object(i.a)({},e)):Object(J.jsx)(C.a,{to:"/"})}}))}function le(){var e=Object(P.useState)(""),t=Object(R.a)(e,2),a=t[0],n=t[1],c=Object(P.useState)([]),r=Object(R.a)(c,2),s=r[0],i=r[1],l=Object(P.useState)([]),d=Object(R.a)(l,2),u=d[0],m=d[1],j=function(){var e=Object(K.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a={name:t.target.name.value,percent:t.target.percent.value,expire:t.target.expire.value},fetch("".concat(o,"/promo/create"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return e}));case 3:e.sent.length?n("Created Promo Code"):n("Invalid Promo Info"),b();case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(K.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/promo/promos"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return t.expire-e.expire}))}));case 2:(t=e.sent).length&&i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(K.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/newsletter/newsletter_list"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}));case 2:(t=e.sent).length&&m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.useEffect)((function(){b(),p()}),[]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h3",{children:"Admin Control Panel"}),Object(J.jsx)("h5",{children:"Create Promo Code"}),Object(J.jsxs)("form",{onSubmit:j,children:[Object(J.jsx)("input",{type:"text",name:"name",placeholder:"Promo Code Name",required:!0}),Object(J.jsx)("input",{type:"number",name:"percent",placeholder:"Discount Percentage",min:"0",max:"100",required:!0}),Object(J.jsx)("input",{type:"date",name:"expire",min:Date(),required:!0}),Object(J.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-secondary btn-sm"})]}),a&&Object(J.jsx)("p",{children:a}),Object(J.jsx)("br",{}),Object(J.jsx)("h5",{children:"List All Promo Codes"}),Object(J.jsxs)("table",{className:"table table-striped table-sm",children:[Object(J.jsx)("thead",{children:Object(J.jsxs)("tr",{children:[Object(J.jsx)("th",{children:"Promo Code Name"}),Object(J.jsx)("th",{children:"Percentage"}),Object(J.jsx)("th",{children:"Expires"})]})}),Object(J.jsx)("tbody",{children:s.length?s.map((function(e,t){return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:e.promoID}),Object(J.jsx)("td",{children:e.percent}),Object(J.jsx)("td",{children:new Date(e.expire).toString().slice(0,24)})]},t)})):null})]}),Object(J.jsx)("br",{}),Object(J.jsx)("h5",{children:"List All Newsletter"}),Object(J.jsxs)("table",{className:"table table-striped table-sm",children:[Object(J.jsx)("thead",{children:Object(J.jsxs)("tr",{children:[Object(J.jsx)("th",{children:"Email"}),Object(J.jsx)("th",{children:"Subscription"})]})}),Object(J.jsx)("tbody",{children:u.length?u.map((function(e,t){return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:e.emailID}),Object(J.jsx)("td",{children:e.subscribed?"Subscribed":"Unsubscribed"})]},t)})):null})]})]})}function de(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.currentUser}));return Object(P.useEffect)((function(){e((function(e){return fetch("".concat(o,"/auth/current_user"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(t){t.email&&e({type:l,currentUser:t})}))})),e((function(e){return fetch("".concat(o,"/cart/current_cart"),{credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(t){return e({type:O,data:t})}))}))}),[e]),Object(J.jsxs)(T.a,{children:[Object(J.jsx)(A,{}),Object(J.jsx)(F,{}),Object(J.jsxs)(C.d,{children:[Object(J.jsx)(oe,{path:"/admin",isAuth:t,component:le}),Object(J.jsx)(Q,{path:"/success",isAuth:t,component:se}),Object(J.jsx)(C.b,{path:"/products",render:function(e){return Object(J.jsx)(L,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/cart",render:function(e){return Object(J.jsx)(X,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/info",render:function(e){return Object(J.jsx)(ae,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/checkout",render:function(e){return Object(J.jsx)(re,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/confirm",render:function(e){return Object(J.jsx)(ne,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/newsletter",render:function(e){return Object(J.jsx)(ie,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/sign_in",render:function(e){return Object(J.jsx)($,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/sign_up",render:function(e){return Object(J.jsx)(Y,Object(i.a)({},e))}}),Object(J.jsx)(C.b,{path:"/",component:B})]})]})}a(107),a(108),a(109);var ue=a(65),me=Object(s.d)(G,{cart:{addedItems:[],total:0,promo:{},items:[{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0123.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0124.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0128.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0140.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0985.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0986.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9649.JPG"],stock:100,sale_price:68,description:"Did you say Confetti? These beauties are in the perfect pastel colours with the softest and fluffiest bristles. They are absolutely so lush! These have a way to brighten up your vanity.",price:68,productID:"Confetti Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0492.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0498.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0548.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0999.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9909.JPG"],stock:100,sale_price:120,description:"Here we have our beauty glamorous unicorn set. Featuring unicorn sparkly handles with white & pink Bristles. There nothing more magical than these beauties! These brushes are one of our only full size sets",price:120,productID:"Unicorn Magic Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9902.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0142.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0148.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0974.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9811.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9848.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9849.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9850.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9852.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9901.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9904.JPG"],stock:99,sale_price:82,description:"Pink is the new Black. Gorgeous pink handles with our twist of glam and of course with White and  pink bristles. They are seriously so soft and fluffy! This set has everything you need for your everyday look to your night out look. ",price:82,productID:"Mini Glam"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0571.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0994.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9898.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9899.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9913.JPG"],stock:100,sale_price:15,description:"The Beauty Sponge is the perfect way to get a flawless, professional-looking finish in seconds. Use it to blend out foundation for an almost airbrushed finish. How to use it? When wet, it becomes mega soft and mimics pores to create a natural airbrushed application easily. Plus, it absorbs water, not makeup, so your fave formulas land on your skin, not in your sponge.",price:15,productID:"Pink Sparkle Beauty Sponge"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9844.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0961.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0962.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0963.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0964.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0965.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0981.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9900.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9911.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_E0972.JPG"],stock:99,sale_price:58.5,description:"Here we have our snow bunny brush set. Sleek white handles with gold but of course with a touch of pink on the bristles. Minimal makeup use? These have exactly what you need for your everyday look.",price:58.5,productID:"Snow Bunny Brush Set"}]}},Object(s.a)(S.a));c.a.render(Object(J.jsx)(r.a,{store:me,children:Object(J.jsx)(ce.Elements,{stripe:Object(ue.a)("pk_test_evWbqvyDLVglv7QyFxkIVI9m"),children:Object(J.jsx)(de,{})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.de6ed5ba.chunk.js.map