$(document).ready(function() {


  //
  //
  // function changeBackgroundSmoothly() {
  //     $('.background').delay(5000).fadeTo(5000, 0 );
  // }
  //
  // changeBackgroundSmoothly();

  $(".Theo").click(function() {
    $('.Theo-msg').css("bottom", "0");
    $(this).hide();
  });

  $(".verberg-theo").click(function() {
    $('.Theo-msg').css("bottom", "-2000px");
    $('.Theo').show();
  });


  $(".Maria").click(function() {
    $('.Maria-msg').css("bottom", "0");
    $(this).hide();
  });

  $(".verberg-maria").click(function() {
    $('.Maria-msg').css("bottom", "-2000px");
    $('.Maria').show();
  });

  $(".Koen").click(function() {
    $('.Koen-msg').css("bottom", "0");
    $(this).hide();
  });

  $(".verberg-koen").click(function() {
    $('.Koen-msg').css("bottom", "-2000px");
    $('.Koen').show();
  });

  $(".Loet").click(function() {
    $('.Loet-msg').css("bottom", "0");
    $(this).hide();
  });

  $(".verberg-loet").click(function() {
    $('.Loet-msg').css("bottom", "-2000px");
    $('.Loet').show();
  });


  // $(".bird").addClass("birdmove");

  function animateBird() {
    $(".bird").addClass("birdmove").delay(5000).queue(function(next){
      // $(this).hide();
      $(".bird-back").removeClass("hidden").addClass("birdmove-back");
      next();
    });



  };

    animateBird();

  // function animateBird() {
  //   $(".bird").addClass("birdmove").delay(5000).queue(function(next) {
  //     $(this).addClass("birdrotate1").delay(1000).queue(function(then) {
  //       $(this).addClass("birdrotate2");
  //       then();
  //     });
  //
  //     next();
  //   });
  // };
  // animateBird();
  //
  // });

  //
  // $(".bird").click(function(){
  //   $(this).removeClass("birdmove birdrotate1 birdrotate2").delay(200).queue(function(){
  //     animateBird();
  //   });
  //
  // $(".mees-vogel").click(function() {
  //   var mees = $(".mees-vogel");
  //   mees.animate({
  //     left: "+=50",
  //     top: "+=100"
  //   }, 1000, "swing", function() {
  //     console.log("stap 1");
  //     mees.animate({
  //       left: "+=60",
  //       top: "-50"
  //     }, 1000, "swing", function() {
  //       console.log("stap 2");
  //       mees.css("transform", "rotate(180deg)");
  //       mees.animate({
  //         left: "+=60",
  //         top: "+=50",
  //       }, 1000, "swing", function() {
  //         console.log("stap 3");
  //         mees.css("transform", "rotate(360deg)");
  //         mees.animate({
  //           left: "+=160",
  //           top: "+=150",
  //         }, 1000, "swing", function() {
  //           console.log("stap 4");
  //         });
  //       });
  //     });
  //   })
  // });

//     var mees = $(".mees-vogel");
//     mees.css("transform", "rotate(360deg)");
//     mees.animate({
//       left: "+=50",
//       top: "+=100"
//     }, 2000, "swing");
//     mees.animate({
//       left: "+=60",
//       top: "-50"
//     }, 2000, "swing");
//     console.log("stap 2");
//     // mees.css("transform", "rotate(180deg)");
//     mees.animate({
//       left: "+=100",
//       top: "30",
//     }, 2000, "swing");
//     console.log("stap 3");
//     mees.animate({
//       left: "+=200",
//       top: "10",
//     }, 2000, "swing", function(){
//       $(this).addClass("bird-back");
//     console.log("stap 4");
// });

  $(".verberg-theo").click(function() {
    $('.Theo-msg').css("bottom", "-2000px");
    $('.Theo').show();
  });


  $(".Maria").click(function() {
    $('.Maria-msg').css("bottom", "-50px");
    $(this).hide();
  });

  $(".verberg-maria").click(function() {
    $('.Maria-msg').css("bottom", "-2000px");
    $('.Maria').show();
  });

  $(".Koen").click(function() {
    $('.Koen-msg').css("bottom", "0px");
    $(this).hide();
  });

  $(".verberg-koen").click(function() {
    $('.Koen-msg').css("bottom", "-2000px");
    $('.Koen').show();
  });

  $(".Loet").click(function() {
    $('.Loet-msg').css("bottom", "-50px");
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

  $(".quiet").click(function(){
    var text = $(this).text();
      $(this).text(
        text == "Quiet time" ? "Party time!" : "Quiet time");

    $(".banana").toggleClass("hidden");
    $(".happybday").toggleClass("hidden");
  })

  $(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
    });
  });

});
