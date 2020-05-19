import mongoose from 'mongoose'
import crypto from 'crypto'

const CocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Cocktail Name is required.']
    },
    nickname: {
        type: String,
        trim: true
    },
    category: {
        type: String //could be an array of all the categories fitting this cocktail
    },
    alcoholPercent: {
        type: Number
    },
    glass: {
        type: String
    },
    origin: {
        country: {
            type: String,
            trim: true
        },
        backstory: {
            type: String,
            trim: true
        },
    },
    userId: {
        type: String,
    },
    recipe: {
        ingredients: {
            type: [String]
        },
        procedure: {
            type: [String]
        }
    }
})


export default mongoose.model('Cocktail', CocktailSchema, 'cocktails')