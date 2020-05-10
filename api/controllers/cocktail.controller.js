import Cocktail from '../models/cocktail'

/**
 * Creates a new cocktail
 */
const create = (req, res, next) => {
    const cocktail = new Cocktail(req.body)

    cocktail.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err.message
            })
        }

        res.status(200).json({
            message: "Successfully saved cocktail recipe."
        })
    })
}

//Sends cocktail in req.cocktail
const read = (req, res, next) => {
    return res.json(req.cocktail)
}

const update = (req, res, next) => {
    Cocktail.findByIdAndUpdate(req.params.cocktailId, req.body, (err, cocktail) => {
        if (err)
            return res.status(500).json({
                error: err.message
            })

        res.status(201).json({
            message: "Successfully updated cocktail recipe."
        })
    })
}

const remove = (req, res, next) => {
    Cocktail.findByIdAndRemove(req.params.cocktailId, (err, cocktail) => {
        if (err)
            return res.status(500).json({
                error: err.message
            })

        res.status(200).json({
            message: "Successfully deleted cocktail recipe."
        })
    })
}

//Retrieves cocktail with given id
//sets req.cocktail to the retrieved cocktail
const cocktailById = (req, res, next, id) => {
    Cocktail.findById(id).exec( (err, cocktail) => {
        if (err || !cocktail)
            return res.status(404).json({
                error: "Cocktail not found."
            })

        req.cocktail = cocktail
        next()
    })
}

export default { create, read, update, remove, cocktailById }