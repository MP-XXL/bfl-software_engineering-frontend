const express = require('express');
const app = express()
const port = 3000
app.use(express.json())
const { getUser, getUsers, createUser } = require("./database.js")

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Login APP!"
})
})

app.get('/users', async (req, res) => {
  const users = await getUsers()
  res.status(200).json({
    success: true,
    message: "Users retrieved successfully!",
    data: users
})
})

app.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, saltRounds).then(function (hash) {
    return hash
  });

  const newUser = await createUser(first_name, last_name, email, hashedPassword)

  if(newUser.success === false){
    return res.status(400).json({
      success: false,
      message: "Failed to create",
      data: newUser
    })
  }

  return res.status(201).json({
    success: true,
    message: "User created successfully!",
    data: newUser
  })
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body

    const currentUser = await getUser(email)

    if(currentUser){
        const isPassword = await bcrypt.compare(password, currentUser.password)
        if(isPassword){
            return res.status(200).json({message: `Login Successful! Welcome ${currentUser.first_name}`})
        }
        else{
            return res.status(401).json({
                message: "Invalid login credentials"
            })
        }
    }else{
        return res.status(401).json({
            message: "Invalid login credentials"
        })
    }
    
})

app.listen(port, () => {
  console.log(`Login app is listening on port ${port}`)
})