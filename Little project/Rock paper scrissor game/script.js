const btnEl = document.querySelectorAll('button'),
  resultEl = document.getElementById('result'),
  userScoreEl = document.getElementById('user-score'),
  computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

btnEl.forEach((btn) => {
  btn.addEventListener('click', () => {
    const result = playRound(btn.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomScore = Math.floor(Math.random() * choices.length);

  return choices[randomScore];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `it's a tie`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    userScoreEl.textContent = playerScore;
    return `You win ${playerSelection} and beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You loss ${computerSelection} beats ${playerSelection}`;
  }
}
