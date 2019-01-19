function getIndexToIns(arr, num) {

  var value = 0;

  arr.sort();
  
  for (var i = 0; i < arr.length; i++) {
    // if sum and current value are the same
    if (num == arr[i]) {
      console.log(i);
      value = i;
      break;      
    }
    else if (num > arr[i] && num < arr[i + 1]) {
      value = i + 1;
      break;      
    }
    else if (num > arr[arr.length - 1]) {
      value = arr.length - 1;
      break;
    }
  }
  console.log(value);

  return value;

  
}

getIndexToIns([3, 10, 5], 3);
