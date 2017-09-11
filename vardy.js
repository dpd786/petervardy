$(document).ready(function () {
    "use strict";
    
    $(".nav .dropdown").hover(function () {
        $(".nav .dropdown .arrow-up").fadeIn(300);
        $(".nav .dropdown #drop-content").fadeIn(300);
    }, function () {
        $(".nav .dropdown .arrow-up").fadeOut(300);
        $(".nav .dropdown #drop-content").fadeOut(300);
    });
    
    $("#contactinfo .right").on('click', function () {
        $(".right .fa-angle-down").toggleClass("rotateLinkInHeader");
        $("#contact #openhours").slideToggle(300);
    });
    
    /* MAIN SLIDES ANIMATION FOR MOBILE */
    /* -------------------------- */

  /* DECLARATION */
    var widthMain = 100,
        animationSpeedMain = 1000,
        pauseMain = 5000,
        currentSlideMain = 1;

    /* cache DOM */
    var $sliderMain = $("#mainSlider"),
        $slideContainerMain = $sliderMain.find(".slides"),
        $slidesMain = $slideContainerMain.find(".slide"),
        $slidesMainLength = $slidesMain.length,
        intervalMain,
        intervalDots,
        $dot = $(".dot"),
        $dots = $(".dots .s"),
        $dotLength = $dot.length,
        $dotind,
        move,
        x = document.querySelectorAll(".dot span");
    
    function nextButton(n) {
        $dots.removeClass("active");
        x[n - 1].className += " active";
        //alert(x[n-1]);
    }
    
   
    function stopSliderMain() {
        clearInterval(intervalMain);
    }
    
    function startSliderMain() {
        intervalMain = setInterval(function () {
            $slideContainerMain.animate({'margin-left': '-=' + widthMain + '%'}, animationSpeedMain, function () {
                currentSlideMain += 1;

                if (currentSlideMain === $slidesMainLength) {
                    currentSlideMain = 1;
                    $slideContainerMain.css("margin-left", 0);
                }
                nextButton(currentSlideMain);
            });
        }, pauseMain);
    }
    
    $dot.on("click", function () {
        stopSliderMain();
        $dots.removeClass("active");
        $(this).children(".s").addClass("active");
        //console.log($dot.index(this));
        $dotind = $dot.index(this) + 1;
        move = $dotind - currentSlideMain;
        currentSlideMain = $dotind;
        $slideContainerMain.animate({marginLeft: '-=' + (move * widthMain) + '%'});
        startSliderMain();
    });

    $sliderMain.on("mouseenter", stopSliderMain).on("mouseleave", startSliderMain);

    startSliderMain();

});