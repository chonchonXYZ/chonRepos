$(function() {
  $("#navi_top").click(function() {
    $("html, body").animate({scrollTop: $("#top").offset().top});
  });
  $("#navi_about").click(function() {
    $("html, body").animate({scrollTop: $("#about").offset().top});
  });
  $("#navi_work").click(function() {
    $("html, body").animate({scrollTop: $("#work").offset().top});
  });
  $("#navi_vision").click(function() {
    $("html, body").animate({scrollTop: $("#vision").offset().top});
  });
  $("#navi_contact").click(function() {
    $("html, body").animate({scrollTop: $("#contact").offset().top});
  });
});
