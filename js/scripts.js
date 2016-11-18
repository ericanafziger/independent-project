$(document).ready(function(){
  $("#apply").click(function(){
    $(".apply").delay(500).fadeIn(2000);
    $(".project").fadeOut();
    $(".header li").removeClass("active");
    $(".header li:last").addClass("active");
  });
  $("#project").click(function(){
    $(".apply").fadeOut();
    $(".project").delay(500).fadeIn(2000);
    $(".header li").removeClass("active");
    $(".header li:first").addClass("active");
  });
  $("#photos .surface").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/surface.jpg" alt="surface of             mars">');
  });
  $("#photos .homes").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/homes.jpg" alt="homes of             mars">');
  });
  $("#photos .astronaut").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/astronaut.jpg" alt="astronaut of             mars">');
  });
  $("#photos .sunrise").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/sunrise.jpg" alt="sunrise of             mars">');
  });
  $("#photos .transit").click(function(){
    $("#photos img").removeClass("active");
    $(this).addClass("active");
    $("#display").html('<img class="active" src="img/transit.jpg" alt="transit of             mars">');
  });
});
