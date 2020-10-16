let objectFns = (() => {
    let tasks = {};
    const getTasks = ()=>{ 
        let arr = [];
        for(let i in tasks){
            arr.push(i);
        } 
        return arr;
    }
    const addObj = (task, todo)=> {
        console.log(task);
        let temp = {};
        temp['notes'] = todo['notes']; 
        temp['date'] = todo['date'];
        temp['priority'] = todo['priority'];     
        task['todos'][todo['name']] = temp;
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
    }
    return {addObj, addTasks, delTask, getTasks}
})();
export default objectFns;