/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={271:function(e,t){var n;!function(r){"use strict";var d={},i={},a={},o="en",l={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},s={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){return e.utc?"+0000":/[\+-]\d{4}/.exec(e.toTimeString())[0]},post:function(e){return e}},c={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var n=(e.exec(t)||[""])[0];return{value:0|n,length:n.length}},find:function(e,t){for(var n,r=-1,d=0,i=0,a=e.length;i<a;i++)n=e[i],!t.indexOf(n)&&n.length>d&&(r=i,d=n.length);return{value:r,length:d}},pre:function(e){return e}},u=function(e,t,n){var r=function(e,t,n){var r=function(e){e&&(this.res=e)};(r.prototype=e).constructor=r;var d,i=new r(n);for(var a in t||{})d=t[a],i[a]=d.slice?d.slice():d;return i},d={res:r(t.res,n.res)};d.formatter=r(t.formatter,n.formatter,d.res),d.parser=r(t.parser,n.parser,d.res),i[e]=d};d.compile=function(e){for(var t,n=/\[([^\[\]]*|\[[^\[\]]*\])*\]|([A-Za-z])\2+|\.{3}|./g,r=[e];t=n.exec(e);)r[r.length]=t[0];return r},d.format=function(e,t,n){var r="string"==typeof t?d.compile(t):t,a=d.addMinutes(e,n?e.getTimezoneOffset():0),l=i[o].formatter,s="";a.utc=n||!1;for(var c,u=1,p=r.length;u<p;u++)s+=l[c=r[u]]?l.post(l[c](a,r[0])):c.replace(/\[(.*)]/,"$1");return s},d.preparse=function(e,t){var n="string"==typeof t?d.compile(t):t,r={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},a=/\[(.*)]/,l=i[o].parser,s=0;e=l.pre(e);for(var c,u,p=1,m=n.length;p<m;p++)if(l[c=n[p]]){if(!(u=l[c](e.slice(s),n[0])).length)break;s+=u.length,r[c.charAt(0)]=u.value,r._match++}else if(c===e.charAt(s)||" "===c)s++;else{if(!a.test(c)||e.slice(s).indexOf(a.exec(c)[1])){if("..."===c){s=e.length;break}break}s+=c.length-2}return r.H=r.H||l.h12(r.h,r.A),r._index=s,r._length=e.length,r},d.isValid=function(e,t){var n="string"==typeof e?d.preparse(e,t):e,r=[31,28+d.isLeapYear(n.Y)|0,31,30,31,30,31,31,30,31,30,31][n.M-1];return!(n._index<1||n._length<1||n._index-n._length||n._match<1||n.Y<1||n.Y>9999||n.M<1||n.M>12||n.D<1||n.D>r||n.H<0||n.H>23||n.m<0||n.m>59||n.s<0||n.s>59||n.S<0||n.S>999||n.Z<-720||n.Z>840)},d.parse=function(e,t,n){var r=d.preparse(e,t);return d.isValid(r)?(r.M-=r.Y<100?22801:1,n||r.Z?new Date(Date.UTC(r.Y,r.M,r.D,r.H,r.m+r.Z,r.s,r.S)):new Date(r.Y,r.M,r.D,r.H,r.m,r.s,r.S)):new Date(NaN)},d.transform=function(e,t,n,r){return d.format(d.parse(e,t),n,r)},d.addYears=function(e,t){return d.addMonths(e,12*t)},d.addMonths=function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},d.addDays=function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},d.addHours=function(e,t){return d.addMinutes(e,60*t)},d.addMinutes=function(e,t){return d.addSeconds(e,60*t)},d.addSeconds=function(e,t){return d.addMilliseconds(e,1e3*t)},d.addMilliseconds=function(e,t){return new Date(e.getTime()+t)},d.subtract=function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3},toMinutes:function(){return n/6e4},toHours:function(){return n/36e5},toDays:function(){return n/864e5}}},d.isLeapYear=function(e){return!((e%4||!(e%100))&&e%400)},d.isSameDay=function(e,t){return e.toDateString()===t.toDateString()},d.locale=function(e,t){return t?u(e,{res:l,formatter:s,parser:c},t):"function"==typeof e?o=e(d):e&&(r&&!r.date&&console.warn("This method of changing the locale is deprecated. See documentation for details."),o=e),o},d.extend=function(e){var t=e.extender||{};for(var n in t)d[n]||(d[n]=t[n]);(e.formatter||e.parser||e.res)&&u(o,i[o],e)},d.plugin=function(e,t){"function"==typeof e?d.extend(a[e(d)]):(a[e]=a[e]||t,!t&&a[e]&&(d.extend(a[e]),r&&!r.date&&console.warn("This method of applying plugins is deprecated. See documentation for details.")))},d.locale(o,{}),"object"==typeof e.exports?e.exports=d:void 0===(n=function(){return d}.apply(t,[]))||(e.exports=n)}(this)},394:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});const r=(()=>{let e=["Project","Assignment","Trip","Holidays"];const t=["Today","Tomorrow","Upcoming"],n=document.body,r=document.querySelector(".nav"),d=(e,t)=>{let n=document.createElement("ul"),r=document.createElement("lh"),d=document.createElement("span");d.classList.add("material-icons","md-lh");let i=document.createElement("strong");e?(n.classList.add("tasks-list"),d.innerHTML="all_inbox",i.innerHTML=" Tasks"):(n.classList.add("days-list"),d.innerHTML="calendar_today",i.innerHTML=" Days"),r.appendChild(d),r.appendChild(i),n.appendChild(r);for(let r=0;r<t.length;r++){let d=document.createElement("li");if(d.innerHTML=t[r],e){let e=document.createElement("span");e.innerHTML="delete_outline",e.classList.add("material-icons","md-del"),d.id=r.toString(),d.appendChild(e)}n.appendChild(d)}return n};return{createNav:()=>{((e,t)=>{r.innerHTML="",r.appendChild(e),r.appendChild(t);let d=document.createElement("div");d.id="addTask",d.classList.add("add-task","material-icons","md-32"),d.innerHTML="add_circle_outline",r.appendChild(d),n.appendChild(r)})(d(!1,t),d(!0,e))},inputTask:()=>{let e=document.querySelector(".tasks-list"),t=document.createElement("input"),n=document.createElement("div"),d=document.querySelector("#addTask");r.removeChild(d),n.classList.add("material-icons","navinput"),n.innerHTML="check";let i=document.createElement("span");return i.classList.add("material-icons","navinput"),i.innerHTML="clear",e.appendChild(t),e.appendChild(n),e.appendChild(i),t.focus(),{addBtn:n,delBtn:i,input:t}},tasks:e,removeTask:e=>{document.querySelector(".tasks-list").removeChild(e)}}})();var d=n(271),i=n.n(d);const a=(()=>{const e=document.body;return(()=>{let t=document.createElement("div");t.classList.add("main"),t.innerHTML="",e.appendChild(t)})(),{updateMain:e=>{document.querySelector(".main").innerHTML="",(()=>{let e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("greeting"),t.innerHTML="Hello There!",e.appendChild(t)})(),(e=>{console.log(e);let t=document.querySelector(".main"),n=document.createElement("div");n.classList.add("show-task");let r=document.createElement("div");r.classList.add("task-name"),r.innerHTML=e.taskName;let d=document.createElement("div");d.classList.add("material-icons","md-clear"),d.innerHTML="clear_all";let a=document.createElement("ul");a.classList.add("task-todo");let o=e.todos;for(let e in o){let t=document.createElement("li"),n=document.createElement("div");n.classList.add("material-icons","md-radio"),o[e].done?(n.innerHTML="radio_button_checked",t.classList.add("done")):n.innerHTML="radio_button_unchecked";let r=document.createElement("span");if(r.classList.add("todos"),r.innerHTML=e,t.appendChild(n),t.appendChild(r),""!=o[e].date){let n=document.createElement("code"),r=new Date(o[e].date),d=i().format(r,"DD MMM");n.innerHTML=d,t.appendChild(n)}let d=document.createElement("div");d.classList.add("material-icons"),d.innerHTML="local_offer priority_high","1"===o[e].priority?(d.classList.add("md-priority-green"),d.innerHTML="label",t.appendChild(d)):"-1"===o[e].priority&&(d.classList.add("md-priority-red"),t.appendChild(d)),a.appendChild(t)}let l=document.createElement("li"),s=document.createElement("div");s.classList.add("add-task","material-icons"),s.innerHTML="add_circle_outline",l.appendChild(s),l.classList.add("add-todo"),a.appendChild(l),n.appendChild(r),n.appendChild(d),n.appendChild(a),t.appendChild(n)})(e)},dispInfo:(e,t)=>{e.querySelector("span").classList.add("todo-select");let n=document.createElement("div");n.classList.add("info");let r=document.createElement("div");r.classList.add("notes");let d=document.createElement("span");d.classList.add("notes-head"),d.innerHTML="Notes :";let i=document.createElement("span");i.classList.add("note"),""===t.notes?i.innerHTML=" oops no notes :(":i.innerHTML=" "+t.notes;let a=document.createElement("div");a.classList.add("priority");let o=document.createElement("span");o.classList.add("pri-head"),o.innerHTML="Priority :";let l=document.createElement("span");t.priority>0?(l.classList.add("pri-less"),l.innerHTML=" less important"):t.priority<0?(l.classList.add("pri-imp"),l.innerHTML=" Important!"):l.innerHTML=" No priority specified",r.appendChild(d),r.appendChild(i),a.appendChild(o),a.appendChild(l),n.appendChild(r),n.appendChild(a),e.appendChild(n)},toggleDone:(e,t)=>{e?(t.classList.remove("done"),t.querySelector(".md-radio").innerHTML="radio_button_unchecked"):(t.classList.add("done"),t.querySelector(".md-radio").innerHTML="radio_button_checked")},deleteDone:(e,t)=>{e.removeChild(t)},dispForm:e=>{let t=e.querySelector(".add-todo"),n=document.createElement("div");n.classList.add("todo-input");let r=document.createElement("input");r.placeholder="I want to..",r.classList.add("input-name");let d=document.createElement("div");d.style.marginTop="5px",d.innerHTML="by, ";let a=document.createElement("input");a.classList.add("input-date"),a.type="date";let o=i().format(new Date,"YYYY-MM-DD");a.min=o;let l=document.createElement("select");l.classList.add("input-pri");let s=document.createElement("option");s.innerHTML="High",s.value="-1",l.add(s);let c=document.createElement("option");c.innerHTML="Low",c.value="1",l.add(c);let u=document.createElement("option");u.innerHTML="No Priority",u.selected=!0,u.value="0",l.add(u);let p=document.createElement("textarea");p.classList.add("input-note"),p.placeholder="Add Notes";let m=document.createElement("div");m.classList.add("btn");let h=document.createElement("div");h.innerHTML="add todo",h.classList.add("add-btn");let f=document.createElement("div");return f.innerHTML="Cancel",f.classList.add("cancel-btn"),m.appendChild(h),m.appendChild(f),n.appendChild(r),n.appendChild(d),n.appendChild(a),n.appendChild(l),n.appendChild(p),n.appendChild(m),t.appendChild(n),{add:h,cancel:f}},getForm:()=>{let e=document.querySelector(".todo-input"),t=e.querySelector(".input-name");if(""===t.value)return t.classList.add("input-required"),"";t=t.value;let n=e.querySelector(".input-date").value;n||(n="");let r=e.querySelector(".input-pri").value,d=e.querySelector(".input-note").value;return d=d.replaceAll("\n"," "),console.log(t),{name:t,date:n,priority:r,notes:d}}}})(),o=(()=>{const e=()=>{document.querySelector("#addTask").addEventListener("click",(()=>{let t=r.inputTask();t.addBtn.addEventListener("click",(()=>{t.input.value&&(r.tasks.push(t.input.value),r.createNav(),e())})),t.delBtn.addEventListener("click",(()=>{r.createNav(),e()}))})),(()=>{let t=document.querySelectorAll(".md-del");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{let d=parseInt(t[n].parentNode.id);r.tasks.splice(d,1),r.removeTask(t[n].parentNode),console.log(r.tasks),r.createNav(),e()}))})()};return{taskHandler:e}})(),l=(e,t)=>{console.log(e);let n={};n.notes=t.notes,n.date=t.date,n.priority=t.priority,e.todos[t.name]=n},s={addHandlers:()=>{(()=>{let e=document.querySelector(".show-task").querySelectorAll("li");for(let t=0;t<e.length-1;t++){let n=e[t].querySelector(".md-radio");console.log(n);let r=e[t].querySelector("span").innerHTML;n.addEventListener("click",(()=>{if("done"===e[t].className)return p.todos[r].done=!1,console.log(p.todos),void a.toggleDone(!0,e[t]);p.todos[r].done=!0,console.log(p.todos),a.toggleDone(!1,e[t])}))}})(),document.querySelector(".show-task").querySelector(".md-clear").addEventListener("click",(()=>{let e=(()=>{let e=document.querySelector(".main").querySelectorAll("li"),t=[];for(let n=0,r=0;n<e.length;n++)"done"===e[n].className&&(t[r]=e[n],r++);return t})();for(let t=0;t<e.length;t++){let n=e[t].querySelector("span").innerHTML;a.deleteDone(e[t].parentNode,e[t]),delete p.todos[n],console.log(p.todos)}})),(()=>{let e=document.querySelector(".show-task").querySelectorAll("span");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{let n=p.todos[e[t].innerHTML];if(e[t].parentNode.querySelector(".info"))return e[t].classList.remove("todo-select"),void e[t].parentNode.removeChild(e[t].parentNode.querySelector(".info"));a.dispInfo(e[t].parentNode,n)}))})(),(()=>{let e=document.querySelector(".show-task"),t=e.querySelector(".add-todo"),n=(e.querySelector(".task-name").innerHTML,e.querySelector(".add-task"));n.addEventListener("click",(()=>{n.style.visibility="hidden";let r=a.dispForm(e);r.cancel.addEventListener("click",(()=>{t.removeChild(t.querySelector(".todo-input")),n.style.visibility="visible"})),r.add.addEventListener("click",(()=>{let e=a.getForm();""!==e&&(l(p,e),console.log(p),c.mainRefresh(p))}))}))})()}},c={mainRefresh:e=>{a.updateMain(e),s.addHandlers()},navRefresh:()=>{r.createNav(),o.taskHandler()}},u={taskName:"Today",todos:{"Attend ME class":{notes:"1",date:"2020-10-15",priority:"1",done:!1},"Attend UP class":{notes:"2",date:"2020-10-15",priority:"0",done:!1},"Attend DBMS class":{notes:"3",date:"",priority:"0",done:!0},"Attend A class":{notes:"4",date:"2020-10-15",priority:"-1",done:!0},"Attend B class":{notes:"",date:"",priority:"-1",done:!1}}};c.navRefresh(),c.mainRefresh(u);const p=u}},t={};function n(r){if(t[r])return t[r].exports;var d=t[r]={exports:{}};return e[r].call(d.exports,d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(394)})();