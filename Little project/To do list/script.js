const formEl = document.querySelector('.form'),
  inputEl = document.querySelector('.input'),
  ulEl = document.querySelector('.list');

let listArr = JSON.parse(localStorage.getItem('list'));

if (listArr) {
  listArr.forEach((list) => {
    createTodoList(list);
  });
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodoList();
});

function createTodoList(list) {
  let newTask = inputEl.value;

  if (list) {
    newTask = list.name;
  }

  let liEl = document.createElement('li');
  liEl.innerHTML = newTask;
  ulEl.appendChild(liEl);

  if (list && list.checked) {
    liEl.classList.add('checked');
  }

  inputEl.value = '';

  let checkIconEl = document.createElement('div');
  checkIconEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkIconEl);

  let trashIconEl = document.createElement('div');
  trashIconEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashIconEl);

  checkIconEl.addEventListener('click', () => {
    liEl.classList.toggle('checked');
    updateLocalStorage();
  });

  trashIconEl.addEventListener('click', () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  let listsEl = document.querySelectorAll('li');
  listArr = [];
  listsEl.forEach((element) => {
    listArr.push({
      name: element.innerText,
      checked: element.classList.contains('checked'),
    });
  });
  localStorage.setItem('list', JSON.stringify(listArr));
}
