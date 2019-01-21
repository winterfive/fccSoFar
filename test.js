function chunkArrayInGroups(arr, size) {

  let result = [];
  let subArr = [];  
  let fullArraysNeeded = Math.floor(arr.length / size);  // the # of size-sized sub-arrays needed
  let arrLen = arr.length;
  let lastSubArrSize = arrLen % size; // size of last sub-array

  for (var i = 0; i < arrLen; i++) {
    // fill up the full-size subArrays
    if (result.length < fullArraysNeeded) {
      if(subArr.length < size) {
        subArr.push(arr[i]);
      } else {
        result.push(subArr);
        subArr = [];
      }
    }
    // no more full-size subArrays needed
    // create array of lastSubArrSize to handle remaining values in arr     
    else {
      // check if another subArray is needed
      if (lastSubArrSize > 0) {
        // create last subArray
        for (var y = 0; y < lastSubArrSize; y++) {
          subArr.push(arr[i]);
        }

        result.push(subArr);
        subArr = [];
      }      
    }
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
/*
function mutation(arr) {

  const seekers = [];
  const searchable = arr[0];

  for (var i = 0; i < arr[1].length; i++) {
    // tried adding + after each letter
    seekers.push(arr[1][i]);
  }

  seekers.push("+");
  console.log(seekers);

  let regex = RegExp(/[seekers]/ig);

  let result = regex.test(searchable);

  console.log(result);
  return result;
}
*/

}
