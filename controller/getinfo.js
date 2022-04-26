const {ConnectDb} = require('../conc.js')
const task = require('../models/task')
const asyncWrapper = require('../middleware/asyncWrapper')



//get all task function or method
const getAll = asyncWrapper(
    async (req,res)=>{
         const getTaskAll = await task.find({})
          res.status(200).json({getTaskAll})
})

//create task function
const createTask = asyncWrapper(
async (req,res)=>{
    const Task = await task.create(req.body)
     res.status(200).json(req.body)
})

//get task by id method
const getTask = asyncWrapper(
async (req,res)=>{
    const {id: taskID} = req.params
    const taskId = await task.findOne({_id: taskID})
     if(!taskId){
        res.status(404).json({mgs:`No Task Found ${task}`})
        }
    res.status(200).json({taskId})
})

//update task by id method
const updateTask = asyncWrapper(
async(req,res)=>{
    const {id: taskID} = req.params
    const taskUpdate = await task.findByIdAndUpdate({_id: taskID},req.body)
    if(!taskUpdate){
         res.status(404).json({mgs:`No Task Found ${taskUpdate}`})
        }
    res.status(200).json({id: taskID,data:req.body})
})

//delete task method
const deleteTask = asyncWrapper( 
async (req,res)=>{
  const {id: TaskID} = req.params
  const taskDelete = await task.findByIdAndDelete({_id: TaskID})
    if(!taskDelete){
        res.status(404).json({mgs:`No Task Found ${taskDelete}`})
    }
    res.status(200).json({taskDelete})
})



//export module export function 
module.exports = {
    createTask,
    getAll,
    getTask,
    updateTask,
    deleteTask,
}