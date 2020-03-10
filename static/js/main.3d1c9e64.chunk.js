(this.webpackJsonputils=this.webpackJsonputils||[]).push([[0],{105:function(e,t,a){e.exports=a(203)},110:function(e,t,a){},111:function(e,t,a){},119:function(e,t){},121:function(e,t){},155:function(e,t){},156:function(e,t){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(97),s=a.n(r),c=a(102),i=a(21);a(110),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(3),u=a(4),m=a(6),d=a(5),h=a(7),p=(a(111),a(112),a(113),a(115),function(e){var t=window.location.pathname+window.location.search,a=e.path===t?"nav-item active":"nav-item",n=e.disabled?"nav-link disabled":"nav-link";return l.a.createElement("li",{className:a},l.a.createElement("a",{href:e.path,className:n},e.name,e.path===t?l.a.createElement("span",{className:"sr-only"},"(current)"):""))}),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={isToggleOn:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showDropdown",value:function(e){e.preventDefault(),this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){var e=this,t="dropdown-menu"+(this.state.isToggleOn?" show":"");return l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(t){e.showDropdown(t)}},this.props.name),l.a.createElement("div",{className:t,"aria-labelledby":"navbarDropdown"},this.props.children))}}]),t}(l.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Utils"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement(p,{path:"#datetool",name:"Date Tool"}),l.a.createElement(p,{path:"#base64decoder",name:"Base64-Decoder"}),l.a.createElement(p,{path:"#generator",name:"Hash Generator"}),l.a.createElement(v,{name:"Formatter"},l.a.createElement("a",{className:"dropdown-item",href:"#json"},"JSON"),l.a.createElement("a",{className:"dropdown-item",href:"#xml"},"XML")))))}}]),t}(l.a.Component),f=b,E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Utils"),"Collection of developer tools.",l.a.createElement("br",null),l.a.createElement("br",null),"V 0.1.1"))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Converter")))}}]),t}(l.a.Component),y=a(98),O=a.n(y),N=a(99),k=a.n(N),T=a(100),C=a.n(T),w=a(101),j=a.n(w),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.generateHash(e.target.value,a.state.func)},a.handleFunctionChange=function(e){a.generateHash(a.state.input,e.target.value)},a.state={input:"",output:"",func:"sha256"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"generateHash",value:function(e,t){var a="";switch(t){case"md5":a=O()(e);break;case"sha1":a=k()(e);break;case"sha256":a=C()(e);break;case"sha512":a=j()(e)}this.setState({input:e,output:a,func:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Hash Generator"),"Input:",l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{id:"generatorInput",rows:"10",className:"form-control",ref:function(t){e.textInput=t},value:this.state.input,onChange:this.handleInputChange})),"Hash function: \xa0",l.a.createElement("select",{onChange:this.handleFunctionChange,value:this.state.func},l.a.createElement("option",{value:"md5"},"MD5"),l.a.createElement("option",{value:"sha1"},"SHA1"),l.a.createElement("option",{value:"sha256"},"SHA256"),l.a.createElement("option",{value:"sha512"},"SHA512")),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("br",null),l.a.createElement("textarea",{id:"generatorOutput",className:"form-control",rows:"10",readOnly:!0,value:this.state.output}))))}}]),t}(l.a.Component),D=a(18);function I(e,t){var a;return!(e=parseInt(e))||e<=0?"invalid":(a=new Date(1e3*e),t||(t="dd.MM.yyyy hh:mm:ss"),t.indexOf("dd")>-1&&(t=t.replace("dd",S(a.getUTCDate()))),t.indexOf("d")>-1&&(t=t.replace("d",a.getUTCDate())),t.indexOf("MM")>-1&&(t=t.replace("MM",S(a.getUTCMonth()+1))),t.indexOf("M")>-1&&(t=t.replace("M",a.getUTCMonth()+1)),t.indexOf("yyyy")>-1&&(t=t.replace("yyyy",a.getUTCFullYear())),t.indexOf("hh")>-1&&(t=t.replace("hh",S(a.getUTCHours()))),t.indexOf("h")>-1&&(t=t.replace("h",a.getUTCHours())),t.indexOf("mm")>-1&&(t=t.replace("mm",S(a.getUTCMinutes()))),t.indexOf("m")>-1&&(t=t.replace("m",a.getUTCMinutes())),t.indexOf("ss")>-1&&(t=t.replace("ss",S(a.getUTCSeconds()))),t.indexOf("s")>-1&&(t=t.replace("s",a.getUTCSeconds())),t)}function S(e){return e<10?"0"+e:e}function M(e,t){var a=new Date(e.getTime()),n=e.getDate();return a.setDate(1),a.setMonth(e.getMonth()+t),a.setDate(Math.min(n,function(e){var t=e.getFullYear(),a=e.getMonth();return[31,A(t)?29:28,31,30,31,30,31,31,30,31,30,31][a]}(a))),a}function A(e){return e%4===0&&e%100!==0||e%400===0}function V(e){var t,a=new Date(1*e).getTime();return t=a,!isNaN(parseFloat(t))&&isFinite(t)&&(a<=9999999999||a>=1e12&&a<=9999999999999)}var B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).copyText=function(){return a.refs.input.select(),document.execCommand("copy"),!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.text;return l.a.createElement("div",{className:"input-group input-group-sm mb-3",style:{width:"195px"}},l.a.createElement("input",{ref:"input",type:"text",defaultValue:e,readOnly:!0,className:"form-control form-control-sm","aria-label":"date"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",type:"button",onClick:this.copyText},"copy")))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.datetime,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";var a="",n="",r="",s="",c="",i="",o="";e&&e>0&&(a=e,n=I(e),o=I(e-60*(new Date).getTimezoneOffset()),c=(s=e-(r=e%86400))+86400,i=t[new Date(1e3*e).getDay()]);return l.a.createElement("div",{className:"dateOutput"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Timestamp (UTC)"),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:a}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("b",null,"UTC"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:n}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Local",l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:o}))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Timestamp day start",l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:s}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Timestamp day end",l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:c}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Sec. since midnight",l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:r}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"Day of week",l.a.createElement("br",null)),l.a.createElement("div",{className:"col"},l.a.createElement(B,{text:i}))))}}]),t}(l.a.Component);F.defaultProps={datetime:0};var U=F,H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addendPlus=a.addendPlus.bind(Object(D.a)(a)),a.addendMinus=a.addendMinus.bind(Object(D.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"addendPlus",value:function(){var e=this.props.val+1;this.props.changeAddend(e,this.props.unit)}},{key:"addendMinus",value:function(){var e=this.props.val-1;this.props.changeAddend(e,this.props.unit)}},{key:"render",value:function(){var e=this.props.val>0?"+"+this.props.val:" ",t=this.props.val<0?this.props.val:" ";return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.addendMinus},"-")),l.a.createElement("div",{className:"col font-weight-bold"},t),l.a.createElement("div",{className:"col text-center"},this.props.unit),l.a.createElement("div",{className:"col font-weight-bold"},e),l.a.createElement("div",{className:"col text-right"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.addendPlus},"+"))))}}]),t}(l.a.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleBaseTimeChange=function(e){a.setBaseTime(1*e.target.value)},a.handleDateStringChange=function(e){var t=e.target.value,n=function(e){var t=/(\d{2}).(\d{2}).(\d{4}) (\d{2}):(\d{2}):(\d{2})/.exec(e);return null==t?null:new Date(Date.UTC(+t[3],+t[2]-1,+t[1],+t[4],+t[5],+t[6]))}(t);n?a.setBaseTime(parseInt(n.getTime()/1e3)):a.setState({baseTimeString:t})},a.state={baseTime:null,baseTimeInput:"",baseTimeString:"",baseTimeInputValid:!0,dateInputValid:!0,diff:0,addends:{seconds:0,minutes:0,hours:0,days:0,weeks:0,months:0,years:0}},a.setBaseTimeNow=a.setBaseTimeNow.bind(Object(D.a)(a)),a.startCalculation=a.startCalculation.bind(Object(D.a)(a)),a.resetCalculator=a.resetCalculator.bind(Object(D.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.inputBaseTime.focus()}},{key:"setBaseTime",value:function(e){var t=null,a=!0,n="";V(e)?((t=e)>=1e12&&t<=9999999999999&&(t/=1e3),n=I(t)):(t="",a=!1,e=""),this.setState({baseTime:t,baseTimeInput:e,baseTimeInputValid:a,baseTimeString:n})}},{key:"startCalculation",value:function(){this.setState({baseTime:this.state.baseTime,baseTimeString:I(this.state.baseTime)})}},{key:"setBaseTimeNow",value:function(){var e=parseInt((new Date).getTime()/1e3);this.setBaseTime(e)}},{key:"resetCalculator",value:function(){this.setState({addends:{seconds:0,minutes:0,hours:0,days:0,weeks:0,months:0,years:0}},this.recalculateTarget)}},{key:"changeAddend",value:function(e,t){var a=this.state.addends;a[t]=e,this.setState({addends:a}),this.recalculateTarget()}},{key:"recalculateTarget",value:function(){var e=0;for(var t in this.state.addends){var a=this.state.addends[t];switch(t){case"seconds":e+=a;break;case"minutes":e+=60*a;break;case"hours":e+=60*a*60;break;case"days":e+=60*a*60*24;break;case"weeks":e+=60*a*60*24*7;break;case"months":var n=new Date(1e3*this.state.baseTime);e+=M(n,a).getTime()/1e3-n.getTime()/1e3;break;case"years":var l=new Date(1e3*this.state.baseTime),r=new Date(1e3*this.state.baseTime);r.setFullYear(l.getFullYear()+a),e+=r.getTime()/1e3-l.getTime()/1e3}}this.setState({diff:e})}},{key:"render",value:function(){var e=this,t=this.state.baseTimeInputValid?"form-control":"form-control is-invalid",a=this.state.dateInputValid?"form-control":"form-control is-invalid";return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Date Tool"),l.a.createElement("br",null),l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Unix Timestamp"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:isNaN(this.state.baseTimeInput)?"":this.state.baseTimeInput,ref:function(t){e.inputBaseTime=t},onChange:this.handleBaseTimeChange,className:t})),l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Date"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.baseTimeString,onChange:this.handleDateStringChange,className:a}),l.a.createElement("i",null,"DD.MM.YYYY HH:MM:SS")),l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-1"},l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.startCalculation},"calculate")),l.a.createElement("div",{className:"col-1"},l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.setBaseTimeNow},"now"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(U,{datetime:this.state.baseTime})),l.a.createElement("div",{className:"col dateOutput"},l.a.createElement(H,{unit:"seconds",val:this.state.addends.seconds,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"minutes",reset:this.resetCalculator,val:this.state.addends.minutes,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"hours",reset:this.resetCalculator,val:this.state.addends.hours,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"days",reset:this.resetCalculator,val:this.state.addends.days,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"weeks",reset:this.resetCalculator,val:this.state.addends.weeks,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"months",reset:this.resetCalculator,val:this.state.addends.months,changeAddend:this.changeAddend.bind(this)}),l.a.createElement(H,{unit:"years",reset:this.resetCalculator,val:this.state.addends.years,changeAddend:this.changeAddend.bind(this)}),l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.resetCalculator.bind(this)},"reset"))),l.a.createElement("div",{className:"col"},l.a.createElement(U,{datetime:this.state.baseTime+this.state.diff})))))}}]),t}(l.a.Component);P.defaultProps={baseTime:0};var Y=P,J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.encodeDecodeOutput(e.target.value,a.state.option)},a.handleOptionChange=function(e){a.encodeDecodeOutput(a.state.input,1*e.target.value)},a.state={input:"",output:"",option:0,inputValid:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.textInput.focus()}},{key:"encodeDecodeOutput",value:function(e,t){var a="",n=!0;if(0===t)try{a=atob(e)}catch(l){a="<Input invalid>",n=!1}else a=btoa(e);this.setState({input:e,output:a,option:t,inputValid:n})}},{key:"render",value:function(){var e=this,t=this.state.inputValid?"form-control rounded-0":"form-control rounded-0 is-invalid";return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Base 64 Encoder / Decoder"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"}),l.a.createElement("textarea",{className:t,id:"exampleFormControlTextarea1",rows:"10",ref:function(t){e.textInput=t},value:this.state.input,onChange:this.handleInputChange}," ")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"inlineCheckbox1",value:"0",checked:0===this.state.option,onChange:this.handleOptionChange}),l.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"From Base64")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",id:"inlineCheckbox2",value:"1",checked:1===this.state.option,onChange:this.handleOptionChange}),l.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"To Base64")),l.a.createElement("div",{className:"form-group"},l.a.createElement("br",null),l.a.createElement("textarea",{className:"form-control rounded-0",id:"exampleFormControlTextarea1",rows:"10",value:this.state.output,readOnly:!0})),l.a.createElement("div",null,"More Info: ",l.a.createElement("a",{href:" https://de.wikipedia.org/wiki/Base64"},"https://de.wikipedia.org/wiki/Base64"))))}}]),t}(l.a.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.formatOutput(e.target.value)},a.state={input:"",output:"",inputValid:!0},a.language="",a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setInitialValue(),this.textInput.focus()}},{key:"setInitialValue",value:function(){}},{key:"cleanInput",value:function(e){var t=e.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f");return t=t.replace(/[\u0000-\u0019]+/g,"")}},{key:"formatOutput",value:function(e){var t=e;this.setState({input:e,output:t,inputValid:!0})}},{key:"render",value:function(){var e=this,t=this.state.inputValid?"form-control rounded-0":"form-control rounded-0 is-invalid";return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,this.language," Formatter"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputTextarea"},"Input (",this.language,"):"),l.a.createElement("textarea",{className:t,id:"inputTextarea",rows:"10",ref:function(t){e.textInput=t},value:this.state.input,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("br",null),l.a.createElement("textarea",{className:t,rows:"10",value:this.state.output}))))}}]),t}(l.a.Component),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).language="JSON",a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setInitialValue",value:function(){this.formatOutput('{"a":1, "b":"foo", "c":[false,"false",null,"null", {"d":{"e":1.3e5,"f":"1.3e5"}}]}')}},{key:"prettyPrint",value:function(e){return JSON.stringify(e,void 0,4)}},{key:"syntaxHighlight",value:function(e){return(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/('(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*'(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/^'/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"}))}},{key:"formatOutput",value:function(e){var t="";try{e=this.cleanInput(e);var a=JSON.parse(e);t=this.prettyPrint(a)}catch(n){this.inputValid=!1,t="<b>Invalid JSON:</b> <br>"+n}this.setState({input:e,output:t,inputValid:!0})}}]),t}(L),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).language="XML",a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setInitialValue",value:function(){this.formatOutput('<input><field1 attribute1="test"><field2>Test</field2></field1></input>')}},{key:"prettyPrint",value:function(e){var t="",a="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(a=a.substring("\t".length)),t+=a+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^]$/)&&(a+="\t")})),t.substring(1,t.length-3)}},{key:"formatOutput",value:function(e){var t="";try{t=this.prettyPrint(this.cleanInput(e))}catch(a){this.inputValid=!1,t="<b>Invalid XML:</b> <br>"+a}this.setState({input:e,output:t,inputValid:!0})}}]),t}(L),X=l.a.createElement(c.a,{basename:"/utils"},l.a.createElement(i.a,{exact:!0,path:"/",component:E}),l.a.createElement(i.a,{path:"/datetool",component:Y}),l.a.createElement(i.a,{path:"/converter",component:g}),l.a.createElement(i.a,{path:"/generator",component:x}),l.a.createElement(i.a,{path:"/base64decoder",component:J}),l.a.createElement(i.a,{path:"/json",component:$}),l.a.createElement(i.a,{path:"/xml",component:W}));s.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[105,1,2]]]);
//# sourceMappingURL=main.3d1c9e64.chunk.js.map