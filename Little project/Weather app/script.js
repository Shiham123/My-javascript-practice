const weatherDataEl = document.getElementById('weather-data'),
  cityInputEl = document.getElementById('city-input'),
  formEl = document.querySelector('form');

const apiKey = `46f80a02ecae410460d59960ded6e1c6`;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  // cityInputEl.value = '';

  getWeather(cityValue);
});

async function getWeather(cityValue) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`,
      response = await fetch(url),
      data = await response.json();

    const temperature = Math.round(data.main.temp),
      description = data.weather[0].description,
      icon = data.weather[0].icon,
      details = [
        `Feels like : ${Math.round(data.main.feels_like)}°C`,
        `Humidity : ${data.main.humidity}%`,
        `Wind speed : ${data.wind.speed} m/s`,
      ];

    weatherDataEl.querySelector(
      '.icon'
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon"/>`;

    weatherDataEl.querySelector(
      '.temperature'
    ).textContent = `${temperature}°C`;

    weatherDataEl.querySelector('.description').textContent = `${description}`;

    weatherDataEl.querySelector('.details').innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join('');
  } catch (error) {
    console.log(error);
    weatherDataEl.querySelector('.icon').innerHTML = '';
    weatherDataEl.querySelector('.temperature').textContent = '';
    weatherDataEl.querySelector('.description').textContent =
      'An error happened, please try again later';
    weatherDataEl.querySelector('.details').innerHTML = '';
  }
}
