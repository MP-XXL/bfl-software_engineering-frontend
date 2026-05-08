// Update a note

let notesContainer = document.querySelector("#noteList")

notesContainer.addEventListener("click", (e) => {
    // console.log(e.target.classList.contains("updateBtn"))
   // The e.target brings the target of the click. This is event delegation. Listening to events on the parent element.
    // use "data" attribute

    if(e.target.classList.contains("updateBtn")) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        let selectedNote = notes.find(
            note => note.id == e.target.dataset.id
        )
        console.log(selectedNote)
    }

})