// Iterating over an array
const myArray = [1, 2, 3, 4, 5];

for (const element of myArray) {
  console.log(element);
}

// Iterating over a string
const myString = "Hello";

for (const char of myString) {
  console.log(char);
}

// Iterating over a Map
const myMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// Iterating over a Set
const mySet = new Set([1, 2, 3, 4, 5]);

for (const item of mySet) {
  console.log(item);
}
