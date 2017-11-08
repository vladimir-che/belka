$(document).ready(function(){



  $('.traces__slider').slick({
  dots: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.picture-slider').slick({
  dots: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


  $('.reviews__wrapper').slick({
  dots: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


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
