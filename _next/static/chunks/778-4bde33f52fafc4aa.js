(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{5113:function(e,t,r){"use strict";r.d(t,{zx:function(){return T}});var n=r(7375),a=r(2846),i=r(5031),o=r(8554),s=r.n(o),c=r(7294),l=r(6450),u=r(917),d={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},p=(0,a.m$)("span",{baseStyle:d});i.Ts&&(p.displayName="VisuallyHidden");var f=(0,a.m$)("input",{baseStyle:d});i.Ts&&(f.displayName="VisuallyHiddenInput");function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var v=["label","thickness","speed","emptyColor","className"],h=(0,u.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),g=(0,a.Gp)((function(e,t){var r=(0,a.mq)("Spinner",e),n=(0,a.Lr)(e),o=n.label,s=void 0===o?"Loading...":o,l=n.thickness,u=void 0===l?"2px":l,d=n.speed,f=void 0===d?"0.45s":d,g=n.emptyColor,y=void 0===g?"transparent":g,b=n.className,x=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,v),_=(0,i.cx)("chakra-spinner",b),k=m({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:u,borderBottomColor:y,borderLeftColor:y,animation:h+" "+f+" linear infinite"},r);return c.createElement(a.m$.div,m({ref:t,__css:k,className:_},x),s&&c.createElement(p,null,s))}));function y(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}i.Ts&&(g.displayName="Spinner");var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],_=(0,l.kr)({strict:!1,name:"ButtonGroupContext"}),k=_[0],N=_[1],w=(0,a.Gp)((function(e,t){var r=e.size,n=e.colorScheme,o=e.variant,s=e.className,l=e.spacing,u=void 0===l?"0.5rem":l,d=e.isAttached,p=e.isDisabled,f=y(e,x),m=(0,i.cx)("chakra-button__group",s),v=c.useMemo((function(){return{size:r,colorScheme:n,variant:o,isDisabled:p}}),[r,n,o,p]),h={display:"inline-flex"};return h=b({},h,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(k,{value:v},c.createElement(a.m$.div,b({ref:t,role:"group",__css:h,className:m},f)))}));i.Ts&&(w.displayName="ButtonGroup");var E=["label","placement","spacing","children","className","__css"],C=function(e){var t=e.label,r=e.placement,n=e.spacing,o=void 0===n?"0.5rem":n,s=e.children,l=void 0===s?c.createElement(g,{color:"currentColor",width:"1em",height:"1em"}):s,u=e.className,d=e.__css,p=y(e,E),f=(0,i.cx)("chakra-button__spinner",u),m="start"===r?"marginEnd":"marginStart",v=c.useMemo((function(){var e;return b(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[m]=t?o:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,t,m,o]);return c.createElement(a.m$.div,b({className:f},p,{__css:v}),l)};i.Ts&&(C.displayName="ButtonSpinner");var O=["children","className"],S=function(e){var t=e.children,r=e.className,n=y(e,O),o=c.isValidElement(t)?c.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,i.cx)("chakra-button__icon",r);return c.createElement(a.m$.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:s}),o)};i.Ts&&(S.displayName="ButtonIcon");var j=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],T=(0,a.Gp)((function(e,t){var r=N(),o=(0,a.mq)("Button",b({},r,e)),l=(0,a.Lr)(e),u=l.isDisabled,d=void 0===u?null==r?void 0:r.isDisabled:u,p=l.isLoading,f=l.isActive,m=l.isFullWidth,v=l.children,h=l.leftIcon,g=l.rightIcon,x=l.loadingText,_=l.iconSpacing,k=void 0===_?"0.5rem":_,w=l.type,E=l.spinner,O=l.spinnerPlacement,S=void 0===O?"start":O,T=l.className,L=l.as,G=y(l,j),I=c.useMemo((function(){var e,t=s()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return b({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:m?"100%":"auto"},o,!!r&&{_focus:t})}),[o,r,m]),P=function(e){var t=c.useState(!e),r=t[0],n=t[1];return{ref:c.useCallback((function(e){e&&n("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(L),W=P.ref,R=P.type,B={rightIcon:g,leftIcon:h,iconSpacing:k,children:v};return c.createElement(a.m$.button,b({disabled:d||p,ref:(0,n.qq)(t,W),as:L,type:null!=w?w:R,"data-active":(0,i.PB)(f),"data-loading":(0,i.PB)(p),__css:I,className:(0,i.cx)("chakra-button",T)},G),p&&"start"===S&&c.createElement(C,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:k},E),p?x||c.createElement(a.m$.span,{opacity:0},c.createElement(M,B)):c.createElement(M,B),p&&"end"===S&&c.createElement(C,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:k},E))}));function M(e){var t=e.leftIcon,r=e.rightIcon,n=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,t&&c.createElement(S,{marginEnd:a},t),n,r&&c.createElement(S,{marginStart:a},r))}i.Ts&&(T.displayName="Button");var L=["icon","children","isRound","aria-label"],G=(0,a.Gp)((function(e,t){var r=e.icon,n=e.children,a=e.isRound,i=e["aria-label"],o=y(e,L),s=r||n,l=c.isValidElement(s)?c.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(T,b({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},o),l)}));i.Ts&&(G.displayName="IconButton")},456:function(e,t,r){"use strict";r.d(t,{Ee:function(){return p}});var n=r(2846),a=r(5031),i=r(7294),o=r(4697);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=i.forwardRef((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,o=c(e,l);return i.createElement("img",s({width:r,height:n,ref:t,alt:a},o))})),p=(0,n.Gp)((function(e,t){var r=e.fallbackSrc,l=e.fallback,p=e.src,f=e.srcSet,m=e.align,v=e.fit,h=e.loading,g=e.ignoreFallback,y=e.crossOrigin,b=c(e,u),x=null!=h||g||void 0===r&&void 0===l,_=function(e){var t=e.loading,r=e.src,n=e.srcSet,a=e.onLoad,s=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,i.useState)("pending"),p=d[0],f=d[1];(0,i.useEffect)((function(){f(r?"loading":"pending")}),[r]);var m=(0,i.useRef)(),v=(0,i.useCallback)((function(){if(r){h();var e=new Image;e.src=r,c&&(e.crossOrigin=c),n&&(e.srcset=n),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){h(),f("loaded"),null==a||a(e)},e.onerror=function(e){h(),f("failed"),null==s||s(e)},m.current=e}}),[r,c,n,l,a,s,t]),h=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===p&&v(),function(){h()}}),[p,v,u]),u?"loaded":p}(s({},e,{ignoreFallback:x})),k=s({ref:t,objectFit:v,objectPosition:m},x?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==_?l||i.createElement(n.m$.img,s({as:d,className:"chakra-image__placeholder",src:r},k)):i.createElement(n.m$.img,s({as:d,src:p,srcSet:f,crossOrigin:y,loading:h,className:"chakra-image"},k))}));a.Ts&&(p.displayName="Image")},3236:function(e,t,r){"use strict";r.d(t,{xu:function(){return x},W2:function(){return O},kC:function(){return L},X6:function(){return W},rU:function(){return A},Kq:function(){return ae},xv:function(){return ce},gC:function(){return oe}});var n=r(2846),a=r(4244),i=r(5031),o=r(7294);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}var c=["as","viewBox","color","focusable","children","className","__css"],l={path:o.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},o.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),o.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),o.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,n.Gp)((function(e,t){var r=e.as,a=e.viewBox,u=e.color,d=void 0===u?"currentColor":u,p=e.focusable,f=void 0!==p&&p,m=e.children,v=e.className,h=e.__css,g=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,c),y={ref:t,focusable:f,className:(0,i.cx)("chakra-icon",v),__css:s({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},h)},b=null!=a?a:l.viewBox;if(r&&"string"!==typeof r)return o.createElement(n.m$.svg,s({as:r},y,g));var x=null!=m?m:l.path;return o.createElement(n.m$.svg,s({verticalAlign:"middle",viewBox:b},y,g),x)}));i.Ts&&(u.displayName="Icon");var d=r(6450);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var m=["ratio","children","className"],v=(0,n.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,s=e.children,c=e.className,l=f(e,m),u=o.Children.only(s),d=(0,i.cx)("chakra-aspect-ratio",c);return o.createElement(n.m$.div,p({ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},l),u)}));i.Ts&&(v.displayName="AspectRatio");var h=["className"],g=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var s=f(a,h);return o.createElement(n.m$.span,p({ref:t,className:(0,i.cx)("chakra-badge",e.className)},s,{__css:p({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));i.Ts&&(g.displayName="Badge");var y=["size","centerContent"],b=["size"],x=(0,n.m$)("div");i.Ts&&(x.displayName="Box");var _=(0,n.Gp)((function(e,t){var r=e.size,n=e.centerContent,a=void 0===n||n,i=f(e,y),s=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(x,p({ref:t,boxSize:r,__css:p({},s,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(_.displayName="Square");var k=(0,n.Gp)((function(e,t){var r=e.size,n=f(e,b);return o.createElement(_,p({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(k.displayName="Circle");var N=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(N.displayName="Center");var w=["className"],E=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var s=f(a,w);return o.createElement(n.m$.code,p({ref:t,className:(0,i.cx)("chakra-code",e.className)},s,{__css:p({display:"inline-block"},r)}))}));i.Ts&&(E.displayName="Code");var C=["className","centerContent"],O=(0,n.Gp)((function(e,t){var r=(0,n.Lr)(e),a=r.className,s=r.centerContent,c=f(r,C),l=(0,n.mq)("Container",e);return o.createElement(n.m$.div,p({ref:t,className:(0,i.cx)("chakra-container",a)},c,{__css:p({},l,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(O.displayName="Container");var S=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],j=["className","orientation","__css"],T=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Divider",e),a=r.borderLeftWidth,s=r.borderBottomWidth,c=r.borderTopWidth,l=r.borderRightWidth,u=r.borderWidth,d=r.borderStyle,m=r.borderColor,v=f(r,S),h=(0,n.Lr)(e),g=h.className,y=h.orientation,b=void 0===y?"horizontal":y,x=h.__css,_=f(h,j),k={vertical:{borderLeftWidth:a||l||u||"1px",height:"100%"},horizontal:{borderBottomWidth:s||c||u||"1px",width:"100%"}};return o.createElement(n.m$.hr,p({ref:t,"aria-orientation":b},_,{__css:p({},v,{border:"0",borderColor:m,borderStyle:d},k[b],x),className:(0,i.cx)("chakra-divider",g)}))}));i.Ts&&(T.displayName="Divider");var M=["direction","align","justify","wrap","basis","grow","shrink"],L=(0,n.Gp)((function(e,t){var r=e.direction,a=e.align,i=e.justify,s=e.wrap,c=e.basis,l=e.grow,u=e.shrink,d=f(e,M),m={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:c,flexGrow:l,flexShrink:u};return o.createElement(n.m$.div,p({ref:t,__css:m},d))}));i.Ts&&(L.displayName="Flex");var G=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],I=(0,n.Gp)((function(e,t){var r=e.area,a=e.templateAreas,i=e.gap,s=e.rowGap,c=e.columnGap,l=e.column,u=e.row,d=e.autoFlow,m=e.autoRows,v=e.templateRows,h=e.autoColumns,g=e.templateColumns,y=f(e,G),b={display:"grid",gridArea:r,gridTemplateAreas:a,gridGap:i,gridRowGap:s,gridColumnGap:c,gridAutoColumns:h,gridColumn:l,gridRow:u,gridAutoFlow:d,gridAutoRows:m,gridTemplateRows:v,gridTemplateColumns:g};return o.createElement(n.m$.div,p({ref:t,__css:b},y))}));i.Ts&&(I.displayName="Grid");var P=["className"],W=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var s=f(a,P);return o.createElement(n.m$.h2,p({ref:t,className:(0,i.cx)("chakra-heading",e.className)},s,{__css:r}))}));i.Ts&&(W.displayName="Heading");var R=["className"],B=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),s=a.className,c=f(a,R);return o.createElement(n.m$.kbd,p({ref:t,className:(0,i.cx)("chakra-kbd",s)},c,{__css:p({fontFamily:"mono"},r)}))}));i.Ts&&(B.displayName="Kbd");var $=["className","isExternal"],A=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Link",e),a=(0,n.Lr)(e),s=a.className,c=a.isExternal,l=f(a,$);return o.createElement(n.m$.a,p({target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",s)},l,{__css:r}))}));i.Ts&&(A.displayName="Link");var D=["children","styleType","stylePosition","spacing"],F=["as"],H=["as"],z=(0,d.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),q=z[0],X=z[1],U=(0,n.Gp)((function(e,t){var r,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),s=i.children,c=i.styleType,l=void 0===c?"none":c,u=i.stylePosition,m=i.spacing,v=f(i,D),h=(0,d.WR)(s),g=m?((r={})["& > *:not(style) ~ *:not(style)"]={mt:m},r):{};return o.createElement(q,{value:a},o.createElement(n.m$.ul,p({ref:t,listStyleType:l,listStylePosition:u,role:"list",__css:p({},a.container,g)},v),h))}));i.Ts&&(U.displayName="List");var Q=(0,n.Gp)((function(e,t){e.as;var r=f(e,F);return o.createElement(U,p({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));i.Ts&&(Q.displayName="OrderedList");var K=(0,n.Gp)((function(e,t){e.as;var r=f(e,H);return o.createElement(U,p({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));i.Ts&&(K.displayName="UnorderedList");var Y=(0,n.Gp)((function(e,t){var r=X();return o.createElement(n.m$.li,p({ref:t},e,{__css:r.item}))}));i.Ts&&(Y.displayName="ListItem");var V=(0,n.Gp)((function(e,t){var r=X();return o.createElement(u,p({ref:t,role:"presentation"},e,{__css:r.icon}))}));i.Ts&&(V.displayName="ListIcon");var Z=["columns","spacingX","spacingY","spacing","minChildWidth"],J=(0,n.Gp)((function(e,t){var r,n,a=e.columns,s=e.spacingX,c=e.spacingY,l=e.spacing,u=e.minChildWidth,d=f(e,Z),m=u?(n=u,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,i.hj)(t)?t+"px":t)+", 1fr))");var t}))):(r=a,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(I,p({ref:t,gap:l,columnGap:s,rowGap:c,templateColumns:m},d))}));i.Ts&&(J.displayName="SimpleGrid");var ee=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var te="& > *:not(style) ~ *:not(style)";var re=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ne=function(e){return o.createElement(n.m$.div,p({className:"chakra-stack__item"},e,{__css:p({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ae=(0,n.Gp)((function(e,t){var r,a=e.isInline,s=e.direction,c=e.align,l=e.justify,u=e.spacing,m=void 0===u?"0.5rem":u,v=e.wrap,h=e.children,g=e.divider,y=e.className,b=e.shouldWrapChildren,x=f(e,re),_=a?"row":null!=s?s:"column",k=o.useMemo((function(){return function(e){var t,r=e.spacing,n=e.direction,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(t={flexDirection:n})[te]=(0,i.XQ)(n,(function(e){return a[e]})),t}({direction:_,spacing:m})}),[_,m]),N=o.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(r,(function(e){return n[e]}))}}({spacing:m,direction:_})}),[m,_]),w=!!g,E=!b&&!w,C=(0,d.WR)(h),O=E?C:C.map((function(e,t){var r="undefined"!==typeof e.key?e.key:t,n=t+1===C.length,a=b?o.createElement(ne,{key:r},e):e;if(!w)return a;var i=n?null:o.cloneElement(g,{__css:N});return o.createElement(o.Fragment,{key:r},a,i)})),S=(0,i.cx)("chakra-stack",y);return o.createElement(n.m$.div,p({ref:t,display:"flex",alignItems:c,justifyContent:l,flexDirection:k.flexDirection,flexWrap:v,className:S,__css:w?{}:(r={},r[te]=k[te],r)},x),O)}));i.Ts&&(ae.displayName="Stack");var ie=(0,n.Gp)((function(e,t){return o.createElement(ae,p({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(ie.displayName="HStack");var oe=(0,n.Gp)((function(e,t){return o.createElement(ae,p({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(oe.displayName="VStack");var se=["className","align","decoration","casing"],ce=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var s=f(a,se),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,p({ref:t,className:(0,i.cx)("chakra-text",e.className)},c,s,{__css:r}))}));i.Ts&&(ce.displayName="Text");var le=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],ue=["className"],de=(0,n.Gp)((function(e,t){var r=e.spacing,s=void 0===r?"0.5rem":r,c=e.spacingX,l=e.spacingY,u=e.children,d=e.justify,m=e.direction,v=e.align,h=e.className,g=e.shouldWrapChildren,y=f(e,le),b=o.useMemo((function(){var e={spacingX:c,spacingY:l},t=e.spacingX,r=void 0===t?s:t,n=e.spacingY,o=void 0===n?s:n;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(r,(function(t){return(0,a.fr)("space",t)(e)}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(o,(function(t){return(0,a.fr)("space",t)(e)}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:v,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[s,c,l,d,v,m]),x=g?o.Children.map(u,(function(e,t){return o.createElement(pe,{key:t},e)})):u;return o.createElement(n.m$.div,p({ref:t,className:(0,i.cx)("chakra-wrap",h)},y),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:b},x))}));i.Ts&&(de.displayName="Wrap");var pe=(0,n.Gp)((function(e,t){var r=e.className,a=f(e,ue);return o.createElement(n.m$.li,p({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",r)},a))}));i.Ts&&(pe.displayName="WrapItem")},7913:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},o=r(2199),s=r(1587),c=r(7215);var l={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),d=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),r=n(t,2),i=r[0],s=r[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),p=d.href,f=d.as,m=e.children,v=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),_=n(x,2),k=_[0],N=_[1],w=i.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);i.default.useEffect((function(){var e=N&&r&&o.isLocalURL(p),t="undefined"!==typeof y?y:a&&a.locale,n=l[p+"%"+f+(t?"%"+t:"")];e&&!n&&u(a,p,f,{locale:t})}),[f,p,N,y,r,a]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}))}(e,a,p,f,v,h,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(p)&&u(a,p,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof y?y:a&&a.locale,O=a&&a.isLocaleDomain&&o.getDomainLocale(f,C,a&&a.locales,a&&a.domainLocales);E.href=O||o.addBasePath(o.addLocale(f,C,a&&a.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7215:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!o,u=a.useRef(),d=a.useState(!1),p=n(d,2),f=p[0],m=p[1],v=a.useState(t?t.current:null),h=n(v,2),g=h[0],y=h[1],b=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:i,elements:a}),t}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:g,rootMargin:r}))}),[l,g,r,f]);return a.useEffect((function(){if(!o&&!f){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&y(t.current)}),[t]),[b,f]};var a=r(7294),i=r(8065),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},i=r(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return r||a&&o}},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(i=r(148))&&i.__esModule?i:{default:i},c=r(7285),l=r(523),u=r(9546);r(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?i=!1:r.add(u);else{var d=a.props[u],p=n[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),n[u]=p):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,r=o.useContext(c.AmpStateContext),n=o.useContext(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:u.isInAmpMode(r)},t)};t.default=v},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),i=r(8361),o=(r(2191),r(5971)),s=r(2715),c=r(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var d=function(e){o(r,e);var t=l(r);function r(e){var i;return a(this,r),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},9008:function(e,t,r){e.exports=r(6505)},1664:function(e,t,r){e.exports=r(7913)},4730:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})}}]);