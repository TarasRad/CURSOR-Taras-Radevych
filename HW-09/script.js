const bigSquare = document.createElement("div");
bigSquare.className = "bigSquare";
document.body.prepend(bigSquare);

const generateBlocks = () => {
  function randomSquare() {
    const randomColor = () => Math.floor(Math.random() * 256);
    return (
      "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
    );
  }

  for (let horizontal = 0; horizontal < 5; horizontal++) {
    for (let vertical = 0; vertical < 5; vertical++) {
      const Square = document.createElement("div");
      Square.classList.add("littleSquare");
      Square.style.backgroundColor = randomSquare();
      bigSquare.append(Square);
    }
  }
};
generateBlocks();

const generateBlocksInterval = () => {
  setInterval(() => {
    bigSquare.innerHTML = "";
    generateBlocks();
  }, 1000);
};
generateBlocksInterval();
