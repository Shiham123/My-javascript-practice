const nextBtnEl = document.getElementById('next'),
  prevBtnEl = document.getElementById('prev');

const progressEl = document.querySelector('.progress-bar-front'),
  stepEl = document.querySelectorAll('.step');

let currentChecked = 1;

nextBtnEl.addEventListener('click', () => {
  currentChecked++;
  if (currentChecked > stepEl.length) {
    currentChecked = stepEl.length;
  }
  updateProgressBar();
});

prevBtnEl.addEventListener('click', () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateProgressBar();
});

function updateProgressBar() {
  stepEl.forEach((item, index) => {
    if (index < currentChecked) {
      item.classList.add('checked');
      item.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        index === 0
          ? 'Start'
          : index === stepEl.length - 1
          ? 'Final'
          : 'Step ' + index
      }</small>
      `;
    } else {
      item.classList.remove('checked');
      item.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  const checkNumber = document.querySelectorAll('.checked');

  progressEl.style.width =
    ((checkNumber.length - 1) / (stepEl.length - 1)) * 100 + '%';

  if (currentChecked === 1) {
    prevBtnEl.disabled = true;
  } else if (currentChecked === stepEl.length) {
    nextBtnEl.disabled = true;
  } else {
    prevBtnEl.disabled = false;
    nextBtnEl.disabled = false;
  }
}
