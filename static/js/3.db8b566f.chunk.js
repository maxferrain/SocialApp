(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[3],{291:function(t,s,e){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y"}},292:function(t,s,e){t.exports={item:"Post_item__ihtu9"}},293:function(t,s,e){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},295:function(t,s,e){"use strict";e.r(s);var c=e(5),i=e(34),n=e(35),o=e(38),a=e(37),r=e(0),u=e.n(r),j=e(291),p=e.n(j),d=e(40),l=e(1),b=(u.a.Component,e(127)),f=function(t){var s=Object(r.useState)(!1),e=Object(b.a)(s,2),c=e[0],i=e[1],n=Object(r.useState)(t.status),o=Object(b.a)(n,2),a=o[0],u=o[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(l.jsxs)("div",{children:[!c&&Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"Tap to set status"})}),c&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(a)},value:a})})]})},h=p.a.descriptionBlock;var O=function(t){var s=t.profile,e=t.status,c=t.updateStatus;return s?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:h,children:[Object(l.jsx)("img",{src:s.photos.large}),Object(l.jsx)("div",{children:Object(l.jsx)(f,{status:e,updateStatus:c})})]})}):Object(l.jsx)(d.a,{})},x=e(95),m=e(292),v=e.n(m).a.item;var g=function(t){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:v,children:[Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}),t.message,Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Like: ",t.likesCount]})})]})})},k=e(293),S=e.n(k),P=e(90),_=e(126),B=e(87),y=e(33),C=S.a.postsBlock,M=S.a.posts,w=Object(B.a)(10),A=Object(_.a)({form:"postsAddForm"})((function(t){return Object(l.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(P.a,{component:y.b,name:"post",placeholder:"Post text",validate:[B.b,w]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Add post"})})]})})),I=u.a.memo((function(t){var s=t.posts.map((function(t){return Object(l.jsx)(g,{message:t.message,likesCount:t.likesCount})}));return Object(l.jsxs)("div",{className:C,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(A,{onSubmit:function(s){t.addPost(s.post)}})}),Object(l.jsx)("div",{className:M,children:s})]})]})})),D=e(17),N=Object(D.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t(Object(x.a)(s))}}}))(I);var H=function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(l.jsx)(N,{})]})},z=e(10),F=e(9),G=function(t){Object(o.a)(e,t);var s=Object(a.a)(e);function e(){return Object(i.a)(this,e),s.apply(this,arguments)}return Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(l.jsx)(H,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.a.Component);s.default=Object(F.d)(Object(D.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:x.c,getStatus:x.d,updateStatus:x.e}),z.f)(G)}}]);
//# sourceMappingURL=3.db8b566f.chunk.js.map