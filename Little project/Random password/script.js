const btnEl = document.querySelector('.btn'),
  inputEl = document.getElementById('input'),
  copyIconEl = document.querySelector('.fa-copy'),
  alertEl = document.querySelector('.alert-container');

btnEl.addEventListener('click', createPassword);

copyIconEl.addEventListener('click', () => {
  copyPassword();
  if (inputEl.value) {
    alertEl.classList.remove('active');
    setTimeout(() => {
      alertEl.classList.add('active');
    }, 3000);
  }
});

function createPassword() {
  const chars =
      '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZs',
    passwordLength = 15;

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    inputEl.value = password;
  }
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
