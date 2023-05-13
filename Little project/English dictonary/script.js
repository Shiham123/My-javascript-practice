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
    infoTextEl.innerText = `Searching the meaning of '${word}'`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      response = await fetch(url).then((data) => data.json());

    if (response.title) {
      infoTextEl.style.display = 'none';
      meaningContainerEl.style.display = 'block';

      titleEl.innerText = response.title;
      meaningEl.innerText = 'N/A';
    } else {
      infoTextEl.style.display = 'none';
      meaningContainerEl.style.display = 'block';

      titleEl.innerText = response[0].word;
      meaningEl.innerText = response[0].meanings[0].definitions[0].definition;
    }
  } catch (error) {
    console.log(error);
    meaningContainerEl.style.display = 'none';

    infoTextEl.style.display = 'block';
    infoTextEl.innerText = `An error show up, please refresh the page!`;
  }
}
