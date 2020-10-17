import mainDom from "./maindom.js";
import objectFns from "./object.js";
import handler from './mediator.js';

const mainInput = (() => {
    const getNotDone = ()=> {
        let main = document.querySelector(".main");
        let li = main.querySelectorAll('li');
        let notDone = [];
        for(let i =0, j = 0; i < li.length; i++){
            if(li[i].className === 'done' || li[i].className === 'add-todo')    
                continue;
            notDone[j] = li[i];
            j++;
        }
        return notDone;
    };
    //array of done todos(li)
    const getDone = ()=> {
        let main = document.querySelector(".main");
        let li = main.querySelectorAll('li');
        let done = [];
        for(let i =0, j = 0; i < li.length; i++){
            if(li[i].className === 'done'){
                done[j] = li[i];
                j++;
            }
        }
        return done;
    };
    //handles click of done and undone
    const handleCheck = (task, taskObj)=> {
        let li = task.querySelectorAll('li');
        let length = li.length - 1;
        if(taskObj['taskName'] === 'Today' ||
            taskObj['taskName'] === 'Tomorrow' ||
            taskObj['taskName'] === 'Upcoming')
                length = li.length;
        for(let i = 0; i < length; i++){
            let checkBox = li[i].querySelector('.md-radio');
            let todo = li[i].querySelector('span').innerHTML;
            checkBox.addEventListener('click', ()=>{
               if(li[i].className === 'done') {
                    objectFns.markDone(false, taskObj, todo);
                    mainDom.toggleDone(true, li[i]);
                    return;
                }
                else {
                    objectFns.markDone(true, taskObj, todo);
                    mainDom.toggleDone(false, li[i]);
                } 
            });
        }
    };
    //handles clear all button
    const handleClear = (task, taskObj)=>{
        let clear = task.querySelector('.md-clear');
        clear.addEventListener('click', ()=>{
            let done = getDone();
            for(let i = 0; i < done.length; i++){
                let todo = done[i].querySelector('span').innerHTML;
                mainDom.deleteDone(done[i].parentNode, done[i]);
                objectFns.delObj(taskObj, todo);
            }
        });
    };
    //handles click of todo
    const showTodo = (task, taskObj)=> {
        let todos = task.querySelectorAll('span');
        for(let i = 0; i < todos.length; i++){
            todos[i].addEventListener('click', ()=>{
                let obj = taskObj['todos'][todos[i].innerHTML];
                if(todos[i].parentNode.querySelector('.info')) {
                    todos[i].classList.remove('todo-select');
                    todos[i].parentNode.removeChild(
                        todos[i].parentNode.querySelector('.info')
                    );
                    return;
                }
                mainDom.dispInfo(todos[i].parentNode, obj);
            });
        }
    };
    //handles add and cancel buttons
    const addTodo = (task, taskObj)=>{
        let addLi = task.querySelector('.add-todo');
        if (!addLi) return;
        let add = task.querySelector('.add-task');
        add.addEventListener('click', ()=>{
            add.style.visibility = 'hidden';
            let btns = mainDom.dispForm(task);
            btns.cancel.addEventListener('click', ()=>{
                addLi.removeChild(addLi.querySelector('.todo-input'));
                add.style.visibility = 'visible';
            });
            btns.add.addEventListener('click', ()=>{
                let newTodo = mainDom.getForm();
                if(newTodo === '')  return;
                objectFns.addObj(taskObj['taskName'], newTodo);
                handler.mainRefresh(taskObj);
            });
        });
    }
    //combined 
    const addHandlers = ()=>{
        let task = document.querySelector('.show-task');
        let taskName = task.querySelector('.task-name').innerHTML;
        let taskObj = objectFns.getTask(taskName);
        handleCheck(task, taskObj);
        handleClear(task, taskObj);
        showTodo(task, taskObj);
        addTodo(task, taskObj);
    };
    return {addHandlers}
})();
export default mainInput;