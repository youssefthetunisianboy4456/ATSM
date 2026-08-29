import {startWebsite} from "../Annonces/annonceList.js"
startWebsite()
const requestSavoirPlus = new URLSearchParams(window.location.search);
const savoirPlusId = requestSavoirPlus.get('id');


const annonceDemande = annonces.find(news => news.id === savoirPlusId);

if (annonceDemande) {
    document.body.innerHTML+= `
    <div class="annonce">
        <div>
            <h1 class="title">${annonceDemande.mainText}</h1>
        </div>
        <div class="press-report">
            <p>${annonceDemande.pressReport}</p> 
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