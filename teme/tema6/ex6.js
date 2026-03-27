let button6 = document.getElementById('button6');
let p = document.getElementById('p6');
let CLASS_NAME = 'myclass';
p.className = CLASS_NAME;

button6.addEventListener('click', function () {
  let p = document.querySelector(`.${CLASS_NAME}`);
  alert(p.className);
});
