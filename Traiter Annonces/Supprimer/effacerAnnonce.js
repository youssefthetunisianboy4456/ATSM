async function deleteAnnonce() {
        await fetch(`https://atsm-backend.onrender.com/delete/:${document.querySelector('.c0').value}`, { method: 'DELETE' });
}