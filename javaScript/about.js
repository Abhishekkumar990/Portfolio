const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    if (navLinks.classList.contains('show')) {
        hamburgerIcon.innerHTML = '&times;'; // ×
    } else {
        hamburgerIcon.innerHTML = '&#9776;'; // ☰
    }
});