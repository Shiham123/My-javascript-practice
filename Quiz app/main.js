const boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  boxThreeEl = document.getElementById('box-three'),
  boxFourEl = document.getElementById('box-four');

const startQuizEl = document.getElementById('start-quiz'),
  exitBtnEl = document.getElementById('exitBtn'),
  continueBtnEl = document.getElementById('continueBtn'),
  nextQuizEl = document.getElementById('nextQuiz'),
  quitQuizEl = document.getElementById('quitQuiz');

const questionEl = document.getElementById('question'),
  optionEl = document.getElementById('option'),
  totalEl = document.getElementById('total');

let storeData = [];
let questionCount = 0;

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
  if (questionCount < quizData.length - 1) {
    questionCount++;
    showQuiz(questionCount);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
  }
});

function showQuiz(index) {
  questionEl.innerHTML = `<h1>${quizData[index].numb}. ${quizData[index].question}</h1>`;
  optionEl.innerHTML = `
  <option value="">${quizData[index].options[0]}</option>
  <option value="">${quizData[index].options[1]}</option>
  <option value="">${quizData[index].options[2]}</option>
  <option value="">${quizData[index].options[3]}</option>
  `;

  totalEl.innerHTML = `<p>${quizData[index].numb} of ${quizData.length}</p>`;
}

showQuiz(questionCount);
