const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(400, 200);
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5;
// ctx.stroke();

// draw a rectangle
// ctx.fillStyle = 'red'; // culoarea de umplere
// ctx.strokeStyle = 'black'; // culoarea conturului
// ctx.lineWidth = 5;
// ctx.fillRect(100, 80, 250, 120);

// // draw a circle
// ctx.beginPath();
// ctx.arc(250, 150, 50, 0, 2 * Math.PI);
// ctx.fillStyle = 'green'; // culoarea de umplere
// ctx.strokeStyle = 'black'; // culoarea conturului
// ctx.lineWidth = 5;
// ctx.fill();

// draw a triangle
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(120, 230);
ctx.lineTo(380, 230);
ctx.closePath(); // închide traseul pentru a forma un triunghi
ctx.fillStyle = 'yellow'; // culoarea de umplere
ctx.fill();
ctx.strokeStyle = 'black'; // culoarea conturului
ctx.lineWidth = 5;
ctx.stroke();

// draw a text
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Hello Canvas!', 150, 300); // textul, coordonata x, coordonata y

ctx.font = 'italic 20px Times New Roman';
ctx.fillStyle = 'orange';
ctx.fillText('Welcome to HTML5 Canvas', 100, 120);
ctx.fillStyle = 'red';
ctx.fillText('This is a red text', 100, 150);

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, canvas.width, canvas.height); // umple tot canvasul cu albastru
ctx.fillStyle = 'black';
ctx.font = 'bold 40px Arial';
ctx.fillText('Canvas Background', 50, 200);

// gradient
// const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); // creează un gradient liniar de la stânga la dreapta a canvasului
// gradient.addColorStop(0, 'red'); // adaugă culori la gradient
// gradient.addColorStop(0.5, 'yellow'); // adaugă culori la gradient
// gradient.addColorStop(1, 'green'); // adaugă culori la gradient
// ctx.fillStyle = gradient;
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = 'white';
// ctx.font = 'bold 40px Arial';
// ctx.fillText('Gradient Background', 50, 200);

// draw a house
// corpul casei
ctx.fillStyle = '#b45309'; // roșu semi-transparent
ctx.fillRect(150, 130, 200, 120);
// acoperiș
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(120, 130);
ctx.lineTo(380, 130);
ctx.closePath();
ctx.fillStyle = '#dc2626'; // roșu semi-transparent
ctx.fill();
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fillRect(50, 150, 200, 100);

// desenarea unor linii radiale
// const x = 250;
// const y = 150;
// const raza = 50;
// // desenăm 12 linii radiale, fiecare la un unghi de 30 de grade (360/12)
// for (let i = 0; i < 12; i++) {
//   const unghi = ((Math.PI * 2) / 12) * i;
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x + Math.cos(unghi) * 100, y + Math.sin(unghi) * 100);
//   ctx.strokeStyle = 'orange';
//   ctx.lineWidth = 3;
//   ctx.stroke();
// }
// // desenăm un cerc în centrul liniilor radiale
// ctx.beginPath();
// ctx.arc(x, y, raza, 0, Math.PI * 2);
// ctx.fillStyle = 'yellow';
// ctx.fill();

// Cap
ctx.beginPath();
ctx.arc(250, 150, 90, 0, Math.PI * 2);
ctx.fillStyle = '#fde68a';
ctx.fill();
ctx.stroke();

// Ochii s
ctx.beginPath();
ctx.arc(220, 125, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

// Ochii d
ctx.beginPath();
ctx.arc(280, 125, 10, 0, Math.PI * 2);
ctx.fill();

//Gura
ctx.beginPath();
ctx.arc(250, 160, 45, 0, Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.stroke();

// desenarea unor cercuri aleatorii
for (let i = 0; i < 20; i++) {
  // generăm coordonate și raze aleatorii pentru cercuri
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const raza = Math.random() * 30 + 10;

  ctx.beginPath();
  ctx.arc(x, y, raza, 0, Math.PI * 2);
  // generăm o culoare aleatorie pentru fiecare cerc
  ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random()})`;
  ctx.fill();
}

// desenarea unui grafic de bare
const valori = [80, 150, 120, 200, 170];
const culori = ['red', 'blue', 'green', 'orange', 'purple'];

for (let i = 0; i < valori.length; i++) {
  const latime = 50;
  const spatiu = 30;
  const x = 70 + i * (latime + spatiu); // coordonata x pentru fiecare bară
  const y = canvas.height - valori[i] - 30; // coordonata y pentru fiecare bară, ajustată pentru a lăsa spațiu în partea de jos

  ctx.fillStyle = culori[i]; // setăm culoarea pentru fiecare bară
  ctx.fillRect(x, y, latime, valori[i]); // desenăm bara pentru fiecare valoare

  ctx.fillStyle = 'black'; // culoarea textului pentru valorile de deasupra barelor
  ctx.fillText(valori[i], x + 10, y - 10); // afișăm valoarea deasupra fiecărei bare
}

ctx.beginPath();
for (let x = 0; x < canvas.width; x++) {
  const y = 150 + Math.sin(x * 0.05) * 50; // funcția sinusoidală pentru a crea o undă
  if (x === 0) {
    ctx.moveTo(x, y); // mutăm punctul de start la prima coordonată
  } else {
    ctx.lineTo(x, y); // desenăm linia către următoarea coordonată
  }
}
ctx.strokeStyle = 'cyan';
ctx.lineWidth = 4;
ctx.stroke();

// animație simplă: un pătrat care se mișcă de la stânga la dreapta
let x = 0;
// funcția de animație care va fi apelată în mod repetat pentru a crea efectul de mișcare
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // șterge tot canvasul pentru a crea efectul de animație
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(x, 120, 60, 60); // umple fundalul cu albastru deschis
  x += 3; // crește coordonata x pentru a mișca pătratul spre dreapta
  if (x > canvas.width) {
    x = -60; // resetează coordonata x pentru a repeta animația
  }
  requestAnimationFrame(animate); // solicită următorul frame pentru animație
}
animate(); // pornește animația

let x2 = 100;
let y2 = 150;
let vitezaX = 4;
let raza = 30;

function anima() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x2, y2, raza, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();

  x2 += vitezaX;

  if (x2 + raza > canvas.width || x2 - raza < 0) {
    vitezaX = -vitezaX;
  }

  requestAnimationFrame(anima);
}

anima();
