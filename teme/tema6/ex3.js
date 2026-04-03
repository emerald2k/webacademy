let text3 = document.querySelector('#text3');
let button3 = document.querySelector('#button3');

button3.addEventListener('click', function () {
  text3.innerHTML = `<h3>${text3.textContent}</h3>`;
});
