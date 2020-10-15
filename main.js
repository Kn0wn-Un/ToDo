(()=>{"use strict";var e={49:(e,t,n)=>{n.d(t,{Z:()=>i});const d=(()=>{let e=["Project","Assignment","Trip","Holidays"];const t=["Today","Tomorrow","Upcoming"],n=document.body,d=document.querySelector(".nav"),a=(e,t)=>{let n=document.createElement("ul"),d=document.createElement("lh"),a=document.createElement("span");a.classList.add("material-icons","md-lh");let l=document.createElement("strong");e?(n.classList.add("tasks-list"),a.innerHTML="all_inbox",l.innerHTML=" Tasks"):(n.classList.add("days-list"),a.innerHTML="calendar_today",l.innerHTML=" Days"),d.appendChild(a),d.appendChild(l),n.appendChild(d);for(let d=0;d<t.length;d++){let a=document.createElement("li");if(a.innerHTML=t[d],e){let e=document.createElement("span");e.innerHTML="delete_outline",e.classList.add("material-icons","md-del"),a.id=d.toString(),a.appendChild(e)}n.appendChild(a)}return n};return{createNav:()=>{((e,t)=>{d.innerHTML="",d.appendChild(e),d.appendChild(t);let a=document.createElement("div");a.id="addTask",a.classList.add("add-task","material-icons","md-32"),a.innerHTML="add_circle_outline",d.appendChild(a),n.appendChild(d)})(a(!1,t),a(!0,e))},inputTask:()=>{let e=document.querySelector(".tasks-list"),t=document.createElement("input"),n=document.createElement("div"),a=document.querySelector("#addTask");d.removeChild(a),n.classList.add("material-icons","navinput"),n.innerHTML="check";let l=document.createElement("span");return l.classList.add("material-icons","navinput"),l.innerHTML="clear",e.appendChild(t),e.appendChild(n),e.appendChild(l),t.focus(),{addBtn:n,delBtn:l,input:t}},tasks:e,removeTask:e=>{document.querySelector(".tasks-list").removeChild(e)}}})(),a=(()=>{const e=document.body;return(()=>{let t=document.createElement("div");t.classList.add("main"),t.innerHTML="",e.appendChild(t)})(),{updateMain:e=>{document.querySelector(".main").innerHTML="",(()=>{let e=document.querySelector(".main"),t=document.createElement("div");t.classList.add("greeting"),t.innerHTML="Hello There!",e.appendChild(t)})(),(e=>{let t=document.querySelector(".main"),n=document.createElement("div");n.classList.add("show-task");let d=document.createElement("div");d.classList.add("task-name"),d.innerHTML=e.taskName;let a=document.createElement("div");a.classList.add("material-icons","md-clear"),a.innerHTML="clear_all";let l=document.createElement("ul");l.classList.add("task-todo");let o=e.todos;for(let e in o){let t=document.createElement("li"),n=document.createElement("div");n.classList.add("material-icons","md-radio"),o[e].done?(n.innerHTML="radio_button_checked",t.classList.add("done")):n.innerHTML="radio_button_unchecked";let d=document.createElement("span");if(d.classList.add("todos"),d.innerHTML=e,t.appendChild(n),t.appendChild(d),""!=o[e].date){let n=document.createElement("code");n.innerHTML=o[e].date,t.appendChild(n)}let a=document.createElement("div");a.classList.add("material-icons"),a.innerHTML="local_offer priority_high",o[e].priority>0?(a.classList.add("md-priority-green"),a.innerHTML="label",t.appendChild(a)):o[e].priority<0&&(a.classList.add("md-priority-red"),t.appendChild(a)),l.appendChild(t)}let r=document.createElement("li"),i=document.createElement("div");i.classList.add("add-task","material-icons"),i.innerHTML="add_circle_outline",r.appendChild(i),r.classList.add("add-todo"),l.appendChild(r),n.appendChild(d),n.appendChild(a),n.appendChild(l),t.appendChild(n)})(e)},dispInfo:(e,t)=>{e.querySelector("span").classList.add("todo-select");let n=document.createElement("div");n.classList.add("info");let d=document.createElement("div");d.classList.add("notes");let a=document.createElement("span");a.classList.add("notes-head"),a.innerHTML="Notes :";let l=document.createElement("span");l.classList.add("note"),""===t.notes?l.innerHTML=" oops no notes :(":l.innerHTML=" "+t.notes;let o=document.createElement("div");o.classList.add("priority");let r=document.createElement("span");r.classList.add("pri-head"),r.innerHTML="Priority :";let i=document.createElement("span");t.priority>0?(i.classList.add("pri-less"),i.innerHTML=" less important"):t.priority<0?(i.classList.add("pri-imp"),i.innerHTML=" Important!"):i.innerHTML=" No priority specified",d.appendChild(a),d.appendChild(l),o.appendChild(r),o.appendChild(i),n.appendChild(d),n.appendChild(o),e.appendChild(n)},toggleDone:(e,t)=>{e?(t.classList.remove("done"),t.querySelector(".md-radio").innerHTML="radio_button_unchecked"):(t.classList.add("done"),t.querySelector(".md-radio").innerHTML="radio_button_checked")},deleteDone:(e,t)=>{e.removeChild(t)}}})(),l=(()=>{const e=()=>{document.querySelector("#addTask").addEventListener("click",(()=>{let t=d.inputTask();t.addBtn.addEventListener("click",(()=>{t.input.value&&(d.tasks.push(t.input.value),d.createNav(),e())})),t.delBtn.addEventListener("click",(()=>{d.createNav(),e()}))})),(()=>{let t=document.querySelectorAll(".md-del");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{let a=parseInt(t[n].parentNode.id);d.tasks.splice(a,1),d.removeTask(t[n].parentNode),console.log(d.tasks),d.createNav(),e()}))})()};return{taskHandler:e}})(),o={addHandlers:()=>{(()=>{let e=document.querySelector(".show-task").querySelectorAll("li");for(let t=0;t<e.length-1;t++){let n=e[t].querySelector(".md-radio");console.log(n);let d=e[t].querySelector("span").innerHTML;n.addEventListener("click",(()=>{if("done"===e[t].className)return i.todos[d].done=!1,console.log(i.todos),void a.toggleDone(!0,e[t]);i.todos[d].done=!0,console.log(i.todos),a.toggleDone(!1,e[t])}))}})(),document.querySelector(".show-task").querySelector(".md-clear").addEventListener("click",(()=>{let e=(()=>{let e=document.querySelector(".main").querySelectorAll("li"),t=[];for(let n=0,d=0;n<e.length;n++)"done"===e[n].className&&(t[d]=e[n],d++);return t})();for(let t=0;t<e.length;t++){let n=e[t].querySelector("span").innerHTML;a.deleteDone(e[t].parentNode,e[t]),delete i.todos[n],console.log(i.todos)}})),(()=>{let e=document.querySelector(".show-task").querySelectorAll("span");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{let n=i.todos[e[t].innerHTML];if(e[t].parentNode.querySelector(".info"))return e[t].classList.remove("todo-select"),void e[t].parentNode.removeChild(e[t].parentNode.querySelector(".info"));a.dispInfo(e[t].parentNode,n)}))})()}},r={taskName:"Today",todos:{"Attend ME class":{notes:"1",date:"15 Oct",priority:1,done:!1},"Attend UP class":{notes:"2",date:"15 Oct",priority:0,done:!1},"Attend DBMS class":{notes:"3",date:"",priority:1,done:!0},"Attend A class":{notes:"4",date:"15 Oct",priority:-1,done:!0},"Attend B class":{notes:"",date:"",priority:0,done:!1}}};a.updateMain(r),d.createNav(),l.taskHandler(),o.addHandlers();const i=r}},t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={exports:{}};return e[d](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(49)})();