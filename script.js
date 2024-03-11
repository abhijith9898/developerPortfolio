function toggleClick() {
    let id = document.getElementById("nav-link");
    if(id.style.display === 'block') {
        id.style.display = 'none';
    } else {
        id.style.display = 'block';
    }
}