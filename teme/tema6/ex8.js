let text8 = document.querySelector('#text8');
let result8 = document.querySelector('#result8');

text8.addEventListener('input', function () {
  let value = text8.value;
  result8.textContent = value;
});
