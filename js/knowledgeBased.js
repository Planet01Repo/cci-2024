  // navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function () {
      this.classList.toggle("is-open");
    });
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
