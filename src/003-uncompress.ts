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
  let output = "";

  while (p2 <= str.length - 1) {
    if (!isNaN(Number(str[p2]))) {
      p2++;
    } else {
      const charMultiplier = Number(str.slice(p1, p2));
      output += str[p2]?.repeat(charMultiplier);
      p1 = p2 + 1;
      p2 = p1 + 1;
    }
  }
  return output;
};

console.log(uncompress("2c3a1t"));
console.log(uncompress("4s2b"));
console.log(uncompress("3n12e2z"));
console.log(uncompress("10y"));
