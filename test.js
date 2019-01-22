function telephoneCheck(str) {

   
  let regexOne = /[0-9]{10,10}/g;
  let regexTwo = /1?\s?([0-9]{3,3})-?([0-9]{3,3})-?([0-9]{4,4})/g; // -
  let regexThree = /^1?\s?\([0-9]{3,3}\)/g;
  let regexFour = /1?\s[0-9]{3,3}\s[0-9]{3,3}\s[0-9]{4,4}/g;

  if(regexOne.test(str)) {
    return true;
  }
  
  else if(regexTwo.test(str)) {
    return true;
  }
  
  else if(regexThree.test(str)) {
    return true;
  }
  
  else if(regexFour.test(str)) {
    return true;
  }  
  
  else {
    return false;
  }


}

telephoneCheck("1(555)555-5555");
