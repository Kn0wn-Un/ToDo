import navDom from "./navdom.js";
const navButtons= (() => {
    const inpHandler = () => {
        const addTask = document.querySelector('#addTask');
        addTask.addEventListener('click', ()=>{
            let form = navDom.inputTask();
            form.addBtn.addEventListener('click', ()=>{
                if(form.input.value){
                    navDom.tasks.push(form.input.value);
                    navDom.createNav();//this and 
                    taskHandler();//this, bind
                }
            });
            form.delBtn.addEventListener('click', ()=>{
                    navDom.createNav();//this and 
                    taskHandler();// this, bind
            });
        });
    };
    const delHandler = () => {
        let delbtns = document.querySelectorAll('.md-del');
        for(let i = 0; i < delbtns.length; i++){
            delbtns[i].addEventListener('click', ()=>{
                let id = parseInt(delbtns[i].parentNode.id);
                navDom.tasks.splice(id, 1);
                navDom.removeTask(delbtns[i].parentNode);
                console.log(navDom.tasks);
                navDom.createNav();//this and 
                taskHandler();//this, bind
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