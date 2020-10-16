import navDom from "./navdom.js";
import mediator from "./mediator.js"
import objectFns from "./object.js"
const navButtons= (() => {
    const inpHandler = () => {
        const addTask = document.querySelector('#addTask');
        addTask.addEventListener('click', ()=>{
            let form = navDom.inputTask();
            form.addBtn.addEventListener('click', ()=>{
                if(form.input.value){
                    objectFns.addTasks(form.input.value);
                    mediator.navRefresh();//remove this
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
                objectFns.delTask(delbtns[i].previousSibling.textContent);
                navDom.removeTask(delbtns[i].parentNode);
            });
        }
    }
    const taskHandler = ()=>{
        inpHandler();
        delHandler();
    }
    return { taskHandler }
})();
export default navButtons;