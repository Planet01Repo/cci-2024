

// Services
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Remove the active class from all links
    document.querySelectorAll('.sidebar a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to the clicked link
    this.classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
      content.classList.remove('show');
    });

    // Show the corresponding content section
    const contentId = `${this.id}-content`;
    document.getElementById(contentId).classList.add('show');
  });
});


// Modals 
$(document).ready(function () {
  function resetVideo(modalId) {
      $(modalId).on('hidden.bs.modal', function () {
          const $iframe = $(this).find('iframe');
          const src = $iframe.attr('src');
          $iframe.attr('src', ''); // Clear the src
          $iframe.attr('src', src); // Set it back to start over
      });
  }

  // Reset function applied for each modal
  for (let i = 1; i <= 10; i++) {
      resetVideo(`#videoModal${i}`);
  }
});
