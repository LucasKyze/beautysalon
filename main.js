const header = document.querySelector('#header');
const nav = header.querySelector('nav');
const toggles = nav.querySelectorAll('.toggle');
const titles = header.querySelectorAll('.title');

/* Toggle menu */
for(const element of toggles) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/* Close menu when title was clicked */
for(const element of titles) {
  element.addEventListener('click', () => nav.classList.remove('show'));
}

/* Set class in header when user scroll */
const navHeight = header.offsetHeight;
window.addEventListener('scroll', () => window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll'));

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
  },

  mouseWheel: true,
  keyboard: true
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
`, { interval: 100 });
