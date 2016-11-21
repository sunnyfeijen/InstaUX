$(document).ready(function() {

// check elements visible on screen //
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

if ($('.hearticon').isOnScreen()) {
  console.log("on screen");
  $('.hearticon').parent().addClass("aaa");
}

$('article').click(function(){
    alert($('.hearticon').isOnScreen());
});
////////////////////////////////


var liked = false;

  $(".likebtn").click(function(){
      $(".numlikes").html("3");
      showHeart();
      liked = true;
  });

// show heart when icon pressed //
  function showHeart(){
    if(liked){
    }
    else{
      $(".likedbtn").show();
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
