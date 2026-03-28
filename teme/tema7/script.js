'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader-wrapper');
  const card = document.getElementById('main-card');

  // 1. Calculate and set the date immediately
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

  updateCalendar();

  // 2. Simulate a slight delay (optional) or wait for image load
  // For production, we remove the loader once setup is done
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      card.style.display = 'block';

      // Clean up loader from DOM after fade out
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 800); // 800ms delay to ensure the smooth feel
  });
});
