const inputEl = document.getElementById('input'),
  infoTextEl = document.getElementById('info-text'),
  meaningContainerEl = document.getElementById('meaning-container'),
  titleEl = document.getElementById('title'),
  meaningEl = document.getElementById('meaning'),
  audioEl = document.getElementById('audio');

inputEl.addEventListener('keyup', (event) => {
  if (event.target.value && event.key === 'Enter') {
    dictionaryCreate(event.target.value);
  }
});

async function dictionaryCreate(word) {
  try {
    infoTextEl.style.display = 'block';
    meaningContainerEl.style.display = 'none';
    infoTextEl.innerText = `Searching the meaning of "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      resultElement = await fetch(url).then((data) => data.json());

    if (resultElement.title) {
      meaningContainerEl.style.display = 'block';
      infoTextEl.style.display = 'none';

      titleEl.innerText = word;
      meaningEl.innerText = 'N/A';
      audioEl.style.display = 'none';
    } else {
      meaningContainerEl.style.display = 'block';
      infoTextEl.style.display = 'none';

      titleEl.innerText = resultElement[0].word;
      meaningEl.innerText =
        resultElement[0].meanings[0].definitions[0].definition;
      audioEl.innerText = resultElement[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error showing, try again later`;
  }
}
