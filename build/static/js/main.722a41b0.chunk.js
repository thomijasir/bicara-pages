(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(263)},261:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(265),i=a(267),s=a(266),m=a(268),d=a(20),u=a(3),p=a(4),h=a(6),g=a(5),f=a(7),v=a(103),E=a.n(v),b=function(e){var t={url:e.url.toString(),method:e.method.toLocaleLowerCase(),data:e.data,headers:e.headers,responseType:""};return t.headers=Object(d.a)({},{"X-Requested-With":"XMLHttpRequest"},e.headers),"get"===e.method?(delete t.data,delete t.headers,delete t.responseType):delete t.responseType,E.a.request(t)},w=["https://api.bicara.co.id/xs12s/wp-json/wp/v2","https://www.saintif.com/wp-json/wp/v2","https://www.hipwee.com/wp-json/wp/v2","https://api.bicara.co.id/eb12s/wp-json/wp/v2"],N={BASE_URL:w,getPostList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a={url:"".concat(w[e],"/posts?_embed=true&per_page=").concat(t),method:"get"};return b(a)},getCategory:function(e,t){return b({url:w[e]+"/categories/"+t,method:"get"})},getCategoryList:function(e){return b({url:w[e]+"/categories",method:"get"})},getPostsByFormat:function(e,t){var a="".concat(w[e],"/posts?_embed=true");return b({url:a,method:"get"})},getPostQuery:function(e,t){var a="".concat(w[e],"/posts?_embed=true").concat(t);return b({url:a,method:"get"})}},y=a(104),O=a(105),k=a.n(O),x=a(106),j=a.n(x),L=function(e){return[{word:"SEFSED",replace:"Bicara"},{word:"Winpoin",replace:"Bicara"}].forEach(function(t){e=e.replace(new RegExp(t.word,"ig"),t.replace)}),e},C=function(e,t){var a=e.match(/\b[-?(\w+)?]+\b/gi)||[],n=[],r="";if(a.length>=t){for(var l=0;l<t;l++)n.push(a[l]);r="..."}else n=a;return n.join(" ")+r},_=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},M=function(e){return Object(y.format)(new Date(e),"dddd, DD MMMM YY",{locale:k.a})},P={tagRemover:function(e){return e.replace(/<[^>]+>/g,"")},decodeEntity:function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},encodeEntity:function(e){for(var t=[],a=e.length-1;a>=0;a--)t.unshift(["&#",e[a].charCodeAt(a),";"].join(""));return t.join("")},wordReplacer:L,wordCount:function(e){return(e.match(/\b[-?(\w+)?]+\b/gi)||[]).length},wordLimit:C,stripHtml:_,getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},parsePostTitle:function(e){var t=_(e),a=L(t);return C(a,6)},parseExcerpt:function(e){var t=_(e),a=L(t);return C(a,10)},formatDateID:M,timeAgo:function(e){var t=+new Date-+new Date(e);return t<6e4?Math.round(t/1e3)+" detik lalu":t<36e5?Math.round(t/6e4)+" menit lalu":t<864e5?Math.round(t/36e5)+" jam lalu":t<3?Math.round(t/864e5)+" hari lalu":M(e)},Toast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"south",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;j()({message:e,position:t,timeout:a})}},T=a(12),S=a.n(T),B=function(e){var t=e.config,a=e.closeModal,n=document.querySelector("html");return null!=n&&(t.isOpen?n.classList.add("no-scroll"):n.classList.remove("no-scroll")),r.a.createElement("div",{className:S()("modals",{show:t.isOpen})},r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"head-left"},r.a.createElement("h3",null,t.title)),r.a.createElement("div",{className:"head-right"},r.a.createElement("button",{className:"btn primary rouded bordered shadow ripple"},r.a.createElement("i",{className:"fas fa-plus mg-r-5"})," Follow"))),r.a.createElement("div",{className:"body"},r.a.createElement("ul",{className:"list-item"},r.a.createElement("li",{className:"ripple"},r.a.createElement("i",{className:"fa fa-link mg-r-10"})," Lihat Cerita Terkait"),r.a.createElement("li",{className:"ripple"},r.a.createElement("i",{className:"fa fa-user mg-r-10"})," Lihat User Profile"),r.a.createElement("li",{className:"ripple"},r.a.createElement("i",{className:"fa fa-ellipsis-h mg-r-10"})," Lihat Lebih Detail"))),r.a.createElement("div",{className:"footer ripple",onClick:function(){return a(null,"close")}},r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-times-circle mg-r-5"})," Close")))))},D=a(264),A=function(e){var t=e.isSmall,a=e.data,n=a.title,l=a.description,c=a.image,o=a.author,i=a.dateTime,s=a.authorImage,m=a.slug,d=a.authorSlug,u="".concat(d,"/").concat(m);return r.a.createElement("div",{className:S()("card",{small:t})},r.a.createElement("div",{className:"card-image"},r.a.createElement(D.a,{to:u,className:"default-link"},r.a.createElement("img",{src:c,alt:n}))),r.a.createElement("div",{className:"card-text ripple"},r.a.createElement(D.a,{to:u,className:"default-link"},r.a.createElement("h2",{className:"title-text"},n)),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"left-foot"},r.a.createElement("div",{className:"author-time"},r.a.createElement("img",{src:s,alt:o}),r.a.createElement("div",{className:"text"},r.a.createElement(D.a,{to:d},o)," - ",i))),r.a.createElement("div",{className:"right-foot ripple"},r.a.createElement("i",{className:"fas fa-share-alt"}))))};A.defaultProps={data:{title:"Default Title Will Define Here..",description:"Default description will appear if you not enter props description..",image:"/assets/images/demo/1.png",author:"Admin",authorImage:"/favicon.ico",dateTime:"10 hours ago.",slug:"/",authorSlug:"/"}};var I=A,R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenDropdown:!1,isOpenSeachBox:!1},a.handleDropdownIcon=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?setTimeout(function(){a.setState({isOpenDropdown:!a.state.isOpenDropdown})},500):a.setState({isOpenDropdown:!a.state.isOpenDropdown})},a.handleSeacrhBox=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?setTimeout(function(){a.setState({isOpenSeachBox:!a.state.isOpenSeachBox})},500):a.setState({isOpenSeachBox:!a.state.isOpenSeachBox})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isOpenDropdown,l=t.isOpenSeachBox;return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement(m.a,{render:function(e){var t=e.history;return r.a.createElement("div",{className:"logo",onClick:function(){t.push("/")}},r.a.createElement("h1",null,"Berita Informasi Dalam Cerita"))}}),r.a.createElement("div",{className:"wrapper-feature"},r.a.createElement("div",{className:"search",onClick:function(){return e.handleSeacrhBox()}},r.a.createElement("i",{className:"fas fa-search ripple"})),r.a.createElement("div",{className:"dropdown-icon",onClick:function(){return e.handleDropdownIcon()}},r.a.createElement("i",{className:"fas fa-bars ripple"}))),r.a.createElement("div",{onClick:function(){return e.handleDropdownIcon(!0)},className:S()("dropdown-items",{show:a})},r.a.createElement(D.a,{to:"/",className:"item ripple"},"Login"),r.a.createElement(D.a,{to:"/",className:"item ripple"},"Mulai Baru")),r.a.createElement("div",{onClick:function(){return e.handleDropdownIcon()},className:S()("dropdown-close",{show:a})})),r.a.createElement("div",{className:S()("search-box",{show:l})},r.a.createElement("input",{type:"text",placeholder:"Apa yang kamu cari? ketik disini.."})))}}]),t}(n.PureComponent),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).state={links:[{name:"Home",url:"/"},{name:"Astronomi",url:"/topic/astronomi"},{name:"Trending",url:"/"},{name:"Populer",url:"/"},{name:"Budaya",url:"/topic/budaya"},{name:"Indonesia",url:"/topic/cerita-indonesia"},{name:"Dunia",url:"/topic/cerita-dunia"},{name:"Teknologi",url:"/topic/teknologi"},{name:"Sains",url:"/topic/sains"},{name:"Startup",url:"/"},{name:"Desain",url:"/topic/desain"},{name:"Kesehatan",url:"/topic/kesehatan"},{name:"Lifestyle",url:"/topic/lifestyle"},{name:"Koleksi",url:"/"},{name:"Musik",url:"/topic/musik"}]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e={navBarTravelling:!1,navBarTravelDirection:"",navBarTravelDistance:150};document.documentElement.classList.remove("no-js"),document.documentElement.classList.add("js");var t=document.getElementById("pnAdvancerLeft"),a=document.getElementById("pnAdvancerRight"),n=document.getElementById("pnProductNav"),r=document.getElementById("pnProductNavContents");n.setAttribute("data-overflowing",c(r,n));var l=!1;function c(e,t){var a=t.getBoundingClientRect(),n=Math.floor(a.right),r=Math.floor(a.left),l=e.getBoundingClientRect(),c=Math.floor(l.right),o=Math.floor(l.left);return r>o&&n<c?"both":o<r?"left":c>n?"right":"none"}n.addEventListener("scroll",function(){window.scrollY,l||window.requestAnimationFrame(function(){n.setAttribute("data-overflowing",c(r,n)),l=!1}),l=!0}),t.addEventListener("click",function(){if(!0!==e.navBarTravelling){if("left"===c(r,n)||"both"===c(r,n)){var t=n.scrollLeft;t<2*e.navBarTravelDistance?r.style.transform="translateX("+t+"px)":r.style.transform="translateX("+e.navBarTravelDistance+"px)",r.classList.remove("pn-ProductNav_Contents-no-transition"),e.navBarTravelDirection="left",e.navBarTravelling=!0}n.setAttribute("data-overflowing",c(r,n))}}),a.addEventListener("click",function(){if(!0!==e.navBarTravelling){if("right"===c(r,n)||"both"===c(r,n)){var t=r.getBoundingClientRect().right,a=n.getBoundingClientRect().right,l=Math.floor(t-a);l<2*e.navBarTravelDistance?r.style.transform="translateX(-"+l+"px)":r.style.transform="translateX(-"+e.navBarTravelDistance+"px)",r.classList.remove("pn-ProductNav_Contents-no-transition"),e.navBarTravelDirection="right",e.navBarTravelling=!0}n.setAttribute("data-overflowing",c(r,n))}}),r.addEventListener("transitionend",function(){var t=window.getComputedStyle(r,null),a=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("transform"),l=Math.abs(parseInt(a.split(",")[4])||0);r.style.transform="none",r.classList.add("pn-ProductNav_Contents-no-transition"),"left"===e.navBarTravelDirection?n.scrollLeft=n.scrollLeft-l:n.scrollLeft=n.scrollLeft+l,e.navBarTravelling=!1},!1),r.addEventListener("click",function(e){[].slice.call(document.querySelectorAll(".pn-ProductNav_Link")).forEach(function(e){e.classList.remove("selected")}),e.target.classList.add("selected")})}},{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navigation-wrapper"},r.a.createElement("div",{id:"pnProductNav",className:"pn-ProductNav"},r.a.createElement("div",{id:"pnProductNavContents",className:"pn-ProductNav_Contents"},e.map(function(e,t){return r.a.createElement(D.a,{to:e.url,key:t,className:"pn-ProductNav_Link ripple"},e.name)}))),r.a.createElement("button",{id:"pnAdvancerLeft",className:"pn-Advancer pn-Advancer_Left",type:"button"},r.a.createElement("svg",{className:"pn-Advancer_Icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 551 1024"},r.a.createElement("path",{d:"M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z"}))),r.a.createElement("button",{id:"pnAdvancerRight",className:"pn-Advancer pn-Advancer_Right",type:"button"},r.a.createElement("svg",{className:"pn-Advancer_Icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 551 1024"},r.a.createElement("path",{d:"M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z"}))))}}]),t}(n.PureComponent),H=a(21),U=a.n(H),q=a(37),W=a(19),K=function(e){return n.createElement(D.a,{to:e.link},n.createElement("div",{className:"badge auto ripple"},n.createElement("i",{className:"fas fa-award"}),n.createElement("label",null,e.name)))};K.defaultProps={name:"Uncategorize",icon:"fa-award",link:"/"};var X=K,V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e)))._isMounted=!1,a.setLoading=function(e){a.setState({isLoading:e})},a.init=Object(q.a)(U.a.mark(function e(){var t,n,r,l,c;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setLoading(!0),t=a.props.idCategories,n=a.props.endpoint,r=[],l=0;case 5:if(!(l<2)){e.next=17;break}if(!t[l]){e.next=13;break}return e.next=9,N.getCategory(n,t[l]);case 9:c=e.sent,r.push(c.data),e.next=14;break;case 13:return e.abrupt("break",17);case 14:l++,e.next=5;break;case 17:a._isMounted&&a.setState({isLoading:!1,badges:r});case 18:case"end":return e.stop()}},e)})),a.state={isLoading:!1,badges:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.init()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.badges;return e.isLoading?"...":r.a.createElement("div",{className:"badges"},t.map(function(e,t){var a={key:"".concat(e.id,"-").concat(t),name:e.name,link:"/topic/".concat(e.slug)};return r.a.createElement(X,a)}))}}]),t}(n.PureComponent);V.defaultProps={endpoint:0};var J=V,Q=(n.PureComponent,function(e){return r.a.createElement(W.a,Object.assign({height:250,style:{width:"100%",padding:"15px"},preserveAspectRatio:"none",speed:1,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),r.a.createElement("rect",{x:"0",y:"14.61",rx:"5",ry:"5",width:"100%",height:"144"}),r.a.createElement("rect",{x:"15",y:"180",rx:"3",ry:"3",width:"300",height:"6"}),r.a.createElement("rect",{x:"15",y:"200",rx:"3",ry:"3",width:"280",height:"6"}),r.a.createElement("rect",{x:"15",y:"220",rx:"3",ry:"3",width:"140",height:"6"}),r.a.createElement("rect",{x:"15",y:"240",rx:"3",ry:"3",width:"180",height:"6"}))}),Y=function(e){return r.a.createElement(W.a,Object.assign({height:250,style:{width:"100%",padding:"15px"},preserveAspectRatio:"none",speed:1,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),r.a.createElement("rect",{x:"250",y:"15",rx:"5",ry:"5",width:"150",height:"200"}),r.a.createElement("rect",{x:"10",y:"100",rx:"3",ry:"3",width:"150",height:"6"}),r.a.createElement("rect",{x:"10",y:"120",rx:"3",ry:"3",width:"210",height:"6"}),r.a.createElement("rect",{x:"10",y:"140",rx:"3",ry:"3",width:"140",height:"6"}),r.a.createElement("rect",{x:"10",y:"160",rx:"3",ry:"3",width:"180",height:"6"}),r.a.createElement("rect",{x:"10",y:"180",rx:"3",ry:"3",width:"150",height:"6"}),r.a.createElement("rect",{x:"10",y:"200",rx:"3",ry:"3",width:"140",height:"6"}))},z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleStandardCard=function(e){N.getPostQuery(e.endpoint,"&per_page=5").then(function(e){a.postCompose(e)}).catch(function(e){a.setFailure(e)})},a.handleVideoCard=function(e){N.getPostsByFormat(e.endpoint,e.cardType).then(function(e){a.postCompose(e)})},a.handleAudioCard=function(e){N.getPostsByFormat(e.endpoint,e.cardType).then(function(e){a.postCompose(e)})},a.setLoading=function(){a.setState({isLoading:!0})},a.setFailure=function(e){console.log("You Get Errror On: ",e),a.setState({isFailure:!0})},a.postCompose=function(e){var t=e.data,n=t.shift();a.setState({posts:e.data,isLoading:!1,postCompose:{postList:t,firsPost:n}})},a.state={posts:[],isLoading:!0,isFailure:!1,postCompose:{}},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data;switch(e.cardType){case"standard":this.handleStandardCard(e);break;case"video":this.handleVideoCard(e);break;case"audio":this.handleAudioCard(e);break;default:this.handleStandardCard(e)}}},{key:"render",value:function(){var e=this.props,t=e.handleModal,a=e.data,l=this.state,c=l.isLoading,o=l.isFailure,i=l.postCompose,s=i.firsPost,m=i.postList;return c&&o?"Failure Load content!":c||o?r.a.createElement(G,null):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row row-no-padding"},r.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4"},r.a.createElement("div",{className:"content-box gradient-1"},r.a.createElement(I,{isSmall:!1,data:{title:P.parsePostTitle(s.title.rendered),description:P.parseExcerpt(s.excerpt.rendered),image:s._embedded["wp:featuredmedia"][0].source_url,dateTime:P.timeAgo(s.date),author:s._embedded.author[0].name,authorImage:s._embedded.author[0].avatar_urls[48],authorSlug:s._embedded.author[0].slug,slug:s.slug}}))," "),r.a.createElement("div",{className:"col-sm-12 col-md-8 col-lg-8"},r.a.createElement("div",{className:"content-box gradient-2"},r.a.createElement("div",{className:"box-nav"},r.a.createElement("div",{className:"box-label"},r.a.createElement(J,{idCategories:s.categories,endpoint:a.endpoint})),r.a.createElement("div",{className:"button-menu",onClick:function(){return t("2","open")}},r.a.createElement("div",{className:"ripple"},r.a.createElement("i",{className:"fas fa-ellipsis-v"})))),r.a.createElement("div",{className:"row row-no-padding cards match-heigh"},m.map(function(e,t){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 cards-sliding",key:t},r.a.createElement(I,{isSmall:!0,data:{title:P.parsePostTitle(e.title.rendered),description:P.parseExcerpt(e.excerpt.rendered),image:e._embedded["wp:featuredmedia"][0].source_url,author:e._embedded.author[0].name,dateTime:P.timeAgo(e.date),authorImage:e._embedded.author[0].avatar_urls[48],authorSlug:s._embedded.author[0].slug,slug:e.slug}}))}))))))}}]),t}(n.PureComponent),G=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row row-no-padding"},r.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4"},r.a.createElement("div",{className:"content-box gradient-1"},r.a.createElement(Q,null))),r.a.createElement("div",{className:"col-sm-12 col-md-8 col-lg-8"},r.a.createElement("div",{className:"content-box gradient-2"},r.a.createElement("div",{className:"row row-no-padding cards"},[1,2,3,4].map(function(e,t){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6 cards-sliding",key:t},r.a.createElement(Q,null))}))))))}}]),t}(n.PureComponent),$=z,Z=a(38),ee=a(34),te=P,ae=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e)))._isMounted=!1,a.setLoading=function(){a.setState({isLoading:!0})},a.setHasMore=function(){a.setState({hasMore:!0})},a.setError=function(){te.Toast("Opps, Lost Connection!"),a.setState({error:!0,isLoading:!1})},a.loadPost=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.setLoading();var t=a.state.pagination,n=t.page,r=t.per_page,l=Object(d.a)({},a.state.pagination);if(l.page=n+1,e){a.setHasMore();var c="&page=".concat(n,"&per_page=").concat(r),o=Object(Z.a)(a.state.feedList);N.getPostQuery(2,c).then(function(e){var t=[].concat(Object(Z.a)(o),Object(Z.a)(e.data));a._isMounted&&a.setState({isLoading:!1,hasMore:!1,error:!1,pagination:l,feedList:t})}).catch(function(e){a.setError()})}else N.getPostList(2,5).then(function(e){a._isMounted&&a.setState({isLoading:!1,error:!1,pagination:l,feedList:e.data})}).catch(function(e){a.setError()})},a.state={error:!1,hasMore:!1,isLoading:!0,feedList:[],pagination:{page:1,per_page:10}},window.onscroll=function(){var e=Object(ee.a)(a),t=e.loadPost;if(!e.state.isLoading){var n=document.body,r=document.documentElement;Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)===window.innerHeight+document.documentElement.scrollTop&&(console.log("LOAD MORE"),t(!0))}},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.loadPost()}},{key:"componentWillUnmount",value:function(){window.onscroll=null,this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.feedList,a=e.isLoading,n=e.hasMore,l=e.error;return!a||n||l?r.a.createElement("div",{className:"feeds"},t.map(function(e,t){return r.a.createElement("div",{className:"feed-item",key:"".concat(e.id,"-").concat(t)},r.a.createElement("div",{className:"feed-content\t"},r.a.createElement(re,{categories:e.categories}),r.a.createElement(D.a,{to:"".concat(e._embedded.author[0].slug,"/").concat(e.slug),className:"default-link ripple"},r.a.createElement("h2",null,te.parsePostTitle(e.title.rendered))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:te.parseExcerpt(e.excerpt.rendered)}}),r.a.createElement("div",{className:"feed-bottom"},r.a.createElement("div",{className:"column"},r.a.createElement("a",null,te.wordReplacer(e._embedded.author[0].name)),r.a.createElement("span",null,te.timeAgo(e.date))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ripple"},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))))),r.a.createElement("div",{className:"feed-image"},r.a.createElement("div",{className:"thumbnail-cropped",style:{backgroundImage:"url(".concat(e._embedded["wp:featuredmedia"][0].source_url,")")}},r.a.createElement("img",{src:e._embedded["wp:featuredmedia"][0].source_url,alt:te.parsePostTitle(e.title.rendered)}))))}),n?r.a.createElement(ne,null):""):r.a.createElement(ne,null)}}]),t}(n.PureComponent),ne=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"feeds"},[1,2,3].map(function(e,t){return r.a.createElement("div",{className:"feed-item",key:t},r.a.createElement(Y,null))}))}}]),t}(n.PureComponent),re=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).state={catList:[],isLoading:!0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.categories,a=[];t.length<2?a.push(N.getCategory(2,t[0])):(a.push(N.getCategory(2,t[0])),a.push(N.getCategory(2,t[1]))),Promise.all(a).then(function(t){var a=t.map(function(e){return e.data});e.setState({catList:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.catList;return e.isLoading?"...":r.a.createElement("span",{className:"label"},t.map(function(e,t){return r.a.createElement(D.a,{className:"label-item default-link",to:"/topic/".concat(e.slug),key:"".concat(e.id,"-").concat(t)},e.name)}))}}]),t}(n.PureComponent),le=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],modalConfig:{title:"Susanto",links:{follow:"follow_link",category:"category_link",profile:"profile_user_link",detail:"detail_post_link"},isOpen:!1}},a._isMounted=!1,a.handleModal=function(e,t){var n=Object(d.a)({},a.state.modalConfig);"open"===t?(n.title="Thomi Jasir",n.isOpen=!n.isOpen):n.isOpen=!n.isOpen,a.setState({modalConfig:n})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,N.getPostList(3,6).then(function(t){e._isMounted&&e.setState({posts:t.data})})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,a=t.modalConfig,l=t.posts;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(F,null),r.a.createElement("br",null),r.a.createElement("section",null),r.a.createElement("section",null,r.a.createElement($,{handleModal:this.handleModal,data:{cardType:"video",endpoint:0}})),r.a.createElement("section",null,r.a.createElement($,{handleModal:this.handleModal,data:{cardType:"standard",endpoint:1}})),r.a.createElement("section",null,r.a.createElement("div",{className:"row row-no-padding match-heigh"},l.map(function(t,a){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a},r.a.createElement("div",{className:"content-box gradient-"+P.getRandomInt(0,10)},r.a.createElement("div",{className:"box-nav"},r.a.createElement("div",{className:"box-label"},r.a.createElement(J,{idCategories:t.categories,endpoint:3})),r.a.createElement("div",{className:"button-menu",onClick:function(){return e.handleModal(t.id,"open")}},r.a.createElement("div",{className:"ripple"},r.a.createElement("i",{className:"fas fa-ellipsis-v"})))),r.a.createElement(I,{isSmall:!1,data:{title:P.parsePostTitle(t.title.rendered),description:P.parseExcerpt(t.excerpt.rendered),image:t._embedded["wp:featuredmedia"][0].source_url,dateTime:P.timeAgo(t.date),author:t._embedded.author[0].name,authorImage:t._embedded.author[0].avatar_urls[48],authorSlug:t._embedded.author[0].slug,slug:t.slug}}))," ")}))),r.a.createElement("section",null,r.a.createElement("div",{className:"row match-heigh feed-section"},r.a.createElement("div",{className:"col-sm-12 col-lg-4 col-lg-push-8"},r.a.createElement("div",{className:"recommendation position-sticky"},r.a.createElement("div",{className:"head"},r.a.createElement("h3",null,"Rekomendasi Bicara")),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-number"},"01"),r.a.createElement("div",{className:"item-content"},r.a.createElement("h4",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=_yuDDapUHKk",className:"default-link"},"Apa itu Nebula? Darimana Asalnya Bagaimana Terbe..")),r.a.createElement("a",null,"Bicara Indonesia"),r.a.createElement("span",null,"Feb 25, 2019"))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-number"},"02"),r.a.createElement("div",{className:"item-content"},r.a.createElement("h4",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=4IqGKEqkaD4",className:"default-link"},"Mengapa Planet Di Tata Surya Mengelilingi Matahari?")),r.a.createElement("a",null,"Bicara Indonesia"),r.a.createElement("span",null,"Feb 17, 2019"))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-number"},"03"),r.a.createElement("div",{className:"item-content"},r.a.createElement("h4",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=2-6VkxyGdPE",className:"default-link"},"Jika Bumi Keluar Orbit Kemana Bumi Akan Pergi?")),r.a.createElement("a",null,"Bicara Indonesia"),r.a.createElement("span",null,"Feb 16, 2019")))))),r.a.createElement("div",{className:"col-sm-12 col-lg-8 col-lg-pull-4"},r.a.createElement(ae,null))))),r.a.createElement(B,{config:a,closeModal:this.handleModal}))}}]),t}(n.Component),ce=a(52),oe=a.n(ce),ie=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e)))._isMounted=!1,a.setLoading=function(){a.setState({isLoading:!0})},a.getRouter=function(){return a.props.match.params},a.state={postData:[],isLoading:!0,disqus:{shortname:"",config:{url:"",identifier:"",title:""}}},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(q.a)(U.a.mark(function e(){var t,a,n,r,l,c,o,i,s,m,d;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._isMounted=!0,t=this.props.match.params,a=N.BASE_URL,r="&slug=".concat(t.slug),n=0;case 5:if(!(n<a.length)){e.next=17;break}return e.next=8,N.getPostQuery(n,r);case 8:if(!((l=e.sent).data.length>0)){e.next=14;break}return c=l.data[0],o=c.id,i=c.author,s=c.title,m=c.slug,d={shortname:"bicara",config:{url:window.location.href,identifier:"".concat(o,"-").concat(i,"-").concat(m),title:s.rendered}},this._isMounted&&this.setState({postData:l.data,isLoading:!1,disqus:d}),e.abrupt("break",17);case 14:n++,e.next=5;break;case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.postData,a=e.disqus;if(e.isLoading)return r.a.createElement(se,null);var n=t[0],l=n.title,c=(n.slug,n._embedded),o=n.content,i=n.date;return r.a.createElement("div",{className:"container post"},r.a.createElement("div",{className:"head-post"},r.a.createElement(R,null),r.a.createElement(F,null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-12 col-centered"},r.a.createElement("article",{className:"content-post"},r.a.createElement("div",{className:"content-head"},r.a.createElement("h1",{className:"title-post",title:"abcd-fgh"},l.rendered),r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},c.author[0].name)),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},l.rendered))),r.a.createElement("div",{className:"publish-date"},r.a.createElement("b",null,c.author[0].name)," - ",r.a.createElement("em",null,P.timeAgo(i)))),r.a.createElement("div",{className:"main-content",dangerouslySetInnerHTML:{__html:o.rendered}}),r.a.createElement("br",null),r.a.createElement(oe.a.CommentCount,a,"Komentar"),r.a.createElement(oe.a.DiscussionEmbed,a)))))}}]),t}(n.PureComponent),se=function(){return r.a.createElement("div",{className:"container post"},r.a.createElement("div",{className:"head-post"},r.a.createElement(R,null),r.a.createElement(F,null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-12 col-centered"},r.a.createElement("article",{className:"content-post"},r.a.createElement(Q,null)))))},me=ie,de=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).getRouter=function(){if(a.props.hasOwnProperty("macth"))return a.props.match.params},a.state={},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Author Pages"),r.a.createElement("p",null,"This Page Under Construction"))}}]),t}(n.PureComponent),ue=[{id:1,path:"/",component:le,exact:!0},{id:2,path:"/topics",component:function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).getRouter=function(){return a.props.match.params},a.state={},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Topics Pages"),r.a.createElement("p",null,"This Page Under Construction"))}}]),t}(n.PureComponent),exact:!0},{id:3,path:"/topic/:slug",component:function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).getRouter=function(){return a.props.match.params},a.state={},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Topic Pages"),r.a.createElement("p",null,"This Page Under Construction"))}}]),t}(n.PureComponent),exact:!0},{id:4,path:"/:username?",component:de,exact:!0},{id:5,path:"/:username?/:slug",component:me,exact:!0}];a(261),a(262);c.a.render(r.a.createElement(function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{from:"/topic",to:"/topics",exact:!0}),ue.map(function(e){return r.a.createElement(m.a,Object.assign({key:e.id},e))})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[107,1,2]]]);
//# sourceMappingURL=main.722a41b0.chunk.js.map