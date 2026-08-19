# 📚 WebAcademy — Complete Web Development Study Cheatsheet

Un ghid rapid de referință cu formule, tipare de cod și concepte cheie din întregul parcurs WebAcademy.

---

## 📑 Cuprins
1. [CSS Layouts & Animații (Phase 1)](#1-css-layouts--animații)
2. [Vanilla JavaScript & DOM (Phase 2)](#2-vanilla-javascript--dom)
3. [TypeScript & OOP (Phase 3)](#3-typescript--oop)
4. [HTML5 Canvas 2D (Phase 4)](#4-html5-canvas-2d)
5. [React 19 Foundations & Hooks (Phase 5)](#5-react-19-foundations--hooks)
6. [React Router v7 & Playwright (Phase 6)](#6-react-router-v7--playwright-testing)

---

## 1. CSS Layouts & Animații

### Flexbox Cheat Sheet
```css
.container {
  display: flex;
  flex-direction: row;          /* row | column | row-reverse */
  justify-content: space-between; /* flex-start | center | space-between | space-around */
  align-items: center;          /* stretch | center | flex-start | flex-end */
  gap: 16px;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 250px;              /* flex-grow | flex-shrink | flex-basis */
  align-self: flex-end;
}
```

### CSS Grid Fluid Pattern
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

### Keyframe Animations & 3D Transform
```css
@keyframes pulseGlow {
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(37, 99, 235, 0.4); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(37, 99, 235, 0.8); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(37, 99, 235, 0.4); }
}

.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.card-3d:hover {
  transform: rotateY(180deg);
}
```

---

## 2. Vanilla JavaScript & DOM

### DOM Manipulation & Events
```javascript
const btn = document.querySelector('#submit-btn');
const input = document.querySelector('#user-input');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const val = input.value.trim();
  if (!val) return;
  
  const item = document.createElement('li');
  item.textContent = val;
  item.classList.add('item-active');
  document.querySelector('#list').appendChild(item);
  input.value = '';
});
```

### Array Methods & Immutability
```javascript
const numbers = [1, 2, 3, 4, 5];

// Map (Transform)
const doubled = numbers.map(n => n * 2);

// Filter (Select)
const evens = numbers.filter(n => n % 2 === 0);

// Reduce (Aggregate)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Immutability in Array Updates
const added = [...numbers, 6];
const removed = numbers.filter(n => n !== 3);
const updated = numbers.map(n => n === 2 ? 20 : n);
```

### Async / Await & Fetch
```javascript
async function loadUserData(userId) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
}
```

---

## 3. TypeScript & OOP

### Generics, Interfaces & Type Aliases
```typescript
interface User<T = string> {
  id: number;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  metadata: T;
  createdAt?: Date; // Optional
}

type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  timestamp: number;
};

function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}
```

### ES6+ Classes & Encapsulation
```typescript
class BankAccount {
  private _balance: number;
  public readonly accountNumber: string;

  constructor(accountNumber: string, initialDeposit: number) {
    this.accountNumber = accountNumber;
    this._balance = initialDeposit;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error('Amount must be positive');
    this._balance += amount;
  }

  public get balance(): number {
    return this._balance;
  }
}
```

---

## 4. HTML5 Canvas 2D

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Clear frame
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw Rectangle
ctx.fillStyle = '#2563eb';
ctx.fillRect(50, 50, 150, 100);

// Draw Path / Circle
ctx.beginPath();
ctx.arc(300, 100, 40, 0, Math.PI * 2);
ctx.fillStyle = '#16a34a';
ctx.fill();
ctx.strokeStyle = '#065f46';
ctx.lineWidth = 3;
ctx.stroke();
```

---

## 5. React 19 Foundations & Hooks

### State & Controlled Inputs
```jsx
import { useState } from 'react';

export function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
    </div>
  );
}
```

### `useEffect` & `useCallback`
```jsx
import { useState, useEffect, useCallback } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup la unmount
  }, []);

  const reset = useCallback(() => {
    setSeconds(0);
  }, []);

  return <button onClick={reset}>Timp scurs: {seconds}s (Reset)</button>;
}
```

---

## 6. React Router v7 & Playwright Testing

### React Router v7 Data APIs
```jsx
import { createBrowserRouter, RouterProvider, useLoaderData, Form } from 'react-router-dom';

// 1. Loader (Fetch date înainte de randare)
export async function productsLoader() {
  const products = await fetchProductsFromAPI();
  return { products };
}

// 2. Action (Mutații de date)
export async function productAction({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await saveProduct(updates);
  return { ok: true };
}

// 3. Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
        loader: productsLoader,
        action: productAction,
      },
    ],
  },
]);
```

### Playwright E2E Test Suite
```javascript
import { test, expect } from '@playwright/test';

test('ar trebui să adauge un produs în coș și să actualizeze totalul', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Click buton adăugare
  await page.getByRole('button', { name: 'Adaugă' }).first().click();
  
  // Verificare contor coș
  await expect(page.getByText('Produse în coș: 1')).toBeVisible();
  
  // Verificare total
  await expect(page.getByText(/Total: \d+ lei/)).toBeVisible();
});
```
