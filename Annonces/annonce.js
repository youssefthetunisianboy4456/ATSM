import { loadAnnonces } from "./annonceList.js";

export function fillAnnonces(annoncesToDisplay) {
  return annoncesToDisplay
    .map(annonce => `
      
    `);
}
function reserveType(annonces,types) {
	return annonces.map(annonce => types.indexOf(annonce.type)!==-1 ? `
	    <article class="annonce">
            <img class="annonce-image" src="../Images/${annonce.image}">
            <div class="annonce-text">
                <h3>${annonce.mainText}</h3>
                <p>${annonce.subText}</p>
                <a href="./singleAnnonce/singleAnnonce.html?id=${annonce.id}">En savoir plus →</a>
            </div>
        </article>
    ` : '')
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