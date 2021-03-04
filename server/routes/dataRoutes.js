const express = require('express'),
    {DataProcessor} = require('../utils/dataprocessor'),
    Response = require('../utils/response'),
    Users = require('../database/models/user'),
    {Protected} = require('../utils/middleware')

const router = new express.Router()

/**
 Return: Number of word occurrences in the received URL
 URI: domain/data/
 Access: protected
 **/
router.post('/', Protected, async (req, res) => {
    let { url, id } = req.body

    // Adding http:// prefix if missing from URL
    if(!url.includes('http')) {
        url = `http://${url}`
    }

    try {
        // Parsing the HTML and creating the dictionary of word occurrences
        const processedHtmlText = await DataProcessor(url)

        // Saves result to database
        await Users.findOneAndUpdate({_id: id},
            {$push: { history: {
                        url,
                        words: processedHtmlText.length
                    }} }
        )

        // { array: { $push: { property: {$each: ['value'], $position: 0 } } } },

        return Response(res, 200, {
            success: true,
            data: processedHtmlText
        })


    } catch (err) {
        return Response(res, 400, {
            success: false,
            message: err.message
        })
    }


})

module.exports = router
