const bigSquare = document.createElement("div");
bigSquare.className = "bigSquare";
document.body.append(bigSquare);

const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div"); //створює div*25
    square.classList.add("square"); //присвоює всім одинаковий клас
    square.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    bigSquare.append(square);
  }
};

const generateBlocksInterval = () => {
  setInterval(() => {
    bigSquare.innerHTML = "";
    generateBlocks();
  }, 1000);
};

generateBlocksInterval();
