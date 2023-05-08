const btnEl = document.getElementById('btn'),
  errorMsgEl = document.getElementById('errorMessage'),
  galleryEl = document.getElementById('gallery');

btnEl.addEventListener('click', fetchImg);

async function fetchImg() {
  const inputValue = document.getElementById('input').value;

  if (inputValue > 10 || inputValue < 1) {
    errorMsgEl.style.display = 'block';
    errorMsgEl.innerText = 'Number should be between 0 and 11';

    setTimeout(() => {
      errorMsgEl.style.display = 'none';
    }, 2000);

    return;
  }

  imgs = '';

  try {
    btnEl.style.display = 'none';
    const loading = `<img src="spninner.svg" />`;
    galleryEl.innerHTML = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
    ).then((response) =>
      response.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `<img src=${pic.urls.small} alt="image"/>`;
            galleryEl.style.display = 'block';
            galleryEl.innerHTML = imgs;
            btnEl.style.display = 'block';
            errorMsgEl.style.display = 'none';
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
    errorMsgEl.style.display = 'block';
    errorMsgEl.innerHTML = 'An error happened, try again later';
    btnEl.style.display = 'block';
    galleryEl.style.display = 'none';
  }
}
