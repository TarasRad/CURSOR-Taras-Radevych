const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

function playSound(e) {
  const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
  const key = document.querySelector(`.key[id="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition() {
  keys.forEach((key) => {
    if (key.classList.contains("playing")) {
      key.classList.remove("playing");
    }
  });
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

keys.forEach((key) =>
  key.addEventListener("click", function () {
    removeTransition();
    const id = this.id;
    this.classList.add("playing");
    audios.forEach((audio) => {
      if (audio.id === id) {
        audio.currentTime = 0;
        audio.play();
      }
    });
  })
);

window.addEventListener("keydown", playSound);
