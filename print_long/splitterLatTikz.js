export async function splitter(x,b,c) {
    let output=document.getElementById(b)
    output.innerHTML=''
    let y=[]
    while (x.length > 0) {
        let pos = x.indexOf("-start");

        if (pos === -1 || x.slice(pos).indexOf("-end") === -1) {
            y.push(x);
            x = "";
        } else {
            let pos1 = x.slice(pos).indexOf("-end");
            y.push(x.slice(0, pos));
            x = x.slice(pos);
            let pos2=x.indexOf(']')
            if (x[6]==="[" && pos2!==-1 && pos2<pos1){
                y.push(x.slice(7,pos2))
                x=x.slice(0,6)+x.slice(pos2+1)
            } else {
                y.append('')
            }
            pos1=x.indexOf('-end')
            y.push(x.slice(0, pos1 + 4));
            x = x.slice(pos1 + 4);
        }
    }
    y.forEach((part,i) => {
        if (i%3===0) {
            const latex = document.createElement("p");
            latex.className="latexP"
            latex.textContent = part;
            output.appendChild(latex);
        } else if (i%3=== 2){
            const tikz = document.createElement("script");
            tikz.type = "text/tikz";
            tikz.setAttribute("data-tikz-libraries","calc,angles,quotes,intersections");

            tikz.className="tikzP"
            tikz.textContent = `
                \\begin{tikzpicture}[${c}]
                    ${part.slice(6, part.length - 4)} 
                \\end{tikzpicture}
            `
            output.appendChild(tikz)
        }
    })
    const latexPs=document.querySelectorAll('.latexP')
    MathJax.typesetClear(latexPs);
    await MathJax.typesetPromise(latexPs);
}