(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(44),a=n(5),c="SEND-MESSAGE",s={dialogs:[{id:1,name:"Maximilien Ferrain"},{id:2,name:"Ivan Korneev"},{id:3,name:"Yves"},{id:4,name:"Vadim"},{id:5,name:"Antony"}],messages:[{id:1,message:"Hi, how r u?"},{id:2,message:"Lets go walk"},{id:3,message:"The HTML Content Division element"},{id:4,message:"XML tag has empty body"},{id:5,message:"Bye!"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.newMessageBody}])});default:return e}}},131:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(129),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7117e30c-0945-48b6-b6dc-792713850a0a"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},164:function(e,t,n){},189:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",navCard:"Navbar_navCard__1ek-k",navCaption:"Navbar_navCaption__wSYLa",scrollBar:"Navbar_scrollBar__XLHmL",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",iconRound:"Navbar_iconRound__2Wi9E",profileIcon:"Navbar_profileIcon__OocSL",newsfeedIcon:"Navbar_newsfeedIcon__3-WIV",messengerIcon:"Navbar_messengerIcon__3mMCo",musicIcon:"Navbar_musicIcon__3wVab",settingsIcon:"Navbar_settingsIcon__FoAbT"}},289:function(e,t,n){"use strict";n.r(t);var r=n(65),a=n.n(r),c=n(0),s=n.n(c),i=(n(164),n(34)),o=n(35),u=n(38),l=n(37),d=n(10),j=n(13),b=n(20),f=n.n(b),p=n(1),h=f.a.nav,O=f.a.item,g=f.a.activeLink,m=f.a.scrollBar,v=(f.a.newsfeedIcon,f.a.iconRound,f.a.profileIcon,f.a.navCard),x=f.a.navCaption;f.a.messengerIcon,f.a.musicIcon,f.a.settingsIcon;var C=function(){return Object(p.jsx)("nav",{className:"".concat(h," ").concat(m),children:Object(p.jsxs)("div",{className:v,children:[Object(p.jsx)("div",{className:x,children:Object(p.jsx)("span",{children:"New Feeds"})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/profile",activeClassName:g,children:Object(p.jsx)("span",{children:"My profile"})})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/dialogs",activeClassName:g,children:Object(p.jsx)("span",{children:"Messenger"})})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/users",activeClassName:g,children:Object(p.jsx)("span",{children:"Users"})})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/feed",activeClassName:g,children:Object(p.jsx)("span",{children:"News"})})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/music",activeClassName:g,children:Object(p.jsx)("span",{children:"Music"})})}),Object(p.jsx)("div",{className:O,children:Object(p.jsx)(j.b,{to:"/settings",activeClassName:g,children:Object(p.jsx)("span",{children:"Settings"})})})]})})},w=n(17),A=n(11),I=n.n(A),S=n(21),P=n(44),y=n(5),N=n(15),L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},E="FOLLOW",U="UNFOLLOW",k="SET-USERS",z="SET-CURRENT-PAGE",W="SET-TOTAL-USERS-COUNT",F="TOGGLE-IS-FETCHING",D="TOGGLE-IS-FOLLOWING-PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},B=function(e){return{type:E,userId:e}},M=function(e){return{type:U,userId:e}},H=function(e){return{type:z,currentPage:e}},J=function(e){return{type:F,isFetching:e}},V=function(e,t){return{type:D,isFetching:e,userId:t}},G=function(){var e=Object(S.a)(I.a.mark((function e(t,n,r,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)(Object(y.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!0})});case U:return Object(y.a)(Object(y.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!1})});case k:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case z:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case W:return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case F:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case D:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},q=n(56),X=n(68),Y=n(127),Z=n(70),K=n.n(Z),_=n(130),R=n.n(_),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(c.useState)(1),b=Object(Y.a)(j,2),f=b[0],h=b[1],O=(f-1)*i+1,g=f*i;return Object(p.jsxs)("div",{className:K.a.paginator,children:[f>1&&Object(p.jsx)("button",{onClick:function(){h(f-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:R()(Object(X.a)({},K.a.selectedPage,r===e),K.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),d>f&&Object(p.jsx)("button",{onClick:function(){h(f+1)},children:"NEXT"})]})},ee=n(131),te=n.n(ee),ne=n.p+"static/media/userIcon.7bc1f545.png",re=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:ne,className:te.a.userPhoto})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"u.location.country"}),Object(p.jsx)("div",{children:"u.location.city"})]})]})]})},ae=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,s=Object(q.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(p.jsxs)("div",{children:[Object(p.jsx)($,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(re,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))})]})},ce=n(40),se=n(9),ie=n(132),oe=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},be=function(e){return e.usersPage.followingInProgress},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(ce.a,{}):null,Object(p.jsx)(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),pe=Object(se.d)(Object(w.b)((function(e){return{users:oe(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:de(e),isFetching:je(e),followingInProgress:be(e)}}),{follow:function(e){return function(){var t=Object(S.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,N.c.follow.bind(N.c),B);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,N.c.unfollow.bind(N.c),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:V,requestUsers:function(e,t){return function(){var n=Object(S.a)(I.a.mark((function n(r){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(H(e)),n.next=4,N.c.getUsers(e,t);case 4:a=n.sent,r(J(!1)),r((s=a.items,{type:k,users:s})),r((c=a.totalCount,{type:W,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(fe),he=(n(189),n(71)),Oe=n.n(he),ge=n.p+"static/media/logo.f22457d2.svg",me=Oe.a.header,ve=Oe.a.headerIcon,xe=Oe.a.loginBlock;var Ce=function(e){return Object(p.jsxs)("header",{className:me,children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:ge})}),Object(p.jsxs)("div",{className:xe,children:[Object(p.jsx)("div",{className:ve,children:Object(p.jsx)("img",{src:"data:image/png;base64,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"})}),e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(j.b,{to:"/login",children:"Login"})]})]})},we=n(45),Ae="auth/SET-USER-DATA",Ie={userId:null,email:null,login:null,isAuth:!1},Se=function(e,t,n,r){return{type:Ae,payload:{userId:e,email:t,login:n,isAuth:r}}},Pe=function(){return function(){var e=Object(S.a)(I.a.mark((function e(t){var n,r,a,c,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(Se(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},Ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(Ce,Object(y.a)({},this.props))}}]),n}(s.a.Component),Le=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){N.a.logout().then((function(t){0===t.data.resultCode&&e(Se(null,null,null,!1))}))}}})(Ne),Ee=n(126),Ue=n(33),ke=n(87),ze=n(53),We=n.n(ze),Fe=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(Ue.c)("Email","email",[ke.b],Ue.a),Object(Ue.c)("Password","password",[ke.b],Ue.a,{type:"password"}),Object(Ue.c)(null,"rememberMe",[],Ue.a,{type:"checkbox"},"remember me"),n&&Object(p.jsx)("div",{className:We.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Log in"})})]})})),De=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(S.a)(I.a.mark((function r(a){var c,s;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,N.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(Pe()):(s=c.data.messages.length>0?c.data.messages[0]:"Some Error",a(Object(we.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(d.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Fe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Te="INITIALIZED-SUCCESS",Be={initialized:!1},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},He=n(134),Je=n(128),Ve=n(95),Ge=n(125),Qe={},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe;return e},Xe=Object(se.c)({profilePage:Ve.b,dialogsPage:Ge.a,sidebar:qe,usersPage:Q,auth:ye,form:Je.a,app:Me}),Ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,Ze=Object(se.e)(Xe,Ye(Object(se.a)(He.a))),Ke=function(e){return function(t){return Object(p.jsx)(s.a.Suspense,{fallback:Object(p.jsx)(ce.a,{}),children:Object(p.jsx)(e,Object(y.a)({},t))})}},_e=s.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Re=s.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),$e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Le,{}),Object(p.jsx)(C,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(d.b,{path:"/dialogs",render:Ke(_e)}),Object(p.jsx)(d.b,{path:"/profile/:userId?",render:Ke(Re)}),Object(p.jsx)(d.b,{path:"/users",render:function(){return Object(p.jsx)(pe,{})}}),Object(p.jsx)(d.b,{path:"/login",render:function(){return Object(p.jsx)(De,{})}}),Object(p.jsx)(d.b,{path:"/feed"}),Object(p.jsx)(d.b,{path:"/music"}),Object(p.jsx)(d.b,{path:"/settings"})]})]}):Object(p.jsx)(ce.a,{})}}]),n}(s.a.Component),et=Object(se.d)(d.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Pe());Promise.all([t]).then((function(){e({type:Te})}))}}}))($e),tt=$e=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(w.a,{store:Ze,children:Object(p.jsx)(et,{})})})},nt=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(tt,{})}),document.getElementById("root")),nt()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(5),a=n(56),c=n(53),s=n.n(c),i=n(90),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},c))," ",s]})}},40:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.4d70e71f.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},71:function(e,t,n){e.exports={header:"Header_header__1VCKf",headerIcon:"Header_headerIcon__3RWeY",loginBlock:"Header_loginBlock__6mma5"}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required!"},a=function(e){return function(t){if(t&&t.length>e)return"Max length should be less than ".concat(e," symbols")}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),c=n(21),s=n(44),i=n(5),o=n(15),u="ADD-POST",l="SET-USER-PROFILE",d="SET-STATUS",j="DELETE-POST",b={posts:[{id:1,message:"Hi. Wassup?",likesCount:123},{id:2,message:"Its my first post",likesCount:11},{id:3,message:"Lorem ipsum dolor sit amet, consectetur adipisicing",likesCount:236},{id:4,message:"Lorem ipsum dolor sit amet.",likesCount:18}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.0e747f50.chunk.js.map