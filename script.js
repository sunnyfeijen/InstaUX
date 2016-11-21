$(document).ready(function() {

var liked = false;
var numLikes;

  $(".likebtn").click(function(){
      numLikes = $(this).parent().parent().find('.numlikes').html();
      numLikes++;
      $(this).parent().parent().find('.numlikes').html(numLikes);
      $(this).parent().addClass("liked");
      showHeart();
      liked = true;
  });

// show heart when icon pressed //
  function showHeart(){
    if(liked){
    }
    else{
      $(".liked").children(".likedbtn").show();
      // $(".likedbtn").show();
      $(".heart").fadeIn("fast");
      $(".heart").fadeOut("fast");
    }
  }


// set time to like post //
  setTimeout(init, 1000);

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
    setTimeout(function() {
      checkLiked(shake);
    }, 2000)
  }
// shake post slightly//
  function shake() {
    console.log("shake");
    $(".hearticon").effect("shake", {times:3, distance:4}, 500);
    setTimeout(function() {
      checkLiked(shake2);
    }, 2000)
  }
// shake post heavier//
  function shake2(){
    console.log("shake2");
    $("#visible").effect("shake", {times:5, distance:20}, 700);
    setTimeout(function() {
      checkLiked(changePic);
    }, 3000)
  }

// shake post heavy and change pic//
  function changePic() {
    $("#visible").effect("shake", {times:2, distance:40}, 200);
    document.getElementById("image").src="img/2.jpg";
    $("#visible").effect("shake", {times:2, distance:40}, 200);
  }

});
