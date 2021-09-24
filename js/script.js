$(document).ready(function() {
    $('.question__spoiler-item__top').click(function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu, body').toggleClass('active');
    })
})