/**
 * Copyright (c) 2017 Nicolas Stuhlfauth, Benedikt Rauch
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Created by nico on 09.12.16.
 */

window.onload = function () {

  // generates Canvas, using Canvas defined in views/editfile.ejs
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var img = new Image();

  // path of our image, generated with invisible helper div
  img.src = "/images/" + document.getElementById("getURL").innerHTML;

  var imageData;
  var data;

  // map, used for undo buttons, one for every function
  var dataBackup = new Map();

  // as soon as img loading is completely finished
  img.onload = function () {

    // setting canvas w and h to image properties
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(this, 0, 0);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imageData.data;

    // calling grayscale listener, maps data to grayscale key
    document.getElementById("btn-grayscale").addEventListener("click", function (event) {
      dataBackup.set("grayscale", data.slice());
      imageData.data.set(grayscale(data));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo grayscale
    document.getElementById("greyscale-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("grayscale"));
      ctx.putImageData(imageData, 0, 0);
    });

    // calling negative listener, maps data to negative key
    document.getElementById("btn-negative").addEventListener("click", function (event) {
      dataBackup.set("negative", data.slice());
      imageData.data.set(negativeImg(data));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo negative
    document.getElementById("negative-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("negative"));
      ctx.putImageData(imageData, 0, 0);
    });

    // calling rotate right listener, swaps w and h in ImageData
    document.getElementById("btn-rotate").addEventListener("click", function () {
      imageData2 = ctx.createImageData(img.naturalHeight, img.naturalWidth);
      imageData2.data.set(rotateRight(data, img.naturalHeight, img.naturalWidth));
      canvas.width = img.naturalHeight;
      canvas.height = img.naturalWidth;
      ctx.putImageData(imageData2, 0, 0);
    });

    // calling rotate left listener, swaps w and h in ImageData
    document.getElementById("btn-rotate2").addEventListener("click", function () {
      imageData2 = ctx.createImageData(img.naturalHeight, img.naturalWidth);
      imageData2.data.set(rotateLeft(data, img.naturalHeight, img.naturalWidth));
      canvas.width = img.naturalHeight;
      canvas.height = img.naturalWidth;
      ctx.putImageData(imageData2, 0, 0);
    });

    // calling scale event listener, gets factor and uses as function argument
    document.getElementById("btn-scale").addEventListener("click", function (event) {
      var factor = parseFloat(document.getElementById("scale-factor").value);
      var imageDataScale = ctx.createImageData(img.naturalWidth * (factor), img.naturalHeight * (factor));
      imageDataScale.data.set(scale(data, img.naturalWidth, img.naturalHeight, factor));
      canvas.width = img.naturalWidth * (factor);
      canvas.height = img.naturalHeight * (factor);
      ctx.putImageData(imageDataScale, 0, 0);
    });

    // calling monochrome event listener, calling data backup, using radiobuttons for colorselection, slider for threshold
    document.getElementById("btn-monochrome").addEventListener("click", function (event) {
      dataBackup.set("monochrome", data.slice());
      var color1;
      var color2;

      if (document.getElementById("color1a").checked) {
        color1 = {"red": 244, "green": 67, "blue": 54};
      }
      if (document.getElementById("color1b").checked) {
        color1 = {"red": 205, "green": 220, "blue": 57};
      }
      if (document.getElementById("color1c").checked) {
        color1 = {"red": 63, "green": 81, "blue": 181};
      }
      if (document.getElementById("color2a").checked) {
        color2 = {"red": 244, "green": 67, "blue": 54};
      }
      if (document.getElementById("color2b").checked) {
        color2 = {"red": 205, "green": 220, "blue": 57};
      }
      if (document.getElementById("color2c").checked) {
        color2 = {"red": 63, "green": 81, "blue": 181};
      } else {
        color1 = {"red": 0, "green": 0, "blue": 0};
        color2 = {"red": 255, "green": 255, "blue": 255};
      }
      imageData.data.set(monochrome(data, parseFloat(document.getElementById("binary-threshold").value), color1, color2));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo monochrome
    document.getElementById("monochrome-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("monochrome"));
      ctx.putImageData(imageData, 0, 0);
    });

    // calling RGB event listener
    document.getElementById("btn-rgbchanel").addEventListener("click", function (event) {
      dataBackup.set("rgbchanel", data.slice());
      imageData.data.set(correctColor(data,
        parseFloat(document.getElementById("r-channel").value),
        parseFloat(document.getElementById("g-channel").value),
        parseFloat(document.getElementById("b-channel").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo RGB
    document.getElementById("rgb-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("rgbchanel"));
      ctx.putImageData(imageData, 0, 0);
    });


    // calling brightness event listener, uses data backup
    document.getElementById("btn-brightness").addEventListener("click", function (event) {
      dataBackup.set("brightness", data.slice());
      imageData.data.set(brightness(data, parseFloat(document.getElementById("brightness-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo brightness
    document.getElementById("brightness-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("brightness"));
      ctx.putImageData(imageData, 0, 0);
    });

    // contrast, values between -255 and +255, calls event listener
    document.getElementById("btn-contrast").addEventListener("click", function (event) {
      dataBackup.set("contrast", data.slice());
      imageData.data.set(changeContrast(data, parseFloat(document.getElementById("contrast-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo contrast
    document.getElementById("contrast-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("contrast"));
      ctx.putImageData(imageData, 0, 0);
    });

    // noise reduction, threshold between 0 and 255
    document.getElementById("btn-noise").addEventListener("click", function (event) {
      dataBackup.set("noise", data.slice());
      imageData.data.set(noiseReduction(data, img.naturalWidth, img.naturalHeight, parseFloat(document.getElementById("noise-threshold").value)));
      ctx.putImageData(imageData, 0, 0);
    });

    // noise reduction backup
    document.getElementById("noise-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("noise"));
      ctx.putImageData(imageData, 0, 0);
    });

    //Gauß 3x3 Filter
    document.getElementById("btn-gauss3").addEventListener("click", function (event) {
      dataBackup.set("gauss3", data.slice());
      imageData.data.set(gaussFilter3(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // redo gauss3
    document.getElementById("gauss3-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("gauss3"));
      ctx.putImageData(imageData, 0, 0);
    });

    //Gauß 5x5 Filter
    document.getElementById("btn-gauss5").addEventListener("click", function (event) {
      dataBackup.set("gauss3", data.slice());
      imageData.data.set(gaussFilter5(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // redo gauss5
    document.getElementById("gauss5-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("gauss5"));
      ctx.putImageData(imageData, 0, 0);
    });

    //simple Blur Filter
    document.getElementById("btn-blur").addEventListener("click", function (event) {
      dataBackup.set("blur", data.slice());
      imageData.data.set(simpleBlur(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // redo blur
    document.getElementById("blur-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("blur"));
      ctx.putImageData(imageData, 0, 0);
    });

    // edge detection
    document.getElementById("btn-edge").addEventListener("click", function (event) {
      dataBackup.set("edge", data.slice());
      imageData.data.set(edgeDetect(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // redo edge detection
    document.getElementById("edge-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("edge"));
      ctx.putImageData(imageData, 0, 0);
    });

    // Mirror vertically
    document.getElementById("btn-mirror1").addEventListener("click", function (event) {
      dataBackup.set("mirror", data.slice());
      imageData.data.set(mirrorImg(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // Mirror horizontically
    document.getElementById("btn-mirror2").addEventListener("click", function (event) {
      dataBackup.set("mirror", data.slice());
      imageData.data.set(mirrorHorizontalImg(data, img.naturalWidth, img.naturalHeight));
      ctx.putImageData(imageData, 0, 0);
    });

    // undo mirror
    document.getElementById("mirror-backup").addEventListener("click", function (event) {
      imageData.data.set(dataBackup.get("mirror"));
      ctx.putImageData(imageData, 0, 0);
    });

    // download the edited imge as jpeg
    document.getElementById("btn-download").addEventListener("click", function (event) {
      this.href=document.getElementById("myCanvas").toDataURL("image/jpeg", 1);
      this.download="bild.jpg";
    });

  }
}
