// Typescript generics allow you to create reusable components that can work with a variety of data types while still maintaining type safety. They enable you to define functions, classes, and interfaces that can operate on different types without sacrificing the benefits of static typing.

// A generic type is defined using angle brackets (<>) and a type parameter, which is a placeholder for the actual type that will be used when the generic is instantiated. The type parameter can be used within the body of the generic to refer to the type that will be provided when the generic is used.

// The type parameter can be named anything, but it is common to use single uppercase letters (e.g., T, U, V) to indicate that they are type parameters. When you use a generic, you can specify the actual type that should be used in place of the type parameter, allowing you to create flexible and reusable code that can work with different types while still providing type safety.
// In the example below, we have a generic function called showValue that takes a value of type T and returns it. The type parameter T allows us to specify the type of the value when we call the function, making it flexible and reusable for different types of data.
// The identity function is a common example of a generic function that simply returns the value it receives as an argument. By using a type parameter, we can ensure that the function works with any type while still maintaining type safety.
// The showValue function is a generic function that takes a value of type T and returns it. The type parameter T allows us to specify the type of the value when we call the function, making it flexible and reusable for different types of data. In this example, we call showValue with different types of arguments (string, number, boolean) and the function correctly infers the type of the return value based on the type of the argument provided.
// T, K, V, etc. are commonly used as type parameters in generics, but you can use any valid identifier as a type parameter name. The choice of the name is mostly a matter of convention and readability, with T being the most commonly used for a single type parameter. When using multiple type parameters, it is common to use K for keys and V for values, especially in the context of data structures like maps or dictionaries. However, the specific names you choose for your type parameters should be descriptive and meaningful in the context of your code to improve readability and maintainability.

function showValue<T>(value: T): T {
  return value;
}

let result1 = showValue<string>('Hello, TypeScript!');
let result2 = showValue<number>(42);
let result3 = showValue<boolean>(true);

console.log(result1); // "Hello, TypeScript!"
console.log(result2); // 42
console.log(result3); // true

function identity<T>(arg: T): T {
  return arg;
}

let result4 = identity<string>('TypeScript is awesome!');
let result5 = identity<number>(100);
let result6 = identity<boolean>(false);
let result7 = identity(
  'This is a string without specifying the type parameter, and TypeScript will infer the type as string.',
);
let result8 = identity(123); // TypeScript will infer the type as number.
let result9 = identity(true); // TypeScript will infer the type as boolean.

console.log(result4); // "TypeScript is awesome!"
console.log(result5); // 100
console.log(result6); // false
console.log(result7); // "This is a string without specifying the type parameter, and TypeScript will infer the type as string."
console.log(result8); // 123
console.log(result9); // true

// In the example below, we have a generic function called getFirstElement that takes an array of type T and returns the first element of that array. The type parameter T allows us to specify the type of the elements in the array when we call the function, making it flexible and reusable for different types of arrays. In this example, we call getFirstElement with an array of strings and an array of numbers, and the function correctly infers the type of the return value based on the type of the elements in the array provided.
// The getFirstElement function is a generic function that takes an array of type T and returns the first element of that array. The type parameter T allows us to specify the type of the elements in the array when we call the function, making it flexible and reusable for different types of arrays. In this example, we call getFirstElement with an array of strings and an array of numbers, and the function correctly infers the type of the return value based on the type of the elements in the array provided. This demonstrates how generics can help us create reusable functions that can work with different types while still maintaining type safety.

function getFirstElement<T>(items: T[]): T {
  return items[0];
}

let names = ['Ion', 'Maria', 'Alex'];
let numbers1 = [1, 2, 3, 4, 5];

let firstName = getFirstElement<string>(names);
let firstNumber = getFirstElement<number>(numbers1);

console.log(firstName); // "Ion"
console.log(firstNumber); // 1

// Box is a generic class that can hold a value of any type specified by the type parameter T. The type parameter allows us to create instances of the Box class that can hold different types  of values while still maintaining type safety. In this example, we create two instances of the Box class: one that holds a string and another that holds a number. The getValue method returns the value stored in the box, and the type of the return value is inferred based on the type parameter specified when creating the instance of the Box class.
// Box is reserved keyword in TypeScript that is used to define a generic class. The Box class is a simple container that can hold a value of any type specified by the type parameter T. The getValue method allows us to retrieve the value stored in the box, and the type of the return value is determined by the type parameter T when we create an instance of the Box class. This allows us to create flexible and reusable code that can work with different types while still providing type safety.

type Box<T> = {
  value: T;
  getValue: () => T;
};

let stringBox: Box<string> = {
  value: 'Hello, Box!',
  getValue() {
    return this.value;
  },
};

let numberBox: Box<number> = {
  value: 123,
  getValue() {
    return this.value;
  },
};

console.log(stringBox.getValue()); // "Hello, Box!"
console.log(numberBox.getValue()); // 123

/* ------------------------------------------------------ */

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

let userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: {
    id: 1,
    name: 'Alice',
  },
  message: 'User data retrieved successfully.',
};

