/*import {latexText} from './latexText.js'*/
const annonces=JSON.parse(localStorage.getItem('annonces')) || []
/*latexText('Latex','fill');*/
    function fillTextOfFrom(pClass,inputId) {
    setInterval( function f1() {
    document.querySelector(`.${pClass}`).innerHTML=document.querySelector(`.${inputId}`).value;
},200);
}
fillTextOfFrom('Preview','fill');
document.querySelector('.add').addEventListener('click', function () {
    let x=[]
    for (let i=0 ; i<5 ; i++) {
        x[i]=document.querySelector(`.c${i}`).value
    }
    annonces.unshift( {
        id:x[0],
        mainText : x[1],
        image :x[2],
        subText :x[3],
        pressReport:x[4]
    })
    console.log(annonces)
    localStorage.setItem('annonces',JSON.stringify(annonces))
})