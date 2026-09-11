export async function splitter(x,b,def) {
    let output=document.getElementById(b)
    output.innerHTML=''
    let y=[]
   /*while (x.length > 0) {
        let pos = x.indexOf("-start");

        if (pos === -1 || x.slice(pos).indexOf("-end") === -1) {
            y.push(x);
            break;
        } else {
            let pos1 = x.slice(pos).indexOf("-end");
            y.push(x.slice(0, pos));
            x = x.slice(pos);
            let pos2=x.indexOf(']')
            if (x[6]==="[" && pos2!==-1 && pos2<pos1){
                y.push(x.slice(7,pos2))
                x=x.slice(0,6)+x.slice(pos2+1)
            } else {
                y.push('')
            }
            pos1=x.indexOf('-end')
            y.push(x.slice(0, pos1 + 4));
            x = x.slice(pos1 + 4);
        }
    }*/

    while (x.length > 0) {
        const start = x.indexOf("-start");
        if (start === -1) {
            y.push(x);
            break;
        }
        const end = x.indexOf("-end", start);
        if (end === -1) {
            y.push(x);
            break;
        }
        y.push(x.slice(0, start));
        x = x.slice(start);
        let style = "";
        if (x[6] === "[") {
            const close = x.indexOf("]");
            if (close !== -1) {
                style = x.slice(7, close);
                x = "-start" + x.slice(close + 1);
            }
        }
        y.push(style);
        const newEnd = x.indexOf("-end");
        y.push(x.slice(0, newEnd + 4));
        x = x.slice(newEnd + 4);
    }
    y.forEach((part,i) => {
        if (i%3===0) {
            const latex = document.createElement("p");
            latex.className="latexP"
            latex.classList.add(`lat${i}`)
            latex.textContent = part;
            output.appendChild(latex);
        } else if (i%3=== 2){
            const tikz = document.createElement("script");
            tikz.type = "text/tikz";
            tikz.setAttribute("data-tikz-libraries","calc,angles,quotes,intersections");
            const style = y[i - 1]
            tikz.className=`tikzP${i}`
            tikz.textContent = `
                \\begin{tikzpicture} ${'['+`${ style || def} `+']'}
                    ${part.slice(6, part.length - 4)} 
                \\end{tikzpicture}
            `
            //const cssStyle=style[1]
            output.appendChild(tikz)

        }
    })
    const latexPs=document.querySelectorAll('.latexP')
    MathJax.typesetClear(latexPs);
    await MathJax.typesetPromise(latexPs);
}