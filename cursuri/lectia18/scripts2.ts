console.log('Start');

setTimeout(() => {
  console.log('Se executa dupa 1 secunda');
}, 1000);

console.log('End');

// This code demonstrates the use of setTimeout to execute a function after a specified delay. The output will be:
// Start
// End
// Se executa dupa 1 secunda

/* ------------------------------------------------------ */

let promise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure

  if (success) {
    resolve('Promise resolved successfully!');
  } else {
    reject('Promise rejected!');
  }
});

promise
  .then((message) => {
    console.log(message); // Output: Promise resolved successfully!
  })
  .catch((error) => {
    console.error(error); // Output: Promise rejected!
  });

// This code demonstrates the creation and handling of a Promise. The promise simulates a success scenario, and the .then() method is used to handle the resolved value, while the .catch() method would handle any potential errors if the promise were rejected.
// Promises are a powerful way to handle asynchronous operations in JavaScript, allowing for cleaner and more manageable code compared to traditional callback functions.
// In this example, the promise is resolved successfully, so the .then() block is executed, logging the success message to the console. If you change the success variable to false, the .catch() block will be executed instead, logging the error message.
// This illustrates how promises can be used to manage asynchronous code and handle success and error scenarios effectively.
/* ------------------------------------------------------ */

let downloadPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true; // Simulate download success or failure
    if (success) {
      resolve('Datele au fost descărcate cu succes!');
    } else {
      reject('Descărcarea a eșuat!');
    }
  }, 2000);
});

downloadPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// This code simulates a download operation using a Promise. The promise will resolve after a 2-second delay, simulating the time taken for a download to complete. The success variable can be toggled to simulate either a success ful download or a failure.
// If the download is successful (success = true), the .then() block will execute, logging a success message to the console. If the download fails (success = false), the .catch() block will execute, logging an error message.
// This example demonstrates how promises can be used to handle asynchronous operations like downloads, allowing for clear and structured handling of success and failure scenarios without the need for nested callbacks.
// In real-world applications, you might replace the setTimeout with an actual asynchronous operation, such as fetching data from an API or reading a file, while still using promises to manage the flow of your code effectively.
// The use of promises helps to avoid callback hell and makes it easier to read and maintain asynchronous code.
/* ------------------------------------------------------ */

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1500);
  });
}

getUser()
  .then((user) => {
    console.log(user); // Output: { id: 1, name: 'Alice' }
  })
  .catch((error) => {
    console.error(error);
  });

// This code defines a function getUser that returns a Promise. The promise simulates an asynchronous operation (like fetching user data) by using setTimeout to delay the resolution of the promise by 1.5 seconds. When the promise resolves, it returns an object representing a user with an id and name.
// The .then() method is used to handle the resolved value of the promise, logging the user object to the console. If there were any errors during the execution of the promise, they would be caught and logged using the .catch() method.
// This example illustrates how promises can be used to manage asynchronous operations in JavaScript, allowing for cleaner and more readable code when dealing with operations that take time to complete, such as fetching data from a server or performing complex calculations.
/* ------------------------------------------------------ */
async function sayHello() {
  return 'Hello, World!';
}

sayHello()
  .then((message) => {
    console.log(message); // Output: Hello, World!
  })
  .catch((error) => {
    console.error(error);
  });

// This code defines an asynchronous function sayHello that returns a string. When the function is called, it returns a promise that resolves to the string 'Hello, World!'. The .then() method is used to handle the resolved value of the promise, logging the message to the console. If there were any errors during the execution of the async function, they would be caught and logged using the .catch() method.
// This example demonstrates the use of async functions in JavaScript, which allow you to write asynchronous code in a more synchronous and readable manner. The async function automatically returns a promise, and you can use .then() and .catch() to handle the resolved value or any potential errors, just like with regular promises.
// In this case, since the function simply returns a string, it resolves immediately, but in real-world applications, async functions often contain await expressions that pause the execution until a promise is resolved, making it easier to work with asynchronous operations without deeply nested callbacks.
// An async function can also be used with try/catch blocks to handle errors more elegantly, allowing you to write asynchronous code that looks and behaves more like synchronous code, improving readability and maintainability.
// Overall, async functions are a powerful feature in JavaScript that simplify the handling of asynchronous operations and make your code cleaner and easier to understand.
// async functions are a syntactic sugar over promises, providing a more intuitive way to work with asynchronous code. They allow you to write code that looks synchronous while still being non-blocking, making it easier to read and maintain.
// async functions always return a promise, and you can use the await keyword inside them to pause execution until a promise is resolved, which helps to avoid callback hell and makes error handling more straightforward with try/catch blocks.
/* ------------------------------------------------------ */

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is a message from a promise!');
    }, 1000);
  });
}

async function displayMessage() {
  try {
    const message = await getMessage();
    console.log(message); // Output: This is a message from a promise!
  } catch (error) {
    console.error(error);
  }
}

displayMessage();

