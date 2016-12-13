/**
 * Created by nico on 09.12.16.
 */

window.onload = function () {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var img = new Image();
  img.src = "http://localhost:1337/images/97bb8e9e-fd12-49d8-8686-b6952b477faf.jpg";

  var imageData;
  var data;

  img.onload = function () {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imageData.data;

    //grayscale
    //imageData.data.set(grayscale(data));
    //ctx.putImageData(imageData, 0, 0);

    //negative
    //imageData.data.set(negativeImg(data));
    //ctx.putImageData(imageData, 0, 0);

    //monochrome (data, Schwellwert, r1, g1, b1, r2, g2,b2)
    //imageData.data.set(monochrome(data, 128, 255, 0, 0, 0, 255, 0));
    //ctx.putImageData(imageData, 0, 0);

    //change color
    //imageData.data.set(correctColor(data, 70, 0, 0));
    //ctx.putImageData(imageData, 0, 0);

    //brightness (data, brightness - value 0 = black, 1 0 normal, >1 brighter)
    imageData.data.set(brightness(data, 1));
    ctx.putImageData(imageData, 0, 0);
  }
}
