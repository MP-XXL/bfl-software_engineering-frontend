
let noteList = document.querySelector("#savedNotes");
let addBtn = document.querySelector("#addNoteBtn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let noteValue = document.querySelector(".noteInput").value;
    if(noteValue == ""){
        let errorDiv = document.querySelector("#errorDiv")
        return errorDiv.innerHTML = `<p>Can not accept empty input!</p>`
    }
    document.querySelector("#errorDiv").innerHTML = "";
    let noteId = Date.now();
    let timeStamp = new Date(noteId).toLocaleDateString();
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null) {
        localStorage.setItem(
            "notes",
            JSON.stringify([
                { note: noteValue, noteId: noteId, dateAdded: timeStamp },
            ]),
        );
    } else {
        notes.push({ note: noteValue, noteId: noteId, dateAdded: timeStamp });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    loadTodoData();
    document.querySelector(".noteInput").value = "";
    
});

let noteDelete = (noteId) => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.forEach((note, index) => {
        if (note.noteId == noteId) {
            notes.splice(index, 1)
        }
    })
    localStorage.setItem("notes", JSON.stringify(notes));
    loadTodoData();
}

function loadTodoData() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null) {
        noteList.innerHTML = "";
    } else {
        noteList.innerHTML = "";
        notes.forEach((note) => {
            let notesDiv = document.createElement("div");
            notesDiv.innerHTML = `
            <div id="noteHolder" class="flex flex-col gap-4 max-w-full overflow-hidden">
                <div id="${note.noteId}" class="bg-[#918B76] w-full h-32 rounded-md border-2 border-white p-2.5 wrap-break-word whitespace-normal">${note.note}</div>

                <div class="flex items-center gap-2.5">
                    <h1>font</h1>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-jim font-bold" onclick="changeFont('${note.noteId}', 'font-jim')">Hello</button>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-c-girls font-bold" onclick="changeFont('${note.noteId}', 'font-c-girls')">Hello</button>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-dynaPuff font-bold" onclick="changeFont('${note.noteId}', 'font-dynaPuff')">Hello</button>
                    <div class="flex items-center gap-1.5">
                        <span class="text-sm font-medium">${note.dateAdded}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="2 2 20 20"
                            onclick="noteDelete('${note.noteId}')" class="transition active:scale-90">
                            <path
                                d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z">
                            </path>
                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                        </svg>
                    </div>
                </div>


                <div class="flex gap-2.5">
                    <h1>Colour</h1>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-dynaPuff font-bold">Hello</button>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-dynaPuff font-bold">Hello</button>
                    <button class="bg-[#918B76] p-1 rounded-md transition active:scale-90 font-dynaPuff font-bold">Hello</button>
                </div>

            </div>
           `
            noteList.appendChild(notesDiv);
        });
    }
}
loadTodoData();

function changeFont(noteId, font) {
    let changeFontBtn = document.getElementById(noteId);
    let oldAttr = changeFontBtn.getAttribute("class");
    let fontName = oldAttr.search("font") 
    if(fontName != -1) {
        oldAttr = oldAttr.split(" ");
        oldAttr.pop()
        oldAttr.push(font)
        let styling = String(oldAttr);
        styling = styling.replaceAll(",", " ")
        changeFontBtn.setAttribute("class", styling)
        // get localstorage item
        // update the font of that part. note
        // update the localstorage item
    }else {
        oldAttr = Array(oldAttr)
        oldAttr.push(font)
        let styling = String(oldAttr);
        styling = styling.replaceAll(",", " ")
        changeFontBtn.setAttribute("class", styling)
        
    }

   
}