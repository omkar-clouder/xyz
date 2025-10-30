// Navbar Hamburger for Mobile
window.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
    // Optional: close nav menu when a link is clicked (for SPA feel)
    Array.from(navLinks.querySelectorAll('a')).forEach(function(link) {
      link.addEventListener('click', function() {
        if(window.innerWidth <= 650) navLinks.classList.remove('show');
      });
    });
  }
  // Contact Form submission (Demo)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting M K Enterprises! We will get back to you soon.');
      form.reset();
    });
  }
});
