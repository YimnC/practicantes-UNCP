"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[36027],{73006:(e,t,i)=>{i.d(t,{Z:()=>S});var s=i(667294),l=i(883119),a=i(401429),n=i(554786),r=i(785893);let o=({data:e,buttonType:t,calloutType:i})=>{let{accessibilityLabel:s,disabled:a,label:o}=e,c=(0,n.HG)(),d="transparent";"primary"===t&&(d="upsell"===i?"red":"gray");let u="md";switch(i){case"neutral":u=c?"sm":"md";break;case"upsell":u=c?"md":"sm";break;default:u="md"}return(0,r.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",paddingX:1,children:"link"===e.role?(0,r.jsx)(l.ZP,{accessibilityLabel:s,color:d,disabled:a,fullWidth:!0,href:e.href,onClick:e.onClick,rel:e.rel,size:u,target:e.target,text:o}):(0,r.jsx)(l.zx,{accessibilityLabel:s,color:d,disabled:a,fullWidth:!0,onClick:e.onClick,size:u,text:o})})};var c=i(140017);function d({dismissButton:e,message:t,primaryAction:i,secondaryAction:s,title:a}){let d=(0,n.HG)(),u=(0,c.ZP)(),h=e&&(0,r.jsx)(l.xu,{alignSelf:"baseline",children:(0,r.jsx)(l.hU,{accessibilityLabel:e.accessibilityLabel||u.bt("Omitir mensaje", "Dismiss callout", "experiences.ExperienceCallout.CalloutNeutral.dismissLabel", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:e.onDismiss,size:"xs"})});return(0,r.jsxs)(l.xu,{borderStyle:"sm",color:"transparent",direction:"row",display:"flex",marginBottom:4,padding:4,rounding:4,children:[(0,r.jsxs)(l.kC,{direction:d?"row":"column",width:"100%",wrap:!d,children:[(0,r.jsxs)(l.kC,{flex:"grow",justifyContent:"between",minWidth:0,children:[(0,r.jsxs)(l.kC,{direction:"column",flex:"shrink",children:[a&&(0,r.jsx)(l.xu,{marginBottom:2,children:(0,r.jsx)(l.xv,{size:"400",weight:"bold",children:a})}),(0,r.jsx)(l.xv,{children:t})]}),!d&&h]}),(i||s)&&(0,r.jsxs)(l.xu,{display:"flex",flex:"none",marginStart:"auto",marginTop:d?0:2,children:[s&&(0,r.jsx)(o,{buttonType:"secondary",calloutType:"neutral",data:s}),i&&(0,r.jsx)(o,{buttonType:"primary",calloutType:"neutral",data:i})]})]}),d&&h]})}var u=i(213377),h=i(406893);let m=(u.yF+u.lX)*u.yc-u.lX,x=Array.from(Array(u.g5-u.yc).keys()).reduce((e,t)=>{let i=t+u.yc,s=(u.yF+u.lX)*i-u.lX;return e+(0,u.KN)(u.yF,i,i,`.masonry-width-wrapper {
          width: ${s}px;
          min-width: ${s}px;
          margin: 0 auto;

        }`,u.lX)},`.masonry-width-wrapper {
      width: ${m}px;
      min-width: ${m}px;
      margin: 0 auto;

  }`),b=({children:e})=>{let t=(0,n.HG)();return(0,r.jsxs)(s.Fragment,{children:[t&&(0,r.jsx)(h.Z,{unsafeCSS:x})," ",(0,r.jsx)("div",{className:"masonry-width-wrapper",children:e})]})};var p=i(696534);function y({dismissButton:e,imageData:t,message:i,primaryAction:s,secondaryAction:a,title:d}){let u;let h=t?.component&&t.component.type===l.Ee,m=(0,n.HG)(),x=(0,c.ZP)();"string"==typeof i&&(u=(0,r.jsx)(l.xv,{children:i}));let b=x.bt("Omitir mensaje", "Dismiss callout", "experiences.ExperienceCallout.UpsellCallout.dismissLabel", undefined, true),y=e&&(0,r.jsx)(l.xu,{alignSelf:m?"center":"baseline",children:(0,r.jsx)(l.hU,{accessibilityLabel:e.accessibilityLabel||b,icon:"cancel",iconColor:"darkGray",onClick:e.onDismiss,size:"xs"})});return(0,r.jsxs)(l.xu,{borderStyle:"shadow",color:(0,p.Yc)()&&!m?"elevationFloating":"default",direction:"row",display:"flex",maxWidth:m?900:348,minWidth:m?380:348,padding:4,position:"relative",rounding:4,children:[(0,r.jsxs)(l.kC,{direction:m?"row":"column",width:"100%",wrap:!m,children:[(0,r.jsxs)(l.kC,{alignItems:m?"center":"start",flex:"grow",justifyContent:"between",minWidth:0,children:[t&&(0,r.jsx)(l.xu,{flex:"none",marginEnd:4,width:h?Math.min(t.width||128,128):void 0,children:(0,r.jsx)(l.zd,{rounding:t.mask?.rounding||0,wash:t.mask?.wash||!1,children:t.component})}),(0,r.jsx)(l.xu,{alignItems:"center",direction:"column",display:"flex",marginBottom:"auto",marginEnd:0,marginStart:0,marginTop:"auto",smDisplay:"block",smMarginEnd:6,smMarginStart:t?6:0,children:(0,r.jsxs)(l.xu,{maxWidth:648,children:[d&&(0,r.jsx)(l.xu,{marginBottom:2,children:(0,r.jsx)(l.xv,{size:"400",weight:"bold",children:d})}),u||i]})}),!m&&y]}),!!(s||a)&&(0,r.jsxs)(l.xu,{display:"flex",flex:"none",marginStart:"auto",marginTop:m?0:2,children:[a&&(0,r.jsx)(o,{buttonType:"secondary",calloutType:"upsell",data:a}),s&&(0,r.jsx)(o,{buttonType:"primary",calloutType:"upsell",data:s})]})]}),m&&y]})}var g=i(703404),f=i(444781),w=i(325362),j=i(862249),_=i(983983),k=i(33767);let v=new l.Ry(_.fe),C=new l.H3([v]),A=(e,t,i)=>e&&e.url?{label:e.text,accessibilityLabel:t,href:e.url,role:"link",rel:(0,j.Z)({url:e.url})?"nofollow":"none",onClick:i}:{label:e.text,accessibilityLabel:t,onClick:i},z=(e,t)=>{let i,s;switch(e){case 2:i="pinterest";break;case 1:i="sparkle";break;case 5:i="add";break;case 7:i="angled-pin";break;case 4:i="flashlight";break;case 3:i="search";break;case 6:i="speech-ellipsis";break;case 8:i="instagram";break;case 9:i="camera";break;case 10:i="camera-roll";break;case 11:i="board";break;case 12:i="layout";break;case 13:i="hand-pointing";break;case 14:i="share";break;case 15:i="download";break;case 16:i="shopping-bag";break;case 17:i="check";break;case 18:i="alert";break;case 19:i="bell";break;case 20:i="person";break;case 21:i="flag";break;case 22:i="lightbulb";break;case 23:i="home";break;case 24:i="speech-heart";break;case 25:i="speech-outline";break;case 26:i="heart-outline";break;case 27:i="smiley-outline";break;case 28:i="face-tryon";break;case 29:i="star-outline";break;case 30:i="ads-stats";break;default:i=void 0}switch(t){case 1:s="default";break;case 2:case 3:s="subtle";break;case 4:s="inverse";break;case 5:s="info";break;case 6:s="success";break;case 7:s="warning";break;case 8:s="error";break;case 9:s="recommendation";break;case 10:s="brandPrimary";break;case 11:s="light";break;case 12:s="dark";break;default:s=void 0}return i?(0,r.jsx)(l.JO,{accessibilityLabel:"",color:s,icon:i,size:32}):null},S=({experience:e,placementId:t,customFooterHeight:i})=>{let o=(0,n.HG)(),u=(0,c.ZP)(),{navFooterHeight:h}=(0,k.U)();return(0,r.jsx)(a.Z,{eligibleTypes:[27,28],experience:e,placementId:t,children:({complete:e,dismiss:t,experience:a})=>{let n=(0,f.Z)(w.Z)(a.display_data),c=u.bt("Omitir mensaje", "Dismiss callout", "experiences.ExperienceCallout.dismissLabel", undefined, true),m=n.completeButton?A(n.completeButton,c,()=>e()):void 0,x=n.dismissButton&&!n.dismissButton.hideDismissButton?A(n.dismissButton,c,()=>t()):void 0;switch(a.type){case 27:return(0,r.jsx)(b,{children:(0,r.jsx)(d,{dismissButton:{onDismiss:()=>t(),accessibilityLabel:c},message:(0,g.fL)(n.message),primaryAction:m,secondaryAction:x,title:n.title})});case 28:let p=z(n.icon,n.iconColor);return(0,r.jsx)(l.mh,{zIndex:C,children:(0,r.jsx)(l.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{marginBottom:o?24:(i??h)+8,transition:"margin-bottom 300ms ease-in-out"}},display:"flex",justifyContent:"center",left:!0,position:"fixed",right:!0,children:(0,r.jsx)(l.xu,{children:(0,r.jsx)(y,{dismissButton:{onDismiss:()=>t(),accessibilityLabel:c},imageData:p?{component:p}:void 0,message:(0,g.fL)(n.message),primaryAction:m,secondaryAction:x,title:n.title})})})});default:return(0,r.jsx)(s.Fragment,{})}}})}},219651:(e,t,i)=>{i.d(t,{Z:()=>C});var s=i(667294),l=i(702664),a=i(883119),n=i(401429),r=i(930837),o=i(444781),c=i(325362),d=i(554786),u=i(32346),h=i(844683),m=i(140017),x=i(30378),b=i(55202),p=i(239821),y=i(785893);let g=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},f=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function w({accessibilityModalLabel:e,allowScroll:t=!1,children:i,closeOnOutsideClick:l=!0,footer:n,isOpen:r,modalWidth:o,onDismiss:c,zIndex:d}){let w=(0,m.ZP)(),j=(0,s.useRef)(!1),{setAppFocusState:_}=(0,p.I)();return((0,s.useEffect)(()=>(j.current=(0,u.Z)(()=>{}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&j.current&&(window.cancelAnimationFrame(j.current),j.current=null)}),[]),(0,s.useEffect)(()=>(r?(x.Z.pause(),_(!1)):(x.Z.resume(),_(!0)),()=>{r&&(x.Z.resume(),_(!0))}),[_,r]),(0,s.useEffect)(()=>{let e=r&&!t;return e&&g(),()=>{e&&f()}},[r,t]),r)?(0,y.jsx)(b.Z,{children:(0,y.jsx)(a.mh,{children:(0,y.jsxs)(a.xu,{"aria-label":e,position:"relative",role:"dialog",zIndex:d||h.b7,children:[(0,y.jsx)(a.iP,{accessibilityLabel:w.bt("Máscara de modo de ventana emergente móvil", "Mobile Popup Modal Mask", "mweb.experience_popup_modal.mask", undefined, true),onTap:()=>{l&&c()},tapStyle:"none",children:(0,y.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new a.Ry(1)})}),(0,y.jsxs)(a.xu,{color:"default",dangerouslySetInlineStyle:{__style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",touchAction:"none",transitionProperty:"transform, opacity",transitionTimingFunction:"ease-out"}},overflow:"hidden",position:"fixed",rounding:4,top:!0,width:o,zIndex:new a.Ry(1),children:[i,n]})]})})}):null}var j=i(282778),_=i(983983);let k=new a.Ry(_.fe),v=new a.H3([k]);function C(e){let t=(0,l.useSelector)(({experiences:t})=>e.experience||(e.placementId?t[e.placementId]:void 0)),i=t?.display_data?.delay_in_millis,[u,h]=(0,s.useState)(t&&!i),m=(0,d.HG)();return(0,s.useEffect)(()=>{h(t&&!t.display_data?.delay_in_millis)},[t]),(0,s.useEffect)(()=>{let e;return i&&(e=setTimeout(()=>{h(!0)},i)),()=>clearTimeout(e)},[i]),(0,y.jsx)(s.Fragment,{children:u&&(0,y.jsx)(n.Z,{eligibleTypes:[26],experience:t,placementId:e.placementId,children:({complete:e,dismiss:t,experience:{display_data:i}})=>{let s=(0,o.Z)(c.Z)(i),{title:l,body:n,completeButton:d}=s;return l&&n&&d.text?m?(0,y.jsx)(a.mh,{zIndex:v,children:(0,y.jsx)(r.ZP,{accessibilityModalLabel:"",onDismiss:t,size:"sm",children:(0,y.jsx)(j.Z,{displayData:s,handleComplete:e,handleDismiss:t,isMobile:!1})})}):(0,y.jsx)(w,{accessibilityModalLabel:s?.title,isOpen:!0,modalWidth:320,onDismiss:t,children:(0,y.jsx)(j.Z,{displayData:s,handleComplete:e,handleDismiss:t,isMobile:!0})}):null}})})}},588664:(e,t,i)=>{i.d(t,{Z:()=>s});function s(e,t,i=28){let s;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;s=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let l=new Date,a=s?new Date(s):l;return a.setDate(a.getDate()+i),new Date().getTime()<a.getTime()}},33767:(e,t,i)=>{i.d(t,{U:()=>h,m:()=>m});var s=i(667294),l=i(702664),a=i(342513),n=i(422210),r=i(588664),o=i(340523),c=i(149722),d=i(785893);let{Provider:u,useHook:h}=(0,a.Z)("NavFooterContext");function m({children:e}){let[t,i]=(0,s.useState)(),[a,h]=(0,s.useState)(!1),[m,x]=(0,s.useState)(0),[b,p]=(0,s.useState)(!1),[y,g]=(0,s.useState)(!1),[f,w]=(0,s.useState)(!1),[j,_]=(0,s.useState)(!1),{checkExperiment:k}=(0,o.F)(),v=(0,r.Z)(null,(0,c.Z)()),C=(0,l.useSelector)(e=>e.session.isAuthenticated),A=(0,l.useSelector)(e=>C?e.users[e.session.userId]:void 0),z=(0,n.Z)(A?.created_at),S=k("mweb_modernize_navbar").anyEnabled,Z=C&&(S&&v||z);return(0,d.jsx)(u,{value:{forceShowNavFooter:f,homeFlyoutText:t,isNavFooterHiddenAfterScroll:a,isNavFooterHiddenByPinActionBar:j,navFooterHeight:a?0:S?Z?64:52:60,numUnauthSavedPins:m,setForceShowNavFooter:w,setHomeFlyoutText:i,setIsNavFooterHiddenAfterScroll:h,setIsNavFooterHiddenByPinActionBar:_,setNumUnauthSavedPins:x,setShowHomeBadge:p,setShowHomeFlyoutWithButton:g,showHomeBadge:b,showHomeFlyoutWithButton:y},children:e})}},282778:(e,t,i)=>{i.d(t,{Z:()=>f});var s=i(667294),l=i(240684),a=i(883119),n=i(140017),r=i(862249),o=i(983983),c=i(785893);let d=new a.Ry(o.fe),u=new a.H3([d]),h=new a.H3([u]),m={modalMargin:24,gestaltModalMargin:6,closeButtonMargin:6},x={width:540,height:363},b={modalMargin:24,gestaltModalMargin:6,closeButtonMargin:4},p={width:320,height:215},y=(0,l.ZP)({resolved:{},chunkName:()=>"app-www-video-VideoWrapper",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.all([i.e(93041),i.e(84452),i.e(95813)]).then(i.bind(i,131348)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return i(t)},resolve:()=>131348}),g=e=>{let{isMobile:t,image:i,video:s,handleDismiss:l,title:r}=e,o=(0,n.ZP)(),d=t?b:m,u=t?p:x,g=(0,c.jsx)(a.xu,{display:"flex",justifyContent:t?"start":"end",margin:d.closeButtonMargin,position:"absolute",width:u.width-2*d.modalMargin,zIndex:h,children:(0,c.jsx)(a.hU,{accessibilityLabel:o.bt("Omitir", "Dismiss", "experiences.ExperienceModalWindow.modalDismissIconButton", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:l,size:"sm"})}),f=i?i.imageAlt:r,w=i?i.url:s?.metadata?.thumbnail,j=i?.dominantColor?.length===3?`rgb(${i.dominantColor[0]}, ${i.dominantColor[1]}, ${i.dominantColor[2]})`:"rgb(111, 91, 77)",_=u.width/u.height,k={width:u.width,height:u.height};i&&i.width&&i.height?(_=i.width/i.height,k={width:i.width,height:i.height}):s&&s.metadata.width&&s.metadata.height&&(_=s.metadata.width/s.metadata.height,k={width:s.metadata.width,height:s.metadata.height});let v=w&&(0,c.jsx)(a.Ee,{alt:f||"",color:j,fit:"cover",naturalHeight:k.height,naturalWidth:k.width,src:w}),C=Math.trunc(u.width/_);return(0,c.jsxs)(a.xu,{bottom:!0,height:C,left:!0,overflow:"hidden",right:!0,top:!0,width:u.width,children:[g,i&&v,s&&(0,c.jsx)(y,{aspectRatio:_,captions:"",controls:!1,fallback:v,isAutoPlay:!0,loop:!0,objectFit:"cover",onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:i?.url||s.metadata.thumbnail,src:s.url,volume:0})]})};function f(e){let{displayData:t,handleComplete:i,handleDismiss:l,isMobile:n}=e,{video:o,image:d,title:u,body:h,completeButton:x,dismissButton:p}=t,y=n?"center":"start",f=(0,r.Z)({url:x.url});return(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(g,{handleDismiss:l,image:d,isMobile:n,title:u,video:o}),(0,c.jsxs)(a.xu,{direction:"column",display:"flex",justifyContent:"center",margin:(n?b:m).gestaltModalMargin,children:[(0,c.jsx)(a.X6,{align:y,children:u}),(0,c.jsx)(a.xu,{marginBottom:4,marginTop:2,children:(0,c.jsx)(a.xv,{align:y,children:h})}),(0,c.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:{flexWrap:"wrap-reverse"}},display:"flex",justifyContent:n?"center":"end",margin:-1,children:[p&&!p.hideDismissButton&&(0,c.jsx)(a.xu,{fit:!0,flex:n?"grow":"none",minWidth:n?130:void 0,padding:1,children:(0,c.jsx)(a.zx,{color:"gray",fullWidth:n,onClick:l,size:"lg",text:p.text})}),x&&(0,c.jsx)(a.xu,{fit:!0,flex:n?"grow":"none",minWidth:n?130:void 0,padding:1,children:x.url?(0,c.jsx)(a.ZP,{color:"red",fullWidth:n,href:x.url,onClick:()=>i(),rel:f?"nofollow":"none",size:"lg",text:x.text}):(0,c.jsx)(a.zx,{color:"red",fullWidth:n,onClick:()=>i(),size:"lg",text:x.text})})]})]})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/36027.es_ES-7a29ce80021b0867.mjs.map