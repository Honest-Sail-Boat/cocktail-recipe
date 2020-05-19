import User from '../models/user'
import { restart } from 'nodemon'

/**
 * Creates a new user
 */
const create = (req, res, next) => {
    const user = new User(req.body)

    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            })
        }

        res.status(200).json({
            message: "Successfully signed up."
        })
    })
}

//Sends user in req.profile
const read = (req, res, next) => {
    return res.json(req.profile)
}

const update = (req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, req.body, (err, user) => {
        if (err)
            return res.status(500).json({
                error: err.message
            })

        res.status(201).json({
            message: "Successfully updated user."
        })
    })
}

const remove = (req, res, next) => {
    User.findByIdAndRemove(req.params.userId, (err, user) => {
        if (err)
            return res.status(500).json({
                error: err.message
            })

        res.status(200).json({
            message: "Successfully deleted user."
        })
    })
}

//Retrieves user with given id
//sets req.profile to the retrieved user
const userById = (req, res, next, id) => {
    User.findById(id).exec( (err, user) => {
        if (err || !user)
            return res.status(404).json({
                error: "User not found."
            })
        
        //Don't send sensitive data
        user.hash_password = undefined
        user.salt = undefined

        req.profile = user
        next()
    })
}

export default { create, read, update, remove, userById }