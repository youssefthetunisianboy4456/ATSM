import { loadAnnonces , mapType } from "./annonceList.js";

function reserveType(annonces,types) {
	return annonces.filter(annonce=> types.indexOf(annonce.type)!==-1).map(annonce => `
	    <article class="annonce">
            ${annonce.image==='' ? `<img class="hide">`:`<img src="../Images/${annonce.image}">`}
            <div class="annonce-text">
                <div class="titre-date"><h3>${annonce.mainText}</h3><span class="date">${annonce.date}</span></div>
                <span> ${mapType(annonce.type)} </span>
                <p>${annonce.subText}</p>
                <a href="./singleAnnonce/singleAnnonce.html?id=${annonce.id}">En savoir plus →</a>
            </div>
        </article>
    ` )
}
async function startWebsite() {
    // Wait for Supabase and receive the actual array
    const annonces = (await loadAnnonces());
    let annonceText=''
    annonceText = reserveType(annonces,['upcoming','passed','competiton','stage','release','test']).join("");
    
    const container = document.querySelector(".annonces");

    if (!container) {
        console.error('No element with class "annonces" was found.');
        return;
    }

    container.innerHTML = annonceText;
}
startWebsite()