const express =require('express')
const router =  express.Router()
const {getAllTasks,getSingleTasks,createTask,deleteTask,updateTask} =  require('../controllers/taskControllers')

router.get('/getAllTasks', getAllTasks)
router.get('/getSingleTasks/:id', getSingleTasks)
router.post('/createTask', createTask)
router.delete('/deleteTask/:id', deleteTask)
router.patch('/updateTask/:id', updateTask)


module.exports = router