// This code defines a function getMessage that returns a promise which resolves to a string message after a 1-second delay. The displayMessage function is an async function that uses the await keyword to wait for the promise returned by getMessage to resolve before logging the message to the console. If there were any errors during the execution of getMessage, they would be caught and logged using the try/catch block.
// This example demonstrates how async/await can be used to handle asynchronous operations in a more readable and straightforward way compared to traditional promise chaining with .then() and .catch(). The use of async/await allows you to write asynchronous code that looks and behaves more like synchronous code, improving readability and maintainability.
// In this case, the displayMessage function will log the message from the getMessage promise after a 1-second delay, demonstrating how async/await can simplify the handling of asynchronous operations and make your code cleaner and easier to understand.
// await can only be used inside async functions, and it allows you to PAUSE the execution of the function until the promise is resolved, making it easier to work with asynchronous code without deeply nested callbacks or complex promise chains.
/* ------------------------------------------------------ */

function getProduct() {
  return new Promise((resolve) => {
    resolve({ id: 101, name: 'Laptop', price: 999.99 });
  });
}

getProduct()
  .then((product) => {
    console.log(product); // Output: { id: 101, name: 'Laptop', price: 999.99 }
  })
  .catch((error) => {
    console.error(error);
  });

// OR

async function showProduct() {
  let product = await getProduct();
  console.log(product); // Output: { id: 101, name: 'Laptop', price: 999.99 }
}

// This code defines a function getProduct that returns a promise which resolves to an object representing a product with an id, name, and price. The .then() method is used to handle the resolved value of the promise, logging the product object to the console. If there were any errors during the execution of the promise, they would be caught and logged using the .catch() method.
// This example demonstrates how promises can be used to manage asynchronous operations in JavaScript, allowing for clear and structured handling of success and failure scenarios without the need for nested callbacks. In real-world applications, you might replace the resolve with an actual asynchronous operation, such as fetching data from an API or reading a file, while still using promises to manage the flow of your code effectively.
// The second part of the code shows how to achieve the same result using an async function with the await keyword, which can make the code more readable and easier to understand by allowing you to write asynchronous code that looks and behaves more like synchronous code.
// In both cases, the output will be the same, logging the product object to the console. The choice between using .then() and async/await often comes down to personal preference and the specific use case, but async/await can often lead to cleaner and more maintainable code when dealing with multiple asynchronous operations.
// Overall, both promises and async/await are powerful tools for handling asynchronous operations in JavaScript, and understanding how to use them effectively can greatly improve the quality and readability of your code.

/* ------------------------------------------------------ */

function loginUser(username: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve('Login successful!');
      } else {
        reject('Invalid username or password');
      }
    }, 1500);
  });
}

async function login() {
  try {
    const message = await loginUser('admin', 'password');
    console.log(message); // Output: Login successful!
  } catch (error) {
    console.error(error); // Output: Invalid username or password
  }
}

login();

// This code defines a function loginUser that simulates a login operation using a promise. The promise resolves with a success message if the provided username and password match the expected values, and it rejects with an error message if they do not. The login function is an async function that uses await to call loginUser and handle the resolved value or any potential errors using a try/catch block.
// This example demonstrates how to handle asynchronous operations like user authentication using promises and async/await. The login function will log a success message if the login is successful, or an error message if the login fails, demonstrating how to manage asynchronous code effectively in JavaScript.
// In real-world applications, you would typically replace the setTimeout with an actual asynchronous operation, such as making a request to a server to verify the user's credentials, while still using promises or async/await to manage the flow of your code effectively.
// The use of promises and async/await allows you to write cleaner and more maintainable code when dealing with asynchronous operations, such as user authentication, data fetching, or any other operation that takes time to complete.
/* ------------------------------------------------------ */

function getUser2(): Promise<{ id: number; name: string; age: number }> {
  return new Promise<{ id: number; name: string; age: number }>((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice', age: 30 });
    }, 1500);
  });
}

function getOrders(userId: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 101, product: 'Laptop', price: 999.99 },
        { orderId: 102, product: 'Phone', price: 499.99 },
      ]);
    }, 1500);
  });
}

async function displayUserOrders() {
  let user = await getUser2();
  let orders = await getOrders(user.id);

  console.log(`User: ${user.name}`);
  console.log('Orders:');
  orders.forEach((order) => {
    console.log(`- ${order.product}: $${order.price.toFixed(2)}`);
  });
}

displayUserOrders();

// This code defines two functions, getUser and getOrders, which simulate asynchronous operations using promises. The getUser function returns a promise that resolves to a user object after a delay, while the getOrders function returns a promise that resolves to an array of orders for a given user ID after a delay.
// The displayUserOrders function is an async function that uses await to call both getUser and getOrders in sequence. It first retrieves the user information and then uses the user's ID to fetch their orders. Finally, it logs the user's name and their orders to the console.
// This example demonstrates how to handle multiple asynchronous operations in a clean and readable way using async/await. By using await, we can write code that looks synchronous while still being non-blocking, making it easier to read and maintain when dealing with complex asynchronous workflows.
// In real-world applications, you would typically replace the setTimeout with actual asynchronous operations, such as fetching data from an API or querying a database, while still using
// promises or async/await to manage the flow of your code effectively. This approach helps to avoid callback hell and makes it easier to handle errors using try/catch blocks, improving the overall quality and maintainability of your code.
/* ------------------------------------------------------ */

