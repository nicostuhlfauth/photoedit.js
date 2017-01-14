/**
 * Created by nico on 09.12.16.
 */

window.onload = function () {

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var img = new Image();
  img.src = "/images/" + document.getElementById("getURL").innerHTML;

  var imageData;
  var data;

  var dataBackup = new Map();

  img.onload = function () {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imageData.data;

    //greyscale

    document.getElementById("btn-grayscale").addEventListener("click", function(event) {
      dataBackup.set("grayscale", data.slice());
      imageData.data.set(grayscale(data));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("greyscale-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("grayscale"));
      ctx.putImageData(imageData, 0, 0);
    });

    //negative

    document.getElementById("btn-negative").addEventListener("click", function(event) {
      dataBackup.set("negative", data.slice());
      imageData.data.set(negativeImg(data));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("negative-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("negative"));
      ctx.putImageData(imageData, 0, 0);
    });

    // rotate

    document.getElementById("btn-rotate").addEventListener("click", function() {
      imageData2 = ctx.createImageData(img.naturalHeight, img.naturalWidth);
      imageData2.data.set(rotate(data, img.naturalHeight, img.naturalWidth));
      canvas.width = img.naturalHeight;
      canvas.height = img.naturalWidth;
      ctx.putImageData(imageData2, 0, 0);
    });

    //scale

    document.getElementById("btn-scale").addEventListener("click", function(event) {
      dataBackup.set("scale", data.slice());
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = canvas.width*(document.getElementById("scale-threshold").value);
      canvas.height = canvas.height*(document.getElementById("scale-threshold").value);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });

    document.getElementById("negative-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("scale"));
      ctx.putImageData(imageData, 0, 0);
    });


    //monochrome (data, Schwellwert, r1, g1, b1, r2, g2,b2)
    //imageData.data.set(monochrome(data, 64, 0, 0, 255, 0, 255, 0));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-monochrome").addEventListener("click", function(event) {
      dataBackup.set("monochrome", data.slice());
      imageData.data.set(monochrome(data, 64, 0, 0, 255, 0, 255, 0));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("monochrome-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("monochrome"));
      ctx.putImageData(imageData, 0, 0);
    });

    //change color
    //imageData.data.set(correctColor(data, 70, 0, 0));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-rgbchanel").addEventListener("click", function(event) {
      dataBackup.set("rgbchanel", data.slice());
      imageData.data.set(correctColor(data,
        parseFloat(document.getElementById("r-channel").value),
        parseFloat(document.getElementById("g-channel").value),
        parseFloat(document.getElementById("b-channel").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("rgb-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("rgbchanel"));
      ctx.putImageData(imageData, 0, 0);
    });


    //brightness (data, brightness - value 0 = black, 1 0 normal, >1 brighter)
    //imageData.data.set(brightness(data, 1.5));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-brightness").addEventListener("click", function(event) {
      dataBackup.set("brightness", data.slice());
      imageData.data.set(brightness(data, parseFloat(document.getElementById("brightness-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("brightness-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("brightness"));
      ctx.putImageData(imageData, 0, 0);
    });

    // contrast, werte zwischen -255 und +255

    //imageData.data.set(changeContrast(data, 70));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-contrast").addEventListener("click", function(event) {
      dataBackup.set("contrast", data.slice());
      imageData.data.set(changeContrast(data, parseFloat(document.getElementById("contrast-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("contrast-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("contrast"));
      ctx.putImageData(imageData, 0, 0);
    });

    //noise reduction Schwellwert zwischen 0 und 255, je kleiner desto stärker weichzeichner
    //imageData.data.set(noiseReduction(data, img.naturalWidth, img.naturalHeight, 25));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-noise").addEventListener("click", function(event) {
      dataBackup.set("noise", data.slice());
      imageData.data.set(noiseReduction(data, img.naturalWidth, img.naturalHeight, parseFloat(document.getElementById("noise-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("noise-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("noise"));
      ctx.putImageData(imageData, 0, 0);
    });

    //Gauß 3x3 Filter
    //imageData.data.set(gaussFilter3(data, img.naturalWidth, img.naturalHeight));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-gauss3").addEventListener("click", function(event) {
      dataBackup.set("gauss3", data.slice());
      imageData.data.set(gaussFilter3(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("gauss3-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("gauss3"));
      ctx.putImageData(imageData, 0, 0);
    });
    //Gauß 5x5 Filter
    //imageData.data.set(gaussFilter5(data, img.naturalWidth, img.naturalHeight));
    //ctx.putImageData(imageData, 0 , 0);

      document.getElementById("btn-gauss5").addEventListener("click", function(event) {
        dataBackup.set("gauss3", data.slice());
        imageData.data.set(gaussFilter5(data, img.naturalWidth, img.naturalHeight));
        ctx.putImageData(imageData, 0, 0);
      });

      document.getElementById("gauss5-backup").addEventListener("click", function(event) {
        imageData.data.set(dataBackup.get("gauss5"));
        ctx.putImageData(imageData, 0, 0);
      });

    //simple Blur Filter
    //imageData.data.set(simpleBlur(data, img.naturalWidth, img.naturalHeight));
    //ctx.putImageData(imageData, 0, 0);

    document.getElementById("btn-blur").addEventListener("click", function(event) {
      dataBackup.set("blur", data.slice());
      imageData.data.set(simpleBlur(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("blur-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("blur"));
      ctx.putImageData(imageData, 0, 0);
    });

    // Kanten
    document.getElementById("btn-edge").addEventListener("click", function(event) {
      dataBackup.set("edge", data.slice());
      imageData.data.set(edgeDetect(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("edge-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("edge"));
      ctx.putImageData(imageData, 0, 0);
    });

    // Mirror
    document.getElementById("btn-mirror1").addEventListener("click", function(event) {
      dataBackup.set("mirror", data.slice());
      imageData.data.set(mirrorImg(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });
    document.getElementById("btn-mirror2").addEventListener("click", function(event) {
      dataBackup.set("mirror", data.slice());
      imageData.data.set(mirrorHorizontalImg(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    document.getElementById("mirror-backup").addEventListener("click", function(event) {
      imageData.data.set(dataBackup.get("mirror"));
      ctx.putImageData(imageData, 0, 0);
    });
  }
}
