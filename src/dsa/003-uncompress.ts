/* 
    uncompress
    Write a function, uncompress, that takes in a string as an argument. 
    The input string will be formatted into multiple groups according to the following pattern:

    <number><char>
    for example, '2c' or '3a'.

    The function should return an uncompressed version of the string where each 'char' of a group is 
    repeated 'number' times consecutively. 
    You may assume that the input string is well-formed according to the previously mentioned pattern.

    uncompress("2c3a1t"); // -> 'ccaaat'
    uncompress("4s2b"); // -> 'ssssbb'
    uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
*/

const uncompress = (str: string): string => {
  let p1 = 0;
  let p2 = p1 + 1;
  let output = [];

  while (p2 <= str.length - 1) {
    const currRightChar = str[p2];
    if (isNaN(Number(currRightChar))) {
      const charRepetition = Number(str.slice(p1, p2));
      for (let i = 1; i <= charRepetition; i++) {
        output.push(str[p2]);
      }
      p1 = p2 + 1;
      p2 = p1 + 1;
    } else {
      p2++;
    }
  }
  return output.join("");
};

// n = # of groups
// m = max number for any group
// O(n*m) Time | O(n*m) Space
console.log(uncompress("2c3a1t")); //ccaaat
console.log(uncompress("4s2b")); // ssssbb
console.log(uncompress("3n12e2z")); // nnneeeeeeeeeeeezz
console.log(uncompress("10y")); // yyyyyyyyyy
