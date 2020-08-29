// prints array values in reverse
function printReverse(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
  }
};

printReverse([1, 2, 3, 4, 5]);

// returns true if all array values are identical
function isUniform(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
};

// returns the sum of all array values
function sumArray(arr) {
  let sum = 0;
  arr.forEach(function(num){
    sum += num;
  })
  return sum;
};

// returns the maximum number in the array
function max(arr) {
  let maxNumber =arr[0];
  arr.forEach(function(num){
    if (num > maxNumber) {
      maxNumber = num;
    }
  })
  return maxNumber;
};