(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),c=s.n(r),i=s(4),o=s(5),a=s(8),l=s(6),u=s(7),h=s(1),d=s.n(h),b=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.handleSortClick=function(e){t.setState({sortType:e})},t.handleReverseClick=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleResetClick=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);switch(s){case n.ALPHABET:c.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:c.sort((function(t,e){return t.length-e.length}))}return r&&c.reverse(),console.log(s,r),c}(p,{sortType:this.state.sortType,isReversed:this.state.isReversed});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"button is-info ".concat(this.state.sortType!==n.ALPHABET&&"is-light"),onClick:function(){return t.handleSortClick(n.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"button is-success ".concat(this.state.sortType!==n.LENGTH&&"is-light"),onClick:function(){return t.handleSortClick(n.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"button ".concat(this.state.isReversed?"is-warning":"is-light"),onClick:this.handleReverseClick,children:"Reverse"}),(this.state.sortType||this.state.isReversed)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleResetClick,children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.a.PureComponent);c.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5a853db3.chunk.js.map