let annonces = JSON.parse(localStorage.getItem('annonces')) || [];
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
let annonceText=''
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
//<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>