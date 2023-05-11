const nextIconEl = document.querySelector('.next'),
  prevIconEl = document.querySelector('.prev'),
  imgEl = document.querySelectorAll('img'),
  imgContainerEl = document.querySelector('.image-container');

let currentImg = 0;
let timeOut;

nextIconEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

prevIconEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

updateImg()

function updateImg() {
  if (currentImg > imgEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEl.length;
  }

  imgContainerEl.style.transform = `translate(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 1000);
}
