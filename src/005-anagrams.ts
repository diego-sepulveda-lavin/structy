/* 
    anagrams
    Write a function, anagrams, that takes in two strings as arguments. 
    The function should return a boolean indicating whether or not the strings are anagrams. 
    Anagrams are strings that contain the same characters, but in any order.

    examples:
    anagrams('restful', 'fluster'); // -> true
    anagrams('cats', 'tocs'); // -> false
*/

const anagrams = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  let str1Map: { [key: string]: number } = {};
  let str2Map: { [key: string]: number } = {};

  for (const char of str1) {
    char in str1Map ? (str1Map[char] += 1) : (str1Map[char] = 1);
  }

  for (const char of str2) {
    char in str2Map ? (str2Map[char] += 1) : (str2Map[char] = 1);
  }

  for (const key in str1Map) {
    if (!(key in str2Map)) return false;
    if (str1Map[key] !== str2Map[key]) return false;
  }
  return true;
};

const anagrams2 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  str1Arr.sort();
  str2Arr.sort();


  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) return false;
  }
  return true;
};

// O(n) Time | O(n) Space
console.log(anagrams("restful", "fluster")); // true
console.log(anagrams("cats", "tocs")); // false

// O(n*log(n)) Time | O(n) Space
console.log(anagrams2("restful", "fluster")); // true
console.log(anagrams2("cats", "tocs")); // false