let priceResponse: ApiResponse<number> = {
  success: true,
  data: 99.99,
  message: 'Price retrieved successfully.',
};

console.log(userResponse);
console.log(priceResponse);

/* ------------------------------------------------------ */
// GENERICS WITH MULTIPLE TYPE PARAMETERS
// In this example, we have a generic function called createPair that takes two parameters of types T and U and returns a tuple containing those two values. The type parameters T and U allow us to specify the types of the values when we call the function, making it flexible and reusable for different types of data. In this example, we call createPair with different combinations of types (string and number, boolean and string) and the function correctly infers the types of the return value based on the types of the arguments provided. This demonstrates how generics can help us create reusable functions that can work with different types while still maintaining type safety.
// The createAnotherPair function is a generic function that takes two parameters of types K and V and returns a tuple containing those two values. The type parameters K and V allow us to specify the types of the key and value when we call the function, making it flexible and reusable for different types of data. In this example, we call createAnotherPair
// In this example, we have a generic function called createPair that takes two parameters of types T and U and returns a tuple containing those two values. The type parameters T and U allow us to specify the types of the values when we call the function, making it flexible and reusable for different types of data. In this example, we call createPair with different combinations of types (string and number, boolean and string) and the function correctly infers the types of the return value based on the types of the arguments provided. This demonstrates how generics can help us create reusable functions that can work with different types while still maintaining type safety.
// The createAnotherPair function is a generic function that takes two parameters of types K and V and returns a tuple containing those two values. The type parameters K and V allow us to specify the types of the key and value when we call the function, making it flexible and reusable for different types of data. In this example, we call createAnotherPair with different combinations of types (string and number, boolean and string) and the function correctly infers the types of the return value based on the types of the arguments provided. This demonstrates how generics can help us create reusable functions that can work with different types while still maintaining type safety.
// In the createAnotherPair function, we are using different type parameter names (K and V) to indicate that they represent a key and a value, respectively. This is a common convention when working with data structures like maps or dictionaries, where K typically represents the type of the keys and V represents the type of the values. However, the specific names you choose for your type parameters should be descriptive and meaningful in the context of your code to improve readability and maintainability.

function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

function createAnotherPair<T, U, K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

let pair1 = createPair<string, number>('Age', 30);
let pair2 = createPair<boolean, string>(true, 'IsActive');
let pair3 = createAnotherPair<string, number, string, number>('Age', 30);
let pair4 = createAnotherPair<boolean, string, boolean, string>(
  true,
  'IsActive',
);

console.log(pair1); // ["Age", 30]
console.log(pair2); // [true, "IsActive"]
console.log(pair3); // ["Age", 30]
console.log(pair4); // [true, "IsActive"]

/* ------------------------------------------------------ */
// GENERICS WITH CONSTRAINTS
// In this example, we have a generic function called printLength that takes an item of type T and prints its length. The type parameter T is constrained to types that have a length property (i.e., types that extend { length: number }). This means that we can only call printLength with arguments that have a length property, such as strings, arrays, or objects with a length property. In this example, we call printLength with a string and an array, and the function correctly prints the length of each item. If we try to call printLength with a type that does not have a length property (e.g., a number), TypeScript will give us a compile-time error, ensuring type safety.
function printLength<T extends { length: number }>(item: T): void {
  console.log(`Length: ${item.length}`);
}

printLength('Hello, TypeScript!'); // Length: 21
printLength([1, 2, 3, 4, 5]); // Length: 5
// printLength(123); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

/* ------------------------------------------------------ */
// In this example, we have a generic function called printUserInfo that takes a user object of type T, where T is constrained to types that have name and age properties (i.e., types that extend { name: string; age: number }). This means that we can only call printUserInfo with arguments that have name and age properties, ensuring type safety. In this example, we call printUserInfo with a user object that has name, age, and email properties. The function correctly prints the name and age of the user, while ignoring the email property since it is not required by the constraint. If we try to call printUserInfo with a type that does not have name and age properties (e.g., an object with only an email property), TypeScript will give us a compile-time error, ensuring type safety.
// The printUserInfo function demonstrates how we can use generics with constraints to create flexible and reusable code that can work with different types while still maintaining type safety by enforcing certain properties on the types that can be used with the function.
function printUserInfo<T extends { name: string; age: number }>(user: T): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

let user = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
};

printUserInfo(user); // Name: Alice, Age: 30
/* ------------------------------------------------------ */
// GENERIC UTILITY TYPES
// TypeScript provides several built-in generic utility types that can help you manipulate and transform types in various ways. Some of the most commonly used generic utility types include Partial, Readonly, Pick, Omit, Record, and Exclude. These utility types allow you to create new types based on existing ones by making properties optional, read-only, or by selecting or excluding specific properties. Using these utility types can help you write more flexible and reusable code while still maintaining type safety. In the example below, we demonstrate how to use some of these utility types to create new types based on an existing User type. We use Partial to create a type where all properties are optional, Readonly to create a type where all properties are read-only, Pick to create a type that includes only specific properties, and Omit to create a type that excludes specific properties. This allows us to easily manipulate and transform our types to fit different use cases while still ensuring type safety.
// The getProperty function is a generic function that takes an object of type T and a key of type K, where K is constrained to be a key of T (i.e., K extends keyof T). This means that we can only call getProperty with keys that exist on the object T, ensuring type safety. The function returns the value of the specified key from the object, and the return type is inferred based on the type of the key provided. In this example, we call getProperty with a product object and different keys (name and price), and the function correctly returns the corresponding values while ensuring that we are only accessing valid keys on the product object.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let product5 = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
};

