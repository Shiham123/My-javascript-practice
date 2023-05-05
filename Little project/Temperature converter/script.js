const celsiusEl = document.getElementById('celsius'),
  fahrenheitEl = document.getElementById('fahrenheit'),
  kelvinEl = document.getElementById('kelvin');

function computeTemp(event) {
  const currentValue = Number(event.target.value);

  switch (event.target.name) {
    case 'celsius':
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      break;

    case 'fahrenheit':
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = (((currentValue + 459.67) * 5) / 9).toFixed(2);
      break;

    case 'kelvin':
      celsiusEl.value = (currentValue - 273.15).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 - 459.67).toFixed(2);
      break;

    default:
      break;
  }
}
