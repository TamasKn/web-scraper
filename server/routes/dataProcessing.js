const express = require('express'),
    { parse } = require('node-html-parser'),
    cheerio = require('cheerio'),
    axios = require('axios')

const router = new express.Router()

/**
 Return: Number of word occurrences in the received URL
 URI: domain/data/
 Protected: true
 **/
router.post('/', async (req, res) => {
    const { url } = req.body

    // if big txt file run root.textContent
    // if regular html run cheerio

    if(url.includes('.txt')) {
        console.log('Text File')
        // Parse with root.textContent
    }
    // Regular html parse with root.querySelector('body').textContent

    await axios.get(url).then(async body => {
        const root = await parse(body.data, {
            lowerCaseTagName: false,
            comment: false,
            blockTextElements: {
                script: false,
                noscript: true,
                style: false,
                pre: true
            }
        })
        res.send({
            success: true,
            url: url,
            data: root.querySelector('body').textContent
                .replace(/(\r\n|\n|\r)/gm, " ")
                .replace(/[^a-zA-Z]/g, ' ')
                .replace(/\s\s+/g, ' ')
                .split(' ')

        })
    })

    // axios.get(url).then(async response => {
    //     const $ = await cheerio.load(response.data);
    //     const data = await $('body').text().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s\s+/g, ' ')
    //     res.send({
    //         success: true,
    //         url: url,
    //         data: data
    //     })
    // }).catch(err => {
    //     console.log(err);
    // });
// data: root.text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s\s+/g, ' ')
})

module.exports = router
