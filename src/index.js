import handler from './mediator.js';
import objectFns from './object.js';
import date from 'date-and-time';
//add example task
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
//initialise if all stored data exists
const dispData = ()=> {
    objectFns.getStored();
    handler.navRefresh();
    handler.mainRefresh(objectFns.getTask('Today'));
}
//check for stored data
if (localStorage.getItem("userTodo")) dispData();   
else    addEx();