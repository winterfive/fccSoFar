function telephoneCheck(str) {

  let regex = /^(1?\s?)?(\d{3}|\(\d{3}\))(\s?-?)?\d{3}(\s?-?)?\d{4}$/g;
  if(regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");

var averageRating = 0;
let num = 0;
let result;

watchList.reduce(function(sum, current){
  if(current.Director === "Christopher Nolan") {
    sum += parseFloat(current.imdbRating);
    num++;
  }

  console.log(num);

  return sum/num;
});



// Add your code above this line

console.log(averageRating); 
