jQuery(document).ready(function ($) {
  $(".button-hampuger").click(function () {
    $(".menu-slidebar").toggleClass("active");
  });

  $(".button-close").click(function () {
    $(".menu-slidebar").removeClass("active");
  });
});
