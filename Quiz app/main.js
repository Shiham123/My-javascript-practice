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

const timeCountEl = document.getElementById('seconds'),
  timerLineEl = document.getElementById('timer-lines');

const resultEl = document.getElementById('result-content');

let questionCount = 0;
let timerCount;
let timerValue = 15;
let lineCounter;
let lineValue = 0;
let userScore = 0;

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

  startTimerLine(lineValue);
});

nextQuizEl.addEventListener('click', () => {
  if (questionCount < quizData.length - 1) {
    questionCount++;
    showQuiz(questionCount);

    clearInterval(timerCount);
    startTimer(timerValue);

    clearInterval(lineCounter);
    startTimerLine(lineValue);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
    showResult(userScore);
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
  clearInterval(lineCounter);
  clearInterval(timerCount);

  let userAnswer = answer.textContent;
  let correctAnswer = quizData[questionCount].correct;

  let checkIcon = `<i class="fa-solid fa-check"></i>`,
    crossIcon = `<i class="fa-solid fa-times"></i>`;

  if (userAnswer === correctAnswer) {
    userScore += 1;

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

  timerCount = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;

    if (timer < 0) {
      clearInterval(timerCount);
    }

    if (timer < 9) {
      timeCountEl.textContent = 0 + timeCountEl.textContent;
    }
  }, 1000);
}

function startTimerLine(line) {
  lineCounter = setInterval(() => {
    timerLineEl.style.width = line + 'px';
    line++;

    if (line > 500) {
      clearInterval(lineCounter);
    }
  }, 25);
}

function showResult() {
  if (userScore < 3) {
    resultEl.innerHTML = `<h3>Good but make it better, your result is ${userScore} out of ${quizData.length}</h3>`;
  } else if (userScore < 5) {
    resultEl.innerHTML = `<h3>Better take it up, your result is ${userScore} out of ${quizData.length}</h3>`;
  } else {
    resultEl.innerHTML = `<h3>Out of mind, your result is ${userScore} out of ${quizData.length}</h3>`;
  }
}
