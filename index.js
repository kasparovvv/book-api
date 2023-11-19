const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes')

const swaggerUi = require('swagger-ui-express');



// TODO  - Swagger auth ve içleri doldurulacak
// TODO  - Migration
// TODO  - Belki Redis
// TODO  Unit test

dotenv.config()

const db = require('./config/database')

db()


const app = express()


const swaggerDocument = require('./swagger_output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())


app.use("/api/v1/",router)

app.listen(3000, () => {
  console.log(`Server is running!`)
})