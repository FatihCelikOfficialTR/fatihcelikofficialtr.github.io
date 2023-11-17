/**/
$('.buy-drop__btn1').click(function(){
  $('.buy-drop__block1').toggle();
});

$('.buy-drop__btn2').click(function(){
  $('.buy-drop__block2').toggle();
});

$('.buy-drop__block1 .buy-drop__h').click(function(){
  var algo = $(this).find('input[type="hidden"]').val();
  $('#buyAlgo').val(algo);
  $('.buy-drop__block1').toggle();

  var block = $('.buy-drop__info').not('.buy-drop__info2');
  block.find('li').html($(this).html());
});

$('.buy-drop__block2 .buy-drop__item').click(function(){
  var currency = $(this).find('input[type="hidden"]').val();
  $('#buyCurrency').val(currency);
  $('.buy-drop__block2').toggle();

  var block = $('.buy-drop__info2');
  block.find('.cur-img img').attr('src', $(this).find('.cur-img img').attr('src'));
  block.find('span').not('.cur-img').text($(this).find('span').not('.cur-img').text());
});

$('.deposit-drop__btn').click(function(){
  $('.deposit-drop__block').toggle();
});

$('.deposit-drop__list .deposit-drop__item').click(function(){
  var currency = $(this).find('input[type="hidden"]').val();
  $('#depositCurrency').val(currency);
  $('.deposit-drop__block').toggle();

  var block = $('.deposit-drop__info');
  block.find('.cur-img img').attr('src', $(this).find('.cur-img img').attr('src'));
  block.find('span').not('.cur-img').text($(this).find('span').not('.cur-img').text());
});

$('.exchange-drop__btn').click(function(){
  $('.exchange-drop__block').toggle();
});

$('.exchange-drop__list .exchange-drop__item').click(function(){
  var currency = $(this).find('input[type="hidden"]').val();
  $('#exchangeCurrency').val(currency);
  $('.exchange-drop__block').toggle();

  var block = $('.exchange-drop__info');
  block.find('.cur-img img').attr('src', $(this).find('.cur-img img').attr('src'));
  block.find('span').not('.cur-img').text($(this).find('span').not('.cur-img').text());
});

$('.output-drop__btn').click(function(){
  $('.output-drop__block').toggle();
});

$('.output-drop__list .output-drop__item').click(function(){
  var currency = $(this).find('input[type="hidden"]').val();
  $('#outputCurrency').val(currency);
  $('.output-drop__block').toggle();

  var block = $('.output-drop__info');
  block.find('.cur-img img').attr('src', $(this).find('.cur-img img').attr('src'));
  block.find('span').not('.cur-img').text($(this).find('span').not('.cur-img').text());
});

$('.sell-drop__btn').click(function(){
  $('.sell-drop__block').toggle();
});

$('.sell-drop__list .sell-drop__item').click(function(){
  var currency = $(this).find('input[type="hidden"]').val();
  $('#sellAlgo').val(currency);
  $('.sell-drop__block').toggle();

  var block = $('.sell-drop__info');
  block.find('.cur-img img').attr('src', $(this).find('.cur-img img').attr('src'));
  block.find('span').not('.cur-img').text($(this).find('span').not('.cur-img').text());
});

$('.history-drop__btn1').click(function(){
  $('.history-drop__block1').toggle();
});

$('.history-drop__btn2').click(function(){
  $('.history-drop__block2').toggle();
});

/* */
$(function () {

  $('.nav__menu-btn').click(function (e) {
    e.preventDefault();
    $('.nav__list').css({ display: 'flex' });
  });

  $('.nav__menu-close').click(function (e) {
    e.preventDefault();
    $('.nav__list').css({ display: 'none' });
  });

  $('.sub__menu-btn').click(function (e) {
    e.preventDefault();
    $('.sub__list').css({ display: 'block' });
  });

  $('.sub__menu-close').click(function (e) {
    e.preventDefault();
    $('.sub__list').css({ display: 'none' });
  });

});

$('#withdraw').click(function(){
  $('#form-withdraw').css('display', 'block');
  $('#form-safety').css('display', 'none');
});

$('#safety').click(function(){
  $('#form-safety').css('display', 'block');
  $('#form-withdraw').css('display', 'none');
});


$(function () {

  $('#btn-sha').click(function (e) {
    e.preventDefault();
    $('.income-sha').css({ display: 'block'});
  }); 

  $('.close-sha').click(function (e) {
    e.preventDefault();
    $('.income-sha').hide();
  });

  $('#btn-ethash').click(function (e) {
    e.preventDefault();
    $('.income-ethash').css({ display: 'block'});
  }); 
  
  $('.close-ethash').click(function (e) {
    e.preventDefault();
    $('.income-ethash').hide();
  });

  $('#btn-scrypt').click(function (e) {
    e.preventDefault();
    $('.income-scrypt').css({ display: 'block'});
  }); 
  
  $('.close-scrypt').click(function (e) {
    e.preventDefault();
    $('.income-scrypt').hide();
  });

});

/*history*/
$('#history-deposit').click(function(){
  $('.history-table__deposit').css('display', 'table');
  $('.history-table__buy, .history-table__output, .history-table__exchange, .history-table__sell').css('display', 'none');
});

$('#history-buy').click(function(){
  $('.history-table__buy').css('display', 'table');
  $('.history-table__deposit, .history-table__output, .history-table__exchange, .history-table__sell').css('display', 'none');
});

$('#history-output').click(function(){
  $('.history-table__output').css('display', 'table');
  $('.history-table__buy, .history-table__deposit, .history-table__exchange, .history-table__sell').css('display', 'none');
});

$('#history-exchange').click(function(){
  $('.history-table__exchange').css('display', 'table');
  $('.history-table__deposit, .history-table__output, .history-table__buy, .history-table__sell').css('display', 'none');
});

$('#history-sell').click(function(){
  $('.history-table__sell').css('display', 'table');
  $('.history-table__deposit, .history-table__output, .history-table__buy, .history-table__exchange').css('display', 'none');
});


$('.lang-item').click(function(e){
  e.preventDefault();

  var lang = $(this).data('lang');
  if (lang != $('#switcherLang').find('input[name="lang"]').val()) {
    $('#switcherLang').find('input[name="lang"]').val(lang);
    $('#switcherLang').submit();
  }

});

$('.forgot-pass').click(function(e) {
  e.preventDefault();

  $('#btn-login').modal('hide');
  $('#btn-reset').modal('show');
});

if ($('#btn-recovery').length > 0) {
  $('#btn-recovery').modal('show');
}


/*Carousel*/
$(".currency-card").owlCarousel({
  nav: true,
  loop: false,
  dots: false,
  items: 3,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    1060: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$(".mining-currencies__card").owlCarousel({
  nav: true,
  loop: false,
  dots: false,
  items: 3,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    1060: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$('.news-card__link').click(function(e) {
  e.preventDefault();

  $('#btn-news').find('h3').text($(this).data('title'));
  $('#btn-news').find('.news-card__img img').attr('src', $(this).data('img'));
  $('#btn-news').find('.news-card__text').text($(this).data('text'));
  $('#btn-news').find('.news-card__time').text($(this).data('date'));
  $('#btn-news').modal('toggle');
});

$(".news-card").owlCarousel({
  nav: true,
  loop: false,
  dots: false,
  items: 3,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    1060: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$(".mining-block").owlCarousel({
  nav: true,
  loop: false,
  dots: false,
  mouseDrag: false,
  touchDrag: false,
  items: 3,
  navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

