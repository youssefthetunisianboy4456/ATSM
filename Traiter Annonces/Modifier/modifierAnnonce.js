const annonces=JSON.parse(localStorage.getItem('annonces')) || []
document.querySelector('.Trouver').addEventListener('click', function () {
    const id=document.querySelector('.Id').value
    const annonceTrouvee = annonces.find(news => news.id === id);
    if (id==='' ||!annonceTrouvee) {
        alert('id-invalide')
    } else {
       alert('id-non-invalide')
       window.location.href=`./modifAnnonceT.html?id=${id}`
    }
})