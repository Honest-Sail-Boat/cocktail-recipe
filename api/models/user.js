import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: [true, 'Username already exists.'],
        required: [true, 'Username is required.']
    },
    hash_password: {
        type: String,
        required: [true, 'Password is required.']
    },
    salt: String
})

UserSchema
    .virtual('password')
    .set( function(password) {
        this._password = password
        this.salt = this.makeSalt()
        this.hash_password = this.encryptPassword(password)
    })
    .get( function() {
        return this._password
    })

UserSchema.methods = {
    authenticate: function(plainTextPassword) {
        return this.encryptPassword(plainTextPassword) === this.hash_password
    },
    encryptPassword: function(password) {
        if (!password) return ''

        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

export default mongoose.model('User', UserSchema)