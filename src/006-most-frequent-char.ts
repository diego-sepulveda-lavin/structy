/*
  most frequent char
  Write a function, mostFrequentChar, that takes in a string as an argument.
  The function should return the most frequent character of the string.
  If there are ties, return the character that appears earlier in the string.

  You can assume that the input string is non-empty.

  Examples:
  mostFrequentChar('bookeeper'); // -> 'e'
  mostFrequentChar('david'); // -> 'd'
*/

const mostFrequentChar = (s: string): string => {
  const charMap: { [key: string]: number } = {};
  let currMostFrequent: [string, number] = ["", 0];

  for (const char of s) {
    char in charMap ? (charMap[char] += 1) : (charMap[char] = 1);
  }

  for (const key in charMap) {
    if (charMap[key] > currMostFrequent[1]) {
      currMostFrequent[0] = key;
      currMostFrequent[1] = charMap[key];
    }
  }

  return currMostFrequent[0];
};

console.log(mostFrequentChar("bookeeper"));
console.log(mostFrequentChar("david"));
