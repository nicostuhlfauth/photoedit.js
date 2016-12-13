/**
 * Created by benedikt on 13.12.16.
 */

function monochrome(data, threshold, red1, green1, blue1, red2, green2, blue2) {

  for (i = 0; i < data.length; i = i + 4) {
    var grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    if (grayscale < threshold){
      data[i] = red1;
      data[i + 1] = green1;
      data[i + 2] = blue1;
    } else {
      data[i] = red2;
      data[i + 1] = green2;
      data[i + 2] = blue2;
    }
  }

  return data;
}
