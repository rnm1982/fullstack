// Destructuring in JavaScript allows you to extract elements or properties from arrays and objects and assign them to variables easily
const numbers = [1, 2, 3, 4];

// Destructuring assignment
const [a, b,c, d] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 2
console.log(rest); // Output: [3, 4, 5]

let x = 5;
let y = 10;

// Swapping using destructuring
[x, y] = [y, x];

console.log(x); // Output: 10
console.log(y); // Output: 5

const person = {
    name: 'Alice',
    age: 30,
    country: 'Wonderland'
  };
  
  // Destructuring assignment
  const { name, age, country } = person;
  
  console.log(name); // Output: Alice
  console.log(age); // Output: 30
  console.log(country); // Output: Wonderland

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
  };
  
  // Renaming properties while destructuring
  const { firstName: fName, lastName: lName, email: userEmail } = user;
  
  console.log(fName); // Output: John
  console.log(lName); // Output: Doe
  console.log(userEmail); // Output: john@example.com
  