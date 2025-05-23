const checkbox = document.getElementById('navbar-checkbox');

checkbox.addEventListener('change', () => {
    const isActive = checkbox.checked;
    document.body.classList.toggle('no-scroll', isActive);
});



document.querySelectorAll('img').forEach(img => {
    img.ondragstart = () => false;
});

document.querySelectorAll('.footer-column h4').forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling;
        list.classList.toggle('collapsed');
        const toggleIcon = header.querySelector('.footer-sign');
        if (toggleIcon) {
            toggleIcon.textContent = list.classList.contains('collapsed') ? '+' : '–';
        }
    });
});
