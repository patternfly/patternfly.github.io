(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1066:function(t,n,e){var r=e(1067);function _construct(n,e,o){return!function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=_construct=function _construct(t,n,e){var o=[null];o.push.apply(o,n);var c=new(Function.bind.apply(t,o));return e&&r(c,e.prototype),c}:t.exports=_construct=Reflect.construct,_construct.apply(null,arguments)}t.exports=_construct},1067:function(t,n){function _setPrototypeOf(n,e){return t.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,n){return t.__proto__=n,t},_setPrototypeOf(n,e)}t.exports=_setPrototypeOf},1068:function(t,n,e){var r=e(134),o=e(156);e(1069)("keys",function(){return function keys(t){return o(r(t))}})},1069:function(t,n,e){var r=e(69),o=e(133),c=e(87);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*c(function(){e(1)}),"Object",u)}},1098:function(t,n,e){"use strict";e.d(n,"a",function(){return MDXRenderer});var r=e(1066),o=e.n(r),c=(e(199),e(155),e(131),e(1068),e(154),e(56)),u=e.n(c),p=e(252),s=e.n(p),f=e(2),a=e.n(f),i=e(201),l=e(256);function MDXRenderer(t){var n=t.scope,e=t.components,r=t.children,c=s()(t,["scope","components","children"]),p=Object(i.useMDXComponents)(e),f=Object(l.useMDXScope)(n);if(!r)return null;var d=u()({React:a.a,mdx:i.mdx},f);r=r.replace(/_frontmatter: _frontmatter/gm,"");var y=Object.keys(d),_=y.map(function(t){return d[t]}),m=o()(Function,["_fn"].concat(y,[""+r])).apply(void 0,[{}].concat(_)),v=a.a.createElement(m,u()({components:p},c)),O=v.props.components;return O&&O.code&&(O.code.prototype.getScope=function(){return d}),v}},767:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return c});var r=e(3),o=(e(2),e(1098)),c=(e(760),"1374141205");n.default=function MdxFullscreenTemplate(t){var n=t.data;return Object(r.b)(o.a,null,n.mdx.code.body)}}}]);