(window["webpackJsonpprogress-bar"]=window["webpackJsonpprogress-bar"]||[]).push([[0],{21:function(e,t,n){e.exports=n(49)},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=(n(26),n(2)),i=n.n(s),l=n(13),u=n(14),p=n(15),d=n(16),m=n(19),f=n(17),b=n(20),h=(n(28),n(29),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"length"},"".concat(e.width,"%")),r.a.createElement("div",{className:"item ".concat(e.className),style:{width:"".concat(e.width,"%")}}))}),y=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("option",null,"#progress",e.index+1))},v=(n(30),function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("button",{onClick:e.changed},e.value))}),g=(n(31),function(){return r.a.createElement("h1",null,"Progress Bars Demo")}),w=n(18),O=n.n(w);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).selectHandler=function(e){var t=e.target.value,a=t.substr(t.length-1);n.setState({index:a-1})},n.clickHandler=function(e){var t=n.state.payload.bars[n.state.index]+e,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state.payload);a.bars[n.state.index]=t>=0?t<=a.limit?t:a.limit:0;var r=document.querySelector(".progress-bar-".concat(n.state.index));t>100?r.classList.add("red"):r.classList.remove("red"),n.setState({payload:a})},n.state={index:0,payload:{buttons:[],bars:[],limit:0}},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=null,n=null,a=null;return this.state.payload&&(t=this.state.payload.bars.map(function(t,n){return r.a.createElement(h,{className:"progress-bar-".concat(n),key:n,width:t,limit:e.state.payload.limit})}),n=this.state.payload.bars.map(function(e,t){return r.a.createElement(y,{key:t,index:t})}),a=this.state.payload.buttons.map(function(t,n){return r.a.createElement(v,{key:n,value:t,changed:function(n){return e.clickHandler(t)}})})),r.a.createElement("div",{className:"App"},r.a.createElement(g,null),t,r.a.createElement("select",{onChange:this.selectHandler},n),a)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://pb-api.herokuapp.com/bars");case 2:t=e.sent,n=t.data,this.setState({payload:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.827e19ae.chunk.js.map