const audioContext = new AudioContext();

// getting the audio element
const audioElement = document.querySelector("#faaah");
// passing it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination); // Connecting audio to destination

const playBtn = document.querySelector("#btn");
let bgColor = document.querySelector("main")

playBtn.addEventListener("click", () => {
  // Check if context is in suspended state (autoplay policy)
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Play or pause track depending on state
  if (playBtn.dataset.playing === "false") {
    audioElement.play();
    playBtn.dataset.playing = "true";

    if(bgColor.getAttribute("class") == "bg-black"){
        bgColor.setAttribute("class", "bg-white")
    }else{
        bgColor.setAttribute("class", "bg-black")
    }

  } else if (playBtn.dataset.playing === "true") {
    audioElement.pause();
    playBtn.dataset.playing = "false";
  }
});

// To enable audio reload without having to reload the page
audioElement.addEventListener("ended", () => {
  playBtn.dataset.playing = "false";
});