function scale(data, width, height, factor) {

  console.log(data.length);
  data = splitArray(data, 4);

  var newArray = Array();

  x_ratio = width/(width*factor);
  y_ratio = height/(height*factor);

  console.log(x_ratio);
  console.log(y_ratio);

  for (y = 0; y < height*factor; y++) {
    for (x = 0; x < width*factor; x++) {
      px=Math.floor(x*x_ratio);
      py=Math.floor(y*y_ratio);


      newArray.push(data[(py * width) + px][0],
                    data[(py * width) + px][1],
                    data[(py * width) + px][2],
                    data[(py * width) + px][3]);
    }
  }
  console.log(newArray.length);
  return newArray;
}
