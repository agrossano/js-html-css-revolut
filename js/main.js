$(document).ready(function () {


  var menuDrop = $('li h3')
  var isOpen = false;
  $('.dropdown').hide();



  $(menuDrop).click(function (e) {
    $('.dropdown').hide();
    $(this).siblings('.dropdown').toggle();
    e.stopPropagation();
    console.log(isOpen)
  })


  $(window).click(function (e) {
    $('.dropdown').hide();
  })


  $(".fas").click(function () {
    $(".hamburger-menu").addClass('fadeIn');
  });


  $(".close").click(function () {
    $(".hamburger-menu").removeClass('fadeIn');
  });


});