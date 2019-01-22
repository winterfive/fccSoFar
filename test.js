function telephoneCheck(str) {

  // tests for 10 digits  
  let regexOne = /1?[0-9]{10}/g;

  // tests for 555-555-5555, 555 555 5555
  let regexTwo = /1?\s?[0-9]{3}-?\s?[0-9]{3}-?\s?[0-9]{4}/g;

  // tests for 1 (555) 555-5555
  let regexThree = /1?\s?([0-9]{3})\s?[0-9]{3}-?[0-9]{4}/g;

  if(regexOne.test(str) || regexTwo.test(str) || regexThree.test(str)) {
    return true;
  } else {
    return false;
  }


}

telephoneCheck("555-555-5555");
