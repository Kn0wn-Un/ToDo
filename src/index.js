import handler from './mediator.js';
import objectFns from './object.js';
import date from 'date-and-time';
/*const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': {'notes': '1', 'date':'2020-10-17', 'priority': '1', 'done':false} , 
        'Attend UP class':{'notes': '2', 'date':'2020-10-17', 'priority': '0', 'done':false}, 
        'Attend DBMS class': {'notes': '3', 'date':'', 'priority': '0', 'done':true}, 
        'Attend A class': {'notes': '4', 'date':'2020-10-17', 'priority': '-1', 'done':true},
        'Attend B class':{'notes': '', 'date':'', 'priority': '-1', 'done':false}, 
    }
};*/
const addEx = ()=> {
    objectFns.addTasks('Shopping List');
    objectFns.addObj('Shopping List', {'name': 'Milk', 'notes': 'Check expiration date', 'date':date.format(new Date(), 'YYYY-MM-DD'), 'priority': '0', 'done':false});
    objectFns.addObj('Shopping List', {'name': 'Eggs', 'notes': 'Brown eggs', 'date':date.format(new Date(), 'YYYY-MM-DD'), 'priority': '0', 'done':true});
    objectFns.addObj('Shopping List', {'name': 'Wheat', 'notes': '', 'date':date.format(new Date(), 'YYYY-MM-DD'), 'priority': '0', 'done':false});
    objectFns.addObj('Shopping List', {'name': 'Chocolate', 'notes': '', 'date':date.format(new Date(), 'YYYY-MM-DD'), 'priority': '-1', 'done':false});
    objectFns.addTasks('Gift');
    objectFns.addObj('Gift', {'name': 'Buy gift for me', 'notes': 'Cause no one will buy me', 'date':'2020-12-31', 'priority': '1', 'done':false});
    objectFns.getStored();
    handler.navRefresh();
    handler.mainRefresh(objectFns.getTask('Shopping List'));
}
const dispData = ()=> {
    objectFns.getStored();
    handler.navRefresh();
    handler.mainRefresh(objectFns.getTask('Today'));
}
if (localStorage.getItem("userTodo")) dispData();   
else    addEx();