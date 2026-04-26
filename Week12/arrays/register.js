let users = [
    {
        username: "mp",
        email: "mp@gmail.com",
        password: "1234"
    },
    {
        username: "k9",
        email: "k9@gmail.com",
        password: "k9"
    },
    {
        username: "tosin",
        email: "tosin@gmail.com",
        password: "tosin"
    }
]




function checkEmail(email) {
    return users.find((user) => user.email == email)
            
}

function checkUsername(username) {
   return users.find((user) => user.username == username)                      
}

function checkPassword(password, username){
    return users.find((user) => (user.password == password) && (user.username == username))
}


function registerUser({username, email, password}){
    if(typeof(username) !== "string" || typeof(email) !== "string"){
        console.log("Username and email must be valid strings")
        return
    }
    if(checkUsername(username.toLowerCase()) != undefined){
        console.log(`User already exists with the username "${username}"`)
        return
    }

    if(checkEmail(email.toLowerCase()) != undefined){
        console.log(`User already exists with the email "${email}"`)
        return
    }

    users.push(
        {
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password
        }
    )

    console.log(users)
}

registerUser({username: "55", email:"Walex@gmail.com", password: "1234"})

function loginUser({username, password}) {
    if(checkUsername(username.toLowerCase()) == undefined){
        console.log(`User with username "${username}" does not exist`)
        return
    }

    if(checkPassword(password, username) == undefined){
        console.log("Password does not match!")
        return
    }

    console.log(`Login successful, Welcome ${username.toUpperCase()}`)
}

loginUser({username: "mp", password: "1234"})


