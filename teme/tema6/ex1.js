let text1 = document.querySelector('#text1');

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function () {
//   text1.innerHTML = 'Nu faceti click pe <b>buton</b>!.';
// });

function ex1() {
  text1.innerHTML = 'Nu faceti click pe <b>buton</b>!';
}

// append CSS style to #button in order to make it wider and bigger
document.querySelector('#button1').style.width = '200px';
document.querySelector('#button1').style.height = '40px';
