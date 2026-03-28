'use strict';

/**
 * Updates the calendar UI with the current system date.
 */
function updateCalendar() {
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

  // Select elements
  const monthEl = document.getElementById('month-name');
  const dayNameEl = document.getElementById('day-name');
  const dayNumEl = document.getElementById('day-number');
  const yearEl = document.getElementById('year');

  // Inject data
  if (monthEl) monthEl.textContent = months[now.getMonth()];
  if (dayNameEl) dayNameEl.textContent = days[now.getDay()];
  if (dayNumEl) dayNumEl.textContent = now.getDate();
  if (yearEl) yearEl.textContent = now.getFullYear();
}

// Run on load
document.addEventListener('DOMContentLoaded', updateCalendar);
