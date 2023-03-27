const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    task:{
        type:String,
        required:[true,"please provide task name/details"]
    }
},{timestamps:true})


module.exports = mongoose.model("taskModel",taskSchema)