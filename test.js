function getIndexToIns(arr, num) {

  var value = 0;

  arr.sort();
  
  for (var i = 0; i < arr.length; i++) {

    // check for match
    if (num == arr[i]) {
      value = i;
      break;      
    }

    // check if num is lower then current item
    else if (num < arr[i]) {
      value = i - 1;
      break;      
    }
    else {
      value = arr.length - 1;
      break;
    }
  }

  console.log(value);
  return value;

  
}

getIndexToIns([10, 20, 30, 40, 50], 35);
