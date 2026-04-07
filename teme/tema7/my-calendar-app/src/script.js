'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader-wrapper');
  const card = document.getElementById('main-card');
  const clockContainer = document.getElementById('clock-container');

  // Update Calendar Date
  const updateCalendar = () => {
    const now = new Date();
    const months = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    document.getElementById('month-name').textContent = months[now.getMonth()];
    document.getElementById('day-name').textContent = days[now.getDay()];
    document.getElementById('day-number').textContent = now.getDate();
    document.getElementById('year').textContent = now.getFullYear();
  };

  // Update Clock Time
  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digital-clock').textContent =
      `${hours}:${minutes}:${seconds}`;
  };

  // Initialize
  updateCalendar();
  updateClock();

  // Set Intervals
  setInterval(updateClock, 1000); // Refresh clock every second
  setInterval(updateCalendar, 60 * 60 * 1000); // Refresh calendar every hour

  // Handle Reveal
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      card.style.display = 'block';
      clockContainer.style.display = 'block';
      loader.style.display = 'none';
    }, 1000);
  });
});
