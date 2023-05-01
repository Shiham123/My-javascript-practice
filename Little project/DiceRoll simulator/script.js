const diceEl = document.getElementById('dice'),
  rollDiceBtnEl = document.getElementById('roll-button'),
  resetDiceBtnEl = document.getElementById('reset-button'),
  rollHistoryEl = document.getElementById('roll-history');

let storeDiceHistory = [];

function getDiceRoll() {
  const rollDice = Math.floor(Math.random() * 6) + 1;
  const resultDice = getDiceResult(rollDice);
  diceEl.innerHTML = resultDice;
  storeDiceHistory.push(rollDice);
  showDiceHistory();
}

function showDiceHistory() {
  rollHistoryEl.innerHTML = '';
  for (let i = 0; i < storeDiceHistory.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll ${i + 1} <span>${getDiceResult(
      storeDiceHistory[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceResult(resultDice) {
  switch (resultDice) {
    case 1:
      return '&#9856';
    case 2:
      return '&#9857';
    case 3:
      return '&#9858';
    case 4:
      return '&#9859';
    case 5:
      return '&#9860';
    case 6:
      return '&#9861';
    default:
      return '';
  }
}

rollDiceBtnEl.addEventListener('click', () => {
  diceEl.classList.add('roll-animation');

  setTimeout(() => {
    diceEl.classList.remove('roll-animation');
    getDiceRoll();
  }, 1000);
});
