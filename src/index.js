import navDom from "./navdom.js";
import mainDom from "./maindom.js";
import navButtons from "./navinput";
import mainInput from "./maininput";
const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': {'notes': '1', 'date':'15 Oct', 'priority': '1', 'done':false} , 
        'Attend UP class':{'notes': '2', 'date':'15 Oct', 'priority': '0', 'done':false}, 
        'Attend DBMS class': {'notes': '3', 'date':'', 'priority': '0', 'done':true}, 
        'Attend A class': {'notes': '4', 'date':'15 Oct', 'priority': '-1', 'done':true},
        'Attend B class':{'notes': '', 'date':'', 'priority': '-1', 'done':false}, 
    }
};
mainDom.updateMain(todayTodos);
navDom.createNav();
navButtons.taskHandler();
mainInput.addHandlers();
export default todayTodos;