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
        return /^[a-zA-Z]{2,15}$/.test(name)
    },

    textSanitizer(string) {
        // Removes any special characters and numbers, new lines
        // and multiple whitespaces
        return string
            .replace(/[^a-zA-Z]/gm, ' ')
            .replace(/\s\s+/g, ' ')
    },

    createDictionary(array) {
        // Creates a hash table with every element of the array
        // and record their occurrences as lower case to avoid case insensitive duplication
        // (element must be longer than 2 character)
        let table = {}
        const arr = []
        for(let el of array) {
            if(el.length > 2) {
                if(table[el] !== undefined) {
                    table[el.toLowerCase()] += 1
                } else {
                    table[el.toLowerCase()] = 1
                }
            }
        }
        // Sadly I had to create an array as react-window did not handle well the plain hashmap
        // which slightly more process for server but resulted with a significant performance
        // gain on the frontend
        for (const [key, value] of Object.entries(table)) {
            arr.push({key, value})
        }
        return arr
    }
}
