window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);

    if(!audio || e.repeat) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    // console.log(`"${e.key.toUpperCase()}" key is working!`);
});

function rmTransition(e) {
    if(e.propertyName !== "transform") return; 
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", rmTransition);
});