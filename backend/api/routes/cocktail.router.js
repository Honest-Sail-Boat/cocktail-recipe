import express from 'express'
import cocktailCtrl from '../controllers/cocktail.controller'

const router = express.Router()

//create new cocktail with POST
router.route('/api/cocktail')
    .post(cocktailCtrl.create)

//fetch cocktail with GET
router.route('/api/cocktail/:cocktailId')
    .get(cocktailCtrl .read)

//update cocktail with PUT
router.route('/api/cocktail/:cocktailId')
    .put(cocktailCtrl.update)

//delete cocktail with DELETE
router.route('/api/cocktail/:cocktailId')
    .delete(cocktailCtrl.remove)

router.param('cocktailId', cocktailCtrl.cocktailById)

export default router