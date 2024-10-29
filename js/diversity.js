


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
