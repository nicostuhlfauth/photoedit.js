/**
 * Copyright (c) 2017 Nicolas Stuhlfauth, Benedikt Rauch
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Simple Gauß filter on 3x3 kernels
 *
 * checking in loops if pixels are defined (in image) and counting temp to calculate avarage values
 */

function gaussFilter3(data, width, height) {

  var temp = 0;
  var neighbour0 = 0;
  var neighbour1 = 0;
  var neighbour2 = 0;
  var neighbour3 = 0;

  data = splitArray(data, 4);

  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      //eine Reihe Drüber
      if (data[(((j - 2) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 2 * data[(((j - 2) * width) + (i))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 2) * width) + (i))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 2) * width) + (i))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 2) * width) + (i))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i + 1))][3];
        temp++;
      }

      //gleiche Reihe
      if (data[(((j - 1) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 2 * data[(((j - 1) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 1) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 1) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 1) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 2 * data[(((j - 1) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 1) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 1) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 1) * width) + (i + 1))][3];
        temp++;
      }

      //eine darunter
      if (data[(((j) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 2 * data[(((j) * width) + (i))][0];
        neighbour1 = neighbour1 + 2 * data[(((j) * width) + (i))][1];
        neighbour2 = neighbour2 + 2 * data[(((j) * width) + (i))][2];
        neighbour3 = neighbour3 + 2 * data[(((j) * width) + (i))][3];
        temp++;
      }
      if (data[(((j) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i + 1))][3];
        temp++;
      }

      newArray.push((((4 * (data[(((j - 1) * width) + i)][0])) + neighbour0) / 16));
      newArray.push((((4 * (data[(((j - 1) * width) + i)][1])) + neighbour1) / 16));
      newArray.push((((4 * (data[(((j - 1) * width) + i)][2])) + neighbour2) / 16));
      newArray.push(255);

      temp = 0;
      neighbour0 = 0;
      neighbour1 = 0;
      neighbour2 = 0;
      neighbour3 = 0;
    }
  }
  return newArray;
}


/**
 * Simple Gauß filter on 5x5 kernels
 *
 * checking in loops if pixels are defined (in image) and counting temp to calculate avarage values
 */

