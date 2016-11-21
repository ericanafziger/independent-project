$(document).ready(function(){
  $("#wrapper").fadeIn(2000);
  $("#image img").fadeIn(5000);
  $("#image .hidden-image-text").show();
  $("#apply").click(function(){
    $(".apply").delay(300).fadeIn(2000);
    $(".project").hide();
    $(".header li").removeClass("active");
    $(".header li:last").addClass("active");
  });
  $("#project").click(function(){
    $(".apply").hide();
    $(".project").delay(300).fadeIn(2000);
    $(".header li").removeClass("active");
    $(".header li:first").addClass("active");
  });

  $("#photos img").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    var photo = $(this).attr('src');
    var caption = $(this).attr('alt');
    $("#display").html('<img class="active" src=' + photo +'>');
    $("#caption").text(caption);
  });
});
