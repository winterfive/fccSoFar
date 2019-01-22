function telephoneCheck(str) {

   
  let regexOne = /^[0-9]{10}/g;
  let regexTwo = /^1?\s?([0-9]{3})-?([0-9]{3})-?([0-9]{4})/g; // -
  let regexThree = /^1?\s?\([0-9]{3}\)/g;
  let regexFour = /^1?\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/g;
  let regexFive = /\?+/g;
  let regexSix = /[0-9]{11}/g;

  if(regexOne.test(str)) {
    return true;
  }

  else if(regexSix.test(str)) {
    return false;
  }

  else if(str.includes("?")) {
    return false;
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

  else if(regexFive.test(str)) {
    return true;
  }  

  
  
  else {
    return false;
  }
}

telephoneCheck("1(555)555-5555");
