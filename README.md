# fullstack
Important topic in js
- Arrow Functions: A concise syntax for writing functions, providing a more straightforward way to write anonymous functions.

- let and const: Block-scoped variable declarations with let and constant variable declarations with const, allowing better variable scoping and immutability.

- Template Literals: Using backticks (`) to create multi-line strings and embedding expressions inside ${} within strings for variable interpolation.

- Default Parameters: Enabling the definition of default values for function parameters if no value or undefined is passed.

- Rest and Spread Operators: ... is used to collect the rest of the parameters in a function or to spread elements of an iterable (like arrays) into another array.

- Destructuring Assignment: A concise way to extract values from arrays or objects into variables using a destructuring syntax.

- Classes: Introduction of class syntax for defining constructor functions and creating objects using the class, constructor, and extends keywords.

- Modules (import/export): Support for importing and exporting modules between JavaScript files using import and export statements.

- Promises: A built-in way to handle asynchronous operations, providing a cleaner alternative to callback functions.

- Object and Array Enhancements: Methods like Object.assign(), array methods like find(), findIndex(), map(), filter(), forEach(), reduce(), etc., for easier object and array manipulation.

- Symbol and Map/Set: Introduction of Symbol as a new primitive type and Map and Set as new data structures.

- Iterators and Generators: Symbol.iterator to create custom iterable objects and generators (function* and yield) to simplify the creation of iterators.

- Async/Await: Building on top of Promises, providing a cleaner and more synchronous-looking syntax to work with asynchronous code.

-----------Day-01--------------
1. Install VS Code
2. Install NodeJS using NVM (https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)
3. Install Git/ VS code extension (https://git-scm.com/downloads)
4. Install Postman or install VS code Extension (https://learning.postman.com/docs/getting-started/installation/installation-and-updates/)

------------Day-02---------------
Variables
Datatypes
------------Day-03---------------
prompt-sync
operators: arithmetic,comparision,logical
Conditional statement:if-else,nested-ifelse
loop: for,while,do-while
switch,break,continue
Assigment: 
- Calculator using switch
- Javascript Program to Convert Celsius to Fahrenheit   
- JavaScript Program to Find the Factorial of a Number 5!=1*2*3*4*5
- JavaScript Program to Reverse a String
----------------Day-04------------------
- Anonymous, arrow function,callback
- class
- global,local,block scope
- loops example
----------------Day-05------------------
- operation on array
- destructuring,asynchronous code
- Promise, fetch
- async await
 try API call 
Posts: https://jsonplaceholder.typicode.com/posts
Comments: https://jsonplaceholder.typicode.com/comments
Users: https://jsonplaceholder.typicode.com/users
Todos: https://jsonplaceholder.typicode.com/todos
Albums: https://jsonplaceholder.typicode.com/albums
Photos: https://jsonplaceholder.typicode.com/photos

--------------Day06-------------
promise
async await
module import/export
Array

-------Day06------
----for-each---
const colors = ['blue', 'green', 'white'];

colors.forEach(function callback(value, index) {
  console.log(value, index);
});

---------exp----
// Example array of fruits
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Using forEach to iterate over each element in the array
fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Another way using arrow function
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

----map----
const numbers = [0, 2, 4];

const newNumbers = numbers.map(function increment(number) {
  return number + 1;
});

newNumbers;
----map---
//the map() method is used to create a new array by applying a function to each element of the original array. It doesn't modify the original array; instead, it returns a new array containing the results of applying the provided function to each element in the original array.
// Example array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number in the array
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

------array from----
//Array.from() method is used to create a new array instance from an iterable object or an array-like object. It allows you to create arrays from array-like objects (e.g., NodeList, arguments) or any iterable object (e.g., strings, Set, Map) by converting them into arrays.
const str = 'hello';
const charsArray = Array.from(str);

console.log(charsArray); // Output: ['h', 'e', 'l', 'l', 'o']

----reduce---
// the reduce() method is used to iterate through an array and accumulate a single value by applying a function to each element of the array. This method executes a callback function on each element of the array and returns a single value, which can be the result of any operation.
const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of numbers in the array
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

-----array concat----
const heroes = ['Batman', 'Robin'];
const villains = ['Joker', 'Bane'];

const everyone = heroes.concat(villains);

everyone;
----------spread----
//You can use the spread operator with an array literal to concatenate arrays:
const heroes = ['Batman', 'Catwoman'];
const villains = ['Joker', 'Bane'];

const names = [...heroes, ...villains];

names;
--------------slice--
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Extracting elements from index 1 (inclusive) to index 3 (exclusive)
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ['Banana', 'Orange', 'Mango']

---------------clone array----
const colors = ['white', 'black', 'gray'];

const clone = [...colors];

clone; // => ['white', 'black', 'gray']
colors === clone
----------array clone example 2----
const colors = ['white', 'black', 'gray'];

const clone = [].concat(colors);

clone; // => ['white', 'black', 'gray']
colors === clone; // => false
-----sliceis another approach of cloning----
const colors = ['white', 'black', 'gray'];

const clone = colors.slice();

clone; // => ['white', 'black', 'gray']
colors === clone; // => false
------array find---
const numbers = [1, 2, 3, 4, 5];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumber = numbers.find(isEven);

evenNumber; // => 2
-----array Index---
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const index = names.indexOf('Joker');

index;
-------------slice1---
const numbers = [1, 2, 3, 4, 5];

// Extracting elements from index 2 to the end of the array
const slicedNumbers = numbers.slice(2);

console.log(slicedNumbers); // Output: [3, 4, 5]
-----array every ---
//method returns true if every item passes predicate check.
const evens = [0, 2, 4, 6];
const numbers = [0, 1, 4, 6];

function isEven(number) {
  return number % 2 === 0;
}

evens.every(isEven); // => true
numbers.every(isEven);
----array some---
//method returns true if at least one item passes predicate check.
const numbers = [1, 5, 7, 10];
const odds = [1, 3, 3, 3];

function isEven(number) {
  return number % 2 === 0;
}

numbers.some(isEven); // => true
odds.some(isEven); 
----array filter----
//method returns a new array with items that have passed predicate check.

const numbers = [1, 5, 7, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evens = numbers.filter(isEven);

evens;

-----push---
const names = ['Batman'];

names.push('Joker');

names;
-----unshift--
//method appends one or more items to the beginning of an array, returning the new length of the array.
const names = ['Batman'];

names.unshift('Catwoman');

names; //

----spread---
const names = ['Joker', 'Bane'];

const names2 = [
  ...names,
  'Batman',
];

names2;
----pop---
const colors = ['blue', 'green', 'black'];

const lastColor = colors.pop();

lastColor; // => 'black'
colors; 
----shift---
//method removes the first item from an array, then returns that item.
const colors = ['blue', 'green', 'black'];

const firstColor = colors.shift();

firstColor; // => 'blue'
colors; 

-----splice---
//removes items from an array and inserts new items instead.
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2);

names;
-----splice--
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2, 'Alfred');

names; 
-----flat---
const arrays = [0, [1, 3, 5], [2, 4, 6]];

const flatArray = arrays.flat();

flatArray; // [0, 1, 3, 5, 2, 4, 6]

-----sort---
const letters = ['B', 'C', 'A'];

letters.sort();

letters;

