function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = target / 100;  

    const updateCounter = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = target;
            clearInterval(updateCounter);
        } else {
            counter.textContent = Math.ceil(current);
        }
    }, 20);
}


const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 

counters.forEach(counter => observer.observe(counter));

// // For Animated Card
$(document).ready(function() {
    // Function to check if the element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to add 'visible' class when the element comes into the viewport
    function checkVisibility() {
        $('.learn_floating-card').each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('visible');
            }
        });
    }

    // Run the check on scroll and on load
    $(window).on('scroll load', checkVisibility);

    // Intersection Observer
    const card = $('.learn_floating-card')[0]; 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
                observer.unobserve(entry.target); // Stop observing after visibility
            }
        });
    }, { threshold: 0.5 });

    observer.observe(card); // Observe the card
});

    // Run the check on scroll and on load
    $(window).on('scroll load', checkVisibility);
;



