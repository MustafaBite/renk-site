const box = document.getElementById("box");
const btn = document.getElementById("btn");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
  box.style.backgroundColor = randomColor();
});
