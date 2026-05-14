// Generic function to get a value from an object based on a key
// T is the type of the object, K is the type of the key which must be a key of T
// The function returns the value corresponding to the key in the object
// This function ensures type safety by using generics and key constraints
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = {
  id: 1,
  name: 'Alice',
  age: 30,
};

console.log(getValue(user, 'name')); // Output: Alice
console.log(getValue(user, 'age')); // Output: 30
// The following line would cause a TypeScript error because "email" is not a key of the user object
// console.log(getValue(user, "email")); // Error: Argument of type '"email"' is not assignable to parameter of type '"id" | "name" | "age"'.

/* ------------------------------------------------------ */

function updateValue<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  obj[key] = value;
  return obj;
}

let product = {
  id: 101,
  name: 'Laptop',
  price: 999.99,
};

updateValue(product, 'price', 899.99);
console.log(product.price); // Output: 899.99
updateValue(product, 'name', 'Gaming Laptop');
// updateValue(product, "name", 123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(product.name); // Output: Gaming Laptop
console.log(product); // Output: { id: 101, name: "Gaming Laptop", price: 899.99 }
// The following line would cause a TypeScript error because "description" is not a key of the product object
// updateValue(product, "description", "A high-end laptop"); // Error: Argument of type '"description"' is not assignable to parameter of type '"id" | "name" | "price"'.

/* ------------------------------------------------------ */

function copyProperty<T, U extends keyof T>(source: T, key: U): T[U] {
  return source[key];
}

let car = {
  brand: 'Toyota',
  year: 2020,
  electric: false,
};

let brand = copyProperty(car, 'brand');
let year = copyProperty(car, 'year');
let electric = copyProperty(car, 'electric');
console.log(brand); // Output: Toyota
console.log(year); // Output: 2020
console.log(electric); // Output: false
// The following line would cause a TypeScript error because "color" is not a key of the car object
// let color = copyProperty(car, "color"); // Error: Argument of type '"color"' is not assignable to parameter of type '"brand" | "year" | "electric"'.

/* ------------------------------------------------------ */
class Car {
  brand: string = 'BMW';
}
class Phone {
  brand: string = 'Apple';
}

// Generic function to create an instance of a class
// T is the type of the class instance, and ClassType is a constructor function that returns an instance of T
// The function creates and returns a new instance of the specified class
function createObject<T>(ClassType: new () => T): T {
  return new ClassType();
}

let car2 = createObject(Car);
let phone = createObject(Phone);

console.log(car2.brand); // Output: BMW
console.log(phone.brand); // Output: Apple

/* ------------------------------------------------------ */
class Course {
  title: string;

  constructor() {
    this.title = 'TypeScript Course';
  }
}

// Generic function to build an instance of a class
// T is the type of the class instance, and ClassType is a constructor function that returns an instance of T
// The function creates and returns a new instance of the specified class
function build<T>(ClassType: new () => T): T {
  return new ClassType();
}

let course = build(Course);
console.log(course.title); // Output: TypeScript Course
/* ------------------------------------------------------ */

class Student {
  name: string;
  age: number;

  constructor() {
    this.name = 'John Doe';
    this.age = 25;
  }
}

function createWithDefaults<T>(ClassType: new () => T): T {
  return new ClassType();
}

function createWithParameters<T, U>(
  ClassType: new (param: U) => T,
  param: U,
): T {
  return new ClassType(param);
}

function createWithParams<T>(
  ClassType: new (name: string, age: number) => T,
  name: string,
  age: number,
): T {
  return new ClassType(name, age);
}

let student1 = createWithDefaults(Student);
console.log(student1.name); // Output: John Doe
console.log(student1.age); // Output: 25
let student2 = createWithParameters(Student, { name: 'Jane Doe', age: 22 });
console.log(student2.name); // Output: Jane Doe
console.log(student2.age); // Output: 22
let student3 = createWithParams(Student, 'Alice Smith', 28);
console.log(student3.name); // Output: Alice Smith
console.log(student3.age); // Output: 28
/* ------------------------------------------------------ */
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

// Generic function to create an instance of a class with any number of parameters
// T is the type of the class instance, and ClassType is a constructor function that can take any number of parameters and returns an instance of T
// The function creates and returns a new instance of the specified class using the provided parameters
function createAnyObject<T>(
  ClassType: new (...args: any[]) => T,
  ...args: any[]
): T {
  return new ClassType(...args);
}

let employee = createAnyObject(Employee, 'Bob Johnson', 50000);
console.log(employee.name); // Output: Bob Johnson
console.log(employee.salary); // Output: 50000
/* ------------------------------------------------------ */
class User {
  name: string = 'Default User';
}
class Admin {
  role: string = 'Administrator';
}
class Factory<T> {
  constructor(private ClassType: new () => T) {}
  create(): T {
    return new this.ClassType();
  }
}

let userFactory = new Factory(User);
let adminFactory = new Factory(Admin);

let user2 = userFactory.create();
let admin = adminFactory.create();
console.log(user2.name); // Output: Default User
console.log(admin.role); // Output: Administrator
/* ------------------------------------------------------ */
interface BaseEntity {
  id: number;
}

class User2 implements BaseEntity {
  id: number;
  name: string;

  constructor() {
    this.id = 0;
    this.name = '';
  }
}

class Product implements BaseEntity {
  id: number;
  title: string;
  price: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.price = 0;
  }
}

// Generic service class that can handle any type of entity that extends BaseEntity
// T is the type of the entity, and ClassType is a constructor function that returns an instance of T
// The class provides methods to create and manage entities of type T
class GenericService<T extends BaseEntity> {
  private items: T[] = [];

  constructor(private ClassType: new () => T) {}

  create(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

let userService = new GenericService(User2);
let productService = new GenericService(Product);

let user3 = new User2();
user3.id = 1;
user3.name = 'Charlie Brown';
userService.create(user3);

let product1 = new Product();
product1.id = 101;
product1.title = 'Book';
product1.price = 19.99;
productService.create(product1);

console.log(userService.getAll()); // Output: [ User2 { id: 1, name: 'Charlie Brown' } ]
console.log(productService.getAll()); // Output: [ Product { id: 101, title: 'Book', price: 19.99 } ]
/* ------------------------------------------------------ */
