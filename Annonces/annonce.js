import { loadAnnonces } from "./annonceList.js";

export function fillAnnonces(annoncesToDisplay) {
  return annoncesToDisplay
    .map(annonce => `
      <div class="annonce annonce${annonce.id}">
        <div>
          <img
            src="../Images/${annonce.image}"
            class="annonce-image"
          >
        </div>

        <div class="annonce-titre">
          ${annonce.mainText}
        </div>

        <div class="annonce-main-text">
          ${annonce.subText}
        </div>

        <div class="savoir-plus savoir-plus-${annonce.id}">
          <a
            class="special-link"
            href="../Annonces/singleAnnonce/singleAnnonce.html?id=${annonce.id}"
          >
            En savoir plus
          </a>
        </div>
      </div>
    `)
    .join("");
}
async function startWebsite() {
    // Wait for Supabase and receive the actual array
    const annonces = (await loadAnnonces()).reverse();
    let annonceText=''
    annonceText = fillAnnonces(annonces);
    
    const container = document.querySelector(".annonces");

    if (!container) {
        console.error('No element with class "annonces" was found.');
        return;
    }

    container.innerHTML = annonceText;
}
startWebsite()