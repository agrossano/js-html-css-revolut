$(document).ready(function () {


  var menuDrop = $('li h3')
  $('.dropdown').hide();


  $(menuDrop).click(function (e) {
    $('.dropdown').hide();
    $(this).siblings('.dropdown').show();
    e.stopPropagation();
  });


  $(document).click(function (e) {
    $('.dropdown').hide();
  });


  $(".fas").click(function () {
    $(".hamburger-menu").addClass('fadeIn');
  });


  $(".close").click(function () {
    $(".hamburger-menu").removeClass('fadeIn');
  });


});