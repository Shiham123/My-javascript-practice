const inputEl = document.getElementById('input'),
  resultEl = document.getElementById('result'),
  errorEl = document.getElementById('error');

const inputKilogramsEl = document.getElementById('inputKilograms'),
  poundsEl = document.getElementById('pounds'),
  weightEl = document.getElementById('weight');

let errorTime, resultTime;
let errorTimeKG, resultTimeKg;

inputEl.addEventListener('input', convertPound);
inputKilogramsEl.addEventListener('input', convertKilograms);

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

function convertKilograms() {
  if (inputKilogramsEl.value <= 0 || isNaN(inputKilogramsEl.value)) {
    errorEl.innerHTML = 'Please add a valid number!';
    clearTimeout(errorTimeKG);
    errorTimeKG = setTimeout(() => {
      inputKilogramsEl.value = '';
      resultEl.innerText = '';
      errorEl.innerText = '';
    }, 1000);
  } else {
    resultEl.innerText = (+inputKilogramsEl.value * 2.20462).toFixed(3);
    clearTimeout(resultTimeKg);
    resultTimeKg = setTimeout(() => {
      inputKilogramsEl.value = '';
      resultEl.innerText = '';
      errorEl.innerText = '';
    }, 3000);
  }
}