async function getUsers() {
  try {
    let respone = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await respone.json();
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    // This block will execute regardless of success or failure of the fetch operation
    console.log('Fetch operation completed.');
  }
}
getUsers();

// This code defines an async function getUsers that fetches user data from a public API. It uses the fetch API to make an HTTP request to the specified URL, and then it awaits the response and parses it as JSON. The users are logged to the console if the fetch operation is successful. If there is an error during the fetch operation, it is caught and logged to the console. Finally, a message indicating that the fetch operation has completed is logged regardless of whether the operation was successful or not.
// This example demonstrates how to use async/await to handle asynchronous operations like fetching data from an API, while also incorporating error handling with try/catch and ensuring that certain code runs after the operation completes with finally. This approach helps to write cleaner and more maintainable code when dealing with asynchronous tasks in JavaScript.
// fetch returns a promise that resolves to the Response object representing the response to the request. The .json() method of the Response object also returns a promise that resolves to the parsed JSON data, allowing us to handle both operations asynchronously with async/await. This makes it easier to work with asynchronous code and manage the flow of data in a more readable way.
/* ------------------------------------------------------ */

async function getUserById(id: any) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    // This block will execute regardless of success or failure of the fetch operation
    console.log('Fetch operation completed.');
  }
}
getUserById(1);

// This code defines an async function getUserById that fetches user data for a specific user ID from a public API. It uses the fetch API to make an HTTP request to the specified URL, and then it checks if the response is successful (response.ok). If the response is not successful, it throws an error with the status code. If the response is successful, it parses the response as JSON and logs the user data to the console. If there is an error during the fetch operation, it is caught and logged to the console. Finally, a message indicating that the fetch operation has completed is logged regardless of whether the operation was successful or not.
// This example demonstrates how to handle asynchronous operations with error handling using async/await when fetching data from an API. By checking the response status and throwing an error for unsuccessful responses, we can ensure that our code handles different scenarios gracefully, improving the robustness of our application.
// In real-world applications, you would typically replace the hardcoded URL with a dynamic one based on user input or other factors, while still using async/await to manage the flow of your code effectively. This approach helps to write cleaner and more maintainable code when dealing with asynchronous tasks in JavaScript, especially when working with APIs and handling potential errors that may arise during network requests.
/* ------------------------------------------------------ */

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 101, name: 'Laptop', price: 999.99 }]);
    }, 1500);
  });
}

function getUsers2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'Alice' }]);
    }, 1500);
  });
}

async function loadData() {
  let [products, users] = await Promise.all([getProducts(), getUsers2()]);
  console.log('Products:', products);
  console.log('Users:', users);
}
loadData();

// This code defines two functions, getProducts and getUsers, which simulate asynchronous operations using promises. The getProducts function returns a promise that resolves to an array of products after a delay, while the getUsers function returns a promise that resolves to an array of users after a delay.
// The loadData function is an async function that uses Promise.all to execute both getProducts and getUsers concurrently. It waits for both promises to resolve and then logs the products and users to the console.
// This example demonstrates how to handle multiple asynchronous operations concurrently using Promise.all, which allows you to wait for all promises in an array to resolve before proceeding. This can improve performance by allowing multiple operations to run in parallel, rather than waiting for each one to complete sequentially.
// In real-world applications, you would typically replace the setTimeout with actual asynchronous operations, such as fetching data from an API or querying a database, while still using promises or async/await to manage the flow of your code effectively. This approach helps to avoid callback hell and makes it easier to handle errors using try/catch blocks, improving the overall quality and maintainability of your code.
// Using Promise.all is particularly useful when you have multiple independent asynchronous operations that can be executed in parallel, and you want to wait for all of them to complete before proceeding with further processing. It allows you to write cleaner and more efficient code when dealing with multiple asynchronous tasks in JavaScript.
/* ------------------------------------------------------ */

let first = new Promise((resolve) => {
  setTimeout(() => {
    resolve('First promise resolved');
  }, 1000);
});

let second = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Second promise resolved');
  }, 2000);
});

Promise.race([first, second])
  .then((message) => {
    console.log(message); // Output: First promise resolved (after 1 second)
  })
  .catch((error) => {
    console.error(error);
  });

// This code defines two promises, first and second, which resolve after different delays. The Promise.race method is used to execute both promises concurrently, and it resolves as soon as the first promise resolves. In this case, the first promise resolves after 1 second, so the message from the first promise will be logged to the console. If there were any errors during the execution of either promise, they would be caught and logged using the .catch() method.
// This example demonstrates how to use Promise.race to handle multiple asynchronous operations and proceed with the result of the first one that resolves. This can be useful in scenarios where you want to get a response as quickly as possible, such as fetching data from multiple sources and using the first response that arrives.
// In real-world applications, you might use Promise.race when you have multiple sources of data or multiple operations that can provide the same result, and you want to proceed with the first one that completes successfully. This approach can help to improve performance and responsiveness in your application by allowing you to work with the fastest available data or operation.
/* ------------------------------------------------------ */
