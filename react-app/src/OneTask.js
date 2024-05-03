import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

function TaskId(props) {

    //const [taskId, setTaskNum] = useState(0);    
    const [task, setTask] = useState([]);    
    let { id } = useParams();

    useEffect(() => {
        console.log("reboot page")
        console.log("id: ", id)
    }, [id])

    const GetTask = () => {
        const url = "http://localhost:7878/tasks" + "/" + id;
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTask(data)
        });
    }
    useEffect(() => {
        GetTask()
    }, [id])

    return (
        <div>
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>

            
        </div>
        <div className='Home-right'>
            <div>Home right</div>
            <div className='Tasks-staff-create'>

                
            </div>
            <div className='Task-white'>White
             { task && 
                    <div className='Tasks-container' key={task.id}>
                        <p>id: {task.id}</p>
                        <p>{task.title}</p>
                        <p>{task.text}</p>
                        <p>template: {task.templ}</p>
                        <p>deadline: {task.deadline}</p>
                        <p>status: {task.status}</p>
                        <p>price: {task.price}</p>
                    </div>                
              }
                <div className='button-link'><button ><Link to={"/home/"} >Back</Link></button></div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default TaskId
