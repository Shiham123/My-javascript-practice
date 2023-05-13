const inputEl = document.getElementById('input'),
  infoTextEl = document.getElementById('info-text'),
  meaningContainerEl = document.getElementById('meaning-container'),
  titleEl = document.getElementById('title'),
  meaningEl = document.getElementById('meaning'),
  audioEl = document.getElementById('audio');

inputEl.addEventListener('keyup', (event) => {
  if (event.target.value && event.key === 'Enter') {
    showDictionary(event.target.value);
  }
});

async function showDictionary(word) {
  try {
    meaningContainerEl.style.display = 'none';
    infoTextEl.style.display = 'block';
    infoTextEl.innerText = `Searching the meaning of ${word}`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      response = await fetch(url).then((data) => data.json());

    if (response.title) {
      meaningContainerEl.style.display = 'block';
      infoTextEl.style.display = 'none';
      titleEl.innerText = `${word}`;
      meaningEl.innerText = 'N/A';
      audioEl.style.display = 'none';
    } else {
      meaningContainerEl.style.display = 'block';
      infoTextEl.style.display = 'none';
      titleEl.innerText = response[0].word;
      meaningEl.innerText = response[0].meanings[0].definitions[0].definition;
      audioEl.style.display = 'inline-flex';
      audioEl.innerText = response[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error is pop-up, please refresh the page!`;
  }
}
