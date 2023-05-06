const nextBtnEl = document.getElementById('next'),
  prevBtnEl = document.getElementById('prev');

const progressEl = document.querySelector('.progress-bar-front'),
  stepEl = document.querySelectorAll('.step');

let currentChecked = 0;

nextBtnEl.addEventListener('click', () => {
  currentChecked++;
  if (currentChecked > stepEl.length) {
    currentChecked = stepEl.length;
  }

  updateProgressBar();
});

function updateProgressBar() {
  stepEl.forEach((item, index) => {
    console.log(item);
  });
}
