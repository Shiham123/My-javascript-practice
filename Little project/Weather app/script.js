const weatherDataEl = document.getElementById('weather-data'),
  cityInputEl = document.getElementById('city-input'),
  formEl = document.querySelector('form');

const apiKey = `46f80a02ecae410460d59960ded6e1c6`;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeather(cityValue);
});

async function getWeather(cityValue) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`,
    response = await fetch(url),
    data = await response.json();
}
