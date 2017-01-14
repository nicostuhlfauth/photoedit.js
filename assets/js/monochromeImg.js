/**
 * Created by benedikt on 13.12.16.
 */

function monochrome(data, threshold, color1, color2) {

  for (i = 0; i < data.length; i = i + 4) {
    var grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    if (grayscale < threshold){
      data[i] = color1.red;
      data[i + 1] = color1.green;
      data[i + 2] = color1.blue;
    } else {
      data[i] = color2.red;
      data[i + 1] = color2.green;
      data[i + 2] = color2.blue;
    }
  }

  return data;
}
