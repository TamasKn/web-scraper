const mongoose = require('mongoose'),
    {Helper} = require('../../utils/helper')

const HistorySchema = new mongoose.Schema({
    url: String,
    words: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

const UsersSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'First name is missing'],
            validate: {
                validator: (input) => Helper.isValidName(input),
                message: () => 'Not a valid name'
            }
        },
        lastname: {
            type: String,
            required: [true, 'Last name is missing'],
            validate: {
                validator: (input) => Helper.isValidName(input),
                message: () => 'Not a valid name'
            }
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'E-mail is missing'],
            validate: {
                validator: (input) => Helper.isValidEmail(input),
                message: () => 'Not a valid email'
            }
        },
        password: {
            type: String,
            required: [true, 'Password is missing']
            // Password validation runs at register
        },
        created: {
            type: Date,
            default: Date.now
        },
        history: [HistorySchema]
    }
)

const Users = mongoose.model('User', UsersSchema)

module.exports = Users
