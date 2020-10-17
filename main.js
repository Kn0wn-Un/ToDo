/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={271:function(e,t){var n;!function(r){"use strict";var d={},i={},a={},o="en",s={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},l={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){return e.utc?"+0000":/[\+-]\d{4}/.exec(e.toTimeString())[0]},post:function(e){return e}},c={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var n=(e.exec(t)||[""])[0];return{value:0|n,length:n.length}},find:function(e,t){for(var n,r=-1,d=0,i=0,a=e.length;i<a;i++)n=e[i],!t.indexOf(n)&&n.length>d&&(r=i,d=n.length);return{value:r,length:d}},pre:function(e){return e}},u=function(e,t,n){var r=function(e,t,n){var r=function(e){e&&(this.res=e)};(r.prototype=e).constructor=r;var d,i=new r(n);for(var a in t||{})d=t[a],i[a]=d.slice?d.slice():d;return i},d={res:r(t.res,n.res)};d.formatter=r(t.formatter,n.formatter,d.res),d.parser=r(t.parser,n.parser,d.res),i[e]=d};d.compile=function(e){for(var t,n=/\[([^\[\]]*|\[[^\[\]]*\])*\]|([A-Za-z])\2+|\.{3}|./g,r=[e];t=n.exec(e);)r[r.length]=t[0];return r},d.format=function(e,t,n){var r="string"==typeof t?d.compile(t):t,a=d.addMinutes(e,n?e.getTimezoneOffset():0),s=i[o].formatter,l="";a.utc=n||!1;for(var c,u=1,p=r.length;u<p;u++)l+=s[c=r[u]]?s.post(s[c](a,r[0])):c.replace(/\[(.*)]/,"$1");return l},d.preparse=function(e,t){var n="string"==typeof t?d.compile(t):t,r={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},a=/\[(.*)]/,s=i[o].parser,l=0;e=s.pre(e);for(var c,u,p=1,m=n.length;p<m;p++)if(s[c=n[p]]){if(!(u=s[c](e.slice(l),n[0])).length)break;l+=u.length,r[c.charAt(0)]=u.value,r._match++}else if(c===e.charAt(l)||" "===c)l++;else{if(!a.test(c)||e.slice(l).indexOf(a.exec(c)[1])){if("..."===c){l=e.length;break}break}l+=c.length-2}return r.H=r.H||s.h12(r.h,r.A),r._index=l,r._length=e.length,r},d.isValid=function(e,t){var n="string"==typeof e?d.preparse(e,t):e,r=[31,28+d.isLeapYear(n.Y)|0,31,30,31,30,31,31,30,31,30,31][n.M-1];return!(n._index<1||n._length<1||n._index-n._length||n._match<1||n.Y<1||n.Y>9999||n.M<1||n.M>12||n.D<1||n.D>r||n.H<0||n.H>23||n.m<0||n.m>59||n.s<0||n.s>59||n.S<0||n.S>999||n.Z<-720||n.Z>840)},d.parse=function(e,t,n){var r=d.preparse(e,t);return d.isValid(r)?(r.M-=r.Y<100?22801:1,n||r.Z?new Date(Date.UTC(r.Y,r.M,r.D,r.H,r.m+r.Z,r.s,r.S)):new Date(r.Y,r.M,r.D,r.H,r.m,r.s,r.S)):new Date(NaN)},d.transform=function(e,t,n,r){return d.format(d.parse(e,t),n,r)},d.addYears=function(e,t){return d.addMonths(e,12*t)},d.addMonths=function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},d.addDays=function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},d.addHours=function(e,t){return d.addMinutes(e,60*t)},d.addMinutes=function(e,t){return d.addSeconds(e,60*t)},d.addSeconds=function(e,t){return d.addMilliseconds(e,1e3*t)},d.addMilliseconds=function(e,t){return new Date(e.getTime()+t)},d.subtract=function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3},toMinutes:function(){return n/6e4},toHours:function(){return n/36e5},toDays:function(){return n/864e5}}},d.isLeapYear=function(e){return!((e%4||!(e%100))&&e%400)},d.isSameDay=function(e,t){return e.toDateString()===t.toDateString()},d.locale=function(e,t){return t?u(e,{res:s,formatter:l,parser:c},t):"function"==typeof e?o=e(d):e&&(r&&!r.date&&console.warn("This method of changing the locale is deprecated. See documentation for details."),o=e),o},d.extend=function(e){var t=e.extender||{};for(var n in t)d[n]||(d[n]=t[n]);(e.formatter||e.parser||e.res)&&u(o,i[o],e)},d.plugin=function(e,t){"function"==typeof e?d.extend(a[e(d)]):(a[e]=a[e]||t,!t&&a[e]&&(d.extend(a[e]),r&&!r.date&&console.warn("This method of applying plugins is deprecated. See documentation for details.")))},d.locale(o,{}),"object"==typeof e.exports?e.exports=d:void 0===(n=function(){return d}.apply(t,[]))||(e.exports=n)}(this)}},t={};function n(r){if(t[r])return t[r].exports;var d=t[r]={exports:{}};return e[r].call(d.exports,d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(()=>{let e={};const t=(t,r)=>{let d={};d.notes=r.notes,d.date=r.date,d.priority=r.priority,d.done=r.done,e[t].todos[r.name]=d,"Today"!==t&&"Tomorrow"!==t&&"Upcoming"!==t&&n()},n=()=>{(()=>{for(let n in e)for(let r in e[n].todos){let d=e[n].todos[r],i=new Date(d.date),a=new Date;if(i.setHours(0,0,0,0)==a.setHours(0,0,0,0)){let e={name:r,notes:d.notes,date:d.date,priority:d.priority,done:d.done};t("Today",e)}}})(),(()=>{for(let n in e)for(let r in e[n].todos){let d=e[n].todos[r],i=new Date(d.date),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);if(i.setHours(0,0,0,0)==o.setHours(0,0,0,0)){let e={name:r,notes:d.notes,date:d.date,priority:d.priority,done:d.done};t("Tomorrow",e)}}})(),(()=>{for(let n in e)for(let r in e[n].todos){let d=e[n].todos[r],i=new Date(d.date),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);if(i.setHours(0,0,0,0)>o.setHours(0,0,0,0)){let e={name:r,notes:d.notes,date:d.date,priority:d.priority,done:d.done};t("Upcoming",e)}}})()};return{addObj:t,addTasks:t=>{let n={};t=t.charAt(0).toUpperCase()+t.slice(1),n.taskName=t,n.todos={},e[t]=n},delTask:t=>{for(let n in e)n===t&&delete e[n];console.log(e),n()},getTask:t=>e[t],getTasksArr:()=>{let t=[];for(let n in e)t.push(n);return t},initDays:n}})(),t=(()=>{const t=["Today","Tomorrow","Upcoming"],n=document.body,r=document.querySelector(".nav"),d=(e,t)=>{let n=document.createElement("ul"),r=document.createElement("lh"),d=document.createElement("span");d.classList.add("material-icons","md-lh");let i=document.createElement("strong");e?(n.classList.add("tasks-list"),d.innerHTML="all_inbox",i.innerHTML=" Tasks"):(n.classList.add("days-list"),d.innerHTML="calendar_today",i.innerHTML=" Days"),r.appendChild(d),r.appendChild(i),n.appendChild(r);for(let r=0;r<t.length;r++){if(e&&"Today"===t[r])continue;if(e&&"Tomorrow"===t[r])continue;if(e&&"Upcoming"===t[r])continue;let d=document.createElement("li"),i=document.createElement("span");if(i.classList.add("nav-task"),i.innerHTML=t[r],d.appendChild(i),e){let e=document.createElement("span");e.innerHTML="delete_outline",e.classList.add("material-icons","md-del"),d.id=r.toString(),d.appendChild(e)}n.appendChild(d)}return n};return{createNav:()=>{((e,t)=>{r.innerHTML="",r.appendChild(e),r.appendChild(t);let d=document.createElement("div");d.id="addTask",d.classList.add("add-task","material-icons","md-32"),d.innerHTML="add_circle_outline",r.appendChild(d),n.appendChild(r)})(d(!1,t),d(!0,e.getTasksArr()))},inputTask:()=>{let e=document.querySelector(".tasks-list"),t=document.createElement("input"),n=document.createElement("div");document.querySelector("#addTask").style.visibility="hidden",n.classList.add("material-icons","navinput"),n.innerHTML="check";let r=document.createElement("span");return r.classList.add("material-icons","navinput"),r.innerHTML="clear",e.appendChild(t),e.appendChild(n),e.appendChild(r),t.focus(),{addBtn:n,delBtn:r,input:t}},removeTask:e=>{document.querySelector(".tasks-list").removeChild(e)},removeInput:()=>{let e=document.querySelector(".tasks-list"),t=e.querySelector("input");e.removeChild(t);let n=e.querySelector("div");e.removeChild(n);let r=e.querySelector(".navinput");e.removeChild(r),document.querySelector("#addTask").style.visibility="visible"}}})();var r=n(271),d=n.n(r);const i=(()=>{const e=document.body;return(()=>{let t=document.createElement("div");t.classList.add("main"),t.innerHTML="",e.appendChild(t)})(),{updateMain:e=>{document.querySelector(".main").innerHTML="",(()=>{let e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("greeting"),t.innerHTML="Hello There!",e.appendChild(t)})(),(e=>{let t=document.querySelector(".main"),n=document.createElement("div");n.classList.add("show-task");let r=document.createElement("div");r.classList.add("task-name"),r.innerHTML=e.taskName;let i=document.createElement("div");i.classList.add("material-icons","md-clear"),i.innerHTML="clear_all";let a=document.createElement("ul");a.classList.add("task-todo");let o=e.todos;for(let e in o){let t=document.createElement("li"),n=document.createElement("div");n.classList.add("material-icons","md-radio"),o[e].done?(n.innerHTML="radio_button_checked",t.classList.add("done")):n.innerHTML="radio_button_unchecked";let r=document.createElement("span");if(r.classList.add("todos"),r.innerHTML=e,t.appendChild(n),t.appendChild(r),""!=o[e].date){let n=document.createElement("code"),r=new Date(o[e].date),i=d().format(r,"DD MMM");n.innerHTML=i,t.appendChild(n)}let i=document.createElement("div");i.classList.add("material-icons"),i.innerHTML="local_offer priority_high","1"===o[e].priority?(i.classList.add("md-priority-green"),i.innerHTML="label",t.appendChild(i)):"-1"===o[e].priority&&(i.classList.add("md-priority-red"),t.appendChild(i)),a.appendChild(t)}let s=document.createElement("li"),l=document.createElement("div");l.classList.add("add-task","material-icons"),l.innerHTML="add_circle_outline",s.appendChild(l),s.classList.add("add-todo"),a.appendChild(s),n.appendChild(r),n.appendChild(i),n.appendChild(a),t.appendChild(n)})(e)},dispInfo:(e,t)=>{e.querySelector("span").classList.add("todo-select");let n=document.createElement("div");n.classList.add("info");let r=document.createElement("div");r.classList.add("notes");let d=document.createElement("span");d.classList.add("notes-head"),d.innerHTML="Notes :";let i=document.createElement("span");i.classList.add("note"),""===t.notes?i.innerHTML=" oops no notes :(":i.innerHTML=" "+t.notes;let a=document.createElement("div");a.classList.add("priority");let o=document.createElement("span");o.classList.add("pri-head"),o.innerHTML="Priority :";let s=document.createElement("span");t.priority>0?(s.classList.add("pri-less"),s.innerHTML=" less important"):t.priority<0?(s.classList.add("pri-imp"),s.innerHTML=" Important!"):s.innerHTML=" No priority specified",r.appendChild(d),r.appendChild(i),a.appendChild(o),a.appendChild(s),n.appendChild(r),n.appendChild(a),e.appendChild(n)},toggleDone:(e,t)=>{e?(t.classList.remove("done"),t.querySelector(".md-radio").innerHTML="radio_button_unchecked"):(t.classList.add("done"),t.querySelector(".md-radio").innerHTML="radio_button_checked")},deleteDone:(e,t)=>{e.removeChild(t)},dispForm:e=>{let t=e.querySelector(".add-todo"),n=document.createElement("div");n.classList.add("todo-input");let r=document.createElement("input");r.placeholder="I want to..",r.classList.add("input-name");let i=document.createElement("div");i.style.marginTop="5px",i.innerHTML="by, ";let a=document.createElement("input");a.classList.add("input-date"),a.type="date";let o=d().format(new Date,"YYYY-MM-DD");a.min=o;let s=document.createElement("select");s.classList.add("input-pri");let l=document.createElement("option");l.innerHTML="High",l.value="-1",s.add(l);let c=document.createElement("option");c.innerHTML="Low",c.value="1",s.add(c);let u=document.createElement("option");u.innerHTML="No Priority",u.selected=!0,u.value="0",s.add(u);let p=document.createElement("textarea");p.classList.add("input-note"),p.placeholder="Add Notes";let m=document.createElement("div");m.classList.add("btn");let f=document.createElement("div");f.innerHTML="add todo",f.classList.add("add-btn");let h=document.createElement("div");return h.innerHTML="Cancel",h.classList.add("cancel-btn"),m.appendChild(f),m.appendChild(h),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.appendChild(s),n.appendChild(p),n.appendChild(m),t.appendChild(n),{add:f,cancel:h}},getForm:()=>{let e=document.querySelector(".todo-input"),t=e.querySelector(".input-name");if(""===t.value)return t.classList.add("input-required"),"";t=t.value;let n=e.querySelector(".input-date").value;n||(n="");let r=e.querySelector(".input-pri").value,d=e.querySelector(".input-note").value;return d=d.replaceAll("\n"," "),{name:t,date:n,priority:r,notes:d}}}})(),a=()=>{(()=>{const t=document.querySelector(".nav").querySelectorAll("li");for(let n=0;n<t.length;n++){let r=t[n].querySelector(".nav-task");r.addEventListener("click",(()=>{let t=e.getTask(r.innerHTML);s.mainRefresh(t)}))}})(),document.querySelector("#addTask").addEventListener("click",(()=>{let n=t.inputTask();n.addBtn.addEventListener("click",(()=>{n.input.value&&(e.addTasks(n.input.value),s.navRefresh())})),n.delBtn.addEventListener("click",(()=>{t.removeInput()}))})),(()=>{let n=document.querySelectorAll(".md-del");for(let r=0;r<n.length;r++)n[r].addEventListener("click",(()=>{e.delTask(n[r].previousSibling.innerHTML),t.removeTask(n[r].parentNode),0===r?(console.log("test"),s.fullRefresh(e.getTask("Today"))):(console.log("test"),s.fullRefresh(e.getTask(n[r-1].previousSibling.innerHTML)))}))})()},o={addHandlers:()=>{let t=document.querySelector(".show-task"),n=t.querySelector(".task-name").innerHTML,r=e.getTask(n);((t,n)=>{let r=t.querySelectorAll("li");for(let t=0;t<r.length-1;t++){let d=r[t].querySelector(".md-radio"),a=r[t].querySelector("span").innerHTML;d.addEventListener("click",(()=>{if("done"===r[t].className)return n.todos[a].done=!1,i.toggleDone(!0,r[t]),void e.initDays();n.todos[a].done=!0,i.toggleDone(!1,r[t]),e.initDays()}))}})(t,r),((t,n)=>{t.querySelector(".md-clear").addEventListener("click",(()=>{let t=(()=>{let e=document.querySelector(".main").querySelectorAll("li"),t=[];for(let n=0,r=0;n<e.length;n++)"done"===e[n].className&&(t[r]=e[n],r++);return t})();for(let r=0;r<t.length;r++){let d=t[r].querySelector("span").innerHTML;i.deleteDone(t[r].parentNode,t[r]),delete n.todos[d],e.initDays()}}))})(t,r),((e,t)=>{let n=e.querySelectorAll("span");for(let e=0;e<n.length;e++)n[e].addEventListener("click",(()=>{let r=t.todos[n[e].innerHTML];if(n[e].parentNode.querySelector(".info"))return n[e].classList.remove("todo-select"),void n[e].parentNode.removeChild(n[e].parentNode.querySelector(".info"));i.dispInfo(n[e].parentNode,r)}))})(t,r),((t,n)=>{let r=t.querySelector(".add-todo"),d=t.querySelector(".add-task");d.addEventListener("click",(()=>{d.style.visibility="hidden";let a=i.dispForm(t);a.cancel.addEventListener("click",(()=>{r.removeChild(r.querySelector(".todo-input")),d.style.visibility="visible"})),a.add.addEventListener("click",(()=>{let t=i.getForm();""!==t&&(e.addObj(n.taskName,t),s.mainRefresh(n))}))}))})(t,r)}},s={mainRefresh:e=>{i.updateMain(e),o.addHandlers()},navRefresh:()=>{t.createNav(),a()},fullRefresh:e=>{i.updateMain(e),o.addHandlers(),t.createNav(),a()}};e.addTasks("Online classes"),e.addTasks("Today"),e.addTasks("Tomorrow"),e.addTasks("Upcoming"),e.addObj("Online classes",{name:"Attend ME class",notes:"ME class",date:"2020-10-17",priority:"0",done:!0}),e.addObj("Online classes",{name:"Attend UP class",notes:"",date:"2020-10-19",priority:"1",done:!1}),e.addObj("Online classes",{name:"Attend DBMS class",notes:"wewaraw ",date:"2020-10-18",priority:"-1",done:!1}),e.addObj("Online classes",{name:"Attend CN class",notes:"1",date:"2020-10-17",priority:"0",done:!1}),s.navRefresh(),s.mainRefresh(e.getTask("Today"))})()})();