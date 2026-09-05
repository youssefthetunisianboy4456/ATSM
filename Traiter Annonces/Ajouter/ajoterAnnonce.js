/*import {latexText} from './latexText.js'*/
/*latexText('Latex','fill');*/
function fillTextOfFrom(pClass,inputId) {
    setInterval( function f1() {
    document.querySelector(`.${pClass}`).innerHTML=document.querySelector(`.${inputId}`).value;
},200);
}
fillTextOfFrom('Preview','fill');