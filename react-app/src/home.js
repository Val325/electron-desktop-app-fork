import TaskId from './show/OneTask'
import CreateTask from './create/createTask'
import CreateUnit from './create/createUnit'
import CreateInjs from './create/createInjs'
import CreateTerms from './create/createTerms'
import Injs from './show/injs'
import Terms from './show/terms'
import Units from './show/units'
import Aris from './show/aris'
import Task from './show/task'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'

let Selection = [
  { id: 0, name: 'Aris', selection: false, edit: false},
  { id: 1, name: 'Units', selection: false, edit: false},
  { id: 2, name: 'Tasks', selection: false, edit: false},
  { id: 3, name: 'Injs', selection: false, edit: false},
  { id: 4, name: 'Terms', selection: false, edit: false},
];



const arisNum = 0
const unitsNum = 1
const tasksNum = 2
const injsNum = 3
const termsNum = 4
/*
let SelectionChangeData = [
  { id: 0, create: false, edit: false},
  { id: 1, create: false, edit: false},
];
*/
function Home(props) {
  const [tabState, setTab] = useState(
    Selection
  );
  const [idState, setStateId] = useState(0);
  const [isClickTaskClass, setClickTaskClass] = useState("");
  const [isClickCreateClass, setClickCreateClass] = useState("");
/*
  const [isSelectTask, setClickSelectTask] = useState(true);
  const [isSelectStaff, setClickSelectStaff] = useState(false);  
  const [isSelectUnit, setClickSelectUnit] = useState(false);

  const [isClickTask, setClickTask] = useState(false);
  const [isClickStaff, setClickStaff] = useState(false);  
  const [isClickUnit, setClickUnit] = useState(false);  

  const [isClickTasksCreate, setClickTasksCreate] = useState(false);  
  const [isClickStaffCreate, setClickStaffCreate] = useState(false); 
  const [isClickUnitCreate, setClickUnitCreate] = useState(false); 



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
*/
  const SelectionTab = (data) => {
      //console.log("id: ", data);
      
        const nextTab = tabState.map(tab => {
            if (data.id == tab.id){
                setStateId(data.id)
                console.log("id: ", idState)
                return {
                ...tab,
                selection: true,
                };
            }else {
                return {
                ...tab,
                selection: false,
                };
            }
            
         });
     setTab(nextTab); 
    }
  const SelectionEditTab = (id) => {
      //console.log("id: ", data);
      
        const nextTab = tabState.map(tab => {
            if (id == tab.id){

                return {
                ...tab,
                edit: true,
                };
            }else {
                return {
                ...tab,
                edit: false,
                };
            }
            
         });
     setTab(nextTab); 
    }
  const SelectionShowTab = (id) => {
      //console.log("id: ", data);
      
        const nextTab = tabState.map(tab => {
            if (id == tab.id){

                return {
                ...tab,
                edit: false,
                };
            }else {
                return {
                ...tab,
                edit: false,
                };
            }
            
         });
     setTab(nextTab); 
    }
/*
{<Task render={!tabState[id].edit} accessToken={props.accessToken} /> }
{ <CreateTask render={tabState[id].edit} accessToken={props.accessToken} />}
*/


const BtnSelectionCreateTask = (id) => {
    return <div>
            <div> 
                <button onClick={Task}>Tasks</button>
            </div>
            <div>
                <button onClick={SelectionEditTab(id)}>Create task</button> 
            </div>
          </div> 
  }      
 // };
/*
            <div><button onClick={Tasks}>Tasks</button></div>
            <div><button onClick={Staff}>Staff</button></div>
            <div><button onClick={Unit}>Unit</button></div>


                {isSelectTask && <div><button className={isClickTaskClass} onClick={TasksShow}>Tasks</button></div>} 
                {isSelectTask && <div><button className={isClickCreateClass} onClick={TasksCreate}>Create</button></div>}
                {isSelectUnit && <div><button className={isClickTaskClass} onClick={UnitShow}>Units</button></div>} 
                {isSelectUnit && <div><button className={isClickCreateClass} onClick={UnitCreate}>Create</button></div>}

                {<Task render={isClickTask} accessToken={props.accessToken} />}
                {<StaffManagers render={isSelectStaff} accessToken={props.accessToken} />}
                {<CreateUnit render={isClickUnitCreate} accessToken={props.accessToken} />}
                {<Units render={isClickUnit} accessToken={props.accessToken} />}
                {<CreateTask render={isClickTasksCreate} accessToken={props.accessToken} />} 
                
                {idState == 2 && }

*/

    useEffect(() => {
        if (tabState[idState].edit){
            setClickTaskClass("btn") 
            setClickCreateClass("select-btn")
        }else{
            setClickTaskClass("select-btn")
            setClickCreateClass("btn")
        }
    
    }, [tabState[idState].edit]);
  return (
    <div>
      
      <div className='Home-main'>
        <div className='Home-left'>
        {tabState.map(tab => (
          <li key={tab.id}>
            {<div><button onClick={() => SelectionTab(tab)}>{tab.name}</button></div>}
          </li>
        ))} 
               
     
       
        </div>
        <div className='Home-right'>
            <div className='Tasks-staff-create'>
                <div><button className={isClickCreateClass} onClick={() => SelectionEditTab(idState)}>Create</button></div>
                <div><button className={isClickTaskClass} onClick={() => SelectionShowTab(idState)}>Main</button></div>
            </div>
            <div className='Task-white'>

                {idState == arisNum && <Aris render={true} />}
                
                {idState == unitsNum && "Units"}
                {idState == unitsNum && tabState[idState].edit && <CreateUnit render={true} accessToken={props.accessToken} />}
                {idState == unitsNum && !tabState[idState].edit && <Units render={true} accessToken={props.accessToken} />}
                
                {idState == tasksNum && !tabState[idState].edit && <Task render={true} />}
                {idState == tasksNum && tabState[idState].edit && <CreateTask render={true} accessToken={props.accessToken} />}
                
                {idState == injsNum && !tabState[idState].edit && <Injs render={!tabState[idState].edit} />}
                {idState == injsNum && tabState[idState].edit && <CreateInjs render={true} accessToken={props.accessToken} />}
      
                {idState == termsNum && !tabState[idState].edit && <Terms render={true} />}
                {idState == termsNum && tabState[idState].edit && <CreateTerms render={true} />}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home


