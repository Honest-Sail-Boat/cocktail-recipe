/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    create: function signup (req, res) {
        console.log("signing up!!")

        var user = {
            username: req.body.username,
            password: req.body.password
        }

        User.create(user).exec( (err, user) => {
            if (err)
                res.json({error: "Failed to register user."})
            else {
                console.log(user)
                res.json(user)
            }
        })
        
    },

    login: function signin (req, res) {
        console.log("signing in!!")
    }

};

