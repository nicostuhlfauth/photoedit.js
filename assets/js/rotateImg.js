/**
 * Rotate image clockwise by pushing pixels in new array
 */


function rotateRight(data, height, width) {
  data = splitArray(data, 4);
  var newArray = [];
  for (x = 0; x < width; x++) {
    for (y = height; y > 0; y--) {
      newArray.push(data[width*(y-1)+x][0], data[width*(y-1)+x][1], data[width*(y-1)+x][2], data[width*(y-1)+x][3]);
    }
  }
  return newArray;
}

/**
 * Rotate image counterclockwise by pushing pixels in new array
 */


function rotateLeft(data, height, width) {
  data = splitArray(data, 4);
  var newArray = [];

  for (x = width; x > 0; x--) {
    for (y = 0; y < height; y++) {
      newArray.push(data[(width*y)+x-1][0], data[(width*y)+x-1][1], data[(width*y)+x-1][2], data[(width*y)+x-1][3]);
    }
  }
  return newArray;
}

