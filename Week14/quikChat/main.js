



let loginBtn = document.querySelector("#loginButton");

loginBtn.addEventListener("click", () => {
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    if(email == "" || pass == ""){
        console.log("All fields are required")
        return
    }
    window.location.assign("mainChat.html")
})