function gaussFilter5(data, width, height) {

  var temp = 0;
  var neighbour0 = 0;
  var neighbour1 = 0;
  var neighbour2 = 0;
  var neighbour3 = 0;

  data = splitArray(data, 4);

  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      //Zwei Reihen Drüber
      if (data[(((j - 3) * width) + (i - 2))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i - 2))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i - 2))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i - 2))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i - 2))][3];
        temp++;
      }
      if (data[(((j - 3) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j - 2) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 4 * data[(((j - 2) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 4 * data[(((j - 2) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 4 * data[(((j - 2) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 3) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 7 * data[(((j - 2) * width) + (i))][0];
        neighbour1 = neighbour1 + 7 * data[(((j - 2) * width) + (i))][1];
        neighbour2 = neighbour2 + 7 * data[(((j - 2) * width) + (i))][2];
        neighbour3 = neighbour3 + 7 * data[(((j - 2) * width) + (i))][3];
        temp++;
      }
      if (data[(((j - 3) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j - 2) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 4 * data[(((j - 2) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 4 * data[(((j - 2) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 4 * data[(((j - 2) * width) + (i + 1))][3];
        temp++;
      }
      if (data[(((j - 3) * width) + (i + 2))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i + 2))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i + 2))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i + 2))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i + 2))][3];
        temp++;
      }

      //eine Reihe Drüber
      if (data[(((j - 2) * width) + (i - 2))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j - 2) * width) + (i - 2))][0];
        neighbour1 = neighbour1 + 4 * data[(((j - 2) * width) + (i - 2))][1];
        neighbour2 = neighbour2 + 4 * data[(((j - 2) * width) + (i - 2))][2];
        neighbour3 = neighbour3 + 4 * data[(((j - 2) * width) + (i - 2))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 16 * data[(((j - 2) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 16 * data[(((j - 2) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 16 * data[(((j - 2) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 16 * data[(((j - 2) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 26 * data[(((j - 2) * width) + (i))][0];
        neighbour1 = neighbour1 + 26 * data[(((j - 2) * width) + (i))][1];
        neighbour2 = neighbour2 + 26 * data[(((j - 2) * width) + (i))][2];
        neighbour3 = neighbour3 + 26 * data[(((j - 2) * width) + (i))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 16 * data[(((j - 2) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 16 * data[(((j - 2) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 16 * data[(((j - 2) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 16 * data[(((j - 2) * width) + (i + 1))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i + 2))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j - 2) * width) + (i + 2))][0];
        neighbour1 = neighbour1 + 4 * data[(((j - 2) * width) + (i + 2))][1];
        neighbour2 = neighbour2 + 4 * data[(((j - 2) * width) + (i + 2))][2];
        neighbour3 = neighbour3 + 4 * data[(((j - 2) * width) + (i + 2))][3];
        temp++;
      }

      //gleiche Reihe
      if (data[(((j - 1) * width) + (i - 2))] != undefined) {
        neighbour0 = neighbour0 + 7 * data[(((j - 1) * width) + (i - 2))][0];
        neighbour1 = neighbour1 + 7 * data[(((j - 1) * width) + (i - 2))][1];
        neighbour2 = neighbour2 + 7 * data[(((j - 1) * width) + (i - 2))][2];
        neighbour3 = neighbour3 + 7 * data[(((j - 1) * width) + (i - 2))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 26 * data[(((j - 1) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 26 * data[(((j - 1) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 26 * data[(((j - 1) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 26 * data[(((j - 1) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 26 * data[(((j - 1) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 26 * data[(((j - 1) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 26 * data[(((j - 1) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 26 * data[(((j - 1) * width) + (i + 1))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 2))] != undefined) {
        neighbour0 = neighbour0 + 7 * data[(((j - 1) * width) + (i + 2))][0];
        neighbour1 = neighbour1 + 7 * data[(((j - 1) * width) + (i + 2))][1];
        neighbour2 = neighbour2 + 7 * data[(((j - 1) * width) + (i + 2))][2];
        neighbour3 = neighbour3 + 7 * data[(((j - 1) * width) + (i + 2))][3];
        temp++;
      }

      //eine darunter
      if (data[(((j) * width) + (i - 2))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j) * width) + (i - 2))][0];
        neighbour1 = neighbour1 + 4 * data[(((j) * width) + (i - 2))][1];
        neighbour2 = neighbour2 + 4 * data[(((j) * width) + (i - 2))][2];
        neighbour3 = neighbour3 + 4 * data[(((j) * width) + (i - 2))][3];
        temp++;
      }
      if (data[(((j) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 16 * data[(((j) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 16 * data[(((j) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 16 * data[(((j) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 16 * data[(((j) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 26 * data[(((j) * width) + (i))][0];
        neighbour1 = neighbour1 + 26 * data[(((j) * width) + (i))][1];
        neighbour2 = neighbour2 + 26 * data[(((j) * width) + (i))][2];
        neighbour3 = neighbour3 + 26 * data[(((j) * width) + (i))][3];
        temp++;
      }
      if (data[(((j) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 16 * data[(((j) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 16 * data[(((j) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 16 * data[(((j) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 16 * data[(((j) * width) + (i + 1))][3];
        temp++;
      }
      if (data[(((j) * width) + (i + 2))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j) * width) + (i + 2))][0];
        neighbour1 = neighbour1 + 4 * data[(((j) * width) + (i + 2))][1];
        neighbour2 = neighbour2 + 4 * data[(((j) * width) + (i + 2))][2];
        neighbour3 = neighbour3 + 4 * data[(((j) * width) + (i + 2))][3];
        temp++;
      }

      //zwei reihen darunter
      if (data[(((j + 1) * width) + (i - 2))] != undefined) {
        neighbour0 = neighbour0 + data[(((j + 1) * width) + (i - 2))][0];
        neighbour1 = neighbour1 + data[(((j + 1) * width) + (i - 2))][1];
        neighbour2 = neighbour2 + data[(((j + 1) * width) + (i - 2))][2];
        neighbour3 = neighbour3 + data[(((j + 1) * width) + (i - 2))][3];
        temp++;
      }
      if (data[(((j + 1) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j + 1) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 4 * data[(((j + 1) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 4 * data[(((j + 1) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 4 * data[(((j + 1) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j + 1) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + 7 * data[(((j + 1) * width) + (i))][0];
        neighbour1 = neighbour1 + 7 * data[(((j + 1) * width) + (i))][1];
        neighbour2 = neighbour2 + 7 * data[(((j + 1) * width) + (i))][2];
        neighbour3 = neighbour3 + 7 * data[(((j + 1) * width) + (i))][3];
        temp++;
      }
      if (data[(((j + 1) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 4 * data[(((j + 1) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 4 * data[(((j + 1) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 4 * data[(((j + 1) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 4 * data[(((j + 1) * width) + (i + 1))][3];
        temp++;
      }
      if (data[(((j + 1) * width) + (i + 2))] != undefined) {
        neighbour0 = neighbour0 + data[(((j + 1) * width) + (i + 2))][0];
        neighbour1 = neighbour1 + data[(((j + 1) * width) + (i + 2))][1];
        neighbour2 = neighbour2 + data[(((j + 1) * width) + (i + 2))][2];
        neighbour3 = neighbour3 + data[(((j + 1) * width) + (i + 2))][3];
        temp++;
      }

      newArray.push((((41 * (data[(((j - 1) * width) + i)][0])) + neighbour0) / 273));
      newArray.push((((41 * (data[(((j - 1) * width) + i)][1])) + neighbour1) / 273));
      newArray.push((((41 * (data[(((j - 1) * width) + i)][2])) + neighbour2) / 273));
      newArray.push(255);

      temp = 0;
      neighbour0 = 0;
      neighbour1 = 0;
      neighbour2 = 0;
      neighbour3 = 0;
    }
  }
  return newArray;
}
