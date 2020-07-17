let textBox = document.querySelector('.text-box');
let finalValue = document.querySelector('.text-counter');

function updateCount() {
  let carCount = textBox.value.length;
  finalValue.innerText = carCount;
}