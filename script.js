$(document).ready(function() {


var liked = false;

  $(".likebtn").click(function(){
      liked = true;
      console.log("1"+liked);
  });

// set time to like post //
  setTimeout(checkTime, 5000);


// check if post is liked under 5 sec //
  function checkTime(){
    if(liked){
      console.log("liked");
    }
    else{
      console.log("not liked");
      shake();
    }
  }

  function shake() {
    $("#toggle").effect("shake", {times:3, distance:4}, 500);
    setTimeout(shake2, 3000);
  }

  function shake2(){
    $("#toggle").effect("shake", {times:5, distance:20}, 700);
    setTimeout(changePic, 3000);
  }


  function changePic() {
    $("#toggle").effect("shake", {times:2, distance:40}, 200);
    document.getElementById("image").src="img/2.jpg";
    $("#toggle").effect("shake", {times:2, distance:40}, 200);
  }




});
