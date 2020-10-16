import todayTodos from "./index.js";
import mainDom from "./maindom.js";
import objectFns from "./object.js"
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
    const handleCheck = ()=> {
        let task = document.querySelector(".show-task");
        let li = task.querySelectorAll('li');
        for(let i = 0; i < li.length - 1; i++){
            let checkBox = li[i].querySelector('.md-radio');
            console.log(checkBox);
            let todo = li[i].querySelector('span').innerHTML;
            checkBox.addEventListener('click', ()=>{
               if(li[i].className === 'done') {
                    todayTodos['todos'][todo]['done'] = false;
                    console.log(todayTodos['todos']);
                    mainDom.toggleDone(true, li[i]);
                    return;
                }
                else {
                    todayTodos['todos'][todo]['done'] = true;
                    console.log(todayTodos['todos']);
                    mainDom.toggleDone(false, li[i]);
                } 
            });
        }
    };
    const handleClear = ()=>{
        let task = document.querySelector('.show-task');
        let clear = task.querySelector('.md-clear');
        clear.addEventListener('click', ()=>{
            let done = getDone();
            for(let i = 0; i < done.length; i++){
                let todo = done[i].querySelector('span').innerHTML;
                mainDom.deleteDone(done[i].parentNode, done[i]);
                delete todayTodos['todos'][todo];
                console.log(todayTodos['todos']);
            }
        });
    };
    const showTodo = ()=> {
        let task = document.querySelector('.show-task');
        let todos = task.querySelectorAll('span');
        for(let i = 0; i < todos.length; i++){
            todos[i].addEventListener('click', ()=>{
                let obj = todayTodos['todos'][todos[i].innerHTML];
                if(todos[i].parentNode.querySelector('.info')) {
                    todos[i].classList.remove('todo-select');
                    todos[i].parentNode.removeChild(
                        todos[i].parentNode.querySelector('.info')
                    );
                    return;
                }
                mainDom.dispInfo(todos[i].parentNode, obj);//remove obj dependency
            });
        }
    };
    const addTodo = ()=>{
        let task = document.querySelector('.show-task');
        let addLi = task.querySelector('.add-todo');
        let taskName = task.querySelector('.task-name').innerHTML;
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
                objectFns.addObj(todayTodos, newTodo);
                console.log(todayTodos);
                //addLi.removeChild(addLi.querySelector('.todo-input'));
                //add.style.visibility = 'visible';
                mainDom.updateMain(todayTodos);
            });
        });
    }
    const addHandlers = ()=>{
        handleCheck();
        handleClear();
        showTodo();
        addTodo();
    };
    return {addHandlers}
})();
export default mainInput;