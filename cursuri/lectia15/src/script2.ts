type Product = {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  discount?: number;
};

type Customer = {
  readonly id: number;
  name: string;
  email: string;
  phone?: string;
  address: {
    city: string;
    street: string;
    number: number;
  };
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

type Order = {
  readonly id: number;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: Date;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Lenovo',
    price: 3500,
    category: 'Electronics',
    inStock: true,
    discount: 300,
  },

  {
    id: 2,
    name: 'Mouse Logitech',
    price: 150,
    category: 'Accessories',
    inStock: true,
  },

  {
    id: 3,
    name: 'Monitor Samsung',
    price: 900,
    category: 'Electronics',
    inStock: false,
    discount: 100,
  },

  {
    id: 4,
    name: 'Keyboard Redragon',
    price: 250,
    category: 'Accessories',
    inStock: true,
  },
];

const customer: Customer = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: {
    city: 'New York',
    street: '123 Main St',
    number: 456,
  },
};

const order: Order = {
  id: 1,
  customer: customer,
  items: [
    {
      product: products[0],
      quantity: 1,
    },
  ],
  status: 'pending',
  createdAt: new Date(),
};

function getProductFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price - product.discount;
  }
  return product.price;
}

function createOrder(
  id: number,
  customer: Customer,
  items: OrderItem[],
): Order {
  return {
    id,
    customer: customer,
    items: items,
    status: 'pending',
    createdAt: new Date(),
  };
}

function calculateOrderTotal(order: Order): number {
  let total = 0;

  for (const item of order.items) {
    total += getProductFinalPrice(item.product) * item.quantity;
  }
  return total;
}

function printOrderDetails(order: Order): void {
  console.log(`Order ID: ${order.id}`);
  console.log(`Customer: ${order.customer.name} (${order.customer.email})`);
  console.log(`Status: ${order.status}`);
  console.log(`Created At: ${order.createdAt.toLocaleString()}`);
  console.log('Items:');
  for (const item of order.items) {
    console.log(
      `- ${item.product.name} x${item.quantity} - $${getProductFinalPrice(
        item.product,
      ).toFixed(2)}`,
    );
  }
  console.log(`Total: $${calculateOrderTotal(order).toFixed(2)}`);
}

function updateOrderStatus(order: Order, status: OrderStatus): Order {
  return {
    ...order,
    status: status,
  };
}

function searchProductByName(
  products: Product[],
  name: string,
): Product | undefined {
  return products.find((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
}

const order = createOrder(1, customer, [
  {
    product: products[0],
    quantity: 1,
  },
  {
    product: products[1],
    quantity: 2,
  },
  {
    product: products[2],
    quantity: 1,
  },
]);

printOrderDetails(order);
const paidOrder = updateOrderStatus(order, 'paid');
console.log('Statusul comenzii după actualizare:', paidOrder.status);
const searchResult = searchProductByName(products, 'laptop');
if (searchResult) {
  console.log('Produs găsit:', searchResult.name);
} else {
  console.log('Produsul nu a fost găsit.');
}

function getProductProperty(
  product: Product,
  property: keyof Product,
): string | number | boolean {
  return product[property];
}

console.log(getProductProperty(products[0], 'name')); // "Laptop Lenovo"
console.log(getProductProperty(products[0], 'price'));
