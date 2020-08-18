(this["webpackJsonpstar-site"]=this["webpackJsonpstar-site"]||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/weenix.ffc80066.gif"},function(e,t,a){e.exports=a.p+"static/media/eggs_static.ca5d308d.png"},function(e,t,a){e.exports=a.p+"static/media/raisin_bread_static.7feb7caa.png"},function(e,t,a){e.exports=a.p+"static/media/address_autocomplete.efb768cd.gif"},function(e,t,a){e.exports=a.p+"static/media/ray_static.afcdcce3.png"},,function(e,t,a){e.exports=a.p+"static/media/diva.2a009e4a.png"},,function(e,t,a){e.exports=a.p+"static/media/dozing.54f74e8c.png"},function(e,t,a){e.exports=a.p+"static/media/pointing-up.951c1d7f.png"},,,function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),o=a.n(i),s=(a(36),a(56)),l=a(29),c=(a(37),a(3)),u=a(4),d=a(6),m=a(5),h=a(10),p=a.n(h),g=a(8),b=a(9),f=a(24),y=a(19),v=a.n(y),w=a(20),E=a.n(w),k=a(21),j=a.n(k),N=a(22),_=a.n(N),O=a(23),T=a.n(O),C=(a(38),{size:20,fill:"rgb(16, 162, 245)",className:"Project-icon"}),x={size:20,stroke:"rgb(16, 162, 245)",className:"Project-icon"},S={weenix:v.a,eggs:E.a,raisin:j.a,address:_.a,ray:T.a};function P(e){return e%2===0}var I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).tokenizeTitle=function(e){return e.split("-")[0].split(" ")[0].toLowerCase()},e.renderImage=function(){var t=e.props,a=t.title,n=t.index,i=S[e.tokenizeTitle(a)],o=p()("Project-img",{"Project-img--left":P(n)});return r.a.createElement("div",{className:"Project-img-container"},r.a.createElement("img",{className:o,src:i,alt:a}))},e.renderLinks=function(t){var a=t.github,n=t.files,i=t.redirect,o=e.props.index,s=0===o||P(o)?"left":"right";return r.a.createElement(g.a.div,{style:{float:s,cursor:"pointer"},whileHover:{y:-4},whileTap:{scale:.8}},a&&r.a.createElement("a",{href:a,className:"Project-icon"},r.a.createElement(b.b,C)),n&&r.a.createElement("a",{href:n},r.a.createElement(b.a,C)),i&&r.a.createElement("a",{href:i},r.a.createElement(f.a,x)))},e.renderLanguages=function(e){return r.a.createElement("ul",{className:"Language-list","data-aos":"fade-right","data-aos-delay":"150"},e.map((function(e){return r.a.createElement("li",{className:"Language-list-elem",key:e},e)})))},e.renderBoard=function(){var t=e.props,a=t.title,n=t.description,i=t.languages,o=t.links,s=t.index,l=p()("Project-board",{"Project-board--left":P(s)},{"Project-board--right":!P(s)}),c=p()("Project-header",{"Project-header-left":P(s)}),u=p()("Project-text");return r.a.createElement("div",{className:l,"data-aos":"fade-up","data-aos-delay":"200"},r.a.createElement("p",{className:c},a),r.a.createElement("p",{className:u},n),e.renderLanguages(i),e.renderLinks(o))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Project-container"},this.renderImage(),this.renderBoard())}}]),a}(r.a.Component),A=[{title:"Weenix",description:"Unix-like kernel built as a semester long project for Operating Systems (CS167/69). It's hard to articulate how much I loved building this. Ask me about shadow chains in fork, or the days-long bug I had in my waitpid implementation. I am now always down to learn and patience my way through systems programming.",languages:["A lot of C","A lot of GDB","Assembly"],links:{github:"https://github.com/brown-cs1690/weenix-2020-shinelikastar"},imgs:{static:"./images/weenix/weenix_static.png"}},{title:"Address Autocomplete",description:"During my summer 2020 internship at Stripe, I designed a new form field UI for their Checkout page that searches for addresses as users type. I learned so much about the intricacies and level of detail that goes into building one component. Very excited to see something I built be used in the real world!",languages:["React","Framer Motion","Redux","Ruby","Jest"],links:{redirect:"https://stripe.com/payments/checkout"},imgs:{static:"./images/eggs/eggs_static.png"}},{title:"Eggs-ibition",description:"Photorealistic rendering of eggs with depth of field, texture, displacement and shadow mapping, mounted on a B\xe9zier camera. This was a whimsical project I worked on with my friends for the final in Graphics (CS1230), modeling a museum for eggs. We learned that shadow mapping is hard, eggs do not obey mathematical modeling, and that GLSL is maddening to debug, but always just so cool.",languages:["C++","GLSL"],links:{github:"https://github.com/shinelikastar/cs1230-eggs"},imgs:{static:"./images/eggs/eggs_static.png"}},{title:"Raisin-Bread",description:"Inspired by Tamagotchi, we designed a Chrome extension, where users raise pet bread in their browser by staying productive. I designed the popup to control the settings for the extenstion, logic for the pomodoro timers, and created real-time data visualizations of user browsing history. This was my first large-scale software project. The best part was watching my friends use whenever they needed to be productive. ",languages:["Javascript","d3.js","jQuery","HTML","CSS"],links:{files:"tinyurl.com/raisin-bread-full"},imgs:{static:"./images/eggs/eggs_static.png"}},{title:"Ray",description:"Multithreaded raytracer implemented according to the Phong lighting equation. Capable of rendering reflection, shadows, specular highlights, directional lighting, attenuation. I am delighted to use math whenever it comes up in programming, and this project definitely satisfied that itch. I loved being able to program something that could be modeled so precisely by physics. Visual debugging is the best. ",languages:["C++","GLM"],links:{},imgs:{static:"./images/ray/ray_static.png"}}];a(39);var L=function(e){return r.a.createElement("div",{className:"Header-container","data-aos":"fade-right","data-aos-delay":"200"},r.a.createElement("p",{className:"Header-text"},e.text))},W=(a(40),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderProjects=function(){return A.map((function(e,t){var a=e.title;return r.a.createElement(I,Object.assign({key:a,index:t},e))}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Work-section"},r.a.createElement(L,{text:"some things i've built \ud83d\udca5"}),r.a.createElement("div",{className:"Project-all-container"},this.renderProjects()))}}]),a}(r.a.Component)),M=a(25),B=a.n(M);a(41),a(42);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"Footer"},r.a.createElement("a",{href:"https://github.com/shinelikastar/shinelikastar.github.io",className:"Footer-credit"},"Designed & Built by Star Su"," ",r.a.createElement("span",{role:"img","aria-label":"star"},"\ud83d\udcab"),"  ","2020")))},D=a(26),z={current:[{location:"Brown University",role:"Rising senior",time_period:{start:"Sep 2017",end:"May 2021"}},{location:"Computer Systems",role:"Head teaching assistant",time_period:{start:"Mar 2020"}},{location:"Visual Computing Lab",role:"Researcher",time_period:{start:"Jan 2020"}}],past:[{location:"Stripe",role:"Full-stack engineering intern",time_period:{start:"May 2020",end:"Aug 2020"}},{location:"Computer Systems Fundamentals (cs131)",role:"Teaching assistant",time_period:{start:"May 2020",end:"Jan 2020"}},{location:"Crowds + Machines Laboratory",role:"Researcher",time_period:{start:"May 2019",end:"Aug 2019"}},{location:"Data Structures & Algos TA (cs18)",role:"Teaching assistant",time_period:{start:"May 2019",end:"Jan 2019"}},{location:"Functional Programming TA (cs17)",role:"Teaching assistant",time_period:{start:"Dec 2018",end:"Aug 2018"}},{location:"UChicago",role:"National Science Foundation research recipient",time_period:{start:"Jun 2018",end:"Aug 2018"}}],future:[{location:"new grad!",role:"Seeking SWE opportunities",time_period:{start:"For 2021 roles"}}]},G=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleContentSwitch=function(){var t=e.props.label;e.props.onPlaceButtonClick(t.split(" ")[0])},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.label,n=t?"#cfdef3":"transparent";return r.a.createElement("li",null,r.a.createElement("button",{className:"Tab-button",onClick:this.handleContentSwitch,style:{backgroundColor:n}},r.a.createElement("span",{className:"Tab-heading"},a)))}}]),a}(r.a.Component),R=(a(43),{size:25}),J=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleContentSwitch=function(e){n.setState({activeKey:e})},n.renderPlace=function(e){var t=e.location,a=e.role,n=e.time_period,i=n.start,o=n.end;return r.a.createElement("div",{className:"Place",key:t},r.a.createElement("div",{className:"Place-location"},r.a.createElement("h4",null,r.a.createElement("span",{className:"Place-role"},a," "),r.a.createElement("span",{className:"Place-location-text"}," "," @",t))),r.a.createElement("p",{className:"Place-time"},i," ",o?"- ".concat(o):"- present"),r.a.createElement("br",null))},n.renderContent=function(){var e=n.state.activeKey;return z[e].map(n.renderPlace)},n.renderTabs=function(){var e=["past \ud83c\udf12","current \ud83c\udf14","future \ud83c\udf16"],t=n.state.activeKey;return r.a.createElement("ul",null,["past","current","future"].map((function(a,i){return r.a.createElement(G,{onPlaceButtonClick:n.handleContentSwitch,label:e[i],key:a,active:a===t})})))},n.renderWorkIcons=function(){return r.a.createElement("ul",{className:"Icon-container"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/shinelikastar"},r.a.createElement(b.b,R))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/star-su-992866170/"},r.a.createElement(b.c,R))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:star_su@brown.edu"},r.a.createElement(D.a,R))))},n.state={activeKey:"current"},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Experience-section"},r.a.createElement(L,{text:"some places i've worked  \ud83d\udc23"}),r.a.createElement("div",{className:"Tab-container","data-aos":"fade-up","data-aos-delay":"200"},this.renderTabs(),this.renderContent()),this.renderWorkIcons())}}]),a}(r.a.Component);J.defaultProps={config:z};var H=J,K=(a(44),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderLine=function(e,t){var a=e.title,n=e.publish,i=n.published_by,o=n.published_on,s=e.link;return r.a.createElement("div",{className:"line-".concat(t),key:a},r.a.createElement("a",{className:"Writing-line--title",href:s},a),r.a.createElement("p",{className:"Writing-line--publish"},i,r.a.createElement("br",null),o))},e.renderArchive=function(){return e.props.archive.map((function(t,a){return e.renderLine(t,a)}))},e.renderThoughts=function(){return r.a.createElement("div",{className:"Writing-thought-container"},r.a.createElement("p",{className:"Writing-thought-header"},"Thoughts"),r.a.createElement("p",null,"A collection of my writing pieces that live on the interwebs."))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Writing-page-container"},r.a.createElement(L,{text:"some things i've written \u2728"}),r.a.createElement("div",{className:"Writing-archive"},this.renderArchive()))}}]),a}(r.a.Component));K.defaultProps={archive:[{title:"The Making of a Ghost",publish:{published_by:"The Indy",published_on:"December 2019"},link:"https://www.theindy.org/1864"},{title:"When Nezha Fell From the Sky",publish:{published_by:"The Indy",published_on:"October 2019"},link:"https://www.theindy.org/1816"},{title:"Tart to Tart",publish:{published_by:"Self-published zine",published_on:"May 2019"},link:"https://issuu.com/cocoa-dragon/docs/star_layout_centered_f72daf76663398"},{title:"WARMING COOLING NEUTRAL",publish:{published_by:"The Indy",published_on:"April 2019"},link:"https://www.theindy.org/1721"},{title:"Bean Soup",publish:{published_by:"The Indy",published_on:"March 2019"},link:"https://www.theindy.org/1691"},{title:"Cooling Off",publish:{published_by:"The Indy",published_on:"February 2019"},link:"https://www.theindy.org/1594"},{title:"Bodily Container",publish:{published_by:"STEAM stories on Medium",published_on:"February 2019"},link:"https://medium.com/steam-stories/bodily-container-6ea1aadb560"},{title:"Meatball",publish:{published_by:"The Indy",published_on:"December 2018"},link:"https://issuu.com/visions.brown/docs/final_visions_fall18"},{title:"Ask for Something Sweet",publish:{published_by:"The Indy",published_on:"October 2018"},link:"https://www.theindy.org/1572"},{title:"How to Remember in Noodles",publish:{published_by:"Brown Asian Sisters Empowered: Survival Zine",published_on:"October 2018"},link:"https://drive.google.com/file/d/1O0TG7OPwmTuriK4h_wtOK7FBjWObZ3Cm/view"}]};var U=K,V=(a(45),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleToggle=function(){n.setState({active:!n.state.active})},n.renderContent=function(){var e=n.props.content,t=n.state.active;return r.a.createElement("div",{className:"Dropdown-content",style:{display:t?"inline-block":"none"}},e)};var i=n.props.defaultActive;return n.state={active:i},n}return Object(u.a)(a,[{key:"renderSummary",value:function(){var e=this.props.summary,t=this.state.active;return r.a.createElement("div",{className:"Dropdown-summary",onClick:this.handleToggle},e,r.a.createElement(g.a.span,{className:"Dropdown-point-icon",whileHover:{y:5},whileTap:{scale:.8}},t?"\ud83d\udc46":"\ud83d\udc47"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dropdown"},this.renderSummary(),this.renderContent())}}]),a}(r.a.Component));V.defaultProps={defaultActive:!1};var Z=V,q=a(27),Q=a.n(q),Y=(a(46),r.a.createElement("p",null,"If you found any amount of delight in the drawings, these were done by my"," ",r.a.createElement("a",{href:"https://floriatsui.github.io/"},"talented sister Floria"),".",r.a.createElement("br",null),r.a.createElement("br",null),"The headers are set in Rowdies, the body in Jost. If you take typefaces seriously, I want you to know that I am a serifs girl. Their delicate temperament was not suited for the ample usage of emojis.",r.a.createElement("br",null),r.a.createElement("br",null),"Built using React.",r.a.createElement("br",null))),$=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderGirlDozing",value:function(){return r.a.createElement("div",{className:"Girl-dozing-container","data-aos":"fade-left","data-aos-delay":"200"},r.a.createElement("img",{src:Q.a,alt:"",className:"Girl-dozing"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"DesignNotes-page"},r.a.createElement(L,{text:"about \ud83c\udf3f"}),r.a.createElement("div",{className:"About-container"},r.a.createElement("div",{className:"About-dropdown","data-aos":"fade-up","data-aos-delay":"200"},r.a.createElement(Z,{summary:"design notes",content:Y})),this.renderGirlDozing()))}}]),a}(r.a.Component),X=a(14),ee=(a(47),a(28)),te=a.n(ee);var ae=function(){var e=r.a.useState(0),t=Object(X.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),o=Object(X.a)(i,2),s=o[0],l=o[1];return r.a.useEffect((function(){function e(){var e=window.scrollY;l(e>a),n(e)}return window.addEventListener("scroll",e,!1),function(){window.removeEventListener("scroll",e,!1)}}),[a]),r.a.createElement(g.a.button,{type:"button",className:"Top-button",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},whileHover:{y:-8},initial:{opacity:0},animate:{opacity:s?1:0},transition:{opacity:{duration:.2},y:{duration:.1}}},r.a.createElement("img",{src:te.a,alt:"Top button"}))};var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Welcome-section"},r.a.createElement("div",{className:"Welcome-container"},r.a.createElement("img",{src:B.a,className:"Girl-diva",alt:"Picture of a girl with sunglasses in a blue overall dress","data-aos":"fade-down","data-aos-delay":"300"}),r.a.createElement("div",{className:"Welcome-text-container"},r.a.createElement("p",{className:"DisplayText"},"hi, it's star"," ",r.a.createElement("span",{role:"img","aria-label":"peace sign emoji","data-aos":"fade-up","data-aos-delay":"900"},"\u270c\ufe0f")),r.a.createElement("p",{className:"Welcome-subtext"},"welcome 2 an online representation of me"," ")))),r.a.createElement(ae,null),r.a.createElement(H,null),r.a.createElement(W,null),r.a.createElement(U,null),r.a.createElement($,null),r.a.createElement(F,null))};var re=function(){var e=Object(l.a)();return r.a.createElement(s.b,{history:e},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/work",component:W}),r.a.createElement(s.a,{path:"/writing"}),r.a.createElement(s.a,{exact:!0,path:"/",component:ne})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[31,1,2]]]);
//# sourceMappingURL=main.198c88fd.chunk.js.map