document.addEventListener("scroll", function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // You're at the bottom of the page
        footer.style.visibility = 'visible';
    } else {
        footer.style.visibility = 'hidden';
    }
});

function toggleJobDetails(jobId) {
    var jobDetails = document.getElementById(jobId);
    jobDetails.classList.toggle('visible');
}
sessionStorage.setItem('previousPageState', JSON.stringify(yourStateObject));
var previousPageState = JSON.parse(sessionStorage.getItem('previousPageState'));

// JavaScript to handle toggling of the mobile nav
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});


