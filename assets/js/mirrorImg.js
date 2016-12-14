/**
 * Created by nico on 13.12.16.
 */

function mirrorImg(data, width, height) {

  data = splitArray(data, 4);

  var newArray = new Array();


  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      //if (j == 1 && i == 0) console.log(width + height + j + i);

      //newArray[width * j - (i + 1)] = new Array();

      //newArray[width * j - (i + 1)][0] = data[width * (j - 1) + i][0];
      //newArray[width * j - (i + 1)][1] = data[width * (j - 1) + i][1];
      //newArray[width * j - (i + 1)][2] = data[width * (j - 1) + i][2];
      //newArray[width * j - (i + 1)][3] = data[width * (j - 1) + i][3];

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
