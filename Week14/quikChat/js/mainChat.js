function loadTime() {
    let currentTime = document.querySelector("#time");
    let time = Date.now();
    currentTime.textContent = (timeStamp = new Date(time).toLocaleTimeString())
 
}

loadTime()


let sendBtn = document.querySelector("#sendButton");
let liveMessage = document.querySelector("#newMessage");

liveMessage.addEventListener("input", (e) => {
    if(e.target.value !== "") {
        sendBtn.removeAttribute("disabled")
    }
    
})



sendBtn.addEventListener("click", (e) => {
    let currentUserIcon = document.querySelector("#currentUserIcon");
    let currentUserText = document.querySelector("#currentUserText");
    let newMessage = document.querySelector("#newMessage");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(e.target.value == "") {
        sendBtn.setAttribute("disabled", true)
        return
    }

    currentUserIcon.textContent = currentUser.username;
    currentUserText.textContent = newMessage.value;

    // Implement chat history


    console.log(currentUser)
  
})