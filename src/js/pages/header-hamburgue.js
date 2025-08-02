export function handleMenu() {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
  $(".hamburger").click(function () {
    $(".navigation").toggleClass("show");
  });

  $(".navigation a").click(function () {
    $(".navigation").removeClass("show");
  });
}

