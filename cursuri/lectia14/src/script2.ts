let title: HTMLElement | null = document.querySelector('#title');
// HTMLElement | null - the type of the variable title can be either an HTMLElement or null, depending on whether the element with id "title" exists in the DOM or not
// console.log(title.textContent); // Error: Object is possibly 'null'.
console.log(title?.textContent); // "Hello World"
// The optional chaining operator (?.) allows you to safely access properties of an object that may be null or undefined without causing a runtime error.
// If title is null, the expression title?.textContent will evaluate to undefined instead of throwing an error.
// If title is not null, it will return the text content of the element as expected.

if (title !== null) {
  title.textContent = 'Hello TypeScript';
}

let title2 = document.querySelector('#title') as HTMLElement | null;
// The as keyword is a type assertion that tells the TypeScript compiler to treat the expression on the left as the type specified on the right.
// In this case, we are asserting that the result of document.querySelector('#title') is of type HTMLElement | null.
// This allows us to access the textContent property without getting a compile-time error, but it does not provide any runtime safety.
// If the element with id "title" does not exist in the DOM, title2 will be null and accessing title2.textContent will still cause a runtime error.
// Therefore, it is generally recommended to use optional chaining (?.) instead of type assertions when dealing with potentially null or undefined values.
if (title2 !== null) {
  title2.textContent = 'Hello TypeScript';
}

let message = document.querySelector('#message') as HTMLElement;
// In this case, we are asserting that the result of document.querySelector('#message') is of type HTMLElement.
// This means that we are telling the TypeScript compiler that we are sure that the element with id "message" exists in the DOM and is an HTMLElement.
if (message !== null) {
  message.style.color = 'red';
}
// If the element with id "message" does not exist in the DOM, this code will throw a runtime error because we are trying to access the style property of null.
// Therefore, it is important to be cautious when using type assertions and to ensure that the assumptions you are making about the types of values are correct.
message.style.fontSize = '20px';

let text = document.querySelector('#text') as HTMLParagraphElement;
// In this case, we are asserting that the result of document.querySelector('#text') is of type HTMLParagraphElement.
// This means that we are telling the TypeScript compiler that we are sure that the element with id "text" exists in the DOM and is an HTMLParagraphElement.
text.classList.add('highlight');
// If the element with id "text" does not exist in the DOM, this code will throw a runtime error because we are trying to access the classList property of null.
// Therefore, it is important to be cautious when using type assertions and to ensure that the assumptions you are making about the types of values are correct.
text.classList.remove('highlight');
text.classList.toggle('highlight');
// The classList property of an HTMLElement provides methods to manipulate the classes of the element.
// The add method adds a class to the element's class list.
// The remove method removes a class from the element's class list.
// The toggle method toggles a class on the element's class list, adding it if it is not present and removing it if it is present.

let button = document.querySelector('#button') as HTMLButtonElement;
button.addEventListener('click', () => {
  alert('Button clicked!');
});
button.disabled = true;
// The disabled property of an HTMLButtonElement is a boolean that indicates whether the button is disabled or not.
// Setting it to true will disable the button, preventing users from interacting with it.
// Setting it to false will enable the button, allowing users to interact with it again.
button.textContent = 'Click me';
// The textContent property of an HTMLElement represents the text content of the element and its descendants.
// Setting it to a string will replace the existing text content of the element with the new string.
// If the element has child elements, they will be removed and replaced with the new text content.

// shift/unshift/push/pop - these are array methods that allow you to add or remove elements from the beginning or end of an array.
// shift - removes the first element from an array and returns it
// unshift - adds one or more elements to the beginning of an array and returns the new length of the array
// push - adds one or more elements to the end of an array and returns the new length of the array
// pop - removes the last element from an array and returns it

let searchInput = document.querySelector('#search') as HTMLInputElement;
let productsList = document.querySelector('#products') as HTMLUListElement;
let products = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smartwatch'];

function displayProducts(filteredProducts: string[]): void {
  productsList.innerHTML = '';
  filteredProducts.forEach((product) => {
    let li = document.createElement('li');
    li.textContent = product;
    productsList.appendChild(li);
  });
}

displayProducts(products);

searchInput.addEventListener('input', () => {
  let query = searchInput.value.toLowerCase();
  let filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(query),
  );

  displayProducts(filteredProducts);
});
