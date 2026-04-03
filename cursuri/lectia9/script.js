// var date = new Date();

/* console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear()); */

/* console.log(date.toLocaleString());
console.log(date.getDay()); */

/* var day = date.getDay();
var days = ['Duminica', 'Luni', 'Mar', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
console.log(days[day]); */

/* var date = new Date(2025, 10, 5, 12, 59, 59);
var day = date.getDay();
var days = ['Duminica', 'Luni', 'Mar', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
console.log(days[day]); */

/* var date = new Date(2025, 10, 5);
var day = date.getDay();
var days = ['Duminica', 'Luni', 'Mar', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
console.log(days[day]);
 */

/* var date = new Date();
console.log(date.getTime()); */

/* var date = new Date(2015, 12, 4, 23, 59, 59);
console.log(date.getTime()); */

/* var now = new Date();
var date = new Date(2015, 12, 4, 23, 59, 59);
var diff = now.getTime() - date.getTime();
console.log(diff);

console.log(Date.parse('2015-12-04T23:59:59')); */

/* 
var now = new Date();
var date = new Date(2015, 12, 4, 23, 59, 59);
var diff = now - date; // similar cu now.getTime() - date.getTime();
console.log(diff); 
*/

/* var month = 1;
var year = 2020;
var date = new Date(year, month + 1, 0);
console.log(date.getDate()); */

/* //var year = 2016;
var year = 2100;
var date = new Date(year, 2, 0);
if (date.getDate() == 29) {
  console.log('It is a leap year');
} else {
  console.log('It is not a leap year');
} */

/* var date = new Date();
date = addZero(date.getMonth() + 1);
date = date + '-' + addZero(date.getDate());

function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

if (date >= '03-21' && date <= '04-19') {
} else if (date >= '04-20' && date <= '05-20') {
}
 */

/* // cronometru cu timpul ramas pana la data 1 Jan 2027
var text = document.querySelector('#text');
setInterval(timer, 1000);

function timer() {
  var now = new Date();
  var target = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
  var diff = Math.ceil((target - now) / 1000);
  var days = extract(diff, 60 * 60 * 24);
  var hours = extract(diff, 60 * 60);
  var minutes = extract(hours.diff, 60);
  var seconds = extract(minutes.diff, 1);
  text.innerHTML =
    addZero(days.value) +
    ' days, ' +
    addZero(hours.value) +
    ' hours, ' +
    addZero(minutes.value) +
    ' minutes, ' +
    addZero(seconds.value) +
    ' seconds';
}

function extract(diff, formula) {
  var value = Math.floor(diff / formula);
  var diff = diff % formula;
  return { value: value, diff: diff };
}

function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}
 */

/* function checkDate(year, month, day) {
  let date = new Date(year, month - 1, day);
  if (
    date.getFullYear() == year &&
    date.getMonth() == month - 1 &&
    date.getDate() == day
  ) {
    return true;
  } else {
    return false;
  }
}

let date = new Date(2020, 0, 52);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(checkDate(2020, 1, 1));
 */

/* var date1 = '2020-12-01';
var date2 = '2022-12-01';

var date1 = new Date(date1);
var date2 = new Date(date2);

console.log(date1.getTime() - date2.getTime()); */

var date = new Date();
var now = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  0,
  0,
  0,
);
var secondsSinceMidnight = Math.floor((date.getTime() - now.getTime()) / 1000);
var hoursSinceMidnight = Math.floor(secondsSinceMidnight / 3600);
console.log(secondsSinceMidnight);
console.log(hoursSinceMidnight);
