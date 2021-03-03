const express = require('express'),
    { parse } = require('node-html-parser'),
    axios = require('axios'),
    { Helper } = require('../utils/helper'),
    Response = require('../utils/response')

const router = new express.Router()

/**
 Return: Number of word occurrences in the received URL
 URI: domain/data/
 Access: protected
 **/
router.post('/', async (req, res) => {
    let { url } = req.body

    // Adding http:// prefix if missing from URL
    if(!url.includes('http')) {
        url = `http://${url}`
    }

    try {
        // Fetching the provided URL
        const request = await axios.get(url)

        const parseOptions = {
            lowerCaseTagName: false,
            comment: false,
            blockTextElements: {
                script: false,
                noscript: true,
                style: false,
                pre: true
            }
        }
        // Creates a DOM from the fetched site
        const parsed = await parse(request.data, parseOptions)

        // If its a text file, simply parsing the content,
        // for html sites, targeting only the body tag and parsing its text content.
        // Then creates an array of words
        const sanitized = await (url.includes('.txt'))
            ? Helper.textSanitizer(parsed.textContent).split(' ')
            : Helper.textSanitizer(parsed.querySelector('body').textContent).split(' ')

        const dictionary = await Helper.createDictionary(sanitized)

        /** Save result to database **/

        return Response(res, 200, {
            success: true,
            data: dictionary
        })


    } catch (err) {
        return Response(res, 400, {
            success: false,
            message: err.message
        })
    }


})

module.exports = router
