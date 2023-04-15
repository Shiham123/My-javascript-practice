const addTaskEl = document.getElementById('add-task'),
  formEl = document.getElementById('form');

const textEl = document.getElementById('text'),
  emailEl = document.getElementById('email'),
  dateEl = document.getElementById('date'),
  descEl = document.getElementById('desc');

const textMsgEl = document.getElementById('text-msg'),
  emailMsgEl = document.getElementById('email-msg'),
  dateMsgEl = document.getElementById('date-msg'),
  descMsgEl = document.getElementById('desc-msg');

const addButtonEl = document.getElementById('addTask'),
  tasksEl = document.getElementById('tasks');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let storeData = [];

function formValidation() {
  textEl.value !== ''
    ? (textMsgEl.innerHTML = '')
    : (textMsgEl.innerHTML = 'Please add a text');

  emailEl.value !== ''
    ? (emailMsgEl.innerHTML = '')
    : (emailMsgEl.innerHTML = 'Please add a email');

  dateEl.value !== ''
    ? (dateMsgEl.innerHTML = '')
    : (dateMsgEl.innerHTML = 'Please add a date');

  descEl.value !== ''
    ? (descMsgEl.innerHTML = '')
    : (descMsgEl.innerHTML = 'Please add a description');

  if (
    textEl.value !== '' &&
    emailEl.value !== '' &&
    dateEl.value !== '' &&
    descEl.value !== ''
  ) {
    acceptData();
    addButtonEl.setAttribute('data-bs-dismiss', 'modal');
    addButtonEl.click();

    (() => {
      addButtonEl.setAttribute('data-bs-dismiss', '');
    })();
  } else {
    console.log('nothing');
  }
}

function acceptData() {
  storeData.push({
    text: textEl.value,
    email: emailEl.value,
    date: dateEl.value,
    desc: descEl.value,
  });
  showData();
  localStorage.setItem('data', JSON.stringify(storeData));
}

function showData() {
  tasksEl.innerHTML = '';
  storeData.map((task, index) => {
    let { text, email, date, desc } = task;
    return (tasksEl.innerHTML += `
    <div class="task" id="${index}">
    <p>${text}</p>
    <p>${email}</p>
    <p>${date}</p>
    <p>${desc}</p>
      <div class="icon">
        <i onclick="deleteTask(this); showData()"  class="fa-solid fa-trash-can"></i>
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-file-pen"></i>
      </div>
  </div>
    `);
  });
  resetForm();
}

function deleteTask(e) {
  e.parentElement.parentElement.remove();
  storeData.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem('data', JSON.stringify(storeData));
}

function editTask(e) {
  let selectedTask = e.parentElement.parentElement;

  textEl.value = selectedTask.children[0].innerHTML;
  emailEl.value = selectedTask.children[1].innerHTML;
  dateEl.value = selectedTask.children[2].innerHTML;
  descEl.value = selectedTask.children[3].innerHTML;

  deleteTask(e);
}

function resetForm() {
  textEl.value = '';
  emailEl.value = '';
  dateEl.value = '';
  descEl.value = '';
}

(() => {
  storeData = JSON.parse(localStorage.getItem('data')) || [];
  showData();
})();
