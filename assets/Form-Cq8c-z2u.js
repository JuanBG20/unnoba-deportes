import{j as e,B as c,r}from"./index-BznOn6Dk.js";import{C as h}from"./Icons-CLMULbNs.js";function u({newInscription:n}){return e.jsxs("div",{className:"formModal",children:[e.jsx("a",{href:c,children:e.jsx(h,{})}),e.jsx("h2",{children:"Formulario enviado con éxito"}),e.jsx("h3",{children:"Los datos enviados fueron los siguientes: "}),e.jsxs("div",{className:"formModalInfo",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Nombre:"})," ",n.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"DNI:"})," ",n.dni]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Correo electrónico:"})," ",n.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Número de teléfono:"})," ",n.phone===""?"No definido":n.phone]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deporte:"})," ",n.sport]})]})]})}function j(){const[n,a]=r.useState(localStorage.getItem("name")!==null?{name:localStorage.getItem("name"),dni:"",email:localStorage.getItem("email"),phone:"",sport:"Basquetbol"}:{name:"",dni:"",email:"",phone:"",sport:"Basquetbol"}),[t,s]=r.useState(!1),o=l=>{const d=l.target.value,m=l.target.name;a({...n,[m]:d})},i=l=>{l.preventDefault(),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t?"d-none":"form",children:[e.jsx("h1",{children:"¡Inscríbete!"}),e.jsxs("form",{onSubmit:i,children:[e.jsx("label",{htmlFor:"name",children:"* Nombre completo: "}),e.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:o,required:!0}),e.jsx("label",{htmlFor:"dni",children:"* DNI: "}),e.jsx("input",{type:"text",id:"dni",name:"dni",value:n.dni,onChange:o,required:!0}),e.jsx("label",{htmlFor:"email",children:"* Correo electrónico: "}),e.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:o,required:!0}),e.jsx("label",{htmlFor:"phone",children:"Número de teléfono: "}),e.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:o}),e.jsx("label",{htmlFor:"sport",children:"* Deporte: "}),e.jsxs("select",{name:"sport",id:"sport",value:n.sport,onChange:o,required:!0,children:[e.jsx("option",{value:"Basquetbol",children:"Basquetbol"}),e.jsx("option",{value:"Fútbol 11",children:"Fútbol 11"}),e.jsx("option",{value:"Handball",children:"Handball"}),e.jsx("option",{value:"Hockey",children:"Hockey"}),e.jsx("option",{value:"Futsal",children:"Futsal"}),e.jsx("option",{value:"Natación",children:"Natación"})]}),e.jsx("button",{type:"submit",children:"Enviar"})]})]}),t&&e.jsx(u,{newInscription:n})]})}export{j as default};
