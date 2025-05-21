const checkbox = document.getElementById('navbar-checkbox');

checkbox.checked = false;

checkbox.addEventListener('change', () => {
    checkbox.checked.toggle();

});
