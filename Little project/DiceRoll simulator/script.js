const diceEl = document.getElementById('dice'),
  rollBtnEl = document.getElementById('roll-button'),
  resetBtnEl = document.getElementById('reset-button'),
  rollHistoryEl = document.getElementById('roll-history');

let storeDice = [];

function getDiceRoll() {
  const rollDice = Math.floor(Math.random() * 6) + 1;
  const resultRoll = getDiceCode(rollDice);
  diceEl.innerHTML = resultRoll;
  storeDice.push(rollDice);
  showDice();
  localStorage.setItem('data', JSON.stringify(resultRoll));
}

function showDice() {
  rollHistoryEl.innerHTML = '';
  for (let i = 0; i < storeDice.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll : ${i + 1} <span>${getDiceCode(
      storeDice[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceCode(rollResult) {
  switch (rollResult) {
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

rollBtnEl.addEventListener('click', () => {
  diceEl.classList.add('roll-animation');

  setTimeout(() => {
    diceEl.classList.remove('roll-animation');
    getDiceRoll();
  }, 1000);
});
