const timerEl = document.getElementById('timer'),
  startBtnEl = document.getElementById('start'),
  stopBtnEl = document.getElementById('stop'),
  resetBtnEl = document.getElementById('reset');

startBtnEl.addEventListener('click', startTimer);

let startTime = 0,
  elapsedTime = 0;

let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
}

function formatTime() {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hour ? (hour > 9 ? hour : '0' + hour) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
    '.' +
    (milliseconds > 9 ? milliseconds : '0' + milliseconds)
  );
}
