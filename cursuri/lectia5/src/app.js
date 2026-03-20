// var name = 'Ion';
// alert('Salut, ' + name);

// var a = 3;
// document.write(a);
// document.write(a);
// document.write('<b>' + a + '</b>');
// console.log(a);
// console.log(a);

// alert(2 + 2);
// alert(5 - 1);
// alert(2 * 3);
// alert(6 / 2);

// var a, b;
// a = 'abcde';
// b = a[0];
// b = a[1];
// b = a[4];
// alert(a);
// alert(b);

// var a;
// alert(a);

// alert(3 * 'abc');

// var name = prompt('Cum te numesti?');
// alert('Salut, ' + name);

// var ok = confirm('Esti sigur ca vrei sa stergi acest fisier?');
// alert(ok);

// var arr = ['lu', 'ma', 'mi', 'jo', 'vi', 'sa', 'du'];
// alert(arr[2]);

// var obj = { 1: 'lu', 2: 'ma', 3: 'mi', 4: 'jo', 5: 'vi', 6: 'sa', 7: 'du' };
// alert(obj[3]);

// // prettier-ignore
// var obj2 = { 'name': 'Ion', 'age': 30, 'city': 'Chisinau' };
// alert(obj2.name);
// alert(obj2['age']);

// var obj3 = { name: 'Ion', age: 30, city: 'Chisinau' };
// alert(obj3.name);
// alert(obj3['age']);

// var a = 5;
// if (a > 0) {
//   alert('a este pozitiv');
// } else {
//   alert('a este negativ');
// }

// var a = 5;
// pretty-ignore
// if (a > 0) alert('a este pozitiv'); else alert('a este negativ');
// pretty-ignore
// if (a > 0) alert('a este pozitiv'); else { alert('a este negativ'); }
// pretty-ignore
// if (a > 0) {  alert('a este pozitiv');} else alert('a este negativ');

// var a = '0';
// if (a==0) alert('a este egal cu 0'); else alert('a nu este egal cu 0');
// if (a===0) alert('a este egal cu 0'); else alert('a nu este egal cu 0');

// var a = '0';
// if (a !=0) alert('a este diferit de 0'); else alert('a este egal cu 0');
// if (a !==0) alert('a este diferit de 0'); else alert('a este egal cu 0');

// var a = 3;
// var b = -3;
// if (a > 0 && b < 0) alert('Corect'); else alert('Incorect');

// var a = 3;
// if (a >= 1 && a <= 12) alert('Corect'); else alert('Incorect');

// var a=-3;
// var b=-3;
// if (a > 0 || b < 0) alert('Corect'); else alert('Incorect');

// var a = true;
// if (a == true) alert('a este adevarat'); else alert('a este fals');
// if (a) alert('a este adevarat'); else alert('a este fals');
// if (a == false) alert('a este fals'); else alert('a este adevarat');
// if (!a) alert('a este fals'); else alert('a este adevarat');

// var a;
// if (a === undefined) {
//   alert('a este undefined');
// } else {
//   if (a > 0) {
//     alert('a este pozitiv');
//   } else {
//     alert('a este negativ');
//   }
// }

// var lang = 'ru';
// switch (lang) {
//   case 'en':
//     alert('Hello');
//     break;
//   case 'ru':
//     alert('Privet');
//     break;
//   case 'ro':
//     alert('Salut');
//     break;
//   default:
//     alert('Unknown language');
//     break;
// }

// var i=0;
// while(i<5) {
//   i++;
//   alert(i);
// }

// for (var i=0; i<10; i++) {
//   alert(i);
// }

// for (var i = 0; i < 10; i++);
// alert(i);

// for (var i = 0, j = 2; i < 10; i++, j++, i = i + j) {
//   alert(i, j);
// }

// var arr = [];
// for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);

// var str = 'aaa@bbb@ccc';
// alert(str.replace('@', '!'));
// alert(str.replace(/@/g, '!'));

// var str = 'aaa bbb ccc';
// alert(str.substr(4, 3));
// alert(str.substring(4, 7));
// alert(str.slice(4, 7));

/*
var str = '2025-12-31';
var arr = str.split('-');
alert(arr);
*/

// var a = ['a', 'b', 'c'];
// var b = [1, 2, 3];

// var c = a.concat(b);
// alert(c);

// var c = b.concat(b);
// alert(c);

// var arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// alert(arr);

// var str = 'hello';
// str = str[0].toUpperCase() + str.substr(1);
// alert(str);

// var str = 'hello';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// var result = str.join('');
// alert(result);

// function func(param) {
//   if (param) return 'Corect!';
//   alert('Hello World!');
// }
// let message = func(true);
// alert(message); // Corect!
// func(false); // Hello World!

// var arr = ['a', 'b', 'c', 'd', 'c'];
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == 'c') {
//     flag = true;
//     break;
//   }
// }
// if (flag === true) {
//   alert('Este');
// } else {
//   alert('Nu');
// }

// for (var i = 1; i <= 9; i++) {
//   for (var j = 1; j <= 3; j++) {
//     document.write(i);
//   }
// }

// var str = '';
// for (var i = 0; i < 10; i++) {
//   str = str + 'x';
//   document.write(str + '<br>');
// }

// var str='';
// for (var i=1; i<=9; i++) {
//   str = str + i;
// }

// for (var i = 1; i <= 9; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(i);
//   }
//   document.write('<br>');
// }

// var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// var result = {};
// for (var key in obj) {
//   result[obj[key]] = key;
// }
// console.log({ result });

var arr = [12, 19, 28, 13, 14, 345];
var result = [];

for (var i = 0; i < 10; i++) {
  if (inRange(arr[i])) {
    result.push(arr[i]);
  }
}

console.log({ result });

function inRange(num) {
  var sum = arraySum(getDigits(num));
  return sum >= 1 && sum <= 9;
}

function getDigits(num) {
  return String(num).split('');
}

function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
