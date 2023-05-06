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

function updateProgressBar() {
  stepEl.forEach((item, index) => {
    if (index < currentChecked) {
      item.classList.add('checked');
      item.innerHTML = `<i class="fas fa-check"></i> <small>${
        index === 0
          ? 'Start'
          : index === item.length - 1
          ? 'Final'
          : 'Step' + index
      }</small>`;
    } else {
      item.classList.remove('checked');
    }
  });
}
