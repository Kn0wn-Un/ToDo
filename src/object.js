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
        tasks[name]['todos'][todo['name']] = temp;
        if (name === 'Today' ||
            name === 'Tomorrow' ||
            name === 'Upcoming')
            return;
        initDays();
    };
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
        console.log(tasks);
        initDays();
    }
    const setToday = () => {
        for(let i in tasks){
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let todaysDate = new Date();
                if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 'done': todo['done']};
                    addObj('Today', newObj);
                }
            }
        }
    }
    const setTomorrow = () => {
        for(let i in tasks){
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let today = new Date();
                let tmr = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                if(inputDate.setHours(0,0,0,0) == tmr.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 'done': todo['done']};
                    addObj('Tomorrow', newObj);
                }
            }
        }
    }
    const setUpcoming = () => {
        for(let i in tasks){
            for(let j in tasks[i]['todos']){
                let todo = tasks[i]['todos'][j];
                let inputDate = new Date(todo['date']);
                let today = new Date();
                let tmr = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                if(inputDate.setHours(0,0,0,0) > tmr.setHours(0,0,0,0)) {
                    let newObj = {'name': j, 'notes': todo['notes'], 
                    'date': todo['date'], 'priority': todo['priority'], 'done': todo['done']};
                    addObj('Upcoming', newObj);
                }
            }
        }
    }
    const initDays = () => {
        setToday();
        setTomorrow();
        setUpcoming();
    }
    return {addObj, addTasks, delTask, getTask, getTasksArr, initDays}
})();
export default objectFns;