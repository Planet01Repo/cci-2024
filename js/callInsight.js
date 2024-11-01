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