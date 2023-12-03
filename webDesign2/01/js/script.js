jQuery(document).ready(function () {

    $(".menu>li").mouseover(function () {
        $(this).find(".subm").stop().slideDown(500);
    }).mouseout(function () {
        $(this).find(".subm").stop().slideUp(500);
    })

    $(".slide a:gt(0)").hide();
    setInterval(function () {
        $(".slide a:first-child")
            .fadeOut(1000)
            .next('a')
            .fadeIn(1000)
            .end()
            .appendTo(".slide")
    }, 3000);

    $(".c1 li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    })
})