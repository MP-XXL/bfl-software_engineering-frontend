let textOutput = document.querySelector(".live-output");
let liveText = document.querySelector("#live-input");

liveText.addEventListener("input", function(e) {
    textOutput.innerText = e.target.value
})