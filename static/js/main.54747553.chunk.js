(this.webpackJsonpauto_test=this.webpackJsonpauto_test||[]).push([[0],{218:function(e,t,a){e.exports=a(350)},350:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),i=a.n(r),o=a(42),s=a(18),l=a(190),u=a(23),m=a(28),p=Object(m.a)({basename:"/Automation_test"}),h=a(206),d=a(365),v=a(67),b=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(h.a,{src:"images/Perficient_logo.jpg",size:"medium",className:"ui centered image",style:{marginTop:"200px"}})),c.a.createElement("div",{className:"col-6",style:{textAlign:"center",fontSize:"35px",marginTop:"200px"}},"Enter to Take the test",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(v.a,{to:"/credentials"},c.a.createElement(d.a,{inverted:!0,size:"huge",color:"green"},"Perficient")))))},O=a(31),f=a(32),E=a(33),_=a(35),g=a(36),C=a(363),j=a(361),y=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(c)))).onFormSubmit=function(e){a.props.newLogin(e),a.props.history.push("/test")},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.handleSubmit;return c.a.createElement("form",{onSubmit:e(this.onFormSubmit)},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"Name"},"Name"),c.a.createElement(C.a,{name:"Name",component:"input",type:"text",required:!0})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement(C.a,{name:"email",component:"input",type:"email",required:!0})),c.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(c.a.Component),S={newLogin:function(e){return{type:"NEW_LOGIN",payload:{event:e}}}},q=Object(u.e)(Object(o.b)(null,S)(Object(j.a)({form:"eventForm"})(y))),k=a(364),x=[{key:"Java & OOPs",text:"Java & OOPs",value:"Java & OOPs"},{key:"HTML & CSS",text:"Chinese",value:"Chinese"}],w=function(){return c.a.createElement("div",{style:{paddingTop:"200px",paddingLeft:"400px",fontSize:"30px"}},"Select the Language  ",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement(k.a,{button:!0,className:"icon",floating:!0,labeled:!0,icon:"world",options:x,search:!0,text:"Select Language"},c.a.createElement(k.a.Menu,null,c.a.createElement(k.a.Item,{as:v.a,to:"/common",text:"Java"}),c.a.createElement(k.a.Item,{as:v.a,to:"/common",text:"HTML CSS"})))))},N=a(61),L=a.n(N),I=a(106),F=a(107),T=a(34),M=a(362),P=a(360),D=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{style:{fontSize:100,marginLeft:100}},this.props.value,":",this.props.seconds))}}]),t}(c.a.Component),z=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this,e))).startCountDown=function(){a.intervalHandle=setInterval(a.tick,1e3);var e=a.state.value;a.secondsRemaining=60*e,a.setState({isClicked:!0})},a.state={seconds:"00",value:"02",isClicked:!1},a.startCountDown=a.startCountDown.bind(Object(T.a)(a)),a.tick=a.tick.bind(Object(T.a)(a)),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.startCountDown()}},{key:"tick",value:function(){var e=Math.floor(this.secondsRemaining/60),t=this.secondsRemaining-60*e;this.setState({value:e,seconds:t}),t<10&&this.setState({seconds:"0"+this.state.seconds}),e<10&&this.setState({value:"0"+e}),0===e&0===t&&(clearInterval(this.intervalHandle),this.props.history.push("/final")),this.secondsRemaining--}},{key:"render",value:function(){this.state.isClicked;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"}),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(D,{value:this.state.value,seconds:this.state.seconds}))))}}]),t}(c.a.Component),H=Object(u.e)(z),R=[{id:1,Question:" What is the Capital of India ?",Option_1:"Delhi",Option_2:"Mumbai",Option_3:"Bangalore",Correct:"Delhi"},{id:2,Question:"Financial Captial of India ? ",Option_1:"Mumbai",Option_2:"Ahmedabad",Option_3:"Pune",Correct:"Mumbai"},{id:3,Question:"Marina Beach is located in which state ? ",Option_1:"Tamil Nadu",Option_2:"Karnataka",Option_3:"Kerala",Correct:"Tamil Nadu"},{id:4,Question:" 2 + 3",Option_1:"5",Option_2:"6",Option_3:"7",Correct:"5"},{id:5,Question:" Cricket World Cups won by India  ? ",Option_1:"1",Option_2:"2",Option_3:"3",Correct:"2"}],A=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this,e))).handleChange=function(e,t){var n=t.value;return a.setState({value:n})},a.onNextClickHandler=function(){var e=a.state,t=e.q,n=e.correct_q,c=e.score;e.value===R[t].Correct?n.includes(t)?a.setState({q:t+1}):a.setState({score:c+1,correct_q:[].concat(Object(F.a)(n),[t]),q:t+1}):n.includes(t)?a.setState({score:c-1,correct_q:n.filter((function(e){return e!==t})),q:t+1}):a.setState({q:t+1})},a.onPrevClickHandler=function(){var e=a.state,t=e.q,n=e.correct_q,c=e.score;e.value===R[t].Correct?n.includes(t)?a.setState({q:t-1}):a.setState({score:c+1,correct_q:[].concat(Object(F.a)(n),[t]),q:t-1}):n.includes(t)?a.setState({score:c-1,correct_q:n.filter((function(e){return e!==t})),q:t-1}):a.setState({q:t-1})},a.state={q:0,score:0,correct_q:[]},a.onSubmit=a.onSubmit.bind(Object(T.a)(a)),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"onSubmit",value:function(){var e=Object(I.a)(L.a.mark((function e(){var t,a,n,c,r,i=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.correct_q,n=t.score,c=t.value,r=t.q,c===R[r].Correct?a.includes(r)?this.props.history.push("/final"):this.setState({score:n+1,correct_q:[].concat(Object(F.a)(a),[r])},Object(I.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.props.score_final(n);case 2:i.props.history.push("/final");case 3:case"end":return e.stop()}}),e)})))):a.includes(r)?this.setState({score:n-1,correct_q:a.filter((function(e){return e!==r}))},Object(I.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.props.score_final(n);case 2:i.props.history.push("/final");case 3:case"end":return e.stop()}}),e)})))):this.props.history.push("/final");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.score),c.a.createElement("div",null,c.a.createElement(M.a,null,c.a.createElement(M.a.Field,null,"".concat(R[this.state.q].Question)),c.a.createElement(M.a.Field,null,c.a.createElement(P.a,{label:"".concat(R[this.state.q].Option_1),name:"radioGroup",value:"".concat(R[this.state.q].Option_1),checked:this.state.value==="".concat(R[this.state.q].Option_1),onChange:this.handleChange})),c.a.createElement(M.a.Field,null,c.a.createElement(P.a,{label:"".concat(R[this.state.q].Option_2),name:"radioGroup",value:"".concat(R[this.state.q].Option_2),checked:this.state.value==="".concat(R[this.state.q].Option_2),onChange:this.handleChange})),c.a.createElement(M.a.Field,null,c.a.createElement(P.a,{label:"".concat(R[this.state.q].Option_3),name:"radioGroup",value:"".concat(R[this.state.q].Option_3),checked:this.state.value==="".concat(R[this.state.q].Option_3),onChange:this.handleChange})),c.a.createElement(d.a,{size:"large",primary:!0,disabled:this.state.q<=0,onClick:this.onPrevClickHandler,content:"Previous"}),c.a.createElement(d.a,{size:"large",positive:!0,disabled:this.state.q>=R.length-1,onClick:this.onNextClickHandler,content:"Next"}),c.a.createElement(d.a,{size:"large",negative:!0,onClick:this.onSubmit,content:"Submit Test"})),c.a.createElement(H,null))}}]),t}(c.a.Component),J={score_final:function(e){return{type:"SCORE_FINAL",payload:{event:e}}}},Q=Object(u.e)(Object(o.b)(null,J)(A)),G=Object(u.e)((function(e){var t=e.history;return window.addEventListener("popstate",(function(){t.push("/")})),c.a.createElement("div",null,"You have completed the test.")}));var W=function(){return c.a.createElement("div",null,c.a.createElement(u.b,{history:p},c.a.createElement("div",null,c.a.createElement(u.a,{path:"/",exact:!0,component:b}),c.a.createElement(u.a,{path:"/credentials",exact:!0,component:q}),c.a.createElement(u.a,{path:"/test",exact:!0,component:w}),c.a.createElement(u.a,{path:"/common",exact:!0,component:Q}),c.a.createElement(u.a,{path:"/final",exact:!0,component:G}))))},B=a(366),K=Object(s.c)({form:B.a,login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_LOGIN":return t.payload;default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCORE_FINAL":return t.payload;default:return e}}}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,U=Object(s.e)(K,X(Object(s.a)(l.a)));i.a.render(c.a.createElement(o.a,{store:U},c.a.createElement(W,null)),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.54747553.chunk.js.map