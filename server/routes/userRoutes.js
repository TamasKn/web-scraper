const express = require('express'),
    Users = require('../database/models/user'),
    {Helper} = require('../utils/helper'),
    Response = require('../utils/response')

const router = new express.Router()

/**
 Return: User data if credentials are correct
 URI: domain/user/login
 Access: public
 **/
router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await Users.findOne({email: email})
        if(user && Helper.checkPassword(password, user.password)) {
            return Response(res, 200, {success: true, user})
        } else {
            return Response(res, 400, {success: false, message: 'E-mail or password is not correct'})
        }

    } catch {
        return Response(res, 500, {success: false, message: 'Server error'})
    }
})

/**
 Return: Saves user credentials to Cloud DB
 URI: domain/user/register
 Access: public
 **/
router.post('/register', async (req, res) => {
    const {firstname, lastname, email, password} = req.body

    // Checks that password requirements are met
    if(!Helper.isValidPassword(password)) {
        return Response(res, 400, {success: false, message: 'Password is not valid'})
    }

    try {
        await Users.create({
            firstname,
            lastname,
            email,
            password: Helper.hashPassword(password)
        })
        return Response(res, 200, {success: true, message: 'Register completed'})

    } catch(err) {

        console.log(err.message)
        if (err.name === 'ValidationError') {
            return Response(res, 400, {success: false, message: 'Input is not valid'})
        }

        // Email duplicate error code
        if(err.code === 11000) {
            return Response(res, 400, {success: false, message: 'E-mail already exist'})
        }

        return Response(res, 500, {success: false, message: 'Server error'})
    }
})

module.exports = router
