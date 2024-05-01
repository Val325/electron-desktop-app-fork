import React, {useEffect , useState} from 'react'
import CreateTask from './createTask' 
import StaffManagers from './Staffmanagers' 
import Task from './task'
import TaskId from './OneTask'

function Home() {

  const [isClickTask, setClickTask] = useState(false);
  const [isClickStaff, setClickStaff] = useState(false);  
  const [isClickTaskCreate, setClickTaskCreate] = useState(false);  
  const [isClickCreate, setClickCreate] = useState(false);  

  const Tasks = () => {
    console.log("Tasks!")
    setClickCreate(false)
    setClickTaskCreate(false)
    setClickStaff(false)
    setClickTask(true)
  };

  const Staff = () => {
    console.log("Staff!")
    setClickTask(false)
    setClickCreate(false)
    setClickTaskCreate(false)
    setClickStaff(true)
  };

  const TasksCreate = () => {
    console.log("TasksCreate!")
    setClickTask(false)
    setClickStaff(false)
    setClickCreate(false)
    setClickTaskCreate(true)
  };

  const Create = () => {
    console.log("Create!")
    setClickTask(false)
    setClickStaff(false)
    setClickTaskCreate(false)
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
                
                {<Task render={isClickTask} />}
                {<StaffManagers render={isClickStaff} />}
                {<TaskId render={isClickTaskCreate} id={0} />}
                {<CreateTask render={isClickCreate} />}

            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
