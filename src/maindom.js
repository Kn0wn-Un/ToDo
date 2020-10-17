import date from 'date-and-time';
const mainDom = (()=>{
    const body = document.body;


    //create main div
    const createMain = () => {
        let main = document.createElement('div');   
        main.classList.add('main');
        main.innerHTML = '';
        body.appendChild(main);
    };


    //add greeting
    const addGreet = ()=>{
        let main = document.querySelector('.main');  
        let greet = document.createElement('div');
        greet.classList.add('greeting');
        greet.innerHTML = `Let's do something Today!`;
        main.appendChild(greet);
    };


    //displaying todos of tasks
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
                radio.innerHTML = 'check_circle';
                li.classList.add('done');
            }
            else    
                radio.innerHTML = 'radio_button_unchecked';
            let todo = document.createElement('span');
            todo.classList.add('todos');
            todo.innerHTML = i;
            li.appendChild(radio);
            li.appendChild(todo);
            if(todos[i]['date'] != ''){
                let d = document.createElement('code');
                let temp = new Date(todos[i]['date']);
                let forDate = date.format(temp, 'DD MMM');
                d.innerHTML = forDate;
                li.appendChild(d);
            }
            let pri = document.createElement('div');
            pri.classList.add('material-icons');
            pri.innerHTML = 'local_offer priority_high';
            if(todos[i]['priority'] === '1'){
                pri.classList.add('md-priority-green');
                pri.innerHTML = 'label'
                li.appendChild(pri);
            }
            else if(todos[i]['priority'] === '-1'){
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
        if (!(task['taskName'] === 'Today' ||
            task['taskName'] === 'Tomorrow' ||
            task['taskName'] === 'Upcoming')){
                ul.appendChild(li);
            }
        tasksDiv.appendChild(taskName);
        tasksDiv.appendChild(clear);
        tasksDiv.appendChild(ul);
        main.appendChild(tasksDiv);
    };


    //display extra info of task
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


    //toggle done and undone tasks
    const toggleDone = (isDone, li)=> {
        if(isDone){
            li.classList.remove('done');
            li.querySelector('.md-radio').innerHTML = 'radio_button_unchecked';
        }
        else{
            li.classList.add('done');
            li.querySelector('.md-radio').innerHTML = 'check_circle';
        }    
    };


    //remove done task
    const deleteDone = (par, li)=> {
        par.removeChild(li);
    };


    //function calling to change tasks
    const updateMain = (task)=>{
        let main = document.querySelector('.main');  
        main.innerHTML = '';
        addGreet();
        dispTask(task);
    };


    //display input form for new todo
    const dispForm = (task)=>{
        let li = task.querySelector('.add-todo');
        let todoInput = document.createElement('div');
        todoInput.classList.add('todo-input');

        let inputName = document.createElement('input');
        inputName.placeholder = 'I want to..';
        inputName.classList.add('input-name');
        let dateHead = document.createElement('div');
        dateHead.style.marginTop = '5px';
        dateHead.innerHTML = 'by, ';
        let inputDate = document.createElement('input');
        inputDate.classList.add('input-date');
        inputDate.type = 'date';
        let now = date.format(new Date(), 'YYYY-MM-DD'); 
        inputDate.min = now;

        let inputPri = document.createElement('select');
        inputPri.classList.add('input-pri');
        let highPri = document.createElement('option');
        highPri.innerHTML = 'High';
        highPri.value = '-1';
        inputPri.add(highPri);
        let lowPri = document.createElement('option');
        lowPri.innerHTML = 'Low';
        lowPri.value = '1';
        inputPri.add(lowPri);
        let noPri = document.createElement('option');
        noPri.innerHTML = 'No Priority';
        noPri.selected = true;
        noPri.value = '0';
        inputPri.add(noPri);

        let inputNote = document.createElement('textarea');
        inputNote.classList.add('input-note');
        inputNote.placeholder = 'Add Notes';

        let btn = document.createElement('div');
        btn.classList.add('btn');
        let add = document.createElement('div');
        add.innerHTML = 'add todo';
        add.classList.add('add-btn');
        let cancel = document.createElement('div');
        cancel.innerHTML = 'Cancel';
        cancel.classList.add('cancel-btn');
        btn.appendChild(add);
        btn.appendChild(cancel);
        todoInput.appendChild(inputName);
        todoInput.appendChild(dateHead);
        todoInput.appendChild(inputDate);
        todoInput.appendChild(inputPri);
        todoInput.appendChild(inputNote);
        todoInput.appendChild(btn);
        li.appendChild(todoInput);
        inputName.focus();
        return {add, cancel};
    }


    //get form data
    const getForm = ()=> {
        let todoInput = document.querySelector('.todo-input');
        let todoName = todoInput.querySelector('.input-name');
        if (todoName.value === '')  
        {
            todoName.classList.add('input-required');
            return '';
        }
        todoName = todoName.value;
        let todoDate = todoInput.querySelector('.input-date').value;
        if (!todoDate)  todoDate = '';
        let todoPri = todoInput.querySelector('.input-pri').value;
        let todoNotes = todoInput.querySelector('.input-note').value;
        todoNotes = todoNotes.replaceAll('\n', ' ');
        return {'name': todoName, 'date': todoDate, 'priority': todoPri, 'notes': todoNotes};
    };

    

    createMain();

    
    return {updateMain, dispInfo, toggleDone, deleteDone, dispForm, getForm}
})();
export default mainDom;