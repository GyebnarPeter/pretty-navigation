$(".nav-column-1 a").hover(function () {
    let target = $(this).offset().top - 150;
    $(".triangle").css(`transform`, `translateY(${target}px)`);

    $(".active").removeClass("active");

    let id = $(this).attr("data-submenu");
    $(id).addClass("active");

});