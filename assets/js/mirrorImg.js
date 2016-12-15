/**
 * Created by nico on 13.12.16.
 */

function mirrorImg(data, width, height) {

  data = splitArray(data, 4);

  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      newArray.push(data[width * j - (i + 1)][0]);
      newArray.push(data[width * j - (i + 1)][1]);
      newArray.push(data[width * j - (i + 1)][2]);
      newArray.push(data[width * j - (i + 1)][3]);


      if (i * j >= (width - 1) * height) {
        return newArray;
      }
    }

  }
}

/*
function mirrorHorizontalImg(data, width, height) {

  data = splitArray(data, width);

  var newArray = new Array();


  for (i =  0; i < 5; i++) {
    newArray.unshift(data[i]);
    if (newArray.length == data.length * 4) {
      return newArray;
    }
  }
}

*/
