const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const todoRoutes = require('./routes')

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URL = process.env.MONGODB_URL

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// routers
app.use('/api/todos', todoRoutes)

// database
mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (err) => {
    if(err) {
        console.error(`Error mongodb: ${err}`)
    }
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})