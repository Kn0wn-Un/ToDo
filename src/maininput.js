import todayTodos from './index.js';
import mainDom from "./maindom.js";
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
    const markDone = ()=> {
        let notDone = getNotDone();
        for(let i = 0; i < notDone.length; i++){
            let checkBox = notDone[i].querySelector('div');
            let todo = notDone[i].querySelector('span').innerHTML;
            checkBox.addEventListener('click', ()=>{
                todayTodos['todos'][todo]['done'] = true;
                mainDom.toggleDone(false, checkBox.parentNode);//1
                handleCheck(); //3,  bind these 3
            });
        }
    };
    const undoDone = ()=>{
        let done = getDone();
        for(let i = 0; i < done.length; i++){
            let checkBox = done[i].querySelector('div');
            let todo = done[i].querySelector('span').innerHTML;
            checkBox.addEventListener('click', ()=>{
                todayTodos['todos'][todo]['done'] = false;
                mainDom.toggleDone(true, checkBox.parentNode);//1
                handleCheck(); //2,  bind these 3
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
                delete todayTodos['todos'][todo];
                console.log(todayTodos['todos']);
            }
            mainDom.updateMain(todayTodos);//1
            handleCheck(); //2,  bind these 3
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
                    handleCheck();
                    return;
                }
                mainDom.dispInfo(todos[i].parentNode, obj);//remove obj dependency
                handleCheck();
            });
        }
    };
    const handleCheck = ()=>{
        markDone();
        undoDone();
        handleClear();
        showTodo();
    };
    return {handleCheck}
})();
export default mainInput;