/**
 * Mirroring image vertically by pushing pixels in loop in new array
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

/**
 * Mirroring image horizontally by pushing pixels in loop in new array
 */

function mirrorHorizontalImg(data, width, height) {

  data = splitArray(data, 4);

  var newArray = new Array();

  for (y = height; y > 0; y--) {
    for (x = 1; x <= width; x++) {
      newArray.push(data[width * (y - 1) + x - 1][0], data[width * (y - 1) + x - 1][1], data[width * (y - 1) + x - 1][2], data[width * (y - 1) + x - 1][3]);
    }
  }
  return newArray;
}
