const inputEl = document.getElementById('input'),
  infoTextEl = document.getElementById('info-text'),
  meaningContainerEl = document.getElementById('meaning-container'),
  titleEl = document.getElementById('title'),
  meaningEl = document.getElementById('meaning'),
  audioEl = document.getElementById('audio');

inputEl.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    dictionaryCreate(event.target.value);
  }
});

async function dictionaryCreate(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      resultElement = await fetch(url).then((data) => data.json());

    if (resultElement.title) {
      console.log('find it');
    } else {
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error showing, try again later`;
  }
}

dictionaryCreate();
