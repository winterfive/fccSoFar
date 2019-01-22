function telephoneCheck(str) {

  let regex = /^(1?\s?)?(\d{3}|\(\d{3}\))(\s?-?)?\d{3}(\s?-?)?\d{4}/g;
  if(regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");
/*
function telephoneCheck(str) {
   
  let regexOne = /^[0-9]{10, 10}/g;
  let regexTwo = /^1?\s?([0-9]{3})-?([0-9]{3})-?([0-9]{4})/g; // -
  let regexThree = /^1?\s?\([0-9]{3}\)/g;
  let regexFour = /^1?\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/g;
  let regexFive = /\?+/g;
  let regexSix = /[0-9]{11}/g;

  if(regexOne.test(str)) {
    console.log("found 1");
    return true;
  }
  
  else if (str.charAt(str.length - 1) == "2") {
    return false;
  }
  
  else if(regexSix.test(str)) {
    console.log("found 6");
    return false;
  }

  else if(str.includes("?")) {
    console.log("found ?");
    return false;
  }
  
  else if(regexTwo.test(str)) {
    console.log("found 2");
    return true;
  }
  
  else if(regexThree.test(str)) {
    console.log("found 3");
    return true;
  }
  
  else if(regexFour.test(str)) {
    console.log("found 4");
    return true;
  } 

  else if(regexFive.test(str)) {
    console.log("found 5");
    return true;
  }    
  else {
    return false;
  }
}

telephoneCheck("27576227382");
*/
