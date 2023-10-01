const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const AuthRouter = require('./routes/auth')
const BookRouter = require('./routes/book')


// TODO  - winston for logging
// TODO  - swagger documentation
// TODO  - Router yapısı düzenle
// TODO  - Migration

dotenv.config()

const db = require('./config/database')


const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())

app.use('/auth/',AuthRouter)
app.use('/books/',BookRouter)


app.get('/', (req, res) => {
  res.send('Hello Worlssd!')
})


db()


app.listen(3000, () => {
  console.log(`server is  running`)
})