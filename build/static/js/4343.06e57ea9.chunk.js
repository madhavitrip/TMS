"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4343],{34343:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(72791),c=r(24849),a=r(62591),i=r(88890),n=r.n(i),o=r(80184);const d=e=>{let{tickets:t}=e;const r=(0,s.useRef)(null);return(0,s.useEffect)((()=>{n()(r.current).DataTable()}),[]),(0,o.jsx)("div",{className:"mt-6 table-responsive",children:(0,o.jsxs)(a.Z,{striped:!0,bordered:!0,hover:!0,ref:r,className:"table-primary",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"S.No"}),(0,o.jsx)("th",{children:"Title"}),(0,o.jsx)("th",{children:"Status"}),(0,o.jsx)("th",{children:"Priority"}),(0,o.jsx)("th",{children:"DueDate"})]})}),(0,o.jsx)("tbody",{children:t.map(((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:t+1}),(0,o.jsx)("td",{children:e.title}),(0,o.jsx)("td",{children:e.status}),(0,o.jsx)("td",{children:e.priority}),(0,o.jsx)("td",{children:new Date(e.dueDate).toLocaleString()})]},e.ticketId)))})]})})},l=()=>{const[e,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{fetch("https://localhost:7217/api/Tickets/priority/medium").then((e=>{if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));return e.json()})).then((e=>{t(e),a(!1)})).catch((e=>{console.error("Error fetching user data:",e),a(!1)}));(async()=>{try{const e=await fetch("https://localhost:7217/api/Tickets"),r=(await e.json()).filter((e=>"Medium"===e.priority));t(r)}catch(e){console.error("Error fetching tickets",e)}})()}),[]),(0,o.jsx)("div",{children:r?(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)(c.Z,{animation:"border",role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"loading.."})})}):(0,o.jsx)(d,{tickets:e})})}},62591:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(81694),c=r.n(s),a=r(72791),i=r(10162),n=r(80184);const o=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:s,striped:a,bordered:o,borderless:d,hover:l,size:h,variant:u,responsive:j,...x}=e;const f=(0,i.vE)(r,"table"),p=c()(s,f,u&&"".concat(f,"-").concat(u),h&&"".concat(f,"-").concat(h),a&&"".concat(f,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),o&&"".concat(f,"-bordered"),d&&"".concat(f,"-borderless"),l&&"".concat(f,"-hover")),m=(0,n.jsx)("table",{...x,className:p,ref:t});if(j){let e="".concat(f,"-responsive");return"string"===typeof j&&(e="".concat(e,"-").concat(j)),(0,n.jsx)("div",{className:e,children:m})}return m}))}}]);
//# sourceMappingURL=4343.06e57ea9.chunk.js.map