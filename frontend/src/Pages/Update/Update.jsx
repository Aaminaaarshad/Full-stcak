import axios from 'axios'
import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'


const Update = () => {
  const location = useLocation()  
  const id = location.pathname.substring(location.pathname.lastIndexOf('/')+1)  
  const [task, setTask] =  useState({task:""})

  const UpdateTask =  async (id)=>{
    const response = await axios.patch(`http://localhost:5000/api/task/updateTask/${id}`, task)
    toast.info(response.data.message)
  }
  return (
    <div className='MainSection'>
    <h3 className='heading'>Enter Task Details to manage your daily tasks</h3>
    <input id="task" className='taskInput' type="text" placeholder='Enter Task Details' onChange={(e)=>setTask({...task,[e.target.id]:e.target.value})}/>
    <button className='submitButton' onClick={()=>UpdateTask(id)}>Submit</button>
    </div>
  )
}

export default Update