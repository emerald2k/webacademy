class Product {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public stock: number,
  ) {}

  getInfo(): string {
    return `${this.name} - ${this.price} lei`;
  }

  isAvailable(): boolean {
    return this.stock > 0;
  }
}

class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  getTotal(): number {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  private items: CartItem[] = [];

  addProduct(product: Product, quantity: number): void {
    if (!product.isAvailable()) {
      console.log(`Produsul ${product.name} nu este în stoc.`);
      return;
    }

    if (quantity > product.stock) {
      console.log(`Stoc insuficient pentru ${product.name}.`);
      return;
    }

    const existingItem = this.items.find(
      (item) => item.product.id === product.id,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }

    product.stock -= quantity;

    console.log(`${quantity} x ${product.name} adăugat în coș.`);
  }

  removeProduct(productId: number): void {
    const itemIndex = this.items.findIndex(
      (item) => item.product.id === productId,
    );

    if (itemIndex === -1) {
      console.log('Produsul nu există în coș.');
      return;
    }

    const item = this.items[itemIndex];

    item.product.stock += item.quantity;

    this.items.splice(itemIndex, 1);

    console.log(`${item.product.name} a fost eliminat din coș.`);
  }

  getTotal(): number {
    let total = 0;

    for (const item of this.items) {
      total += item.getTotal();
    }

    return total;
  }

  printCart(): void {
    console.log('===== COȘ DE CUMPĂRĂTURI =====');

    if (this.items.length === 0) {
      console.log('Coșul este gol.');
      return;
    }

    for (const item of this.items) {
      console.log(
        `${item.product.name} x ${item.quantity} = ${item.getTotal()} lei`,
      );
    }

    console.log(`Total: ${this.getTotal()} lei`);
  }
}

const laptop = new Product(1, 'Laptop Lenovo', 3500, 5);
const mouse = new Product(2, 'Mouse Logitech', 150, 10);
const keyboard = new Product(3, 'Tastatură Redragon', 250, 3);

const cart = new ShoppingCart();

cart.addProduct(laptop, 1);
cart.addProduct(mouse, 2);
cart.addProduct(keyboard, 1);

cart.printCart();

cart.removeProduct(2);

cart.printCart();

console.log('Stoc laptop:', laptop.stock);
console.log('Stoc mouse:', mouse.stock);
console.log('Stoc tastatură:', keyboard.stock);
