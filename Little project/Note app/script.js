const btnEl = document.getElementById('btn'),
  appEl = document.getElementById('app');

btnEl.addEventListener('click', addNote);

function addNote() {
  const randomNoteNumber = Math.floor(Math.random() * 10000);
  const noteObj = {
    id: randomNoteNumber,
    content: '',
  };
  const noteEl = createElement(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);
}

function createElement(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Empty note';
  element.value = content;
  return element;
}
