/**
 * Created by nico on 09.12.16.
 */

window.onload = function() {

  var canvas = document.getElementById("myCanvas");

  function loadImage(img) {
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    console.log(ctx);
    ctx.drawImage(img, 0, 0);
  }

  var img = new Image();
  img.src = "http://localhost:1337/images/1e827def-21d0-428c-9d79-1892882691e5.png";
  //var img = document.getElementById("source");

  img.onload = function () {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    loadImage(this);
  }



}
