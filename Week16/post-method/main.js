function createTodo() {




  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
        userID: userid,
        title: title,
        iscompleted: isCompleted
    })
  })
    .then((res) => res.json())
    .then((data) => {
        if(!data.id){
            console.log("Failed to create");
            return
        }else{
            console.log("Todo created");
        }
      
    });
}


function creatAccount() {
  fetch("https://vintique.onrender.com/auth/register", {
    method: "POST",
    body: JSON.stringify({
      email,
      username,
      password,
      address,
    }),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    if(!res.ok) {
        if(res.status == 429) {
            throw new Error("Too many requests")
        }

        if(res.status == 409) {
            throw new Error("Conflict: User already exists")
        }

        if(res.status == 400) {
            throw new Error("Invalid request")
        }
    }

    return res.json()

  })
  .then((data) => {
    alert(data.message)
  })
  .catch((error) => {
    alert(error.message)
  });
}
