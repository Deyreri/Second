$(function () {

    var mixer = mixitup('.blog__list');

    $('.blog__top-link').on('click', function () {
    })
})
$('.customers__slider').slick({
    dots: true,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    appendArrows: $('customers__arrow'),
})
$('.customers__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
})
$('.customers__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
})

$('.questions__link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__subtitle--active')) {
        $(this).removeClass('questions__subtitle--active')
        $(this).children('.questions__text').slideUp()
    } else {
        $('.questions__link').removeClass('questions__subtitle--active')
        $('.questions__text').slideUp()
        $(this).addClass('questions__subtitle--active')
        $(this).children('.questions__text').slideDown()
    }
})