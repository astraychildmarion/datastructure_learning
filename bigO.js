const array = [1,2,3,4,5,6,7]
const array1 = [1,2,3,4,5,6,7,8,9,0]

// constant runtime: o of one "O(1)"
// the runtime never change
function constant() {
  console.log(array[0]);
  console.log(array2[0]);
}

// linear runtime: o of n "O(n)"
// the runtime is the portion of the input
function linear() {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

// exponential runtime: o of n square "O(n^2)"
// n nested for loop

function exponent() {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
        console.log(array[index], array2[index2]);
    }
  }
}

// logarithmic runtime : binary search
// the runtime is o of log n "O(log n)"
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;
  
  while (low <= high) {
      mid = Math.floor((low + high) / 2, 10);
      element = array[mid];
      if (element < key) {
          low = mid + 1;
      } else if (element > key) {
          high = mid - 1;
      } else {
          return mid;
      }
  }
  return -1;
}