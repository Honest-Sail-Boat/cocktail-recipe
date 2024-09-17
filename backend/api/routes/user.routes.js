import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

//create new user with POST
router.route('/api/user')
    .post(userCtrl.create)

//fetch user with GET
router.route('/api/user/:userId')
    .get(userCtrl.read)

//update user with PUT
router.route('/api/user/:userId')
    .put(userCtrl.update)

//delete user with DELETE
router.route('/api/user/:userId')
    .delete(userCtrl.remove)


//POST request to Authenticate user with username and password
router.route('/api/auth/user')
    .post(authCtrl.signin)

router.param('userId', userCtrl.userById)

export default router