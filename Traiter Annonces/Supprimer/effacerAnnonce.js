function closePopup(){
    document.querySelector('.popup').style.display="none";
}
document.querySelector('.delete').addEventListener('click',function openPopup(){
    document.querySelector('.popup').style.display="flex";
})
async function deleteAnnonce() {
        const token=sessionStorage.getItem('adminToken')
        const response = await fetch(`https://atsm-backend.onrender.com/delete/${document.querySelector('.c0').value}`, 
        { method: 'DELETE' ,headers: { 'Authorization': `Bearer ${token}`} });
        const result = await response.json()
        closePopup()
        location.reload()
}