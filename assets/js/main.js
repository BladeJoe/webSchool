const checkbox = document.getElementById('navbar-checkbox')
checkbox.onchange = () => document.body.classList.toggle('no-scroll', checkbox.checked)

document.querySelectorAll('img').forEach(img => img.ondragstart = () => false)

document.querySelectorAll('.footer-column h3').forEach(header => {
    header.onclick = () => {
        const list = header.nextElementSibling
        list.classList.toggle('collapsed')
        const icon = header.querySelector('.footer-sign')
        if (icon) icon.textContent = list.classList.contains('collapsed') ? '+' : '–'
    }
})
