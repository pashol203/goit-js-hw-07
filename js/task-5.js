function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorButton = document.querySelector(`.change-color`);
const spanColor = document.querySelector(`.color`);

colorButton.addEventListener(`click`, () => {
  const changeColorNew = getRandomHexColor();
  document.body.style.backgroundColor = changeColorNew;
  spanColor.textContent = changeColorNew;
})