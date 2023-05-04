const inputEl = document.getElementById('input'),
  resultEl = document.getElementById('result'),
  errorEl = document.getElementById('error');

let errorTime, resultTime;

inputEl.addEventListener('input', convertPound);

function convertPound() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerHTML = 'please add a valid number!';
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      inputEl.value = '';
      resultEl.innerText = '';
      errorEl.innerText = '';
    }, 1000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(3);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      inputEl.value = '';
      resultEl.innerText = '';
      errorEl.innerText = '';
    }, 3000);
  }
}
