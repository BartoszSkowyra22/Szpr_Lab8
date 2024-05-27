require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const tokenVerification = require('./middleware/tokenVerification')
const connection = require('./db')
connection()

app.use(cors())

//middleware
app.get("/api/users/",tokenVerification)
app.get("/api/users/myUser",tokenVerification)
app.get("/api/users/delete",tokenVerification)
app.use(express.json())

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))

// routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)