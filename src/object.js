let objectFns = (() => {
    const addObj = (task, todo)=> {
        console.log(task);
        let temp = {};
        temp['notes'] = todo['notes']; 
        temp['date'] = todo['date'];
        temp['priority'] = todo['priority'];     
        task['todos'][todo['name']] = temp;
    };
    return {addObj}
})();
export default objectFns;