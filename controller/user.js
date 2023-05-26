const users = require('../models/user')
const asyncWrapper = require("../middleware/asyncWrapper")
const user = require('../models/user')



const userQuery = (
    async (req,res)=>{
        const User = await user.find({})
        if(!User){
            res.status(404).json({message : "Not found data"})
        }
   
        res.status(200).json({User})
       
    }
)


const create_user = function(req,res){
     let Users = new users({
        name : req.body.name,
        email : req.body.email
     })

     Users = Users.save()
     if(!Users){
        res.status(404).json("user could't create...")
     }
     res.status(200).json({Users})
}


const find_user = async (req,res)=>{
   const {id : user_id} = req.params
   const userId = await user.findOne({_id : user_id})
   !userId ? res.status(404).json({message: "no user found here ..."}) 
   : res.status(200).json({userId})

}




module.exports = {
    create_user,
    userQuery,
    find_user,
}