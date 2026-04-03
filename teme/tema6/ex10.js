let button10 = document.querySelector('#button10');
let p10 = document.querySelector('#p10');

button10.addEventListener('click', function () {
  p10.textContent = 'Textul a fost schimbat!';
  p10.style.color = 'red';
  // button10 should be disabled after click
  button10.disabled = true;
  button10.textContent = 'Butonul a fost dezactivat!';
});
