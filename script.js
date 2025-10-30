// Navbar dropdown for mobile (if needed, future enhancement)
// Contact Form submission (Demo)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting M K Enterprises! We will get back to you soon.');
      form.reset();
    });
  }
});
