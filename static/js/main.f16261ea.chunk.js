(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=(a(14),a(3)),u=a(4),s=a(6),l=a(5),d=a(7),m=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={redditData:[],defaultQuery:"redux",text:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/soccerstreams__/.json").then(function(e){return e.json()}).then(function(t){return e.setState({redditData:t.data.children})})}},{key:"render",value:function(){var e=/^\[/,t=this.state.redditData.filter(function(t){return e.test(t.data.title)}),a=new Date;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",{onClick:function(){return window.open("https://campusstreams.ga")},className:"weather"}," ","Soccer Games for ",["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],", ",["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]," ",a.getDate()),r.a.createElement("ol",{className:"center"},t.map(function(e){return r.a.createElement("li",{key:e.data.created_utc},r.a.createElement("a",{href:e.data.url,target:"_blank"},e.data.title),r.a.createElement("div",{className:"italicize"},"soccer is tight"))})),r.a.createElement("div",null," "))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.f16261ea.chunk.js.map