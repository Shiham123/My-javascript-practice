const dayEl = document.getElementById('day'),
  hourEl = document.getElementById('hour'),
  minuteEl = document.getElementById('minute'),
  secondEl = document.getElementById('second');

const dynamicYear = new Date().getFullYear() + 1,
  newYearDate = new Date(dynamicYear, 0, 1);

function updateCountdown() {
  const presentDate = new Date().getTime(),
    gapDate = newYearDate - presentDate;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const days = Math.floor(gapDate / day),
    hours = Math.floor((gapDate % day) / hour),
    minutes = Math.floor((gapDate % hour) / minute),
    seconds = Math.floor((gapDate % minute) / second);

  dayEl.innerText = days;
  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
  setTimeout(updateCountdown, 1000);
}

updateCountdown();
