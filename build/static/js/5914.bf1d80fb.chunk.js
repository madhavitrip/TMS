"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5914],{95914:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var r=a(72791),t=a(47022),l=a(95313),n=a(30018),c=a(42076),i=a(89743),o=a(2677),d=a(43360),m=a(55294),x=(a(3327),a(11087)),f=a(32445),u=a(80184);const N=()=>{const e="#FFC727",[s,a]=(0,r.useState)(""),[N,h]=(0,r.useState)(""),[v,p]=(0,r.useState)(""),[j,b]=(0,r.useState)(!1),g=async()=>{if(s)try{b(!0);const e=await m.Z.put("http://api1.chandrakala.co.in/api/Login/ForgetPassword",{email:s,password:"password"});e&&e.data?console.log("Password reset email sent successfully"):console.error("Invalid API response",e)}catch(e){console.error("Error while resetting password:",e)}finally{b(!1)}else h("Email is required")};return(0,u.jsx)(f.Z,{bgimg:"bgimgforgotpass",theme:e,children:(0,u.jsx)(t.Z,{children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)("h1",{className:"text-center",children:"Forgot Password"}),(0,u.jsx)("p",{className:"text-center",children:"Enter your email address to reset your password"}),v&&(0,u.jsx)(n.Z,{variant:"success",children:v}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsxs)(c.Z,{hasValidation:!0,children:[(0,u.jsx)(l.Z.Control,{placeholder:"Email Address",autoComplete:"email",value:s,onChange:e=>{return s=e.target.value,a(s),void h(s?"":"Email is required");var s},type:"email",isInvalid:!!N,required:!0}),(0,u.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N})]})}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(o.Z,{xs:6,className:"align-items-start",children:(0,u.jsx)(d.Z,{color:"primary",className:"px-4",style:{backgroundColor:e},onClick:g,disabled:j,children:j?"Loading...":"Reset Password"})}),(0,u.jsx)(o.Z,{xs:6,className:"text-end fs-5",children:(0,u.jsx)(x.rU,{to:"/Login",style:{color:e},className:"px-4",onClick:g,children:"Login"})})]})]})})})}},32445:(e,s,a)=>{a.d(s,{Z:()=>N});var r=a(72791),t=a(47022),l=a(89743),n=a(2677),c=a(81694),i=a.n(c),o=a(10162),d=a(80184);const m=r.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="div",...l}=e;return r=(0,o.vE)(r,"card-group"),(0,d.jsx)(t,{ref:s,className:i()(a,r),...l})}));m.displayName="CardGroup";const x=m;var f=a(26514),u=a(99033);const N=e=>{let{children:s,bgimg:a,theme:r}=e;return(0,d.jsx)("div",{children:(0,d.jsx)("main",{className:"blur-5",children:(0,d.jsx)("div",{className:"bg-body-tertiary min-vw-100 min-vh-100 d-flex align-items-center blur-5",children:(0,d.jsx)(t.Z,{fluid:!0,className:"align-items-center loginbg ",children:(0,d.jsxs)(l.Z,{className:"align-items-center justify-content-center",children:[(0,d.jsx)(n.Z,{md:8,lg:6,className:"d-flex vh-100 d-none d-lg-block ".concat(a," border-end border-4")}),(0,d.jsx)(n.Z,{sm:8,md:7,lg:6,className:"d-flex vh-100 align-items-center blur-5 shadow-left",children:(0,d.jsxs)(x,{className:"container  p-md-5 flex-column",children:[(0,d.jsx)(f.Z,{className:"d-flex flex-row align-items-center justify-content-center gap-3 rounded mb-4 text-primary",children:(0,d.jsx)("h1",{style:{color:r},children:"CUPL-Ticketing System"})}),(0,d.jsx)(f.Z,{className:"p-4 container rounded ",children:(0,d.jsx)(u.Z,{className:"m-6",children:s})})]})})]})})})})})}},30018:(e,s,a)=>{a.d(s,{Z:()=>b});var r=a(81694),t=a.n(r),l=a(72791),n=a(80239),c=a(39007),i=a(10162),o=a(27472),d=a(80184);const m=(0,o.Z)("h4");m.displayName="DivStyledAsH4";const x=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=m,...n}=e;return r=(0,i.vE)(r,"alert-heading"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));x.displayName="AlertHeading";const f=x;var u=a(16445);const N=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=u.Z,...n}=e;return r=(0,i.vE)(r,"alert-link"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));N.displayName="AlertLink";const h=N;var v=a(72709),p=a(80473);const j=l.forwardRef(((e,s)=>{const{bsPrefix:a,show:r=!0,closeLabel:l="Close alert",closeVariant:o,className:m,children:x,variant:f="primary",onClose:u,dismissible:N,transition:h=v.Z,...j}=(0,n.Ch)(e,{show:"onClose"}),b=(0,i.vE)(a,"alert"),g=(0,c.Z)((e=>{u&&u(!1,e)})),y=!0===h?v.Z:h,Z=(0,d.jsxs)("div",{role:"alert",...y?void 0:j,ref:s,className:t()(m,b,f&&"".concat(b,"-").concat(f),N&&"".concat(b,"-dismissible")),children:[N&&(0,d.jsx)(p.Z,{onClick:g,"aria-label":l,variant:o}),x]});return y?(0,d.jsx)(y,{unmountOnExit:!0,...j,ref:void 0,in:r,children:Z}):r?Z:null}));j.displayName="Alert";const b=Object.assign(j,{Link:h,Heading:f})},26514:(e,s,a)=>{a.d(s,{Z:()=>I});var r=a(81694),t=a.n(r),l=a(72791),n=a(10162),c=a(99033),i=a(80184);const o=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...c}=e;return r=(0,n.vE)(r,"card-footer"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));o.displayName="CardFooter";const d=o,m=l.createContext(null);m.displayName="CardHeaderContext";const x=m,f=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:c="div",...o}=e;const d=(0,n.vE)(a,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(x.Provider,{value:m,children:(0,i.jsx)(c,{ref:s,...o,className:t()(r,d)})})}));f.displayName="CardHeader";const u=f,N=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,variant:l,as:c="img",...o}=e;const d=(0,n.vE)(a,"card-img");return(0,i.jsx)(c,{ref:s,className:t()(l?"".concat(d,"-").concat(l):d,r),...o})}));N.displayName="CardImg";const h=N,v=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...c}=e;return r=(0,n.vE)(r,"card-img-overlay"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));v.displayName="CardImgOverlay";const p=v,j=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="a",...c}=e;return r=(0,n.vE)(r,"card-link"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));j.displayName="CardLink";const b=j;var g=a(27472);const y=(0,g.Z)("h6"),Z=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=y,...c}=e;return r=(0,n.vE)(r,"card-subtitle"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));Z.displayName="CardSubtitle";const w=Z,C=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="p",...c}=e;return r=(0,n.vE)(r,"card-text"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));C.displayName="CardText";const P=C,E=(0,g.Z)("h5"),k=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=E,...c}=e;return r=(0,n.vE)(r,"card-title"),(0,i.jsx)(l,{ref:s,className:t()(a,r),...c})}));k.displayName="CardTitle";const R=k,_=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,bg:l,text:o,border:d,body:m=!1,children:x,as:f="div",...u}=e;const N=(0,n.vE)(a,"card");return(0,i.jsx)(f,{ref:s,...u,className:t()(r,N,l&&"bg-".concat(l),o&&"text-".concat(o),d&&"border-".concat(d)),children:m?(0,i.jsx)(c.Z,{children:x}):x})}));_.displayName="Card";const I=Object.assign(_,{Img:h,Title:R,Subtitle:w,Body:c.Z,Link:b,Text:P,Header:u,Footer:d,ImgOverlay:p})},99033:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(72791),t=a(81694),l=a.n(t),n=a(10162),c=a(80184);const i=r.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="div",...i}=e;return r=(0,n.vE)(r,"card-body"),(0,c.jsx)(t,{ref:s,className:l()(a,r),...i})}));i.displayName="CardBody";const o=i},47022:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(81694),t=a.n(r),l=a(72791),n=a(10162),c=a(80184);const i=l.forwardRef(((e,s)=>{let{bsPrefix:a,fluid:r=!1,as:l="div",className:i,...o}=e;const d=(0,n.vE)(a,"container"),m="string"===typeof r?"-".concat(r):"-fluid";return(0,c.jsx)(l,{ref:s,...o,className:t()(i,r?"".concat(d).concat(m):d)})}));i.displayName="Container";const o=i},42076:(e,s,a)=>{a.d(s,{Z:()=>f});var r=a(81694),t=a.n(r),l=a(72791),n=a(10162),c=a(96882),i=a(91991),o=a(80184);const d=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="span",...c}=e;return r=(0,n.vE)(r,"input-group-text"),(0,o.jsx)(l,{ref:s,className:t()(a,r),...c})}));d.displayName="InputGroupText";const m=d,x=l.forwardRef(((e,s)=>{let{bsPrefix:a,size:r,hasValidation:c,className:d,as:m="div",...x}=e;a=(0,n.vE)(a,"input-group");const f=(0,l.useMemo)((()=>({})),[]);return(0,o.jsx)(i.Z.Provider,{value:f,children:(0,o.jsx)(m,{ref:s,...x,className:t()(d,a,r&&"".concat(a,"-").concat(r),c&&"has-validation")})})}));x.displayName="InputGroup";const f=Object.assign(x,{Text:m,Radio:e=>(0,o.jsx)(m,{children:(0,o.jsx)(c.Z,{type:"radio",...e})}),Checkbox:e=>(0,o.jsx)(m,{children:(0,o.jsx)(c.Z,{type:"checkbox",...e})})})},91991:(e,s,a)=>{a.d(s,{Z:()=>t});const r=a(72791).createContext(null);r.displayName="InputGroupContext";const t=r},3327:()=>{}}]);
//# sourceMappingURL=5914.bf1d80fb.chunk.js.map