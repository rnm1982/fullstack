const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

// without parametr
const greet = () => console.log('Hello, world!');
  
  greet(); // Output: Hello, world!

//   Arrow Function with Single Parameter
const square = x => x * x;

console.log(square(4)); // Output: 16

// Arrow Function in Array Manipulation
const numbers = [1, 2, 3, 4, 5];

// Doubling each number in the array using map and an arrow function
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Arrow Function with Object Methods
const person = {
    name: 'Alice',
    greet: () => console.log(`Hello, I'm ${this.name}`) // 'this' here refers to the surrounding scope, not the object
  };
  
  person.greet(); // Output: Hello, I'm undefined
  