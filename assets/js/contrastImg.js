/**
 * Created by nico on 13.12.16.
 */

function changeContrast(data, level) {

  // compare: http://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
  var factor = (259*(level+255))/(255*(259-level));

  for (i = 0; i < data.length; i = i+4) {
    data[i] = factor * (data[i] -128) + 128;
    data[i+1] = factor * (data[i+1] -128) + 128;
    data[i+2] = factor * (data[i+2] -128) + 128;
  }
  return data;
}
