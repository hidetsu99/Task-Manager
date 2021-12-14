require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

const app = express()

const port = 5000

//middleware
app.use(express.json())
app.use(express.static('./public'))

//Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server listening at port 5000'))
    } catch (error) {
        console.log(error);
    }
}
start()