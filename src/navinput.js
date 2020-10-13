import navDom from "./navdom.js";
const navInput = (() => {
    const addHandler = () => {
        const addTask = document.querySelector('#addTask');
        addTask.addEventListener('click', ()=>{
            let form = navDom.inputTask();
            console.log(form);
            console.log(form.btn);
            console.log(form.input);
            /*if(!task)   return;
            navDom.tasks.push(task);*/
        });
    };
    return { addHandler }
})();
export default navInput;