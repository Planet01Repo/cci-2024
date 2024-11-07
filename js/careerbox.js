// Navbar Scroll Effect
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Faizan")
//     // Navbar Scroll Effect
//     window.addEventListener("scroll", function () {
//         console.log("object")
//       const navbar = document.querySelector(".navbar");
//       if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//       } else {
//         navbar.classList.remove("scrolled");
//       }
//     });
  
//     // Navbar Toggler Click Event
//     const toggler = document.querySelector(".navbar-toggler");
//     toggler.addEventListener("click", function () {
//       this.classList.toggle("is-open");
//     });
//   });
  
  
  // Counter Animation
  function animateCounter($counter) {
    const target = +$counter.data('target');
    let current = 0;
    const increment = target / 100;
  
    const updateCounter = setInterval(() => {
      current += increment;
      if (current >= target) {
        $counter.text(target);
        clearInterval(updateCounter);
      } else {
        $counter.text(Math.ceil(current));
      }
    }, 20);
  }
  
  const $counters = $('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter($(entry.target));
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  $counters.each(function() {
    counterObserver.observe(this);
  });
  
  // Animated Card
  $(document).ready(function() {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function checkVisibility() {
      $('.learn_floating-card').each(function() {
        if (isElementInViewport(this)) {
          $(this).addClass('visible');
        }
      });
    }
  
    $(window).on('scroll load', checkVisibility);
  
    // Intersection Observer for Animated Card
    const card = $('.learn_floating-card')[0];
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    cardObserver.observe(card);
  });
  