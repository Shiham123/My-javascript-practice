const boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  boxThreeEl = document.getElementById('box-three'),
  boxFourEl = document.getElementById('box-four');

const startQuizEl = document.getElementById('start-quiz'),
  exitBtnEl = document.getElementById('exitBtn'),
  continueBtnEl = document.getElementById('continueBtn'),
  nextQuizEl = document.getElementById('nextQuiz'),
  quitQuizEl = document.getElementById('quitQuiz');

startQuizEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'block';
});

exitBtnEl.addEventListener('click', () => {
  boxOneEl.style.display = 'block';
  boxTwoEl.style.display = 'none';
});

continueBtnEl.addEventListener('click', () => {
  boxTwoEl.style.display = 'none';
  boxThreeEl.style.display = 'block';
});

nextQuizEl.addEventListener('click', () => {
  boxThreeEl.style.display = 'none';
  boxFourEl.style.display = 'block';
});

quitQuizEl.addEventListener('click', () => {
  location.reload();
});
