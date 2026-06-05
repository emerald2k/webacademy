const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let deseneaza = false;

canvas.addEventListener('mousedown', function (e) {
  deseneaza = true;
  ctx.beginPath();
});

canvas.addEventListener('mouseup', function (e) {
  deseneaza = false;
});

canvas.addEventListener('mousemove', function (e) {
  if (!deseneaza) return;

  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';

  ctx.lineTo(x, y);
  ctx.stroke();
});

let x = 220;
let y = 120;
let marime = 50;
let viteza = 10;

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    y -= viteza;
  }

  if (event.key === 'ArrowDown') {
    y += viteza;
  }

  if (event.key === 'ArrowLeft') {
    x -= viteza;
  }

  if (event.key === 'ArrowRight') {
    x += viteza;
  }

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x + marime > canvas.width) x = canvas.width - marime;
  if (y + marime > canvas.height) y = canvas.height - marime;

  deseneazaPatrat();
});

function deseneazaPatrat() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'green';
  ctx.fillRect(x, y, marime, marime);
}

deseneazaPatrat();
