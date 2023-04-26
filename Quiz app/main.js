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

const timeCountEl = document.querySelector('.time-count .seconds'),
  timerLineEl = document.getElementById('timer-lines');

let storeData = [];
let questionCount = 0;
let timerCounter;
let timerValue = 15;
let lineCounter;
let lineValue = 0;

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

  showQuiz(questionCount);
  startTimer(timerValue);

  clearInterval(lineCounter);
  startTimerLine(lineValue);
});

nextQuizEl.addEventListener('click', () => {
  if (questionCount < quizData.length - 1) {
    questionCount++;
    showQuiz(questionCount);

    clearInterval(timerCounter);
    startTimer(timerValue);

    clearInterval(lineCounter);
    startTimerLine(lineValue);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
  }
});

quitQuizEl.addEventListener('click', () => {
  location.reload();
});

function showQuiz(index) {
  questionEl.innerHTML = `<h1>${quizData[index].numb}. ${quizData[index].question}</h1>`;
  optionEl.innerHTML =
    `<div class="options">${quizData[index].options[0]}</div>` +
    `<div class="options">${quizData[index].options[1]}</div>` +
    `<div class="options">${quizData[index].options[2]}</div>` +
    `<div class="options">${quizData[index].options[3]}</div>`;
  totalEl.innerHTML = `<p>${quizData[index].numb} of ${quizData.length} Question</p>`;

  for (let i = 0; i < optionEl.children.length; i++) {
    optionEl.children[i].setAttribute('onclick', 'selectedOption(this)');
  }
}

function selectedOption(answer) {
  clearInterval(timerCounter);
  clearInterval(lineCounter);

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
        optionEl.children[i].classList.add('correct');
        optionEl.children[i].insertAdjacentHTML('beforeend', checkIcon);
      }
    }
  }

  for (let i = 0; i < optionEl.children.length; i++) {
    optionEl.children[i].classList.add('disabled');
  }

  nextQuizEl.style.display = 'block';
}

function startTimer(timer) {
  timeCountEl.textContent = timer;

  timerCounter = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;

    if (timer < 0) {
      timeCountEl.textContent = 0;
    }

    if (timer < 9) {
      let addZero = timeCountEl.textContent;
      timeCountEl.textContent = 0 + addZero;
    }
  }, 1000);
}

function startTimerLine(timerLine) {
  lineCounter = setInterval(() => {
    timerLine += 1;
    timerLineEl.style.width = timerLine + 'px';

    if (timerLine > 500) {
      clearInterval(lineCounter);
    }
  }, 30);
}
