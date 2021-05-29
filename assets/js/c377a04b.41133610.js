(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(189)),c={slug:"/",title:"Getting Started"},o={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Getting Started",description:"ReScript React Native is a safe & simple way to build",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/index.md",version:"current",frontMatter:{slug:"/",title:"Getting Started"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/install"}},p=[{value:"Why <em>ReScript React Native</em> ?",id:"why-rescript-react-native-",children:[]},{value:"How to use <em>ReScript React Native</em> ?",id:"how-to-use-rescript-react-native-",children:[]},{value:"Zero-Cost",id:"zero-cost",children:[]},{value:"Using ReScript &amp; ReScript React",id:"using-rescript--rescript-react",children:[]}],s={toc:p};function l(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ReScript React Native")," is a safe & simple way to build\n",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native")," apps, in\n",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/"},"ReScript"),", using\n",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/docs/react/latest/introduction"},"ReScript React"),"."),Object(i.b)("h2",{id:"why-rescript-react-native-"},"Why ",Object(i.b)("em",{parentName:"h2"},"ReScript React Native")," ?"),Object(i.b)("p",null,"By leveraging the ReScript great type system, expressive language features and\nsmooth interoperability with JavaScript (thanks to\n",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/"},"ReScript"),", ",Object(i.b)("em",{parentName:"p"},"ReScript React Native")," provide\nbindings for React Native features as components & APIs that are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Safe and statically typed"),Object(i.b)("li",{parentName:"ul"},"Simple and lean"),Object(i.b)("li",{parentName:"ul"},"Familiar and easy to insert into an existing React Native codebase")),Object(i.b)("p",null,'It is often said that writing ReactJS code feels like "just using JavaScript".\nThe same applies to ',Object(i.b)("em",{parentName:"p"},"ReScript React")," with ",Object(i.b)("em",{parentName:"p"},"ReScript React Native"),': you will feel\nlike you are "just using Reason".'),Object(i.b)("h2",{id:"how-to-use-rescript-react-native-"},"How to use ",Object(i.b)("em",{parentName:"h2"},"ReScript React Native")," ?"),Object(i.b)("p",null,"Like ",Object(i.b)("em",{parentName:"p"},"ReScript React")," for React, ",Object(i.b)("em",{parentName:"p"},"ReScript React Native")," is a ReScript package that exposes\nbindings for React Native."),Object(i.b)("p",null,"On your side, you write ReScript code that use the ",Object(i.b)("inlineCode",{parentName:"p"},"ReactNative")," module exposed by\n",Object(i.b)("inlineCode",{parentName:"p"},"rescript-react-native")," package that you will find on ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),"."),Object(i.b)("p",null,"ReScript will compile this code to safe JavaScript that React Native can\nconsume like standard JavaScript."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Introduction",src:r(268).default})),Object(i.b)("p",null,"If you are familiar with Flow or TypeScript, you can see ReScript as the next\nlevel of strongly typed JavaScript."),Object(i.b)("p",null,"In short, you write safer code that will be compiled to safe JavaScript & end up\nwith a safer React Native app!"),Object(i.b)("h2",{id:"zero-cost"},"Zero-Cost"),Object(i.b)("p",null,"What is awesome about ",Object(i.b)("em",{parentName:"p"},"ReScript React Native")," bindings is that they don't\nintroduce an additional cost. The JavaScript code produced by ReScript will\ndirectly hit React & React Native JavaScript implementation, without any extra\nruntime & bundle cost."),Object(i.b)("h2",{id:"using-rescript--rescript-react"},"Using ReScript & ReScript React"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ReScript React Native")," is a package that works with\n",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/"},"ReScript")," & use\n",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/docs/react/latest/introduction"},"ReScript React"),". For this reasons,\nif you are unfamiliar with one of these two, we encourage you to have a look to\ntheir documentations as soon as you don't find an answer you might have here."))}l.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return r?n.a.createElement(m,o(o({ref:t},s),{},{components:r})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},268:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/introduction-f371744e623bab317b3bc3be11b60603.svg"}}]);