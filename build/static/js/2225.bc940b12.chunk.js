(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2225],{24220:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var r=n(72791),a=n(89704),o=n.n(a);const s={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_ARCHIEVED:"http://api1.chandrakala.co.in/api/Tickets/ArchivedByUser",REACT_APP_API_CHANGE_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ChangePassword",REACT_APP_API_DEPARTMENTS:"http://api1.chandrakala.co.in/api/Departments",REACT_APP_API_DESIGNATION:"http://api1.chandrakala.co.in/api/Designation",REACT_APP_API_FORGOT_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ForgetPassword",REACT_APP_API_LOGIN:"http://api1.chandrakala.co.in/api/Login",REACT_APP_API_MODULE:"http://api1.chandrakala.co.in/api/Modules",REACT_APP_API_PERMISSION:"http://api1.chandrakala.co.in/api/Permission",REACT_APP_API_PROJECTTYPE:"http://api1.chandrakala.co.in/api/ProjectType",REACT_APP_API_TICKET:"http://api1.chandrakala.co.in/api/Tickets",REACT_APP_API_TICKETFLOW:"http://api1.chandrakala.co.in/api/TicketFlow",REACT_APP_API_TICKETFLOW_BY_COMMENTS:"http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId",REACT_APP_API_TICKETTYPE:"http://api1.chandrakala.co.in/api/TicketTypes",REACT_APP_API_TICKET_COMPLETED:"http://api1.chandrakala.co.in/api/Tickets/MarkCompleted",REACT_APP_API_UPLOAD:"http://api1.chandrakala.co.in/api/Users/upload",REACT_APP_API_USERS:"http://api1.chandrakala.co.in/api/Users",REACT_APP_API_USER_BY_ID:"http://api1.chandrakala.co.in/api/Users",REACT_APP_BASE_API_URL:"http://api1.chandrakala.co.in/api",REACT_APP_BASE_URL:"http://api1.chandrakala.co.in",REACT_APP_MY_SERVER:"http://test1.chandrakala.co.in"}.REACT_APP_SECRET_KEY||"ghjsfysdg123",c=(0,r.createContext)({encrypt:e=>{console.log("Data to encrypt:",e);const t=o().AES.encrypt(e.toString(),s).toString();return console.log("Encrypted data:",t),t.replace(/\//g,";")},decrypt:e=>{if("string"!==typeof e)return e;e=e.replace(/;/g,"/");return o().AES.decrypt(e,s).toString(o().enc.Utf8)}}),i=()=>(0,r.useContext)(c)},67088:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ue});var r=n(72791),a=n(62591),o=n(47798),s=n(12576),c=n(43360),i=n(17612),l=n(11087),d=n(88890),u=n.n(d),p=n(9806),h=n(11632),f=n(55294),m=n(24220),x=n(583),g=n(80184);const v="http://api1.chandrakala.co.in",w=e=>{let{tickets:t,hasPermission:n,setTickets:d}=e;const[w,C]=(0,r.useState)(!1),[k,j]=(0,r.useState)(null),[P,E]=(0,r.useState)({}),y=(0,r.useRef)(null),[T,A]=(0,r.useState)(!1),[_,b]=(0,r.useState)(!1),[I,S]=(0,r.useState)(!1),{encrypt:R}=(0,m.R)(),{user:N}=(0,x.a)();(0,r.useEffect)((()=>{t.forEach((e=>{(async e=>{try{const t=await fetch("".concat("http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId","/").concat(e));if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));const n=await t.json(),r=n.length>0?n[n.length-1].comment:"No comments";E((t=>({...t,[e]:r})))}catch(t){console.error("Error fetching comments for ticket ".concat(e,":"),t)}})(e.ticketId)}))}),[t]),(0,r.useEffect)((()=>{y.current&&u()(y.current).DataTable()}),[]);const Z=()=>{j(null),A(!1)},D=()=>{console.log("Archiving ticket:",k),f.Z.post("".concat("http://api1.chandrakala.co.in/api/Tickets","/").concat(k.ticketId,"/archive?userId=").concat(N.userId)).then((e=>{console.log("Ticket archived successfully:",e.data),d(t.filter((e=>e.ticketId!==k.ticketId)))})).catch((e=>{console.error("Error archiving ticket:",e)})),Z()};return(0,g.jsxs)("div",{className:"mt-6 table-responsive",children:[(0,g.jsxs)(a.Z,{ref:y,striped:!0,bordered:!0,hover:"sm",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"S.No"}),(0,g.jsx)("th",{children:"TicketID"}),(0,g.jsx)("th",{children:"Title"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Priority"}),(0,g.jsx)("th",{children:"TicketType"}),(0,g.jsx)("th",{children:"DueDate"}),(0,g.jsx)("th",{children:"Department"}),(0,g.jsx)("th",{children:"ProjectType"}),(0,g.jsx)("th",{children:"Actions"})]})}),(0,g.jsx)("tbody",{children:t.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:t+1}),(0,g.jsx)("td",{children:e.ticketId}),(0,g.jsx)("td",{children:(0,g.jsx)(o.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,g.jsx)(s.Z,{id:"tooltip-".concat(e.ticketId),children:P[e.ticketId]?(0,g.jsxs)(g.Fragment,{children:["Last comment:",(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:P[e.ticketId]}})]}):(0,g.jsxs)("div",{children:["Description: ",(0,g.jsx)("br",{}),e.description]})}),children:(0,g.jsx)("span",{className:"text-truncate d-inline-block ",style:{maxWidth:"150px"},children:e.title})},e.ticketId)}),(0,g.jsx)("td",{children:e.status}),(0,g.jsx)("td",{children:e.priority}),(0,g.jsx)("td",{children:e.ticketType}),(0,g.jsx)("td",{children:new Date(e.dueDate).toLocaleString()}),(0,g.jsx)("td",{children:e.department}),(0,g.jsx)("td",{children:e.project}),(0,g.jsx)("td",{children:(0,g.jsxs)("div",{className:"d-flex gap-3 align-items-center",children:[n(2,"canUpdateOnly")&&(0,g.jsx)(l.rU,{to:"EditTicket/".concat(R(e.ticketId)),children:(0,g.jsx)(p.G,{icon:h.e0A,className:"text-primary"})}),n(2,"canViewOnly")&&(0,g.jsx)(c.Z,{variant:"link",onClick:()=>(e=>{j(e),C(!0)})(e),children:(0,g.jsx)(p.G,{icon:h.Mdf,className:"text-success"})}),n(2,"canDeleteOnly")&&(0,g.jsx)(p.G,{icon:h.On6,className:"text-danger",onClick:()=>(e=>{j(e),A(!0)})(e)}),(0,g.jsxs)(i.Z,{show:T,onHide:Z,children:[(0,g.jsx)(i.Z.Header,{closeButton:!0,children:(0,g.jsx)(i.Z.Title,{children:"Confirm Archive"})}),(0,g.jsxs)(i.Z.Body,{children:["Are you sure you want to archive ticket ",k?k.id:"","?"]}),(0,g.jsxs)(i.Z.Footer,{children:[(0,g.jsx)(c.Z,{variant:"secondary",onClick:Z,children:"Cancel"}),(0,g.jsx)(c.Z,{variant:"danger",onClick:D,children:"Archive"})]})]})]})})]},e.ticketId)))})]}),k&&(0,g.jsxs)(i.Z,{show:w,onHide:()=>C(!1),size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,g.jsx)(i.Z.Header,{closeButton:!0,children:(0,g.jsx)(i.Z.Title,{id:"contained-modal-title-vcenter",children:"Ticket Details"})}),(0,g.jsxs)(i.Z.Body,{children:[(0,g.jsxs)("p",{children:["Title: ",k.title]}),(0,g.jsxs)("p",{children:["Description: ",k.description]}),(0,g.jsxs)("p",{children:["Creator ID: ",k.email]}),(0,g.jsxs)("p",{children:["Assignee ID: ",k.assigneeEmail]}),(0,g.jsx)("p",{children:"Attachments:"}),k.attachment&&(0,g.jsx)("div",{children:I&&/\.(png|jpg|jpeg|gif|bmp)$/i.test(k.attachment)?(0,g.jsx)("img",{src:"".concat(v,"/").concat(k.attachment.replace("wwwroot/","")),alt:"Attachment",className:"img-fluid"}):(0,g.jsx)("p",{children:(0,g.jsx)("a",{href:"".concat(v,"/").concat(k.attachment.replace("wwwroot/","")),target:"_blank",rel:"noopener noreferrer",children:"View Attachment"})})})]}),(0,g.jsx)(i.Z.Footer,{children:(0,g.jsx)(c.Z,{onClick:()=>C(!1),children:"Close"})})]})]})};var C=n(52007),k=n.n(C),j=n(81694),P=n.n(j),E=n(13808),y=n(3070),T=n(83722),A=n(52803),_=n(53649),b=n(79392),I=n(39007);const S=r.createContext(null);var R=n(28633),N=n(88582),Z=n(76050),D=n(81012);const O=["children"];const M=()=>{};function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.useContext)(S),[n,a]=(0,R.Z)(),o=(0,r.useRef)(!1),{flip:s,offset:c,rootCloseEvent:i,fixed:l=!1,placement:d,popperConfig:u={},enableEventListeners:p=!0,usePopper:h=!!t}=e,f=null==(null==t?void 0:t.show)?!!e.show:t.show;f&&!o.current&&(o.current=!0);const{placement:m,setMenu:x,menuElement:g,toggleElement:v}=t||{},w=(0,N.Z)(v,g,(0,D.ZP)({placement:d||m||"bottom-start",enabled:h,enableEvents:null==p?f:p,offset:c,flip:s,fixed:l,arrowElement:n,popperConfig:u})),C=Object.assign({ref:x||M,"aria-labelledby":null==v?void 0:v.id},w.attributes.popper,{style:w.styles.popper}),k={show:f,placement:m,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:h?w:null,arrowProps:h?Object.assign({ref:a},w.attributes.arrow,{style:w.styles.arrow}):{}};return(0,Z.Z)(g,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:i,disabled:!f}),[C,k]}function U(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O);const[r,a]=L(n);return(0,g.jsx)(g.Fragment,{children:t(r,a)})}U.displayName="DropdownMenu",U.defaultProps={usePopper:!0};const B=U;var F=n(89181);const H=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},K=()=>{};function W(){const e=(0,F.gP)(),{show:t=!1,toggle:n=K,setToggle:a,menuElement:o}=(0,r.useContext)(S)||{},s=(0,r.useCallback)((e=>{n(!t,e)}),[t,n]),c={id:e,ref:a||K,onClick:s,"aria-expanded":!!t};return o&&H(o)&&(c["aria-haspopup"]=!0),[c,{show:t,toggle:n}]}function G(e){let{children:t}=e;const[n,r]=W();return(0,g.jsx)(g.Fragment,{children:t(n,r)})}G.displayName="DropdownToggle";const V=G;var Y=n(78633),z=n(74784),$=n(15341),q=n(71306);const J=["eventKey","disabled","onClick","active","as"];function Q(e){let{key:t,href:n,active:a,disabled:o,onClick:s}=e;const c=(0,r.useContext)(Y.Z),i=(0,r.useContext)(z.Z),{activeKey:l}=i||{},d=(0,Y.h)(t,n),u=null==a&&null!=t?(0,Y.h)(l)===d:a;return[{onClick:(0,I.Z)((e=>{o||(null==s||s(e),c&&!e.isPropagationStopped()&&c(d,e))})),"aria-disabled":o||void 0,"aria-selected":u,[(0,q.PB)("dropdown-item")]:""},{isActive:u}]}const X=r.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:a,active:o,as:s=$.ZP}=e,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,J);const[i]=Q({key:n,href:c.href,disabled:r,onClick:a,active:o});return(0,g.jsx)(s,Object.assign({},c,{ref:t},i))}));X.displayName="DropdownItem";const ee=X;var te=n(58865);function ne(){const e=(0,_.Z)(),t=(0,r.useRef)(null),n=(0,r.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function re(e){let{defaultShow:t,show:n,onSelect:a,onToggle:o,itemSelector:s="* [".concat((0,q.PB)("dropdown-item"),"]"),focusFirstItemOnShow:c,placement:i="bottom-start",children:l}=e;const d=(0,te.Z)(),[u,p]=(0,T.$c)(n,t,o),[h,f]=ne(),m=h.current,[x,v]=ne(),w=x.current,C=(0,A.Z)(u),k=(0,r.useRef)(null),j=(0,r.useRef)(!1),P=(0,r.useContext)(Y.Z),_=(0,r.useCallback)((function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;p(e,{originalEvent:t,source:n})}),[p]),R=(0,I.Z)(((e,t)=>{null==a||a(e,t),_(!1,t,"select"),t.isPropagationStopped()||null==P||P(e,t)})),N=(0,r.useMemo)((()=>({toggle:_,placement:i,show:u,menuElement:m,toggleElement:w,setMenu:f,setToggle:v})),[_,i,u,m,w,f,v]);m&&C&&!u&&(j.current=m.contains(m.ownerDocument.activeElement));const Z=(0,I.Z)((()=>{w&&w.focus&&w.focus()})),D=(0,I.Z)((()=>{const e=k.current;let t=c;if(null==t&&(t=!(!h.current||!H(h.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,E.Z)(h.current,s)[0];n&&n.focus&&n.focus()}));(0,r.useEffect)((()=>{u?D():j.current&&(j.current=!1,Z())}),[u,j,Z,D]),(0,r.useEffect)((()=>{k.current=null}));const O=(e,t)=>{if(!h.current)return null;const n=(0,E.Z)(h.current,s);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,b.Z)((0,r.useCallback)((()=>d.document),[d]),"keydown",(e=>{var t,n;const{key:r}=e,a=e.target,o=null==(t=h.current)?void 0:t.contains(a),s=null==(n=x.current)?void 0:n.contains(a);if(/input|textarea/i.test(a.tagName)&&(" "===r||"Escape"!==r&&o||"Escape"===r&&"search"===a.type))return;if(!o&&!s)return;if("Tab"===r&&(!h.current||!u))return;k.current=e.type;const c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=O(a,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),u){const e=O(a,1);e&&e.focus&&e.focus()}else p(!0,c);return;case"Tab":(0,y.ZP)(a.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=h.current)&&t.contains(e.target)||p(!1,c)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),p(!1,c)}})),(0,g.jsx)(Y.Z.Provider,{value:R,children:(0,g.jsx)(S.Provider,{value:N,children:l})})}re.displayName="Dropdown",re.Menu=B,re.Toggle=V,re.Item=ee;const ae=re;var oe=n(80239);const se=r.createContext({});se.displayName="DropdownContext";const ce=se;var ie=n(10162);const le=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="hr",role:o="separator",...s}=e;return r=(0,ie.vE)(r,"dropdown-divider"),(0,g.jsx)(a,{ref:t,className:P()(n,r),role:o,...s})}));le.displayName="DropdownDivider";const de=le,ue=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",role:o="heading",...s}=e;return r=(0,ie.vE)(r,"dropdown-header"),(0,g.jsx)(a,{ref:t,className:P()(n,r),role:o,...s})}));ue.displayName="DropdownHeader";const pe=ue;var he=n(16445);const fe=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,eventKey:a,disabled:o=!1,onClick:s,active:c,as:i=he.Z,...l}=e;const d=(0,ie.vE)(n,"dropdown-item"),[u,p]=Q({key:a,href:l.href,disabled:o,onClick:s,active:c});return(0,g.jsx)(i,{...l,...u,ref:t,className:P()(r,d,p.isActive&&"active",o&&"disabled")})}));fe.displayName="DropdownItem";const me=fe,xe=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="span",...o}=e;return r=(0,ie.vE)(r,"dropdown-item-text"),(0,g.jsx)(a,{ref:t,className:P()(n,r),...o})}));xe.displayName="DropdownItemText";const ge=xe;var ve=n(49815),we=n(73201),Ce=(n(42391),n(91991)),ke=n(5715);n(92176);function je(e,t){return e}function Pe(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}const Ee=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:a,align:o,rootCloseEvent:s,flip:c=!0,show:i,renderOnMount:l,as:d="div",popperConfig:u,variant:p,...h}=e,f=!1;const m=(0,r.useContext)(ke.Z),x=(0,ie.vE)(n,"dropdown-menu"),{align:v,drop:w,isRTL:C}=(0,r.useContext)(ce);o=o||v;const k=(0,r.useContext)(Ce.Z),j=[];if(o)if("object"===typeof o){const e=Object.keys(o);if(e.length){const t=e[0],n=o[t];f="start"===n,j.push("".concat(x,"-").concat(t,"-").concat(n))}}else"end"===o&&(f=!0);const E=Pe(f,w,C),[y,{hasShown:T,popper:A,show:_,toggle:b}]=L({flip:c,rootCloseEvent:s,show:i,usePopper:!m&&0===j.length,offset:[0,2],popperConfig:u,placement:E});if(y.ref=(0,we.Z)(je(t),y.ref),(0,ve.Z)((()=>{_&&(null==A||A.update())}),[_]),!T&&!l&&!k)return null;"string"!==typeof d&&(y.show=_,y.close=()=>null==b?void 0:b(!1),y.align=o);let I=h.style;return null!=A&&A.placement&&(I={...h.style,...y.style},h["x-placement"]=A.placement),(0,g.jsx)(d,{...h,...y,style:I,...(j.length||m)&&{"data-bs-popper":"static"},className:P()(a,x,_&&"show",f&&"".concat(x,"-end"),p&&"".concat(x,"-").concat(p),...j)})}));Ee.displayName="DropdownMenu";const ye=Ee,Te=r.forwardRef(((e,t)=>{let{bsPrefix:n,split:a,className:o,childBsPrefix:s,as:i=c.Z,...l}=e;const d=(0,ie.vE)(n,"dropdown-toggle"),u=(0,r.useContext)(S);void 0!==s&&(l.bsPrefix=s);const[p]=W();return p.ref=(0,we.Z)(p.ref,je(t)),(0,g.jsx)(i,{className:P()(o,d,a&&"".concat(d,"-split"),(null==u?void 0:u.show)&&"show"),...p,...l})}));Te.displayName="DropdownToggle";const Ae=Te,_e=r.forwardRef(((e,t)=>{const{bsPrefix:n,drop:a="down",show:o,className:s,align:c="start",onSelect:i,onToggle:l,focusFirstItemOnShow:d,as:u="div",navbar:p,autoClose:h=!0,...f}=(0,oe.Ch)(e,{show:"onToggle"}),m=(0,r.useContext)(Ce.Z),x=(0,ie.vE)(n,"dropdown"),v=(0,ie.SC)(),w=(0,I.Z)(((e,t)=>{var n,r;var a;(null==(n=t.originalEvent)||null==(r=n.target)?void 0:r.classList.contains("dropdown-toggle"))&&"mousedown"===t.source||(t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),a=t.source,(!1===h?"click"===a:"inside"===h?"rootClose"!==a:"outside"!==h||"select"!==a)&&(null==l||l(e,t)))})),C=Pe("end"===c,a,v),k=(0,r.useMemo)((()=>({align:c,drop:a,isRTL:v})),[c,a,v]),j={down:x,"down-centered":"".concat(x,"-center"),up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,g.jsx)(ce.Provider,{value:k,children:(0,g.jsx)(ae,{placement:C,show:o,onSelect:i,onToggle:w,focusFirstItemOnShow:d,itemSelector:".".concat(x,"-item:not(.disabled):not(:disabled)"),children:m?f.children:(0,g.jsx)(u,{...f,ref:t,className:P()(s,o&&"show",j[a])})})})}));_e.displayName="Dropdown";const be=Object.assign(_e,{Toggle:Ae,Menu:ye,Item:me,ItemText:ge,Divider:de,Header:pe}),Ie=k().oneOf(["start","end"]),Se=k().oneOfType([Ie,k().shape({sm:Ie}),k().shape({md:Ie}),k().shape({lg:Ie}),k().shape({xl:Ie}),k().shape({xxl:Ie}),k().object]),Re={id:k().string,href:k().string,onClick:k().func,title:k().node.isRequired,disabled:k().bool,align:Se,menuRole:k().string,renderMenuOnMount:k().bool,rootCloseEvent:k().string,menuVariant:k().oneOf(["dark"]),flip:k().bool,bsPrefix:k().string,variant:k().string,size:k().string},Ne=r.forwardRef(((e,t)=>{let{title:n,children:r,bsPrefix:a,rootCloseEvent:o,variant:s,size:c,menuRole:i,renderMenuOnMount:l,disabled:d,href:u,id:p,menuVariant:h,flip:f,...m}=e;return(0,g.jsxs)(be,{ref:t,...m,children:[(0,g.jsx)(Ae,{id:p,href:u,size:c,variant:s,disabled:d,childBsPrefix:a,children:n}),(0,g.jsx)(ye,{role:i,renderOnMount:l,rootCloseEvent:o,variant:h,flip:f,children:r})]})}));Ne.displayName="DropdownButton",Ne.propTypes=Re;const Ze=Ne;var De=n(24849),Oe=n(36704),Me=n(57689);const Le="http://api1.chandrakala.co.in/api/Tickets",Ue=()=>{const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)([]),[o,s]=(0,r.useState)(!0),[i,l]=(0,r.useState)("All"),[d,u]=(0,r.useState)("All"),[p,h]=(0,r.useState)([]),{user:f}=(0,x.a)();let m=(0,Me.s0)();const v=()=>{m("/Tickets/AddTicket")},C=async e=>{try{const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! Status: ".concat(t.status));return await t.json()}catch(t){throw console.error("Error fetching data:",t),t}};return(0,r.useEffect)((()=>{(async()=>{try{const e=await C("".concat(Le,"?userId=").concat(f.userId));t(e),s(!1)}catch(e){s(!1)}})()}),[f.userId]),(0,r.useEffect)((()=>{(async()=>{try{let t=[...e];"All"!==i&&(t=t.filter((e=>e.priority.toLowerCase()===i.toLowerCase()))),"All"!==d&&(t=t.filter((e=>e.status.toLowerCase()===d.toLowerCase()))),a(t)}catch(t){console.error("Error applying filters:",t)}})()}),[e,i,d]),(0,r.useEffect)((()=>{(async()=>{try{const e=await C("".concat(Le,"?userId=").concat(f.userId)),n=await C("".concat("http://api1.chandrakala.co.in/api/Tickets/ArchivedByUser","?userId=").concat(f.userId));t(e),h(n),s(!1)}catch(e){s(!1)}})()}),[f.userId]),(0,g.jsx)(Oe.Z,{children:r=>{let{hasPermission:a}=r;return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,g.jsx)("h4",{children:"All Tickets"}),(0,g.jsxs)("div",{className:"d-flex gap-2 align-items-center",children:[(0,g.jsxs)(Ze,{title:"Priority: ".concat(i),variant:"info",children:[(0,g.jsx)(be.Item,{onClick:()=>l("All"),children:"All"}),(0,g.jsx)(be.Item,{onClick:()=>l("High"),children:"High"}),(0,g.jsx)(be.Item,{onClick:()=>l("medium"),children:"Medium"}),(0,g.jsx)(be.Item,{onClick:()=>l("Low"),children:"Low"})]}),(0,g.jsxs)(Ze,{title:"Status: ".concat(d),variant:"info",children:[(0,g.jsx)(be.Item,{onClick:()=>u("All"),children:"All"}),(0,g.jsx)(be.Item,{onClick:()=>u("Open"),children:"Open"}),(0,g.jsx)(be.Item,{onClick:()=>u("Pending"),children:"Pending"}),(0,g.jsx)(be.Item,{onClick:()=>u("Unassigned"),children:"Unassigned"}),(0,g.jsx)(be.Item,{onClick:()=>u("Completed"),children:"Completed"})]}),a(2,"canAddOnly")&&(0,g.jsx)(c.Z,{type:"button",className:"btn btn-primary",onClick:v,children:"Add Ticket"})]})]}),(0,g.jsx)("div",{children:o?(0,g.jsx)("div",{className:"text-center",children:(0,g.jsx)(De.Z,{animation:"border",role:"status",children:(0,g.jsx)("span",{className:"visually-hidden",children:"loading.."})})}):(0,g.jsx)(w,{tickets:"All"!==d||"All"!==i?n:e,hasPermission:a,setTickets:t})})]})}})}},53649:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(72791);function a(){const[,e]=(0,r.useReducer)((e=>!e),!1);return e}},74784:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="NavContext";const a=r},78633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o,h:()=>a});var r=n(72791);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},o=r.createContext(null)},83722:(e,t,n)=>{"use strict";n.d(t,{$c:()=>a});var r=n(72791);function a(e,t,n){const a=(0,r.useRef)(void 0!==e),[o,s]=(0,r.useState)(t),c=void 0!==e,i=a.current;return a.current=c,!c&&i&&o!==t&&s(t),[c?e:o,(0,r.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const[a,...o]=t;let c=null==n?void 0:n(a,...o);return s(a),c}),[n])]}},91991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="InputGroupContext";const a=r},5715:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="NavbarContext";const a=r},42480:()=>{},89181:(e,t,n)=>{"use strict";n.d(t,{gP:()=>d});var r=n(72791);const a={prefix:String(Math.round(1e10*Math.random())),current:0},o=r.createContext(a),s=r.createContext(!1);let c=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),i=new WeakMap;function l(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useContext)(o),n=(0,r.useRef)(null);if(null===n.current&&!e){var a,s;let e=null===(s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s||null===(a=s.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let n=i.get(e);null==n?i.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,i.delete(e))}n.current=++t.current}return n.current}const d="function"===typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"===typeof r.useSyncExternalStore?r.useSyncExternalStore(h,u,p):(0,r.useContext)(s)),o=n?"react-aria":"react-aria".concat(a.prefix);return e||"".concat(o,"-").concat(t)}:function(e){let t=(0,r.useContext)(o);t!==a||c||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=l(!!e),s="react-aria".concat(t.prefix);return e||"".concat(s,"-").concat(n)};function u(){return!1}function p(){return!0}function h(e){return()=>{}}}}]);
//# sourceMappingURL=2225.bc940b12.chunk.js.map