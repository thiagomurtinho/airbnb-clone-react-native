import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'

import routes from './routes'
import mongokey from './config/mongokey' //need create to add keys of mongo atlas

const app = express()

mongoose.connect(mongokey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

//Server start
app.listen(3333, 
    () => console.log('Server listening on port 3333!')
)