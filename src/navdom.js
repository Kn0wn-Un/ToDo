const navDom = (()=>{
    let tasks = ['Project', 'Assignment', 'Trip', 'Holidays'];
    const days = ['Today', 'Tomorrow', 'Upcoming'];
    const body = document.body;
    const nav = document.querySelector('.nav');


    const addNav = (daysList, tasksList) => {
        nav.innerHTML = '';
        nav.appendChild(daysList);
        nav.appendChild(tasksList); 
        let addTask = document.createElement('div');
        addTask.id = 'addTask'
        addTask.classList.add('add-task', 'material-icons', 'md-32');
        addTask.innerHTML = 'add_circle_outline';
        nav.appendChild(addTask);
        body.appendChild(nav);
    };
    


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
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            if(isTask){
                let delBtn = document.createElement('span');
                delBtn.innerHTML = 'delete_outline';
                delBtn.classList.add('material-icons', 'md-del');
                li.appendChild(delBtn);
            }
            ul.appendChild(li);
        }
        return ul;
    };



    const createNav = () => {
        let daysList = createLists(false, days);
        let tasksList = createLists(true, tasks);
        addNav(daysList, tasksList);
    };



    const inputTask = ()=> {
        let taskList = document.querySelector('.tasks-list');
        let input = document.createElement('input');
        let btn = document.createElement('div');
        btn.innerHTML = "Add";
        taskList.appendChild(input);
        taskList.appendChild(btn);
        return {btn , input};
    };

    
    return {createNav, inputTask, tasks}
})();
export default navDom;