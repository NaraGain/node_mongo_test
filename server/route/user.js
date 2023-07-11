const express = require('express')
const route = express.Router()


const {
    userQuery,
    create_user,
    find_user,
   

} = require("../controller/user")



route.get("/", userQuery)
route.post('/create', create_user)
route.get('/:id',find_user)



module.exports = route