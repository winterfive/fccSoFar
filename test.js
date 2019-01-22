function telephoneCheck(str) {

  // tests for 10 digits  
  let regexOne = /1?[0-9]{10}/g;

  let regexTwo = /1?\s?([0-9]{3})-?\s?([0-9]{3})-?\s?([0-9]{4})/g;

  if(regexOne.test(str) || regexTwo.test(str)) {
    return true;
  } else {
    return false;
  }


}

telephoneCheck("1(555)555-5555");
