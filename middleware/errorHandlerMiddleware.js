const errorHandlerMiddleware = (err,req,res,next)=>{
return res.status(500).json({msg: `something was worng try again later`})
}

module.exports = errorHandlerMiddleware