 // navbar


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
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter($(entry.target));
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 });

$counters.each(function() {
    observer.observe(this);
});


// For Animated Card
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

    // Intersection Observer
    const card = $('.learn_floating-card')[0]; 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(card);
});


;



