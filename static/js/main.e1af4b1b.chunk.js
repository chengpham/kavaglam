(this.webpackJsonpkavaglam_client=this.webpackJsonpkavaglam_client||[]).push([[0],{107:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a.n(n),r=a(7),s=a(29),i=a(3),o="https://nuooy0hvj2.execute-api.ca-central-1.amazonaws.com/dev",l="CURRENT_USER",d="CREATE_SESSION",u="DESTROY_SESSION",m="CREATE_USER",j="CREATE_PROFILE",b=document.cookie&&document.cookie.split("token=")[1],p={email:"",admin:!1},h=a(66),O="INITIAL_STATE",f="CURRENT_CART",x="ADD_ITEM",v="REMOVE_ITEM",g="SUB_QUANTITY",y="ADD_QUANTITY",_="ADD_SHIPPING",N="SUB_SHIPPING",w="ADD_PROMO",I=function(e){return function(t){return fetch("".concat(o,"/promo/validate"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({promo:e})}).then((function(e){return e.json()})).then((function(e){return t({type:w,data:e})}))}},k={addedItems:[],total:0,promo:{},items:[]},G="PAYMENT_INTENT",S=Object(s.c)({currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:case d:return Object(i.a)(Object(i.a)({},e),{},{email:t.currentUser.email,admin:t.currentUser.admin});case u:return p;case m:return Object(i.a)(Object(i.a)({},e),{},{email:t.currentUser.email});case j:return t.data;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if(t.type===O)return Object(i.a)(Object(i.a)({},e),{},{items:t.items});if(t.type===f){var a=e.items.length&&t.data.items.reduce((function(t,a){return t+a.quantity*e.items.find((function(e){return e.productID===a.product_id})).price}),0);return Object(i.a)(Object(i.a)({},e),{},{addedItems:t.data.items,total:a.toFixed(2)})}if(t.type===x){var n=e.items.find((function(e){return e.productID===t.data.product_id})),c=e.addedItems.find((function(e){return e.product_id===t.data.product_id}));return c?(c.quantity+=1,Object(i.a)(Object(i.a)({},e),{},{total:(e.total+n.price).toFixed(2)})):Object(i.a)(Object(i.a)({},e),{},{addedItems:[].concat(Object(h.a)(e.addedItems),[t.data]),total:(e.total+n.price).toFixed(2)})}if(t.type===v){var r=e.items.find((function(e){return e.productID===t.data.product_id})),s=e.addedItems.find((function(e){return e.product_id===t.data.product_id})),o=e.addedItems.filter((function(e){return e.product_id!==t.data.product_id}));return Object(i.a)(Object(i.a)({},e),{},{addedItems:o,total:(e.total-r.price*s.quantity).toFixed(2)})}if(t.type===y){var l=e.items.find((function(e){return e.productID===t.data.product_id}));return e.addedItems.find((function(e){return e.product_id===t.data.product_id})).quantity+=1,Object(i.a)(Object(i.a)({},e),{},{total:(e.total+l.price).toFixed(2)})}if(t.type===g){var d=e.items.find((function(e){return e.productID===t.data.product_id})),u=e.addedItems.find((function(e){return e.product_id===t.data.product_id}));if(1===u.quantity){var m=e.addedItems.filter((function(e){return e.product_id!==t.data.product_id}));return Object(i.a)(Object(i.a)({},e),{},{addedItems:m,total:(e.total-d.price).toFixed(2)})}return u.quantity-=1,Object(i.a)(Object(i.a)({},e),{},{total:(e.total-d.price).toFixed(2)})}if(t.type===_)return Object(i.a)(Object(i.a)({},e),{},{total:e.total+0});if(t.type===N)return Object(i.a)(Object(i.a)({},e),{},{total:e.total-0});if(t.type===w){if(t.data.error)return Object.keys(e.promo).length?Object(i.a)(Object(i.a)({},e),{},{total:(e.total/(100-e.promo.percent)*100).toFixed(2)}):Object(i.a)({},e);if(Object.keys(e.promo).length){var j=e.total/(100-e.promo.percent)*100,b=j-(e.total-e.total*t.data.percent/100);return Object(i.a)(Object(i.a)({},e),{},{promo:t.date,total:(j-b).toFixed(2)})}return Object(i.a)(Object(i.a)({},e),{},{promo:t.data,total:(e.total-e.total*t.data.percent/100).toFixed(2)})}return e},payment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===G?Object(i.a)(Object(i.a)({},e),{},{payment:t.payment}):e}}),P=a(62),T=a(0),C=a(10),D=a(9),E=a(134),M=a(132),z=a(63),J=a.n(z),F=a(1);function A(){var e=Object(r.c)((function(e){return{items:e.cart.addedItems,user:e.currentUser}})),t=e.items,a=e.user;return Object(F.jsx)("section",{id:"topbar",children:Object(F.jsx)("div",{className:"container-fluid",children:Object(F.jsxs)("div",{className:"row d-flex",children:[Object(F.jsx)("div",{className:"col col-left justify-content-center justify-content-sm-start",children:"Free Shipping on orders $49+ within Canada & USA"}),Object(F.jsxs)("div",{className:"col-8 col-right text-right d-none d-md-flex justify-content-sm-end",children:[Object(F.jsx)("div",{className:"mx-2",children:a?a.email:""}),"|",Object(F.jsx)("div",{className:"mx-2",children:"Sign In / Register"}),"|",Object(F.jsx)("div",{className:"mx-2",children:"Subscribe"}),"|",Object(F.jsx)("div",{className:"mx-2",children:"cad /usd"}),"|",Object(F.jsx)("div",{className:"mx-2",children:"Facebook | Instagram"}),Object(F.jsx)(C.b,{to:"/cart",className:"nav-link",children:Object(F.jsxs)(E.a,{"aria-label":"show cart",color:"inherit",children:[Object(F.jsx)(M.a,{badgeContent:t.length&&t.reduce((function(e,t){return e+t.quantity}),0),color:"secondary"}),Object(F.jsx)(J.a,{})]})})]})]})})})}var U=a(133);function R(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.currentUser}));return Object(F.jsxs)(U.a.nav,{className:"navbar navbar-light container-fluid",initial:{y:"-100vh"},animate:{y:0},transition:{delay:1.5},children:[Object(F.jsx)("ul",{className:"navbar-nav",children:Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/",className:"nav-link",children:Object(F.jsx)("img",{src:"https://kavaglam.s3.ca-central-1.amazonaws.com/kavaglam_logo_long.png",height:"70px",alt:"Kavaglam Logo"})})})}),Object(F.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:[Object(F.jsx)("span",{className:"navbar-toggler-icon"}),Object(F.jsx)("div",{className:"collapse navbar-collapse justify-content-between",id:"collapsibleNavbar",children:Object(F.jsxs)("ul",{className:"navbar-nav p-4",children:[Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/",className:"nav-link",children:"Home"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/cart",className:"nav-link",children:"Cart"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/sign_in",className:"nav-link",children:"Sign In"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/sign_up",className:"nav-link",children:"Sign Up"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)("input",{type:"button",onClick:function(){return e((function(e){return fetch("".concat(o,"/auth/session"),{credentials:"include",method:"DELETE"}).then((function(e){return e.json()})).then((function(){return e({type:u})}))}))},className:"nav-link",value:"signout"})}),t.admin&&Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(C.b,{to:"/admin",className:"nav-link",children:"Admin"})})]})})]})]})}var q=a(11),B=a(52);function L(){var e=Object(T.useState)(0),t=Object(q.a)(e,2),a=t[0],n=t[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(B.a,{activeIndex:a,onSelect:function(e,t){return n(e)},children:Object(F.jsx)(B.a.Item,{interval:1e3,children:Object(F.jsx)("img",{className:"d-block w-100",alt:"First Slider",src:"https://kavaglam.s3.ca-central-1.amazonaws.com/CFDD2143.JPG"})})})})}function H(){var e=Object(r.c)((function(e){return e.cart.items})),t=Object(r.b)();return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("h3",{className:"center",children:"Our items"}),Object(F.jsx)("div",{className:"d-flex justify-content-between flex-wrap",children:e.map((function(e,a){return Object(F.jsxs)("div",{className:"card",children:[Object(F.jsxs)("div",{className:"card-image",children:[Object(F.jsx)("img",{src:e.images[0],alt:e.productID}),Object(F.jsx)("span",{className:"card-title",children:e.productID}),Object(F.jsx)("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light ",onClick:function(){return t((a=e.productID,function(e){return fetch("".concat(o,"/cart/item"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({product_id:a,quantity:1})}).then((function(e){return e.json()})).then((function(t){return e({type:x,data:t})}))}));var a},children:Object(F.jsx)("i",{className:"material-icons",children:"add"})})]}),Object(F.jsxs)("div",{className:"card-content",children:[Object(F.jsx)("p",{children:e.description}),Object(F.jsx)("p",{children:Object(F.jsxs)("b",{children:["Price: ",e.price,"$"]})})]})]},a)}))})]})}var Q=a(45);function $(e){var t=e.isAuth,a=e.component,n=Object(Q.a)(e,["isAuth","component"]);return Object(F.jsx)(D.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return t?Object(F.jsx)(a,Object(i.a)({},e)):Object(F.jsx)(D.a,{to:"/"})}}))}function Y(e){var t=e.history,a=Object(r.b)();return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"container justify-content-center pt-4",children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,c=new FormData(e.currentTarget),r={email:c.get("email"),password_digest:c.get("password_digest")};a((n=r,function(e){return fetch("".concat(o,"/auth/session"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return e({type:d,currentUser:t})}))})),t.push("/")},children:[Object(F.jsx)("div",{className:"d-flex justify-content-center ",children:Object(F.jsx)("h1",{children:"Login"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",className:"form-control email"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"password_digest",type:"password",name:"password_digest",placeholder:"Password",className:"form-control password"})}),Object(F.jsx)("input",{type:"submit",value:"Sign In",className:"form-control btn btn-secondary mt-2"})]})})})}function V(e){var t=e.history,a=Object(r.b)();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{children:"SignUp"}),Object(F.jsx)("div",{className:"container justify-content-center pt-4",children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,c=new FormData(e.currentTarget),r={email:c.get("email"),first_name:c.get("first_name"),last_name:c.get("last_name"),password_digest:c.get("password_digest")};a((n=r,function(e){return fetch("".concat(o,"/auth/create_user"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){return e({type:m,currentUser:t})}))})),t.push("/")},children:[Object(F.jsx)("div",{className:"d-flex justify-content-center ",children:Object(F.jsx)("h1",{children:"Login"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",className:"form-control email"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"first_name",type:"text",name:"first_name",placeholder:"First Name",className:"form-control first_name"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"last_name",type:"text",name:"last_name",placeholder:"Last Name",className:"form-control last_name"})}),Object(F.jsx)("div",{className:"d-flex m-3",children:Object(F.jsx)("input",{id:"password_digest",type:"password",name:"password_digest",placeholder:"Password",className:"form-control password"})}),Object(F.jsx)("input",{type:"submit",value:"Sign Up",className:"form-control btn btn-secondary mt-2"})]})})]})}var W=a(15),K=a.n(W),X=a(26);function Z(){var e=Object(r.c)((function(e){return{addedItems:e.cart.addedItems,items:e.cart.items,total:e.cart.total}})),t=e.total,a=e.items,n=e.addedItems,c=Object(r.b)(),s=Object(T.useState)(""),i=Object(q.a)(s,2),l=i[0],d=i[1],u=function(){var e=Object(X.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(I(t.target.promo_code.value));case 3:e.sent.data.error?d("Invalid promo code!"):d("Promo code added");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"cart",children:[Object(F.jsx)("h5",{children:"You have ordered:"}),Object(F.jsx)("ul",{className:"collection",children:n.length?n.map((function(e,t){return Object(F.jsxs)("li",{className:"collection-item avatar",children:[Object(F.jsx)("div",{className:"item-img",children:Object(F.jsx)("img",{src:a.find((function(t){return t.productID===e.product_id})).images[0],alt:e.product_id,className:""})}),Object(F.jsxs)("div",{className:"item-desc",children:[Object(F.jsx)("span",{className:"title",children:e.product_id}),Object(F.jsx)("p",{children:e.description}),Object(F.jsx)("p",{children:Object(F.jsxs)("b",{children:["Price: $",a.find((function(t){return t.productID===e.product_id})).price," CAD"]})}),Object(F.jsxs)("p",{children:[Object(F.jsxs)("b",{children:["Quantity: ",e.quantity]})," "]}),Object(F.jsxs)("div",{className:"add-remove",children:[Object(F.jsx)("i",{className:"material-icons",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/add"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:y,data:t})}))}}(e))},children:" + "}),Object(F.jsx)("i",{className:"material-icons",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/sub"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:g,data:t})}))}}(e))},children:" - "})]}),Object(F.jsx)("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){return c(function(e){var t=e.cartID,a=e.product_id;return function(e){return fetch("".concat(o,"/cart/item"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"DELETE",body:JSON.stringify({cartID:t,product_id:a})}).then((function(e){return e.json()})).then((function(t){return e({type:v,data:t})}))}}(e))},children:"Remove"})]})]},t)})):Object(F.jsx)("p",{children:"Nothing."})})]}),Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("div",{className:"collection",children:[Object(F.jsx)("li",{className:"collection-item",children:Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{type:"checkbox",onChange:function(e){return e.target.checked?c({type:_,id:t}):c(function(e){return{type:N,id:e}}());var t}}),Object(F.jsx)("span",{children:"Shipping(+FREE SHIPPING$)"})]})}),Object(F.jsx)("li",{className:"collection-item",children:Object(F.jsxs)("label",{children:[Object(F.jsxs)("form",{onSubmit:u,children:[Object(F.jsx)("span",{children:"Promo code"}),Object(F.jsx)("input",{type:"text",name:"promo_code"}),Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-secondary btn-sm"})]}),l&&Object(F.jsx)("p",{children:l})]})}),Object(F.jsx)("li",{className:"collection-item",children:Object(F.jsxs)("b",{children:["Total: ",t," $CAD"]})})]}),Object(F.jsx)("div",{className:"checkout",children:Object(F.jsx)(C.b,{to:"/info",children:Object(F.jsx)("button",{className:"waves-effect waves-light btn",children:"Checkout"})})})]})]})}var ee=a(42),te=a(64),ae=a.n(te);function ne(e){var t=e.history,a=Object(r.b)(),n=Object(r.c)((function(e){return e.currentUser})),c=Object(T.useState)(""),s=Object(q.a)(c,2),o=s[0],l=s[1],d=Object(T.useState)({subpremise:"",street_number:"",route:"",locality:"",administrative_area_level_1:"",postal_code:"",country:""}),u=Object(q.a)(d,2),m=u[0],b=u[1],p=["Apartment, Unit, Suite, or Floor #","Steet Number*","Street Name*","City*","State/Province*","Postal Code*","Country/Region*"],h=function(e){var t=e.name,a=e.value;return"email"!==t?b((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(ee.a)({},t,a))})):l(a)};return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("h3",{children:"Contact Information"}),Object(F.jsx)("input",{type:"text",name:"email",value:n&&n.email,placeholder:"Email",onChange:function(e){return h(e.currentTarget)},disabled:n&&n.email,required:!0}),Object(F.jsx)("h3",{children:"Enter your shipping address"}),Object(F.jsx)(ae.a,{apiKey:"AIzaSyBvO7AGsQi0imnQdbIU-9RU0XvSzq2D-aw",id:"location",fields:{subpremise:"subpremise",streetAddress:"route",locality:"locality",cityOrState:"administrative_area_level_1",postalcode:"postal_code",country:"country"},callbackFunction:function(e){e.address_components.forEach((function(e){return h({name:[e.types[0]],value:e.long_name})}))}}),Object(F.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),n&&a((c={email:n?n.email:o,address:m},function(e){e({type:j,data:c})})),t.push("/checkout")},children:[Object.keys(m).map((function(e,t){return"administrative_area_level_2"!==e?Object(F.jsx)("input",{type:"text",name:e,value:m[e],placeholder:p[t],onChange:function(e){return h(e.currentTarget)},required:"subpremise"!==e},t):null})),Object(F.jsx)("input",{type:"submit",className:"btn btn-success",value:"Next"})]})]})}function ce(){return Object(F.jsx)("div",{children:Object(F.jsx)("h3",{children:"Confirmation"})})}var re=a(34);function se(e){var t=e.history,a=Object(r.c)((function(e){return{total:e.cart.total,user:e.currentUser}})),n=a.total,c=a.user,s=Object(T.useState)(!1),i=Object(q.a)(s,2),l=i[0],d=i[1],u=Object(T.useState)(),m=Object(q.a)(u,2),j=m[0],b=m[1],p=Object(re.useStripe)(),h=Object(re.useElements)(),O=function(){var e=Object(X.a)(K.a.mark((function e(a){var r,s,i,l,u,m;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={name:a.target.name.value,email:c.email,address:{city:c.address.locality,line1:"".concat(c.address.subpremise," - ").concat(c.address.street_number," ").concat(c.address.route),state:c.address.administrative_area_level_1,postal_code:c.address.postal_code}},d(!0),s=h.getElement("card"),e.prev=4,e.next=7,j={amount:100*n},fetch("".concat(o,"/payment/payment_intent"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(j)}).then((function(e){return e.json()})).then((function(e){return e}));case 7:return i=e.sent,e.next=10,p.createPaymentMethod({type:"card",card:s,billing_details:r});case 10:if(!(l=e.sent).error){e.next=15;break}return b(l.error.message),d(!1),e.abrupt("return");case 15:return e.next=17,p.confirmCardPayment(i.client_secret,{payment_method:l.paymentMethod.id});case 17:if(u=e.sent,!(m=u.error)){e.next=23;break}return b(m.message),d(!1),e.abrupt("return");case 23:t.push("/success"),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(4),b("Payment failed!");case 29:case"end":return e.stop()}var j}),e,null,[[4,26]])})));return function(t){return e.apply(this,arguments)}}(),f={iconStyle:"solid",style:{base:{color:"#000",fontSize:"16px",iconColor:"#000","::placeholder":{color:"#87bbfd"}},invalid:{iconColor:"#FFC7EE",color:"#FFC7EE"},complete:{iconColor:"#cbf4c9"}},hidePostalCode:!0};return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("form",{onSubmit:O,children:[Object(F.jsx)("input",{type:"text",name:"name",placeholder:"Full name on card",required:!0}),Object(F.jsx)(re.CardElement,{options:f,onChange:function(e){return e.error?b(e.error.message):b()}}),j&&Object(F.jsx)("p",{children:j}),Object(F.jsx)("input",{type:"submit",className:"btn btn-success",disabled:l||!p,value:l?"Processing...":"Pay $".concat(n)})]})})}function ie(){return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:" Successfull payment "})})}function oe(e){var t=e.history,a=Object(T.useState)(""),n=Object(q.a)(a,2),c=n[0],r=n[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("form",{onSubmit:function(e){var a;e.preventDefault(),c&&(a={email:c},fetch("".concat(o,"/newsletter/subscribe"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return e}))),t.push("/")},children:[Object(F.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:c,onChange:function(e){return function(e){var t=e.value;return r(t)}(e.currentTarget)}}),Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]})})}function le(e){var t=e.isAuth,a=e.component,n=Object(Q.a)(e,["isAuth","component"]);return Object(F.jsx)(D.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return t.admin?Object(F.jsx)(a,Object(i.a)({},e)):Object(F.jsx)(D.a,{to:"/"})}}))}function de(){var e=Object(T.useState)(""),t=Object(q.a)(e,2),a=t[0],n=t[1],c=Object(T.useState)([]),r=Object(q.a)(c,2),s=r[0],i=r[1],l=Object(T.useState)([]),d=Object(q.a)(l,2),u=d[0],m=d[1],j=function(){var e=Object(X.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a={name:t.target.name.value,percent:t.target.percent.value,expire:t.target.expire.value},fetch("".concat(o,"/promo/create"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return e}));case 3:e.sent.length?n("Created Promo Code"):n("Invalid Promo Info"),b();case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(X.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/promo/promos"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return t.expire-e.expire}))}));case 2:(t=e.sent).length&&i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(X.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/newsletter/newsletter_list"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}));case 2:(t=e.sent).length&&m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.useEffect)((function(){b(),p()}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{children:"Admin Control Panel"}),Object(F.jsx)("h5",{children:"Create Promo Code"}),Object(F.jsxs)("form",{onSubmit:j,children:[Object(F.jsx)("input",{type:"text",name:"name",placeholder:"Promo Code Name",required:!0}),Object(F.jsx)("input",{type:"number",name:"percent",placeholder:"Discount Percentage",min:"0",max:"100",required:!0}),Object(F.jsx)("input",{type:"date",name:"expire",min:Date(),required:!0}),Object(F.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-secondary btn-sm"})]}),a&&Object(F.jsx)("p",{children:a}),Object(F.jsx)("br",{}),Object(F.jsx)("h5",{children:"List All Promo Codes"}),Object(F.jsxs)("table",{className:"table table-striped table-sm",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Promo Code Name"}),Object(F.jsx)("th",{children:"Percentage"}),Object(F.jsx)("th",{children:"Expires"})]})}),Object(F.jsx)("tbody",{children:s.length?s.map((function(e,t){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:e.promoID}),Object(F.jsx)("td",{children:e.percent}),Object(F.jsx)("td",{children:new Date(e.expire).toString().slice(0,24)})]},t)})):null})]}),Object(F.jsx)("br",{}),Object(F.jsx)("h5",{children:"List All Newsletter"}),Object(F.jsxs)("table",{className:"table table-striped table-sm",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Email"}),Object(F.jsx)("th",{children:"Subscription"})]})}),Object(F.jsx)("tbody",{children:u.length?u.map((function(e,t){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:e.emailID}),Object(F.jsx)("td",{children:e.subscribed?"Subscribed":"Unsubscribed"})]},t)})):null})]})]})}function ue(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.currentUser}));return Object(T.useEffect)((function(){e((function(e){return fetch("".concat(o,"/auth/current_user"),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+b},credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(t){return e({type:l,currentUser:t})}))})),e((function(e){return fetch("".concat(o,"/cart/current_cart"),{credentials:"include",method:"GET"}).then((function(e){return e.json()})).then((function(t){return e({type:f,data:t})}))}))}),[]),Object(F.jsxs)(C.a,{children:[Object(F.jsx)(A,{}),Object(F.jsx)(R,{}),Object(F.jsxs)(D.d,{children:[Object(F.jsx)(le,{path:"/admin",isAuth:t,component:de}),Object(F.jsx)($,{path:"/success",isAuth:t,component:ie}),Object(F.jsx)(D.b,{path:"/products",render:function(e){return Object(F.jsx)(H,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/cart",render:function(e){return Object(F.jsx)(Z,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/info",render:function(e){return Object(F.jsx)(ne,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/checkout",render:function(e){return Object(F.jsx)(se,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/confirm",render:function(e){return Object(F.jsx)(ce,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/newsletter",render:function(e){return Object(F.jsx)(oe,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/sign_in",render:function(e){return Object(F.jsx)(Y,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/sign_up",render:function(e){return Object(F.jsx)(V,Object(i.a)({},e))}}),Object(F.jsx)(D.b,{path:"/",component:L})]})]})}a(107),a(108),a(109);var me=a(65),je=Object(s.d)(S,{cart:{addedItems:[],total:0,promo:{},items:[{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0123.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0124.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0128.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0140.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0985.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0986.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9649.JPG"],stock:100,sale_price:68,description:"Did you say Confetti? These beauties are in the perfect pastel colours with the softest and fluffiest bristles. They are absolutely so lush! These have a way to brighten up your vanity.",price:68,productID:"Confetti Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0492.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0498.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0548.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0999.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9909.JPG"],stock:100,sale_price:120,description:"Here we have our beauty glamorous unicorn set. Featuring unicorn sparkly handles with white & pink Bristles. There nothing more magical than these beauties! These brushes are one of our only full size sets",price:120,productID:"Unicorn Magic Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9902.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0142.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0148.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0974.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9811.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9848.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9849.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9850.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9852.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9901.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9904.JPG"],stock:99,sale_price:82,description:"Pink is the new Black. Gorgeous pink handles with our twist of glam and of course with White and  pink bristles. They are seriously so soft and fluffy! This set has everything you need for your everyday look to your night out look. ",price:82,productID:"Mini Glam"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0571.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0994.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9898.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9899.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9913.JPG"],stock:100,sale_price:15,description:"The Beauty Sponge is the perfect way to get a flawless, professional-looking finish in seconds. Use it to blend out foundation for an almost airbrushed finish. How to use it? When wet, it becomes mega soft and mimics pores to create a natural airbrushed application easily. Plus, it absorbs water, not makeup, so your fave formulas land on your skin, not in your sponge.",price:15,productID:"Pink Sparkle Beauty Sponge"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9844.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0961.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0962.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0963.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0964.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0965.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0981.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9900.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9911.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_E0972.JPG"],stock:99,sale_price:58.5,description:"Here we have our snow bunny brush set. Sleek white handles with gold but of course with a touch of pink on the bristles. Minimal makeup use? These have exactly what you need for your everyday look.",price:58.5,productID:"Snow Bunny Brush Set"}]}},Object(s.a)(P.a));c.a.render(Object(F.jsx)(r.a,{store:je,children:Object(F.jsx)(re.Elements,{stripe:Object(me.a)("pk_test_evWbqvyDLVglv7QyFxkIVI9m"),children:Object(F.jsx)(ue,{})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.e1af4b1b.chunk.js.map