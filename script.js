$(document).ready(function() {


var liked = false;
var likedamount = 0;
var prevamount = 0;
var numLikes;

  $(".likebtn").click(function(){
    if($(this).parent().hasClass("liked")){

    } else{
      numLikes = parseInt($(this).parent().parent().find('.numlikes').html());
      var x = Math.floor((Math.random() * 5) + 1);
      if(x == 3){
        // 1/5 chance to add 2-11 likes
        numLikes = numLikes + Math.floor((Math.random() * 11) + 2);
      } else{
        // 4/5 chance to add 1 likes
        numLikes++;
      }
      prevamount = likedamount;
      likedamount++;
      $(this).parent().parent().find('.numlikes').html(numLikes.toString());
      $(this).parent().addClass("liked");
      showHeart();
      liked = true;
    }
  });

// show heart when icon pressed //
  function showHeart(){
      $(".liked").children(".likedbtn").show();
      // $(".likedbtn").show();
      $(".heart").fadeIn("fast");
      $(".heart").fadeOut("fast");
  }


// set time to like post //
  // setTimeout(init, 1000);

// check if post is liked under 5 sec //
  function init(){
    if(liked){
    }
    else{
      flashHeart();
    }
  }
/////////////////////////////////////////////

// check if post is liked between functions //
  function checkLiked(nextFunction){
    if(liked){
    }
    else{
      nextFunction();
    }
  }
/////////////////////////////////////////////

// flash heart icon //
  function flashHeart(){
    $(".likedbtn").fadeIn(50).delay(100).fadeOut(50);
    // setTimeout(function() {
    //   checkLiked(shake);
    // }, 2000)
  }


// shake post slightly//
  function shake() {
    console.log("shake");
    $(".hearticon").effect("shake", {times:3, distance:4}, 500);
    // setTimeout(function() {
    //   checkLiked(shake2);
    // }, 2000)
  }
// shake post heavier//
  function shake2(){
    console.log("shake2");
    $("#visible").effect("shake", {times:5, distance:20}, 700);
    // setTimeout(function() {
    //   checkLiked(changePic);
    // }, 3000)
  }

// shake post heavy and change pic//
  function changePic() {
    $("#visible").effect("shake", {times:2, distance:40}, 200);
    document.getElementById("image").src="img/2.jpg";
    $("#visible").effect("shake", {times:2, distance:40}, 200);
  }


//////////////// CONSOLE \\\\\\\\\\\\\\\\\\

function prepend(message){
  $(".console").prepend(message);
}

var start = new Date().getTime();
var elapsed = '0.0';
var time = 0;
var camtime = 0;
var cam = false;

function instance()
{
    time += 100;

    var diff = (new Date().getTime() - start) - time;
    window.setTimeout(instance, (100 - diff));

    if(time == 1000){
      prepend('<p>Welkom</p>');
    }

    if(time == 5000 && liked == true){
      prepend('<p>Snel, daar houd ik van</p>');
    }

    if(time == 8000 && liked == false){
      prepend('<p>Ga je nog liken?</p>');
    }

    if(time == 10000 && liked == false){
      prepend('<p>Hallo?</p>');
      flashHeart();
      shake();
    }

    if(time == 12000 && liked == false){
      prepend('<p>Zie je niks moois?</p>');
    }

    if(time == 10000 && liked == true){
      prepend('<p>Eindelijk</p>');
    }

    if(time == 11000 && liked == true){
      prepend('<p>En nu meer</p>');
    }

    if (time == 13000 && likedamount > prevamount){
      prepend('<p>Lekkerrr</p>');
    }


    if(time == 20000 && liked == false){
      //////////// WEBCAM \\\\\\\\\\\\
        var video = document.querySelector("#videoElement");
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, handleVideo, videoError);
        }
        function handleVideo(stream) {
          //success
          $(".you").show();
          video.src = window.URL.createObjectURL(stream);
          cam = true;

        }
        function videoError(e) {
            //failure
            prepend('<p>Zie je niks moois?</p>');
        }
        //////////// WEBCAM \\\\\\\\\\\\
    }

    if(cam == true){
      camtime += 100;
      console.log(camtime);
    }

    if(camtime == 5000){
      prepend('<p>HAHAHA</p>');
    }


}

window.setTimeout(instance, 100);




});
