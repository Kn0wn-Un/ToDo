const navDom = (()=>{
    const tasks = ['Project', 'Assignment', 'Trip', 'Holidays'];
    const days = ['Today', 'Tomorrow', 'Upcoming'];
    const body = document.body;
    const addNav = (daysList, tasksList) => {
       let nav = document.createElement('div');
       nav.classList.add('nav');
       nav.appendChild(daysList);
       nav.appendChild(tasksList); 
       let addTask = document.createElement('div');
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
            strong.innerHTML = 'Tasks';
        }
        else{
            ul.classList.add('days-list');
            cal.innerHTML='calendar_today';
            strong.innerHTML = 'Days';
        }
        lh.appendChild(cal);
        lh.appendChild(strong);
        for(let i = 0; i < arr.length(); i++){
            let li = document.createElement('li');
            li.innerHTML = arr[i];
            if(isTask){
                let delBtn = document.createElement('span');
                delBtn.classList.add('material-icons', 'md-del');
                li.appendChild(delBtn);
            }
            ul.appendChild(li);
        }
    };
    const createNav = () => {
        let daysList = createLists(false, days);
        let tasksList = createLists(true, tasks);
        addNav(daysList, tasksList);
    };
})();
export default navDom.createNav();