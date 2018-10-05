// --------------------- EXE #1 --------------------- //

// Description: Getting Setup

window.addEventListener('keydown', function (e) {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})