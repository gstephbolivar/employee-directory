(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{49:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),r=c(22),i=c.n(r),l=c(25),o=c(6),j=c(8),d=c(23),b=c.n(d),h=function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("img",{alt:"Employee Headshot",src:e.picture.thumbnail})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{type:Date,children:e.dob.date.substring(0,10)})]})},u=(c(49),function(e){return Object(n.jsx)("div",{className:"create-form",children:Object(n.jsx)("div",{className:"input-group mb-3",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Employee","aria-label":"Search Employee",onChange:e.onChange})})})}),m=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],d=i[1],m=Object(s.useState)([]),O=Object(j.a)(m,2),p=O[0],x=O[1];Object(s.useEffect)((function(){b.a.get("https://randomuser.me/api/?results=10&inc=login,name,phone,email,picture,dob&nat=us").then((function(e){console.log(e.data),a(e.data.results),x(e.data.results)})).catch((function(e){console.log(e)}))}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h1",{className:"text-center",children:"Employee Directory"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-3",children:Object(n.jsx)(u,{onChange:function(e){var t=e.target.value;if(""!==t){var n=Object(o.a)(c).filter((function(e){return e.name.first.includes(t)||e.name.last.includes(t)||e.phone.includes(t)}));x(n)}else x(c)}})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table sortable table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",onClick:function(){var e=[];l&&"ascending"!==l?(e=Object(o.a)(c).sort((function(e,t){return e.name.first>t.name.first?-1:1})),d("ascending")):(e=Object(o.a)(c).sort((function(e,t){return e.name.first<t.name.first?-1:1})),d("descending")),console.log(e),x(Object(o.a)(e))},children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(n.jsx)("tbody",{children:p.map((function(e){return Object(n.jsx)(h,{name:e.name,phone:e.phone,email:e.email,picture:e.picture,dob:e.dob})}))})]})})]})};var O=function(){return Object(n.jsx)(l.a,{basename:"/",children:Object(n.jsx)(m,{})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.735f6980.chunk.js.map