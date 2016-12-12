$(document).ready(function() {

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


    if(cam == true){
      camtime += 100;
      // console.log(camtime);
    }

    if(camtime == 5000){
      prepend('<p>HAHAHA</p>');
    }


}

window.setTimeout(instance, 100);

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
      $('#snap').click();
      $(".you").show();
    }, 1000);
  }
  function videoError(e) {
      //failure
      $('.container').prepend('<p>Zie je niks moois?</p>');
  }
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // // Trigger photo take
  document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 598, 450);
  });
  //////////// WEBCAM \\\\\\\\\\\\




});
