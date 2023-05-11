const monthEl = document.querySelector('.date > h1'),
  fullDateEl = document.querySelector('.date > p'),
  daysEl = document.querySelector('.days');

const monthIndex = new Date().getMonth(),
  lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0),
  firstDay = new Date(new Date().getFullYear(), monthIndex + 1, 1).getDay();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'August',
  'September',
  'October',
  'November',
  'December',
];
