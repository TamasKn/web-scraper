const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

const dataRoutes = require('./routes/dataProcessing')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger(":date[iso]"))
app.use(logger("dev"))
app.use(logger(":user-agent"))

app.use(cors({credentials: true, origin: '*'}))

// Routes
app.use('/data', dataRoutes)

app.get('/', (req, res) => {
    res.send({message: 'Web Scraper server'})
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
})
