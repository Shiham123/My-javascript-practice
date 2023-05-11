const formEl = document.querySelector('form'),
  searchInputEl = document.getElementById('search-input'),
  searchResultEl = document.querySelector('.search-results'),
  showMoreButtonEl = document.getElementById('show-more-button');

const accessKey = `RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  searchImages();
});

let inputData = '',
  page = 1;

async function searchImages() {
  inputData = searchInputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`,
    response = await fetch(url),
    data = await response.json(),
    resultData = data.results;

  console.log(resultData);

  resultData.map((result) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('search-result');

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultEl.appendChild(imageWrapper);
  });
}
