// Await only works in asynchornous function

async function getTodo() {
  let todos = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });

  if (!todos.ok) {
    alert("Invalid request");
    return;
  }

  let data = await todos.json();
  data.forEach(async (todo) => {
    let userReq = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${todo.userId}`,
      {
        method: "GET",
      },
    );

    let postData = await userReq.json();

    console.log(postData);
  });
}

getTodo();
