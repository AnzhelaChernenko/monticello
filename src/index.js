import $ from 'jquery';

$(document).ready(function() {
    new Swiper('.myHero', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.heroF',
            prevEl: '.heroS',
        },
    });
});
$(document).ready(function(){

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2500);
    });

    $("#scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2500);
    });
});


let swiper = new Swiper('.newsSlide', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



$( "#ass" ).mouseover(function() {
    $( "#seem" ).css('background-color', 'white');
});
$( "#ass" ).mouseout(function() {
    $( "#seem" ).css('background-color', 'transparent');
});


$( "#aboutA" ).mouseover(function() {
    $( "#seemA" ).css('background-color', '#6387f2');
});
$( "#aboutA" ).mouseout(function() {
    $( "#seemA" ).css('background-color', 'transparent');
});


$( "#newsN" ).mouseover(function() {
    $( "#seemN" ).css('background-color', 'white');
});
$( "#newsN" ).mouseout(function() {
    $( "#seemN" ).css('background-color', 'transparent');
});


$( "#galleryG" ).mouseover(function() {
    $( "#seemG" ).css('background-color', '#6387f2');
});
$( "#galleryG" ).mouseout(function() {
    $( "#seemG" ).css('background-color', 'transparent');
});


$( "#contactC" ).mouseover(function() {
    $( "#seemC" ).css('background-color', 'white');
});
$( "#contactC" ).mouseout(function() {
    $( "#seemC" ).css('background-color', 'transparent');
});



$( "#name" ).mouseover(function() {

    $( "#email" ).css('opacity', '0.2');
});
$( "#name" ).mouseout(function() {
    $( "#email" ).css('opacity', '1');
});

$( "#email" ).mouseover(function() {

    $( "#name" ).css('opacity', '0.2');
});
$( "#email" ).mouseout(function() {
    $( "#name" ).css('opacity', '1');
});


if(window.matchMedia('(max-width: 735px)').matches){
    let swiper = new Swiper('.newsSlide', {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


$( ".burger" ).mouseover(function() {

    $( ".burgerContent" ).css('display', 'flex');
});
$( ".burger" ).mouseout(function() {
    $( ".burgerContent" ).css('display', 'none');
});


if(window.matchMedia('(max-width: 360px)').matches){
    let swiper = new Swiper('.newsSlide', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


