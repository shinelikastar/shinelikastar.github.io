(this["webpackJsonpstar-site"]=this["webpackJsonpstar-site"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/diva.2a009e4a.png"},,function(e,t,a){e.exports=a.p+"static/media/dozing.54f74e8c.png"},function(e,t,a){e.exports=a.p+"static/media/pointing-up.951c1d7f.png"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),l=a.n(i),o=(a(20),a(11)),s=a.n(o);a(21),a(22);var c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"Footer"},r.a.createElement("a",{href:"https://github.com/shinelikastar/shinelikastar.github.io",target:"_blank",rel:"noopener noreferrer",className:"Footer-credit"},"Designed ","&"," Built by Star Su"," ",r.a.createElement("span",{role:"img","aria-label":"star"},"\ud83d\udcab"),"  ","2020")))},u=a(2),d=a(3),m=a(5),p=a(4),h=a(7),b=a(12);a(23);var f=function(e){return r.a.createElement("div",{className:"Header-container","data-aos":"fade-right","data-aos-delay":"200"},r.a.createElement("p",{className:"Header-text"},e.text))},g={current:[{location:{value:"Brown University",ref:"https://www.brown.edu/"},role:"Senior",time_period:{start:"Sep 2017",end:"May 2021"}},{location:{value:"Operating Systems",ref:"https://cs.brown.edu/courses/cs167/index.html"},role:"Teaching assistant",time_period:{start:"Mar 2020"}}],past:[{location:{value:"Computer Systems",ref:"https://brown-cs0330.github.io/website/index.html"},role:"Head teaching assistant",time_period:{start:"Mar 2020",end:"Dec 2020"}},{location:{value:"Visual Computing Lab",ref:"https://visual.cs.brown.edu/"},role:"Researcher",time_period:{start:"Jan 2020",end:"May 2020"}},{location:{value:"Stripe",ref:"https://stripe.com/"},role:"Full-stack engineering intern",time_period:{start:"May 2020",end:"Aug 2020"}},{location:{value:"Computer Systems Fundamentals (cs131)",ref:"http://cs.brown.edu/courses/csci1310/2020/"},role:"Teaching assistant",time_period:{start:"Jan 2020",end:"May 2020"}},{location:{value:"Crowds + Machines Laboratory",ref:""},role:"Researcher",time_period:{start:"May 2019",end:"Aug 2019"}},{location:{value:"Data Structures & Algos (cs18)",ref:"https://cs.brown.edu/courses/csci0180/home.html"},role:"Teaching assistant",time_period:{start:"Jan 2019",end:"May 2019"}},{location:{value:"Functional Programming (cs17)",ref:"http://cs.brown.edu/courses/cs017/"},role:"Teaching assistant",time_period:{start:"Aug 2018",end:"Dec 2018"}},{location:{value:"UChicago",ref:"http://facweb.cs.depaul.edu/research/vc/medix/2018/index.htm"},role:"National Science Foundation research recipient",time_period:{start:"Jun 2018",end:"Aug 2018"}}],future:[{location:{value:"Stripe",ref:"https://stripe.com/"},role:"Software Engineer",time_period:{start:"August 2021"}}]},v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleContentSwitch=function(){var t=e.props.label;e.props.onPlaceButtonClick(t.split(" ")[0])},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.label,n=t?"#cfdef3":"transparent";return r.a.createElement("li",null,r.a.createElement("button",{className:"Tab-button",onClick:this.handleContentSwitch,style:{backgroundColor:n}},r.a.createElement("span",{className:"Tab-heading"},a)))}}]),a}(r.a.Component),y=(a(24),{size:25}),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleContentSwitch=function(e){n.setState({activeKey:e})},n.renderPlace=function(e){var t=e.location,a=t.value,n=t.ref,i=e.role,l=e.time_period,o=l.start,s=l.end;return r.a.createElement("div",{className:"Place",key:a},r.a.createElement("div",{className:"Place-location"},r.a.createElement("h4",null,r.a.createElement("span",{className:"Place-role"},i),r.a.createElement("span",{className:"Place-location-text"}," ",r.a.createElement("a",{className:"Place-location-link",href:n,target:"_blank",rel:"noopener noreferrer"}," @",a)))),r.a.createElement("p",{className:"Place-time"},o," ",s?"- ".concat(s):"- present"),r.a.createElement("br",null))},n.renderContent=function(){var e=n.state.activeKey;return g[e].map(n.renderPlace)},n.renderTabs=function(){var e=["past \ud83c\udf12","current \ud83c\udf14","future \ud83c\udf16"],t=n.state.activeKey;return r.a.createElement("ul",null,["past","current","future"].map((function(a,i){return r.a.createElement(v,{onPlaceButtonClick:n.handleContentSwitch,label:e[i],key:a,active:a===t})})))},n.renderWorkIcons=function(){return r.a.createElement("ul",{className:"Icon-container"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/shinelikastar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,y))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/star-su-992866170/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.b,y))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:star_su@brown.edu",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,y))))},n.state={activeKey:"current"},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Experience-section"},r.a.createElement(f,{text:"some places i've worked  \ud83d\udc23"}),r.a.createElement("div",{className:"Tab-container","data-aos":"fade-up","data-aos-delay":"200"},this.renderTabs(),this.renderContent()))}}]),a}(r.a.Component);E.defaultProps={config:g};var w=E,k=(a(25),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).renderTitle=function(e,t){return t?r.a.createElement("a",{className:"Writing-line--title Link-highlight",href:t,target:"_blank",rel:"noopener noreferrer"},'"',e,'"'):r.a.createElement("span",{className:"Writing-line--title",href:t},'"',e,'"')},e.renderLine=function(t){var a=t.title,n=t.publish,i=n.published_by,l=n.published_on,o=t.link;return r.a.createElement("div",{className:"Writing-line",key:a},r.a.createElement("p",null,e.renderTitle(a,o),r.a.createElement("span",{className:"Writing-line--published_by"},"- ",i,","),r.a.createElement("span",{className:"Writing-line--published_on"},l)))},e.renderArchive=function(){return e.props.archive.map((function(t,a){return e.renderLine(t,a)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Writing-page-container"},r.a.createElement(f,{text:"selected publications \u2728"}),r.a.createElement("div",{className:"Writing-archive"},this.renderArchive()))}}]),a}(r.a.Component));k.defaultProps={archive:[{title:"Bone Ache",publish:{published_by:"SmokeLong Quarterly Review",published_on:"forthcoming 2021"}},{title:"Butterflies and Moths",publish:{published_by:"Star 82 Review",published_on:"forthcoming 2021"}},{title:"The Making of a Ghost",publish:{published_by:"The College Hill Independent",published_on:"2019"},link:"https://www.theindy.org/1864"},{title:"When Nezha Fell From the Sky",publish:{published_by:"The College Hill Independent",published_on:"2019"},link:"https://www.theindy.org/1816"},{title:"Tart to Tart",publish:{published_by:"self-published zine",published_on:"2019"},link:"https://issuu.com/cocoa-dragon/docs/star_layout_centered_f72daf76663398"},{title:"Warming Cooling Neutral",publish:{published_by:"The College Hill Independent",published_on:"2019"},link:"https://www.theindy.org/1721"},{title:"Bean Soup",publish:{published_by:"The College Hill Independent",published_on:"2019"},link:"https://www.theindy.org/1691"},{title:"Cooling Off",publish:{published_by:"The College Hill Independent",published_on:"2019"},link:"https://www.theindy.org/1594"},{title:"Bodily Container",publish:{published_by:"STEAM stories on Medium",published_on:"2019"},link:"https://medium.com/steam-stories/bodily-container-6ea1aadb560"},{title:"Meatball",publish:{published_by:"VISIONS Magazine",published_on:"2018"},link:"https://issuu.com/visions.brown/docs/final_visions_fall18"},{title:"Ask for Something Sweet",publish:{published_by:"The College Hill Independent",published_on:"2018"},link:"https://www.theindy.org/1572"}]};var _=k,N=a(6),C=(a(26),{hidden:{opacity:0},showing:{opacity:1},transition:{duration:.3}}),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).handleToggle=function(){n.props.defaultActive||n.setState({active:!n.state.active})},n.renderContent=function(){var e=n.props.content,t=n.state.active;return r.a.createElement(N.a.div,{className:"Dropdown-content",initial:"hidden",animate:t?"showing":"hidden",variants:C,style:{display:t?"inline-block":"none"}},e)};var i=n.props.defaultActive;return n.state={active:i},n}return Object(d.a)(a,[{key:"renderSummary",value:function(){var e=this.props,t=(e.defaultActive,e.summary),a=this.state.active;return r.a.createElement("div",{className:"Dropdown-summary",onClick:this.handleToggle},t,r.a.createElement(N.a.span,{className:"Dropdown-point-icon",whileHover:{y:5},whileTap:{scale:.8},style:{cursor:"pointer"}},a?"\ud83d\udc46":"\ud83d\udc47"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dropdown","data-aos":"fade-up","data-aos-delay":"300"},this.renderSummary(),this.renderContent())}}]),a}(r.a.Component);S.defaultProps={defaultActive:!1};var O=S,j=(a(27),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.link,n=e.value;return r.a.createElement("a",{className:t,href:a,target:"_blank",rel:"noopener noreferrer"},n)}}]),a}(r.a.Component)),T=a(13),A=a.n(T),x=(a(28),r.a.createElement("p",null,"If you found any amount of delight in the drawings, these were done by my"," ",r.a.createElement(j,{link:"https://floriatsui.github.io/",value:"talented sister Floria",className:"Link-highlight"}),".",r.a.createElement("br",null),r.a.createElement("br",null),"The headers are set in Rowdies, the body in Jost. Built using React.",r.a.createElement("br",null))),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderGirlDozing",value:function(){return r.a.createElement("div",{className:"Girl-dozing-container","data-aos":"fade-left","data-aos-delay":"300"},r.a.createElement("img",{src:A.a,alt:"",className:"Girl-dozing"}))}},{key:"renderAbout",value:function(){return r.a.createElement("div",{className:"About-content"},r.a.createElement("p",{className:"About-text"},"Hi! If we met in real life, I would probably try to give you a cup of tea and something I've baked.",r.a.createElement("br",null),r.a.createElement("br",null),"I really like building stuff (soft-bread or soft-ware), crossword puzzles, fussy ways of making coffee, learning and teaching, figure skating, and"," ",r.a.createElement(j,{link:"https://airtable.com/shrqtsEcKMYjEjXaO",value:"reading",className:"Link-highlight"})," ","anything I come across.",r.a.createElement("br",null),r.a.createElement("br",null),"Thanks for stopping by!"))}},{key:"render",value:function(){return r.a.createElement("section",{className:"DesignNotes-section"},r.a.createElement(f,{text:"about \ud83c\udf3f"}),r.a.createElement("div",{className:"About-container"},r.a.createElement("div",{className:"About-dropdown","data-aos":"fade-up","data-aos-delay":"200"},this.renderAbout(),r.a.createElement(O,{summary:"design notes",content:x})),this.renderGirlDozing()))}}]),a}(r.a.Component),M=a(8),W=(a(29),a(14)),P=a.n(W);var D=function(){var e=r.a.useState(0),t=Object(M.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),l=Object(M.a)(i,2),o=l[0],s=l[1];return r.a.useEffect((function(){function e(){var e=window.scrollY;s(e>a),n(e)}return window.addEventListener("scroll",e,!1),function(){window.removeEventListener("scroll",e,!1)}}),[a]),r.a.createElement(N.a.button,{type:"button",className:"Top-button",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},whileHover:{y:-8},initial:{opacity:0},animate:{opacity:o?1:0},transition:{opacity:{duration:.2},y:{duration:.1}}},r.a.createElement("img",{src:P.a,alt:"Top button"}))};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Welcome-section"},r.a.createElement("div",{className:"Welcome-container"},r.a.createElement("img",{src:s.a,className:"Girl-diva",alt:"Picture of a girl with sunglasses in a blue overall dress","data-aos":"fade-down","data-aos-delay":"300"}),r.a.createElement("div",{className:"Welcome-text-container"},r.a.createElement("p",{className:"DisplayText"},"hi, it's star"," ",r.a.createElement("span",{role:"img","aria-label":"peace sign emoji","data-aos":"fade-up","data-aos-delay":"900"},"\u270c\ufe0f")),r.a.createElement("p",{className:"Welcome-subtext"},"welcome 2 an online representation of me"," ")))),r.a.createElement(D,null),r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(I,null),r.a.createElement(c,null))};a(30);var z=function(){return r.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.ee306237.chunk.js.map