/**
 * Grayscale algorithm
 */

function grayscale(data) {

  for (i = 0; i < data.length; i = i + 4) {
    var grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    data[i] = grayscale;
    data[i + 1] = grayscale;
    data[i + 2] = grayscale;
  }

  return data;
}
