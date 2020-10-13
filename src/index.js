import navDom from "./navdom.js";
import mainDom from "./maindom.js";
import navButtons from "./navinput"
const todayTodos = {'taskName': 'Today',
'todos': {  'Attend ME class': false, 
        'Attend UP class':false, 
        'Attend DBMS class': true, 
        'Attend CN class': true,
    }
};
mainDom.createMain();
mainDom.updateMain(todayTodos);
navDom.createNav();
navButtons.inpHandler();
navButtons.delHandler();