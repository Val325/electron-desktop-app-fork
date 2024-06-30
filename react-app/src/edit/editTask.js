import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';

function EditTask(props) {
    //const [id, setId] = useState(0);
    const [name, setName] = useState("");    
    const [statusVal, setStatus] = useState("");
    
    const [inj, setInj] = useState();
    const [unit, setUnit] = useState();

    const [deadline, setDeadline] = useState(); 
    const [deskription, setDeskription] = useState("");
    const [templ, setTempl] = useState("");
    const {token, setToken} = useContext(TokenContext);
    let { id } = useParams(); 
    let navigate = useNavigate();
    
    const TasksUpdateButton = () => {
        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/tasks/" + id;
        
        let body = { 
            "title": name,
            "text": deskription,
            "deadline":  parseInt(deadline),
            "status": statusVal,
            "inj_id": parseInt(inj),
            "unit_id": parseInt(unit) 
        }; 

        fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
        .then((data) => { 
            console.log(data)
            navigate("/home");

        });
    };

    return (
    <div>
        { props.render &&
        <div className='Edit-task'>

            <div className='Edit-task-colums'>
                
                <div className='Edit-task-left'>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        <input value={statusVal} onChange={e => setStatus(e.target.value)} placeholder="Status" />
                        <input value={deadline} onChange={e => setDeadline(e.target.value)} placeholder="Deadline" />

                </div>
                <div className='Edit-task-right'>
                        <input value={deskription} onChange={e => setDeskription(e.target.value)} placeholder="Deskription" />
                        <input value={inj} onChange={e => setInj(e.target.value)} placeholder="injection" />
                        <input value={unit} onChange={e => setUnit(e.target.value)} placeholder="unit" />                
                </div>
                
            
            </div>
            <div><button className='button-link-edit' onClick={TasksUpdateButton} >Edit task</button></div>
        </div> 
        }
    </div>
    )
}



export default EditTask

