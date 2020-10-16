import handler from './mediator.js';
const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': {'notes': '1', 'date':'2020-10-15', 'priority': '1', 'done':false} , 
        'Attend UP class':{'notes': '2', 'date':'2020-10-15', 'priority': '0', 'done':false}, 
        'Attend DBMS class': {'notes': '3', 'date':'', 'priority': '0', 'done':true}, 
        'Attend A class': {'notes': '4', 'date':'2020-10-15', 'priority': '-1', 'done':true},
        'Attend B class':{'notes': '', 'date':'', 'priority': '-1', 'done':false}, 
    }
};
handler.navRefresh();
handler.mainRefresh(todayTodos);
export default todayTodos;