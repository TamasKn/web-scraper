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
    const conn = await mongoose.connect(process.env.DB_TEST, {
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
