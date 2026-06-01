// let getTodos = async() => {
//     let todos = await fetch("http://0.0.0.0:8000/api/v1/guest/todos", {
//         method: "GET"
//     })

//     let response = await todos.json()
//     console.log(response)
// }

// getTodos()


let userLogin = async() => {
    let mail = "user@example1.com"
    let pass = "stringst"
    let todos = await fetch("http://0.0.0.0:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: mail,
            password: pass
        })
    })

    if(!todos.ok) {
        return console.log("fail")
    }

    let response = await todos.json();
    return response.access_token
}
console.log(userLogin())



let userTodos = async() => {
    let todos = await fetch("http://0.0.0.0:8000/api/v1/todos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${await userLogin()}`
        }
    })

    if(!todos.ok) {
        console.log("Error: no todos")
    }

    let response = await todos.json()
    console.log(response)
}

userTodos()

let createTodo = async() => {
    let title = "AWS learning";
    let todoBody = "Learn AWS for 5 hours"
    let todos = await fetch("http://0.0.0.0:8000/api/v1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await userLogin()}`,
      },
      body: JSON.stringify({
        title,
        body: todoBody,
        status: "PENDING",
      }),
    });

    if(!todos.ok) {
        console.log("Error: Can not create")
    }

    let response = await todos.json();
    console.log(response);
}
createTodo()

let names = "solex";
console.log(names.substr(-1));

