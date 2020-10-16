import navDom from "./navdom.js";
import mediator from "./mediator.js"
import objectFns from "./object.js"
const navButtons= (() => {
    const dispTasks = () =>{
        const nav = document.querySelector('.nav');
        const lis = nav.querySelectorAll('li');
        for(let i = 0; i < lis.length; i++){
           lis[i].addEventListener('click', ()=>{
                let task = lis[i].querySelector('span');
                task = objectFns.getTask(task.innerHTML);
                mediator.mainRefresh(task);
           });
        }
    }
    const inpHandler = () => {
        const addTask = document.querySelector('#addTask');
        addTask.addEventListener('click', ()=>{
            let form = navDom.inputTask();
            form.addBtn.addEventListener('click', ()=>{
                if(form.input.value){
                    objectFns.addTasks(form.input.value);
                    mediator.navRefresh();
                }
            });
            form.delBtn.addEventListener('click', ()=>{
                navDom.removeInput();
            });
        });
    };
    const delHandler = () => {
        let delbtns = document.querySelectorAll('.md-del');
        for(let i = 0; i < delbtns.length; i++){
            delbtns[i].addEventListener('click', ()=>{
                mediator.mainRefresh(objectFns.getTask('Today'));
                objectFns.delTask(delbtns[i].previousSibling.textContent);
                navDom.removeTask(delbtns[i].parentNode);
            });
        }
    }
    const taskHandler = ()=>{
        dispTasks();
        inpHandler();
        delHandler();
    }
    return { taskHandler }
})();
export default navButtons;