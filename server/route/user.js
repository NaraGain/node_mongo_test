const express = require('express');
const route = express.Router();


const {
    userQuery,
    create_user,
    find_user,
    login_user
   

} = require("../controller/user");



route.get("/", userQuery);
route.post('/register', create_user);
route.post('/login',login_user);
route.get('/:id',find_user);



module.exports = route