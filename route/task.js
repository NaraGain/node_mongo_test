const express = require('express')
const route = express.Router()
const {
    createTask,
    getTask,
    deleteTask,
    updateTask,
    getTask_id
} = require('../controller/getinfo')


route.get('/',getTask)
route.get('/:id',getTask_id)
route.post('/create',createTask)
route.put('/update/:id',updateTask)
route.delete('/delete/:id',deleteTask)




module.exports = route