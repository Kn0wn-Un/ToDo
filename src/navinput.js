import navDom from "./navdom.js";
import mediator from "./mediator.js"
import objectFns from "./object.js";
const navButtons= (() => {
    //shows todos of tasks in main on click
    const dispTasks = () =>{
        const nav = document.querySelector('.nav');
        const lis = nav.querySelectorAll('li');
        for(let i = 0; i < lis.length; i++){
            let s = lis[i].querySelector('.nav-task');
            s.addEventListener('click', ()=>{
                let task = objectFns.getTask(s.innerHTML);
                mediator.mainRefresh(task);
           });
        }
    };
    //handles form input
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
    //deletes tasks from nav
    const delHandler = () => {
        let delbtns = document.querySelectorAll('.md-del');
        for(let i = 0; i < delbtns.length; i++){
            delbtns[i].addEventListener('click', ()=>{
                objectFns.delTask(delbtns[i].previousSibling.innerHTML);
                navDom.removeTask(delbtns[i].parentNode);
                if (i === 0)
                    mediator.fullRefresh(objectFns.getTask('Today'));
                else        
                    mediator.fullRefresh(objectFns.getTask(delbtns[i-1].previousSibling.innerHTML));
            });
        }
    }
    //combined
    const taskHandler = ()=>{
        dispTasks();
        inpHandler();
        delHandler();
    }
    return { taskHandler }
})();
export default navButtons;