const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_ACCESS, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`Mongo DB connected: ${conn.connection.host}`)
}

const connectTestDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://client:r4ZEM14lVaf3siBv@scraper.ewfih.mongodb.net/test', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = {
    connectDB,
    connectTestDB
}
