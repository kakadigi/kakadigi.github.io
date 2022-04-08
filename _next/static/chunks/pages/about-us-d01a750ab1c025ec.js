(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2993:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(9499),i=r(4730),c=r(456),o=r(3236),s=r(1163),a=r(5893),u=["children","to"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.children;return(0,a.jsx)(o.Kq,{spacing:8,align:"center",justify:["center","space-between","flex-end","flex-end"],direction:["column","row","row","row"],pt:[4,4,0,0],children:t})};d.Item=function(e){var t=e.children,r=e.to,n=void 0===r?"/":r,c=(0,i.Z)(e,u),l=(0,s.useRouter)(),d=l.asPath===n;return(0,a.jsx)(o.rU,{onClick:function(e){e.preventDefault(),l.push(n)},style:{textDecoration:"none"},children:(0,a.jsx)(o.xv,p(p({display:"block",borderBottom:d?"3px solid black":"none",lineHeight:"36px"},c),{},{children:t}))})};var f=d,b=["image","text","size"],j=["children"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.children,r=(0,i.Z)(e,j);return(0,a.jsx)(o.kC,O(O({as:"nav",align:"center",justify:"space-between",wrap:"wrap",w:"full",mb:8,p:8},r),{},{children:t}))};h.Brand=function(e){var t=e.image,r=e.text,n=e.size,s=(0,i.Z)(e,b);return t?(0,a.jsx)(c.Ee,O({w:"full",alt:r||"Brand website"},s)):(0,a.jsx)(o.X6,O(O({size:n||"md"},s),{},{children:r||"Kakadigi"}))},h.Menu=f;var g=h},8662:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(9499),i=r(3236),c=r(9008),o=r(5893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.children,r=e.props;return(0,o.jsx)(i.W2,a(a({maxW:"container.xl"},r),{},{children:t}))};u.Header=function(e){var t=e.title,r=e.description,n=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.default,{children:[(0,o.jsx)("title",{children:t?"".concat("Kakadigi"," | ").concat(t):"Kakadigi"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,o.jsx)("meta",{name:"og:title",property:"og:title",content:t||"Karya Kami Digital"}),(0,o.jsx)("meta",{name:"description",content:r||""}),(0,o.jsx)("meta",{name:"robots",content:"index, follow"}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"})]}),n||""]})};var l=u},7077:function(e,t,r){"use strict";r.r(t);var n=r(9499),i=r(8662),c=r(2993),o=r(3236),s=r(5113),a=r(5893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(i.Z.Header,l({},e)),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(o.xu,{children:(0,a.jsx)(c.Z.Brand,{text:"Kakadigi.",fontWeight:"bold"})}),(0,a.jsxs)(c.Z.Menu,{children:[(0,a.jsx)(c.Z.Menu.Item,{children:"Home"}),(0,a.jsx)(c.Z.Menu.Item,{to:"/about-us",children:"About Us"})]}),(0,a.jsx)(o.xu,{alignContent:"end",children:(0,a.jsx)(s.zx,{borderRadius:25,colorScheme:"teal",children:"Call Us"})})]}),(0,a.jsxs)(o.gC,{w:"full",h:"full",p:10,spacing:10,alignItems:"self-start",children:[(0,a.jsx)(o.X6,{size:"md",children:"About us"}),(0,a.jsx)(o.xv,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatibus ratione assumenda necessitatibus expedita? Obcaecati iste nulla fugiat doloremque repudiandae molestiae veniam. Consectetur corporis iste cum non accusantium quibusdam quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi id aliquid consequuntur, voluptates odit blanditiis magnam, esse error pariatur unde provident, consequatur beatae consectetur quidem! Ex eligendi perspiciatis velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum necessitatibus enim assumenda harum tempore facere distinctio, non reiciendis numquam temporibus cumque aliquid natus suscipit nostrum, tenetur et dicta, vel reprehenderit!"})]})]})};p.getInitialProps=function(){return{title:"About Us",description:"Karya Kami Digital | Our profile company"}},t.default=p},9841:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return r(7077)}])}},function(e){e.O(0,[858,774,888,179],(function(){return t=9841,e(e.s=t);var t}));var t=e.O();_N_E=t}]);