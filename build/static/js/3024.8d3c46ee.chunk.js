"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3024],{23024:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(72791),t=s(57689),n=s(11087),c=s(24846),l=s(19069),i=s(93647),o=s(24849),d=s(95313),m=s(30018),x=s(42076),f=s(89743),u=s(2677),v=s(43360),N=s(583),h=s(55294),p=(s(3327),s(32445)),j=s(80184);const b=()=>{const{login:e,user:a,isLoggedIn:s}=(0,N.a)(),b=(0,t.s0)(),[g,y]=(0,r.useState)(""),[Z,C]=(0,r.useState)(""),[w,P]=(0,r.useState)(""),[E,k]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),[L,S]=(0,r.useState)(!1),[H,_]=(0,r.useState)(!1);(0,r.useEffect)((()=>{(async()=>{s()&&(a.autoGenPass?b("/ChangePassword"):b("/dashboard"))})()}),[a,s,b]);return(0,j.jsx)(p.Z,{bgimg:"bgimg",children:s()?(0,j.jsx)("div",{className:"text-center",children:(0,j.jsx)(o.Z,{animation:"border",role:"status"})}):(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(d.Z,{className:"mt-4",children:[(0,j.jsx)("h1",{className:"text-center",children:"Login"}),(0,j.jsx)("p",{className:"text-center",children:"Sign In to your account"}),(0,j.jsxs)("div",{className:"mb-3",children:[H&&(0,j.jsx)(m.Z,{variant:"danger",onClose:()=>_(!1),dismissible:!0,className:"align-items-center",children:"Email or password you entered is incorrect"}),(0,j.jsxs)(x.Z,{hasValidation:!0,className:"mb-3",children:[(0,j.jsx)(x.Z.Text,{children:(0,j.jsx)(c.Z,{icon:l.m})}),(0,j.jsx)(d.Z.Control,{placeholder:"Email Address",autoComplete:"username",value:g,onChange:e=>{return a=e.target.value,y(a),P(a?(e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(a)?"":"Invalid email format":"Email is required"),void _(!1);var a},type:"email",isInvalid:!!w,required:!0}),(0,j.jsx)(d.Z.Control.Feedback,{type:"invalid",children:w})]})]}),(0,j.jsx)("div",{className:"mb-4",children:(0,j.jsxs)(x.Z,{hasValidation:!0,className:"mb-3",children:[(0,j.jsx)(x.Z.Text,{children:(0,j.jsx)(c.Z,{icon:i.U})}),(0,j.jsx)(d.Z.Control,{type:R?"text":"password",placeholder:"Password",autoComplete:"current-password",value:Z,onChange:e=>{return a=e.target.value,C(a),void k("");var a},isInvalid:!!E,required:!0}),(0,j.jsx)(x.Z.Text,{onClick:()=>{I(!R)},className:"hovericon",children:R?(0,j.jsx)("i",{className:"fa-solid fa-eye"}):(0,j.jsx)("i",{className:"fa-solid fa-eye-slash"})}),(0,j.jsx)(d.Z.Control.Feedback,{type:"invalid",children:E})]})}),(0,j.jsxs)(f.Z,{className:"align-items-center",children:[(0,j.jsx)(u.Z,{xs:12,sm:6,className:"text-center text-sm-center text-md-start mb-2 mb-sm-0",children:(0,j.jsxs)(v.Z,{color:"primary",className:"px-4 w-100",onClick:async()=>{if(!w&&!E&&g&&Z)try{S(!0);const a=await h.Z.post("".concat("http://api1.chandrakala.co.in/api/Login","/Login"),{email:g,password:Z});a&&a.data?e(a.data):console.error("Invalid API response",a)}catch(a){console.error("Error during login:",a),P(""),k("Invalid email or password"),_(!0)}finally{S(!1)}},disabled:L,children:[L?(0,j.jsx)(o.Z,{animation:"border",size:"sm",className:"me-2"}):null,"Login"]})}),(0,j.jsx)(u.Z,{xs:12,sm:6,className:"text-center text-sm-center text-md-end",children:(0,j.jsx)(n.rU,{to:"/ForgotPassword",className:"d-block",children:"Forgot password?"})})]})]})})})}},32445:(e,a,s)=>{s.d(a,{Z:()=>v});var r=s(72791),t=s(47022),n=s(89743),c=s(2677),l=s(81694),i=s.n(l),o=s(10162),d=s(80184);const m=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...n}=e;return r=(0,o.vE)(r,"card-group"),(0,d.jsx)(t,{ref:a,className:i()(s,r),...n})}));m.displayName="CardGroup";const x=m;var f=s(26514),u=s(99033);const v=e=>{let{children:a,bgimg:s,theme:r}=e;return(0,d.jsx)("div",{children:(0,d.jsx)("main",{className:"blur-5",children:(0,d.jsx)("div",{className:"bg-body-tertiary min-vw-100 min-vh-100 d-flex align-items-center blur-5",children:(0,d.jsx)(t.Z,{fluid:!0,className:"align-items-center loginbg ",children:(0,d.jsxs)(n.Z,{className:"align-items-center justify-content-center",children:[(0,d.jsx)(c.Z,{md:8,lg:6,className:"d-flex vh-100 d-none d-lg-block ".concat(s," border-end border-4")}),(0,d.jsx)(c.Z,{sm:8,md:7,lg:6,className:"d-flex vh-100 align-items-center blur-5 shadow-left",children:(0,d.jsxs)(x,{className:"container  p-md-5 flex-column",children:[(0,d.jsx)(f.Z,{className:"d-flex flex-row align-items-center justify-content-center gap-3 rounded mb-4 text-primary",children:(0,d.jsx)("h1",{style:{color:r},children:"CUPL-Ticketing System"})}),(0,d.jsx)(f.Z,{className:"p-4 container rounded ",children:(0,d.jsx)(u.Z,{className:"m-6",children:a})})]})})]})})})})})}},19069:(e,a,s)=>{s.d(a,{m:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z' class='ci-primary'/>"]},93647:(e,a,s)=>{s.d(a,{U:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},30018:(e,a,s)=>{s.d(a,{Z:()=>b});var r=s(81694),t=s.n(r),n=s(72791),c=s(80239),l=s(39007),i=s(10162),o=s(27472),d=s(80184);const m=(0,o.Z)("h4");m.displayName="DivStyledAsH4";const x=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=m,...c}=e;return r=(0,i.vE)(r,"alert-heading"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...c})}));x.displayName="AlertHeading";const f=x;var u=s(16445);const v=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=u.Z,...c}=e;return r=(0,i.vE)(r,"alert-link"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...c})}));v.displayName="AlertLink";const N=v;var h=s(72709),p=s(80473);const j=n.forwardRef(((e,a)=>{const{bsPrefix:s,show:r=!0,closeLabel:n="Close alert",closeVariant:o,className:m,children:x,variant:f="primary",onClose:u,dismissible:v,transition:N=h.Z,...j}=(0,c.Ch)(e,{show:"onClose"}),b=(0,i.vE)(s,"alert"),g=(0,l.Z)((e=>{u&&u(!1,e)})),y=!0===N?h.Z:N,Z=(0,d.jsxs)("div",{role:"alert",...y?void 0:j,ref:a,className:t()(m,b,f&&"".concat(b,"-").concat(f),v&&"".concat(b,"-dismissible")),children:[v&&(0,d.jsx)(p.Z,{onClick:g,"aria-label":n,variant:o}),x]});return y?(0,d.jsx)(y,{unmountOnExit:!0,...j,ref:void 0,in:r,children:Z}):r?Z:null}));j.displayName="Alert";const b=Object.assign(j,{Link:N,Heading:f})},26514:(e,a,s)=>{s.d(a,{Z:()=>L});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(99033),i=s(80184);const o=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...l}=e;return r=(0,c.vE)(r,"card-footer"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));o.displayName="CardFooter";const d=o,m=n.createContext(null);m.displayName="CardHeaderContext";const x=m,f=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:l="div",...o}=e;const d=(0,c.vE)(s,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(x.Provider,{value:m,children:(0,i.jsx)(l,{ref:a,...o,className:t()(r,d)})})}));f.displayName="CardHeader";const u=f,v=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:n,as:l="img",...o}=e;const d=(0,c.vE)(s,"card-img");return(0,i.jsx)(l,{ref:a,className:t()(n?"".concat(d,"-").concat(n):d,r),...o})}));v.displayName="CardImg";const N=v,h=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...l}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));h.displayName="CardImgOverlay";const p=h,j=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="a",...l}=e;return r=(0,c.vE)(r,"card-link"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));j.displayName="CardLink";const b=j;var g=s(27472);const y=(0,g.Z)("h6"),Z=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=y,...l}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));Z.displayName="CardSubtitle";const C=Z,w=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="p",...l}=e;return r=(0,c.vE)(r,"card-text"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));w.displayName="CardText";const P=w,E=(0,g.Z)("h5"),k=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=E,...l}=e;return r=(0,c.vE)(r,"card-title"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));k.displayName="CardTitle";const R=k,I=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:n,text:o,border:d,body:m=!1,children:x,as:f="div",...u}=e;const v=(0,c.vE)(s,"card");return(0,i.jsx)(f,{ref:a,...u,className:t()(r,v,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:m?(0,i.jsx)(l.Z,{children:x}):x})}));I.displayName="Card";const L=Object.assign(I,{Img:N,Title:R,Subtitle:C,Body:l.Z,Link:b,Text:P,Header:u,Footer:d,ImgOverlay:p})},99033:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(72791),t=s(81694),n=s.n(t),c=s(10162),l=s(80184);const i=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...i}=e;return r=(0,c.vE)(r,"card-body"),(0,l.jsx)(t,{ref:a,className:n()(s,r),...i})}));i.displayName="CardBody";const o=i},47022:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(80184);const i=n.forwardRef(((e,a)=>{let{bsPrefix:s,fluid:r=!1,as:n="div",className:i,...o}=e;const d=(0,c.vE)(s,"container"),m="string"===typeof r?"-".concat(r):"-fluid";return(0,l.jsx)(n,{ref:a,...o,className:t()(i,r?"".concat(d).concat(m):d)})}));i.displayName="Container";const o=i},42076:(e,a,s)=>{s.d(a,{Z:()=>f});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(96882),i=s(91991),o=s(80184);const d=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="span",...l}=e;return r=(0,c.vE)(r,"input-group-text"),(0,o.jsx)(n,{ref:a,className:t()(s,r),...l})}));d.displayName="InputGroupText";const m=d,x=n.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,hasValidation:l,className:d,as:m="div",...x}=e;s=(0,c.vE)(s,"input-group");const f=(0,n.useMemo)((()=>({})),[]);return(0,o.jsx)(i.Z.Provider,{value:f,children:(0,o.jsx)(m,{ref:a,...x,className:t()(d,s,r&&"".concat(s,"-").concat(r),l&&"has-validation")})})}));x.displayName="InputGroup";const f=Object.assign(x,{Text:m,Radio:e=>(0,o.jsx)(m,{children:(0,o.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,o.jsx)(m,{children:(0,o.jsx)(l.Z,{type:"checkbox",...e})})})},91991:(e,a,s)=>{s.d(a,{Z:()=>t});const r=s(72791).createContext(null);r.displayName="InputGroupContext";const t=r},24849:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(80184);const i=n.forwardRef(((e,a)=>{let{bsPrefix:s,variant:r,animation:n="border",size:i,as:o="div",className:d,...m}=e;s=(0,c.vE)(s,"spinner");const x="".concat(s,"-").concat(n);return(0,l.jsx)(o,{ref:a,...m,className:t()(d,x,i&&"".concat(x,"-").concat(i),r&&"text-".concat(r))})}));i.displayName="Spinner";const o=i},3327:()=>{}}]);
//# sourceMappingURL=3024.8d3c46ee.chunk.js.map