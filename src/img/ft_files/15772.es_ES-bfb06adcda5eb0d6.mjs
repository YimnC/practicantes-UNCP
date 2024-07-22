"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[15772,89870],{612435:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(667294),a=i(614792),n=i(785893);function r({page:e,children:t}){let i=(0,o.useMemo)(()=>({logging:{viewType:"login"===e&&9||"businessLogin"===e&&267||void 0},pageType:e}),[e]);return(0,n.jsx)(o.Fragment,{children:(0,n.jsx)(a.Mi,{value:i,children:t})})}},214274:(e,t,i)=>{i.d(t,{Z:()=>o});let o='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif'},610954:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),a=i(140017),n=i(785893);function r({accessibilityLabel:e,fixedPosition:t,rounding:i}){let r=(0,a.ZP)();return(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(o.xu,{alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,opacity:1,position:t?"fixed":"absolute",right:!0,top:!0,zIndex:new o.Ry(101),children:(0,n.jsx)(o.$j,{accessibilityLabel:e||r.bt("Cargando", "Loading", "Label for loading spinner", undefined, true),show:!0})}),(0,n.jsx)(o.xu,{bottom:!0,color:"default",left:!0,opacity:.7,position:t?"fixed":"absolute",right:!0,rounding:i,top:!0,zIndex:new o.Ry(100)})]})}},378720:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(667294);let a=()=>{let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{t(!0)},[]),e}},120726:(e,t,i)=>{i.d(t,{E:()=>s,Z:()=>p});var o=i(883119),a=i(140017),n=i(339001),r=i(340523),l=i(702497),c=i(785893);let s=`
.TermsOfService__light a {
  color: rgba(255,255,255,0.9);
}
`,d={dark:{color:"#767676",width:"224px"},light:{color:"rgba(255,255,255,0.9)",lineHeight:"150%",margin:"10px auto",textShadow:"0 1px rgba(0,0,0,0.18)",width:"272px"},revampedBizSignup:{color:"#5f5f5f",fontSize:"12px",fontWeight:"400"}};function p({dark:e,container:t="",isSignupStep:i=!1}){let s;let p=(0,a.ZP)(),{checkExperiment:g}=(0,r.F)();s="revamped_business_login_page"===t?"revampedBizSignup":e?"dark":"light";let h=(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{fontWeight:"bold",..."revampedBizSignup"!==s&&{color:"#111"}}},"data-test-id":"tos",display:"inlineBlock",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:l.U5h,target:"blank",underline:"hover",children:p.bt("Términos del servicio", "Terms of Service", "termOfService.link.tos", undefined, true)},"tos")},"tos"),f=(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{fontWeight:"bold",..."revampedBizSignup"!==s&&{color:"#111"}}},"data-test-id":"privacy",display:"inlineBlock",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:"/_/_/policy/privacy-policy/",target:"blank",underline:"hover",children:p.bt("Política de privacidad", "Privacy Policy", "termOfService.link.privacyPolicy", undefined, true)},"privacy")},"privacy");return(0,c.jsx)(o.xu,{marginTop:3,children:(0,c.jsx)("span",{className:e?"":"TermsOfService__light",color:"revampedBizSignup"===s?"subtle":void 0,"data-test-id":"terms-of-service",style:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontSize:"11px",fontWeight:"normal",textAlign:"center",WebkitTransition:"opacity .2s linear",transition:"opacity .2s linear",...d[s]},children:(0,c.jsx)("span",{children:i&&g("fdbr_teen_compliance").anyEnabled?(0,n.nk)(p.bt("Si continúas, aceptas los {{ tos }} de Pinterest y confirmas que has leído nuestra {{ privacyPolicy }}. Si eres un usuario de Florida menor de 18 años, también aceptas el procesamiento de tu información personal. Para desactivar esta opción, puedes {{deleteYourAccount}}.", "By continuing, you agree to Pinterest's {{ tos }} and acknowledge you've read our {{ privacyPolicy }}. If you're a Florida user under 18 years old, you also opt in to the processing of your personal information. To opt out, you can {{deleteYourAccount}}.", "termOfService.text.floridaCompliance", undefined, true),{tos:h,privacyPolicy:f,deleteYourAccount:(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{fontWeight:"bold",..."revampedBizSignup"!==s&&{color:"#111"}}},"data-test-id":"deleteYourAccount",display:"inlineBlock",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:l.QA0,target:"blank",underline:"hover",children:p.bt("eliminar tu cuenta", "delete your account", "termOfService.link.deleteYourAccount", undefined, true)},"deleteYourAccount")},"deleteYourAccount")}):(0,n.nk)(p.bt("Si continúas, aceptas los {{ tos }} de Pinterest y confirmas que has leído nuestra {{ privacyPolicy }}. {{ noticeAtCollection }}.", "By continuing, you agree to Pinterest's {{ tos }} and acknowledge you've read our {{ privacyPolicy }}. {{ noticeAtCollection }}.", "termOfService.text.default", undefined, true),{tos:h,privacyPolicy:f,noticeAtCollection:(0,c.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{fontWeight:"bold",..."revampedBizSignup"!==s&&{color:"#111"}}},"data-test-id":"noticeAtCollection",display:"inlineBlock",children:(0,c.jsx)(o.rU,{display:"inlineBlock",href:l.cvl,target:"blank",underline:"hover",children:p.bt("Aviso de recopilación de datos", "Notice at collection", "termOfService.link.noticeAtCollection", undefined, true)},"noticeAtCollection")},"noticeAtCollection")})})})})}},661641:(e,t,i)=>{i.d(t,{Z:()=>n,g:()=>a});var o=i(785893);let a=`
.Tooltip_message:before, .Tooltip_message:after {
  border-style: solid;
  content: '';
  display: block;
  margin-top: -8px;
  position: absolute;
  right: 100%;
  top: 17px;
  width: 0;
}
.Tooltip_message:before {
  border-color: transparent rgba(0,0,0,0.48);
  border-width: 8px 10px 8px 0;
}
.Tooltip_message:after {
  border-color: transparent #fff;
  border-width: 8px 10px 8px 0;
  margin-right: -1px;
}
.Tooltip_mobileMessage:before, .Tooltip_message:after {
  border-style: solid;
  display: block;
  margin-top: -8px;
  position: absolute;
  right: 100%;
  top: 17px;
  width: 0;
}
.Tooltip_mobileMessage:before {
  border-color: transparent rgba(0,0,0,0.48);
  border-width: 8px 10px 8px 0;
}
.Tooltip_mobileMessage:after {
  border-color: transparent #fff;
  border-width: 8px 10px 8px 0;
  margin-right: -1px;
}
.Tooltip_wrapper {
  position: absolute;
  left: calc(100% + 12px);
  z-index: 1;
}
.Tooltip_mobileWrapper {
  margin-top: 7px;
  z-index: 1;
}
`;function n({message:e,color:t}){return(0,o.jsx)("div",{className:"Tooltip_wrapper","data-test-id":"tooltip",style:{top:"0px",width:"215px"},children:(0,o.jsx)("div",{className:"Tooltip_message",style:{background:t||"#fff",borderRadius:"6px",WebkitBoxShadow:"0 0 2px rgba(0,0,0,0.38),0 1px 3px rgba(0,0,0,0.32)",boxShadow:"0 0 2px rgba(0,0,0,0.38),0 1px 3px rgba(0,0,0,0.32)",color:t?"#fff":"#000",fontStyle:"normal",fontWeight:"normal",fontSize:t?"14px":"",lineHeight:"150%",padding:"8px 14px",textAlign:"left",maxWidth:"215px",display:"inline-block",float:"left"},children:(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:e},style:{overflowWrap:"break-word",wordWrap:"break-word"}})})})}},999586:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(120726),a=i(661641);let n=[a.g,o.E].join("")},273523:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(214274);let a=`
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
ul {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
}

