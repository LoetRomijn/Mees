$(document).ready(function() {


  //
  //
  // function changeBackgroundSmoothly() {
  //     $('.background').delay(5000).fadeTo(5000, 0 );
  // }
  //
  // changeBackgroundSmoothly();

  $(".Theo").click(function() {
    $('.Theo-msg').css("bottom", "-30px");
    $(this).hide();
  });

  $(".verberg-theo").click(function() {
    $('.Theo-msg').css("bottom", "-2000px");
    $('.Theo').show();
  });


  $(".Maria").click(function() {
    $('.Maria-msg').css("bottom", "-100px");
    $(this).hide();
  });

  $(".verberg-maria").click(function() {
    $('.Maria-msg').css("bottom", "-2000px");
    $('.Maria').show();
  });

  $(".Koen").click(function() {
    $('.Koen-msg').css("bottom", "-230px");
    $(this).hide();
  });

  $(".verberg-koen").click(function() {
    $('.Koen-msg').css("bottom", "-2000px");
    $('.Koen').show();
  });

  $(".Loet").click(function() {
    $('.Loet-msg').css("bottom", "-100px");
    $(this).hide();
  });

  $(".verberg-loet").click(function() {
    $('.Loet-msg').css("bottom", "-2000px");
    $('.Loet').show();
  });


  // $(".bird").addClass("birdmove");



  function animateBird() {
    $(".bird").addClass("birdmove").delay(5000).queue(function(next) {
      $(this).addClass("birdrotate").delay(5000);

      next();
    });
  };
  animateBird();


  $(".bird").click(function(){
    $(this).removeClass("birdmove birdrotate").delay(200).queue(function(){
      animateBird();
    });

  });
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
