const btnEl = document.getElementById('btn'),
  appEl = document.getElementById('app');

btnEl.addEventListener('click', addNote);

getNote().forEach((note) => {
  let noteEl = createNote(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

function addNote() {
  let notes = getNote();

  let noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: '',
  };

  let noteEl = createNote(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);
  notes.push(noteObj);

  saveNote(notes);
}

function createNote(id, content) {
  let element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Empty Note';
  element.value = content;

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  element.addEventListener('dblclick', () => {
    const warning = confirm('do you want to delete this note?');
    if (warning) {
      deleteNote(id, element);
    }
  });
  return element;
}

function updateNote(id, value) {
  let notes = getNote();
  let target = notes.filter((note) => note.id === id)[0];
  target.content = value;
  saveNote(notes);
}

function deleteNote(id, element) {
  const notes = getNote().filter((note) => note.id != id);
  saveNote(notes);
  appEl.removeChild(element);
}

function getNote() {
  return JSON.parse(localStorage.getItem('note')) || [];
}

function saveNote(note) {
  return localStorage.setItem('note', JSON.stringify(note));
}
