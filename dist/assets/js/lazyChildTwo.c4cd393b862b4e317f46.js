webpackJsonp([7],{92:function(e,t,o){"use strict";var n=o(1),l=o(93),i=o(97),a=n.module("lazy-child-two",[]).component("lazyChildTwoComponent",l["default"]).config(i["default"]).name;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a},93:function(e,t,o){"use strict";o(94);var n=function(){function e(){}return e}(),l={controller:n,template:o(96)};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l},94:function(e,t,o){var n=o(95);"string"==typeof n&&(n=[[e.id,n,""]]);o(7)(n,{});n.locals&&(e.exports=n.locals)},95:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,"lazy-child-two-component h1{color:green}",""])},96:function(e,t){e.exports="<h1>Lazy child two loaded</h1>"},97:function(e,t){"use strict";function o(e){e.state("lazyChildTwo",{parent:"lazyParent",component:"lazyChildTwoComponent",data:{isChild:!0,navTitle:"Lazy Child Two",moduleTitle:"Lazy Child Two",isMenuItem:!0}})}o.$inject=["$stateProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o}});