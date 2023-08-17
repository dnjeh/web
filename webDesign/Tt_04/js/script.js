jQuery(document).ready(function() {

    $(".nav>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    })

    setInterval(function() {
        $(".ttt").delay(1000);
        $(".ttt").animate({marginTop:-305});
        $(".ttt").delay(2000);
        $(".ttt").animate({marginTop:-610});
        $(".ttt").delay(2000);
        $(".ttt").animate({marginTop:0});
        $(".ttt").delay(2000);
    })
})