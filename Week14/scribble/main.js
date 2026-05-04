let textOutput = document.querySelectorAll(".live-output");
let liveText = document.querySelector("#live-input");

liveText.addEventListener("input", function(e) {
    textOutput.forEach((output) => {
        output.innerText = e.target.value
    })
})