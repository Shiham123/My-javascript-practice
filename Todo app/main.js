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

const addButtonEl = document.getElementById('addTask');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

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
    addButtonEl.setAttribute('data-bs-dismiss', 'modal');
    addButtonEl.click();
  } else {
    console.log('nothing');
  }
}
