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
  if (s.length > 0) {
    const charMap: { [key: string]: number } = {};
    let currMostFrequent = "";
    let currHighestFrequency = 0;

    for (const char of s) {
      char in charMap ? (charMap[char] += 1) : (charMap[char] = 1);
    }

    for (const char in charMap) {
      let charCount = charMap[char];
      if (typeof charCount !== "undefined") {
        if (charCount > currHighestFrequency) {
          currMostFrequent = char;
          currHighestFrequency = charCount;
        }
      }
    }

    return currMostFrequent;
  }
  return "Input not valid";
};

// O(n) Time | O(n) Space
console.log(mostFrequentChar("bookeeper"));
console.log(mostFrequentChar("david"));
