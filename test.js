// Regex for phone numbers (USA)

function telephoneCheck(str) {

  let regex = /^(1?\s?)?(\d{3}|\(\d{3}\))(\s?-?)?\d{3}(\s?-?)?\d{4}$/g;
  if(regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");

// Functional Programming: reduce()

var averageRating = 0;
let sum = 0;
let num = 0;
let result;

watchList.reduce((sum, current) => {
  if(current.Director == "Christopher Nolan") {
    num++;
    return sum + parseFloat(current.imdbRating);
  }

  console.log("sum is: " + sum);
  console.log("num is:" + num);

  averageRating = sum/num;
  
}, 0);

// Comparing two arrays

function diffArray(arr1, arr2) {

  let newArr = arr1.concat(arr2);
  let result = [];

  // if newArr[i] in both teh old arrays
  // skip
  // if in one old array
  // add to result 
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
