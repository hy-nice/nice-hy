$(function () {
  AOS.init();
  var indexH = $(".index_txt").height();
  aboutY = $(".about").offset().top;
  scrollM = $(".main_publishing").offset();

  $(".mouse_scroll").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: scrollM.top });
  });

  $(window).scroll(function () {
    var scrollY = $(window).scrollTop();

    if (indexH < scrollY) {
      $(".gotop").stop().fadeIn(200);
    } else {
      $(".gotop").stop().fadeOut(200);
    }
  });
  $(".gotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(".about_bt").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: aboutY,
      },
      1000
    );
  });

  $(".all_bt").on("click", function (e) {
    e.preventDefault();
    $(".works_modal").fadeIn();
    $("body").css("overflow", "hidden");
  });
  $(".works_close, .works_back").on("click", function () {
    $(".works_modal").fadeOut();
    $("body").css("overflow", "auto");
  });

  var skill_ps = new ProgressBar.Line(".skill_ps", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  var skill_ai = new ProgressBar.Line(".skill_ai", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  var skill_xd = new ProgressBar.Line(".skill_xd", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  var skill_html = new ProgressBar.Line(".skill_html", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  var skill_css = new ProgressBar.Line(".skill_css", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  var skill_js = new ProgressBar.Line(".skill_js", {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1500,
    color: "#F6EDDB",
    trailColor: "none",
    trailWidth: 1,
  });

  $(window).scroll(function () {
    var scrollY = $(window).scrollTop();

    if (aboutY - 150 < scrollY) {
      skill_ps.animate(1.0);
      skill_ai.animate(1.0);
      skill_xd.animate(1.0);
      skill_html.animate(1.0);
      skill_css.animate(1.0);
      skill_js.animate(1.0);
    } else if (aboutY > scrollY) {
      skill_ps.animate(0);
      skill_ai.animate(0);
      skill_xd.animate(0);
      skill_html.animate(0);
      skill_css.animate(0);
      skill_js.animate(0);
    }
  });
  var portBts = $(".port_bt > a");
  var speed = 2500;
  var btH = 306;
  var btTop = 14;
  $.each(portBts, function (index, item) {
    var thisBt = $(this);
    thisBt.mouseenter(function () {
      var temp = $(this).find(".mockup_thum");
      var tempH = temp.height();
      temp.stop().animate(
        {
          top: -1 * tempH + btH,
        },
        speed
      );
    });
    thisBt.mouseleave(function () {
      var temp = $(this).find(".mockup_thum");
      var tempH = temp.height();
      temp.stop().animate(
        {
          top: btTop,
        },
        speed
      );
    });
  });
});
