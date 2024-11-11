  // navbar
  const toggler = document.querySelector(".navbar-toggler");
  const span = document.querySelector(".navbar-toggler-icon");

  toggler.addEventListener("click", function () {
    this.classList.toggle("is-open");
    if (this.classList.contains("is-open")) {
      span.classList.remove("color-changed");
    }
  });

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50 && !toggler.classList.contains("is-open")) {
      navbar.classList.add("scrolled");
      span.classList.add("color-changed");
    } else {
      navbar.classList.remove("scrolled");
      if (!toggler.classList.contains("is-open")) {
        span.classList.remove("color-changed");
      }
    }
  });
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
  