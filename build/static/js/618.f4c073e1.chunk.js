"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[618],{75489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(55294),i=a(72791),l=a(583),n=a(24849),o=a(57689),c=a(2515),r=a(22120),d=a.n(r);const m=a.p+"static/media/greentick.ef2ae37034b7e6bd95f0.jpg";var u=a(80184);const p=()=>{const e=(0,o.s0)(),{user:t}=(0,l.a)(),[a,r]=(0,i.useState)(!1),[p,h]=(0,i.useState)([]),[f,b]=(0,i.useState)([]),[g,v]=(0,i.useState)([]),[j,x]=(0,i.useState)({email:t.email,priority:"low",title:"",departmentId:"",ticketTypeId:"",status:"Open",projectId:"",dueDate:"",description:"",assigneeEmail:"",attachments:null}),[N,y]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){try{const e=await s.Z.get("http://api1.chandrakala.co.in/api/Users");v(e.data)}catch(e){console.error("Error fetching Assignee:",e)}}()}),[]),(0,i.useEffect)((()=>{!async function(){try{const e=await s.Z.get("http://api1.chandrakala.co.in/api/TicketTypes");h(e.data)}catch(e){console.error("Error fetching Ticket Type:",e)}}()}),[]),(0,i.useEffect)((()=>{}),[p]),(0,i.useEffect)((()=>{!async function(){try{const e=await s.Z.get("http://api1.chandrakala.co.in/api/ProjectType");b(e.data)}catch(e){console.error("Error fetching Project Type:",e)}}()}),[]);const k=e=>{const{name:a,value:s}=e.target||e;if("assigneeEmail"===a){const e=g.find((e=>e.email===s));console.log(e);const i=s.toLowerCase()===t.email.toLowerCase(),l=i?e.departmentname:(null===e||void 0===e?void 0:e.departmentname)||"";x((t=>({...t,[a]:s,departmentId:(null===e||void 0===e?void 0:e.departmentId)||"",department:l,status:i?"Self-Assigned":"Open"}))),console.log(j.departmentId)}else x("departmentId"===a?e=>({...e,departmentId:s}):e=>({...e,[a]:s}));console.log(j.departmentId)};(0,i.useEffect)((()=>{const e=g.find((e=>e.email===j.assigneeEmail)),a=j.assigneeEmail.toLowerCase()===t.email.toLowerCase(),s=a?null===e||void 0===e?void 0:e.departmentname:(null===e||void 0===e?void 0:e.departmentname)||"";x((t=>({...t,departmentId:(null===e||void 0===e?void 0:e.departmentId)||"",department:s,status:a?"Self-Assigned":"Open"})))}),[j.assigneeEmail,g,t]);return(0,u.jsxs)("div",{className:"container mt-5",children:[(0,u.jsx)("div",{className:"d-flex justify-content-between"}),N&&(0,u.jsx)("div",{className:"alert ".concat(N.includes("successfully")?"alert-success":"alert-danger"),role:"alert",children:N}),(0,u.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),r(!0);const i=Object.entries(j).filter((e=>{let[t,a]=e;return"department"!==t})).map((e=>{let[t,a]=e;return"".concat(t,"=").concat(a)})).join("&"),l=new FormData;Object.entries(j).forEach((e=>{let[t,a]=e;if("attachments"===t){if(a)for(let s=0;s<a.length;s++)l.append("attachments",a[s])}else l.append(t,a)}));try{const a=await s.Z.post("".concat("http://api1.chandrakala.co.in/api/Tickets","?").concat(i),l,{headers:{"Content-Type":"multipart/form-data"}});console.log(a),y("Ticket added successfully!"),r(!1),d()({title:"Ticket",message:"New ticket has been assigned",duration:11e3,icon:m,native:!0,onClick:()=>window.location="".concat("http://test1.chandrakala.co.in")}),x({email:t.email,priority:"low",title:"",departmentId:"",ticketTypeId:"",status:"Open",projectId:"",dueDate:"",description:"",assigneeEmail:"",attachments:null}),e("/Tickets/AddTicket/".concat(a.data.userId))}catch(n){console.error(n),y("Error adding ticket. Please try again."),r(!1)}},children:[(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsx)("label",{htmlFor:"email",className:"col-sm-3 col-form-label text-end",children:"Creator"}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",placeholder:"Enter your Email",required:!0,value:t.email,onChange:k,disabled:!0})}),(0,u.jsxs)("label",{htmlFor:"assigneeEmail",className:"col-sm-3 col-form-label text-end",children:["Assignee Email",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)(c.ZP,{options:g.map((e=>({label:e.email,value:e.email}))),value:j.assigneeEmail?{label:j.assigneeEmail,value:j.assigneeEmail}:null,onChange:e=>k({target:{name:"assigneeEmail",value:e?e.value:""}}),isSearchable:!0,placeholder:"Select Ticket Type"})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsxs)("label",{htmlFor:"title",className:"col-sm-3 col-form-label text-end",children:["Title",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",placeholder:"Enter title",required:!0,onChange:k})}),(0,u.jsxs)("label",{htmlFor:"priority",className:"col-sm-3 col-form-label text-end",children:["Priority",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsxs)("select",{className:"form-select",id:"priority",name:"priority",placeholder:"Select priority",required:!0,onChange:k,children:[(0,u.jsx)("option",{defaultValue:!0,children:"Select Priority"}),(0,u.jsx)("option",{value:"low",children:"Low"}),(0,u.jsx)("option",{value:"medium",children:"Medium"}),(0,u.jsx)("option",{value:"high",children:"High"})]})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsxs)("label",{htmlFor:"ticketTypeId",className:"col-sm-3 col-form-label text-end",children:["Ticket Type",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)(c.ZP,{options:p.map((e=>({label:e.ticketType,value:e.ticketTypeId}))),value:j.ticketTypeId?{label:p.find((e=>e.ticketTypeId===j.ticketTypeId)).ticketType,value:j.ticketTypeId}:null,onChange:e=>k({target:{name:"ticketTypeId",value:e.value}}),isSearchable:!0,placeholder:"Select Ticket Type"})}),(0,u.jsx)("label",{htmlFor:"status",className:"col-sm-3 col-form-label text-end",children:"Status"}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{className:"form-control",id:"status",name:"status",value:j.status,required:!0,onChange:k,readOnly:!0,disabled:!0})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsxs)("label",{htmlFor:"projectId",className:"col-sm-3 col-form-label text-end",children:["Project Type",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)(c.ZP,{options:f.map((e=>({label:e.projectTypes,value:e.projectId}))),value:j.projectId?{label:f.find((e=>e.projectId===j.projectId)).projectTypes,value:j.projectId}:null,onChange:e=>k({target:{name:"projectId",value:e.value}}),isSearchable:!0,placeholder:"Select Project Type",required:!0})}),(0,u.jsxs)("label",{htmlFor:"dueDate",className:"col-sm-3 col-form-label text-end",children:["Due Date",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{type:"date",className:"form-control",id:"dueDate",name:"dueDate",placeholder:"Select Due Date",required:!0,onChange:k})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsx)("label",{htmlFor:"ticketId",className:"col-sm-3 col-form-label text-end",children:"Ticket ID:"}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)("input",{type:"text",className:"form-control",id:"ticketId",name:"ticketId",placeholder:"Ticket ID",required:!0,onChange:k,disabled:!0,value:"0"})}),(0,u.jsx)("label",{htmlFor:"department",className:"col-sm-3 col-form-label text-end",children:"Department"}),(0,u.jsx)("div",{className:"col-sm-3",children:(0,u.jsx)(c.ZP,{value:{value:j.departmentId,label:j.department},components:{DropdownIndicator:()=>null,IndicatorSeparator:()=>null},isDisabled:!0})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsxs)("label",{htmlFor:"description",className:"col-sm-3 col-form-label text-end",children:["Description",(0,u.jsx)("span",{className:"text-danger",children:" * "})]}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("textarea",{className:"form-control",id:"description",name:"description",placeholder:"Enter description",rows:"4",required:!0,onChange:k})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsx)("label",{htmlFor:"attachments",className:"col-sm-3 col-form-label text-end",children:"Attachments:"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{type:"file",className:"form-control",id:"attachments",name:"attachments",multiple:!0,onChange:e=>{x((t=>({...t,attachments:e.target.files})))}})})]}),(0,u.jsxs)("div",{className:"row mb-3",children:[(0,u.jsx)("div",{className:"col-sm-3"}),(0,u.jsx)("div",{className:"col-sm-9 text-end",children:(0,u.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:a,children:a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.Z,{animation:"border",size:"sm"})," Adding Ticket..."]}):"Add Ticket"})})]})]})]})}},22120:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Notifications=void 0;const i=s(a(5943));t.Notifications=i.default;const l=s(a(52932)).default.addNotification;t.default=l},5943:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(72791)),l=s(a(52932));a(7969);const n=s(a(64788));class o extends i.default.Component{constructor(){super(...arguments),this.state={value:[]}}componentDidMount(){l.default.addListener((e=>this.setState({value:e})))}render(){const{position:e}=this.props,t="rpn-notification-holder ".concat(e||"top-middle"," supertest");return i.default.createElement("div",{className:t},this.state.value.map(((e,t)=>i.default.createElement(n.default,{key:t,closeNotification:l.default.popAndPush,onClick:e.onClick,id:e.id,theme:e.theme,title:e.title,subtitle:e.subtitle,closeButton:e.closeButton,message:e.message,styling:e.styling}))))}}t.default=o},64788:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(72791));t.default=e=>{const{title:t,subtitle:a,message:s,theme:l,id:n,closeNotification:o,styling:c,closeButton:r,onClick:d}=e;let m={},u={};return c&&(m.backgroundColor=c.backgroundTop,m.color=c.colorTop,u.backgroundColor=c.backgroundBottom,u.color=c.colorBottom),i.default.createElement("div",{className:"rpn-notification-card ".concat(l),onClick:d},i.default.createElement("div",{className:"rpn-notification-card-top ".concat(l),style:Object.keys(m).length?m:void 0},i.default.createElement("span",null,t),i.default.createElement("span",{className:"rpn-notification-card-close ".concat(l),onClick:()=>o(n)},r||"close")),i.default.createElement("div",{className:"rpn-notification-card-bottom ".concat(l),style:Object.keys(u).length?u:void 0},i.default.createElement("span",{className:"subtitle"},a),i.default.createElement("span",{className:"message"},s)))}},52932:function(e,t){var a=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(i,l){function n(e){try{c(s.next(e))}catch(t){l(t)}}function o(e){try{c(s.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PushNotification=void 0;class s{constructor(e){this.title=e.title,this.subtitle=e.subtitle,this.message=e.message,this.theme=e.theme,this.id=Math.random(),this.styling=e.styling,this.closeButton=e.closeButton,this.onClick=e.onClick}}t.PushNotification=s;t.default=new class{constructor(){this.Storage=[],this.Listener=()=>this.Storage,this.popAndPush=e=>{let t=0;for(;t<this.Storage.length;)this.Storage[t].id===e?this.Storage.splice(t,1):++t;this.Listener(this.Storage)},this.setTimer=(e,t)=>{setTimeout((()=>this.popAndPush(e)),t)},this.addListener=e=>{this.Listener=e},this.addNativeNotification=e=>a(this,void 0,void 0,(function*(){const{title:t,subtitle:a,message:s,duration:i,icon:l,vibrate:n,silent:o,onClick:c}=e;if("default"!==Notification.permission&&"denied"!==Notification.permission||(yield Notification.requestPermission()),"granted"===Notification.permission){const e=new Notification(t,{body:s,data:a,icon:l,vibrate:n,silent:o});e.onclick=c||null,setTimeout(e.close.bind(e),i||3e3)}})),this.addWebNotification=e=>{const{title:t,subtitle:a,message:i,theme:l,duration:n,backgroundBottom:o,backgroundTop:c,colorBottom:r,colorTop:d,closeButton:m,onClick:u}=e,p=new s({title:t,subtitle:a,message:i,theme:l,styling:{backgroundTop:c,backgroundBottom:o,colorTop:d,colorBottom:r},closeButton:m,onClick:u});this.Storage.push(p),this.setTimer(p.id,n||3e3),this.Listener(this.Storage)},this.addNotification=e=>a(this,void 0,void 0,(function*(){const{native:t}=e;return t?this.addNativeNotification(e):this.addWebNotification(e)}))}}},7969:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s={}},87462:(e,t,a)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},s.apply(this,arguments)}a.d(t,{Z:()=>s})},63366:(e,t,a)=>{function s(e,t){if(null==e)return{};var a,s,i={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,{Z:()=>s})},89611:(e,t,a)=>{function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}a.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=618.f4c073e1.chunk.js.map