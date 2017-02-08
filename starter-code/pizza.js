// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $('.sauce-white').removeClass('sauce-white');
  $('.pep').hide();
  $('.mushroom').hide();
  $('.green-pepper').hide();
  $('.price li').hide('active');

// var result = "$" + sum + pizza;
// var pizza = 10;
// var pepperonni = 1;
// var greenPeppers = 1;
// var whiteSauce = 3;
// var glutenFreeCrust = 5;

  $('.btn-pepperonni').on("click", function (e) {
    $(this).toggleClass('Active');
    $(".price li:first-child").toggle(500);
    $(".pep").toggle(500);

    // $('.roni').show();
  // if ($('.btn-pepperonni').hasClass('active')) {
  //   sum += pepperonni;
  // } else {
  //   sum -= pepperonni;
  });

  $('.btn-mushrooms').on("click", function (e) {
    $(this).toggleClass('Active');
    $(".price li:nth-child(2)").toggle(500);
    $(".mushroom").toggle(500);

  });

  $('.btn-green-peppers').on("click", function (e) {
    $(this).toggleClass('Active');
    $(".price li:nth-child(3)").toggle(500);
    $(".green-pepper").toggle(500);
  });

    $(".btn-crust").on("click", function(e) {
      $(this).toggleClass('Active');
      $(".price li:nth-child(4)").toggle(500);
      $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn-sauce").on("click", function(e) {
    $(this).toggleClass('Active');
    $(".price li:nth-child(5)").toggle(500);
    $(".sauce").toggleClass("sauce-white");
  });
});
