const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes')

// TODO  - winston for logging
// TODO  - swagger documentation
// TODO  - Migration

dotenv.config()

const db = require('./config/database')

db()

const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())


app.use("/api/v1/",router)

app.listen(3000, () => {
  console.log(`Server is running!`)
})