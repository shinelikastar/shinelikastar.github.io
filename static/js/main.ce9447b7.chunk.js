(this["webpackJsonpstar-site"]=this["webpackJsonpstar-site"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/diva.2a009e4a.png"},,function(e,t,a){e.exports=a.p+"static/media/dozing.54f74e8c.png"},function(e,t,a){e.exports=a.p+"static/media/pointing-up.951c1d7f.png"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(10),o=a.n(i),l=(a(20),a(11)),s=a.n(l);a(21),a(22);var c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"Footer"},r.a.createElement("a",{href:"https://github.com/shinelikastar/shinelikastar.github.io",target:"_blank",rel:"noopener noreferrer",className:"Footer-credit"},"Designed ","&"," Built by Star Su"," ",r.a.createElement("span",{role:"img","aria-label":"star"},"\ud83d\udcab"),"  ","2020")))},u=a(2),m=a(3),h=a(5),p=a(4),d=a(7),f=a(12);a(23);var b=function(e){return r.a.createElement("div",{className:"Header-container","data-aos":"fade-right","data-aos-delay":"200"},r.a.createElement("p",{className:"Header-text"},e.text))},g={current:[{location:{value:"Brown University",ref:"https://www.brown.edu/"},role:"Senior",time_period:{start:"Sep 2017",end:"May 2021"}},{location:{value:"Split Lip Magazine",ref:"https://splitlipthemag.com/"},role:"Flash reader",time_period:{start:"Feb 2021"}},{location:{value:"Operating Systems",ref:"https://brown-cs1690.github.io/brown-cs167-s21/#/"},role:"Teaching assistant",time_period:{start:"Jan 2021"}}],past:[{location:{value:"Computer Systems",ref:"https://brown-cs0330.github.io/website/index.html"},role:"Head teaching assistant",time_period:{start:"Mar 2020",end:"Dec 2020"}},{location:{value:"Visual Computing Lab",ref:"https://visual.cs.brown.edu/"},role:"Researcher",time_period:{start:"Jan 2020",end:"May 2020"}},{location:{value:"Stripe",ref:"https://stripe.com/"},role:"Full-stack engineering intern",time_period:{start:"May 2020",end:"Aug 2020"}},{location:{value:"Computer Systems Fundamentals (cs131)",ref:"http://cs.brown.edu/courses/csci1310/2020/"},role:"Teaching assistant",time_period:{start:"Jan 2020",end:"May 2020"}},{location:{value:"Crowds + Machines Laboratory",ref:""},role:"Researcher",time_period:{start:"May 2019",end:"Aug 2019"}},{location:{value:"Data Structures & Algos (cs18)",ref:"https://cs.brown.edu/courses/csci0180/home.html"},role:"Teaching assistant",time_period:{start:"Jan 2019",end:"May 2019"}},{location:{value:"Functional Programming (cs17)",ref:"http://cs.brown.edu/courses/cs017/"},role:"Teaching assistant",time_period:{start:"Aug 2018",end:"Dec 2018"}},{location:{value:"UChicago",ref:"http://facweb.cs.depaul.edu/research/vc/medix/2018/index.htm"},role:"National Science Foundation research recipient",time_period:{start:"Jun 2018",end:"Aug 2018"}}],future:[{location:{value:"Stripe",ref:"https://stripe.com/"},role:"Software Engineer",time_period:{start:"August 2021"}},{location:{value:"SmokeLong Quarterly",ref:"http://www.smokelong.com"},role:"Reader-in-Residence",time_period:{start:"Jun 2021",end:"Sep 2021"}}]},v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleContentSwitch=function(){var t=e.props.label;e.props.onPlaceButtonClick(t.split(" ")[0])},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.label,n=t?"#cfdef3":"transparent";return r.a.createElement("li",null,r.a.createElement("button",{className:"Tab-button",onClick:this.handleContentSwitch,style:{backgroundColor:n}},r.a.createElement("span",{className:"Tab-heading"},a)))}}]),a}(r.a.Component),w=(a(24),{size:25}),y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleContentSwitch=function(e){n.setState({activeKey:e})},n.renderPlace=function(e){var t=e.location,a=t.value,n=t.ref,i=e.role,o=e.time_period,l=o.start,s=o.end;return r.a.createElement("div",{className:"Place",key:a},r.a.createElement("div",{className:"Place-location"},r.a.createElement("h4",null,r.a.createElement("span",{className:"Place-role"},i),r.a.createElement("span",{className:"Place-location-text"}," ",r.a.createElement("a",{className:"Place-location-link",href:n,target:"_blank",rel:"noopener noreferrer"}," @",a)))),r.a.createElement("p",{className:"Place-time"},l," ",s?"- ".concat(s):"- present"),r.a.createElement("br",null))},n.renderContent=function(){var e=n.state.activeKey;return g[e].map(n.renderPlace)},n.renderTabs=function(){var e=["past \ud83c\udf12","current \ud83c\udf14","future \ud83c\udf16"],t=n.state.activeKey;return r.a.createElement("ul",null,["past","current","future"].map((function(a,i){return r.a.createElement(v,{onPlaceButtonClick:n.handleContentSwitch,label:e[i],key:a,active:a===t})})))},n.renderWorkIcons=function(){return r.a.createElement("ul",{className:"Icon-container"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/shinelikastar",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,w))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/star-su-992866170/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.b,w))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:star_su@brown.edu",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,w))))},n.state={activeKey:"current"},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Experience-section"},r.a.createElement(b,{text:"some places i've worked  \ud83d\udc23"}),r.a.createElement("div",{className:"Tab-container","data-aos":"fade-up","data-aos-delay":"200"},this.renderTabs(),this.renderContent()))}}]),a}(r.a.Component);y.defaultProps={config:g};var E=y,k=(a(25),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.link,n=e.value;return r.a.createElement("a",{className:t,href:a,target:"_blank",rel:"noopener noreferrer"},n)}}]),a}(r.a.Component)),_=(a(26),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderTitle=function(e,t,a){var n="Writing-line--title Link-highlight";return t?r.a.createElement("span",null,r.a.createElement(k,{className:n,link:t,value:e}),a&&r.a.createElement("span",null," &  ",r.a.createElement(k,{className:n,link:a.interview_link,value:"author interview"}))):r.a.createElement("span",{className:"Writing-line--title forthcoming",href:t},'"',e,'"')},e.renderPublisher=function(e,t){if(e){var a=e.forthcoming_link;return r.a.createElement("span",{className:"Writing-line--published_by"},"-"," ",r.a.createElement(k,{className:"Writing-line--forthcoming Link-highlight",link:a,value:t}),",")}return r.a.createElement("span",{className:"Writing-line--published_by"},"- ",t)},e.renderLine=function(t){var a=t.title,n=t.interview,i=t.publish,o=i.published_by,l=i.published_on,s=t.link,c=t.forthcoming;return r.a.createElement("div",{className:"Writing-line",key:a},r.a.createElement("p",null,e.renderTitle(a,s,n),e.renderPublisher(c,o),r.a.createElement("span",{className:"Writing-line--published_on"},l)))},e.renderStoryList=function(t,a){return t.map((function(t,n){var i=r.a.createElement("div",{className:"column Writing-sub-header"});return 0===n&&(i=r.a.createElement("div",{className:"column Writing-sub-header"},a?"Flash fiction":"Short stories")),r.a.createElement("div",{className:"row"},i,r.a.createElement("div",{className:"column Writing-story-col"},e.renderLine(t,n)))}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.config,t=e[0].short_stories,a=e[1].flash;return r.a.createElement("section",{className:"Writing-page-container"},r.a.createElement(b,{text:"publications"}),r.a.createElement("div",{className:"Writing-archive"},this.renderStoryList(t,!1),this.renderStoryList(a,!0)))}}]),a}(r.a.Component));_.defaultProps={config:[{short_stories:[{title:"Secret Skin",publish:{published_by:"Waxwing"},link:"http://waxwingmag.org/items/issue23/42_Su-Secret-Skin.php"},{title:"Properties of Light",publish:{published_by:"Baltimore Review"},link:"https://baltimorereview.org/index.php/winter_2021/contributor/star-su"},{title:"Kun",publish:{published_by:"The Rumpus",published_on:"forthcoming"},forthcoming:{forthcoming_link:"https://therumpus.net/sections/blogs/rumpus-original-fiction/"}},{title:"Color Study",publish:{published_by:"Chestnut Review",published_on:"forthcoming (Summer Issue)"},forthcoming:{forthcoming_link:"https://chestnutreview.com/issues/"}}]},{flash:[{title:"Bone Ache",publish:{published_by:"SmokeLong Quarterly"},interview:{interview_link:"http://www.smokelong.com/smoke-mirrors-with-star-su/"},link:"http://www.smokelong.com/bone-ache/"},{title:"Parable of the Fishbone",publish:{published_by:"trampset"},link:"https://trampset.org/parable-of-the-fishbone-640e5b1c1923"},{title:"Freezing Point",publish:{published_by:"Citron Review"},link:"https://citronreview.com/2021/03/21/freezing-point/"},{title:"Butterflies and Moths",publish:{published_by:"Star 82 Review"},link:"http://www.star82review.com/9.1/su-butterflies.html"},{title:"Twin Bowls",publish:{published_by:"Pithead Chapel",published_on:"forthcoming July 2021"},forthcoming:{forthcoming_link:"https://pitheadchapel.com/"}},{title:"Sweet Teeth",publish:{published_by:"The Offing",published_on:"forthcoming May"},forthcoming:{forthcoming_link:"https://theoffingmag.com/department/micro/"}},{title:"Excerpt from the History of Clocks",publish:{published_by:"Jellyfish Review",published_on:"forthcoming April 30"},forthcoming:{forthcoming_link:"https://jellyfishreview.wordpress.com/"}},{title:"Beauty & the Beast",publish:{published_by:"Wildness",published_on:"forthcoming (Issue 26) May"},forthcoming:{forthcoming_link:"https://readwildness.com/issues"}},{title:"Fairest",publish:{published_by:"Lost Balloon",published_on:"forthcoming May"},forthcoming:{forthcoming_link:"https://lost-balloon.com/"}},{title:"Original Taste / \u539f\u5473",publish:{published_by:"Passages North",published_on:"forthcoming (Issue 43) spring 2022"},forthcoming:{forthcoming_link:"https://www.passagesnorth.com/"}}]}]};var N=_,S=a(6),C=(a(27),{hidden:{opacity:0},showing:{opacity:1},transition:{duration:.3}}),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).handleToggle=function(){n.props.defaultActive||n.setState({active:!n.state.active})},n.renderContent=function(){var e=n.props.content,t=n.state.active;return r.a.createElement(S.a.div,{className:"Dropdown-content",initial:"hidden",animate:t?"showing":"hidden",variants:C,style:{display:t?"inline-block":"none"}},e)};var i=n.props.defaultActive;return n.state={active:i},n}return Object(m.a)(a,[{key:"renderSummary",value:function(){var e=this.props.summary,t=this.state.active;return r.a.createElement("div",{className:"Dropdown-summary",onClick:this.handleToggle},e,r.a.createElement(S.a.span,{className:"Dropdown-point-icon",whileHover:{y:5},whileTap:{scale:.8},style:{cursor:"pointer"}},t?"\ud83d\udc46":"\ud83d\udc47"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Dropdown","data-aos":"fade-up","data-aos-delay":"300"},this.renderSummary(),this.renderContent())}}]),a}(r.a.Component);O.defaultProps={defaultActive:!1};var j=O,T=a(13),x=a.n(T),P=(a(28),r.a.createElement("p",null,"If you found any amount of delight in the drawings, these were done by my"," ",r.a.createElement(k,{link:"https://floriatsui.github.io/",value:"talented sister Floria",className:"Link-highlight"}),".",r.a.createElement("br",null),r.a.createElement("br",null),"The headers are set in Rowdies, the body in Jost. Built using React.",r.a.createElement("br",null))),W=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"renderGirlDozing",value:function(){return r.a.createElement("div",{className:"Girl-dozing-container","data-aos":"fade-left","data-aos-delay":"300"},r.a.createElement("img",{src:x.a,alt:"",className:"Girl-dozing"}))}},{key:"renderAbout",value:function(){return r.a.createElement("div",{className:"About-content"},r.a.createElement("p",{className:"About-text"},"Hi! If we met in real life, I would probably try to give you a cup of tea and something I've baked.",r.a.createElement("br",null),r.a.createElement("br",null),"I really like building stuff (soft-bread or soft-ware), crossword puzzles, fussy ways of making coffee, learning and teaching, figure skating, and"," ",r.a.createElement(k,{link:"https://www.goodreads.com/user/show/51203370-star-su",value:"reading",className:"Link-highlight"})," ","anything I come across.",r.a.createElement("br",null),r.a.createElement("br",null),"Thanks for stopping by! Find me on Twitter",r.a.createElement(k,{link:"https://twitter.com/stars_su",value:"(@stars_su)",className:"Link-highlight"}),"."))}},{key:"render",value:function(){return r.a.createElement("section",{className:"DesignNotes-section"},r.a.createElement(b,{text:"about \ud83c\udf3f"}),r.a.createElement("div",{className:"About-container"},r.a.createElement("div",{className:"About-dropdown","data-aos":"fade-up","data-aos-delay":"200"},this.renderAbout(),r.a.createElement(j,{summary:"design notes",content:P})),this.renderGirlDozing()))}}]),a}(r.a.Component),A=a(8),L=(a(29),a(14)),F=a.n(L);var B=function(){var e=r.a.useState(0),t=Object(A.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),o=Object(A.a)(i,2),l=o[0],s=o[1];return r.a.useEffect((function(){function e(){var e=window.scrollY;s(e>a),n(e)}return window.addEventListener("scroll",e,!1),function(){window.removeEventListener("scroll",e,!1)}}),[a]),r.a.createElement(S.a.button,{type:"button",className:"Top-button",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},whileHover:{y:-8},initial:{opacity:0},animate:{opacity:l?1:0},transition:{opacity:{duration:.2},y:{duration:.1}}},r.a.createElement("img",{src:F.a,alt:"Top button"}))};var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Welcome-section"},r.a.createElement("div",{className:"Welcome-container"},r.a.createElement("img",{src:s.a,className:"Girl-diva",alt:"Picture of a girl with sunglasses in a blue overall dress","data-aos":"fade-down","data-aos-delay":"300"}),r.a.createElement("div",{className:"Welcome-text-container"},r.a.createElement("p",{className:"DisplayText"},"hi, it's star"," ",r.a.createElement("span",{role:"img","aria-label":"peace sign emoji","data-aos":"fade-up","data-aos-delay":"900"},"\u270c\ufe0f")),r.a.createElement("p",{className:"Welcome-subtext"},"welcome 2 an online representation of me"," ")))),r.a.createElement(B,null),r.a.createElement(E,null),r.a.createElement(N,null),r.a.createElement(W,null),r.a.createElement(c,null))};a(30);var D=function(){return r.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.ce9447b7.chunk.js.map