
const express = require('express')
const app = express()
const {ConnectDb} = require('./conc')
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware')
const notFound = require('./middleware/notFound')
require('dotenv').config()
const task = require('./models/task')
const route= require('./web_route');

app.use(express.static('./public'))
app.use(express.json())
 
app.use('/task',route)
app.use(notFound)
app.use(errorHandlerMiddleware)
const start = async ()=>{
    try {
       await ConnectDb(process.env.MONGO_URI)
        console.log('connection successfully')
        app.listen(process.env.port,()=>console.log(`${process.env.port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
   



