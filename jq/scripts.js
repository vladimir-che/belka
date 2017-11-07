$(document).ready(function(){


  $('.picture-slider').slick();

  $('.traces__slider').slick();

  $('.reviews__wrapper').slick();

  $('.header__burger').click(function () {
    $('.burger_menu').toggleClass('burger_menu__none');
    });

  $('#age').click(function () {
    $('.list_age').toggleClass('list__display--flex');
    });

  $('#place').click(function () {
    $('.list_place').toggleClass('list__display--flex');
    });

  $('#duration').click(function () {
    $('.list_duration').toggleClass('list__display--flex');
    });


});
