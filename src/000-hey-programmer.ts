/* 
    hey programmer
    Welcome to Structy! Watch the approach video in the tab at the top of this window to get started.

    Write a function greet that takes in a string argument, s, and returns the string "hey s". 
    No tricks here. Run the tests to check your work.

    greet("alvin"); // -> 'hey alvin'
*/

const mystr = "alvin";

const greet = (s: string): string => {
  return "hey " + s;
};

console.log(greet(mystr));

