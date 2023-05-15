const formEl = document.querySelector('.form'),
  inputEl = document.querySelector('.input'),
  ulEl = document.querySelector('.list');

let list = JSON.parse(localStorage.getItem('list')) || [];

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodoList();
});

function createTodoList() {
  let newTask = inputEl.value;

  let liEl = document.createElement('li');
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);

  inputEl.value = '';

  let checkBtnEl = document.createElement('div');
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkBtnEl);

  let deleteBtnEl = document.createElement('div');
  deleteBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(deleteBtnEl);

  checkBtnEl.addEventListener('click', () => {
    liEl.classList.toggle('checked');
    updateLocalStorage();
  });

  deleteBtnEl.addEventListener('click', () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  let liEls = document.querySelectorAll('li');
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains('checked'),
    });
  });
  localStorage.setItem('list', JSON.stringify(list));
}
