import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import mongokey from './mongokey' //need create to add keys of mongo atlas

const app = express()

mongoose.connect(mongokey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

//Server start
app.listen(3333, 
    () => console.log('Server listening on port 3333!')
)