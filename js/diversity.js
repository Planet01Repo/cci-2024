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


// Slider Animation
$(document).ready(function () {
    var $sliders = $(".slide");
    var center = Math.floor($sliders.length / 2);
    var leftEndBack = center - 3 >= 0 ? center - 3 : undefined;
    var leftEnd = center - 2 >= 0 ? center - 2 : undefined;
    var leftMid = center - 1 >= 0 ? center - 1 : undefined;
    var rightMid = center + 1 < $sliders.length ? center + 1 : undefined;
    var rightEnd = center + 2 < $sliders.length ? center + 2 : undefined;
    var rightEndBack = center + 3 < $sliders.length ? center + 3 : undefined;

    // Initialize positions
    $sliders.addClass('position-none');
    if (leftEndBack !== undefined) $($sliders[leftEndBack]).addClass("position-none");
    if (leftEnd !== undefined) $($sliders[leftEnd]).addClass("position-1");
    if (leftMid !== undefined) $($sliders[leftMid]).addClass("position-2");
    if (center !== undefined) $($sliders[center]).addClass("position-3");
    if (rightMid !== undefined) $($sliders[rightMid]).addClass("position-4");
    if (rightEnd !== undefined) $($sliders[rightEnd]).addClass("position-5");
    if (rightEndBack !== undefined) $($sliders[rightEndBack]).addClass("position-none");

    function updatePositionLeft() {
        if (leftEndBack !== undefined) {
            $($sliders[leftEndBack]).removeClass("position-none").addClass("position-1");
        } else {
            $($sliders[rightEnd]).removeClass("position-none").addClass("position-1");
        }

        if (leftEnd !== undefined) $($sliders[leftEnd]).removeClass("position-1").addClass("position-2");
        if (leftMid !== undefined) $($sliders[leftMid]).removeClass("position-2").addClass("position-3");
        if (center !== undefined) $($sliders[center]).removeClass("position-3").addClass("position-4");
        if (rightMid !== undefined) $($sliders[rightMid]).removeClass("position-4").addClass("position-5");
        if (rightEnd !== undefined) $($sliders[rightEnd]).removeClass("position-5").addClass("position-none");

        leftEndBack = leftEndBack !== undefined ? (leftEndBack - 1 + $sliders.length) % $sliders.length : undefined;
        leftEnd = leftEnd !== undefined ? (leftEnd - 1 + $sliders.length) % $sliders.length : undefined;
        leftMid = leftMid !== undefined ? (leftMid - 1 + $sliders.length) % $sliders.length : undefined;
        center = center !== undefined ? (center - 1 + $sliders.length) % $sliders.length : undefined;
        rightMid = rightMid !== undefined ? (rightMid - 1 + $sliders.length) % $sliders.length : undefined;
        rightEnd = rightEnd !== undefined ? (rightEnd - 1 + $sliders.length) % $sliders.length : undefined;
        rightEndBack = rightEndBack !== undefined ? (rightEndBack - 1 + $sliders.length) % $sliders.length : undefined;
    }

    function updatePositionRight() {
        if (leftEnd !== undefined) $($sliders[leftEnd]).removeClass("position-1").addClass("position-none");
        if (leftMid !== undefined) $($sliders[leftMid]).removeClass("position-2").addClass("position-1");
        if (center !== undefined) $($sliders[center]).removeClass("position-3").addClass("position-2");
        if (rightMid !== undefined) $($sliders[rightMid]).removeClass("position-4").addClass("position-3");
        if (rightEnd !== undefined) $($sliders[rightEnd]).removeClass("position-5").addClass("position-4");

        if (rightEndBack !== undefined) {
            $($sliders[rightEndBack]).removeClass("position-none").addClass("position-5");
        } else if (leftEndBack !== undefined) {
            $($sliders[leftEndBack]).removeClass("position-none").addClass("position-5");
        } else {
            $($sliders[leftEnd]).removeClass("position-none").addClass("position-5");
        }

        leftEndBack = leftEndBack !== undefined ? (leftEndBack + 1) % $sliders.length : undefined;
        leftEnd = leftEnd !== undefined ? (leftEnd + 1) % $sliders.length : undefined;
        leftMid = leftMid !== undefined ? (leftMid + 1) % $sliders.length : undefined;
        center = center !== undefined ? (center + 1) % $sliders.length : undefined;
        rightMid = rightMid !== undefined ? (rightMid + 1) % $sliders.length : undefined;
        rightEnd = rightEnd !== undefined ? (rightEnd + 1) % $sliders.length : undefined;
        rightEndBack = rightEndBack !== undefined ? (rightEndBack + 1) % $sliders.length : undefined;
    }


    var autoSlideInterval;

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(function () {
            updatePositionRight();
        }, 3500);
    }


    var isDragging = false;
    var startX;

    function handleDrag(startX) {
        $(document).on('mousemove touchmove', function (e) {
            var currentX = e.pageX || e.originalEvent.touches[0].pageX;
            var distance = currentX - startX;


            if (distance > 50) {
                updatePositionLeft();
                isDragging = false;
                startAutoSlide();
                $(document).off('mousemove touchmove');
            } else if (distance < -50) {
                updatePositionRight();
                isDragging = false;
                startAutoSlide();
                $(document).off('mousemove touchmove');
            }
        });
    }

    $('#slider-content').on('mousedown touchstart', function (e) {
        isDragging = true;
        startX = e.pageX || e.originalEvent.touches[0].pageX;
        clearInterval(autoSlideInterval);
        handleDrag(startX);
    });

    $(document).on('mouseup touchend', function () {
        if (isDragging) {
            isDragging = false;
            startAutoSlide();
        }
    });


    $('#slider-content').on('dragstart', function (e) {
        e.preventDefault();
    });


    startAutoSlide();
});


// Diversity Card Counter

$(document).ready(function () {
    // Function to check if the element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Counter animation function
    function animateCounter() {
        $('.percentage').each(function () {
            const $this = $(this);
            const countTo = parseFloat($this.attr('data-count')); // Parse as float for decimal handling
            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(this.countNum.toFixed(1) + '%'); // Adjusted to display one decimal place
                    },
                    complete: function () {
                        $this.text(countTo.toFixed(1) + '%'); // Ensure final value displays with one decimal place
                    }
                }
            );
        });
    }

    // Scroll event to check when the card is in view
    $(window).on('scroll', function () {
        if (isInViewport(document.getElementById('counter-card'))) {
            animateCounter();
            $(window).off('scroll'); // Trigger only once
        }
    });
});

$(document).ready(function () {
    $('.main').on('mouseenter', function () {
        const $box = $(this).find('.box'); // Find the .box inside the hovered .main
        $box.css({
            'animation': 'rotate 5s linear infinite',
            'opacity': 0.7,
            'animation-play-state': 'running'
        });
    });

    $('.main').on('mouseleave', function () {
        const $box = $(this).find('.box'); // Find the .box inside the hovered .main
        $box.css('animation-play-state', 'paused');

        setTimeout(function () {
            $box.css('opacity', 0);
        }, 100);
    });
});
