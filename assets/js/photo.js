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


  function startRotate(imageData, newArray) {
    console.log("Hallo");

    imageData.data.set(newArray);
    ctx.putImageData(imageData, 0, 0);


  }


  var img = new Image();
  img.src = "http://localhost:1337/images/bca10cde-eb98-4943-8f10-69a0407d6501.png";
  //var img = document.getElementById("source");

  img.onload = function() {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    loadImage(this);





    // grayscale

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    /*for (i = 0; i < data.length; i = i+4) {
      var grayscale = data[i] * 0.3 + data[i+1] * 0.59 + data[i+2] * 0.11;
      data[i] = grayscale;
      data[i+1] = grayscale;
      data[i+2] = grayscale;
    }

    ctx.putImageData(imageData, 0, 0);
*/



    // image Rotating - does not work yet!

    var newArray = data;
    var imageData2 = ctx.createImageData(imageData.height, imageData.width);


    for (i = 0; i < img.naturalWidth; i++) {
      for (j = 0; j < img.naturalHeight; j++) {
        var newX = 4*i*Math.cos(90)+ 4*j*Math.sin(90);
        var newY = (-1)*4*i*Math.sin(90) + 4*j*Math.cos(90);
        newArray[newX*img.naturalWidth+newY] = data[i*img.naturalWidth+j];
        if ((newX*img.naturalWidth+newY) == 4*i*j) startRotate(imageData2, newArray);
      }
    }

    imageData2.data.set(newArray);



    ctx.putImageData(imageData2, 0, 0);


  }



}
