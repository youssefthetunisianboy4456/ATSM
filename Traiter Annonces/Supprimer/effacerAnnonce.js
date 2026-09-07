function closePopup(){
    document.getElementById('popup').style.display="none";
}
async function deleteAnnonce() {
        const token=sessionStorage.getItem('adminToken')
        const response = await fetch(`https://atsm-backend.onrender.com/delete/${document.querySelector('.c0').value}`, 
        { method: 'DELETE' ,headers: { 'Authorization': `Bearer ${token}`} });
        const result = await response.json()
        closePopup()
        location.reload() 
}