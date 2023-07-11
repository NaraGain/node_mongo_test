const {ConnectDb} = require('../conc.js')
const tasks = require('../models/task')
const asyncWrapper = require('../middleware/asyncWrapper')



//get all task function or method
const getTask = asyncWrapper(
    async (req,res)=>{
         const getTaskAll = await tasks.find({})
         if(!getTaskAll){
            res.status(404).json({MessageChannel : "Not found data :;"})
         }
          res.status(200).json({getTaskAll})
         
})

//create task function
const createTask = asyncWrapper(
async (req,res)=>{
     let task_input = new tasks({
        title : req.body.title,
        desc : req.body.desc
     })

     task_input = await task_input.save()
     if(!task_input){
        return res.status(404).send('Task cannot be created')
     }
       
    
    res.status(200).json({task_input})
    
     
})

//get task by id method
const getTask_id = asyncWrapper(
async (req,res)=>{
    const {id: taskID} = req.params
    const taskId = await tasks.findOne({_id: taskID})
     if(!taskId){
        res.status(404).json({mgs:`No Task Found ${tasks}`})
        }
    res.status(200).json({taskId})
})

//update task by id method
const updateTask = asyncWrapper(
async(req,res)=>{
    const {id: taskID} = req.params
    const taskUpdate = await tasks.findByIdAndUpdate({_id: taskID},req.body)
    if(!taskUpdate){
         res.status(404).json({mgs:`No Task Found ${taskUpdate}`})
        }
    res.status(200).json({id: taskID,data:req.body})
})

//delete task method
const deleteTask = asyncWrapper( 
async (req,res)=>{
  const {id: TaskID} = req.params
  const taskDelete = await tasks.findByIdAndDelete({_id: TaskID})
    if(!taskDelete){
        res.status(404).json({mgs:`No Task Found ${taskDelete}`})
    }
    res.status(200).json({taskDelete})
})



//export module export function 
module.exports = {
    createTask,
    getTask,
    getTask_id,
    updateTask,
    deleteTask,
}