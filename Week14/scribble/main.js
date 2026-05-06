let textOutput = document.querySelectorAll(".live-output");
let liveText = document.querySelector("#live-input");

liveText.addEventListener("input", function(e) {
    textOutput.forEach((output) => {
        output.innerText = e.target.value
    })
})

function changeFont(noteId, font) {
    let changeFontBtn = document.getElementById(noteId);
    let oldAttr = changeFontBtn.getAttribute("class");
    let fontName = oldAttr.search("font-f") 
    if(fontName != -1) {
        oldAttr = oldAttr.split(" ");
        oldAttr.pop()
        oldAttr.push(font)
        let styling = String(oldAttr);
        styling = styling.replaceAll(",", " ")
        changeFontBtn.setAttribute("class", styling)
    }else {
        oldAttr = Array(oldAttr)
        oldAttr.push(font)
        let styling = String(oldAttr);
        styling = styling.replaceAll(",", " ")
        changeFontBtn.setAttribute("class", styling)    
    }
}