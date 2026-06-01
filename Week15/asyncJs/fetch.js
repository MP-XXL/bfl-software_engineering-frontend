// FETCH API
// fetch(URL, OPTIONS obj)

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET"
// }).then(res => console.log(res)) ===>>

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].name);
  });