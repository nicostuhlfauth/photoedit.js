/**
 * Created by nico on 09.12.16.
 */

window.onload = function() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  function loadImage(img) {
    console.log(canvas);
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


    // grayscale

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (i = 0; i < data.length; i = i+4) {
      var grayscale = data[i] * 0.3 + data[i+1] * 0.59 + data[i+2] * 0.11;
      data[i] = grayscale;
      data[i+1] = grayscale;
      data[i+2] = grayscale;
    }

    ctx.putImageData(imageData, 0, 0);


  }



}
