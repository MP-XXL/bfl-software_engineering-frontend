function loadTime() {
    let currentTime = document.querySelector("#time");
    let time = Date.now();
    currentTime.textContent = (timeStamp = new Date(time).toLocaleTimeString())
}

loadTime()

let logout = document.querySelector("#logoutBtn");
logout.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.assign("/components/login.html")
})

function loadData() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    let chatDiv = document.querySelector("#chatBox");
    chatDiv.innerHTML = "";
    chatHistory.forEach((chat) => {
        let wrapperDiv = document.createElement("div");
        if(chat.user == currentUser.username) {
            let initials = currentUser.username.slice(0, 2);
            wrapperDiv.setAttribute("class", "bg-[#E59500] p-2.5 rounded-md max-w-full overflow-hidden self-end")
            wrapperDiv.innerHTML = `
                            <p id="currentUserIcon" class="bg-black flex justify-center items-center w-7 h-7 border-2 border-gray-700 rounded-full text-sm">${initials}</p>
                            <p id="currentUserText" class="bg-[#fdb227] p-1 mt-1 rounded-md wrap-break-word whitespace-normal">${chat.message}</p>`

            chatDiv.appendChild(wrapperDiv)
        }
        if(chat.user !== currentUser.username){
            let initials = chat.user.slice(0, 2);
            wrapperDiv.setAttribute("class", "bg-[#840032] p-2.5 rounded-md max-w-full overflow-hidden md:max-w-fit")
            wrapperDiv.innerHTML = `
                    <p id="sender" class="bg-black flex justify-center items-center w-7 h-7 border-2 border-gray-700 rounded-full text-sm">${initials}</p>
                    <p id="senderText" class="bg-[#aa0041] p-1 mt-1 rounded-md wrap-break-word whitespace-normal backdrop-blur-md">${chat.message}</p>`

            chatDiv.appendChild(wrapperDiv)

        }
        
    })
}

loadData()


let sendBtn = document.querySelector("#sendButton");
let liveMessage = document.querySelector("#newMessage");
liveMessage.addEventListener("input", (e) => {
    if(e.target.value !== "") {
        sendBtn.removeAttribute("disabled")
    }
    
})

sendBtn.addEventListener("click", (e) => {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    let newMessage = document.querySelector("#newMessage");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(e.target.value == "") {
        sendBtn.setAttribute("disabled", true)
        return
    }
    chatHistory.push({
        user: currentUser.username,
        message: newMessage.value
    })

    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    newMessage.value = "";

    loadData()
  
})