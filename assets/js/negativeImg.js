/**
 * Created by benedikt on 11.12.16.
 */

function negativeImg(data) {

  for (i = 0; i < data.length; i = i + 4) {
    data[i] = 255 - data[i];
    data[i + 1] =  255 - data[i + 1];
    data[i + 2] =  255 - data[i + 2] ;
  }

  return data;
}
