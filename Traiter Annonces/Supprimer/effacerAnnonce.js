async function deleteAnnonce() {
        const token=sessionStorage.getItem('adminToken')
        await fetch(`https://atsm-backend.onrender.com/delete/${document.querySelector('.c0').value}`, 
        { method: 'DELETE' ,headers: { 'Authorization': `Bearer ${token}`} });
}