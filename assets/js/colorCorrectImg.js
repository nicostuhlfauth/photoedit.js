/**
 * Changes color channels for every color individually
 */

function correctColor(data, red, green, blue) {
  for (i = 0; i < data.length; i = i + 4) {
    data[i] = data[i] + red;
    data[i + 1] = data[i + 1] + green;
    data[i + 2] = data[i + 2] + blue;
  }
  return data;
}
