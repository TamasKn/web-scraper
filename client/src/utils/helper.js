export const isValidEmail = (email) => {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
}

export const isValidPassword = (password) => {
    // Minimum 8 characters, at least one upper case letter,
    // one lower case letter and one number
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)
}
