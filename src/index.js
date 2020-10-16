import handler from './mediator.js';
import objectFns from './object.js';
const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': {'notes': '1', 'date':'2020-10-17', 'priority': '1', 'done':false} , 
        'Attend UP class':{'notes': '2', 'date':'2020-10-17', 'priority': '0', 'done':false}, 
        'Attend DBMS class': {'notes': '3', 'date':'', 'priority': '0', 'done':true}, 
        'Attend A class': {'notes': '4', 'date':'2020-10-17', 'priority': '-1', 'done':true},
        'Attend B class':{'notes': '', 'date':'', 'priority': '-1', 'done':false}, 
    }
};
objectFns.addTasks('Online classes');
objectFns.addTasks('Today');
objectFns.addTasks('Tomorrow');
objectFns.addTasks('Upcoming');
objectFns.addObj('Online classes', {'name': 'Attend ME class', 'notes': 'ME class', 'date':'2020-10-17', 'priority': '0', 'done':true});
objectFns.addObj('Online classes', {'name': 'Attend UP class', 'notes': '', 'date':'2020-10-19', 'priority': '1', 'done':false});
objectFns.addObj('Online classes', {'name': 'Attend DBMS class', 'notes': 'wewaraw ', 'date':'2020-10-18', 'priority': '-1', 'done':false});
objectFns.addObj('Online classes', {'name': 'Attend CN class', 'notes': '1', 'date':'2020-10-17', 'priority': '0', 'done':false});
//objectFns.setToday();
handler.navRefresh();
handler.mainRefresh(objectFns.getTask('Today'));
export default todayTodos;