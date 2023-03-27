import React, { useEffect, useState } from 'react'
import './MainSection.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import {AiFillDelete} from 'react-icons/ai'
import {FiEdit2} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";



const MainSection = () => {
  const [task, setTask] =  useState({task:""})
  const[allTask, setAllTask] = useState([])
  const navigate = useNavigate()


  const getAllTasks = async ()=>{
    const response = await axios.get('http://localhost:5000/api/task/getAllTasks')
    if(response.data.success ===true){
      setAllTask(response.data.taskFound)
    }
  }
  const createTask = async ()=>{
    if(task.task!==""){
      const response = await axios.post('http://localhost:5000/api/task/createTask', task)
      toast.info(response.data.message)
      getAllTasks()
    }else{
      toast.info("Please Provide Task name")
    }

  }

  const deleteTask = async (id)=>{
    const response = await axios.delete(`http://localhost:5000/api/task/deleteTask/${id}`)
    toast.info(response.data.message)
    getAllTasks()
  }

  const UpdatePageShower = async (id)=>{
    navigate(`/update/${id}`)
  }



  useEffect(()=>{
    getAllTasks()
  },[])




  return (
    <div className='MainSection'>
      <h3 className='heading'>Enter Task Details to manage your daily tasks</h3>
      <input id="task" className='taskInput' type="text" placeholder='Enter Task Details' onChange={(e)=>setTask({...task,[e.target.id]:e.target.value})}/>
      <button className='submitButton' onClick={createTask}>Submit</button>

      <div className="allTasks">
        {allTask.map((item)=>{
          return(
            <div key={item.id} className='task_div'>
              <h5>{item.task}</h5>
              <p>{item.createdAt.slice(0,10)}</p>
              <div className='icon_div'>
              <AiFillDelete className='delete_button' onClick={()=>deleteTask(item._id)}/>
              <FiEdit2 className='delete_button' onClick={()=>UpdatePageShower(item._id)}/>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainSection