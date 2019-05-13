new GitHubCalendar(".calendar", "jakewski");
$("#life").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#early").offset().top
    },
    1000
  );
  return false;
});
$("#compsci").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#CS").offset().top
    },
    1000
  );
  return false;
});
$("#software").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#SE").offset().top
    },
    1000
  );
  return false;
});
$("#hmu").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    1000
  );
});

$("#earlysection").css("visibility", "");
$("#early").addClass("animated fadeInLeft");
$("#earlysection *").addClass("animated fadeIn");

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
//   if (scroll > $("#early").offset().top - window.innerHeight) {
//     $("#earlysection").css("visibility", "");
//     $("#early").addClass("animated fadeInLeft");
//     $("#earlysection *").addClass("animated fadeIn");
//   }
  if (scroll > $("#CS").offset().top - window.innerHeight - 100) {
    $("#compsection").css("visibility", "");
    $("#CS").addClass("animated fadeInLeft");
    $("#compsection *").addClass("animated fadeIn");
  }
  if (scroll > $("#SE").offset().top - window.innerHeight - 100) {
    $("#casual *").css("visibility", "");
    $("#SE").addClass("animated fadeInLeft");
    $("#casual *").addClass("animated fadeIn");
  }
  if (scroll > $("#professional").offset().top - window.innerHeight - 100) {
    $("#professional").css("visibility", "");
    $("#professional *").addClass("animated fadeIn");
  }
  if (scroll > $("#contact").offset().top - window.innerHeight - 100) {
    $("#contact").addClass("animated bounceInUp");
  }
  position = scroll;
});
