jQuery(document).ready(function($){
    $("#Toggle-mobile-nav").click(function(){
        $("#page").toggleClass("mobile-nav-opened");
    });

    $("#page").click(function(e){
        var target = e.target;

        var ismobilenavbuttonclicked =
            $(target).hasclass("navbar-toggler") ||
            $(target).parent().hasclass("navbar-toggler");

    })

})