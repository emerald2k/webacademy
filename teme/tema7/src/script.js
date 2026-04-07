const lang = 'en-US';
let date = new Date();

let dayNumber = date.getDate();
let dayName = date.toLocaleString(lang, { weekday: 'long' });
let month = date.getMonth();
let monthName = date.toLocaleString(lang, { month: 'long' });
let year = date.getFullYear();

document.getElementById('month').textContent = monthName;
document.getElementById('dayName').textContent = dayName;
document.getElementById('dayNumber').textContent = dayNumber;
document.getElementById('year').textContent = year;
