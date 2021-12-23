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

const anagrams3 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  let str1Map = new Map();
  let str2Map = new Map();

  for (const char of str1) {
    !str1Map.has(char) ? str1Map.set(char, 1) : str1Map.set(char, str1Map.get(char) + 1);
  }

  for (const char of str2) {
    !str2Map.has(char) ? str2Map.set(char, 1) : str2Map.set(char, str2Map.get(char) + 1);
  }

  for (const char of str1Map) {
    if (!str2Map.has(char[0])) return false;
    if (str1Map.get(char[0]) !== str2Map.get(char[0])) return false;
  }
  return true;
};

const anagrams4 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  let strMap: { [key: string]: number } = {};

  for (const char of str1) {
    char in strMap ? (strMap[char] += 1) : (strMap[char] = 1);
  }

  for (const char of str2) {
    if (char in strMap) {
      strMap[char] -= 1;
    } else {
      return false;
    }
  }

  for (const key in strMap) {
    if (strMap[key] !== 0) return false;
  }

  return true;
};

// O(n+m) Time | O(n+m) Space
console.log(anagrams("restful", "fluster")); // true
console.log(anagrams("cats", "tocs")); // false

// O(n*log(n)) Time | O(n+m) Space
console.log(anagrams2("restful", "fluster")); // true
console.log(anagrams2("cats", "tocs")); // false */

// O(n+m) Time | O(n+m) Space
console.log(anagrams3("restful", "fluster")); // true
console.log(anagrams3("cats", "tocs")); // false

// O(n+m) Time | O(n) Space
console.log(anagrams4("restful", "fluster")); // true
console.log(anagrams4("cats", "tocs")); // false
