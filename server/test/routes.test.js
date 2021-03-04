const mongoose = require('mongoose'),
    {connectTestDB} = require('../database/mongoDB'),
    Users = require('../database/models/user'),
    express = require('express'),
    userRoutes = require('../routes/userRoutes'),
    supertest = require('supertest'),
    path = require('path')

require('dotenv').config({path: path.join(__dirname, '../.env')})

function createServer() {
    const app = express()
    app.use(express.json())
    app.use('/user', userRoutes)
    return app
}

const server = createServer()

beforeEach((done) => {
    connectTestDB().then(() => done())
})

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    })
})


describe('User routes Tests', () => {
    // Test User credentials already exist in DB
    const data = {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@mail.com',
        password: '123NNnn456'
    }

    describe('Login route', () => {
        test('Correct credentials', async () => {
            const {email, password} = data
            await supertest(server)
                .post('/user/login')
                .send({
                    email,
                    password
                })
                .expect(200)
                .then(async (response) => {
                    // Check the response
                    //{success: true, user: {id: user[0]._id}}
                    expect(response.body.success).toBe(true)

                    // Check the data in the database
                    const user = await Users.findOne({email: data.email})
                    expect(user).toBeTruthy()
                    expect(user.firstname).toBe(data.firstname)
                    expect(user.lastname).toBe(data.lastname)
                    expect(user.email).toBe(data.email)
                })
        })

        test('Wrong e-mail address', async () => {
            const {password} = data
            await supertest(server)
                .post('/user/login')
                .send({
                    email: 'wrong@mail.com',
                    password
                })
                .expect(400)
                .then(async (response) => {
                    // Check the response
                    expect(response.body.success).toBe(false)
                })
        })

        test('Wrong password', async () => {
            const {email} = data
            await supertest(server)
                .post('/user/login')
                .send({
                    email,
                    password: '1234'
                })
                .expect(400)
                .then(async (response) => {
                    // Check the response
                    expect(response.body.success).toBe(false)
                })
        })

        test('User does not exist', async () => {
            await supertest(server)
                .post('/user/login')
                .send({
                    email: 'stranger@mail.com',
                    password: '1234578LLll'
                })
                .expect(400)
                .then(async (response) => {
                    // Check the response
                    expect(response.body.success).toBe(false)
                })
        })
    })

})




