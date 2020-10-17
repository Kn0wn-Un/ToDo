import navDom from "./navdom.js";
import mainDom from "./maindom.js";
import navButtons from "./navinput";
import mainInput from "./maininput";
//combined Dom and handler functions for Main
const mainRefresh = (task)=>{
    mainDom.updateMain(task);
    mainInput.addHandlers();
}
//combined Dom and handler functions for Nav
const navRefresh = ()=>{
    navDom.createNav();
    navButtons.taskHandler();
}
//combined Dom and handler functions for both
const fullRefresh = (task)=>{
    mainDom.updateMain(task);
    mainInput.addHandlers();
    navDom.createNav();
    navButtons.taskHandler();
}
export default {mainRefresh, navRefresh, fullRefresh};