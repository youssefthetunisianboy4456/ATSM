import { loadAnnonces } from "../annonceList.js";
import {splitter} from  "../../print_long/splitterLatTikz.js"


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
                <div class="press-report" >
                    <div class="press-report-p preview" id="get" ></div> 
                </div>
            </div>
            <div class="div-image ${annonceDemande.image==='' || annonceDemande.type==="release" ? `hide`:``} ">
                ${annonceDemande.image==='' || annonceDemande.type==="release" ? `<img class="hide">`:`<img class="img" src="${annonceDemande.imageURL}">`}
            </div>
        </div>
        ` 
        document.title=annonceDemande.mainText;
        splitter(annonceDemande.pressReport,'get',' scale=4 , transform shape')
    } else {
        alert('Document nf')
    }
    
}
startWebsite()