const ratingEl = document.querySelectorAll('.rating'),
  btnEl = document.getElementById('btn'),
  containerEl = document.getElementById('container');

let selectedRating = '';

ratingEl.forEach((rating) => {
  rating.addEventListener('click', (event) => {
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
    console.log(selectedRating);
  });
});

btnEl.addEventListener('click', () => {
  if (selectedRating !== '') {
    containerEl.innerHTML = `<strong>Thank you !</strong>
    <br>
    <br>
    <strong>FeedBack : ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});

function removeActive() {
  ratingEl.forEach((rating) => {
    rating.classList.remove('active');
  });
}
