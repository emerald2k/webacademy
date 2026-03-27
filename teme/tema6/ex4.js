let button4 = document.querySelector('#button4');
let result4 = document.querySelector('#result4');

button4.addEventListener('click', function () {
  let operator1 = document.querySelector('input[name="operator1"]').value;
  let operator2 = document.querySelector('input[name="operator2"]').value;

  // evaluate operator1 and operator2 and set result
  result4.innerHTML = `<b>${Number(operator1) + Number(operator2)}</b>`;
});
