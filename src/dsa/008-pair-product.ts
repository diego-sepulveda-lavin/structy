/* 
    pair product
    Write a function, pairProduct, that takes in an array and a target product as arguments.
    The function should return an array containing a pair of indices whose elements multiply to the given target. 
    The indices returned must be unique.

    Be sure to return the indices, not the elements themselves.

    There is guaranteed to be one such pair whose product is the target.

    examples:
    pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
    pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
*/

const pairProduct = (numbers: number[], targetProduct: number): number[] => {
  const visitedNumbs: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const currNumber = numbers[i];
    const searchedNumber = targetProduct / currNumber;
    if (searchedNumber in visitedNumbs) return [visitedNumbs[searchedNumber], i];
    visitedNumbs[currNumber] = i;
  }

  return [];
};

//  O(n) // O(n) Space
console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2];
