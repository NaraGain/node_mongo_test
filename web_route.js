const express = require('express')
const route = express.Router()
const {getAll,
    createTask,
    getTask,
    deleteTask,
    updateTask
} = require('./controller/getinfo')


route.get('/getall',getAll)
route.get('/:id',getTask)
route.post('/create',createTask)
route.put('/update/:id',updateTask)
route.delete('/delete/:id',deleteTask)

module.exports = route