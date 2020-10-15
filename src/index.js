import navDom from "./navdom.js";
import mainDom from "./maindom.js";
import navButtons from "./navinput";
import mainInput from "./maininput";
const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': {'notes': '', 'date':'15 Oct', 'priority': 1, 'done':false} , 
        'Attend UP class':{'notes': '', 'date':'15 Oct', 'priority': 0, 'done':false}, 
        'Attend DBMS class': {'notes': '', 'date':'15 Oct', 'priority': 1, 'done':true}, 
        'Attend CN class': {'notes': '', 'date':'15 Oct', 'priority': -1, 'done':true},
    }
};
mainDom.createMain();
mainDom.updateMain(todayTodos);
navDom.createNav();
navButtons.taskHandler();
mainInput.handleCheck();
export default todayTodos;