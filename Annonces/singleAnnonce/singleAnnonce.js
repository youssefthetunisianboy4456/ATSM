import { loadAnnonces } from "../annonceList.js";


async function startWebsite() {
    const annonces = (await loadAnnonces()).reverse();
    let annonceText=''
    const requestSavoirPlus = new URLSearchParams(window.location.search);
    const savoirPlusId = requestSavoirPlus.get('id');


    const annonceDemande = annonces.find(news => news.id === savoirPlusId);

    if (annonceDemande) {
        document.querySelector('.annonce').innerHTML= `
        <div class="annonce">
            <div class="text">
                <div>
                    <h1 class="title">${annonceDemande.mainText}</h1>
                    <div class="title-line"></div>
                </div>
                <div class="press-report" id="get">
                    <p class="press-report-p" >${annonceDemande.pressReport}</p> 
                </div>
            </div>
            <div class="div-image ${annonceDemande.image==='' ? `hide`:``} ">
                ${annonceDemande.image==='' ? `<img class="hide">`:`<img class="img" src="${annonceDemande.imageURL}">`}
            </div>
        </div>
        ` 
        document.title=annonceDemande.mainText;
        const report=document.querySelector('.press-report-p')
        const x=report.textContent
        MathJax.typesetClear([report]);
        report.textContent=x
        await MathJax.typesetPromise([report]);
    } else {
        alert('Document nf')
    }
    
}
startWebsite()