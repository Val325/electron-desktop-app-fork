import React, { useState, useEffect } from 'react'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function CreateTask(props) {
    //const [id, setId] = useState(0);
    const {token, setToken} = useContext(TokenContext);
    const [name, setName] = useState("");    
    const [statusVal, setStatus] = useState("");
    //const [price, setPrice] = useState(0);
    const [deadline, setDeadline] = useState(0); 
    const [deskription, setDeskription] = useState("");
    //const [templ, setTempl] = useState(""); 
    let navigate = useNavigate();
    
    const [injectID, setInjectID] = useState(0);
    const [unitID, setUnitID] = useState(0);

    const GetTasks = () => {
        const url = "http://localhost:7878/tasks";
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            //setId(data["task_num"]);

        });

    }

    useEffect(() => {
        GetTasks()
    }, [props.render])

    useEffect(() => {
        if(token === undefined) {
            navigate("/")
        } 
    }, [token]);

    const TasksCreateButton = () => {
        //console.log("id: ", id)
        /*console.log("Name: ", name)
        console.log("statusVal: ", statusVal)
        console.log("price: ", price)
        console.log("deadline: ", deadline)
        console.log("deskription: ", deskription)
        console.log("templ: ", templ)
        console.log("Is render: ", props.render)
        */

        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/tasks";
        /* 
        let body = {
            //"id": id,
            "title": name,
            "text": deskription,
            "templ": templ,
            "deadline": parseInt(deadline),
            "status": statusVal,
            "price": parseInt(price)
        };*/ 
        let body = {
            //"id": id,
            "title": name,
            "text": deskription,
            "deadline": parseInt(deadline),
            "status": statusVal,
            "inj_id": parseInt(injectID),
            "unit_id": parseInt(unitID)
        };
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
        .then((data) => { 
            console.log(data)

        });
    };


//                        <input value={templ} onChange={e => setTempl(e.target.value)} placeholder="Templ" />   
    return (
    <div>
        { props.render &&
        <div className='Create-task'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Task</div>
                <div className='Create-task-btn'><button onClick={TasksCreateButton}>Create</button></div>
            </div>
            <div className='Create-task-colums'>
                
                <div className='Create-task-left'>
                        Name
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        Status
                        <input value={statusVal} onChange={e => setStatus(e.target.value)} placeholder="Status" />
                        Deadline
                        <input value={deadline} onChange={e => setDeadline(e.target.value)} placeholder="Deadline" />
                        InjectId
                        <input value={injectID} onChange={e => setInjectID(e.target.value)} placeholder="InjectId" />

                </div>
                <div className='Create-task-right'>
                        Deskription
                        <input value={deskription} onChange={e => setDeskription(e.target.value)} placeholder="Deskription" />
                        UnitId
                        <input value={unitID} onChange={e => setUnitID(e.target.value)} placeholder="UnitId" />                
                </div>
            
            </div>
        </div> 
        }
    </div>
    )
}



export default CreateTask