let productName = getProperty(product5, 'name'); // Type is inferred as string
let productPrice = getProperty(product5, 'price'); // Type is inferred as number
// let category = getProperty(product5, 'category'); // Error: Argument of type '"category"' is not assignable to parameter of type '"id" | "name" | "price"'.

console.log(productName); // "Laptop"
console.log(productPrice); // 999.99
/* ------------------------------------------------------ */
// GENERICS IN CLASSES
// In this example, we have a generic class called StorageBox that can hold items of any type specified by the type parameter T. The addItem method allows us to add an item of type T to the box, while the getAll method returns an array of all items in the box, and the getFirst method returns the first item in the box or undefined if the box is empty. By using generics, we can create instances of the StorageBox class that can hold different types of items while still maintaining type safety. In this example, we create a stringStorage instance that can hold strings and a numberStorage instance that can hold numbers. The methods of each instance correctly enforce the types of items they can hold, ensuring that we cannot add items of the wrong type to each box. This demonstrates how generics can be used in classes to create flexible and reusable data structures that can work with different types while still providing type safety.
class StorageBox<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getFirst(): T | undefined {
    return this.items[0];
  }
}

let stringStorage = new StorageBox<string>();
stringStorage.addItem('Hello');
stringStorage.addItem('World');
// stringStorage.addItem(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let numberStorage = new StorageBox<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
// numberStorage.addItem('Not a number'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
/* ------------------------------------------------------ */
// GENERICS IN CLASSES WITH CONSTRAINTS
// In this example, we have a generic class called Repository that can manage entities of any type specified by the type parameter T, where T is constrained to types that extend the Entity interface (i.e., types that have an id property). The Repository class provides methods to add, retrieve, update, and delete entities while ensuring that they all have an id property. By using generics with constraints, we can create a flexible and reusable repository class that can work with different types of entities while still maintaining type safety. In this example, we create a ProductRepository instance that can manage Product entities, which extend the Entity interface by including name and price properties. The methods of the Repository class correctly enforce the presence of the id property on the entities it manages, ensuring that we cannot add or manipulate entities that do not conform to the expected structure. This demonstrates how generics with constraints can be used in classes to create powerful and type-safe data management solutions.
// The Repository class is a generic class that can manage entities of any type specified by the type parameter T, where T is constrained to types that extend the Entity interface (i.e., types that have an id property). The Repository class provides methods to add, retrieve, update, and delete entities while ensuring that they all have an id property. By using generics with constraints, we can create a flexible and reusable repository class that can work with different types of entities while still maintaining type safety. In this example, we create a ProductRepository instance that can manage Product entities, which extend the Entity interface by including name and price properties. The methods of the Repository class correctly enforce the presence of the id property on the entities it manages, ensuring that we cannot add or manipulate entities that do not conform to the expected structure. This demonstrates how generics with constraints can be used in classes to create powerful and type-safe data management solutions.
interface Entity {
  id: number;
}

class Repository<T extends Entity> {
  private entities: T[] = [];
  add(entity: T): void {
    this.entities.push(entity);
  }
  getById(id: number): T | undefined {
    return this.entities.find((entity) => entity.id === id);
  }
  // The update method takes an id and an updatedEntity of type Partial<T>, which means that the updatedEntity can have any subset of the properties of T. This allows us to update only specific properties of an entity without having to provide values for all properties. The method first retrieves the existing entity by its id, and if it exists, it uses Object.assign to merge the properties of the updatedEntity into the existing entity. This way, we can easily update entities in the repository while still maintaining type safety by ensuring that the updatedEntity conforms to the structure of T.
  update(id: number, updatedEntity: Partial<T>): void {
    const item = this.getById(id);
    if (!item) {
      throw new Error(`Entity with ID ${id} not found`);
    }
    Object.assign(item, updatedEntity);
  }

  delete(id: number): void {
    this.entities = this.entities.filter((entity) => entity.id !== id);
  }

  getAll(): T[] {
    return this.entities;
  }
}

interface Product23 extends Entity {
  name: string;
  price: number;
}

let productRepository = new Repository<Product23>();
productRepository.add({ id: 1, name: 'Laptop', price: 999.99 });
productRepository.add({ id: 2, name: 'Smartphone', price: 499.99 });
productRepository.update(1, { price: 899.99 });
productRepository.delete(2);
console.log(productRepository.getAll()); // [{ id: 1, name: 'Laptop', price: 899.99 }]
