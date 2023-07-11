const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title : String,
    desc : String,
}, 
{ timestamps : true,}
    )

// if you use this app with a front-end that needs id field instead of _id, you have to override 
// toJSON method that map default object to a custom object. So the Mongoose model could be modified as following code

// taskSchema.method("toJSON", ()=>{
//  const {__v , _id , ...object} = this.object
//  object.id = _id
//  return object

// })


module.exports = mongoose.model('tasks',taskSchema)