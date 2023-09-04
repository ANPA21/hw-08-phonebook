"use strict";(self.webpackChunkcontact_book=self.webpackChunkcontact_book||[]).push([[92],{3092:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var i,a,r,d,o,c,x,p,s,m,l,h,u,f,w,g,Z,b,v,j=t(2791),y=t(9434),P=t(3634),k=t(6916),C=function(n){return n.filter.filter},z=function(n){return n.contacts.items},S=(0,k.P1)([z,C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),N=t(184),L=function(){return(0,N.jsx)("div",{children:"No results found or wrong name"})},R=t(168),q=t(6088),I=t(5403),_=(0,q.Z)("div")(i||(i=(0,R.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 15px;\n  flex-direction: column;\n  align-items: flex-start;\n  @media screen and (max-width: 479px) {\n  }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n  }\n  @media screen and (min-width: 1024px) {\n  }\n"]))),E=(0,q.Z)("h1")(a||(a=(0,R.Z)(["\n  margin: 0;\n  font-size: 20px;\n"]))),F=(0,q.Z)("span")(r||(r=(0,R.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),M=(0,q.Z)(I.Z)(d||(d=(0,R.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto 5.5px auto 0;\n"]))),A=(0,q.Z)("label")(o||(o=(0,R.Z)(["\n  position: relative;\n"]))),J=(0,q.Z)("input")(c||(c=(0,R.Z)(["\n  min-height: 35px;\n  min-width: 200px;\n\n  padding: 5px 30.5px 5px 5px;\n\n  ","\n  border-radius: 4px;\n"])),(function(n){var e=n.theme;return"\n  background-color : ".concat(e.palette.primary.xtrlight,";\n  border : 1px solid ").concat(e.palette.primary.dark,";\n  ")})),K=t(1634),U=function(){var n=(0,y.I0)();return(0,N.jsxs)(_,{children:[(0,N.jsx)(E,{children:"Contacts"}),(0,N.jsx)(F,{children:" Filter contacts by name"}),(0,N.jsxs)(A,{children:[(0,N.jsx)(J,{type:"text",onChange:function(e){n((0,K.KJ)(e.target.value))},placeholder:"Enter name"}),(0,N.jsx)(M,{})]})]})},V=t(3794),B=(0,V.ZP)("section")(x||(x=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px;\n  min-height: calc(100vh - 317px);\n  margin-top: 15px;\n  @media screen and (max-width: 479px) {\n    padding: 0 15px;\n  }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    min-height: calc(100vh - 244px);\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    min-height: calc(100vh - 234px);\n  }\n  @media screen and (min-width: 1024px) {\n    min-height: calc(100vh - 234px);\n  }\n"]))),T=t(1413),Y=t(6727),D=t(5705),G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},H=t(5589),O=(0,V.ZP)(D.l0)(p||(p=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n"]))),Q=(0,V.ZP)("h1")(s||(s=(0,R.Z)(["\n  font-size: 20px;\n  margin: 0;\n"]))),W=(0,V.ZP)("label")(m||(m=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 500;\n"]))),X=(0,V.ZP)(D.gN)(l||(l=(0,R.Z)(["\n  padding: 5px;\n  ","\n  border-radius: 4px;\n  min-height: 35px;\n  min-width: 200px;\n"])),(function(n){var e=n.theme;return"\n  background-color : ".concat(e.palette.primary.xtrlight,";\n  border : 1px solid ").concat(e.palette.primary.dark,";\n  ")})),$=(0,V.ZP)(D.Bc)(h||(h=(0,R.Z)(["\n  margin-left: 10px;\n"]))),nn=(0,V.ZP)(H.Z)(u||(u=(0,R.Z)(["\n  margin-top: 5px;\n  min-width: 100px;\n  max-width: 300px;\n  ","\n"])),(function(n){var e=n.theme;return"\nbackground-color : ".concat(e.palette.buttons.bg,";\ncolor: ").concat(e.palette.buttons.text,";")})),en=Y.Ry().shape({name:Y.Z_().min(2,"Name too Short!").max(20,"Name too Long!").required("Required"),number:Y.Rx().positive("Thats not a number!").typeError("Must be a number!").required("Required")}),tn=function(){var n=(0,y.I0)(),e=(0,y.v9)(z);return(0,N.jsx)(D.J9,{initialValues:{name:"",number:""},onSubmit:function(t,i){!function(n,e){return n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(e,t.name)?(n((0,P.uK)((0,T.Z)({id:G()},t))),i.resetForm()):alert("".concat(t.name," is already in contacts!"))},validationSchema:en,children:(0,N.jsxs)(O,{children:[(0,N.jsx)(Q,{children:"Phonebook"}),(0,N.jsxs)(W,{children:[(0,N.jsx)(X,{type:"text",name:"name",placeholder:"Name"}),(0,N.jsx)($,{component:"span",name:"name"})]}),(0,N.jsxs)(W,{children:[(0,N.jsx)(X,{type:"tel",name:"number",placeholder:"Phone number"}),(0,N.jsx)($,{component:"span",name:"number"})]}),(0,N.jsx)(nn,{variant:"outlined",color:"buttons",type:"submit",children:"Add Contact"})]})})},an=(0,V.ZP)("li")(f||(f=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  padding: 10px;\n  gap: 5px;\n  border-radius: 4px;\n  ",";\n\n  @media screen and (max-width: 479px) {\n  }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    min-width: calc(50vw - 30px);\n  }\n  @media screen and (min-width: 1024px) {\n    min-width: calc(1400px * 0.3 + 20px);\n  }\n"])),(function(n){var e=n.theme;return"\n   border: 1px solid ".concat(e.palette.primary.dark,"\n  ")})),rn=(0,V.ZP)("div")(w||(w=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 479px) {\n  }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n  }\n  @media screen and (min-width: 1024px) {\n  }\n"]))),dn=(0,V.ZP)("span")(g||(g=(0,R.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),on=(0,V.ZP)("span")(Z||(Z=(0,R.Z)(["\n  font-size: 16px;\n  font-weight: normal;\n"]))),cn=(0,V.ZP)(H.Z)(b||(b=(0,R.Z)(["\n  padding: 5px;\n  border-radius: 8px;\n"]))),xn=function(n){var e=n.contact,t=e.name,i=e.number,a=e.id,r=(0,y.I0)();return(0,N.jsxs)(an,{children:[(0,N.jsxs)(rn,{children:[(0,N.jsxs)(dn,{children:["Name: ",(0,N.jsx)(on,{children:t})]}),(0,N.jsxs)(dn,{children:["Number: ",(0,N.jsx)(on,{children:i})]})]}),(0,N.jsx)(cn,{variant:"outlined",color:"error",type:"submit",onClick:function(){return r((0,P.zY)(a))},children:"Remove contact"})]})},pn=t(7691).ZP.ul(v||(v=(0,R.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (max-width: 479px) {\n    gap: 10px;\n  }\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n  }\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  @media screen and (min-width: 1024px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),sn=function(){var n=(0,y.v9)(S);return(0,N.jsx)(pn,{children:n.map((function(n){return(0,N.jsx)(xn,{contact:n},n.id)}))})},mn=t(4270),ln=function(){var n=(0,y.I0)();(0,j.useEffect)((function(){n((0,P.yF)())}),[n]);var e=(0,y.v9)(S),t=(0,y.v9)(C);return(0,N.jsxs)(B,{children:[(0,N.jsx)(mn.q,{children:(0,N.jsx)("title",{children:"My Contacts"})}),(0,N.jsx)(tn,{}),(0,N.jsx)(U,{}),e.length>0&&(0,N.jsx)(sn,{}),0===e.length&&""!==t&&(0,N.jsx)(L,{})]})}},5403:function(n,e,t){var i=t(4836);e.Z=void 0;var a=i(t(5649)),r=t(184),d=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=d}}]);
//# sourceMappingURL=92.ee8bd976.chunk.js.map