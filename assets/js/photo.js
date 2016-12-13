/**
 * Created by nico on 09.12.16.
 */

window.onload = function () {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  function loadImage(img) {
    console.log(canvas);
    console.log(ctx);
    ctx.drawImage(img, 0, 0);
  }


  var img = new Image();
  img.src = "http://localhost:1337/images/97bb8e9e-fd12-49d8-8686-b6952b477faf.jpg";
  //var img = document.getElementById("source");

  img.onload = function () {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    loadImage(this);


  }
}
