/**
 * Copyright (c) 2017 Nicolas Stuhlfauth, Benedikt Rauch
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Helper function to split one dimensional array in two dimensional array
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
