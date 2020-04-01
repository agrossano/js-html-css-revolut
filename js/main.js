$(document).ready(function () {


  $('.dropdown').hide();


  //variabile parente dropdown
  var p = $(this).parent();
  $('.dropdown').not(p).hide;

  $('li h3').click(function () {
    $('.dropdown').hide();
    $(this).siblings('.dropdown').toggle();
  })

  // $(window).click(function () {
  //   $('.dropdown').hide();
  // })


  $(".fas").click(function () {
    $(".hamburger-menu").show();
  });

  $(".close").click(function () {
    $(".hamburger-menu").hide();
  });


});