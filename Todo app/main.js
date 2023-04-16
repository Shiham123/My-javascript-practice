const formEl = document.getElementById('form'),
  textEl = document.getElementById('text'),
  emailEl = document.getElementById('email'),
  dateEl = document.getElementById('date'),
  descEl = document.getElementById('desc'),
  addTaskEl = document.getElementById('addTask');

const textMsgEl = document.getElementById('text-msg'),
  emailMsgEl = document.getElementById('email-msg'),
  dateMsgEl = document.getElementById('date-msg'),
  descMsgEl = document.getElementById('desc-msg');

const tasksEl = document.getElementById('tasks');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let storeData = [];

function formValidation() {
  textEl.value !== ''
    ? (textMsgEl.innerHTML = '')
    : (textMsgEl.innerHTML = 'Please add a input');

  emailEl.value !== ''
    ? (emailMsgEl.innerHTML = '')
    : (emailMsgEl.innerHTML = 'Please add your email');

  dateEl.value !== ''
    ? (dateMsgEl.innerHTML = '')
    : (dateMsgEl.innerHTML = 'Please add your date');

  descEl.value !== ''
    ? (descMsgEl.innerHTML = '')
    : (descMsgEl.innerHTML = 'Please add a short description');

  if (
    textEl.value !== '' &&
    emailEl.value !== '' &&
    dateEl.value !== '' &&
    descEl.value !== ''
  ) {
    acceptData();
    addTaskEl.setAttribute('data-bs-dismiss', 'modal');
    addTaskEl.click();
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
  console.log(storeData);
  createTask();
}

function createTask() {
  tasksEl.innerHTML = '';
  storeData.map((task, index) => {
    let { text, email, date, desc } = task;
    return (tasksEl.innerHTML += `
		<div class="task">
      <p>${text}</p>
      <p>${email}</p>
      <p>${date}</p>
      <p>${desc}</p>
      <div class="icon">
        <i class="fa-solid fa-trash-can"></i>
        <i class="fa-solid fa-file-pen"></i>
      </div>
    </div>
		`);
  });
  resetForm();
}

function resetForm() {
  textEl.value = '';
  emailEl.value = '';
  dateEl.value = '';
  descEl.value = '';
}
