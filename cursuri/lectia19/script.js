async function main() {
  const response = await fetch('data.json');
  const user = await response.json();

  // fetch('data.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(JSON.stringify(data, null, 2));
  //   });

  console.log({ user });
}

// main();

async function main2() {
  const response = await fetch('data2.json');
  const fruits = await response.json();

  console.log(fruits[0]);
  console.log(fruits.length);
}

// main2();

// import { readFileSync } from 'fs';
// const data = readFileSync('data.json', 'utf-8');
// const fruits = JSON.parse(data);
// console.log(fruits[0]);
// console.log(fruits.length);

async function main3() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await fetch('data3.json');
  // const data = await response.text();
  // console.log(data);
  // const data = JSON.parse(data);
  // console.log(data.users[0].name);
  const data = await response.json();

  data.users.forEach((user) => {
    // forEach nu returneaza nimic, doar itereaza prin array
    console.log(user.name);
  });

  console.log(data.users[0].name);
  console.log(data.users[1].name);
  console.log(data.users[2].name);

  const user = data.users.find((user) => user.id === 3); // find returneaza primul element care indeplineste conditia
  // const user = data.users.find((user) => user.id === 4); // daca nu gaseste nimic, returneaza undefined
  // const user = data.users.find((user) => user.id === 1); // daca gaseste, returneaza obiectul
  if (user) {
    user.name = 'Catalin';
  }
  console.log(data.users[2].name);

  const sortedUsers = data.users.sort((a, b) => a.name.localeCompare(b.name)); // sortare alfabetica
  // const sortedUsers = data.users.sort((a, b) => a.name > b.name ? 1 : -1); // sortare alfabetica
  // const sortedUsers = data.users.sort((a, b) => a.name.length - b.name.length); // sortare dupa lungimea numelui
  // const sortedUsers = data.users.sort((a, b) => a.id - b.id); // sortare dupa id
  // const sortedUsers = data.users.sort((a, b) => b.id - a.id); // sortare descrescatoare dupa id
  console.log(sortedUsers.map((user) => user.name));

  console.log(typeof data);
  console.log(typeof data.users);

  const formattedData = JSON.stringify(data.users, null, 2);
  console.log(formattedData);

  localStorage.setItem('users', formattedData); // localStorage poate stoca doar stringuri, de aceea trebuie sa convertim obiectul in string
  // localStorage.setItem('users', data.users); // daca incercam sa stocam un obiect, va fi convertit automat in string "[object Object]"
  // localStorage.setItem('users', JSON.stringify(data.users)); // putem converti obiectul in string direct in momentul stocarii
  // localStorage.setItem('users', JSON.stringify(data)); // putem stoca intregul obiect, dar va fi mai greu de accesat ulterior
  const savedUsers = JSON.parse(localStorage.getItem('users'));
  console.log(savedUsers);
}

// main3();

async function main4() {
  const response = await fetch('./data5.json');
  const apiResponse = await response.json();

  if (apiResponse.status === 'success') {
    const availableProducts = apiResponse.data
      .filter((product) => product.stock > 0)
      .map((product) => ({
        name: product.name,
        finalPrice: product.price * 1.21,
      }));
    console.log(availableProducts);
  } else {
    console.error('Failed to fetch products');
  }
}

// main4();

async function main5() {
  const response = await fetch('./data6.json');
  const data = await response.json();

  const app = document.getElementById('app');

  if (!data || !data.currency) {
    console.error('Datele sau moneda lipsesc din fișierul JSON.');
    return;
  }

  const formatter = new Intl.NumberFormat('ro-RO', {
    // pentru formatarea numerelor in formatul specific Romaniei
    style: 'currency', // pentru a afisa simbolul monedei
    currency: data.currency, // pentru a specifica moneda, de exemplu "RON"
  });

  app.innerHTML = `
    <h2>${data.storeName}</h2>
    <p>TVA aplicat: ${data.vat * 100}%</p>
  `;

  data.orders.forEach(function (order) {
    const user = data.users.find(function (user) {
      return user.id === order.userId;
    });

    let orderTotalWithoutVat = 0;
    let productsHTML = '';

    order.items.forEach(function (item) {
      const product = data.products.find(function (product) {
        return product.id === item.productId;
      });

      if (!product) {
        productsHTML += `<li>Produs necunoscut</li>`;
        return;
      }

      const itemTotal = product.price * item.quantity;
      orderTotalWithoutVat += itemTotal;

      let stockMessage = '';

      if (product.stock === 0) {
        stockMessage = 'Indisponibil';
      } else if (product.stock < item.quantity) {
        stockMessage = 'Stoc insuficient';
      } else {
        stockMessage = 'Disponibil';
      }

      productsHTML += `
        <li>
          <strong>${product.name}</strong><br>
          Categorie: ${product.category}<br>
          Preț: ${formatter.format(product.price)}<br>
          Cantitate: ${item.quantity}<br>
          Total produs: ${formatter.format(itemTotal)}<br>
          Stoc: ${stockMessage}
        </li>
        <br>
      `;
    });

    const vatValue = orderTotalWithoutVat * data.vat;
    const orderTotalWithVat = orderTotalWithoutVat + vatValue;

    app.innerHTML += `
      <hr>
 
      <h3>Comanda #${order.id}</h3>
 
      <p>
        <strong>Client:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Status:</strong> ${order.status}
      </p>
 
      <h4>Produse comandate:</h4>
      <ul>
        ${productsHTML}
      </ul>
 
      <p>
        <strong>Total fără TVA:</strong> ${formatter.format(orderTotalWithoutVat)}<br>
        <strong>TVA:</strong> ${formatter.format(vatValue)}<br>
        <strong>Total cu TVA:</strong> ${formatter.format(orderTotalWithVat)}
      </p>
    `;
  });
}

main5();
