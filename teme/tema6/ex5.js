let pppp = document.querySelectorAll('#wrapper5 p');
let button5 = document.getElementById('button5');

button5.addEventListener('click', function () {
  for (let i = 0; i < pppp.length; i++) {
    pppp[i].innerHTML = 'Cu-cu!';
  }
});
