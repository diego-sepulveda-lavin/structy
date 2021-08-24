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
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i]! + numbers[j]! === targetSum) {
        return [i, j];
      }
    }
  }
  return [];
};

const pairSum2 = (numbers: number[], targetSum: number): number[] => {
  let visitedNumbers: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const currNumber = numbers[i];

    if (typeof currNumber !== "undefined") {
      if (!(currNumber in visitedNumbers)) visitedNumbers[currNumber] = i;

      let compliment = targetSum - currNumber;
      if (compliment in visitedNumbers && visitedNumbers[compliment] !== i) {
        return [visitedNumbers[compliment]!, i];
      }
    }
  }
  return [];
};

// O(n^2) // O(1) Space
//console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
//console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]

//  O(n) // O(n) Space
console.log(pairSum2([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum2([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
