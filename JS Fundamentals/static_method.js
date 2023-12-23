class MyClass {
    constructor(value) {
      this.value = value;
    }
  
    // Instance method
    getValue() {
      return this.value;
    }
  
    // Static method
    static multiplyByTwo(number) {
      return number * 2;
    }
  }
  
  // Creating an instance of MyClass
  const obj = new MyClass(5);
  
  // Accessing the instance method
  console.log(obj.getValue()); // Output: 5
  
  // Calling the static method directly on the class
  console.log(MyClass.multiplyByTwo(3)); // Output: 6
  