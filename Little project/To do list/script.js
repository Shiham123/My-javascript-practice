const formEl = document.querySelector('.form'),
  inputEl = document.querySelector('.input'),
  ulEl = document.querySelector('.list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodoList();
});

function createTodoList() {
  let newTask = inputEl.value;

  let liEl = document.createElement('li');
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);

  let checkBtnEl = document.createElement('div');
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkBtnEl);

  let deleteBtnEl = document.createElement('div');
  deleteBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(deleteBtnEl);

  checkBtnEl.addEventListener('click', () => {
    liEl.classList.toggle('checked');
  });

  deleteBtnEl.addEventListener('click', () => {
    liEl.remove();
  });
}
