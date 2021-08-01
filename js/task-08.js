const input = document.querySelector("#controls input");
const box = document.querySelector("#boxes");
const createBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
    const amount = input.value;
    createBoxes(amount);
  }
  function random() {
    return Math.floor(Math.random() * 76);
  }

  
  let boxSize = 30;
  
  function createBoxes(amount) {
  
    for (let i = 0; i < amount; i += 1) {
      boxSize += 10;
      let div = document.createElement("div");
      div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${random()},${random()},${random()})`;
      boxes.append(div);
    }
  }

  function destroyBoxes() {
    box.innerHTML = "";
    boxSize = 30;
  }