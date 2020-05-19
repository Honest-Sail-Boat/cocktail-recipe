import User from '../models/user'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'

/**
 * 
 */
const signin = (req, res) => {
    User.findOne({
        "username": req.body.username
    }, (err, user) => {

        if (err || !user)
            return res.status(401).json({
                error: 'User not found'
            })

        if (!user.authenticate(req.body.password)){
            return res.status(401).send({
                error: 'Authentication failed.'
            })
        }

        return res.json({
            message: 'Successfully signed in.'
        })
    })
}

export default { signin }