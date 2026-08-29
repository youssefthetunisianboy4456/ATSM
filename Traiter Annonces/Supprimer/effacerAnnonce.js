const annonces=JSON.parse(localStorage.getItem('annonces')) || []
document.querySelector('.delete').addEventListener('click', function () {
    const id=document.querySelector('.Id').value
    const annonceTrouvee = annonces.find(news => news.id === id);
    const pos = annonces.findIndex(x => x===annonceTrouvee)
    if (id==='' ||!annonceTrouvee) {
        alert('id-invalide')
    } else {
       alert('id-valide')
       annonces.splice(pos, 1)
       localStorage.setItem('annonces',JSON.stringify(annonces))
    }
})