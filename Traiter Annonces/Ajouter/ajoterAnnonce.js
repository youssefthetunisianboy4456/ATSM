/*import {latexText} from './latexText.js'*/
/*latexText('Latex','fill');*/
function fillTextOfFrom(pClass,inputId) {
    setInterval( function f1() {
    document.querySelector(`.${pClass}`).innerHTML=document.querySelector(`.${inputId}`).value;
},200);
}
fillTextOfFrom('Preview','fill');
document.querySelector('.add').addEventListener('click', async function () {
    let x=[]
    for (let i=0 ; i<7 ; i++) {
        x[i]=document.querySelector(`.c${i}`).value
    }
    const newAnnonce = {
        id:x[0],
        mainText : x[1],
        image :x[2],
        subText :x[3],
        pressReport:x[4],
        date : x[5],
        type: x[6]
    }
    const token = sessionStorage.getItem('adminToken');
    await fetch(
        'https://atsm-backend.onrender.com/add',
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: newAnnonce
        }
    );
})