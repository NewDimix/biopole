var today = new Date();
var number = today.getDate();
var day = today.getDay();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (var i = 0; i < days.length - 1; i++) {
  if (i === day) {
    day = days[i];
    break;
  }
}

document.getElementById('js-day').innerHTML = ("<p>" + day + "</p>");
document.getElementById('js-number').innerHTML = ("<p>" + number + "</p>");

$(window).on('load', function () {
  $preloader = $('.js-loader'),
    $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');

  var isMobile = $('.js-menu-btn').is(":visible");

  $('.js-menu-btn').click(function (event) {
    $('.js-menu-content').slideToggle();
    event.stopPropagation();
    $('.js-menu-content > li span + ul').slideUp();
    $('.js-menu-content > li span').removeClass('open');
    $('.js-menu-btn').toggleClass('open');
  });

  $(document).mouseup(function (e) {
    var container = $('.js-menu li');
    if (container.has(e.target).length === 0) {
      $('.js-menu-content > li span + ul').slideUp();
      $('.js-menu-content > li span').removeClass('open');
      $('.js-menu-content > li').removeClass('active');
      $('.js-menu-content > li:first-child').addClass('active');
    }
    container = $('.js-menu');
    if (container.has(e.target).length === 0) {
      if ($(window).width() < '480') {
        $('.js-menu-content').slideUp();
        $('.js-menu-btn').removeClass('open');
      }
    }
  });

  $(function () {

    $.myfn = function (li) {
      $(li + ' > span').on('click', function () {
        var thisContent = $(this).siblings('ul');
        $(li + ' span + ul').not(thisContent).slideUp();
        $(this).siblings('ul').slideToggle();

        $(li + ' span').not(this).removeClass('open');
        $(this).toggleClass('open');

        $(li).not(this).removeClass('active');
        $(this).parent().toggleClass('active');
      });
    };

    $.myfn('.js-menu-content > li');
    $.myfn('.js-menu-content > li > ul > li');

  });

  $('.calendar__month').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: '<span class="calendar__arrow calendar__arrow_prev">«</span>',
    nextArrow: '<span class="calendar__arrow calendar__arrow_next">»</span>',
  });

});
