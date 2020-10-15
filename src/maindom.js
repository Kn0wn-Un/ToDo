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
            if(todos[i].done){
                radio.innerHTML = 'radio_button_checked';
                li.classList.add('done');
            }
            else    
                radio.innerHTML = 'radio_button_unchecked';
            let todo = document.createElement('span');
            todo.classList.add('todos');
            todo.innerHTML = i;
            let date = document.createElement('code');
            date.innerHTML = todos[i]['date'];
            li.appendChild(radio);
            li.appendChild(todo);
            li.appendChild(date);
            let pri = document.createElement('div');
            pri.classList.add('material-icons');
            pri.innerHTML = 'local_offer priority_high';
            if(todos[i]['priority'] > 0){
                pri.classList.add('md-priority-green');
                pri.innerHTML = 'label'
                li.appendChild(pri);
            }
            else if(todos[i]['priority'] < 0){
                pri.classList.add('md-priority-red');
                li.appendChild(pri);
            }
            ul.appendChild(li);
        }
        let li = document.createElement('li');
        let addTodo = document.createElement('div');
        addTodo.classList.add('add-task', 'material-icons');
        addTodo.innerHTML = 'add_circle_outline';
        li.appendChild(addTodo);
        li.classList.add('add-todo');
        ul.appendChild(li);
        tasksDiv.appendChild(taskName);
        tasksDiv.appendChild(clear);
        tasksDiv.appendChild(ul);
        main.appendChild(tasksDiv);
    };



    const dispInfo = (li, todo)=> {
        let td = li.querySelector('span');
        td.classList.add('todo-select'); 
        let info = document.createElement('div');
        info.classList.add('info');
        let notes = document.createElement('div');
        notes.classList.add('notes');
        let noteHead = document.createElement('span');
        noteHead.classList.add('notes-head');
        noteHead.innerHTML = 'Notes :';
        let note = document.createElement('span');
        note.classList.add('note');
        if(todo['notes'] === '')
            note.innerHTML = ' oops no notes :(';
        else 
            note.innerHTML = ' ' + todo['notes'];
        let priority = document.createElement('div');
        priority.classList.add('priority');
        let priHead = document.createElement('span');
        priHead.classList.add('pri-head');
        priHead.innerHTML = 'Priority :';
        let pri = document.createElement('span');
        if(todo['priority'] > 0){
            pri.classList.add('pri-less');
            pri.innerHTML = ' less important';
        }
        else if(todo['priority'] < 0){
            pri.classList.add('pri-imp');
            pri.innerHTML = ' Important!';
        }
        else
            pri.innerHTML = ' No priority specified';
        notes.appendChild(noteHead);
        notes.appendChild(note);
        priority.appendChild(priHead);
        priority.appendChild(pri);
        info.appendChild(notes);
        info.appendChild(priority);
        li.appendChild(info);
    };



    const toggleDone = (isDone, li)=> {
        if(isDone)  li.classList.remove('done');
        else    li.classList.add('done');
    };

    

    const updateMain = (task)=>{
        let main = document.querySelector('.main');  
        main.innerHTML = '';
        addGreet();
        dispTask(task);
    };


    
    return {createMain, updateMain, dispInfo, toggleDone}
})();
export default mainDom;