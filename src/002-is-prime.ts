/* 
    is prime
    Write a function, isPrime, that takes in a number as an argument. 
    The function should return a boolean indicating whether or not the given number is prime.

    A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

    For example, 7 is a prime because it is only divisible by 1 and 7. 
    For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

    You can assume that the input number is a positive integer.

    examples:
    isPrime(2); // -> true
    isPrime(3); // -> true
    isPrime(4); // -> false
*/

const isPrime = (n: number): boolean => {
  if (n === 1) return false; // 1 is exception, not prime

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // if n is divisible by another number besides 1 and self, is not prime
  }
  return true; // if not return was reach before, then numbers is prime
};

const isPrime2 = (n: number): boolean => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// O(n) Time | O(1) Space
console.log(isPrime(1)); // -> false
console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(7)); // -> true
console.log("-");

// O(sqrt(n)) Time | O(1) Space
console.log(isPrime2(1)); // -> false
console.log(isPrime2(2)); // -> true
console.log(isPrime2(3)); // -> true
console.log(isPrime2(4)); // -> false
console.log(isPrime2(7)); // -> true
