/* 
    pair sum
    Write a function, pairSum, that takes in an array and a target sum as arguments. 
    The function should return an array containing a pair of indices whose elements sum to the given target. 
    The indices returned must be unique.

    Be sure to return the indices, not the elements themselves.

    There is guaranteed to be one such pair that sums to the target.

    Examples:
    pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
    pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
*/

const pairSum = (numbers: number[], targetSum: number): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }
      if (numbers[i]! + numbers[j]! === targetSum) {
        return [i, j];
      }
    }
  }
  return [];
};

// O(n^2) // O(1) Space
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
