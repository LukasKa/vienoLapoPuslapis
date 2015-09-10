$(function(){

"use strict";

//Activate Scrollspy//

var topoffset = 50; //meniu aukscio reikme





$('body').scrollspy({
  target: 'header .navbar',
  offset: topoffset
});
//add inbody class prie <header><nav>
 var hash = $(this).find('li.active a').attr('href');

  if(!hash !== '#featured'){
    $('header nav').addClass('inbody');
  }else{
    $('header nav').removeClass('inbody');
  }

// Prideda inbody class'e prie nav kalses(<heade><nav .... .... inbody>) kai suveikia scrollspy metodas //
$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){

  var hash = $(this).find('li.active a').attr('href');
  if(!hash !== '#featured'){
    $('header nav').addClass('inbody');
  }else{
    $('header nav').removeClass('inbody');
  }
});

//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


  // rankinis karuseles paveiksliuku keitimas pagrindineje dlyje, apacioje
var slideqty = $('#featured .item').length;



for(var i = 0; i < slideqty; i++){
  var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
  $('#featured ol').append(insertText);
}

var wheight = $(window).height();//suzimon narsykles lango dydi
$('.fullheight').css('height', wheight);//nustatom dydi skirta langui

//replace IMG inside carousels with a background image
  $('#featured .item img').each(function(){
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });
  //adjust height of .fullheight elements on windows resize
  $(window).resize(function(){
    wheight = $(window).height(); //suzimon narsykles lango dydi
    $('.fullheight').css('height', wheight);//nustatom dydi skirta langui

  });

var randSlide = Math.floor(Math.random()*slideqty);
$('#featured .item').eq(randSlide).addClass('active');


  $('.carousel').carousel({
    interval: false
  });


});
 




