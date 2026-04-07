// let test: string = 'Hello, TypeScript!';
// alert(test);

// let test: string = 'Hello, TypeScript!';
// test = true;
// console.log(test);

// let test1: number = 123;
// let test2: string = 'Hello, TypeScript!';
// alert(test1 + test2);

// let test1: number = +"123";
// let test2: number = +"456";
// alert(test1 + test2);

// let test:string = "1";
// test+=1;
// console.log(test);

// let arr: string[] = ['a', 'b', 'c'];
// let arr: Array<string> = ['a', 'b', 'c'];
// let arr: Array<string | number> = ['a', 'b', 'c', 1, 2, 3];
// let arr: (string | number)[] = ['a', 'b', 'c', 1, 2, 3];
// alert(arr[0]);

let user = {
  name: 'John',
  age: 30,
};

for (const element of Object.values(user)) {
  console.log(element);
}

for (let i: number = 0; i < 5; i++) {
  console.log(i);
}

let res = 0;
for (let i = 0; i < 100; i++) {
  res += i;
}
console.log(res);

let arr: number[] = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  console.log(key);
}

function func(a: number, b: number): number {
  return a + b;
}
function func2(a: number, b: number) {
  return a + b;
}
console.log(func(1, 2));
console.log(func2(1, 2));

function func3(test: string): void {
  alert(test);
}
func3('Hello, TypeScript!');

let test1: number = 123;
let test2: string = 'abc';
let test3: any;
test3 = test1;
console.log(test3);
test3 = test2;
console.log(test3);

let arrWithAny: any[] = [1, 'a', true, {}, []];
for (const element of arrWithAny) {
  console.log(element);
}

let test: string | number = 'Hello, TypeScript!';
console.log(test);
test = 123;
console.log(test);
// test = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
// console.log(test);

type mystring = string;
let test4: mystring = 'this is my string type';
console.log(test4);

type exe = string | number;
let test5: exe = 'Hello, TypeScript!';
console.log(test5);
test5 = 123;
console.log(test5);
