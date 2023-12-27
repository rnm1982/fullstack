// Creating an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Removing elements from the array
// Syntax: array.splice(startIndex, deleteCount)
// This example removes 1 element at index 2
fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'mango']

// Adding elements to the array
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// This example adds 'grape' and 'kiwi' starting from index 2, removing 0 elements
fruits.splice(2, 0, 'grape', 'kiwi');
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'mango']

// Replacing elements in the array
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// This example replaces 2 elements starting from index 1 with 'pear' and 'peach'
fruits.splice(1, 2, 'pear', 'peach');
console.log(fruits); // Output: ['apple', 'pear', 'peach', 'kiwi', 'mango']
