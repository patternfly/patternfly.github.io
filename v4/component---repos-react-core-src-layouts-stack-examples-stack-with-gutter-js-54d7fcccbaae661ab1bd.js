(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{449:function(t,e,r){"use strict";r.r(e);var n=r(11),a=r.n(n),o=r(3),c=r(2),i=r.n(c),s=r(981),l=r(982),u=function(t){function StackWithGutter(){return t.apply(this,arguments)||this}return a()(StackWithGutter,t),StackWithGutter.prototype.render=function render(){return Object(o.b)(s.a,{gutter:"md"},Object(o.b)(l.a,null,"Secondary content"),Object(o.b)(l.a,{isMain:!0},"Primary Content"),Object(o.b)(l.a,null,"Secondary content"))},StackWithGutter}(i.a.Component);e.default=u},889:function(t,e,r){"use strict";var n=r(13);e.a=n.a.parse(".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom:var(--pf-global--gutter);display:flex;flex-direction:column;height:100%;}.pf-l-stack__item.pf-m-main{flex-grow:1;}.pf-l-stack.pf-m-gutter > *:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom);}")},981:function(t,e,r){"use strict";var n=r(2),a=r.n(n),o=r(1),c=r.n(o),i=r(889),s=r(54),l=r(36),u=r(13);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _objectWithoutProperties(t,e){if(null==t)return{};var r,n,a=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p={gutter:c.a.oneOf(Object.keys(l.a)),children:c.a.node,className:c.a.string,component:s.a,"":c.a.any},f=function Stack(t){var e=t.gutter,r=t.className,n=t.children,o=t.component,c=_objectWithoutProperties(t,["gutter","className","children","component"]);return a.a.createElement(o,_extends({},c,{className:Object(u.b)(i.a.stack,e&&Object(l.b)(i.a,e,i.a.modifiers.gutter),r)}),n)};f.propTypes=p,f.defaultProps={gutter:null,className:"",children:null,component:"div"},e.a=f},982:function(t,e,r){"use strict";var n=r(2),a=r.n(n),o=r(1),c=r.n(o),i=r(889),s=r(13);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _objectWithoutProperties(t,e){if(null==t)return{};var r,n,a=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l={isMain:c.a.bool,children:c.a.node,className:c.a.string,"":c.a.any},u=function StackItem(t){var e=t.isMain,r=t.className,n=t.children,o=_objectWithoutProperties(t,["isMain","className","children"]);return a.a.createElement("div",_extends({},o,{className:Object(s.b)(i.a.stackItem,e&&i.a.modifiers.main,r)}),n)};u.propTypes=l,u.defaultProps={isMain:!1,className:"",children:null},e.a=u}}]);