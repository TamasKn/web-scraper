const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    mongoSanitize = require('express-mongo-sanitize')

require("dotenv").config({path: path.join(__dirname, '.env')})

const app = express()
const PORT = process.env.PORT || 5000

// Database connection
const connectDB = require('./database/mongoDB')

const userRoutes = require('./routes/userRoutes')
const dataRoutes = require('./routes/dataProcessing')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger(":date[iso]"))
app.use(logger("dev"))
app.use(logger(":user-agent"))

app.use(cors({credentials: true, origin: '*'}))

// Prevent MongoDB no-sql injection
app.use(mongoSanitize())

// Routes
app.use('/user', userRoutes)
app.use('/data', dataRoutes)


app.get('/', (req, res) => {
    res.send({message: 'Web Scraper server'})
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
    connectDB()
})
