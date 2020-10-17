import navDom from "./navdom.js";
import mainDom from "./maindom.js";
import navButtons from "./navinput";
import mainInput from "./maininput";
const mainRefresh = (task)=>{
    mainDom.updateMain(task);
    mainInput.addHandlers();
}
const navRefresh = ()=>{
    navDom.createNav();
    navButtons.taskHandler();
}
const fullRefresh = (task)=>{
    mainDom.updateMain(task);
    mainInput.addHandlers();
    navDom.createNav();
    navButtons.taskHandler();
}
export default {mainRefresh, navRefresh, fullRefresh};