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
  $("#photos .surface").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/surface.jpg" alt="surface of             mars">');
    $("#caption").text('Photo from the surface of Mars.');
  });
  $("#photos .homes").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/homes.jpg" alt="homes of             mars">');
    $("#caption").text('A visual representation of homes on Mars.');
  });
  $("#photos .astronaut").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/astronaut.jpg" alt="astronaut of             mars">');
    $("#caption").text('An astronaut on the surface of Mars.');
  });
  $("#photos .sunrise").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/sunrise.jpg" alt="sunrise of             mars">');
    $("#caption").text('Sunrise on Mars.');
  });
  $("#photos .transit").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/transit.jpg" alt="transit of             mars">');
    $("#caption").text('The Mars Transit Vehicle.');
  });
});
