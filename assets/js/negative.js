/**
 * Created by benedikt on 11.12.16.
 */

/*
function negative() {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  function loadImage(img) {
    console.log(canvas);
    console.log(ctx);
    ctx.drawImage(img, 0, 0);
  }

  img.onload = function() {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    loadImage(this);


    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (i = 0; i < data.length; i = i + 4) {
      var negative = data[i] * -1 + data[i + 1] * -1 + data[i + 2] * -1;
      data[i] = negative;
      data[i + 1] = negative;
      data[i + 2] = negative;
    }

    ctx.putImageData(imageData, 0, 0);
  }
}
*/
