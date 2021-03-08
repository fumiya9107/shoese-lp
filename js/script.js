$(function(){
  $("#menubtn").click(function(){
      $("header nav").toggleClass("active");
      $(this).toggleClass("active");
      return false;
    });
});

$(function(){
  var dir = -1;
  var interval = 3000;
  var duration = 700;
  var timer;
  $("#slide ul").prepend($("#slide li:last-child"));
  $("#slide ul").css("left", -400);
  timer = setInterval(slideTimer, interval);

  function slideTimer(){
    if(dir == -1){
    $("#slide ul").animate({"left":"-=100%"}, duration,
    function(){
      $(this).append($("#slide li:first-child"));
      $(this).css("left", -400);

    });
  }else{
    $("#slide ul").animate({"left" : "+=100%"}, duration,
    function(){
      $(this).prepend($("#slide li:last-child"));
      $(this).css("left", -400);
      dir = -1;
    });
  }
}


  $("#prevBtn").click(function(){
    dir = 1;
    clearInterval(timer);
    timer=setInterval(slideTimer, interval);
    slideTimer();
  });

  $("#nextBtn").click(function(){
    dir=-1;
    clearInterval(timer);
    timer=setInterval(slideTimer, interval);
    slideTimer();
  });
});

$(function(){
$(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});
