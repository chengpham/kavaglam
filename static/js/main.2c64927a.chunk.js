(this.webpackJsonpkavaglam_client=this.webpackJsonpkavaglam_client||[]).push([[0],{116:function(a,t,e){},121:function(a,t,e){"use strict";e.r(t);var n=e(18),c=e.n(n),o=e(8),r=e(27),s=e(4),i="https://nuooy0hvj2.execute-api.ca-central-1.amazonaws.com/dev",m="CURRENT_USER",l="CREATE_SESSION",u="DESTROY_SESSION",d="CREATE_USER",p="CREATE_PROFILE",h={email:"",admin:!1},g=e(71),_="INITIAL_STATE",f="CURRENT_CART",v="ADD_ITEM",b="REMOVE_ITEM",I="SUB_QUANTITY",j="ADD_QUANTITY",k="ADD_SHIPPING",G="SUB_SHIPPING",w="ADD_PROMO",y={addedItems:[],total:0,promo:{},items:[]},O="PAYMENT_INTENT",M="CREATE",z="REVIEWS",P=Object(r.c)({currentUser:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case l:return Object(s.a)(Object(s.a)({},a),{},{email:t.currentUser.email,admin:t.currentUser.admin});case u:return h;case d:return Object(s.a)(Object(s.a)({},a),{},{email:t.currentUser.email});case p:return t.data;default:return a}},cart:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;if(t.type===_)return Object(s.a)(Object(s.a)({},a),{},{items:t.items});if(t.type===f){var e=t.data.items?t.data.items.reduce((function(t,e){return t+e.quantity*a.items.find((function(a){return a.productID===e.product_id})).price}),0):0;return Object(s.a)(Object(s.a)({},a),{},{addedItems:t.data.items,total:e})}if(t.type===v){var n=a.addedItems?a.addedItems:new Array(0),c=a.items.find((function(a){return a.productID===t.data.product_id})),o=a.addedItems?a.addedItems.find((function(a){return a.product_id===t.data.product_id})):null;return o?(o.quantity+=1,Object(s.a)(Object(s.a)({},a),{},{total:a.total+c.price})):Object(s.a)(Object(s.a)({},a),{},{addedItems:[].concat(Object(g.a)(n),[t.data]),total:a.total+c.price})}if(t.type===b){var r=a.items.find((function(a){return a.productID===t.data.product_id})),i=a.addedItems.find((function(a){return a.product_id===t.data.product_id})),m=a.addedItems.filter((function(a){return a.product_id!==t.data.product_id}));return Object(s.a)(Object(s.a)({},a),{},{addedItems:m,total:a.total-r.price*i.quantity})}if(t.type===j){var l=a.items.find((function(a){return a.productID===t.data.product_id}));return a.addedItems.find((function(a){return a.product_id===t.data.product_id})).quantity+=1,Object(s.a)(Object(s.a)({},a),{},{total:a.total+l.price})}if(t.type===I){var u=a.items.find((function(a){return a.productID===t.data.product_id})),d=a.addedItems.find((function(a){return a.product_id===t.data.product_id}));if(1===d.quantity){var p=a.addedItems.filter((function(a){return a.product_id!==t.data.product_id}));return Object(s.a)(Object(s.a)({},a),{},{addedItems:p,total:a.total-u.price})}return d.quantity-=1,Object(s.a)(Object(s.a)({},a),{},{total:a.total-u.price})}if(t.type===k)return Object(s.a)(Object(s.a)({},a),{},{total:a.total+0});if(t.type===G)return Object(s.a)(Object(s.a)({},a),{},{total:a.total-0});if(t.type===w){if(t.data.error)return Object.keys(a.promo).length?Object(s.a)(Object(s.a)({},a),{},{total:a.total/(100-a.promo.percent)*100}):Object(s.a)({},a);if(Object.keys(a.promo).length){var h=a.total/(100-a.promo.percent)*100,O=h-(a.total-a.total*t.data.percent/100);return Object(s.a)(Object(s.a)({},a),{},{promo:t.date,total:h-O})}return Object(s.a)(Object(s.a)({},a),{},{promo:t.data,total:a.total-a.total*t.data.percent/100})}return a},payment:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(s.a)(Object(s.a)({},a),{},{payment:t.payment}):a},review:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===M||t.type===z?Object(s.a)(Object(s.a)({},a),{},{review:t.data}):a}}),J=e(64),T=(e(83),e(1)),E=e(6),S=e(12),D=e(0);function A(){return Object(D.jsxs)("div",{className:"maintenance",children:[Object(D.jsx)("img",{src:"/kavaglam/images/kavaglam_logo_long.svg",alt:"KAVAGLAM"}),Object(D.jsx)("ul",{children:Object(D.jsx)("li",{children:"we'll be back soon"})})]})}e(9),e(142),e(140),e(65),e(40),e(38),e(11),e(13);e(141);e(48);e(44),e(69);var R=e(33);function U(){var a=Object(o.b)();Object(o.c)((function(a){return a.currentUser}));return Object(T.useEffect)((function(){a((function(a){return fetch("".concat(i,"/auth/current_user"),{headers:{"Content-Type":"application/json"},credentials:"include",method:"GET"}).then((function(a){return a.json()})).then((function(t){t.email&&a({type:m,currentUser:t})}))})),a((function(a){return fetch("".concat(i,"/cart/current_cart"),{credentials:"include",method:"GET"}).then((function(a){return a.json()})).then((function(t){return a({type:f,data:t})}))}))}),[a]),Object(D.jsx)(E.a,{children:Object(D.jsx)(S.d,{children:Object(D.jsx)(S.b,{component:A})})})}e(116),e(117),e(118);var x=e(70),N=Object(r.d)(P,{cart:{addedItems:[],total:0,promo:{},items:[{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_conffeti.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0123.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0124.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0128.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0140.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0983.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0985.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0986.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9649.JPG"],stock:100,sale_price:68,description:"Did you say Confetti? These beauties are in the perfect pastel colours with the softest and fluffiest bristles. They are absolutely so lush! These have a way to brighten up your vanity.",price:68,productID:"Confetti Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_unicorn.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0492.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0498.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0548.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0551.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0999.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9909.JPG"],stock:100,sale_price:120,description:"Here we have our beauty glamorous unicorn set. Featuring unicorn sparkly handles with white & pink Bristles. There nothing more magical than these beauties! These brushes are one of our only full size sets",price:120,productID:"Unicorn Magic Brush Set"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_mini_pink.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0142.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0148.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0974.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9811.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9848.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9849.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9850.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9852.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9901.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9904.JPG"],stock:99,sale_price:82,description:"Pink is the new Black. Gorgeous pink handles with our twist of glam and of course with White and  pink bristles. They are seriously so soft and fluffy! This set has everything you need for your everyday look to your night out look. ",price:82,productID:"Mini Glam"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_sponge.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0994.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9898.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9899.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9913.JPG"],stock:100,sale_price:15,description:"The Beauty Sponge is the perfect way to get a flawless, professional-looking finish in seconds. Use it to blend out foundation for an almost airbrushed finish. How to use it? When wet, it becomes mega soft and mimics pores to create a natural airbrushed application easily. Plus, it absorbs water, not makeup, so your fave formulas land on your skin, not in your sponge.",price:15,productID:"Pink Sparkle Beauty Sponge"},{images:["https://kavaglam.s3.ca-central-1.amazonaws.com/main_snow_bunny.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0961.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0962.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0963.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0964.jpg","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0965.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_0981.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9900.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_9911.JPG","https://kavaglam.s3.ca-central-1.amazonaws.com/IMG_E0972.JPG"],stock:99,sale_price:58.5,description:"Here we have our snow bunny brush set. Sleek white handles with gold but of course with a touch of pink on the bristles. Minimal makeup use? These have exactly what you need for your everyday look.",price:58.5,productID:"Snow Bunny Brush Set"}]}},Object(r.a)(J.a));c.a.render(Object(D.jsx)(o.a,{store:N,children:Object(D.jsx)(R.Elements,{stripe:Object(x.a)("pk_test_evWbqvyDLVglv7QyFxkIVI9m"),children:Object(D.jsx)(U,{})})}),document.getElementById("root"))},83:function(a,t,e){}},[[121,1,2]]]);
//# sourceMappingURL=main.2c64927a.chunk.js.map