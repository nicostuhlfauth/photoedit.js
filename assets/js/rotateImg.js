/**
 * Created by benedikt on 13.12.16.
 */

function startRotate(data, width, height) {
  console.log("Hallo");

  var newArray = [];

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      //var newX = i*Math.cos(90)+ 4*j*Math.sin(90);
      //var newY = (-1)*4*i*Math.sin(90) + 4*j*Math.cos(90);
      newArray[newX * width + newY] = data[i * width + j];
    }
  }

  return newArray;

}

function rotate90v1(data, height, width) {
  //data = splitArray(data, 4);
  var newArray = [];
  var h_t = width;
  var w_t = height;
  console.log(data);

  for (var y_t = 0; y_t <= h_t; y_t++) {
    for (var x_t = 0; x_t <= w_t; x_t++) {

      newArray[w_t * y_t + x_t] = data[(width * x_t + (height - y_t - 1))];
      newArray[(w_t * y_t + x_t) + 1] = data[(width * x_t + (height - y_t - 1)) + 1];
      newArray[(w_t * y_t + x_t) + 2] = data[(width * x_t + (height - y_t - 1)) + 2];
      newArray[(w_t * y_t + x_t) + 3] = data[(width * x_t + (height - y_t - 1)) + 3];

    }
  }
  return newArray;
}

function rotate90(data, height, width) {
  var p_h = height;
  var p_w = width;

  data = splitArray(data, 4);


  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

    }
  }
}





