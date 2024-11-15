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


function animateCounter($counter) {
    const target = +$counter.data('target');
    let current = 0;
    const increment = target / 100;

    const updateCounter = setInterval(function() {
        current += increment;
        if (current >= target) {
            $counter.text(target);
            clearInterval(updateCounter);
        } else {
            $counter.text(Math.ceil(current));
        }
    }, 20);
}

$(document).ready(function() {
    const $counters = $('.call_insight_counter');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter($(entry.target));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    $counters.each(function() {
        observer.observe(this);
    });
});