$(document).ready(function() {


var liked = false;
var likedamount = 0;
var prevamount = 0;
var numLikes;
var comment;
var line = 1;
var choice;

var comments = [
    'So cool !🔥',
    'Love it!🔝',
    '👌'
];

// likebutton clicked //
  $(".likebtn:not(.you)").click(function(){
    if($(this).parent().hasClass("liked")){
      // $(this).siblings("svg").children("#rightheart").addClass("breakright");
      // $(this).siblings("svg").children("#leftheart").addClass("breakleft");
      // $(this).hide();
    } else{
      numLikes = parseInt($(this).parent().parent().parent().find('.numlikes').html());
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
      $(this).parent().parent().parent().find('.numlikes').html(numLikes.toString());
      $(this).parent().addClass("liked");
      shrinkHeart();
      showHeart();
      liked = true;

      var image = $(this);
      popup(image);
    }
  });

  $(".likedbutton:not(.you)").click(function(){
    // $(this).children("#rightheart").addClass("breakright");
    // $(this).children("#leftheart").addClass("breakleft");
  });

// own likebutton clicked //
  $(".likebtn.you").click(function(){
    if($(this).parent().hasClass("liked")){

    } else{
      shrinkHeart();
      addToConsole("Jezelf liken...");
      $(this).parent().addClass("liked");
    }
  });

// show heart when icon pressed //
  function showHeart(){
      // $(".liked").children(".likedbtn").show();
      $(".liked").children(".likedbutton").show();
      $(".liked").children(".likebtn").hide();
      // $(".likedbtn").show();
      $(".heart").fadeIn("fast");
      $(".heart").fadeOut("fast");
  }

// disable scroll untill liked //

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  var scrollDisabled = false;

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
    scrollDisabled = true;
    growHeart();
    $(".arrow").toggle();
  }

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
      scrollDisabled = false;
      $(".arrow").toggle();
      addToConsole("Zo, dat was niet zo moeilijk toch");
  }


/////////////////////////////////////////////

// flash heart icon //
  function flashHeart(){
    $(".likedbtn").fadeIn(50).delay(100).fadeOut(50);
  }

  function growHeart(){
    $(".likebtn").addClass("grow");
    $(".likedbtn").addClass("grow");
  }

  function shrinkHeart(){
    $(".likebtn").removeClass("grow");
    $(".likedbtn").removeClass("grow");
    if(scrollDisabled == true){
      enableScroll();
    } else{

    }
  }

  function look(){
    $("#image").attr("src", "img/1-eyes.jpg");
  }

  function popup(target){
    $(".popup").show();

    var image = $(target).parent().parent().parent().find('#image').attr('src');
    var heart = $(target).parent().parent().parent().find('.heart');
    $(".ja").click(function() {
      var link = document.createElement('a');
      link.href = image;
      link.download = image;
      document.body.appendChild(link);
      link.click();
      $(".popup").hide();
      choice = 1;
      return choice;
    });

    $(".nee").click(function() {
      $(".popup").hide();
      choice = 2;
      react(choice, target);
      $(target).siblings("svg").children("#rightheart").addClass("breakright");
      $(target).siblings("svg").children("#leftheart").addClass("breakleft");
      $(heart).fadeIn("fast");
      $(heart).children().children("#leftheart").addClass("breakleft");
      $(heart).children().children("#rightheart").addClass("breakright");
    });
  }

  function react(choice, target){
    if(choice == 1){
      console.log(choice);
      console.log('prevamount = '+prevamount);
      console.log('likedamount = '+likedamount);
    }

    if(choice == 2){
      $(target).parent().find(".likedbtn").hide();
      addToConsole('Zo leuk vind je hem dus niet?');
      if(prevamount == 0){
        likedamount = 0;
      } else{
        likedamount -= 1;
      }
      console.log('prevamount = '+prevamount);
      console.log('likedamount = '+likedamount);
    }
  }

// shake post slightly//
  function shake() {
    console.log("shake");
    $(".hearticon").effect("shake", {times:3, distance:4}, 500);
  }
// shake post heavier//
  function shake2(){
    console.log("shake2");
    $("#visible").effect("shake", {times:5, distance:20}, 700);
  }

// shake post heavy and change pic//
  function changePic() {
    $("#visible").effect("shake", {times:2, distance:40}, 200);
    document.getElementById("image").src="img/2.jpg";
    $("#visible").effect("shake", {times:2, distance:40}, 200);
  }

  function addComment(text){
    $(".desc:not(.you)").append("<li><span class='name'>You </span>"+text+"</li>")
  }

  function addToConsole(text){
    $(".console").prepend("<p class='line"+line+"'></p>");
    $(".line"+line).typed({
      strings: [text],
      showCursor: false,
      typeSpeed: 0
    });
    line++;
  }

  $('.comment:not(.you)').keypress(function(e) {
    if (e.which == 13) {
        var text = $(this).val();
        addComment(text);
        $(this).val("");
    }
  });

  $('.comment.you').keypress(function(e) {
    if (e.which == 13) {
        var text = "Ik ben een loser";
        $(".desc.you").append("<li><span class='name'>You </span>"+text+"</li>")
        $(this).val("");
        addToConsole("Oeps, wilde je wat anders typen?");
    }
  });

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
      addToConsole('welkom');
    }

    if(time == 5000 && liked == true){
      addToConsole('Snel, daar houd ik van');
    }

    if(time == 12000 && liked == false){
      addToConsole('Ga je nog liken?');
    }

    if(time == 18000 && liked == false){
      addToConsole('Hallo?');
      look();
    }

    if(time == 21000 && liked == false){
      addToConsole('TIJD OM TE LIKEN!');
      disableScroll();
    }

    // if(time == 20000 && liked == false){
    //   alert("Instagram is om te liken, dat je het even weet.");
    // }


    if (time == 30000 && likedamount > prevamount){
      if(likedamount == 1){
          addToConsole('Hmm, pas '+likedamount+' like');
      }
      if(likedamount > 1){
          addToConsole('Zo he, al '+likedamount+' likes');
      }
    }

    if (time == 33000){
          addToConsole('Heb je al een reactie geplaatst?');
    }

    if(time == 36000){
      comment = comments[Math.floor(Math.random()*comments.length)];

      $(".comment").typed({
        strings: [comment],
        showCursor: false,
        typeSpeed: 0
      });
    }

    if(time == 38000){
      $(".comment").val("");
      addComment(comment);
    }


    if(time == 150000 && liked == false){
    //////////// WEBCAM \\\\\\\\\\\\
      var video = document.querySelector("#videoElement");
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, handleVideo, videoError);
      }
      function handleVideo(stream) {
        //success
        video.src = window.URL.createObjectURL(stream);
        video.play();
        cam = true;

        setTimeout(function(){
          $('.snap').click();
          $(".you").show();
        }, 1000);
      }
      function videoError(e) {
          //failure
          addToConsole('Durf je niet?');
      }
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      // // Trigger photo take
      $(".snap").on("click", function() {
        context.drawImage(video, 0, 0, 598, 450);
      });
      //////////// WEBCAM \\\\\\\\\\\\
    }

    if(cam == true){
      camtime += 100;
      // console.log(camtime);
    }

    if(camtime == 5000){
      addToConsole('Hahaha');
    }

    if(camtime == 6000){
      addToConsole('Sorry, maar 0 likes...');
    }


}

window.setTimeout(instance, 100);




});
