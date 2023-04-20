const startQuizEl = document.getElementById('start-quiz'),
  boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  exitBtnEl = document.getElementById('exitBtn'),
  continueBtnEl = document.getElementById('continueBtn'),
  boxThreeEl = document.getElementById('box-three'),
  boxFourEl = document.getElementById('box-four');

const quizQuestionEl = document.getElementById('quizQuestion'),
  nextQuizEl = document.getElementById('nextQuiz');

startQuizEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'block';
});

exitBtnEl.addEventListener('click', () => {
  boxTwoEl.style.display = 'none';
  boxOneEl.style.display = 'block';
});

continueBtnEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'none';
  boxThreeEl.style.display = 'block';
});

nextQuizEl.addEventListener('click', () => {
  incrementQuiz();
});

let currentQuestion = 0;

function incrementQuiz() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuizData(currentQuestion);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
  }
}

function showQuizData() {
  quizQuestionEl.innerHTML = `
  <h1>${quizData[currentQuestion].question}</h1>
    <ol>
      <li>${quizData[currentQuestion].options[0]}</li>
      <li>${quizData[currentQuestion].options[1]}</li>
      <li>${quizData[currentQuestion].options[2]}</li>
      <li>${quizData[currentQuestion].options[3]}</li>
    </ol>
  `;

  let addIcon = quizQuestionEl.querySelectorAll('li');
  addIcon.forEach((e) => {
    e.addEventListener('click', (e) => {
      console.log(e);
    });
  });
}

showQuizData();
