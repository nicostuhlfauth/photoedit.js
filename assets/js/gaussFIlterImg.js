/**
 * Created by pingu on 18.12.2016.
 */
function gaussFilter3(data, width, height) {

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
        neighbour0 = neighbour0 + 2 * data[(((j - 2) * width) + (i))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 2) * width) + (i))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 2) * width) + (i))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 2) * width) + (i))][3];
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
        neighbour0 = neighbour0 + 2 * data[(((j - 1) * width) + (i - 1))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 1) * width) + (i - 1))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 1) * width) + (i - 1))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 1) * width) + (i - 1))][3];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + 2 * data[(((j - 1) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + 2 * data[(((j - 1) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + 2 * data[(((j - 1) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + 2 * data[(((j - 1) * width) + (i + 1))][3];
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
        neighbour0 = neighbour0 + 2 * data[(((j) * width) + (i))][0];
        neighbour1 = neighbour1 + 2 * data[(((j) * width) + (i))][1];
        neighbour2 = neighbour2 + 2 * data[(((j) * width) + (i))][2];
        neighbour3 = neighbour3 + 2 * data[(((j) * width) + (i))][3];
        temp++;
      }
      if (data[(((j) * width) + (i + 1))] != undefined) {
        neighbour0 = neighbour0 + data[(((j) * width) + (i + 1))][0];
        neighbour1 = neighbour1 + data[(((j) * width) + (i + 1))][1];
        neighbour2 = neighbour2 + data[(((j) * width) + (i + 1))][2];
        neighbour3 = neighbour3 + data[(((j) * width) + (i + 1))][3];
        temp++;
      }

      newArray.push((((4 * (data[(((j - 1) * width) + i)][0])) + neighbour0)/16));
      newArray.push((((4 * (data[(((j - 1) * width) + i)][1])) + neighbour1)/16));
      newArray.push((((4 * (data[(((j - 1) * width) + i)][2])) + neighbour2)/16));
      newArray.push(255);

      temp = 0;
      neighbour0 = 0;
      neighbour1 = 0;
      neighbour2 = 0;
      neighbour3 = 0;
    }
  }
  return newArray;
}