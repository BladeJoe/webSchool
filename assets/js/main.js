const checkbox = document.getElementById('navbar-checkbox');

checkbox.checked = false;

checkbox.addEventListener('change', () => {
    checkbox.checked.toggle();

});
document.querySelectorAll('img').forEach(img => {
    img.ondragstart = () => false
})
document.querySelectorAll('.footer-column h4').forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling
        list.classList.toggle('collapsed')

        const toggleIcon = header.querySelector('.footer-sign')
        if (toggleIcon) {
            toggleIcon.textContent = list.classList.contains('collapsed') ? '+' : '–'
        }
    })
})

