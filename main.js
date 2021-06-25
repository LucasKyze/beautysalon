const header = document.querySelector('#header');
const nav = header.querySelector('nav');

/* Toggle menu */
const toggles = nav.querySelectorAll('.toggle');
for(const element of toggles) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/* Close menu when title was clicked */
const titles = header.querySelectorAll('.title');
for(const element of titles) {
  element.addEventListener('click', () => nav.classList.remove('show'));
}

/* Set class in header when user scroll */
function changeHeaderWhenScroll() {
  const navHeight = header.offsetHeight;
  window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll');
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
  },

  mouseWheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
}); 

/* Scrollreveal show animating elements as they enter/leave the viewport. */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(`
#home .image, #home .text
#about .image, #about .text,
#services header, #services .card
#testimonials header, #testimonials .testimonials
#contact .text, #contact .contacts
footer .brand, footer .social
`, { interval: 100 });

/* Button for back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  window.scrollY >= 560 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show');
}

/* Highlight menu section when selecting */
const sections = document.querySelectorAll('main section[id]');
function highlightMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const start = checkpoint >= sectionTop;
    const end = checkpoint <= sectionTop + sectionHeight;

    if(start && end) {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active');
    }
  }
}

/* Register scroll events */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll();
  backToTop();
  highlightMenuAtCurrentSection();
});
