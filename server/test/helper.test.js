const {Helper} = require('../utils/helper')

describe('Helper functions', () => {
    describe('Password validator', () => {
        it('Empty password', () => {
            expect(Helper.isValidPassword('')).toEqual(false)
        })

        it('Less than 8 characters', () => {
            expect(Helper.isValidPassword('Ju04')).toEqual(false)
        })

        it('Missing integer', () => {
            expect(Helper.isValidPassword('JuWlksIoo')).toEqual(false)
        })

        it('Missing upper case', () => {
            expect(Helper.isValidPassword('password000')).toEqual(false)
        })

        it('Correct password', () => {
            expect(Helper.isValidPassword('JuL09MnmsL')).toEqual(true)
        })
    })

    describe('E-mail validator', () => {
        it('Empty email', () => {
            expect(Helper.isValidEmail('')).toEqual(false)
        })

        it('Missing @', () => {
            expect(Helper.isValidEmail('joe.mail.com')).toEqual(false)
        })

        it('Missing domain', () => {
            expect(Helper.isValidEmail('joe@mail')).toEqual(false)
        })

        it('Correct email', () => {
            expect(Helper.isValidEmail('joe@mail.com')).toEqual(true)
        })
    })

    describe('Text sanitizer', () => {
        it('Text with numbers, multiple whitespaces and special characters', () => {
            expect(Helper.textSanitizer('6$text|    --?@$%')).toEqual(' text ')
        })
    })

    describe('Dictionary of word occurrences', () => {
        const array = ['one', 'two', 'three', 'two', 'three', 'three']
        const result = [
            {
                key: 'one',
                value: 1
            },
            {
                key: 'two',
                value: 2
            },
            {
                key: 'three',
                value: 3
            }
        ]
        it('Array of words', () => {
            expect(Helper.createDictionary(array)).toEqual(result)
        })
    })
})


