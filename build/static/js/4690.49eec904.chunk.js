(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4690],{36704:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(72791),o=n(52007),a=n.n(o),s=n(583),c=n(55294);const i=e=>{let{children:t}=e;const{user:n}=(0,s.a)(),[o,a]=(0,r.useState)([]),[i,l]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{const e=n.userId,t=await c.Z.get("".concat("http://api1.chandrakala.co.in/api/Permission","/ByUser/").concat(e));a(t.data),l(!1),console.log(t.data)}catch(e){console.error("Error fetching permissions:",e),l(!1)}})()}),[n]);return"function"===typeof t?t({hasPermission:(e,t)=>{const n=o.find((t=>t.id===e));return n&&n[t]}}):null};i.propTypes={children:a().oneOfType([a().node,a().func]).isRequired};const l=i},24220:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var r=n(72791),o=n(89704),a=n.n(o);const s={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_ARCHIEVED:"http://api1.chandrakala.co.in/api/Tickets/Archived",REACT_APP_API_CHANGE_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ChangePassword",REACT_APP_API_DEPARTMENTS:"http://api1.chandrakala.co.in/api/Departments",REACT_APP_API_FORGOT_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ForgetPassword",REACT_APP_API_LOGIN:"http://api1.chandrakala.co.in/api/Login",REACT_APP_API_MODULE:"http://api1.chandrakala.co.in/api/Module",REACT_APP_API_PERMISSION:"http://api1.chandrakala.co.in/api/Permission",REACT_APP_API_PROJECTTYPE:"http://api1.chandrakala.co.in/api/ProjectType",REACT_APP_API_ROLES:"http://api1.chandrakala.co.in/api/Roles",REACT_APP_API_TICKET:"http://api1.chandrakala.co.in/api/Tickets",REACT_APP_API_TICKETFLOW:"http://api1.chandrakala.co.in/api/TicketFlow",REACT_APP_API_TICKETFLOW_BY_COMMENTS:"http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId",REACT_APP_API_TICKETTYPE:"http://api1.chandrakala.co.in/api/TicketTypes",REACT_APP_API_TICKET_COMPLETED:"http://api1.chandrakala.co.in/api/Ticket/MarkCompleted",REACT_APP_API_UPLOAD:"http://api1.chandrakala.co.in/api/Users/upload",REACT_APP_API_USERS:"http://api1.chandrakala.co.in/api/Users",REACT_APP_API_USER_BY_ID:"http://api1.chandrakala.co.in/api/Users",REACT_APP_BASE_API_URL:"http://api1.chandrakala.co.in/api",REACT_APP_BASE_URL:"http://api1.chandrakala.co.in",REACT_APP_MY_SERVER:"http://ticket.chandrakala.co.in"}.REACT_APP_SECRET_KEY||"ghjsfysdg123",c=(0,r.createContext)({encrypt:e=>{console.log("Data to encrypt:",e);const t=a().AES.encrypt(e.toString(),s).toString();return console.log("Encrypted data:",t),t.replace(/\//g,";")},decrypt:e=>{if("string"!==typeof e)return e;e=e.replace(/;/g,"/");return a().AES.decrypt(e,s).toString(a().enc.Utf8)}}),i=()=>(0,r.useContext)(c)},93186:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ue});var r=n(72791),o=n(62591),a=n(47798),s=n(12576),c=n(43360),i=n(17612),l=n(11087),d=n(88890),u=n.n(d),p=n(9806),h=n(11632),f=n(55294),m=n(24220),x=n(80184);const g="http://api1.chandrakala.co.in",v=e=>{let{tickets:t,hasPermission:n,setTickets:d}=e;const[v,w]=(0,r.useState)(!1),[k,C]=(0,r.useState)(null),[P,j]=(0,r.useState)({}),y=(0,r.useRef)(null),[E,T]=(0,r.useState)(!1),[A,_]=(0,r.useState)(!1),[b,S]=(0,r.useState)(!1),{encrypt:R}=(0,m.R)();(0,r.useEffect)((()=>{t.forEach((e=>{(async e=>{try{const t=await fetch("".concat("http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId","/").concat(e));if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));const n=await t.json(),r=n.length>0?n[n.length-1].comment:"No comments";j((t=>({...t,[e]:r})))}catch(t){console.error("Error fetching comments for ticket ".concat(e,":"),t)}})(e.ticketId)}))}),[t]),(0,r.useEffect)((()=>{y.current&&u()(y.current).DataTable()}),[]);const I=()=>{C(null),T(!1)},N=()=>{console.log("Archiving ticket:",k),f.Z.put("".concat("http://api1.chandrakala.co.in/api/Tickets","/").concat(k.ticketId,"/archive")).then((e=>{console.log("Ticket archived successfully:",e.data),d(t.filter((e=>e.ticketId!==k.ticketId)))})).catch((e=>{console.error("Error archiving ticket:",e)})),I()};return(0,x.jsxs)("div",{className:"mt-6 table-responsive",children:[(0,x.jsxs)(o.Z,{ref:y,striped:!0,bordered:!0,hover:"sm",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"TicketID"}),(0,x.jsx)("th",{children:"Title"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"Priority"}),(0,x.jsx)("th",{children:"TicketType"}),(0,x.jsx)("th",{children:"DueDate"}),(0,x.jsx)("th",{children:"Department"}),(0,x.jsx)("th",{children:"ProjectType"}),(0,x.jsx)("th",{children:"Actions"})]})}),(0,x.jsx)("tbody",{children:t.map(((e,t)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:t+1}),(0,x.jsx)("td",{children:e.ticketId}),(0,x.jsx)("td",{children:(0,x.jsx)(a.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,x.jsx)(s.Z,{id:"tooltip-".concat(e.ticketId),children:P[e.ticketId]?(0,x.jsxs)(x.Fragment,{children:["Last comment:",(0,x.jsx)("div",{dangerouslySetInnerHTML:{__html:P[e.ticketId]}})]}):(0,x.jsxs)("div",{children:["Description: ",(0,x.jsx)("br",{}),e.description]})}),children:(0,x.jsx)("span",{children:e.title})},e.ticketId)}),(0,x.jsx)("td",{children:e.status}),(0,x.jsx)("td",{children:e.priority}),(0,x.jsx)("td",{children:e.ticketType}),(0,x.jsx)("td",{children:new Date(e.dueDate).toLocaleString()}),(0,x.jsx)("td",{children:e.department}),(0,x.jsx)("td",{children:e.projectType}),(0,x.jsx)("td",{children:(0,x.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[n(2,"canUpdateOnly")&&(0,x.jsx)(l.rU,{to:"EditTicket/".concat(R(e.ticketId)),children:(0,x.jsx)(p.G,{icon:h.e0A,className:"text-primary"})}),n(2,"canViewOnly")&&(0,x.jsx)(c.Z,{variant:"link",onClick:()=>(e=>{C(e),w(!0)})(e),children:(0,x.jsx)(p.G,{icon:h.Mdf,className:"text-success"})}),n(2,"canDeleteOnly")&&(0,x.jsx)(p.G,{icon:h.On6,className:"text-danger",onClick:()=>(e=>{C(e),T(!0)})(e)}),(0,x.jsxs)(i.Z,{show:E,onHide:I,children:[(0,x.jsx)(i.Z.Header,{closeButton:!0,children:(0,x.jsx)(i.Z.Title,{children:"Confirm Archive"})}),(0,x.jsxs)(i.Z.Body,{children:["Are you sure you want to archive ticket ",k?k.id:"","?"]}),(0,x.jsxs)(i.Z.Footer,{children:[(0,x.jsx)(c.Z,{variant:"secondary",onClick:I,children:"Cancel"}),(0,x.jsx)(c.Z,{variant:"danger",onClick:N,children:"Archive"})]})]})]})})]},e.ticketId)))})]}),k&&(0,x.jsxs)(i.Z,{show:v,onHide:()=>w(!1),size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,x.jsx)(i.Z.Header,{closeButton:!0,children:(0,x.jsx)(i.Z.Title,{id:"contained-modal-title-vcenter",children:"Ticket Details"})}),(0,x.jsxs)(i.Z.Body,{children:[(0,x.jsxs)("p",{children:["Title: ",k.title]}),(0,x.jsxs)("p",{children:["Description: ",k.description]}),(0,x.jsxs)("p",{children:["Creator ID: ",k.email]}),(0,x.jsxs)("p",{children:["Assignee ID: ",k.assigneeEmail]}),(0,x.jsx)("p",{children:"Attachments:"}),k.attachment&&(0,x.jsx)("div",{children:b&&/\.(png|jpg|jpeg|gif|bmp)$/i.test(k.attachment)?(0,x.jsx)("img",{src:"".concat(g,"/").concat(k.attachment.replace("wwwroot/","")),alt:"Attachment",className:"img-fluid"}):(0,x.jsx)("p",{children:(0,x.jsx)("a",{href:"".concat(g,"/").concat(k.attachment.replace("wwwroot/","")),target:"_blank",rel:"noopener noreferrer",children:"View Attachment"})})})]}),(0,x.jsx)(i.Z.Footer,{children:(0,x.jsx)(c.Z,{onClick:()=>w(!1),children:"Close"})})]})]})};var w=n(52007),k=n.n(w),C=n(81694),P=n.n(C),j=n(13808),y=n(3070),E=n(83722),T=n(52803),A=n(53649),_=n(79392),b=n(39007);const S=r.createContext(null);var R=n(28633),I=n(88582),N=n(76050),Z=n(81012);const O=["children"];const D=()=>{};function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.useContext)(S),[n,o]=(0,R.Z)(),a=(0,r.useRef)(!1),{flip:s,offset:c,rootCloseEvent:i,fixed:l=!1,placement:d,popperConfig:u={},enableEventListeners:p=!0,usePopper:h=!!t}=e,f=null==(null==t?void 0:t.show)?!!e.show:t.show;f&&!a.current&&(a.current=!0);const{placement:m,setMenu:x,menuElement:g,toggleElement:v}=t||{},w=(0,I.Z)(v,g,(0,Z.ZP)({placement:d||m||"bottom-start",enabled:h,enableEvents:null==p?f:p,offset:c,flip:s,fixed:l,arrowElement:n,popperConfig:u})),k=Object.assign({ref:x||D,"aria-labelledby":null==v?void 0:v.id},w.attributes.popper,{style:w.styles.popper}),C={show:f,placement:m,hasShown:a.current,toggle:null==t?void 0:t.toggle,popper:h?w:null,arrowProps:h?Object.assign({ref:o},w.attributes.arrow,{style:w.styles.arrow}):{}};return(0,N.Z)(g,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:i,disabled:!f}),[k,C]}function M(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,O);const[r,o]=L(n);return(0,x.jsx)(x.Fragment,{children:t(r,o)})}M.displayName="DropdownMenu",M.defaultProps={usePopper:!0};const U=M;var B=n(89181);const F=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},H=()=>{};function K(){const e=(0,B.gP)(),{show:t=!1,toggle:n=H,setToggle:o,menuElement:a}=(0,r.useContext)(S)||{},s=(0,r.useCallback)((e=>{n(!t,e)}),[t,n]),c={id:e,ref:o||H,onClick:s,"aria-expanded":!!t};return a&&F(a)&&(c["aria-haspopup"]=!0),[c,{show:t,toggle:n}]}function W(e){let{children:t}=e;const[n,r]=K();return(0,x.jsx)(x.Fragment,{children:t(n,r)})}W.displayName="DropdownToggle";const G=W;var V=n(78633),Y=n(74784),z=n(15341),$=n(71306);const q=["eventKey","disabled","onClick","active","as"];function J(e){let{key:t,href:n,active:o,disabled:a,onClick:s}=e;const c=(0,r.useContext)(V.Z),i=(0,r.useContext)(Y.Z),{activeKey:l}=i||{},d=(0,V.h)(t,n),u=null==o&&null!=t?(0,V.h)(l)===d:o;return[{onClick:(0,b.Z)((e=>{a||(null==s||s(e),c&&!e.isPropagationStopped()&&c(d,e))})),"aria-disabled":a||void 0,"aria-selected":u,[(0,$.PB)("dropdown-item")]:""},{isActive:u}]}const Q=r.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:a,as:s=z.ZP}=e,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,q);const[i]=J({key:n,href:c.href,disabled:r,onClick:o,active:a});return(0,x.jsx)(s,Object.assign({},c,{ref:t},i))}));Q.displayName="DropdownItem";const X=Q;var ee=n(58865);function te(){const e=(0,A.Z)(),t=(0,r.useRef)(null),n=(0,r.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function ne(e){let{defaultShow:t,show:n,onSelect:o,onToggle:a,itemSelector:s="* [".concat((0,$.PB)("dropdown-item"),"]"),focusFirstItemOnShow:c,placement:i="bottom-start",children:l}=e;const d=(0,ee.Z)(),[u,p]=(0,E.$c)(n,t,a),[h,f]=te(),m=h.current,[g,v]=te(),w=g.current,k=(0,T.Z)(u),C=(0,r.useRef)(null),P=(0,r.useRef)(!1),A=(0,r.useContext)(V.Z),R=(0,r.useCallback)((function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;p(e,{originalEvent:t,source:n})}),[p]),I=(0,b.Z)(((e,t)=>{null==o||o(e,t),R(!1,t,"select"),t.isPropagationStopped()||null==A||A(e,t)})),N=(0,r.useMemo)((()=>({toggle:R,placement:i,show:u,menuElement:m,toggleElement:w,setMenu:f,setToggle:v})),[R,i,u,m,w,f,v]);m&&k&&!u&&(P.current=m.contains(m.ownerDocument.activeElement));const Z=(0,b.Z)((()=>{w&&w.focus&&w.focus()})),O=(0,b.Z)((()=>{const e=C.current;let t=c;if(null==t&&(t=!(!h.current||!F(h.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,j.Z)(h.current,s)[0];n&&n.focus&&n.focus()}));(0,r.useEffect)((()=>{u?O():P.current&&(P.current=!1,Z())}),[u,P,Z,O]),(0,r.useEffect)((()=>{C.current=null}));const D=(e,t)=>{if(!h.current)return null;const n=(0,j.Z)(h.current,s);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,_.Z)((0,r.useCallback)((()=>d.document),[d]),"keydown",(e=>{var t,n;const{key:r}=e,o=e.target,a=null==(t=h.current)?void 0:t.contains(o),s=null==(n=g.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&a||"Escape"===r&&"search"===o.type))return;if(!a&&!s)return;if("Tab"===r&&(!h.current||!u))return;C.current=e.type;const c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=D(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),u){const e=D(o,1);e&&e.focus&&e.focus()}else p(!0,c);return;case"Tab":(0,y.ZP)(o.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=h.current)&&t.contains(e.target)||p(!1,c)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),p(!1,c)}})),(0,x.jsx)(V.Z.Provider,{value:I,children:(0,x.jsx)(S.Provider,{value:N,children:l})})}ne.displayName="Dropdown",ne.Menu=U,ne.Toggle=G,ne.Item=X;const re=ne;var oe=n(80239);const ae=r.createContext({});ae.displayName="DropdownContext";const se=ae;var ce=n(10162);const ie=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="hr",role:a="separator",...s}=e;return r=(0,ce.vE)(r,"dropdown-divider"),(0,x.jsx)(o,{ref:t,className:P()(n,r),role:a,...s})}));ie.displayName="DropdownDivider";const le=ie,de=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",role:a="heading",...s}=e;return r=(0,ce.vE)(r,"dropdown-header"),(0,x.jsx)(o,{ref:t,className:P()(n,r),role:a,...s})}));de.displayName="DropdownHeader";const ue=de;var pe=n(16445);const he=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,eventKey:o,disabled:a=!1,onClick:s,active:c,as:i=pe.Z,...l}=e;const d=(0,ce.vE)(n,"dropdown-item"),[u,p]=J({key:o,href:l.href,disabled:a,onClick:s,active:c});return(0,x.jsx)(i,{...l,...u,ref:t,className:P()(r,d,p.isActive&&"active",a&&"disabled")})}));he.displayName="DropdownItem";const fe=he,me=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="span",...a}=e;return r=(0,ce.vE)(r,"dropdown-item-text"),(0,x.jsx)(o,{ref:t,className:P()(n,r),...a})}));me.displayName="DropdownItemText";const xe=me;var ge=n(49815),ve=n(73201),we=(n(42391),n(91991));const ke=r.createContext(null);ke.displayName="NavbarContext";const Ce=ke;n(92176);function Pe(e,t){return e}function je(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}const ye=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,align:a,rootCloseEvent:s,flip:c=!0,show:i,renderOnMount:l,as:d="div",popperConfig:u,variant:p,...h}=e,f=!1;const m=(0,r.useContext)(Ce),g=(0,ce.vE)(n,"dropdown-menu"),{align:v,drop:w,isRTL:k}=(0,r.useContext)(se);a=a||v;const C=(0,r.useContext)(we.Z),j=[];if(a)if("object"===typeof a){const e=Object.keys(a);if(e.length){const t=e[0],n=a[t];f="start"===n,j.push("".concat(g,"-").concat(t,"-").concat(n))}}else"end"===a&&(f=!0);const y=je(f,w,k),[E,{hasShown:T,popper:A,show:_,toggle:b}]=L({flip:c,rootCloseEvent:s,show:i,usePopper:!m&&0===j.length,offset:[0,2],popperConfig:u,placement:y});if(E.ref=(0,ve.Z)(Pe(t),E.ref),(0,ge.Z)((()=>{_&&(null==A||A.update())}),[_]),!T&&!l&&!C)return null;"string"!==typeof d&&(E.show=_,E.close=()=>null==b?void 0:b(!1),E.align=a);let S=h.style;return null!=A&&A.placement&&(S={...h.style,...E.style},h["x-placement"]=A.placement),(0,x.jsx)(d,{...h,...E,style:S,...(j.length||m)&&{"data-bs-popper":"static"},className:P()(o,g,_&&"show",f&&"".concat(g,"-end"),p&&"".concat(g,"-").concat(p),...j)})}));ye.displayName="DropdownMenu";const Ee=ye,Te=r.forwardRef(((e,t)=>{let{bsPrefix:n,split:o,className:a,childBsPrefix:s,as:i=c.Z,...l}=e;const d=(0,ce.vE)(n,"dropdown-toggle"),u=(0,r.useContext)(S);void 0!==s&&(l.bsPrefix=s);const[p]=K();return p.ref=(0,ve.Z)(p.ref,Pe(t)),(0,x.jsx)(i,{className:P()(a,d,o&&"".concat(d,"-split"),(null==u?void 0:u.show)&&"show"),...p,...l})}));Te.displayName="DropdownToggle";const Ae=Te,_e=r.forwardRef(((e,t)=>{const{bsPrefix:n,drop:o="down",show:a,className:s,align:c="start",onSelect:i,onToggle:l,focusFirstItemOnShow:d,as:u="div",navbar:p,autoClose:h=!0,...f}=(0,oe.Ch)(e,{show:"onToggle"}),m=(0,r.useContext)(we.Z),g=(0,ce.vE)(n,"dropdown"),v=(0,ce.SC)(),w=(0,b.Z)(((e,t)=>{var n,r;var o;(null==(n=t.originalEvent)||null==(r=n.target)?void 0:r.classList.contains("dropdown-toggle"))&&"mousedown"===t.source||(t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),o=t.source,(!1===h?"click"===o:"inside"===h?"rootClose"!==o:"outside"!==h||"select"!==o)&&(null==l||l(e,t)))})),k=je("end"===c,o,v),C=(0,r.useMemo)((()=>({align:c,drop:o,isRTL:v})),[c,o,v]),j={down:g,"down-centered":"".concat(g,"-center"),up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,x.jsx)(se.Provider,{value:C,children:(0,x.jsx)(re,{placement:k,show:a,onSelect:i,onToggle:w,focusFirstItemOnShow:d,itemSelector:".".concat(g,"-item:not(.disabled):not(:disabled)"),children:m?f.children:(0,x.jsx)(u,{...f,ref:t,className:P()(s,a&&"show",j[o])})})})}));_e.displayName="Dropdown";const be=Object.assign(_e,{Toggle:Ae,Menu:Ee,Item:fe,ItemText:xe,Divider:le,Header:ue}),Se=k().oneOf(["start","end"]),Re=k().oneOfType([Se,k().shape({sm:Se}),k().shape({md:Se}),k().shape({lg:Se}),k().shape({xl:Se}),k().shape({xxl:Se}),k().object]),Ie={id:k().string,href:k().string,onClick:k().func,title:k().node.isRequired,disabled:k().bool,align:Re,menuRole:k().string,renderMenuOnMount:k().bool,rootCloseEvent:k().string,menuVariant:k().oneOf(["dark"]),flip:k().bool,bsPrefix:k().string,variant:k().string,size:k().string},Ne=r.forwardRef(((e,t)=>{let{title:n,children:r,bsPrefix:o,rootCloseEvent:a,variant:s,size:c,menuRole:i,renderMenuOnMount:l,disabled:d,href:u,id:p,menuVariant:h,flip:f,...m}=e;return(0,x.jsxs)(be,{ref:t,...m,children:[(0,x.jsx)(Ae,{id:p,href:u,size:c,variant:s,disabled:d,childBsPrefix:o,children:n}),(0,x.jsx)(Ee,{role:i,renderOnMount:l,rootCloseEvent:a,variant:h,flip:f,children:r})]})}));Ne.displayName="DropdownButton",Ne.propTypes=Ie;const Ze=Ne;var Oe=n(24849),De=n(36704),Le=n(57689);const Me="http://api1.chandrakala.co.in/api/Tickets",Ue=()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)([]),[a,s]=(0,r.useState)(!0),[i,l]=(0,r.useState)("All"),[d,u]=(0,r.useState)("All"),[p,h]=(0,r.useState)([]);let f=(0,Le.s0)();const m=()=>{f("/Tickets/AddTicket")},g=async e=>{try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));return await t.json()}catch(t){throw console.error("Error fetching data:",t),t}};return(0,r.useEffect)((()=>{(async()=>{try{const e=await g(Me);t(e),s(!1)}catch(e){s(!1)}})()}),[]),(0,r.useEffect)((()=>{(async()=>{try{let t=[...e];"All"!==i&&(t=t.filter((e=>e.priority.toLowerCase()===i.toLowerCase()))),"All"!==d&&(t=t.filter((e=>e.status.toLowerCase()===d.toLowerCase()))),o(t)}catch(t){console.error("Error applying filters:",t)}})()}),[e,i,d]),(0,r.useEffect)((()=>{(async()=>{try{const e=await g("".concat(Me,"?includeArchived=false")),n=await g("http://api1.chandrakala.co.in/api/Tickets/Archived");t(e),h(n),s(!1)}catch(e){s(!1)}})()}),[]),(0,x.jsx)(De.Z,{children:r=>{let{hasPermission:o}=r;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,x.jsx)("h4",{children:"All Tickets"}),(0,x.jsxs)("div",{className:"d-flex gap-2 align-items-center",children:[(0,x.jsxs)(Ze,{title:"Priority: ".concat(i),variant:"info",children:[(0,x.jsx)(be.Item,{onClick:()=>l("All"),children:"All"}),(0,x.jsx)(be.Item,{onClick:()=>l("High"),children:"High"}),(0,x.jsx)(be.Item,{onClick:()=>l("medium"),children:"Medium"}),(0,x.jsx)(be.Item,{onClick:()=>l("Low"),children:"Low"})]}),(0,x.jsxs)(Ze,{title:"Status: ".concat(d),variant:"info",children:[(0,x.jsx)(be.Item,{onClick:()=>u("All"),children:"All"}),(0,x.jsx)(be.Item,{onClick:()=>u("Active"),children:"Active"}),(0,x.jsx)(be.Item,{onClick:()=>u("Pending"),children:"Pending"}),(0,x.jsx)(be.Item,{onClick:()=>u("Unassigned"),children:"Unassigned"}),(0,x.jsx)(be.Item,{onClick:()=>u("Completed"),children:"Completed"})]}),o(2,"canAddOnly")&&(0,x.jsx)(c.Z,{type:"button",className:"btn btn-primary",onClick:m,children:"Add Ticket"})]})]}),(0,x.jsx)("div",{children:a?(0,x.jsx)("div",{className:"text-center",children:(0,x.jsx)(Oe.Z,{animation:"border",role:"status",children:(0,x.jsx)("span",{className:"visually-hidden",children:"loading.."})})}):(0,x.jsx)(v,{tickets:"All"!==d||"All"!==i?n:e,hasPermission:o,setTickets:t})})]})}})}},53649:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(72791);function o(){const[,e]=(0,r.useReducer)((e=>!e),!1);return e}},74784:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const r=n(72791).createContext(null);r.displayName="NavContext";const o=r},78633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,h:()=>o});var r=n(72791);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},a=r.createContext(null)},83722:(e,t,n)=>{"use strict";n.d(t,{$c:()=>o});var r=n(72791);function o(e,t,n){const o=(0,r.useRef)(void 0!==e),[a,s]=(0,r.useState)(t),c=void 0!==e,i=o.current;return o.current=c,!c&&i&&a!==t&&s(t),[c?e:a,(0,r.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const[o,...a]=t;let c=null==n?void 0:n(o,...a);return s(o),c}),[n])]}},91991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const r=n(72791).createContext(null);r.displayName="InputGroupContext";const o=r},42480:()=>{},89181:(e,t,n)=>{"use strict";n.d(t,{gP:()=>d});var r=n(72791);const o={prefix:String(Math.round(1e10*Math.random())),current:0},a=r.createContext(o),s=r.createContext(!1);let c=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),i=new WeakMap;function l(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useContext)(a),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,s;let e=null===(s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s||null===(o=s.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=i.get(e);null==n?i.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,i.delete(e))}n.current=++t.current}return n.current}const d="function"===typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"===typeof r.useSyncExternalStore?r.useSyncExternalStore(h,u,p):(0,r.useContext)(s)),a=n?"react-aria":"react-aria".concat(o.prefix);return e||"".concat(a,"-").concat(t)}:function(e){let t=(0,r.useContext)(a);t!==o||c||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=l(!!e),s="react-aria".concat(t.prefix);return e||"".concat(s,"-").concat(n)};function u(){return!1}function p(){return!0}function h(e){return()=>{}}}}]);
//# sourceMappingURL=4690.49eec904.chunk.js.map