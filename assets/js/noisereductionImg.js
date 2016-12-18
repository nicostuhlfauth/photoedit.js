/**
 * Created by pingu on 18.12.2016.
 */
function noiseReduction(data, width, height) {

    var temp = 0;
    var neighbour=0;

    console.log(width);

    for (j = 1; j <= height; j++) {
        for (i = 0; i < width; i++) {
        //Zwei Reihen darüber
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


            //eine Reihe darüber
            if ((((j-1)*width)+i-2) != undefined) {
                temp++;
                neighbour += data[((j-1)*width)+i-2];
            }
            if ((((j-1)*width)+i-1) != undefined) {
                temp++;
                neighbour += data[((j-1)*width)+i-1];
            }
            if ((((j-1)*width)+i) != undefined) {
                temp++;
                neighbour += data[((j-1)*width)+i];
            }
            if ((((j-1)*width)+i+1) != undefined) {
                temp++;
                neighbour += data[((j-1)*width)+i+1];
            }
            if ((((j-2)*width)+i+2) != undefined) {
                temp++;
                neighbour += data[((j-1)*width)+i+2];
            }
            //gleiche Reihe
            if (((j*width) + i-2) != undefined) {
                temp++;
                neighbour += data[(j*width) + i-2];
            }
            if (((j*width) + i-1) != undefined) {
                temp++;
                neighbour += data[(j*width) + i-1];
            }

            if (((j*width) + i+1) != undefined) {
                temp++;
                neighbour += data[(j*width) + i+1];
            }
            if (((j*width) + i+2) != undefined) {
                temp++;
                neighbour += data[(j*width) + i+2];
            }
            //eine Reihe darunter
            if ((((j+1)*width)+i-2) != undefined) {
                temp++;
                neighbour += data[((j+1)*width)+i-2];
            }
            if ((((j+1)*width)+i-1) != undefined) {
                temp++;
                neighbour += data[((j+1)*width)+i-1];
            }
            if ((((j+1)*width)+i) != undefined) {
                temp++;
                neighbour += data[((j+1)*width)+i];
            }
            if ((((j+1)*width)+i+1) != undefined) {
                temp++;
                neighbour += data[((j+1)*width)+i+1];
            }
            if ((((j+1)*width)+i+2) != undefined) {
                temp++;
                neighbour += data[((j+1)*width)+i+2];
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
/*
            if (i-20 <= neighbour/temp && i+20 >= neighbour/temp) {
                data[i] = (i + (neighbour/temp))/2;
            } */

            //console.log(temp);
            //console.log(neighbour);
            if (temp != 0){
                console.log(neighbour/temp);
            }
            temp=0;
            neighbour=0;
        }

        /*
        if () {
            return newArray;

        }
        */
    }
}


/*

(j-2*width)+i-2   (j-2*width)+i-1   (j-2*width)+i  (j-2*width)+i+1  (j-2*width)+i+2
(j-1*width)+i-2   (j-1*width)+i-1   (j-1*width)+i  (j-1*width)+i+1  (j-1*width)+i+2
(j*width) + i-2   (j*width) + i-1   (j*width) + i  (j*width) + i+1  (j*width) + i+2
(j+1*width)+i-2   (j+1*width)+i-1   (j+1*width)+i  (j+1*width)+i+1  (j+1*width)+i+2
(j+2*width)+i-2   (j+2*width)+i-1   (j+2*width)+i  (j+2*width)+i+1  (j+2*width)+i+2

*/