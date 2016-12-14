/**
 * Created by nico on 13.12.16.
 */

function mirrorImg(data, width, height) {

  data = splitArray(data, 4);
  var newArray = data;

  for (i= 0; i < width; i++) {
    for (j = 1; j <= height; j++) {
      newArray[(j-1)*width+(width-1-i)][0] = data[(j-1)*width+i][0];
      newArray[(j-1)*width+(width-1-i)][1] = data[(j-1)*width+i][1];
      newArray[(j-1)*width+(width-1-i)][2] = data[(j-1)*width+i][2];
      newArray[(j-1)*width+(width-1-i)][3] = data[(j-1)*width+i][3];
    }
  }

  console.log(data[500][0]);
  console.log(newArray[500][0]);

}
