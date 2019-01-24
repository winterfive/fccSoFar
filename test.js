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

  for(let i = 0; i < newArr.length; i++) {
    
    let result1 = arr1.includes(newArr[i]);
    let result2 = arr2.includes(newArr[i]);
    
    if(result1 != result2) {
      result.push(newArr[i]);
    }  
  }
  return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Arguements, seek and destroy

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  let searchable = [].concat(args[0]);
  let searchers = args.slice(1);
  let finalArr = [];

  for(let i = 0; i < searchable.length; i++) {

    if(!searchers.includes(searchable[i])) {
      finalArr.push(searchable[i]);
    }
  }
  console.log(finalArr)

  return finalArr;  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Searching key value paris array with a key value pair

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);

  // iterate through object
  // compare object value to source values
  // if match, add matched object pair to array
  return collection.filter(function(item) {
    for(let i = 0; i < keys.length; i++) {
      if(!item.hasOwnProperty(keys[i]) || item[keys[i]] != source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
