function scale(data, width, height, factor) {
    data = splitArray(data, 4);
    
    var newArray = Array();

    for (y = 0; y < height; y=y+2) {
        for (x = 0; x < width; x=x+2) {
            newArray.push(data[(y*width)+x][0], data[(y*width)+x][1], data[(y*width)+x][2], data[(y*width)+x][3]);
        }
    }
    return newArray;
}