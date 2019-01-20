function mutation(arr) {

  const searchers = arr[1];
  const searchable = arr[0];
  let result = true;
  const x = [];

  // create array of letters from searchers
  for (var j = 0; j < searchers.length; j++) {
    x.push(searchers[j]);
  }

  //console.log(x); // good to here

  // test each letter in searchable against each value in x
  for (var i = 0; i < x.length; i++) {
    if (searchable.indexOf(x[i]) < 0) {
      result = false;
    }

    result = true;
  }

  return result;

/*
  // use a regex test
  const searchTerm = arr[1];
  const searchable = arr[0];
  let regex = RegExp(/[searchTerm]/ig);

  let result = regex.test(searchable)

  // since each letter, need to use iteration?
  // break string into seperate letter array?
  console.log(result);
  return result;
}
*/

/*
function mutation(arr) {

  const seekers = [];
  const searchable = arr[0];

  for (var i = 0; i < arr[1].length; i++) {
    // tried adding + after each letter
    seekers.push(arr[1][i]);
  }

  seekers.push("+");
  console.log(seekers);

  let regex = RegExp(/[seekers]/ig);

  let result = regex.test(searchable);

  console.log(result);
  return result;
}
*/

}
