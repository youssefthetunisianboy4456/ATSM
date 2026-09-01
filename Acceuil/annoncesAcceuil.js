import { loadAnnonces , mapType} from "../Annonces/annonceList.js";
function reserveType(annonces,types) {
	return annonces.filter(annonce=> types.indexOf(annonce.type)!==-1).map(annonce =>  `
	  <article class="annonce-card annonce-card${annonce.id}">
		<div class="annonce-image ${annonce.image==='' ? `hide`:``}">
			${annonce.image==='' ? `<img class="hide">`:`<img src="../Images/${annonce.image}">`}
		</div>
		<div class="annonce-content">
			<div class="type-date">
				<span class="type">
					${mapType(annonce.type)}
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
    ` )
}
async function startWebsite() {
	// Wait for Supabase and receive the actual array
	const annonces = (await loadAnnonces());
	console.log('done');
	let annonceText=''
	const annoncesPast = reserveType(annonces,['passed','competiton','release']).slice(0,3);
	const annoncesFuture = reserveType(annonces,['upcoming','stage','test']).slice(0,3);
	annonceText=`
		<span class="annonces-label">
					Actualités
		</span>
		<div class="annonces-heading">
			<div>
				<h2>
					Les actualités plus récentes
				</h2>
				<a href="../Annonces/annonce.html" class="all-annonces">
					Voir toutes les actualités →
				</a>
				<div class="title-line"></div>
			</div>
		</div>
		<div>
			<div class="annonces">
				${annoncesPast.join("")}
			</div>
		</div>
		<div class="separateur"></div>
		<div class="annonces-heading">
			<div>
				<h2>
					Actualités à venir
				</h2>
				<a href="../Annonces/annonce.html" class="all-annonces">
					Voir toutes les actualités →
				</a>
				<div class="title-line"></div>
			</div>
		</div>
		<div>
			<div class="annonces">
				${annoncesFuture.join("")}
			</div>
		</div>
	`
	//annonceText = displayedAnnonces.join("");
	const container = document.querySelector(".annonces-container");

	if (!container) {
		console.error('No element with class "multi-annonces" was found.');
		return;
	}
	container.innerHTML = annonceText;
}
startWebsite();