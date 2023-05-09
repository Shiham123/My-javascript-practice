const btnEl = document.getElementById('btn'),
  galleryEl = document.getElementById('gallery'),
  errorMsgEl = document.getElementById('errorMessage');

btnEl.addEventListener('click', fetchImg);
let images = '';

async function fetchImg() {
  const inputValue = document.getElementById('input').value;

  btnEl.style.display = 'none';
  const loading = `<img src="spninner.svg"/>`;
  galleryEl.innerHTML = loading;
  await fetch(
    `https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=JNbOVAmulJcbmC1Rr9cTAGiCE6qzbgq4zZh_zextlh0`
  ).then((response) =>
    response.json().then((data) => {
      if (data) {
        data.forEach((pic) => {
          images = `<img src=${pic.urls.small}/>`;
          galleryEl.style.display = 'block';
          galleryEl.innerHTML = images;
          btnEl.style.display = 'block';
          errorMsgEl.style.display = 'none';
        });
      }
    })
  );
}
