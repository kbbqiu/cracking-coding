/* A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. 
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
 * What if the values are not distinct?
*/

// return index if exists, else return false

function magic_index(array, value) {
  array.forEach((integer, index) => {
    if (integer === value) {
      return index;
    }
  })

  return value;
}

// faster way may be to use a binary search tree b/c it is sorted
// this will return a boolean if it exists, else it will return false
function magic_index(array, value) {
  // if we don't find it, return false
  if (array.length === 1) {
    // if we do find it, return true
    return array[0] === value ? true : false;
  }


  // get the total length of the array, account for odd nums
  let length = array.length;
  let half = Math.floor(array.length / 2);

  // divide and see if large or smaller than the alst num in first half
  return value <= array[half - 1] ? magic_index(array.slice(0, half), value) : magic_index(array.slice(half), value);
}

// magic_index([1,2,3,4,5,6,7], 5); // should return 'true'
// magic_index([1,2,3,4,5,6,7], 8); // should return 'false'

module.exports = magic_index;