
const {mongoose} = require('mongoose')



const ConnectDb =  (url) => {
return mongoose.connect(url,{
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to Database is Successfully")
}).catch( err => {
    console.log("Cannot connect to the database " , err)
})
}



module.exports = {ConnectDb}
