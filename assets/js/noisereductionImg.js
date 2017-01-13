/**
 * Created by pingu on 18.12.2016.
 */
function noiseReduction(data, width, height, threshold) {

  var temp = 0;
  var neighbour0 = 0;
  var neighbour1 = 0;
  var neighbour2 = 0;
  var neighbour3 = 0;

  data = splitArray(data, 4);

  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      //eine Reihe Drüber
      if (data[(((j - 2) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i))][3];
        temp++;
      }
      if (data[(((j - 2) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 2) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j - 2) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j - 2) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j - 2) * width) + (i + 1))][3];
        temp++;
      }

      //gleiche Reihe
      if (data[(((j - 1) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 1) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + data[(((j - 1) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + data[(((j - 1) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + data[(((j - 1) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j - 1) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j - 1) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j - 1) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j - 1) * width) + (i + 1))][3];
        temp++;
      }

      //eine darunter
      if (data[(((j) * width) + (i - 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j) * width) + (i))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i))][3];
        temp++;
      }
      if (data[(((j) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i + 1))][3];
        temp++;
      }

      if (((data[(((j - 1) * width) + i)][0] + threshold) <= (neighbour0 / temp)) ||
          ((data[(((j - 1) * width) + i)][0] - threshold) >= (neighbour0 / temp)) ||
          ((data[(((j - 1) * width) + i)][1] + threshold) <= (neighbour1 / temp)) ||
          ((data[(((j - 1) * width) + i)][1] - threshold) >= (neighbour1 / temp)) ||
          ((data[(((j - 1) * width) + i)][2] + threshold) <= (neighbour2 / temp)) ||
          ((data[(((j - 1) * width) + i)][2] - threshold) >= (neighbour2 / temp))) {

        newArray.push((((neighbour0 / temp) + (data[(((j - 1) * width) + i)][0]))/2));
        newArray.push((((neighbour1 / temp) + (data[(((j - 1) * width) + i)][1]))/2));
        newArray.push((((neighbour2 / temp) + (data[(((j - 1) * width) + i)][2]))/2));
        newArray.push(255);

      } else {
       //newArray.push(0);
       //newArray.push(0);
       //newArray.push(0);
       //newArray.push(255);
       newArray.push(data[(((j - 1) * width) + i)][0]);
       newArray.push(data[(((j - 1) * width) + i)][1]);
       newArray.push(data[(((j - 1) * width) + i)][2]);
       newArray.push(255);
      }

      temp = 0;
      neighbour0 = 0;
      neighbour1 = 0;
      neighbour2 = 0;
      neighbour3 = 0;
    }
  }
  return newArray;
}
