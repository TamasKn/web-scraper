const bcrypt = require('bcryptjs')

exports.Helper = {
    hashPassword(password) {
        return bcrypt.hashSync(password, 8);
    },

    checkPassword(password, hashPass) {
        return bcrypt.compareSync(password, hashPass)
    },

    isValidPassword(password) {
        // Minimum 8 characters, at least one upper case letter,
        // one lower case letter and one number
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)
    },

    isValidEmail(email) {
        return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
    },

    isValidName(name) {
        return /^[a-zA-Z]{3,15}$/.test(name)
    }
}
