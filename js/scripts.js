$(document).ready(function(){
  $("#tickets").click(function(){
    $(".tickets").delay(500).fadeIn(2000);
    $(".project").fadeOut();
    $(".header li").removeClass("active");
    $(".header li:last").addClass("active");
  });
  $("#project").click(function(){
    $(".tickets").fadeOut();
    $(".project").delay(500).fadeIn(2000);
    $(".header li").removeClass("active");
    $(".header li:first").addClass("active");
  });
});
