// Parent class (Superclass)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }
  
  // Child class (Subclass) inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor with super()
      this.breed = breed;
    }
  
    getBreed() {
      return this.breed;
    }
  }
  
  // Create instances of the classes
  const myAnimal = new Animal('Generic Animal');
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  // Using methods from the parent and child classes
  console.log(myAnimal.getName()); // Output: Generic Animal
  console.log(myDog.getName()); // Output: Buddy
  console.log(myDog.getBreed()); // Output: Golden Retriever
  