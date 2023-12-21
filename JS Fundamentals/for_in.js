// for...of directly accesses values or elements, whereas for...in accesses keys or property names of an object.
/* for...of is used for iterating over iterable objects like arrays, strings, maps, sets, etc., 
while for...in is used for iterating over enumerable properties of objects. */
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Iterating over the properties of an object using for...in loop
  for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  