$(document).ready(function() {

var liked = false;

  $(".likebtn").click(function(){
      $(".numlikes").html("3");
      showHeart();
      liked = true;
      console.log("1"+liked);
  });

// show heart //
  function showHeart(){
    if(liked){

    }
    else{
      document.getElementById("change").className = "fa fa-heart likedbtn";
      $(".heart").fadeIn("fast");
      $(".heart").fadeOut("fast");
    }
  }

  function flashHeart(){
    $(".fa-heart-o.likebtn").removeClass("fa-heart-o likebtn").addClass("fa-heart likedbtn");
    console.log("flash");
  }


// set time to like post //
  setTimeout(init, 5000);


// check if post is liked under 5 sec //
  function init(){
    if(liked){
      console.log("liked");
    }
    else{
      console.log("init: not liked");
      // shake();
      flashHeart();
    }
  }
/////////////////////////////////////////////

// check if post is liked between functions //
  function checkLiked(nextFunction){
    if(liked){
      console.log("liked");
    }
    else{
      console.log("check: not liked");
      nextFunction();
    }
  }
/////////////////////////////////////////////

  function shake() {
    console.log("shake");
    $("#toggle").effect("shake", {times:3, distance:4}, 500);
    setTimeout(function() {
      checkLiked(shake2);
    }, 4000)
  }

  function shake2(){
    console.log("shake2");
    $("#toggle").effect("shake", {times:5, distance:20}, 700);
    setTimeout(function() {
      checkLiked(changePic);
    }, 3000)
  }


  function changePic() {
    $("#toggle").effect("shake", {times:2, distance:40}, 200);
    document.getElementById("image").src="img/2.jpg";
    $("#toggle").effect("shake", {times:2, distance:40}, 200);
  }




});
