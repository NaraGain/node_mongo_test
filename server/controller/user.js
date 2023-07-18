const users = require('../models/user')
const asyncWrapper = require("../middleware/asyncWrapper")
const auth = require("../middleware/auth")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()



const userQuery = (
    async (req,res)=>{
        const names = req.query.name;
        try {
            if(names !== undefined){
                const User = await  users.find({name:names}); 
                if(!User){
                    res.status(404).json({message : "Not found data"});
                };
                res.status(200).json({User});
            }else{
                const User = await  users.find({});
                if(!User){
                    res.status(404).json({message : "Not found data"});
                };
                res.status(200).json({User});
            };
        } catch (error) {
            res.status(500).json({message : "error internal server"});
        };
    }
);


const create_user = async (req,res)=>{
     let Users = new users({
        name : req.body.name,
        email : req.body.email,
        password:req.body.password,
        confirm:req.body.confirm,
     });

     const userExists = await users.findOne({email:Users.email});
     if(userExists){
        res.status.send({
            message:"user already exists",
            success : false,
        });
     };

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(Users.password, salt)
     Users.password = hashedPassword
     Users.confirm = hashedPassword

     Users = Users.save();
     if(!Users){
        res.status(404).json("user could't create...");
     };
     res.status(200).json({message: "create user successfully "});
};

const login_user = async (req, res)=>{
    
    try {
        
        const user = await users.findOne({name:req.body.name});
        if(!user){
           res.status(200).send({
            message : "user does not exits",
            success : false
           });
         };

         const vaildPassword = await bcrypt.compare(
            req.body.password,
            user.password,
         );
         
         if(!vaildPassword){
            return res.status(500).send({
                message: 'Invaild credentails',
                success: false,
            });
         };

         const token = jwt.sign(
            {
                userId:user._id,
                username:user.name},
                process.env.JWTtoken,{
                expiresIn : '24h',
         })
         res.json({
            message: 'User logged in successfully',
            success:true,
            data:token
         })
         
         }catch (error) {
            res
                .status(500)
                .json({
                 message:"User login not success" , 
                 success:false,
                 data: error
             });
            };
        };

const find_user = async (req,res)=>{
   const {id : user_id} = req.params
   const find = req.query.find
   try{
    const userId = await users?.findOne({_id : user_id})
    !userId ? res.status(404).json({message: `no user found here ...${user_id}`}) 
    : res.status(200).json({userId})
   }catch(err){
    res.status(500).json({message: `no user found ${err} ... ${user_id}`})
   }
};







module.exports = {
    create_user,
    userQuery,
    find_user,
    login_user,
   
};