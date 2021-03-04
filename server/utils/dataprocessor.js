const { parse } = require('node-html-parser'),
    axios = require('axios'),
    { Helper } = require('../utils/helper')

exports.DataProcessor = async (url) => {

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

    return Helper.createDictionary(sanitized)
}
