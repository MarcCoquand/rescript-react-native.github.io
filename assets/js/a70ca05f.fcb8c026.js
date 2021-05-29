(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(189)),i={id:"global",title:"Global",autoLinkToOfficialDoc:!1},l={unversionedId:"global",id:"global",isDocsHomePage:!1,title:"Global",description:"This module contains various APIs & flags that are in JavaScript global scope.",source:"@site/docs/global.md",sourceDirName:".",slug:"/global",permalink:"/docs/global",editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/global.md",version:"current",frontMatter:{id:"global",title:"Global",autoLinkToOfficialDoc:!1},sidebar:"api",previous:{title:"Event",permalink:"/docs/event"},next:{title:"InteractionManager",permalink:"/docs/interactionmanager"}},c=[{value:"<code>Global.__DEV__</code>",id:"global__dev__",children:[]},{value:"<code>Global.hermesInternal</code>",id:"globalhermesinternal",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This module contains various APIs & flags that are in JavaScript global scope."),Object(o.b)("h2",{id:"global__dev__"},Object(o.b)("inlineCode",{parentName:"h2"},"Global.__DEV__")),Object(o.b)("p",null,"This is the development flag known in JavaScript as just\n",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/javascript-environment"},Object(o.b)("inlineCode",{parentName:"a"},"__DEV__")),"."),Object(o.b)("p",null,"You can use it like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rescript"},'open ReactNative\n\nlet environmentText = if Global.__DEV__ {\n  "This is development"\n}\nelse {\n  "This is production"\n}\n')),Object(o.b)("h2",{id:"globalhermesinternal"},Object(o.b)("inlineCode",{parentName:"h2"},"Global.hermesInternal")),Object(o.b)("p",null,"This is the ",Object(o.b)("inlineCode",{parentName:"p"},"HermesInternal")," value known in JavaScript as\n",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/hermes"},Object(o.b)("inlineCode",{parentName:"a"},"global.HermesInternal")),"."),Object(o.b)("p",null,"You can use it like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rescript"},"open ReactNative\n\nlet isHermes = () => Global.hermesInternal != None\n")))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);