const navEl = document.querySelector('.navbar');
const brandEl = document.querySelector('.brand-style')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('custom-nav')
        brandEl.classList.add('custom-brand')
        
    } else if (window.scrollY < 56) {
        navEl.classList.remove('custom-nav')
        brandEl.classList.remove("custom-brand");
    }
})

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

