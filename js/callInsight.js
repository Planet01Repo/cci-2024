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


const counters = document.querySelectorAll('.call_insight_counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 

counters.forEach(counter => observer.observe(counter));