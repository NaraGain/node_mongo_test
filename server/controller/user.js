const users = require('../models/user')
const asyncWrapper = require("../middleware/asyncWrapper")




const userQuery = (
    async (req,res)=>{
        const names = req.query.name
        try {
            if(names !== undefined){
                const User = await  users.find({name:names}) 
                if(!User){
                    res.status(404).json({message : "Not found data"})
                }
                res.status(200).json({User})
            }else{
                const User = await  users.find({}) 
                if(!User){
                    res.status(404).json({message : "Not found data"})
                }
                res.status(200).json({User})
            }
        } catch (error) {
            res.status(500).json({message : "error internal server"})
        }
      
      
   
      
       
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
   const find = req.query.find
   try{
    const userId = await users?.findOne({_id : user_id})
    !userId ? res.status(404).json({message: `no user found here ...${user_id}`}) 
    : res.status(200).json({userId})
   }catch(err){
    res.status(500).json({message: `no user found ${err} ... ${user_id}`})
   }
}







module.exports = {
    create_user,
    userQuery,
    find_user,
   
}