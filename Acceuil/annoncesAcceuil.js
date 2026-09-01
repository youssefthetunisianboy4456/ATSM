import { loadAnnonces } from "../Annonces/annonceList.js";
function reserveType(annonces,types) {
	return annonces.map(annonce => types.indexOf(annonce.type)!==-1 ? `
	  <article class="annonce-card annonce-card${annonce.id}">
		<div class="annonce-image">
			<img src="../Images/${annonce.image}">
			<div class="annonce-date">
				<strong>4</strong>
				<span>Aout</span>
				<span>2026</span>
			</div>
		</div>
		<div class="annonce-content">
			<div class="type-date">
				<span class="type">
					${annonce.type}
				</span>
				<span class="small-date">
					${annonce.date}
				</span>
			</div>
			<h3>
				${annonce.mainText}
			</h3>
			<p>
				${annonce.subText}
			</p>
			<a href="../Annonces/singleAnnonce/singleAnnonce.html?id=${annonce.id}" class="savoir-plus-${annonce.id}">En savoir plus →</a>
		</div>
	</article>
    ` : '')
}
async function startWebsite() {
	// Wait for Supabase and receive the actual array
	const annonces = (await loadAnnonces());
	let annonceText=''
	// Select only the first two announcements
	const displayedAnnonces = reserveType(annonces,['Compétition']).slice(0,3);
	annonceText = displayedAnnonces.join("");
	const container = document.querySelector(".annonces");

	if (!container) {
		console.error('No element with class "annonces" was found.');
		return;
	}
	container.innerHTML = annonceText;
}
startWebsite();
console.log(annonces,type)
/*import {loadAnnonces,startWebsite} from "../Annonces/annonceList.js"
const annonces=loadAnnonces();
startWebsite();
export function fillAnnonces () {
	let annonceText=''
	annonces.forEach((annonce) => {
		annonceText+=`
			<div class="annonce annonce${annonce.id}">
				<div ><img src="../Images/${annonce.image}" class="annonce-image"></div>
				<div class="annonce-titre">${annonce.mainText}</div>
				<div class="annonce-main-text">${annonce.subText}</div>
				<div class="savoir-plus  savoir-plus-${annonce.id}"><a class="special-link" href="../Annonces/singleAnnonce/singleAnnonce.html?id=${annonce.id}">En savoir plus</a></div>
			</div>`
	});
	return annonceText;
}

let annonceText='';

if (annonces.length<=2) {
	annonceText=fillAnnonces();
} else {
	for (let i = 0 ; i < 2; i++) {
		let annonce=annonces[i];
		annonceText+=`
			<div class="annonce annonce${annonce.id}">
				<div ><img src="../Images/${annonce.image}" class="annonce-image"></div>
				<div class="annonce-titre">${annonce.mainText}</div>
				<div class="annonce-main-text">${annonce.subText}</div>
				<div class="savoir-plus savoir-plus-${annonce.id}"><a class="special-link" href="../Annonces/singleAnnonce/singleAnnonce.html?id=${annonce.id}">En savoir plus</a></div>
			</div>`
	}
	annonceText+= '<div class="all-annonces"><a href="../Annonces/annonce.html"> Toutes les annonces</a></div>';
};
document.querySelector('.annonces').innerHTML=annonceText;
*/
//<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>