// night mode toggle function
const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked)
});