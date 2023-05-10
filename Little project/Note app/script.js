const btnEl = document.getElementById('btn'),
  appEl = document.getElementById('app');

btnEl.addEventListener('click', addNote);

getNotes().forEach((note) => {
  const noteEl = createElement(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

function addNote() {
  const notes = getNotes();
  const randomNoteNumber = Math.floor(Math.random() * 10000);
  const noteObj = {
    id: randomNoteNumber,
    content: '',
  };
  const noteEl = createElement(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);
  saveNotes(notes);
}

function createElement(id, content) {
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Empty note';
  element.value = content;

  element.addEventListener('dblclick', () => {
    const warning = confirm('Do you want to delete this note?');
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return element;
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id === id)[0];
  target.content = content;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNotes(notes);
  appEl.removeChild(element);
}

function saveNotes(note) {
  localStorage.setItem('note', JSON.stringify(note));
}

function getNotes() {
  return JSON.parse(localStorage.getItem('note')) || [];
}
