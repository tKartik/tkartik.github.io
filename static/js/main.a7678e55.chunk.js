(this.webpackJsonpfolio=this.webpackJsonpfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/rec.32779635.jpg"},,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/logo3.9cc22c0d.png"},function(e,t,a){e.exports=a.p+"static/media/peep2.2a456740.png"},function(e,t,a){e.exports=a.p+"static/media/peep.0f5a20f1.png"},function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=(a(22),a(1)),l=a(2),s=a(4),o=a(3),m=a(5),p=a(14),u=a.n(p),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={text:"",isDeleting:!1,loopNum:0,typingSpeed:1e3},a.handleType=function(){var e=a.props.dataText,t=a.state,n=t.isDeleting,i=t.loopNum,r=t.text,c=t.typingSpeed,l=e[i%e.length];a.setState({text:n?l.substring(0,r.length-1):l.substring(0,r.length+1),typingSpeed:n?30:150}),n||r!==l?n&&""===r&&a.setState({isDeleting:!1,loopNum:i+1}):setTimeout((function(){return a.setState({isDeleting:!0})}),500),setTimeout(a.handleType,c)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return i.a.createElement("dv",null,i.a.createElement("p1",null,this.props.heading,"\xa0"),i.a.createElement("p2",null,i.a.createElement("span",null,this.state.text),i.a.createElement("span",{id:"cursor"})))}}]),t}(i.a.Component),h=a(7),g=a.n(h),f=(a(26),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("weeks"),t=localStorage.getItem("totalWeeks");this.setState({weeks:e,totalWeeks:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"first"},i.a.createElement("div",null,i.a.createElement("img",{src:u.a,alt:"logo"})),i.a.createElement("div",null,i.a.createElement("h1",null,"Kartik Tyagi")),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement(d,{heading:"I",dataText:["Code.","  ","Design.","Create."]}))))}}]),t}(i.a.Component)),E=(a(27),a(11),i.a.Component,a(15)),b=a.n(E),y=a(16),v=a.n(y),k=a(8),j=a.n(k),w=a(6),N=a.n(w),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("img",{className:"image",src:b.a,alt:"profile"}),i.a.createElement("img",{className:"image2",src:v.a,alt:"profile"})),i.a.createElement("div",{className:"mobileContainer"},i.a.createElement("div",{className:"aboutH"},i.a.createElement(j.a,{right:!0,cascade:!0},i.a.createElement("h2",{className:"heading",style:{zIndex:2,top:"5% "}},"About Me")),i.a.createElement("img",{src:N.a,alt:"rec",className:"rec"})),i.a.createElement(j.a,{right:!0},i.a.createElement("p",{className:"para"},"Hi, I'm Kartik! I am currently an undergrad, studying Architecture at"," ","IIT Kharagpur.",i.a.createElement("br",null)," I am curious about emerging technologies and intrigued by the design of things around me and how it affects the human behaviour. I use a blend of code and design to make digital products or simply beautiful stuff.",i.a.createElement("br",null),"Your can find my Resume"," ",i.a.createElement("a",{href:"./CV_Kartik.pdf",style:{textDecorationColor:"#7d7968"}},i.a.createElement("span",{style:{color:"#7d7968",fontWeight:"bold"}},"here")),".")))))}}]),t}(i.a.Component),I=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(j.a,{bottom:!0},i.a.createElement("div",{className:"card"},i.a.createElement("a",{href:this.props.details.link,target:"_blank"},i.a.createElement("img",{className:"img",src:this.props.details.image,alt:this.props.details.name})),i.a.createElement("div",{className:"middle"},i.a.createElement("a",{href:this.props.details.link,target:"_blank"},i.a.createElement("h1",{className:"projectName"},this.props.details.name)),i.a.createElement("span",{className:"date"},i.a.createElement("i",null,this.props.details.type," \u2022"," ",i.a.createElement("span",null,this.props.details.year))),i.a.createElement("p",{className:"projectDesc"},this.props.details.desc))))}}]),t}(i.a.Component)),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"cContainer"},i.a.createElement("div",{className:"cLeft"},i.a.createElement("h2",{className:"heading leftH",style:{zIndex:"2"}},"LET'S TALK"),i.a.createElement("img",{src:N.a,alt:"rec2",className:"rec2"})),i.a.createElement("div",{className:"cRight"},i.a.createElement("div",null,i.a.createElement("p",{className:"cHead"},"Email"),i.a.createElement("p",{className:"cContent"},i.a.createElement("a",null,"tyagik.iitkgp@gmail.com"))),i.a.createElement("div",null,i.a.createElement("p",{className:"cHead"},"Github"),i.a.createElement("p",{className:"cContent"},i.a.createElement("a",{href:"https://github.com/tkartik"},"github.com/tkartik"))),i.a.createElement("div",null,i.a.createElement("p",{className:"cHead"},"Social"),i.a.createElement("div",{style:{display:"flex",height:"justifyContent"}},i.a.createElement("p",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/kartik-tyagi-935032129/",className:"cContent"},"LinkedIn")),i.a.createElement("p",null,i.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100012190008591",className:"cContent"},"Facebook")),i.a.createElement("p",null,i.a.createElement("a",{href:"https://www.instagram.com/tyag_i_kartik/",className:"cContent"},"Instagram"))))))}}]),t}(i.a.Component),P={P1:{name:"Lymap",desc:"Visualizing text patterns by vector-izing alphabets through an intereactive web app made on P5.js.",image:"./images/P1.jpg?raw=true",year:"2018",type:"Data Viz",link:"https://tkartik.com/Lymap/"},P2:{name:"LifeCal",desc:"Chrome new-tab extension which brings your life into perspective by visualizing total weeks in your life, acting as a motivational tool.",image:"./images/P2.jpg?raw=true",year:"2019",type:"Web Development",link:"https://chrome.google.com/webstore/detail/lifecal/knodkbflepidgjibcaidbfmeamobelie"},P3:{name:"Mirror News App",desc:"Desiging an elegant and precise concept news app. Entry for Inter IIT Cultural Meet 2019",image:"./images/P3.jpg?raw=true",year:"2019",type:"UI/UX",link:"https://www.behance.net/gallery/90073823/Mirror-News-App-UIUX"},P4:{name:"Terrat",desc:"An online interactive data visualization project on Terrorist attacks in India. Made using P5.js and mapbox API",image:"./images/P4.jpg?raw=true",year:"2017",type:"Data Viz",link:"https://tkartik.com/Terrat/"},P5:{name:"Tech Ambit Branding",desc:"Complete Branding, Print and Web Design of Tech Ambit, India's first tech-biz-research magazine. ",image:"./images/P5.jpg?raw=true",year:"2019",type:"Branding + UI/UX",link:"https://www.behance.net/gallery/88671777/IIT-Tech-Ambit-Product-Design"},P6:{name:"Minimal KGP",desc:"These are set of quirky minimal posters designed for populace of IIT KGP.",image:"./images/P6.jpg?raw=true",year:"2017",type:"Graphic Design",link:"https://www.behance.net/gallery/63499839/Minimal-KGP"},P7:{name:"Pixanaut",desc:"An Instagram page showcasing my curated Data Visualization posts ",image:"./images/P7.png?raw=true",year:"2020",type:"Data Viz",link:"https://www.instagram.com/pixa.naut"},P8:{name:"Mandaudio",desc:"Google Chrome-based audio responsive mandala generator which visualizes sound from your laptop's microphone.",image:"./images/P8.jpg?raw=true",year:"2019",type:"Data Viz",link:"https://www.openprocessing.org/sketch/787880"}},T=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).loadSample=function(){a.setState({projects:P})},a.handleOnClick=function(e){a.myDivToFocus.current&&a.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.state={projects:{}},a.myDivToFocus=i.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadSample()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"overall"},i.a.createElement("div",{className:"call"},i.a.createElement(f,null),i.a.createElement("div",{style:{position:" relative",bottom:"20vh",color:"#f8f8f8",opacity:"0.8",width:"fit-content"}},i.a.createElement(g.a,{name:"chevron-circle-down",size:"3x",onClick:this.handleOnClick,style:{cursor:"pointer"}}))),i.a.createElement("div",{className:"call1",ref:this.myDivToFocus},i.a.createElement(O,null)),i.a.createElement("div",{className:"contain"},i.a.createElement("div",{className:"call2"},i.a.createElement("div",{className:"project"},i.a.createElement("h2",{className:"heading",style:{zIndex:"2"}},"Curated Projects"),i.a.createElement("img",{src:N.a,alt:"rec",className:"rec1"})),Object.keys(this.state.projects).map((function(t){return i.a.createElement(I,{key:t,details:e.state.projects[t]})})))),i.a.createElement("div",{className:"contact"},i.a.createElement(C,null)),i.a.createElement("div",{className:"downlast"},"Baked with \xa0",i.a.createElement(g.a,{name:"heart",size:"1x",style:{color:"#7d7968"}}),"\xa0 by Kartik"))}}]),t}(i.a.Component));Object(r.render)(i.a.createElement(T,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a7678e55.chunk.js.map