const express = require('express');

const app = express()
const port = 4000
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())


const users = [
    {
        name: "MP",
        email: "mp@mail.com",
        password: "$2a$12$8raemCZx3abkfwuOvhkeDevZQLjHGAZ2QtFMof6/STCmMJtL./J.6"
    },

     {
        name: "Wallex",
        email: "wallex@mail.com",
        password: "wallex1234"
    },

     {
        name: "Andrew",
        email: "andrew@mail.com",
        password: "andrew1234"
    }
]


pages = [
    {
        path: "home",
        pageTitle: "Home",
        paageContent: "AJAJAJJAJAJJAJAJAJJAJAJJA"
    },

    {
        path: "about",
        pageTitle: "About us",
        paageContent: "AJAJAJJAJAJJAJAJAJJAJAJJA"
    },

    {
        path: "contact",
        pageTitle: "Contact us",
        paageContent: "AJAJAJJAJAJJAJAJAJJAJAJJA"
    },
]

app.get('/', (req, res) => {
//   res.status(200).json({
//     status: true,
//     message:'Hello World service is up and running'
// })
    res.send("Welcome to our server")
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body

    const currentUser = users.find((user) => user.email === email )

    if(currentUser){

        const isPassword = await bcrypt.compare(password, currentUser.password)
        if(isPassword){
            return res.status(200).json({message: `Login Successful! Welcome ${currentUser.name}`})
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
// Route or path parameters
app.get("/page:path", (res, req) => {
    const path =  req.params.page
    const page =  pages.find(p => p.path === path)

    if(!page){
        return res.status(404).json({
            success: false,
            message: "Page not found!"
        })
    }else{
        return res.status(200).json({
            success: true,
            data: page
           
        })
    }
})

// Query parameters "?"

app.get("/transactions", (req, res) => {
    let {limit, page} = req.query

    if(!limit){
        limit = 10
    }

    if(!page){
        page = 1
    }

    res.status(200).json({
        success: true,
        message: "Transactions retrieved sucessfully",
        data: "TxData",
         meta: {
                previousPage: page,
                currentPage: page+1,
                nextPage: page + 2,
                totalPages: 10
            }
    })

    console.log(limit, page)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})