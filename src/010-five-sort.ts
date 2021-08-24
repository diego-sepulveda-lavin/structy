/* 
    five sort
    Write a function, fiveSort, that takes in an array of numbers as an argument. 
    The function should rearrange elements of the array such that all 5s appear at the end. 
    Your function should perform this operation in-place by mutating the original array. The function should return the array.

    Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

    Examples:
    fiveSort([12, 5, 1, 5, 12, 7]) // -> [12, 7, 1, 12, 5, 5] 
    fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]) // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
*/

const fiveSort = (nums: number[]): number[] => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    if (nums[leftPointer] === 5 && nums[rightPointer] !== 5) {
      swap(nums, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    } else if (nums[leftPointer] === 5 && nums[rightPointer] === 5) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return nums;
};

const swap = (array: number[], leftIdx: number, rightIdx: number) => {
  const temp = array[leftIdx];
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = temp;
};

console.log(fiveSort([12, 5, 1, 5, 12, 7])); // -> [12, 7, 1, 12, 5, 5];
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])); // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5];
