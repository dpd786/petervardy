$(document).ready(function () {
    $(".nav .dropdown").hover(function () {
        $(".nav .dropdown .arrow-up").fadeIn(300);
        $(".nav .dropdown #drop-content").fadeIn(300);
    }, function () {
        $(".nav .dropdown .arrow-up").fadeOut(300);
        $(".nav .dropdown #drop-content").fadeOut(300);
    });
    
    $("#contactinfo .right").on('click', function () {
        $(".right .fa-angle-down").toggleClass("rotateLinkInHeader");
        $("#contact #openhours").slideToggle(500);
    });
});