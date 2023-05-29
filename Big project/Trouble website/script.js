const navItemOneEl = document.querySelector('.nav-item-one'),
  navItemTwoEl = document.querySelector('.nav-item-two'),
  navItemThreeEl = document.querySelector('.nav-item-three'),
  navItemFourEl = document.querySelector('.nav-item-four');

const itemOneEl = document.querySelector('.item-one'),
  itemTwoEl = document.querySelector('.item-two'),
  itemThreeEl = document.querySelector('.item-three'),
  itemFourEl = document.querySelector('.item-four');

navItemOneEl.addEventListener('click', () => {
  itemOneEl.classList.toggle('active');
});

navItemTwoEl.addEventListener('click', () => {
  itemTwoEl.classList.toggle('active');
});

navItemThreeEl.addEventListener('click', () => {
  itemThreeEl.classList.toggle('active');
});

navItemFourEl.addEventListener('click', () => {
  itemFourEl.classList.toggle('active');
});

// ?------------------------------------------------------------
// ?------------------------------------------------------------
// ?------------------------------------------------------------

const submitBtnEl = document.getElementById('submit-btn'),
  destinationInputEl = document.getElementById('destination-input'),
  locationInputEl = document.getElementById('location-input'),
  personInputEl = document.getElementById('person-input');

let storeData = [];

function updateLocalStorage() {
  let destinationValue = destinationInputEl.value,
    locationValue = locationInputEl.value,
    personValue = personInputEl.value;

  storeData.push({
    name: destinationValue,
    city: locationValue,
    person: personValue,
  });
  localStorage.setItem('data', JSON.stringify(storeData));
}

submitBtnEl.addEventListener('click', (element) => {
  updateLocalStorage();
  destinationInputEl.value = '';
  locationInputEl.value = '';
  personInputEl.value = '';
});

// ?------------------------------------------------------------
// ?------------------------------------------------------------
// ?------------------------------------------------------------

const aboutSliderEl = document.querySelector('.about-slider'),
  itemEl = document.querySelectorAll('.item'),
  leftIconEl = document.querySelector('#left-arrow'),
  rightIconEl = document.querySelector('#right-arrow');

let count = 0;

leftIconEl.addEventListener('click', () => {
  count++;
  updateSlider();
});

rightIconEl.addEventListener('click', () => {
  count--;
  updateSlider();
});

function updateSlider() {
  aboutSliderEl.style.transform = `translateX(${count * 300}px)`;
}
