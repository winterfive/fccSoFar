function rot13(str) {

  let arr = [];
  let result = [];
  let letCode, strLen = 0;
  
  // change all letters to uppercase, place in array
  str = str.toUpperCase();
  arr = str.split("");

  strLen = arr.length;

  // iterate through string
  for (var x = 0; x < strLen; x++) {
    if (/[a-z]/.test()) {
      letCode = arr[x].charCodeAt();  

      if ((letCode + 13) > 90) {
        letCode = (letCode + 13) - 91 + 65;
      } else {
        letCode += 13;
      }

      // works to here
      // get new letter and push it to result
      let y = String.fromCharCode(letCode);
      result.push(y);
      console.log(y);      

    } else {
      result.push(arr[x]);
    }
  }

  let a = result.join();
  return a;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
