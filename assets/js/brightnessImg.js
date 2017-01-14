/**
 * Changes brightness depending on selected threshold
 */

function brightness(data, threshold) {
  for (i = 0; i < data.length; i = i + 4) {
    data[i] = data[i] * threshold;
    data[i + 1] = data[i + 1] * threshold;
    data[i + 2] = data[i + 2] * threshold;
  }
  return data;
}
