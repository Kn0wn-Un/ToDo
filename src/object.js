let objectFns = (() => {
    let tasks = {};
    const getTasksArr = ()=>{ 
        let arr = [];
        for(let i in tasks){
            arr.push(i);
        } 
        return arr;
    }
    const getTask = (name)=>{
        return tasks[name];
    }
    const addObj = (name, todo)=> {
        let temp = {};
        temp['notes'] = todo['notes']; 
        temp['date'] = todo['date'];
        temp['priority'] = todo['priority'];     
        temp['done'] = todo['done'];
        if (todo['from'])   temp['from'] = todo['from'];
        tasks[name]['todos'][todo['name']] = temp;
        if (name === 'Today' ||
            name === 'Tomorrow' ||
            name === 'Upcoming')
            return;
        initDays();
    };
    const delObj = (name, todo)=> {
        if (name['taskName'] === 'Today' ||
            name['taskName'] === 'Tomorrow' ||
            name['taskName'] === 'Upcoming'){
                name = getTask(name['todos'][todo]['from']);
            }
        delete name['todos'][todo];
        initDays();
    }
    const addTasks = (name) => {
        let temp = {};
        name =  name.charAt(0).toUpperCase() + name.slice(1);
        temp['taskName'] = name;
        temp['todos'] = {};
        tasks[name] = temp;
    }
    const delTask = (name) => {
        for(let i in tasks) {
            if(i === name)
                delete tasks[i];
        }
        initDays();
    }
    const setToday = () => {
        addTasks('Today');
        for(let i in tasks){
            if (i === 'Today' ||
            i === 'Tomorrow' ||
            i === 'Upcoming')
            continue;
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let todaysDate = new Date();
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 
                    'done': todo['done'], 'from': i};
                    addObj('Today', newObj);
                }
            }
        }
    }
    const setTomorrow = () => {
        addTasks('Tomorrow');
        for(let i in tasks){
            if (i === 'Today' ||
            i === 'Tomorrow' ||
            i === 'Upcoming')
            continue;
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let today = new Date();
                let tmr = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                if(inputDate.setHours(0,0,0,0) == tmr.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 
                    'done': todo['done'], 'from': i};
                    addObj('Tomorrow', newObj);
                }
            }
        }
    }
    const setUpcoming = () => {
        addTasks('Upcoming');
        for(let i in tasks){
            if (i === 'Today' ||
            i === 'Tomorrow' ||
            i === 'Upcoming')
            continue;
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let today = new Date();
                let tmr = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                if(inputDate.setHours(0,0,0,0) > tmr.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 
                    'done': todo['done'], 'from': i};
                    addObj('Upcoming', newObj);
                }
            }
        }
    }
    const markDone = (isDone, name, todo)=>{
        if (name['taskName'] === 'Today' ||
        name['taskName'] === 'Tomorrow' ||
        name['taskName'] === 'Upcoming'){
            name = getTask(name['todos'][todo]['from']);
        }
        name['todos'][todo]['done'] = isDone;
        initDays();
    }
    const addEntry = () => {
        let temp = {};
        for(let i in tasks){
            if(i === 'Today' ||
            i === 'Tomorrow' ||
            i === 'Upcoming'){
                continue;
            }
            temp[tasks[i]['taskName']] = tasks[i];
        }
        localStorage.setItem("userTodo", JSON.stringify(temp));
    };
    const getStored = () => {
        tasks = JSON.parse(localStorage.getItem("userTodo"));
        initDays();
    };
    const initDays = () => {
        setToday();
        setTomorrow();
        setUpcoming();
        addEntry();
    }
    return {addObj, delObj, addTasks, delTask, 
        getTask, getTasksArr, markDone, initDays,
        addEntry, getStored}
})();
export default objectFns;