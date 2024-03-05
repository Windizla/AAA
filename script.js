// Обработка клика для мобильной версии
document.getElementById('main-menu').addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
        const subMenu = e.target.nextElementSibling;
        if (subMenu) {
            e.preventDefault();
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        }
    }
});
