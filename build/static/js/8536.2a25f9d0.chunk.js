(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8536],{24220:(e,a,t)=>{"use strict";t.d(a,{R:()=>n});var s=t(72791),l=t(89704),r=t.n(l);const c={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_ARCHIEVED:"http://api1.chandrakala.co.in/api/Tickets/ArchivedByUser",REACT_APP_API_CHANGE_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ChangePassword",REACT_APP_API_DEPARTMENTS:"http://api1.chandrakala.co.in/api/Departments",REACT_APP_API_DESIGNATION:"http://api1.chandrakala.co.in/api/Designation",REACT_APP_API_FORGOT_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ForgetPassword",REACT_APP_API_LOGIN:"http://api1.chandrakala.co.in/api/Login",REACT_APP_API_MODULE:"http://api1.chandrakala.co.in/api/Modules",REACT_APP_API_PERMISSION:"http://api1.chandrakala.co.in/api/Permission",REACT_APP_API_PROJECTTYPE:"http://api1.chandrakala.co.in/api/ProjectType",REACT_APP_API_TICKET:"http://api1.chandrakala.co.in/api/Tickets",REACT_APP_API_TICKETFLOW:"http://api1.chandrakala.co.in/api/TicketFlow",REACT_APP_API_TICKETFLOW_BY_COMMENTS:"http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId",REACT_APP_API_TICKETTYPE:"http://api1.chandrakala.co.in/api/TicketTypes",REACT_APP_API_TICKET_COMPLETED:"http://api1.chandrakala.co.in/api/Tickets/MarkCompleted",REACT_APP_API_UPLOAD:"http://api1.chandrakala.co.in/api/Users/upload",REACT_APP_API_USERS:"http://api1.chandrakala.co.in/api/Users",REACT_APP_API_USER_BY_ID:"http://api1.chandrakala.co.in/api/Users",REACT_APP_BASE_API_URL:"http://api1.chandrakala.co.in/api",REACT_APP_BASE_URL:"http://api1.chandrakala.co.in",REACT_APP_MY_SERVER:"http://test1.chandrakala.co.in"}.REACT_APP_SECRET_KEY||"ghjsfysdg123",i=(0,s.createContext)({encrypt:e=>{console.log("Data to encrypt:",e);const a=r().AES.encrypt(e.toString(),c).toString();return console.log("Encrypted data:",a),a.replace(/\//g,";")},decrypt:e=>{if("string"!==typeof e)return e;e=e.replace(/;/g,"/");return r().AES.decrypt(e,c).toString(r().enc.Utf8)}}),n=()=>(0,s.useContext)(i)},64704:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var s=t(72791),l=t(55294),r=t(57689),c=t(24220),i=t(80184);const n="http://api1.chandrakala.co.in/api/Users",o=()=>{const[e,a]=(0,s.useState)(null),{userId:t}=(0,r.UO)(),{decrypt:o}=(0,c.R)(),d=o(t),[m,p]=(0,s.useState)([]),[h,_]=(0,s.useState)([]),[u,P]=(0,s.useState)([]),[A,E]=(0,s.useState)({firstName:"",lastName:"",email:"",password:"",mobileNo:"",departmentId:"",designationId:"",roleId:"",address:"",dateOfBirth:""});(0,s.useEffect)((()=>{l.Z.get("".concat(n,"/").concat(d)).then((e=>{E(e.data),console.log(e.data)})).catch((e=>{console.log(e),a("Error updating user. Please try again.")}))}),[d]),(0,s.useEffect)((()=>{!async function(){try{const e=await l.Z.get("http://api1.chandrakala.co.in/api/Departments");p(e.data)}catch(e){console.error("Error fetching departments:",e)}}()}),[]),(0,s.useEffect)((()=>{!async function(){try{const e=await l.Z.get("".concat("http://api1.chandrakala.co.in/api","/Roles"));_(e.data)}catch(e){console.error("Error fetching Roles:",e)}}()}),[]),(0,s.useEffect)((()=>{!async function(){try{const e=await l.Z.get("http://api1.chandrakala.co.in/api/Designation");P(e.data)}catch(e){console.error("Error fetching Designation:",e)}}()}),[]);const N=e=>{const{name:a,value:t,type:s}=e.target;E((l=>({...l,[a]:"file"===s?e.target.files:t})))};return(0,i.jsxs)("div",{className:"container mt-5",children:[(0,i.jsxs)("h4",{className:"mb-3",children:["Edit the Details of ",A.firstName]}),e&&(0,i.jsx)("div",{className:"alert ".concat(e.includes("successfully")?"alert-success":"alert-danger"),role:"alert",children:e}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.Z.put("".concat(n,"/").concat(d),A).then((e=>{console.log(e),a("User updated successfully!")})).catch((e=>{console.log(e),a("Error updating user. Please try again.")}))},children:[(0,i.jsxs)("div",{className:"row mb-3",children:[(0,i.jsx)("label",{htmlFor:"firstName",className:"col-sm-1 col-form-label text-start",children:"FirstName:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",placeholder:"Enter FirstName",required:!0,onChange:N,value:A.firstName,disabled:!0})}),(0,i.jsx)("label",{htmlFor:"lastName",className:"col-sm-1 col-form-label text-end",children:"LastName:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",placeholder:"Enter lastName",required:!0,onChange:N,value:A.lastName,disabled:!0})}),(0,i.jsx)("label",{htmlFor:"dateOfBirth",className:"col-sm-1 col-form-label text-end",children:"DOB:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"date",className:"form-control",id:"dateOfBirth",name:"dateOfBirth",placeholder:"Enter Date Of Birth",required:!0,onChange:N,value:A.dateOfBirth,disabled:!0})})]}),(0,i.jsxs)("div",{className:"row mb-3",children:[(0,i.jsx)("label",{htmlFor:"address",className:"col-sm-1 col-form-label text-end",children:"Address:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"address",className:"form-control",id:"address",name:"address",placeholder:"Enter Address",required:!0,onChange:N,value:A.address})}),(0,i.jsx)("label",{htmlFor:"mobileNo",className:"col-sm-1 col-form-label text-start",children:"MobileNo:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"mobileNo",name:"mobileNo",placeholder:"Enter Mobile No.",required:!0,onChange:N,value:A.mobileNo})}),(0,i.jsx)("label",{htmlFor:"email",className:"col-sm-1 col-form-label text-end",children:"Email:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",placeholder:"Enter email",required:!0,onChange:N,value:A.email,disabled:!0})})]}),(0,i.jsx)("div",{className:"row mb-3",children:(0,i.jsxs)("div",{className:"row mb-3",children:[(0,i.jsx)("label",{htmlFor:"departmentId",className:"col-sm-1 col-form-label text-start",children:"Department:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("select",{className:"form-select",id:"departmentId",name:"departmentId",required:!0,onChange:N,value:A.departmentId,children:[(0,i.jsx)("option",{value:"",children:"Select department"}),m.map((e=>(0,i.jsx)("option",{value:e.departmentId,children:e.departmentName},e.departmentId)))]})}),(0,i.jsx)("label",{htmlFor:"designationId",className:"col-sm-1 col-form-label text-start",children:"Designation:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("select",{className:"form-select",id:"designationId",name:"designationId",required:!0,onChange:N,value:A.designationId,children:[(0,i.jsx)("option",{value:"",children:"Select Designation"}),u.map((e=>(0,i.jsx)("option",{value:e.designationId,children:e.designationName},e.designationId)))]})}),(0,i.jsx)("label",{htmlFor:"roleId",className:"col-sm-1 col-form-label text-end",children:"Role:"}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("select",{className:"form-select",id:"roleId",name:"roleId",required:!0,onChange:N,value:A.roleId,children:[(0,i.jsx)("option",{value:"",children:"Select Role"}),h.map((e=>(0,i.jsx)("option",{value:e.roleId,children:e.role},e.roleId)))]})})]})}),(0,i.jsxs)("div",{className:"row mb-3",children:[(0,i.jsx)("div",{className:"col-sm-3"}),(0,i.jsx)("div",{className:"col-sm-9 text-end",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update User"})})]})]})]})}},42480:()=>{}}]);
//# sourceMappingURL=8536.2a25f9d0.chunk.js.map