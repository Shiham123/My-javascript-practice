const startQuizEl = document.getElementById('start-quiz'),
  boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  exitBtnEl = document.getElementById('exitBtn');

startQuizEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'block';
});

exitBtnEl.addEventListener('click', () => {
  boxTwoEl.style.display = 'none';
  boxOneEl.style.display = 'block';
});
