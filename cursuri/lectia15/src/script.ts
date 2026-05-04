let user: { name: string; age: number } = {
  name: 'Alice',
  age: 30,
};
console.log(user.name);
console.log(user.age);

let product: {
  title: string;
  price: number;
  description?: string; // optional property
} = {
  title: 'Laptop',
  price: 999.99,
  description: 'A high-performance laptop for gaming and productivity.',
};
console.log(product.title);
console.log(product.price);
console.log(product.description);

type User = {
  name: string;
  age: number;
};
let user2: User = {
  name: 'Bob',
  age: 25,
};
console.log(user2.name);
console.log(user2.age);

type Product = {
  title: string;
  price: number;
  description?: string; // optional property
};
let product2: Product = {
  title: 'Smartphone',
  price: 499.99,
  // amount: 10, // Error: Object literal may only specify known properties, and 'amount' does not exist in type 'Product'.
};
console.log(product2.title);
console.log(product2.price);
console.log(product2.description);

interface ProductInterface {
  title: string;
  price: number;
  description?: string; // optional property
}

let product3: ProductInterface = {
  title: 'Tablet',
  price: 299.99,
  description: 'A lightweight tablet for entertainment and productivity.',
};
console.log(product3.title);
console.log(product3.price);
console.log(product3.description);

product3.price = 279.99; // we can modify the price property of product3 because it is not a readonly property
console.log(product3.price);

// product3.price = "299.99"; // Error: Type 'string' is not assignable to type 'number'.

if (product3.description) {
  console.log(product3.description.toUpperCase());
} else {
  console.log('No description available.');
}

type CustomUser = {
  readonly id: number; // read-only property
  name: string;
  age: number;
};

let user3: CustomUser = {
  id: 1,
  name: 'Charlie',
  age: 35,
};
console.log(user3.id);
console.log(user3.name);
console.log(user3.age);
// user3.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user3.name = 'Charlie Brown'; // we can modify the name property of user3 because it is not a readonly property
user3.age = 36; // we can modify the age property of user3 because it is not a readonly property
console.log(user3.id); // the id property of user3 remains unchanged because it is a read-only property
console.log(user3.name);
console.log(user3.age);

type AnoterUserType = {
  name: string;
  sayHello: () => void; // method that returns void
};

let user4: AnoterUserType = {
  name: 'Dave',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};
user4.sayHello(); // "Hello, my name is Dave!"
console.log(user4.sayHello()); // "Hello, my name is Dave!" followed by undefined, because the sayHello method does not return anything (void)

type AnotherProductType = {
  title: string;
  price: number;
  getDiscountedPrice: (discount: number) => number; // method that takes a discount percentage and returns the discounted price
  printDetails: () => void; // method that returns void
};

let product4: AnotherProductType = {
  title: 'Headphones',
  price: 199.99,
  getDiscountedPrice: function (discount) {
    return this.price - this.price * discount;
  },
  printDetails: function () {
    console.log(`Product: ${this.title}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  },
};

product4.printDetails();
console.log(
  `Discounted Price (20% off): $${product4.getDiscountedPrice(0.2).toFixed(2)}`,
);

function createProduct(title: string, price: number): ProductInterface {
  return {
    title,
    price,
    description: undefined,
  };
}
let newProduct = createProduct('Monitor', 149.99);
console.log(newProduct);

let users: User[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
console.log(users);

users.forEach((user) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});

type Scores = {
  [subject: string]: number; // index signature, allows us to have properties with dynamic names and number values
};
let studentScores: Scores = {
  Math: 95,
  English: 88,
  // Science: "92", // Error: Type 'string' is not assignable to type 'number'.
  Science: 92,
};
console.log(studentScores);
console.log(studentScores.Math);
console.log(studentScores['English']);
console.log(studentScores['Science']);

let data: object = {
  name: 'Eve',
  age: 28,
};
console.log(data);
// console.log(data.name); // Error: Property 'name' does not exist on type 'object'.
console.log((data as any).name); // "Eve"
// The as any type assertion allows us to bypass the type checking and access properties of the data object, but it is not recommended to use it in production code because it can lead to runtime errors if the assumptions about the structure of the data object are incorrect. It is better to define a specific type for the data object that includes the expected properties and their types.

let value: {} = {
  name: 'Frank',
};
console.log(value);
// console.log(value.name); // Error: Property 'name' does not exist on type '{}'.
console.log((value as any).name); // "Frank"
// Similar to the previous example, the as any type assertion allows us to access properties of the value object, but it is not recommended to use it in production code. It is better to define a specific type for the value object that includes the expected properties and their types.

let value2: any = {
  name: 'Grace',
};
console.log(value2);
console.log(value2.name);
console.log((value2 as any).name); // "Grace"

type Product99 = {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
  inStock: boolean;
};

function getFinalPrice(product: Product99): number {
  if (product.discount) {
    return product.price - product.price * product.discount;
  }

  return product.price;
}

function printProductDetails(product: Product99): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${getFinalPrice(product).toFixed(2)}`);
}

let myProduct: Product99 = {
  id: 1,
  name: 'Laptop',
  price: 4000,
  discount: 500,
  inStock: true,
};

printProductDetails(myProduct);

type User2 = {
  name: string;
  age: number;
  email: string;
};
let updateUser: Partial<User2> = {
  // Partial is a utility type that allows us to create a new type by making all properties of an existing type optional. In this case, we are creating a new type called Partial<User2> where all properties of the User2 type (name, age, email) are optional. This can be useful when we want to update only some properties of a user object without having to provide values for all properties.
  name: 'Alice',
  // age: 30, // we can omit the age property because it is optional in the Partial<User2> type
  email: 'new@test.com',
};
console.log(updateUser);

type User3 = {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
};

type PublicUser = Pick<User3, 'id' | 'name'>; // Pick is a utility type that allows us to create a new type by selecting specific properties from an existing type. In this case, we are creating a new type called PublicUser that includes only the id and name properties from the User3 type. This can be useful when we want to expose only certain properties of a user object to the public while keeping other properties private or sensitive.
let publicUser: PublicUser = {
  id: 1,
  name: 'Alice',
};
console.log(publicUser);

type SafeUser = Omit<User3, 'password' | 'age'>; // Omit is a utility type that allows us to create a new type by excluding specific properties from an existing type. In this case, we are creating a new type called SafeUser that includes all properties of the User3 type except for the password property. This can be useful when we want to create a user object that does not include sensitive information like passwords.
let safeUser: SafeUser = {
  id: 1,
  name: 'Alice',
  email: '',
};
console.log(safeUser);

console.log(product.description.toUpperCase()); // Error: Object is possibly 'undefined'.
console.log(product.description?.toUpperCase()); // "A HIGH-PERFORMANCE LAPTOP FOR GAMING AND PRODUCTIVITY."
// The optional chaining operator (?.) allows us to safely access the description property of the product object without causing a runtime error if the description property is undefined. If the description property is undefined, the expression product.description?.toUpperCase() will evaluate to undefined instead of throwing an error. If the description property is defined, it will return the uppercase version of the description string as expected.
