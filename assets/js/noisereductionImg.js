/**
 * Created by pingu on 18.12.2016.
 */
function noiseReduction(data, width, height) {

  var temp = 0;
  var neighbour0 = 0;
  var neighbour1 = 0;
  var neighbour2 = 0;
  var neighbour3 = 0;
  var threshold = 20;

  console.log(width);
  console.log(height);

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

      neighbour0 = 0;
      neighbour1 = 0;
      neighbour2 = 0;
      neighbour3 = 0;
      if (temp <= 4){
        console.log("I " + i);
        console.log("J " + j);
        console.log(temp);
      }
      temp = 0;
    }
    //console.log(neighbour0/temp + " " +neighbour1/temp + " " +neighbour2/temp + " " +neighbour3/temp);
  }
}

// newArray.push(data[width * j - (i + 1)][0]);
// newArray.push(data[width * j - (i + 1)][1]);
// newArray.push(data[width * j - (i + 1)][2]);
// newArray.push(data[width * j - (i + 1)][3]);

/*

 for (j = 1; j <= height; j++) {
 for (i = 0; i < width; i++) {
 //eine Reihe darüber
 if ((((j - 1) * width) + i - 2) != undefined) {
 temp++;
 neighbour += data[((j - 1) * width) + i - 2];
 }

 if ((((j - 1) * width) + i - 1) != undefined) {
 temp++;
 neighbour += data[((j - 1) * width) + i - 1];
 }
 if ((((j - 1) * width) + i) != undefined) {
 temp++;
 neighbour += data[((j - 1) * width) + i];
 }
 if ((((j - 1) * width) + i + 1) != undefined) {
 temp++;
 neighbour += data[((j - 1) * width) + i + 1];
 }
 if ((((j - 2) * width) + i + 2) != undefined) {
 temp++;
 neighbour += data[((j - 1) * width) + i + 2];
 }
 //gleiche Reihe
 if (((j * width) + i - 2) != undefined) {
 temp++;
 neighbour += data[(j * width) + i - 2];
 }
 if (((j * width) + i - 1) != undefined) {
 temp++;
 neighbour += data[(j * width) + i - 1];
 }

 if (((j * width) + i + 1) != undefined) {
 temp++;
 neighbour += data[(j * width) + i + 1];
 }

 //eine Reihe darunter
 if ((((j + 1) * width) + i - 2) != undefined) {
 temp++;
 neighbour += data[((j + 1) * width) + i - 2];
 }

 if ((((j + 1) * width) + i - 1) != undefined) {
 temp++;
 neighbour += data[((j + 1) * width) + i - 1];
 }
 if ((((j + 1) * width) + i) != undefined) {
 temp++;
 neighbour += data[((j + 1) * width) + i];
 }
 if ((((j + 1) * width) + i + 1) != undefined) {
 temp++;
 neighbour += data[((j + 1) * width) + i + 1];
 }


 //if (data[i]-20 <= (neighbour/temp) && data[i]+20 >= (neighbour/temp)) {
 //    data[i] = ((data[i] + (neighbour/temp))/2);
 //}

 if (data[i] - 20 <= (neighbour / temp) && data[i] + 20 >= (neighbour / temp)) {
 data[i] = ((data[i] + (neighbour / temp)) / 2);
 console.log("Rausch Pixel");
 } else {
 data[i] = 0;
 }

 //console.log(temp);
 //console.log(neighbour);
 //if (temp != 0){
 //    console.log(neighbour/temp);
 //}
 temp = 0;
 neighbour = 0;

 if (j == height && i + 1 == width) {
 return data;
 }
 }
 }

 */

/*    //Zwei Reihen darüber
 if (data[(((j-2)*width)+i-2)] != undefined) {
 //console.log("Alarm " + i + " " + j);
 //console.log(data[j*width+i]);
 temp++;
 neighbour = neighbour + data[((j-2)*width)+i-2];
 }
 if (data[(((j-2)*width)+i-1)] != undefined) {
 temp++;
 neighbour += data[((j-2)*width)+i-1];
 }
 if (data[(((j-2)*width)+i)] != undefined) {
 temp++;
 neighbour += data[((j-2)*width)+i];
 }
 if (data[(((j-2)*width)+i+1)] != undefined) {
 temp++;
 neighbour += data[((j-2)*width)+i+1];
 }
 if (data[(((j-2)*width)+i+2)] != undefined) {
 temp++;
 neighbour += data[((j-2)*width)+i+2];
 }

 //Zwei Reihen darnter
 if ((((j+2)*width)+i-2) != undefined) {
 temp++;
 neighbour += data[((j+2)*width)+i-2];
 }
 if ((((j+2)*width)+i-1) != undefined) {
 temp++;
 neighbour += data[((j+2)*width)+i-1];
 }
 if ((((j+2)*width)+i) != undefined) {
 temp++;
 neighbour += data[((j+2)*width)+i];
 }
 if ((((j+2)*width)+i+1) != undefined) {
 temp++;
 neighbour += data[((j+2)*width)+i+1];
 }
 if ((((j+2)*width)+i+2) != undefined) {
 temp++;
 neighbour += data[((j+2)*width)+i+2];
 }
 */

// (j-2*width)+i-2   (j-2*width)+i-1   (j-2*width)+i  (j-2*width)+i+1  (j-2*width)+i+2
// (j-1*width)+i-2   (j-1*width)+i-1   (j-1*width)+i  (j-1*width)+i+1  (j-1*width)+i+2
// (j*width) + i-2   (j*width) + i-1   (j*width) + i  (j*width) + i+1  (j*width) + i+2
// (j+1*width)+i-2   (j+1*width)+i-1   (j+1*width)+i  (j+1*width)+i+1  (j+1*width)+i+2
// (j+2*width)+i-2   (j+2*width)+i-1   (j+2*width)+i  (j+2*width)+i+1  (j+2*width)+i+2

