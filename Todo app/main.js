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
}

function showData() {
  tasksEl.innerHTML = '';
  storeData.map((task, index) => {
    let { text, email, date, desc } = task;
    return (tasksEl.innerHTML += `
    <div class="task" id="${index}">
    <p>Name : ${text}</p>
    <p>Email : ${email}</p>
    <p>Date : ${date}</p>
    <p>Description : ${desc}</p>
      <div class="icon">
        <i onclick="deleteTask(this)" class="fa-solid fa-trash-can"></i>
        <i onclick="editTask(this)" class="fa-solid fa-file-pen"></i>
      </div>
  </div>
    `);
  });
  resetForm();
}

function deleteTask(e) {
  e.parentElement.parentElement.remove();
}

function editTask(e) {}

function resetForm() {
  textEl.value = '';
  emailEl.value = '';
  dateEl.value = '';
  descEl.value = '';
}
