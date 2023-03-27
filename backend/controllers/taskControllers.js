const asyncHander = require('express-async-handler')
const taskModel =  require('../Models/taskModel')

// ==================Get API======================
const getAllTasks = asyncHander( async(req,res)=>{
    const taskFound = await taskModel.find({})
    
    if(taskFound){
        res.status(200).json({success:true,message:"Task Found",taskFound})
    }else{
        res.status(400)
        throw new Error("Task Not Found")
    }
    
})




const getSingleTasks = asyncHander( async(req,res)=>{
  const {id} =  req.params
  
  if(id===undefined){
    res.status(400)
    throw new Error("Please provide proper id")
    }
    const singleTaskFound = await taskModel.findById({_id:id})
    
    if(singleTaskFound){
        res.status(200).json({success:true,message:"Task Found",singleTaskFound})
    }else{
        res.status(400)
        throw new Error("Task Not Found")

    }
    
})


const createTask = asyncHander( async(req,res)=>{
    const {task} = req.body 
    if(task===undefined){
        res.status(400)
        throw new Error("Please provide tasssssk name")
    }
    const newTask = await taskModel.create({task})

    if(newTask){
        res.status(200).json({success:true,message:"Task created",newTask})
    }else{
        res.status(400)
        throw new Error("Task Not Created")
    }

    
})

const updateTask = asyncHander( async(req,res)=>{
    const {id} =  req.params
    const newData  =req.body
    if(id===undefined){
        res.status(400)
        throw new Error("Please provide proper id")
    }
    const updatedTask = await taskModel.findByIdAndUpdate({_id:id}, newData ,{new:true})
    
    if(updatedTask){
        res.status(200).json({success:true,message:"Task Update",updatedTask})
    }else{
        res.status(400)
        throw new Error("Task Not Updated")

    }

    
})


const deleteTask = asyncHander( async(req,res)=>{
    const {id} =  req.params
    if(id===undefined){
        res.status(400)
        throw new Error("Please provide proper id")
    }
    const taskDeleted = await taskModel.findByIdAndDelete({_id:id})
    
    if(taskDeleted){
        res.status(200).json({success:true,message:"Task deleted",taskDeleted})
    }else{
        res.status(400)
        throw new Error("Task Not Deleted")

    }

    
})


module.exports = {getAllTasks, getSingleTasks, createTask, deleteTask, updateTask}