(this.webpackJsonpkavaglam_client=this.webpackJsonpkavaglam_client||[]).push([[0],{121:function(a,t,e){},126:function(a,t,e){"use strict";e.r(t),e.d(t,"store",(function(){return H}));var n=e(18),c=e.n(n),r=e(7),s=e(27),o=e(3),i="https://nuooy0hvj2.execute-api.ca-central-1.amazonaws.com/dev",m="CURRENT_USER",l="CREATE_SESSION",d="DESTROY_SESSION",u="CREATE_USER",p="CREATE_PROFILE",h={email:"",admin:!1,profile:{}},g=e(75),f="INITIAL_STATE",b="CURRENT_CART",_="ADD_ITEM",j="REMOVE_ITEM",I="SUB_QUANTITY",v="ADD_QUANTITY",G="ADD_SHIPPING",k="SUB_SHIPPING",w="ADD_MSG",O="ADD_PROMO",y="CREATE_ORDER",z=function(){return function(a){return fetch("".concat(i,"/cart/current_cart"),{credentials:"include",method:"GET"}).then((function(a){return a.json()})).then((function(t){return a({type:b,data:t})}))}},M={addedItems:[],items:[],promo:{},total:0,subtotal:0,discount:0,shipping:0,msg:"",order:""},P="PAYMENT_INTENT",E="CREATE",J="REVIEWS",T=Object(s.c)({currentUser:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case l:return Object(o.a)(Object(o.a)({},a),{},{email:t.currentUser.email,admin:t.currentUser.admin});case d:return h;case u:return Object(o.a)(Object(o.a)({},a),{},{email:t.currentUser.email});case p:return Object(o.a)(Object(o.a)({},a),{},{profile:t.data});default:return a}},cart:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if(t.type===f)return Object(o.a)(Object(o.a)({},a),{},{items:t.items});if(t.type===b){var e=t.data.items?t.data.items.reduce((function(t,e){return t+e.quantity*a.items.find((function(a){return a.productID===e.product_id})).price}),0):0;return Object(o.a)(Object(o.a)({},a),{},{addedItems:t.data.items,total:e})}if(t.type===_){var n=a.addedItems?a.addedItems:new Array(0),c=a.items.find((function(a){return a.productID===t.data.product_id})),r=a.addedItems?a.addedItems.find((function(a){return a.product_id===t.data.product_id})):null;return r?(r.quantity+=1,Object(o.a)(Object(o.a)({},a),{},{total:a.total+c.price})):Object(o.a)(Object(o.a)({},a),{},{addedItems:[].concat(Object(g.a)(n),[t.data]),total:a.total+c.price})}if(t.type===j){var s=a.items.find((function(a){return a.productID===t.data.product_id})),i=a.addedItems.find((function(a){return a.product_id===t.data.product_id})),m=a.addedItems.filter((function(a){return a.product_id!==t.data.product_id}));return Object(o.a)(Object(o.a)({},a),{},{addedItems:m,total:a.total-s.price*i.quantity})}if(t.type===v){var l=a.items.find((function(a){return a.productID===t.data.product_id}));return a.addedItems.find((function(a){return a.product_id===t.data.product_id})).quantity+=1,Object(o.a)(Object(o.a)({},a),{},{total:a.total+l.price})}if(t.type===I){var d=a.items.find((function(a){return a.productID===t.data.product_id})),u=a.addedItems.find((function(a){return a.product_id===t.data.product_id}));if(1===u.quantity){var p=a.addedItems.filter((function(a){return a.product_id!==t.data.product_id}));return Object(o.a)(Object(o.a)({},a),{},{addedItems:p,total:a.total-d.price})}return u.quantity-=1,Object(o.a)(Object(o.a)({},a),{},{total:a.total-d.price})}if(t.type===G)return a.discount?Object(o.a)(Object(o.a)({},a),{},{shipping:t.data,subtotal:a.total+t.data-a.discount}):Object(o.a)(Object(o.a)({},a),{},{shipping:t.data,subtotal:a.total+t.data});if(t.type===k)return Object(o.a)(Object(o.a)({},a),{},{total:a.total-0});if(t.type===w)return Object(o.a)(Object(o.a)({},a),{},{msg:t.data});if(t.type===O){if(t.data.error)return Object(o.a)(Object(o.a)({},a),{},{discount:0,subtotal:a.total});var h=a.total*(t.data.percent/100);return a.shipping?Object(o.a)(Object(o.a)({},a),{},{promo:t.data,discount:h,subtotal:a.total-h+a.shipping}):Object(o.a)(Object(o.a)({},a),{},{promo:t.data,discount:h,subtotal:a.total-h})}return t.type===y?Object(o.a)(Object(o.a)({},a),{},{order:t.data.orderID}):a},payment:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===P?Object(o.a)(Object(o.a)({},a),{},{payment:t.payment}):a},review:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===E||t.type===J?Object(o.a)(Object(o.a)({},a),{},{review:t.data}):a}}),S=e(67),D=e(11),A=(e(88),e(1)),R=e(5),U=e(10),x=e(0);function N(){return Object(x.jsxs)("div",{className:"maintenance",children:[Object(x.jsx)("img",{src:"/images/kavaglam_logo_long.svg",alt:"KAVAGLAM"}),Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:"we'll be back soon"})})]})}e(12),e(15);e(33);e(146),e(144),e(68),e(42),e(40);e(145);e(72),e(46),e(73);var B=e(35);function C(){var a=Object(r.b)(),t=Object(r.c)((function(a){return{user:a.currentUser,addedItems:a.cart.addedItems,profile:a.currentUser.profile,shipping:a.cart.shipping,order:a.cart.order}})),e=(t.user,t.addedItems,t.profile,t.shipping,t.order,Object(A.useState)(!1)),n=Object(D.a)(e,2);n[0],n[1];return Object(A.useEffect)((function(){a((function(a){return fetch("".concat(i,"/auth/current_user"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(a){return a.json()})).then((function(t){t.email&&a({type:m,currentUser:t})}))})),a(z())}),[a]),Object(x.jsx)(R.a,{children:Object(x.jsx)(U.d,{children:Object(x.jsx)(U.b,{component:N})})})}e(121),e(122),e(123);var q=e(74),H=Object(s.d)(T,{cart:{addedItems:[],total:0,promo:{},items:[{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_conffeti.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0123.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0124.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0128.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0140.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0985.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0986.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9649.JPG"],stock:100,sale_price:68,description:"Did you say Confetti? These beauties are in the perfect pastel colours with the softest and fluffiest bristles. They are absolutely so lush! These have a way to brighten up your vanity.",price:68,productID:"Confetti Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_unicorn.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0492.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0498.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0548.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0999.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9909.JPG"],stock:100,sale_price:120,description:"Here we have our beauty glamorous unicorn set. Featuring unicorn sparkly handles with white & pink Bristles. There nothing more magical than these beauties! These brushes are one of our only full size sets",price:120,productID:"Unicorn Magic Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_mini_pink.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0142.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0148.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0974.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9811.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9848.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9849.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9850.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9852.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9901.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9904.JPG"],stock:99,sale_price:82,description:"Pink is the new Black. Gorgeous pink handles with our twist of glam and of course with White and  pink bristles. They are seriously so soft and fluffy! This set has everything you need for your everyday look to your night out look. ",price:82,productID:"Mini Glam"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_sponge.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0994.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9898.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9899.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9913.JPG"],stock:100,sale_price:15,description:"The Beauty Sponge is the perfect way to get a flawless, professional-looking finish in seconds. Use it to blend out foundation for an almost airbrushed finish. How to use it? When wet, it becomes mega soft and mimics pores to create a natural airbrushed application easily. Plus, it absorbs water, not makeup, so your fave formulas land on your skin, not in your sponge.",price:15,productID:"Pink Sparkle Beauty Sponge"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_snow_bunny.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0961.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0962.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0963.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0964.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0965.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0981.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9900.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9911.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_E0972.JPG"],stock:99,sale_price:58.5,description:"Here we have our snow bunny brush set. Sleek white handles with gold but of course with a touch of pink on the bristles. Minimal makeup use? These have exactly what you need for your everyday look.",price:58.5,productID:"Snow Bunny Brush Set"}]}},Object(s.a)(S.a));c.a.render(Object(x.jsx)(r.a,{store:H,children:Object(x.jsx)(B.Elements,{stripe:Object(q.a)("pk_test_51Ie2fJGmQe5zqJqW7xKhlDSrYoy9fr1AiQwAiDYB0zqFfuyUQHSZiqRRO7kR2ImkIUAkLiuocjwNxnfjCPE0sxi600eug51vNz"),children:Object(x.jsx)(C,{})})}),document.getElementById("root"))},88:function(a,t,e){}},[[126,1,2]]]);
//# sourceMappingURL=main.7ad577ce.chunk.js.map