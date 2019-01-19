function getIndexToIns(arr, num) {

  var value = 0;

  arr.sort();
  
  for (var i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      break;
    }
    else if (num > arr[i] && num < arr[i + 1]) {
      value = i + 1;
    }
  }

  console.log(value);
  return value;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
