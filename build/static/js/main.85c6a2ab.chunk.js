(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{33:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(21),c=r(9),a=r(17),s=r(19),o=(r(33),r(5)),i=r(1);function l(e){return Object(i.jsxs)("div",{className:"review",children:[Object(i.jsx)("p",{children:"Rating: "+e.rating}),Object(i.jsx)("p",{style:"No Comment"===e.content?{color:"#B2B2B2"}:null,children:e.content}),Object(i.jsx)("p",{children:e.time})]})}var j=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"rateStar",children:[Object(i.jsx)("div",{className:"emptyStar",children:"\u2605\u2605\u2605\u2605\u2605"}),Object(i.jsx)("div",{className:"fullStar",style:"No Rating"===e.rate?{width:0}:{width:e.rate/5*100+"%"},children:"\u2605\u2605\u2605\u2605\u2605"})]}),Object(i.jsxs)("h2",{className:"rate",children:["Rate: ",e.rate," / ",e.rateCount," Rates"]})]})};var d=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Wrong Result? Search again with address!"}),Object(i.jsx)("button",{id:"retryBtn",onClick:function(){e.forRetryBtn(!0,e.hotel)},children:"Search Again"}),Object(i.jsxs)("p",{className:"resourceCredit",children:["Resource: ",Object(i.jsx)("span",{children:"\ud83d\udea9"})," Google Map"]})]})},u=r(25);var h=function(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),r=t[0],n=t[1],h=Object(o.useState)(null),b=Object(s.a)(h,2),p=b[0],O=b[1],m=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t,r){var a,s,o,i,l;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.hotelName,s=r.hotelAddress,o={params:{keyword:t?s:a}},e.prev=3,e.next=6,u.a.get("http://localhost:8080/merchant",o);case 6:i=e.sent,l=i.data,console.log("Log form app:",l.result),n(l.result),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(a.a)(Object(c.a)().mark((function e(){var t,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,chrome.tabs.query({active:!0,currentWindow:!0});case 2:return t=e.sent,e.next=5,chrome.tabs.sendMessage(t[0].id,{message:"Fetch Hotel Data from DOM"});case 5:r=e.sent,console.log("response from content script: ",r),O(r),m(!1,r);case 9:case"end":return e.stop()}}),e)}))),[]),r?Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{className:"merchantName",children:r.name&&r.name}),Object(i.jsx)("p",{children:r.formatted_address&&r.formatted_address}),Object(i.jsx)(j,{rate:r.rating?r.rating:"No Rating",rateCount:r.user_ratings_total?r.user_ratings_total:"No Rating Total"}),Object(i.jsx)("h4",{children:"Newest Review:"}),r.reviews?r.reviews.map((function(e,t){return Object(i.jsx)(l,{rating:e.rating,content:e.text?e.text:"No Comment",time:e.relative_time_description},t)})):"No Reviews",Object(i.jsx)(d,{hotel:p,forRetryBtn:m}),Object(i.jsx)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",children:"See on Google Map"})]}):Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("h1",{children:"Loading Hotel Info..."})})},b=document.getElementById("root");Object(n.createRoot)(b).render(Object(i.jsx)(h,{}))}},[[39,1,2]]]);
//# sourceMappingURL=main.85c6a2ab.chunk.js.map