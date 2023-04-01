const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active')
});

document.querySelectorAll('.nav-link').forEach(nav => {
    nav.addEventListener('click', function() {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        navBar.classList.toggle('active')
    });
});