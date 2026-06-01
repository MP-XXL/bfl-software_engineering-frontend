
let saveButton = document.querySelector('#saveButton')

saveButton.addEventListener("click", (e)=>{
    e.preventDefault()
// let storedContent = localStorage.getItem(JSON.parse('content')) || []
let storedContent = JSON.parse(localStorage.getItem('content')) || []
let userInput = document.querySelector('#userInput')
let childEl = document.createElement('p')
let storageContainer = document.querySelector('#storage')
childEl.innerText=userInput.value
// storageContainer.appendChild(childEl) we are using local storage so there will be no need send input here
storedContent.push({
    id:id,
    todo: userInput.value
})
let id = storedContent[storedContent.length-1].id+1 || 0
if (id==undefined){
    id=0
}

userInput.value=''
})
