function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.opacity = 0;
        setTimeout(() => {
            page.style.display = 'none';
        }, 300);
    });
    setTimeout(() => {
        let page = document.getElementById(pageId);
        page.style.display = 'block';
        setTimeout(() => {
            page.style.opacity = 1;
        }, 50);
    }, 300);
}
document.addEventListener("DOMContentLoaded", function() {
    showPage('home');
});
