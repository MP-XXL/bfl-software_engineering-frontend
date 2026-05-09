let loginBtn = document.querySelector("#loginButton");

loginBtn.addEventListener("click", () => {
    let email = document.querySelector("#email");
    let pass = document.querySelector("#password");

    let fields = [email, password];
    fields.forEach((field) => {
        if (field.value == "") {
            field.setAttribute("placeholder", "All fields required!")
        }
    })
    if (email.value == "" || pass.value == "") {
        return
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email == email.value.toLowerCase()) == undefined) {
        alert(`User email ${email.value} does not exist!`)
        return
    }

    let userFound = users.find((user) => user.password == password.value.toLowerCase())
    if(userFound == undefined) {
        alert("Password mismatch!")
        return
    }else{
        alert(`Welcome ${userFound.username}`)
    }

    console.log(userFound)

    localStorage.setItem("currentUser", JSON.stringify(userFound))

    
    window.location.assign("/components/mainChat.html")
})