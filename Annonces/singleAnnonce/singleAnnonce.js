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
                <div class="press-report">
                    <p>${annonceDemande.pressReport}</p> 
                </div>
            </div>
            <div class="div-image">
                <img class="img" src="../../Images/${annonceDemande.image}"> 
            </div>
        </div>
        ` 
        document.title=annonceDemande.mainText;
    } else {
        alert('Document nf')
    }
    
}
startWebsite()