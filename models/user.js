const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : false,

    },
    email: {
        type :String,
        required:false,
    }, 
},
{timestamps : true}
)

// userSchema.virtual('id').get(()=>{
//     const {__v ,_id, ...object} = this.object
//     object.id = _id
//     return _id.toHexString()
// })

// userSchema.set('toJSON', { virtuals : true})

module.exports = mongoose.model('user', userSchema)