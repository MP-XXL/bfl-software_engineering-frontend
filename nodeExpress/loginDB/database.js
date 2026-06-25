const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DATABASE
}).promise()

async function getUsers() {
    const [users] = await db.query("SELECT * FROM users")
    return users
}

async function getUser(email) {
    const [user] = await db.query(`
        SELECT * FROM users
        WHERE email = ?`, [email])

    if(user.length === 0){
        return false
    }

    return user[0]
}

 async function createUser(first_name, last_name, email, password) {

    const foundUser = await getUser(email)

    if(foundUser.length !== 0){
        return {
            success: false,
            message: "User already exist!",
        }
    }

    const [user] = await db.query(`
        INSERT INTO users (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)`, 
        [first_name, last_name, email, password])
    return {
        first_name,
        last_name,
        email
    }
}


module.exports = {
  getUser,
  getUsers,
  createUser
};

