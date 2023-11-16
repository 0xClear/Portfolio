jQuery(document).ready(function($){
    $("#Toggle-mobile-nav").click(function(){
        $("#page").toggleClass("mobile-nav-opened");
    });

    $("#page").click(function(e){
        var target = e.target;

        var ismobilenavbuttonclicked =(  
            $(target).hasClass("navbar-toggler") ||
            $(target).parent().hasClass("navbar-toggler")
        );
        if ( ismobilenavbuttonclicked ){
            return;
        }
        $("#page").removeClass("mobile-nav-opened");
    });

})