import React, {useEffect , useState} from 'react'
import CreateTask from './createTask' 
import StaffManagers from './Staffmanagers' 
import Task from './task'
import TaskId from './OneTask'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function Home(props) {
  const [isSelectTask, setClickSelectTask] = useState(true);
  const [isSelectStaff, setClickSelectStaff] = useState(false);  

  const [isClickTask, setClickTask] = useState(false);
  const [isClickStaff, setClickStaff] = useState(false);  
  
  const [isClickTasksCreate, setClickTasksCreate] = useState(false);  
  const [isClickStaffCreate, setClickStaffCreate] = useState(false); 

  const [isClickTaskClass, setClickTaskClass] = useState("");
  const [isClickCreateClass, setClickCreateClass] = useState("");

  const Tasks = () => {
    console.log("Tasks!")
    setClickSelectStaff(false)
    setClickTask(true)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
    setClickSelectTask(true)

  };

  const Staff = () => {
    console.log("Staff!")
    setClickSelectTask(false)
    setClickSelectStaff(true)
    setClickTask(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
  };

  const TasksCreate = () => {
    console.log("TasksCreate!")
    console.log("isSelectTask ", isSelectTask)
    if (isSelectTask) {
        //toggle
        setClickTasksCreate(true)
        setClickSelectTask(true)

        // turn off
        setClickSelectStaff(false)
        setClickTask(false)
        setClickStaff(false)
        setClickStaffCreate(false)
    }
    setClickTaskClass("btn")
    setClickCreateClass("select-btn")
  };

  const StaffCreate = () => {
    console.log("StaffCreate!")
    setClickSelectTask(false)
    setClickSelectStaff(false)
    setClickTask(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(true)
  };
  const TasksShow = () => {
    console.log("TasksShow!")
    if (isSelectTask) {
        //toggle
        setClickSelectTask(true)
        setClickTask(true)

        //turn off
        setClickSelectStaff(false)
        setClickStaff(false)
        setClickTasksCreate(false)
        setClickStaffCreate(false)

    }
    setClickTaskClass("select-btn")
    setClickCreateClass("btn")
  };

  const StaffShow = () => {
    console.log("StaffShow!")
    setClickSelectTask(false)
    setClickSelectStaff(false)
    setClickTask(false)
    setClickStaff(true)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
  };
    
  return (
    <div>
      
      <div className='Home-main'>
        <div className='Home-left'>
            <div><button onClick={Tasks}>Tasks</button></div>
            <div><button onClick={Staff}>Staff</button></div>
            
        </div>
        <div className='Home-right'>
            <div className='Tasks-staff-create'>
                <div><button className={isClickTaskClass} onClick={TasksShow}>Tasks</button></div> 
                <div><button className={isClickCreateClass} onClick={TasksCreate}>Create</button></div>
            </div>
            <div className='Task-white'>
                {<Task render={isClickTask} />}
                {<StaffManagers render={isSelectStaff} />}
                {} 
                {<CreateTask render={isClickTasksCreate} />} 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home


