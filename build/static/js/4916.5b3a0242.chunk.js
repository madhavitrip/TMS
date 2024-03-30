"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4916],{29552:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var c=n(72791),s=n(47022),r=n(89743),a=n(2677),i=n(24849),o=n(62591),l=n(47798),d=n(12576),h=n(43360),u=n(17612),p=n(88890),f=n.n(p),j=n(11087),m=n(9806),x=n(11632),v=n(55294),g=n(80184);const k="http://api1.chandrakala.co.in",y=e=>{let{tickets:t,setTickets:n}=e;const[s,r]=(0,c.useState)(!1),[a,i]=(0,c.useState)(null),[p,y]=(0,c.useState)({}),[N,b]=(0,c.useState)(!1),[w,Z]=(0,c.useState)(!1),[S,C]=(0,c.useState)(!1),_=(0,c.useRef)(null);(0,c.useEffect)((()=>{_.current&&f()(_.current).DataTable();t.forEach((e=>{(async e=>{try{const t=await fetch("".concat("http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId","/").concat(e));if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));const n=await t.json(),c=n.length>0?n[n.length-1].comment:"No comments";y((t=>({...t,[e]:c})))}catch(t){console.error("Error fetching comments for ticket ".concat(e,":"),t)}})(e.ticketId)}))}),[t]);const E=()=>{i(null),b(!1)},T=()=>{console.log("Archiving ticket:",a),v.Z.put("".concat("http://api1.chandrakala.co.in/api/Tickets","/").concat(a.ticketId,"/archive")).then((e=>{console.log("Ticket archived successfully:",e.data),n(t.filter((e=>e.ticketId!==a.ticketId)))})).catch((e=>{console.error("Error archiving ticket:",e)})),E()};return(0,g.jsxs)("div",{className:"mt-6 table-responsive",children:[(0,g.jsxs)(o.Z,{striped:!0,bordered:!0,hover:!0,ref:_,className:"table-primary",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"S.No"}),(0,g.jsx)("th",{children:"Title"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Priority"}),(0,g.jsx)("th",{children:"DueDate"}),(0,g.jsx)("th",{children:"Creator Email"}),(0,g.jsx)("th",{children:"Actions"})]})}),(0,g.jsx)("tbody",{children:t.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:t+1}),(0,g.jsx)("td",{children:(0,g.jsx)(l.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,g.jsx)(d.Z,{id:"tooltip-".concat(e.ticketId),children:p[e.ticketId]?(0,g.jsxs)(g.Fragment,{children:["Last comment:",(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:p[e.ticketId]}})]}):(0,g.jsxs)("div",{children:["Description: ",(0,g.jsx)("br",{}),e.description]})}),children:(0,g.jsx)("span",{children:e.title})},e.ticketId)}),(0,g.jsx)("td",{children:e.status}),(0,g.jsx)("td",{children:e.priority}),(0,g.jsx)("td",{children:new Date(e.dueDate).toLocaleString()}),(0,g.jsx)("td",{children:e.email}),(0,g.jsx)("td",{children:(0,g.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[(0,g.jsx)(j.rU,{to:"/Tickets/EditTicket/".concat(e.ticketId),children:(0,g.jsx)(m.G,{icon:x.e0A,className:"text-primary"})}),(0,g.jsx)(h.Z,{variant:"link",onClick:()=>(e=>{i(e),r(!0)})(e),children:(0,g.jsx)(m.G,{icon:x.Mdf,className:"text-success"})}),(0,g.jsx)(m.G,{icon:x.On6,className:"text-danger",onClick:()=>(e=>{i(e),b(!0)})(e)}),(0,g.jsxs)(u.Z,{show:N,onHide:E,children:[(0,g.jsx)(u.Z.Header,{closeButton:!0,children:(0,g.jsx)(u.Z.Title,{children:"Confirm Archive"})}),(0,g.jsxs)(u.Z.Body,{children:["Are you sure you want to archive ticket ",a?a.id:"","?"]}),(0,g.jsxs)(u.Z.Footer,{children:[(0,g.jsx)(h.Z,{variant:"secondary",onClick:E,children:"Cancel"}),(0,g.jsx)(h.Z,{variant:"danger",onClick:T,children:"Archive"})]})]})]})})]},e.ticketId)))})]}),a&&(0,g.jsxs)(u.Z,{show:s,onHide:()=>r(!1),size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,g.jsx)(u.Z.Header,{closeButton:!0,children:(0,g.jsx)(u.Z.Title,{id:"contained-modal-title-vcenter",children:"Ticket Details"})}),(0,g.jsxs)(u.Z.Body,{children:[(0,g.jsxs)("p",{children:["Title: ",a.title]}),(0,g.jsxs)("p",{children:["Description: ",a.description]}),(0,g.jsxs)("p",{children:["Creator ID: ",a.email]}),(0,g.jsxs)("p",{children:["Assignee ID: ",a.assigneeEmail]}),(0,g.jsx)("p",{children:"Attachments:"}),a.attachment&&(0,g.jsx)("div",{children:S&&/\.(png|jpg|jpeg|gif|bmp)$/i.test(a.attachment)?(0,g.jsx)("img",{src:"".concat(k,"/").concat(a.attachment.replace("wwwroot/","")),alt:"Attachment",className:"img-fluid"}):(0,g.jsx)("p",{children:(0,g.jsx)("a",{href:"".concat(k,"/").concat(a.attachment.replace("wwwroot/","")),target:"_blank",rel:"noopener noreferrer",children:"View Attachment"})})})]}),(0,g.jsx)(u.Z.Footer,{children:(0,g.jsx)(h.Z,{onClick:()=>r(!1),children:"Close"})})]})]})};var N=n(583);const b="http://api1.chandrakala.co.in/api/Tickets",w=()=>{const{user:e}=(0,N.a)(),[t,n]=(0,c.useState)({active:0,pending:0,selfassigned:0,completed:0}),[o,l]=(0,c.useState)([]),[d,h]=(0,c.useState)(!0);return(0,c.useEffect)((()=>{(async()=>{try{const t=await fetch("".concat(b,"/status-count?email=").concat(e.email)),c=await t.json();n({active:c.activeCount,pending:c.pendingCount,selfassigned:c.selfassignedCount,completed:c.completedCount});const s=await fetch("".concat(b,"/ByUser?email=").concat(e.email)),r=await s.json();l(r),h(!1)}catch(t){console.error("Error fetching data:",t)}finally{h(!1)}})()}),[e]),(0,g.jsxs)("div",{children:[(0,g.jsx)(s.Z,{children:(0,g.jsxs)(r.Z,{className:"row-cols-1 row-cols-md-2 row-cols-lg-4",children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:"card",children:(0,g.jsxs)("div",{className:"card-inner",children:[(0,g.jsx)("div",{className:"card-front",children:(0,g.jsx)("p",{children:"Active"})}),(0,g.jsx)("div",{className:"card-back",children:(0,g.jsx)("p",{children:t.active})})]})})}),(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:"card",children:(0,g.jsxs)("div",{className:"card-inner",children:[(0,g.jsx)("div",{className:"card-front ",children:(0,g.jsx)("p",{children:"Pending"})}),(0,g.jsx)("div",{className:"card-back",children:(0,g.jsx)("p",{children:t.pending})})]})})}),(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:"card",children:(0,g.jsxs)("div",{className:"card-inner",children:[(0,g.jsx)("div",{className:"card-front",children:(0,g.jsx)("p",{children:"Self-Assigned"})}),(0,g.jsx)("div",{className:"card-back",children:(0,g.jsx)("p",{children:t.selfassigned})})]})})}),(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:"card",children:(0,g.jsxs)("div",{className:"card-inner",children:[(0,g.jsx)("div",{className:"card-front",children:(0,g.jsx)("p",{children:"Completed"})}),(0,g.jsx)("div",{className:"card-back",children:(0,g.jsx)("p",{children:t.completed})})]})})})]})}),d?(0,g.jsx)("div",{className:"text-center",children:(0,g.jsx)(i.Z,{animation:"border",role:"status",children:(0,g.jsx)("span",{className:"visually-hidden",children:"loading.."})})}):(0,g.jsx)(y,{tickets:o,setTickets:l})]})}},28633:(e,t,n)=>{n.d(t,{Z:()=>s});var c=n(72791);function s(){return(0,c.useState)(null)}},49815:(e,t,n)=>{n.d(t,{Z:()=>r});var c=n(72791);const s="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,r="undefined"!==typeof document||s?c.useLayoutEffect:c.useEffect},55746:(e,t,n)=>{n.d(t,{Z:()=>s});var c=n(72791);function s(){const e=(0,c.useRef)(!0),t=(0,c.useRef)((()=>e.current));return(0,c.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},52803:(e,t,n)=>{n.d(t,{Z:()=>s});var c=n(72791);function s(e){const t=(0,c.useRef)(null);return(0,c.useEffect)((()=>{t.current=e})),t.current}},92176:e=>{e.exports=function(e,t,n,c,s,r,a,i){if(!e){var o;if(void 0===t)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,c,s,r,a,i],d=0;(o=new Error(t.replace(/%s/g,(function(){return l[d++]})))).name="Invariant Violation"}throw o.framesToPop=1,o}}},80473:(e,t,n)=>{n.d(t,{Z:()=>h});var c=n(52007),s=n.n(c),r=n(72791),a=n(81694),i=n.n(a),o=n(80184);const l={"aria-label":s().string,onClick:s().func,variant:s().oneOf(["white"])},d=r.forwardRef(((e,t)=>{let{className:n,variant:c,"aria-label":s="Close",...r}=e;return(0,o.jsx)("button",{ref:t,type:"button",className:i()("btn-close",c&&"btn-close-".concat(c),n),"aria-label":s,...r})}));d.displayName="CloseButton",d.propTypes=l;const h=d},2677:(e,t,n)=>{n.d(t,{Z:()=>l});var c=n(81694),s=n.n(c),r=n(72791),a=n(10162),i=n(80184);const o=r.forwardRef(((e,t)=>{const[{className:n,...c},{as:r="div",bsPrefix:o,spans:l}]=function(e){let{as:t,bsPrefix:n,className:c,...r}=e;n=(0,a.vE)(n,"col");const i=(0,a.pi)(),o=(0,a.zG)(),l=[],d=[];return i.forEach((e=>{const t=r[e];let c,s,a;delete r[e],"object"===typeof t&&null!=t?({span:c,offset:s,order:a}=t):c=t;const i=e!==o?"-".concat(e):"";c&&l.push(!0===c?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(c)),null!=a&&d.push("order".concat(i,"-").concat(a)),null!=s&&d.push("offset".concat(i,"-").concat(s))})),[{...r,className:s()(c,...l,...d)},{as:t,bsPrefix:n,spans:l}]}(e);return(0,i.jsx)(r,{...c,ref:t,className:s()(n,!l.length&&o)})}));o.displayName="Col";const l=o},47022:(e,t,n)=>{n.d(t,{Z:()=>l});var c=n(81694),s=n.n(c),r=n(72791),a=n(10162),i=n(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:c=!1,as:r="div",className:o,...l}=e;const d=(0,a.vE)(n,"container"),h="string"===typeof c?"-".concat(c):"-fluid";return(0,i.jsx)(r,{ref:t,...l,className:s()(o,c?"".concat(d).concat(h):d)})}));o.displayName="Container";const l=o},89743:(e,t,n)=>{n.d(t,{Z:()=>l});var c=n(81694),s=n.n(c),r=n(72791),a=n(10162),i=n(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:c,as:r="div",...o}=e;const l=(0,a.vE)(n,"row"),d=(0,a.pi)(),h=(0,a.zG)(),u="".concat(l,"-cols"),p=[];return d.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const c=e!==h?"-".concat(e):"";null!=n&&p.push("".concat(u).concat(c,"-").concat(n))})),(0,i.jsx)(r,{ref:t,...o,className:s()(c,l,...p)})}));o.displayName="Row";const l=o},27472:(e,t,n)=>{n.d(t,{Z:()=>i});var c=n(72791),s=n(81694),r=n.n(s),a=n(80184);const i=e=>c.forwardRef(((t,n)=>(0,a.jsx)("div",{...t,ref:n,className:r()(t.className,e)})))},80239:(e,t,n)=>{n.d(t,{Ch:()=>l,$c:()=>o});var c=n(87462),s=n(63366),r=n(72791);n(92176);function a(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function i(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var c=n.call(e,t||"default");if("object"!==typeof c)return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function o(e,t,n){var c=(0,r.useRef)(void 0!==e),s=(0,r.useState)(t),a=s[0],i=s[1],o=void 0!==e,l=c.current;return c.current=o,!o&&l&&a!==t&&i(t),[o?e:a,(0,r.useCallback)((function(e){for(var t=arguments.length,c=new Array(t>1?t-1:0),s=1;s<t;s++)c[s-1]=arguments[s];n&&n.apply(void 0,[e].concat(c)),i(e)}),[n])]}function l(e,t){return Object.keys(t).reduce((function(n,r){var l,d=n,h=d[a(r)],u=d[r],p=(0,s.Z)(d,[a(r),r].map(i)),f=t[r],j=o(u,h,e[f]),m=j[0],x=j[1];return(0,c.Z)({},p,((l={})[r]=m,l[f]=x,l))}),e)}function d(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function h(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function u(e,t){try{var n=this.props,c=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,c)}finally{this.props=n,this.state=c}}d.__suppressDeprecationWarning=!0,h.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0},87462:(e,t,n)=>{function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},c.apply(this,arguments)}n.d(t,{Z:()=>c})}}]);
//# sourceMappingURL=4916.5b3a0242.chunk.js.map