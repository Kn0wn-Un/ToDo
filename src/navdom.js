import objectFns from './object.js';
const navDom = (()=>{
    const days = ['Today', 'Tomorrow', 'Upcoming'];
    const body = document.body;
    const nav = document.querySelector('.nav');

    
    //adds tasks and days to nav
    const addNav = (daysList, tasksList) => {
        nav.innerHTML = '';
        nav.appendChild(daysList);
        nav.appendChild(tasksList); 
        let addTask = document.createElement('div');
        addTask.id = 'addTask'
        addTask.classList.add('add-task', 'material-icons', 'md-32');
        addTask.innerHTML = 'add_circle_outline';
        nav.appendChild(addTask);
        let link = document.createElement('a');
        let git = document.createElement("img");
        git.style.alt = "View source on GitHub";
        git.src = "https://pngimg.com/uploads/github/github_PNG15.png";
        link.href="#";
        link.appendChild(git);
        nav.appendChild(link);
        body.appendChild(nav);
    };
    

    //creates lists for both days and tasks
    const createLists = (isTask, arr) => {
        let ul = document.createElement('ul');
        let lh = document.createElement('lh');
        let cal = document.createElement('span');
        cal.classList.add('material-icons', 'md-lh');
        let strong = document.createElement('strong');
        if(isTask){
            ul.classList.add('tasks-list');
            cal.innerHTML='all_inbox';
            strong.innerHTML = ' Tasks';
        }
        else{
            ul.classList.add('days-list');
            cal.innerHTML='calendar_today';
            strong.innerHTML = ' Days';
        }
        lh.appendChild(cal);
        lh.appendChild(strong);
        ul.appendChild(lh);
        for(let i = 0; i < arr.length; i++){
            if (isTask && arr[i] === 'Today') continue;
            if (isTask && arr[i] === 'Tomorrow') continue;
            if (isTask && arr[i] === 'Upcoming') continue;
            let li = document.createElement('li');
            let tName = document.createElement('span');
            tName.classList.add('nav-task');
            tName.innerHTML = arr[i];
            li.appendChild(tName);
            if(isTask){
                let delBtn = document.createElement('span');
                delBtn.innerHTML = 'delete_outline';
                delBtn.classList.add('material-icons', 'md-del');
                li.id = i.toString();
                li.appendChild(delBtn);
            }
            ul.appendChild(li);
        }
        return ul;
    };


    //combines creating list
    const createNav = () => {
        let daysList = createLists(false, days);
        let tasksList = createLists(true, objectFns.getTasksArr());
        addNav(daysList, tasksList);
    };


    //form to input new task
    const inputTask = ()=> {
        let taskList = document.querySelector('.tasks-list');
        let input = document.createElement('input');
        let addBtn = document.createElement('div');
        let addTask = document.querySelector('#addTask');
        addTask.style.visibility = 'hidden';
        addBtn.classList.add('material-icons', 'navinput');
        addBtn.innerHTML = "check";
        let delBtn = document.createElement('span');
        delBtn.classList.add('material-icons', 'navinput');
        delBtn.innerHTML = "clear";
        taskList.appendChild(input);
        taskList.appendChild(addBtn);
        taskList.appendChild(delBtn);
        input.focus();
        return {addBtn,  delBtn, input};
    };


    //removes form from nav
    const removeInput = ()=>{
        let taskList = document.querySelector('.tasks-list');
        let input = taskList.querySelector('input');
        taskList.removeChild(input);
        let addBtn = taskList.querySelector('div');
        taskList.removeChild(addBtn);
        let delBtn = taskList.querySelector('.navinput');
        taskList.removeChild(delBtn);
        let addTask = document.querySelector('#addTask');
        addTask.style.visibility = 'visible';
    }

    
    //removes task from nav
    const removeTask = (li) => {
        let taskList = document.querySelector('.tasks-list');
        taskList.removeChild(li);
    }
    return {createNav, inputTask, removeTask, removeInput}
})();
export default navDom;