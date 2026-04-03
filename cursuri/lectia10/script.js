/* function start() {
  window.setInterval(timer, 1000);
}
function timer() {
  var elem = document.getElementById('test');
  elem.value = parseInt(elem.value) + 1;
} */

/* function start() {
  window.timerId = window.setInterval(timer, 1000);
}
function timer() {
  var elem = document.getElementById('test');
  elem.value = parseInt(elem.value) + 1;
}
function stop() {
  window.clearInterval(window.timerId);
  // window.timerId = null;
} */

/* function start() {
  window.setTimeout(func, 3000);
}
function func() {
  alert('!');
} */

/* function start() {
  var elem = document.getElementById('test');
  elem.value = parseInt(elem.value) + 1;
  window.timerId = window.setTimeout(start, 2);
} */

/* function timer() {
  var elem = document.getElementById('test');
  elem.value = parseInt(elem.value) + 1;

  if (elem.value < 10) {
    window.setTimeout(timer, 1000);
  }
} */

/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button-start');
button.addEventListener('click', start);

function start() {
  window.id = setInterval(() => {
    elem.innerHTML = parseInt(elem.innerHTML) + 1;
  }, 1000);

  this.removeEventListener('click', start);
  this.addEventListener('click', stop);

  this.innerHTML = 'Stop';
}

function stop() {
  clearInterval(window.id);

  this.removeEventListener('click', stop);
  this.addEventListener('click', start);
  this.innerHTML = 'Start';
} */

/* var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

var slider = document.querySelector('#slider');
var img = slider.querySelector('img');

var i = 1;
window.setInterval(function () {
  img.src = 'images/' + images[i];
  i++;
  if (i == images.length) {
    i = 0;
  }
}, 1000); */

function initSlider(texts, selector) {
  var parent = document.querySelector(selector);
  var elem = parent.querySelector('.elem');
  var prev = parent.querySelector('.prev');
  var next = parent.querySelector('.next');

  var i = 0;
  elem.innerHTML = texts[i];

  next.addEventListener('click', function () {
    i++;
    if (i == texts.length) {
      i = 0;
    }
    elem.innerHTML = texts[i];
  });
  prev.addEventListener('click', function () {
    i--;
    if (i < 0) {
      i = texts.length - 1;
    }
    elem.innerHTML = texts[i];
  });
}

initSlider(
  [
    'Lorem ipsum dolor sit amet.',
    '<script>() => {alert(1)}</script>',
    'Eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
  '#slider1',
);
initSlider(
  [
    'Lorem ipsum dolor sit amet.',
    'Consectetur adipisicing elit.',
    'Eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
  '#slider2',
);
