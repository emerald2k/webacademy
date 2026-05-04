class UserClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }

  // function sayGoodbye(): void {
  //   console.log(`Goodbye from ${this.name}!`);
  // }
}

const user1 = new UserClass('Alice', 30);
console.log(user1);
user1.sayHello();

class UserClass2 {
  private password: string; // This property is private, which means it can only be accessed and modified within the UserClass2 class. It cannot be accessed or modified from outside the class, which helps to encapsulate the password and prevent unauthorized access or modification.

  constructor(password: string) {
    this.password = password;
  }

  checkPassword(input: string): boolean {
    return this.password === input;
  }

  updatePassword(newPassword: string): void {
    this.password = newPassword;
  }
}

const user2 = new UserClass2('mySecretPassword');
console.log(user2.checkPassword('mySecretPassword')); // true
console.log(user2.checkPassword('wrongPassword')); // false
user2.updatePassword('newSecretPassword');
console.log(user2.checkPassword('mySecretPassword')); // false
console.log(user2.checkPassword('newSecretPassword')); // true

class UserClass3 {
  constructor(
    public name: string,
    public age: number,
  ) {} // This is a shorthand syntax for defining and initializing class properties in the constructor. The public keyword before the parameters name and age automatically creates class properties with the same names and assigns the values passed to the constructor to those properties. This means that we don't need to explicitly declare the properties name and age in the class body or assign them in the constructor, as this is done automatically by TypeScript when we use this shorthand syntax.

  sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

const user3 = new UserClass3('Bob', 25);
console.log(user3);
user3.sayHello(); // "Hello, my name is Bob and I am 25 years old."

class ProductClass {
  constructor(
    public title: string,
    public price: number,
    public description?: string,
  ) {} // This is a shorthand syntax for defining and initializing class properties in the constructor. The public keyword before the parameters title, price, and description automatically creates class properties with the same names and assigns the values passed to the constructor to those properties. This means that we don't need to explicitly declare the properties title, price, and description in the class body or assign them in the constructor, as this is done automatically by TypeScript when we use this shorthand syntax.  The description property is optional, as indicated by the ? symbol, which means that it can be omitted when creating an instance of the ProductClass.

  get priceWithTax(): number {
    return this.price * 1.2; // Assuming a tax rate of 20%
  }

  set titleWithDiscount(discount: number) {
    this.title = `${this.title} (Discount: ${discount * 100}%)`;
  }
}

class UserClass4 {
  private _age: number;

  set age(value: number) {
    if (value < 0) {
      throw new Error('Age cannot be negative');
    }
    this._age = value;
  }

  get age(): number {
    return this._age;
  }
}

const user = new UserClass4();
user.age = 30;
console.log(user.age); // 30
// user.age = -5; // This will throw an error: "Age cannot be negative"
console.log(user.age); // 30, because the previous assignment of -5 was not successful due to the error thrown in the setter method.

class MathHelper {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.subtract(5, 3)); // 2
console.log(MathHelper.multiply(5, 3)); // 15

class Animal {
  constructor(protected name: string) {}
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
  makeSound(): void {
    this.bark();
  }
}

const myDog = new Dog('Rex');
myDog.eat();
myDog.bark();
myDog.makeSound();

// myDog.name; // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.

abstract class Shape {
  abstract getArea(): number; // This is an abstract method that must be implemented by any non-abstract class that extends the Shape class. It does not have a body and is meant to be overridden by subclasses to provide specific implementations for calculating the area of different shapes.  The getArea method is declared as abstract, which means that it cannot be instantiated directly and must be implemented by any concrete subclass of Shape. This allows us to define a common interface for all shapes while allowing each shape to provide its own specific implementation for calculating the area.  The getArea method is expected to return a number representing the area of the shape, and it must be implemented in any subclass that extends the Shape class. If a subclass does not implement the getArea method, it will result in a compile-time error, as the abstract method must be implemented in order for the subclass to be instantiated.  The abstract class Shape serves as a blueprint for creating specific shape classes, such as Circle, Rectangle, or Triangle, each of which will provide its own implementation of the getArea method to calculate the area based on the properties of that specific shape.

  printArea(): void {
    console.log(`The area of the shape is: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super('Circle'); // The super keyword is used to call the constructor of the parent class (Shape) from the constructor of the child class (Circle). In this case, we are passing the string 'Circle' as an argument to the constructor of the Shape class, which will set the name property of the Shape class to 'Circle'. This allows us to identify the type of shape when we call the printArea method, as it will use the name property inherited from the Shape class to display the type of shape along with its area.
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(public sideLength: number) {
    super('Square'); // Similar to the Circle class, we are calling the constructor of the Shape class using the super keyword and passing the string 'Square' as an argument. This sets the name property of the Shape class to 'Square', allowing us to identify the type of shape when we call the printArea method, as it will use the name property inherited from the Shape class to display the type of shape along with its area.
  }

  getArea(): number {
    return this.sideLength * this.sideLength;
  }
}

const myCircle = new Circle(5);
myCircle.printArea(); // "The area of the shape is: 78.53981633974483"
const mySquare = new Square(4);
mySquare.printArea(); // "The area of the shape is: 16"
