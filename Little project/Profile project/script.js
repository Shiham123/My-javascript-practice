const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((counter) => {
  counter.innerHTML = '0';

  incrementCounter();

  function incrementCounter() {
    let counterNum = +counter.innerText;
    const dataCeil = counter.getAttribute('data-ceil');

    const increment = dataCeil / 15;
    counterNum = Math.ceil(counterNum + increment);

    if (counterNum <= dataCeil) {
      counter.innerText = counterNum;
      setTimeout(incrementCounter, 50);
    } else {
      counter.innerText = dataCeil;
    }
  }
});
