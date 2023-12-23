class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to get person's information
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person('Reyansh', 25);
  const person2 = new Person('Aniket', 30);
  
  // Accessing object properties and methods
  console.log(person1.getInfo()); // Output: Name: Alice, Age: 25
  console.log(person2.getInfo()); // Output: Name: Bob, Age: 30
  