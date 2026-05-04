let textOutput = document.querySelector(".live-output");
let italicOutput = document.querySelector("#italic");
let liveText = document.querySelector("#live-input");

liveText.addEventListener("input", function(e) {
    textOutput.innerText = e.target.value
    italicOutput.innerText = e.target.value
})