const celsiusEl = document.getElementById('celsius'),
  fahrenheitEl = document.getElementById('fahrenheit'),
  kelvinEl = document.getElementById('kelvin');

let celsiusValue, fahrenheitValue, kelvinValue;

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case 'celsius':
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      getClearValue(event.target.name);
      break;

    case 'fahrenheit':
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      getClearValue(event.target.name);
      break;

    case 'kelvin':
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      getClearValue(event.target.name);
      break;

    default:
      break;
  }
}

function getClearValue(value) {
  switch (value) {
    case 'celsius':
      clearTimeout(celsiusValue);
      celsiusValue = setTimeout(() => {
        kelvinEl.value = '';
        fahrenheitEl.value = '';
      }, 2000);
      break;

    case 'fahrenheit':
      clearTimeout(fahrenheitValue);
      fahrenheitValue = setTimeout(() => {
        celsiusEl.value = '';
        kelvinEl.value = '';
      }, 2000);
      break;

    case 'kelvin':
      clearTimeout(kelvinValue);
      kelvinValue = setTimeout(() => {
        celsiusEl.value = '';
        fahrenheitEl.value = '';
      }, 2000);
      break;
  }
}
