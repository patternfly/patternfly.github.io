(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{447:function(t,e,r){"use strict";r.r(e);var n=r(11),a=r.n(n),i=r(3),o=r(2),l=r.n(o),s=r(979),c=r(980),p=function(t){function SplitWithGutter(){return t.apply(this,arguments)||this}return a()(SplitWithGutter,t),SplitWithGutter.prototype.render=function render(){return Object(i.b)(s.a,{gutter:"md"},Object(i.b)(c.a,null,"Secondary content"),Object(i.b)(c.a,{isMain:!0},"Primary Content"),Object(i.b)(c.a,null,"Secondary content"))},SplitWithGutter}(l.a.Component);e.default=p},888:function(t,e,r){"use strict";var n=r(13);e.a=n.a.parse(".pf-l-split{--pf-l-split--m-gutter--MarginRight:var(--pf-global--gutter);display:flex;flex-wrap:nowrap;padding:0;margin:0;}.pf-l-split__item.pf-m-main{flex-grow:1;}.pf-l-split.pf-m-gutter > *:not(:last-child){margin-right:var(--pf-l-split--m-gutter--MarginRight);}")},979:function(t,e,r){"use strict";var n=r(2),a=r.n(n),i=r(1),o=r.n(i),l=r(888),s=r(54),c=r(36),p=r(13);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _objectWithoutProperties(t,e){if(null==t)return{};var r,n,a=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u={gutter:o.a.oneOf(Object.keys(c.a)),children:o.a.node,className:o.a.string,component:s.a,"":o.a.any},f=function Split(t){var e=t.gutter,r=t.className,n=t.children,i=t.component,o=_objectWithoutProperties(t,["gutter","className","children","component"]);return a.a.createElement(i,_extends({},o,{className:Object(p.b)(l.a.split,e&&Object(c.b)(l.a,e,l.a.modifiers.gutter),r)}),n)};f.propTypes=u,f.defaultProps={gutter:null,className:"",children:null,component:"div"},e.a=f},980:function(t,e,r){"use strict";var n=r(2),a=r.n(n),i=r(1),o=r.n(i),l=r(888),s=r(13);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _objectWithoutProperties(t,e){if(null==t)return{};var r,n,a=function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c={isMain:o.a.bool,children:o.a.node,className:o.a.string,"":o.a.any},p=function SplitItem(t){var e=t.isMain,r=t.className,n=t.children,i=_objectWithoutProperties(t,["isMain","className","children"]);return a.a.createElement("div",_extends({},i,{className:Object(s.b)(l.a.splitItem,e&&l.a.modifiers.main,r)}),n)};p.propTypes=c,p.defaultProps={isMain:!1,className:"",children:null},e.a=p}}]);