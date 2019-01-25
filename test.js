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

// Split strings and join with -'s

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //let regex = /\s|\_|?=[A-Z]|\-/g;

  let arr = str.split(/\s|\_|(?=[A-Z])|\-/g);
  console.log(arr);
  let newStr = arr.join("-");  
  let finalStr = newStr.toLowerCase();

  return finalStr;
}

spinalCase('The_Andy_Griffith_Show');

// pig latin

function translatePigLatin(str) {

  let newStr = "";

  // regex consonent followed by vowel or two consonents

  let regex = /^[b-df-hj-np-tv-z]/g;
  let regex2 = /^[b-df-hj-np-tv-z][b-df-hj-np-tv-z]/g;
  let regex3 = /^[^aeiou]+$/g;

  if(regex3.test(str)) {
    let letters = str.substr(0, str.length - 2);
    let cutString = str.substr(str.length - 2, str.length - 1);
    newStr = cutString.concat(letters + "ay");
    console.log("last letter vowel: " + newStr);
  }

  // starts with two consonents
  else if(regex2.test(str)) {
    let letters = str.substr(0, 2);
    let cutString = str.substr(2, str.length - 1);
    newStr = cutString.concat(letters + "ay");
    console.log("two cons: " + newStr);
  }
  // starts with a consonents
  else if(regex.test(str)) {
    let letter = str.substr(0, 1);
    let cutString = str.substr(1, str.length - 1);
    newStr = cutString.concat(letter + "ay");
    console.log("one cons: " + newStr);
  } else {
    // starts with a vowel
    newStr = str.concat("way");
    console.log("vowel: " + newStr);
  }  

  return newStr;
}

translatePigLatin("california");

// pig latin solution (for study)

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");

// DNA Pairing Challenge

function pairElement(str) {

  let finalArr = [];

  for(let i = 0; i < str.length; i++) {

    // check for each letter
    if(str[i] == "A") {
      finalArr.push(smallArr("A", "T"));
    }
    else if(str[i] == "T") {
      finalArr.push(smallArr("T", "A"));
    }
    else if(str[i] == "C") {
      finalArr.push(smallArr("C", "G"));
    }
    else {
      finalArr.push(smallArr("G", "C"));
    }    
  };  

  console.log(finalArr);
  
  return finalArr;
}

let smallArr = (x, y) => [x, y];


pairElement("ATCGA");

// Missing Letters

function fearNotLetter(str) {

  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let strLen = str.length;
  let pos = alpha.indexOf(str[0]);
  //console.log("pos is: " + pos);
  let compareStr = alpha.substr(pos, strLen);
  //console.log("compareStr is: " + compareStr);
  let letter = "";

  for(let i = 0; i < compareStr.length; i++) {
    console.log("compare: " + compareStr[i] + " str: " + str[i]);
    if(compareStr[i] !== str[i]) {
      letter = compareStr[i];
      break;
    }

    letter = undefined;
  }
  console.log(letter);
  return letter;
}

fearNotLetter("abcdefghjklmno");

// Sorted Union

function uniteUnique(arr) {

  let tempArr = [];

  for(let arg = 0; arg < arguments.length; arg++) {
    tempArr.push(...arguments[arg]);
  }

  let finalArr = [...new Set(tempArr)];

  console.log(finalArr);
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
