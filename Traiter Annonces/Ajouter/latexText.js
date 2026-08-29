export function latexText(pClass,inputId) {
    document.querySelector(`.${pClass}`).MathJax = {
        tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']] 
        } 
    }; 

    setInterval( function f1() {
        const latex=document.querySelector(`.${inputId}`).value;
        document.querySelector(`.${pClass}`).innerHTML=`${document.querySelector(`.${inputId}`).value}`;
        MathJax.typeset();
    },200);
}