/* 
    max value
    Write a function, maxValue, that takes in array of numbers as an argument. 
    The function should return the largest number in the array.

    Solve this without using any built-in array methods.

    You can assume that the array is non-empty.

    example:
    maxValue([4, 7, 2, 8, 10, 9]); // -> 10
*/

const arr = [4, 7, 2, 8, 10, 9];

const maxValue = (array: number[]): number => {
  let maxValue = -Infinity;
  for (const num of array) {
    if (num > maxValue) maxValue = num;
  }
  return maxValue;
};

// O(n) Time | O(1) Space
console.log(maxValue(arr));