html {
  font-size: 100%;
  text-size-adjust: none;
}

a:hover,
a:active {
  outline: 0;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

img {
  max-width: 100%;
  width: auto;
  height: auto;

  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

#map_canvas img {
  max-width: none;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: middle;
}
button,
input {
  overflow: visible;
  line-height: normal;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button,
input[type='button'],
input[type='reset'],
input[type='submit'] {
  cursor: pointer;
  -webkit-appearance: button;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
body {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
figure {
  margin: 0;
}`,n=`
html {
  background-color: #fff;
}

html, body {
  font-family: ${o.Z};
  color: rgb(33, 25, 34);
  font-size: 12px;
  height: 100%;
}

body {
  position: relative;
  overflow-y: overlay;
  overflow-x: hidden;
}

input::-ms-clear {
  display: none;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
  padding: 0;
}

:focus {
  outline: #d1d1d1 auto 1px
}

button, input, select, textarea {
  font-family: ${o.Z};
  font-size: 100%;
  vertical-align: middle;
  margin: 0px;
}

.SkipToContent {
  display: none;
}
`,r=a+n},596227:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(883119),a=i(378720),n=i(883211),r=i(785893);function l({isFlexible:e,images:t}){let i=(0,a.Z)();return i&&(0,r.jsx)(o.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},left:!0,maxHeight:2500,overflow:"hidden",paddingX:5,paddingY:6,position:"absolute",right:!0,top:!0,children:(0,r.jsx)(o.Rk,{gutterWidth:16,items:t??n.Z,layout:e?"flexible":"basic",minCols:2,renderItem:({data:{height:e,url:t,width:i}})=>(0,r.jsx)(o.zd,{rounding:4,wash:!0,children:(0,r.jsx)(o.Ee,{alt:"pin-image",naturalHeight:e??1,naturalWidth:i??1,src:t??""})})})})}},883211:(e,t,i)=>{i.d(t,{Z:()=>o});let o=[{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/83/39/1e/83391e3103e17a46e2733b09bf154a06.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/87/f7/b5/87f7b55bc3de78ef95fd36fa3a237172.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/d3/49/07/d34907c96950574c15719219e0f0dd69.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/49/ad/71/49ad71817c829e8d86ca16fa6508b0c4.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/a8/7f/53/a87f53ea636966bf24cf279ed2fdc4dc.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/36/67/b4/3667b449f3cacaaeef3f68fc9cf609be.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/9d/4f/43/9d4f43222d4fc694a61f7635f2d42892.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/48/d9/f0/48d9f0a63ac5c08b1cf2608ceb4a884f.jpg",width:236,height:419},{url:"https://i.pinimg.com/236x/3e/08/94/3e0894b99543507463864c64c6b3af49.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/4b/a4/97/4ba49798105ddfc0bfd11a980f18590f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b9/e9/8f/b9e98fe7ff81c026b488997900eb25fa.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/96/e0/4a/96e04ac53becd9f522988fc27343ac6e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/5a/f5/9e/5af59e46be8a92abd880031be67ce4cc.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/71/f2/e6/71f2e6a1a13223864dd833bc128f8e2f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/db/b2/09/dbb2099909d25dd45d3df4950429312d.jpg",width:236,height:309},{url:"https://i.pinimg.com/236x/d7/f9/b0/d7f9b0f7dc0536e923026e6af91c61d5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/4b/6e/36/4b6e36884909d421e250050db82d013b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/0b/85/ca/0b85ca13cbf16fa3017164b9c4b65923.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/28/d9/35/28d935a8f25905a6989709b21241e4d2.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/94/e5/fb/94e5fb084bb73b1237a73fc83eb07b45.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ec/c7/66/ecc766782029713523ae6a5bd8544045.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/1a/c5/72/1ac572b1643cf518ef06139eca46dd1d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d1/8f/f9/d18ff9eaec83c75b878eebb899604b8e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/29/6d/a2/296da26a335fd7079e6355225c051cf3.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cd/53/e3/cd53e3b9ad897d5c5588094f446cbc2a.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/18/54/21/1854212e113994080084b4666b23fcc5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cf/0c/45/cf0c451732bb352b3c96d1951ea632dd.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d0/e9/ee/d0e9ee92a6398e6b31b1515c2ec6ab5e.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8d/8c/86/8d8c86e41d810497a7b60c5a0e58a95f.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/57/0c/d6/570cd6ac36a208808edabf74682cca8d.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/bd/57/32/bd5732c8291d05e8982662a1ee043411.jpg",width:236,height:188},{url:"https://i.pinimg.com/236x/1b/10/5e/1b105ea0da81722178e23c5438fb68d7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/ee/2d/d3/ee2dd31a93246fb72490c012b16eefca.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/81/8a/ca/818aca5d5303c60bff125a5acc322fc0.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/c6/bc/64/c6bc64acbaab2cca4f9166539ff36621.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d7/38/27/d73827a583f46fbeaf282acc001eb733.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/2a/02/05/2a0205019cb0cb1ea0baa9b95eb78ab8.jpg",width:236,height:256},{url:"https://i.pinimg.com/236x/60/81/65/60816514dcfcbcab0df772dc78ca8ed1.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/0d/2f/fb/0d2ffbcdcc414765ef441752b423a6ad.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d0/97/0b/d0970b1c57a50afa4d6951d8b0657715.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/7d/c5/99/7dc599bce4115d38ee5b91dcd8769543.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/70/0e/56/700e56a3bccb989ab88819ade445e86e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ff/73/ab/ff73ab3256bbcf8abce0febb98939e4f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/e7/1b/ba/e71bbaca118e1ae09f01bcc45b58229f.jpg",width:236,height:185},{url:"https://i.pinimg.com/236x/37/af/bf/37afbf3c16baf0f70dc083b6c6ffecec.jpg",width:236,height:298},{url:"https://i.pinimg.com/236x/64/9d/1b/649d1b77d8b28995b2902b89001f912c.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330},{url:"https://i.pinimg.com/236x/21/af/78/21af78021ad083377aa3e36ae6f09fc2.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/06/41/9c/06419c4e4165596f77d721d88665e4e7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/2a/9e/80/2a9e80b4714ac32943ddec01399b5387.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330}]},233440:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(301923);let a=(0,o.Z)({type:"session"}),n=a},678379:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(667294),a=i(702664),n=i(596227),r=i(883211),l=i(224796),c=i(731714),s=i(233440),d=i(217058);let p="sessionVisitedPages",g="sessionUnauthPins",h={logUrlAndFirstPinImageSig(e){if(c.Z.getItem(l.W3)===window.location.pathname)return;let t={path:window.location.pathname,ts:Date.now(),first_pin_image_signature:e||""};c.Z.prependItem(l._b,t,100),s.Z.prependItem(p,t,100),(0,d.My)("unauth.web.session.visited_pins."+(s.Z.getItem(p)||[]).length),c.Z.prependItem(l.MS,t,100);try{c.Z.setItem(l.W3,window.location.pathname)}catch(e){console.error(e)}},logLastVisitedBoardLandingPage(e){if(!e||!e.board)return;let t=c.Z.getItem(l.om);if(t){for(let i of t)if(i&&i.board_id===e.board.id)return}let i={ts:Date.now(),board_id:e.board.id,first_pin_id:e.id,first_pin_image_signature:e.image_signature};c.Z.prependItem(l.om,i,10)},logPinCTAClick(e){c.Z.prependItem(l._b,{path:e,ts:Date.now(),actions:[1]},100)},logUnauthPins(e,t=!0){if(e.length)try{c.Z.setItem(l.TJ,e),t&&s.Z.prependItem(g,e[0])}catch(e){console.error(e)}},getUnauthPins:()=>c.Z.getItem(l.TJ)||[],getUnauthSessionsPins:()=>s.Z.getItem(g)||[]};var f=i(913208),m=i(785893);function u(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let b=({dominant_color:e,height:t,type:i,url:o,width:a})=>({dominant_color:e,height:t,type:i,url:o,width:a});class x extends o.PureComponent{constructor(...e){super(...e),u(this,"state",{insertedBestPinsImages:[],insertedTopicImages:[],pinImages:[],seoPinImage:void 0}),u(this,"insertExtraImages",e=>this.setState({...e})),u(this,"getSEOPinImageToInsert",()=>{let{inNux:e}=this.props;return e?this.getUnauthPinImages()[0]:void 0}),u(this,"getUnauthPinImages",(e=!1)=>{let t=e?h.getUnauthSessionsPins():h.getUnauthPins(),i=new Set;return t.filter(e=>e.images&&e.images["236x"]).map(e=>e.images["236x"]).filter(e=>{let t=i.has(e.url);return i.add(e.url),!t})}),u(this,"getBackgroundImages",()=>{let{insertedBestPinsImages:e,insertedTopicImages:t,pinImages:i,seoPinImage:o}=this.state,a=t.length+(o?1:0),n=[];return(n=(n=(n=(n=n.concat(o||[])).concat(e)).concat(t)).concat(i.slice(a))).map(e=>b(e))})}componentDidMount(){let{defaultPinImages:e}=this.props,t=this.getSEOPinImageToInsert(),i=[...t?[t]:[],...e||r.Z.map(({url:e,width:t,height:i})=>({url:e,width:t,height:i}))];this.setState({pinImages:i,seoPinImage:t})}componentDidUpdate(e){let{inNux:t,nuxSelectedInterestImages:i,nuxStep:o}=this.props,a=e.nuxSelectedInterestImages,{seoPinImage:n}=this.state;if(a&&i&&a!==i){let e=t&&i.length>a.length&&i[i.length-1].bestPinsImages||[],r=t&&"topic"===o,l=r&&0===e.length?i.filter(e=>!n||(0,f.lN)(e.url)!==(0,f.lN)(n.url)):[];this.insertExtraImages({insertedTopicImages:l,insertedBestPinsImages:e})}}render(){let{isFlexible:e}=this.props;return(0,m.jsx)(n.Z,{images:this.getBackgroundImages(),isFlexible:e})}}function _(e){let{nuxSelectedInterestImages:t,nuxProgress:i}=(0,a.useSelector)(({ui:e})=>e);return(0,m.jsx)(x,{...e,nuxSelectedInterestImages:t&&t.images,nuxStep:i&&i.step})}},913208:(e,t,i)=>{i.d(t,{HW:()=>r,lN:()=>l});var o=i(224796),a=i(731714);function n(e){let t=[];if(e){let i=Date.now()-72e5;for(let o of e)o.ts>=i&&("image_signature"in o&&"string"==typeof o.image_signature&&t.push(o.image_signature),"first_pin_image_signature"in o&&"string"==typeof o.first_pin_image_signature&&t.push(o.first_pin_image_signature))}return t}function r(){let e=a.Z.getItem(o.e9)||[],t=n(e),i=a.Z.getItem(o.om)||[],r=n(i);return{plpImages:t,blpImages:r}}function l(e){return((e??"").split("/").pop()??"").replace(/(--.*|\.jpg)$/g,"")}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/15772.es_ES-bfb06adcda5eb0d6.mjs.map