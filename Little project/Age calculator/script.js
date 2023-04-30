const btnEl = document.getElementById('btn'),
  birthdayInputEl = document.getElementById('birthday'),
  resultEl = document.getElementById('result');

btnEl.addEventListener('click', showBirthDay);

function showBirthDay() {
  let birthdayValue = birthdayInputEl.value;

  if (birthdayValue === '') {
    showInvalidDate();
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerHTML = `Your age is ${age} years old`;
  }
}

function getAge(value) {
  let currentDate = new Date(),
    birthdayDate = new Date(value);

  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    year--;
  }
  return year;
}

function showInvalidDate() {
  resultEl.innerText = 'Please add a birthday';
  resultEl.style.color = 'red';

  setTimeout(() => {
    resultEl.innerText = 'Input a valid date';
    resultEl.style.color = 'black';
  }, 2000);
}
