$(".nav-column-1 a").hover(function () {
    let target = $(this).offset().top - 150;
    $(".triangle").css(`transform`, `translateY(${target}px)`);

    $(".active").removeClass("active");

    let id = $(this).attr("data-submenu");
    $(id).addClass("active");
});

$(".nav-btn").click(() => {
    $(".main-nav").toggleClass("toggle");
});

$(".nav-close-btn").click(() => {
    $(".main-nav").toggleClass("toggle");
});

$(".subnav > a").click(() => {
    if ($(window).width() < 1200) {
        $(".submenu").css("display", "block");
        $(".nav-column-1").css("display", "block");
        $(".nav-column-2").css("display", "none");
        $(".nav-column-3").css("display", "none");
        $(".nav-back-btn").css("opacity", "1");
    } 
});

$(".nav-back-btn").click(() => {
    $(".nav-column-1").css("display", "none");
    $(".nav-back-btn").css("opacity", "0");
});

let sub1 = $(".sub_1 ul").html();
let sub2 = $(".sub_2 ul").html();
let sub3 = $(".sub_3 ul").html();
let sub4 = $(".sub_4 ul").html();
let sub5 = $(".sub_5 ul").html();
let sub6 = $(".sub_6 ul").html();

if ($(window).width() < 1200) {
    $("#sub1 ul").html(sub1);
    $("#sub2 ul").html(sub2);
    $("#sub3 ul").html(sub3);
    $("#sub4 ul").html(sub4);
    $("#sub5 ul").html(sub5);
    $("#sub6 ul").html(sub6);
}

$("#sub1").click(() => {
    $("#sub1 ul").slideToggle();
});

$("#sub2").click(() => {
    $("#sub2 ul").slideToggle();
});

$("#sub3").click(() => {
    $("#sub3 ul").slideToggle();
});

$("#sub4").click(() => {
    $("#sub4 ul").slideToggle();
});

$("#sub5").click(() => {
    $("#sub5 ul").slideToggle();
});

$("#sub6").click(() => {
    $("#sub6 ul").slideToggle();
});
