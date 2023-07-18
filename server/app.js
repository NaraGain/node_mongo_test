require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const {ConnectDb} = require('./conc');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware')
const notFound = require('./middleware/notFound')
const taskRoute = require('./route/task');
const userRoute = require('./route/user');
const auth = require("./middleware/auth");


app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
//protect endpoint
app.get('/auth-endpoint',auth, (req, res)=>{
    res.json({message: "You are authorized to access me"});
})



app.use('/task',taskRoute)
app.use('/user',userRoute)
app.use(notFound)
app.use(errorHandlerMiddleware)
const start = async ()=>{
    try {
       await ConnectDb(process.env.MONGO_URI)
        app.listen(process.env.port,()=>
        console.log(`application are running on port ${process.env.port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
   



