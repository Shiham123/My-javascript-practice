const nextBtnEl = document.getElementById('next'),
  prevBtnEl = document.getElementById('prev');

const progressEl = document.querySelector('.progress-bar-front'),
  stepsEl = document.querySelectorAll('.step');

let currentNumber = 1;

nextBtnEl.addEventListener('click', () => {
  currentNumber++;
  if (currentNumber > stepsEl.length - 1) {
    currentNumber = stepsEl.length;
  }

  updateProgressBar();
});

prevBtnEl.addEventListener('click', () => {
  currentNumber--;
  if (currentNumber < 1) {
    currentNumber = 1;
  }

  updateProgressBar();
});

function updateProgressBar() {
  stepsEl.forEach((item, index) => {});
}
