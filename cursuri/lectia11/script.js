/* var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
  elems[i].onclick = func;
}
 */
// function func() {
//   var id = this.id;
//   var value = this.value;
//   alert('Ai apasat butonul cu id-ul ' + id + ' si valoarea ' + value);
// }

/* function func(event) {
  var id = event.target.id;
  var value = event.target.value;
  alert('Ai apasat butonul cu id-ul ' + id + ' si valoarea ' + value);
}
 */
/* var elem = document.getElementById('test');
elem.onclick = func3;
function func3() {
  func1();
  func2();
}
function func1() {
  alert('Func1');
}
function func2() {
  alert('Func2');
}
*/

var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);

function func1() {
  alert('Func1');
}
function func2() {
  alert('Func2');
}

elem.removeEventListener('click', func1);

var elems = document.querySelectorAll('input');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', func);
}
function func(event) {
  this.removeEventListener('click', func);
  alert('Ai apasat butonul cu id-ul ' + this.id + ' si valoarea ' + this.value);
}
