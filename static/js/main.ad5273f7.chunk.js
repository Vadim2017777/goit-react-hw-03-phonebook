(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=n(9),u=n(1),i=n(3),s=n(4),m=n(6),h=n(5),f=n(20),b=n(2),v={name:"",number:""},p={contacts:[],filter:""},d=(n(15),function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(u.a)({},v),t.handleInputChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){var n=t.props.onAddContacts;e.preventDefault(),n(Object(u.a)({},t.state)),t.reset()},t.reset=function(){t.setState(Object(u.a)({},v))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.handleInputChange})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",value:n,name:"number",onChange:this.handleInputChange})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component)),g=function(t){var e=t.filter,n=t.onChange;return c.a.createElement("input",{type:"text",value:e,onChange:n})},C=(n(16),function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",null,c.a.createElement("p",null,e,":",n),c.a.createElement("button",{type:"button",onClick:a},"Delete"))}),E=C;C.defaultProps={contacts:[]};var y=function(t){var e=t.contacts,n=t.onRemove;return c.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement(E,{key:e,name:a,number:r,onRemove:function(){return n(e)}})})))},O=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(u.a)({},p),t.addContacts=function(e){var n=e.name,a=e.number,c={id:Object(f.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[c])}}))},t.removeContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(d,{onAddContacts:this.addContacts}),c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Find my contacts"),c.a.createElement(g,{value:t,onChange:this.changeFilter})),this.state.contacts.length>0&&c.a.createElement(y,{contacts:e,onRemove:this.removeContacts}))}}]),n}(a.Component);n(17);o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ad5273f7.chunk.js.map