import React, { useState } from 'react'
import CreateTask from './createTask' 

function Home() {
  const [isClickTask, setClickTask] = useState(false);
  const [isClickStaff, setClickStaff] = useState(false);  
  const [isClickTaskCreate, setClickTaskCreate] = useState(false);  
  const [isClickCreate, setClickCreate] = useState(false);  
    
  const Tasks = () => {
    console.log("Tasks!")
    setClickTask(true)
  };

  const Staff = () => {
    console.log("Staff!")
    setClickStaff(true)
  };

  const TasksCreate = () => {
    console.log("TasksCreate!")
    setClickTaskCreate(true)
  };

  const Create = () => {
    console.log("Create!")
    setClickCreate(true)
  };

  return (
    <div>
      
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>
            <div><button onClick={Tasks}>Tasks</button></div>
            <div><button onClick={Staff}>Staff</button></div>
            
        </div>
        <div className='Home-right'>
            <div>Home right</div>
            <div className='Tasks-staff-create'>
                <div><button onClick={TasksCreate}>Tasks</button></div> 
                <div><button onClick={Create}>Create</button></div>
                
            </div>
            <div className='Task-white'>White
                
                {isClickTask && <div>Click Task</div>}
                {isClickStaff && <div>Click Staff</div>}
                {CreateTask()}
                {isClickCreate && <div>Click Create</div>}
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
