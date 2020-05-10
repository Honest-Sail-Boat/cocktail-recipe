import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import config from '../config/config'
import userRoutes from './routes/user.routes'

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log("root")
    res.send("root")
})

app.use('/', userRoutes)

mongoose.Promise = global.Promise //use ES6 promises
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', (err) => {
    throw new Error('Unable to connect to database.')
})

app.listen(config.port, (err) => {
    if (err) {
        console.error(err)
    }

    console.info("Server started on port: " + config.port)
})
