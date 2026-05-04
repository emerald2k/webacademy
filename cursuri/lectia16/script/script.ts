interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Alice',
  age: 30,
};

console.log(user.name);
console.log(user.age);

interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: 'Bob',
  age: 25,
  email: 'test@test.com',
};

console.log(person.name);
console.log(person.age);
console.log(person.email);

// Optional properties in interfaces
interface Product {
  title: string;
  price: number;
  description?: string; // optional property
}
const product: Product = {
  title: 'Laptop',
  price: 999.99,
  description: 'A high-performance laptop for gaming and productivity.',
};
console.log(product.title);
console.log(product.price);
console.log(product.description);

// Readonly properties in interfaces
interface CustomUser {
  readonly id: number;
  name: string;
  age: number;
}

const customUser: CustomUser = {
  id: 1,
  name: 'Charlie',
  age: 28,
};
console.log(customUser.id);
console.log(customUser.name);
console.log(customUser.age);

// Function types in interfaces
interface AnoterUserType {
  name: string;
  sayHello: () => void;
}
const anotherUser: AnoterUserType = {
  name: 'Dave',
  sayHello: () => {
    console.log(`Hello, my name is ${anotherUser.name}`);
  },
};
anotherUser.sayHello();

interface AnotherProductType {
  title: string;
  price: number;
  getDiscountedPrice: (discount: number) => number;
  printDetails: () => void;
}
const anotherProduct: AnotherProductType = {
  title: 'Smartphone',
  price: 499.99,
  getDiscountedPrice: (discount: number) => {
    return anotherProduct.price - discount;
  },
  printDetails: () => {
    console.log(`${anotherProduct.title} - $${anotherProduct.price}`);
  },
};
anotherProduct.printDetails();
console.log(`Discounted Price: $${anotherProduct.getDiscountedPrice(50)}`);

// Empty interface
interface Scores {}
const scores: Scores = {};
console.log(scores);

// type versus interface
interface Product99 {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
  inStock: boolean;
}

type ProductType99 = {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
  inStock: boolean;
};

// Both Product99 and ProductType99 have the same structure and can be used interchangeably in this case. The choice between using an interface or a type alias often comes down to personal preference and specific use cases, as both can define the shape of an object in TypeScript.
// In general, interfaces are often preferred for defining the shape of objects and classes, while type aliases are more commonly used for defining union types, intersection types, and other complex type compositions. However, both can be used to achieve similar results when defining the structure of an object.
// In this example, both Product99 and ProductType99 define the same properties and types, so they can be used interchangeably when creating objects of that type. The choice between using an interface or a type alias in this case is mostly a matter of style and consistency within the codebase.

interface Rectangle {
  width: number;
  height: number;
  getArea(): number;
}

const rectangle: Rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height;
  },
};
console.log(`Area of the rectangle: ${rectangle.getArea()}`);

interface AppSettings {
  theme: 'light' | 'dark'; // Literal types
  language: string;
  notificationsEnabled: boolean;
}

const settings: AppSettings = {
  theme: 'light', // The theme property is assigned a literal type value of "light". This means that the theme property can only be assigned the value "light" or "dark", and any other value will result in a type error. Literal types allow us to specify exact values for properties, providing more precise type checking and improving code readability by clearly indicating the expected values for that property.
  language: 'en',
  notificationsEnabled: true,
};
console.log(`Current theme: ${settings.theme}`);
console.log(`Language: ${settings.language}`);
console.log(`Notifications enabled: ${settings.notificationsEnabled}`);

interface Notification {
  type: 'success' | 'error' | 'warning'; // Literal types
  message: string;
  title: string;
  read: boolean;
  markAsRead: () => void;
}

const notification: Notification = {
  type: 'success', // The type property is assigned a literal type value of "success". This means that the type property can only be assigned the value "success", "error", or "warning", and any other value will result in a type error. Literal types allow us to specify exact values for properties, providing more precise type checking and improving code readability by clearly indicating the expected values for that property.
  message: 'Your operation was successful!',
  title: 'Success',
  read: false,
  markAsRead() {
    this.read = true;
    console.log(`Notification marked as read: ${this.title}`);
  },
};

console.log(`Message: ${notification.message}`);
console.log(`Read: ${notification.read}`);
notification.markAsRead();
console.log(`Read after marking as read: ${notification.read}`);

type Permission = 'read' | 'write' | 'delete' | 'create' | 'update';

interface UserRole {
  name: string;
  permissions: Permission[];
}

const adminRole: UserRole = {
  name: 'Admin',
  permissions: ['read', 'write', 'delete'],
};

const editorRole: UserRole = {
  name: 'Editor',
  permissions: ['read', 'write'],
};

function canDelete(userRole: UserRole): boolean {
  return userRole.permissions.includes('delete');
}
console.log(`Can admin delete? ${canDelete(adminRole)}`); // true
console.log(`Can editor delete? ${canDelete(editorRole)}`); // false

interface ContactForm {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

function validateForm(form: ContactForm): boolean {
  if (!form.name || !form.email || !form.message) {
    console.log('All fields are required.');
    return false;
  }

  if (form.name.length < 2) {
    console.log('Name must be at least 2 characters long.');
    return false;
  }

  if (!form.email.includes('@')) {
    console.log('Email must be valid.');
    return false;
  }

  if (form.message.length < 10) {
    console.log('Message must be at least 10 characters long.');
    return false;
  }

  if (!form.acceptTerms) {
    console.log('You must accept the terms and conditions.');
    return false;
  }

  return true;
}

const contactForm: ContactForm = {
  name: 'Eve',
  email: 'ion@test.com',
  message: 'Hello, I have a question about your product.',
  acceptTerms: true,
};

console.log(validateForm(contactForm)); // true

interface ProductPrices {
  [productName: string]: number; // Index signature allows us to define an object type where the keys are of a specific type (in this case, string) and the values are of another specific type (in this case, number). This means that we can have an object where the keys represent product names and the values represent their corresponding prices. The index signature [productName: string]: number; indicates that any property with a string key will have a number value, allowing us to create a flexible object structure for storing product prices.
}

const prices: ProductPrices = {
  Laptop: 999.99,
  Smartphone: 499.99,
  Tablet: 299.99,
};

function printPrices(productPrices: ProductPrices): void {
  for (const product in productPrices) {
    console.log(`${product}: $${productPrices[product].toFixed(2)}`);
  }
}
printPrices(prices);

interface Printable {
  title: string;
  print(): void;
}

class Invoice implements Printable {
  constructor(
    public title: string,
    public amount: number,
  ) {}

  print(): void {
    console.log(`Invoice: ${this.title} - Amount: $${this.amount.toFixed(2)}`);
  }
}

const invoice = new Invoice('Web Development Services', 1500);
invoice.print(); // "Invoice: Web Development Services - Amount: $1500.00"
