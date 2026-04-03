let button6 = document.getElementById('button6');
let p6 = document.getElementById('p6');
let CLASS_NAME = 'myclass';
p6.className = CLASS_NAME;

// button6.addEventListener('click', function () {
//   let p6 = document.querySelector(`.${CLASS_NAME}`);
//   alert(p6.className);
// });

function displayClass(node) {
  let className = node.className;
  alert(className);
}
