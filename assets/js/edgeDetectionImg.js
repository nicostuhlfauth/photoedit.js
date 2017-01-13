/**
 * Created by Benedikt on 13.01.2017.
 */

function edgeDetect(data, width, height, threshold) {


  var temp = 0;
  var neighbour0x = 0;
  var neighbour1x = 0;
  var neighbour2x = 0;

  var neighbour0y = 0;
  var neighbour1y = 0;
  var neighbour2y = 0;

  var data2 = data.slice();

  data = splitArray(data, 4);

  var newArray = new Array();

  for (j = 1; j <= height; j++) {
    for (i = 0; i < width; i++) {

      //eine Reihe Drüber
      if (data[(((j - 2) * width) + (i - 1))] != undefined) {
        neighbour0x = neighbour0x + 3 * data[(((j - 2) * width) + (i - 1))][0];
        neighbour1x = neighbour1x + 3 * data[(((j - 2) * width) + (i - 1))][1];
        neighbour2x = neighbour2x + 3 * data[(((j - 2) * width) + (i - 1))][2];

        neighbour0y = neighbour0y + 3 * data[(((j - 2) * width) + (i - 1))][0];
        neighbour1y = neighbour1y + 3 * data[(((j - 2) * width) + (i - 1))][1];
        neighbour2y = neighbour2y + 3 * data[(((j - 2) * width) + (i - 1))][2];
        temp++;
      }
      if (data[(((j - 2) * width) + (i))] != undefined) {
        neighbour0x = neighbour0x + 0 * data[(((j - 2) * width) + (i))][0];
        neighbour1x = neighbour1x + 0 * data[(((j - 2) * width) + (i))][1];
        neighbour2x = neighbour2x + 0 * data[(((j - 2) * width) + (i))][2];

        neighbour0y = neighbour0y + 10 * data[(((j - 2) * width) + (i))][0];
        neighbour1y = neighbour1y + 10 * data[(((j - 2) * width) + (i))][1];
        neighbour2y = neighbour2y + 10 * data[(((j - 2) * width) + (i))][2];
        temp++;
      }
      if (data[(((j - 2) * width) + (i + 1))] != undefined) {
        neighbour0x = neighbour0x + (-3) * data[(((j - 2) * width) + (i + 1))][0];
        neighbour1x = neighbour1x + (-3) * data[(((j - 2) * width) + (i + 1))][1];
        neighbour2x = neighbour2x + (-3) * data[(((j - 2) * width) + (i + 1))][2];

        neighbour0y = neighbour0y + 3 * data[(((j - 2) * width) + (i + 1))][0];
        neighbour1y = neighbour1y + 3 * data[(((j - 2) * width) + (i + 1))][1];
        neighbour2y = neighbour2y + 3 * data[(((j - 2) * width) + (i + 1))][2];
        temp++;
      }

      //gleiche Reihe
      if (data[(((j - 1) * width) + (i - 1))] != undefined) {
        neighbour0x = neighbour0x + 10 * data[(((j - 1) * width) + (i - 1))][0];
        neighbour1x = neighbour1x + 10 * data[(((j - 1) * width) + (i - 1))][1];
        neighbour2x = neighbour2x + 10 * data[(((j - 1) * width) + (i - 1))][2];

        neighbour0y = neighbour0y + 0 * data[(((j - 1) * width) + (i - 1))][0];
        neighbour1y = neighbour1y + 0 * data[(((j - 1) * width) + (i - 1))][1];
        neighbour2y = neighbour2y + 0 * data[(((j - 1) * width) + (i - 1))][2];
        temp++;
      }
      if (data[(((j - 1) * width) + (i + 1))] != undefined) {
        neighbour0x = neighbour0x + (-10) * data[(((j - 1) * width) + (i + 1))][0];
        neighbour1x = neighbour1x + (-10) * data[(((j - 1) * width) + (i + 1))][1];
        neighbour2x = neighbour2x + (-10) * data[(((j - 1) * width) + (i + 1))][2];

        neighbour0y = neighbour0y + 0 * data[(((j - 1) * width) + (i + 1))][0];
        neighbour1y = neighbour1y + 0 * data[(((j - 1) * width) + (i + 1))][1];
        neighbour2y = neighbour2y + 0 * data[(((j - 1) * width) + (i + 1))][2];
        temp++;
      }

      //eine darunter
      if (data[(((j) * width) + (i - 1))] != undefined) {
        neighbour0x = neighbour0x + 3 * data[(((j) * width) + (i - 1))][0];
        neighbour1x = neighbour1x + 3 * data[(((j) * width) + (i - 1))][1];
        neighbour2x = neighbour2x + 3 * data[(((j) * width) + (i - 1))][2];

        neighbour0y = neighbour0y + (-3) * data[(((j) * width) + (i - 1))][0];
        neighbour1y = neighbour1y + (-3) * data[(((j) * width) + (i - 1))][1];
        neighbour2y = neighbour2y + (-3) * data[(((j) * width) + (i - 1))][2];
        temp++;
      }
      if (data[(((j) * width) + (i))] != undefined) {
        neighbour0x = neighbour0x + 2 * data[(((j) * width) + (i))][0];
        neighbour1x = neighbour1x + 2 * data[(((j) * width) + (i))][1];
        neighbour2x = neighbour2x + 2 * data[(((j) * width) + (i))][2];

        neighbour0y = neighbour0y + (-10) * data[(((j) * width) + (i))][0];
        neighbour1y = neighbour1y + (-10) * data[(((j) * width) + (i))][1];
        neighbour2y = neighbour2y + (-10) * data[(((j) * width) + (i))][2];
        temp++;
      }
      if (data[(((j) * width) + (i + 1))] != undefined) {
        neighbour0x = neighbour0x + 3 * data[(((j) * width) + (i + 1))][0];
        neighbour1x = neighbour1x + 3 * data[(((j) * width) + (i + 1))][1];
        neighbour2x = neighbour2x + 3 * data[(((j) * width) + (i + 1))][2];

        neighbour0y = neighbour0y + (-3) * data[(((j) * width) + (i + 1))][0];
        neighbour1y = neighbour1y + (-3) * data[(((j) * width) + (i + 1))][1];
        neighbour2y = neighbour2y + (-3) * data[(((j) * width) + (i + 1))][2];
        temp++;
      }

      neighbour0x = (neighbour0x / temp) * (neighbour0x / temp);
      neighbour1x = (neighbour1x / temp) * (neighbour1x / temp);
      neighbour2x = (neighbour2x / temp) * (neighbour2x / temp);

      neighbour0y = (neighbour0y / temp) * (neighbour0y / temp);
      neighbour1y = (neighbour1y / temp) * (neighbour1y / temp);
      neighbour2y = (neighbour2y / temp) * (neighbour2y / temp);

      newArray.push((Math.sqrt(neighbour0y - neighbour0x)));
      newArray.push((Math.sqrt(neighbour1y - neighbour1x)));
      newArray.push((Math.sqrt(neighbour2y - neighbour2x)));
      newArray.push(255);


      // if (((data[(((j - 1) * width) + i)][0] + threshold) <= (neighbour0 / temp)) ||
      //   ((data[(((j - 1) * width) + i)][0] - threshold) >= (neighbour0 / temp)) ||
      //   ((data[(((j - 1) * width) + i)][1] + threshold) <= (neighbour1 / temp)) ||
      //   ((data[(((j - 1) * width) + i)][1] - threshold) >= (neighbour1 / temp)) ||
      //   ((data[(((j - 1) * width) + i)][2] + threshold) <= (neighbour2 / temp)) ||
      //   ((data[(((j - 1) * width) + i)][2] - threshold) >= (neighbour2 / temp))) {
      //
      //   newArray.push((((neighbour0 / temp) + (data[(((j - 1) * width) + i)][0]))/2));
      //   newArray.push((((neighbour1 / temp) + (data[(((j - 1) * width) + i)][1]))/2));
      //   newArray.push((((neighbour2 / temp) + (data[(((j - 1) * width) + i)][2]))/2));
      //   newArray.push(255);
      //
      // } else {
      //
      //   if (document.getElementById("filled-in-box").checked == true) {
      //     newArray.push(0);
      //     newArray.push(0);
      //     newArray.push(0);
      //     newArray.push(255);
      //   } else {
      //     newArray.push(data[(((j - 1) * width) + i)][0]);
      //     newArray.push(data[(((j - 1) * width) + i)][1]);
      //     newArray.push(data[(((j - 1) * width) + i)][2]);
      //     newArray.push(255);
      //   }
      // }

      temp = 0;
      neighbour0x = 0;
      neighbour1x = 0;
      neighbour2x = 0;

      neighbour0y = 0;
      neighbour1y = 0;
      neighbour2y = 0;
    }
  }
  return newArray;
}
