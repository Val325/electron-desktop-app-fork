import React, {useEffect , useState} from 'react'
import CreateTask from './createTask' 
import StaffManagers from './Staffmanagers' 
import Task from './task'
import TaskId from './OneTask'
import CreateUnit from './createUnit'
import Units from './units'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function Home(props) {
  const [isSelectTask, setClickSelectTask] = useState(true);
  const [isSelectStaff, setClickSelectStaff] = useState(false);  
  const [isSelectUnit, setClickSelectUnit] = useState(false);

  const [isClickTask, setClickTask] = useState(false);
  const [isClickStaff, setClickStaff] = useState(false);  
  const [isClickUnit, setClickUnit] = useState(false);  

  const [isClickTasksCreate, setClickTasksCreate] = useState(false);  
  const [isClickStaffCreate, setClickStaffCreate] = useState(false); 
  const [isClickUnitCreate, setClickUnitCreate] = useState(false); 

  const [isClickTaskClass, setClickTaskClass] = useState("");
  const [isClickCreateClass, setClickCreateClass] = useState("");

  const Tasks = () => {
    console.log("Tasks!")
    setClickTask(true)
    setClickUnit(false)
    setClickSelectTask(true)

    setClickSelectStaff(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
    setClickSelectUnit(false)
    setClickUnitCreate(false)
  };

  const Staff = () => {
    console.log("Staff!")
    setClickUnit(false)
    setClickSelectTask(false)
    setClickSelectStaff(true)
    setClickTask(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
    setClickSelectUnit(false)
    setClickUnitCreate(false)
  };

  const Unit = () => {
    console.log("Unit!")
    setClickSelectUnit(true)
    setClickUnit(true)
    
      setClickSelectTask(false)
    setClickSelectStaff(false)
    setClickTask(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(false)
    setClickUnitCreate(false)
  };

  const TasksCreate = () => {
    console.log("TasksCreate!")
    console.log("isSelectTask ", isSelectTask)
    if (isSelectTask) {
        setClickUnit(false)

        //toggle
        setClickTasksCreate(true)
        setClickSelectTask(true)

        // turn off
        setClickSelectStaff(false)
        setClickTask(false)
        setClickStaff(false)
        setClickStaffCreate(false)
        setClickSelectUnit(false)
        setClickUnitCreate(false)

    }
    setClickTaskClass("btn")
    setClickCreateClass("select-btn")
  };

  const StaffCreate = () => {
    console.log("StaffCreate!")
    setClickUnit(false)
    setClickSelectTask(false)
    setClickSelectStaff(false)
    setClickTask(false)
    setClickStaff(false)
    setClickTasksCreate(false)
    setClickStaffCreate(true)
    setClickSelectUnit(false)
    setClickUnitCreate(false)
  };

  const UnitCreate = () => {
    console.log("UnitCreate!")

    if (isSelectUnit){
        setClickSelectTask(false)
        setClickTask(false)

        setClickUnitCreate(true)
        setClickSelectUnit(true)

        setClickUnit(false)

        //setClickSelectUnit(false)
        //setClickSelectTask(false)
        setClickSelectStaff(false)
        //setClickTask(false)
        setClickStaff(false)
        setClickTasksCreate(false)
        setClickStaffCreate(false)
    }
    setClickTaskClass("btn")
    setClickCreateClass("select-btn")
  };

  const TasksShow = () => {
    console.log("TasksShow!")
    if (isSelectTask) {
        setClickUnitCreate(false)
        setClickSelectUnit(false)
        setClickUnit(false)

        //toggle
        setClickSelectTask(true)
        setClickTask(true)

        //turn off
        setClickSelectStaff(false)
        setClickStaff(false)
        setClickTasksCreate(false)
        setClickStaffCreate(false)
        setClickSelectUnit(false)
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
    setClickSelectUnit(false)
    setClickUnit(false)

  };

  const UnitShow = () => {
    console.log("UnitShow!")
    if (isSelectUnit){
        setClickUnitCreate(false)
        setClickUnit(true)

        setClickSelectUnit(false)
        setClickSelectTask(false)
        setClickSelectStaff(false)
        setClickTask(false)
        setClickStaff(false)
        setClickTasksCreate(false)
        setClickStaffCreate(false)
        setClickSelectUnit(true)
    }
    setClickTaskClass("select-btn")
    setClickCreateClass("btn")
  };
    
  return (
    <div>
      
      <div className='Home-main'>
        <div className='Home-left'>
            <div><button onClick={Tasks}>Tasks</button></div>
            <div><button onClick={Staff}>Staff</button></div>
            <div><button onClick={Unit}>Unit</button></div>
            
        </div>
        <div className='Home-right'>
            <div className='Tasks-staff-create'>
                {isSelectTask && <div><button className={isClickTaskClass} onClick={TasksShow}>Tasks</button></div>} 
                {isSelectTask && <div><button className={isClickCreateClass} onClick={TasksCreate}>Create</button></div>}
                {isSelectUnit && <div><button className={isClickTaskClass} onClick={UnitShow}>Units</button></div>} 
                {isSelectUnit && <div><button className={isClickCreateClass} onClick={UnitCreate}>Create</button></div>}

            </div>
            <div className='Task-white'>
                {<Task render={isClickTask} />}
                {<StaffManagers render={isSelectStaff} />}
                {<CreateUnit render={isClickUnitCreate} />}
                {<Units render={isClickUnit} />}
                {<CreateTask render={isClickTasksCreate} />} 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home


