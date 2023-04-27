const boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  boxThreeEl = document.getElementById('box-three'),
  boxFourEl = document.getElementById('box-four');

const startQuizBtnEl = document.getElementById('start-quiz'),
  exitBtnEl = document.getElementById('exitBtn'),
  continueBtnEl = document.getElementById('continueBtn'),
  nextQuizBtnEl = document.getElementById('nextQuiz'),
  quitQuizBtnEl = document.getElementById('quitQuiz');

const questionEl = document.getElementById('question'),
  optionEl = document.getElementById('option'),
  totalEl = document.getElementById('total');

let questionCount = 0;

startQuizBtnEl.addEventListener('click', () => {
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
  showQuiz(questionCount);
});

nextQuizBtnEl.addEventListener('click', () => {
  if (questionCount < quizData.length - 1) {
    questionCount++;
    showQuiz(questionCount);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
  }
});

quitQuizBtnEl.addEventListener('click', () => {
  location.reload();
});

function showQuiz(index) {
  questionEl.innerHTML = `<h1>${quizData[index].question}</h1>`;
  optionEl.innerHTML =
    `<div class="options">${quizData[index].options[0]}</div>` +
    `<div class="options">${quizData[index].options[1]}</div>` +
    `<div class="options">${quizData[index].options[2]}</div>` +
    `<div class="options">${quizData[index].options[3]}</div>`;
  totalEl.innerHTML = `<p>${quizData[index].numb} of ${quizData.length}</p>`;

  for (let i = 0; i < optionEl.children.length; i++) {
    optionEl.children[i].setAttribute('onclick', 'selectedOption(this)');
  }

  nextQuizBtnEl.style.display = 'none';
}

function selectedOption(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = quizData[questionCount].correct;

  let checkIcon = `<i class="fa-solid fa-check"></i>`,
    crossIcon = `<i class="fa-solid fa-times"></i>`;

  if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', checkIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < optionEl.children.length; i++) {
      if (optionEl.children[i].textContent === correctAnswer) {
        optionEl.children[i].insertAdjacentHTML('beforeend', checkIcon);
        optionEl.children[i].classList.add('correct');
      }
      optionEl.children[i].classList.add('disabled');
    }
  }
  nextQuizBtnEl.style.display = 'block';
}
