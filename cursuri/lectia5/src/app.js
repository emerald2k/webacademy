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

var lang = 'ru';
switch (lang) {
  case 'en':
    alert('Hello');
    break;
  case 'ru':
    alert('Privet');
    break;
  case 'ro':
    alert('Salut');
    break;
  default:
    alert('Unknown language');
    break;
}
