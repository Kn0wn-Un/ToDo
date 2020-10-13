const mainDom = (()=>{
    const tmrTodos = {'taskName': 'Tomorrow',
        'todos': {  'Attend ME class': true, 
                    'Attend UP class':false, 
                    'Attend DBMS class': false, 
                    'Attend CN class': false,
                }
            };
    const body = document.body;
    const createMain = () => {
        let main = document.createElement('div');   
        main.classList.add('main');
        main.innerHTML = '';
        body.appendChild(main);
    };
    const addGreet = ()=>{
        let main = document.querySelector('.main');  
        let greet = document.createElement('div');
        greet.classList.add('greeting');
        greet.innerHTML = 'Hello There!';
        main.appendChild(greet);
    };
    const dispTask = (task) => {
        let main = document.querySelector('.main');
        let tasksDiv = document.createElement('div');
        tasksDiv.classList.add('show-task'); 
        let taskName = document.createElement('div');
        taskName.classList.add('task-name');
        taskName.innerHTML = task['taskName'];
        let clear = document.createElement('div');
        clear.classList.add('material-icons', 'md-clear');
        clear.innerHTML = 'clear_all';
        let ul = document.createElement('ul');
        ul.classList.add('task-todo');
        let todos = task['todos'];
        for(let i in todos){
            let li = document.createElement('li');
            let radio = document.createElement('div');
            radio.classList.add('material-icons', 'md-radio');
            if(todos[i]){
                radio.innerHTML = 'radio_button_checked';
                li.classList.add('done');
            }
            else    
                radio.innerHTML = 'radio_button_unchecked';
            let todo = document.createElement('span');
            todo.classList.add('todos');
            todo.innerHTML = i;
            li.appendChild(radio);
            li.appendChild(todo);
            ul.appendChild(li);
        }
        let li = document.createElement('li');
        let addTodo = document.createElement('div');
        addTodo.classList.add('add-task', 'material-icons');
        addTodo.innerHTML = 'add_circle_outline';
        li.appendChild(addTodo);
        ul.appendChild(li);
        tasksDiv.appendChild(taskName);
        tasksDiv.appendChild(clear);
        tasksDiv.appendChild(ul);
        main.appendChild(tasksDiv);
    };
    const updateMain = (task)=>{
        let main = document.querySelector('.main');  
        main.innerHTML = '';
        addGreet();
        dispTask(task);
        dispTask(tmrTodos);
    };
    return {createMain, updateMain}
})();
export default mainDom;