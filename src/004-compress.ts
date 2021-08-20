/* 
    compress
    Write a function, compress, that takes in a string as an argument. 
    The function should return a compressed version of the string where consecutive occurences of the same 
    characters are compressed into the number of occurences followed by the character. 
    Single character occurences should not be changed.

    'aaa' compresses to '3a'
    'cc' compresses to '2c'
    't' should remain as 't'

    You can assume that the input only contains alphabetic characters.

    examples:
    compress('ccaaatsss'); // -> '2c3at3s'
    compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
*/

const compress = (s: string) => {
  let p1 = 0;
  let p2 = 0;
  let output: string[] = [];
  let charCounter = 0;

  while (p2 <= s.length) {
    if (s[p1] === s[p2]) {
      p2++;
      charCounter++;
    } else {
      charCounter === 1 ? output.push(s[p1]!) : output.push(charCounter + s[p1]!);
      charCounter = 0;
      p1 = p2;
    }
  }
  return output.join("");
};

console.log(compress("hello")); // 'he2lo
console.log(compress("ccaaatsss")); // -> '2c3at3s'
console.log(compress("nnneeeeeeeeeeeezz")); // -> '3n12e2z'
