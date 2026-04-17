// Typescript Alias
/* type str = string;
let test: str = 'Hello World';
console.log(test);
 */

/* type stumber = string | number;
let test: stumber = 'Hello World';
console.log(test);
test = 42;
console.log(test); */

/* let str: 'Hello World' | 'Hello TypeScript';
str = 'Hello World';
console.log(str);
str = 'Hello TypeScript';
console.log(str);
str = 'eeeeee'; // Error: Type '"eeeeee"' is not assignable to type '"Hello World" | "Hello TypeScript"'. */

/* type message = 'Hello World' | 'Hello TypeScript';
let str2: message = 'Hello World';
console.log(str2);
str2 = 'Hello TypeScript';
console.log(str2);
str2 = 'eeeeee'; // Error: Type '"eeeeee"' is not assignable to type 'message'. */

/* type message = 'success' | 'error' | 'warning';
function logMessage(msg: message) {
  console.log(`[${msg.toUpperCase()}] - ${new Date().toLocaleTimeString()}`);
}
logMessage('success');
logMessage('error');
logMessage('warning');
// logMessage('info'); // Error: Argument of type '"info"' is not assignable to parameter of type 'message'.
 */

/* let user: [string, number] = ['Alice', 30];
let user2: [string, number] = ['Bob', 25, 'extra']; // Error: Type '[string, number, string]' is not assignable to type '[string, number]'. Source has 3 element(s) but target allows only 2.
console.log(user[0]);
console.log(user[1]);
 */

/* type stumber = string | number;
let user: [stumber] = [10];
user.push('Alice');
user.push(30);
user.push('hello');
user.push(10); */

/* let time: [number, number, number] = [12, 30, 45];
time[0] = 13;
time[1] = 45;
time[2] = 0;
console.log(time);
 */

/* let user: readonly [string, number] = ['Alice', 30];
// user[0] = 'Bob'; // Error: Cannot assign to '0' because it is a read-only property.
// user[1] = 25; // Error: Cannot assign to '1' because it is a read-only property.
console.log(user); */

/* let test: readonly string = 'Hello World';
// test = 'Hello TypeScript'; // Error: Cannot assign to 'test' because it is a read-only property.
console.log(test); */

/* const test: string = 'Hello World';
// test = 'Hello TypeScript'; // Error: Cannot assign to 'test' because it is a constant.
console.log(test); */

/* let date: [number, string, boolean?] = [2024, 'June'];
date.push(true);
console.log(date);
date = [2025, 'July', false];
console.log(date);
date = [2026, 'August'];
console.log(date);
date = [2027]; // Error: Type '[number]' is not assignable to type '[number, string, boolean?]'. Source has 1 element(s) but target requires 2.
 */

/* let user: [string, number] = ['Alice', 30];
let [name, age] = user; // Destructurare
console.log(name);
console.log(age);
let user2: [string, number] = ['Bob', 25];
let [name2, age2] = user2;
console.log(name2);
console.log(age2);
 */

// To avoid naming conflicts, we should avoid using these 4 reserved keywords as variable names:
// name, status, length, event

/* let tpl: [string, ...number[]] = ['Alice', 30, 25, 28];
console.log(tpl);
tpl = ['Bob', 22, 27, 'Alice']; // Error: Type 'string' is not assignable to type 'number'. */

/* let tpl: [string, ...number[]] = ['Alice'];
console.log(tpl);
tpl.push(30);
tpl.push(25);
tpl.push(28);
console.log(tpl);
 */

/* enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
}
console.log(Season.Winter); // 0
console.log(Season.Spring); // 1
console.log(Season.Summer); // 2
console.log(Season.Autumn); // 3

let s: Season = Season.Winter;
console.log(s); // 0
s = Season.Summer;
console.log(s); // 2

let s2: string = Season[1];
console.log(s2); // Spring
 */

/* enum Season {
  Winter = 'WINTER',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Autumn = 'AUTUMN',
}
for (let s in Season) {
  console.log(s); // WINTER, SPRING, SUMMER, AUTUMN
} */

/* enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
}
for (let s in Season) {
  console.log(s); // 0, 1, 2, 3, Winter, Spring, Summer, Autumn
}
let current: string = Season[7];
console.log(current); // Autumn
console.log(typeof current); // string
 */

/* enum Season {
  Winter = 1,
  Spring = 2,
  Summer = 3,
  Autumn = 4,
}
for (let s in Season) {
  console.log(s); // 1, 2, 3, 4, Winter, Spring, Summer, Autumn
} */

/* enum Season {
  Winter = 1,
  Spring,
  Summer,
  Autumn,
}
let current: Season = Season.Autumn;
console.log(current); // 4
for (let s in Season) {
  console.log(s); // 1, 2, 3, 4, Winter, Spring, Summer, Autumn
} */

/* enum Season {
  Winter = 'season 1',
  Spring = 'season 2',
  Summer = 'season 3',
  Autumn = 'season 4',
}
let current: Season = Season.Autumn;
console.log(current);
for (let s in Season) {
  console.log(s); // Winter, Spring, Summer, Autumn
} */

/* let date: Date;
date = new Date();
console.log(date);
date = new Date('2024-06-01');
console.log(date);
date = new Date(2030, 11, 310);
console.log(date); */

/* let currentDate: Date = new Date();
let futureDate: Date = new Date(2030, 11, 31);
console.log(currentDate);
console.log(futureDate); */
