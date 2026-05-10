let signUpBtn = document.querySelector("#signUpButton");

signUpBtn.addEventListener("click", (e) => {
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    let fields = [email, username, password];
    fields.forEach((field) => {
        if(field.value == "") {
            field.setAttribute("placeholder", "All fields required!")
        }
    })
    if(email.value == "" || username.value == "" || password.value == "") {
        return
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.find((user) => user.email == email.value.toLowerCase()) !== undefined) {
        alert(`User email ${email.value} already registered`)
        return
    }

    if(users.find((user) => user.username == username.value.toLowerCase()) !== undefined) {
        alert(`User email ${username.value} already taken`)
        return
    }

    users.push({
        email: email.value.toLowerCase().trim(),
        username: username.value.toLowerCase().trim(),
        password: password.value.toLowerCase().trim()
    })

    localStorage.setItem("users", JSON.stringify(users))
    email.value = ""
    username.value = ""
    password.value = ""
    alert("Registration successful!")
    window.location.assign("/components/login.html")
    

})
