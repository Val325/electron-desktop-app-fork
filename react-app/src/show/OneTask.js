import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';

function TaskId(props) {

    //const [taskId, setTaskNum] = useState(0);    
    const [task, setTask] = useState([]);    
    let { id } = useParams();
    let navigate = useNavigate();
    const {token, setToken} = useContext(TokenContext); 
    useEffect(() => {
        console.log("reboot page")
        console.log("id: ", id)
    }, [id])

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                //here return to home
                navigate("/home");
            }
        };
        window.addEventListener('keydown', handleEsc);
    }, []) 

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

    const DeleteTask = () => {
        const url = "http://localhost:7878/tasks" + "/" + id;
        fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTask(data)
            navigate("/home");
        }); 
    }
    const EditTask = () => {
        //<EditTask id={id} />
        navigate("/home/task/edit/" + id);
    }
    useEffect(() => {
        GetTask()
    }, [id])
    useEffect(() => {
        if(token === undefined) {
            navigate("/")
        }
    
    }, [token]);
    return (
        <div>
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>

            
        </div>
        <div className='Home-right'>
            <div className='Tasks-staff-create'>

                
            </div>
            <div className='Task-white'>
             { task &&   
                    <div className='Tasks-container' key={task.id}>
                        <h1>{task.title}</h1>
                        <p>id: {task.id}</p>  
                        <p>{task.text}</p>
                        <p>template: {task.templ}</p>
                        <p>deadline: {task.deadline}</p>
                        <p>status: {task.status}</p>
                        <p>price: {task.price}</p>
                    </div>                
              }
              <div className='buttons-link'>
                <Link to={"/home/"} ><button className='button-link'>Back</button></Link>
                <div><button className='button-link-delete' onClick={DeleteTask} >Delete task</button></div>
                <div><button className='button-link-delete' onClick={EditTask} >Edit task</button></div>

              </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default TaskId
