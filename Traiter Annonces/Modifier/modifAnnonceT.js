const annonces=JSON.parse(localStorage.getItem('annonces')) || []
const requestModif = new URLSearchParams(window.location.search);
const Id = requestModif.get('id');


const annonceModif = annonces.find(news => news.id === Id);
/*console.log(annonceModif)*/
const pos = annonces.findIndex(x => x===annonceModif);
/*console.log(pos)*/
if (annonceModif) {
    document.querySelector('.alter').addEventListener('click', function () {
            annonces[pos] = {
                id: Id,
                mainText: document.querySelector(`.c1`).value ||  annonceModif.mainText,
                image: document.querySelector(`.c2`).value ||  annonceModif.image,
                subText: document.querySelector(`.c3`).value ||  annonceModif.subText,
                pressReport: document.querySelector(`.c4`).value || annonceModif.pressReport
            }
        /*console.log(annonces[pos])*/
        localStorage.setItem('annonces',JSON.stringify(annonces))
    })
} else {
    alert('Document nf')
}