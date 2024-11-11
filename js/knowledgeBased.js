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

// Services
$('.sidebar a').on('click', function(event) {
  event.preventDefault();

  $('.sidebar a').removeClass('active');

  $(this).addClass('active');

  $('.content').removeClass('show');

  const contentId = $(this).attr('id') + '-content';
  $('#' + contentId).addClass('show');
});


// Modals 
$(document).ready(function () {
  function resetVideo(modalId) {
      $(modalId).on('hidden.bs.modal', function () {
          const $iframe = $(this).find('iframe');
          const src = $iframe.attr('src');
          $iframe.attr('src', ''); 
          $iframe.attr('src', src); 
      });
  }

  for (let i = 1; i <= 10; i++) {
      resetVideo(`#videoModal${i}`);
  }
});
