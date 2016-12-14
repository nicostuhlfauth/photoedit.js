/**
 * Created by nico on 13.12.16.
 */

function splitArray(array, counter) {
  var matrix = [], i, j;

  for (i = 0, j = -1; i < array.length; i++) {
    if (i % counter === 0) {
      j++;
      matrix[j] = [];
    }

    matrix[j].push(array[i]);
  }

  return matrix;
}

