(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=(r(0),r(137));const a={id:"setup",title:"Setup",sidebar_label:"Setup"},c={id:"setup",isDocsHomePage:!1,title:"Setup",description:"Setup Steps",source:"@site/docs/setup.md",permalink:"/app-to-k8s/docs/setup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/setup.md",sidebar_label:"Setup",sidebar:"docs",previous:{title:"Introduction",permalink:"/app-to-k8s/docs/"},next:{title:"Kubernetes Shallow Dive",permalink:"/app-to-k8s/docs/shallow-dive"}},u=[{value:"Setup Steps",id:"setup-steps",children:[]},{value:'Create your IBM Cloud account <a id="create-your-ibm-cloud-account"></a>',id:"create-your-ibm-cloud-account",children:[]},{value:'Get a Kubernetes Cluster <a id="get-a-kubernetes-cluster"></a>',id:"get-a-kubernetes-cluster",children:[]},{value:"Clone The Repo",id:"clone-the-repo",children:[]}],i={rightToc:u};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setup-steps"},"Setup Steps"),Object(o.b)("p",null,"In this section, you will create your own IBM Cloud account, and then get access to a IBM Cloud Lab account which contains pre-provisioned clusters. Each lab attendee will be granted access to one cluster."),Object(o.b)("h2",{id:"create-your-ibm-cloud-account"},"Create your IBM Cloud account ",Object(o.b)("a",{id:"create-your-ibm-cloud-account"})),Object(o.b)("p",null,"\u200b",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm.biz/Bd2Lri"}),"Sign up for IBM Cloud\u200b")),Object(o.b)("h2",{id:"get-a-kubernetes-cluster"},"Get a Kubernetes Cluster ",Object(o.b)("a",{id:"get-a-kubernetes-cluster"})),Object(o.b)("p",null,"Generally to get started with Kubernetes, the first step is to provision a cluster which can take up to 10 minutes. In addition, free clusters come with limited features and a single worker VM/node. For this workshop, we've created Standard ","(","paid",")"," clusters with full Kubernetes functionality."),Object(o.b)("p",null,"To get a cluster, head to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app-to-k8s.mybluemix.net/"}),"Get Cluster")," tool."),Object(o.b)("p",null,"Use the key ",Object(o.b)("inlineCode",{parentName:"p"},"k8s_rocks_2019")," and input the email you used to sign up for IBM Cloud. Ensure that US East is chosen as we've created clusters in the Washington data center for this lab."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:".gitbook/assets/screen-shot-2019-04-24-at-1.39.35-am.png",alt:null}))),Object(o.b)("h2",{id:"clone-the-repo"},"Clone The Repo"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"git clone https://github.com/moficodes/app-to-k8s.git\n")))}s.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,u(u({ref:t},s),{},{components:r})):o.a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);