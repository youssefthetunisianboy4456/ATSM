document.body.style.visibility="hidden"
const token = sessionStorage.getItem('adminToken');
if (!token) {
    window.location.href = '../login.html';
} else {
    document.body.style.visibility="visible"
}