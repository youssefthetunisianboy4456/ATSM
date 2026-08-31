import { loadAnnonces } from "./annonceList.js";

export function fillAnnonces(annoncesToDisplay) {
  return annoncesToDisplay
    .map(annonce => `
      <article class="annonce">
					<img class="annonce-image" src="../Images/${annonce.image}">
					<div class="annonce-text">
						<h3>${annonce.mainText}</h3>
						<p>${annonce.subText}</p>
						<a href="./singleAnnonce/singleAnnonce.html?id=${annonce.id}">En savoir plus →</a>
					</div>
			</article>
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