const Users = require('../database/models/user')

exports.Protected = async (req, res, next) => {
    try {
        const user = await Users.find({_id: req.body.id})

        if(user) {
            next()
        }
    } catch {
        res.send('No user')
    }
}
