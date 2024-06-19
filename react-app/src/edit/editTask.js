import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function EditTask(props) {
    //const [id, setId] = useState(0);
    const [name, setName] = useState("");    
    const [statusVal, setStatus] = useState("");
    const [price, setPrice] = useState(0);
    const [deadline, setDeadline] = useState(0); 
    const [deskription, setDeskription] = useState("");
    const [templ, setTempl] = useState(""); 
    let { id } = useParams(); 
    let navigate = useNavigate();
    
    const TasksUpdateButton = () => {
        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/tasks/" + id;
        
        let body = {
            //"id": id,
            "title": name,
            "text": deskription,
            "templ": templ,
            "deadline": deadline,
            "status": statusVal,
            "price": price
        }; 

        fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer 349t4ujh89t4h78349h7",
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
                        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
                        <input value={deadline} onChange={e => setDeadline(e.target.value)} placeholder="Deadline" />

                </div>
                <div className='Edit-task-right'>
                        <input value={deskription} onChange={e => setDeskription(e.target.value)} placeholder="Deskription" />
                        <input value={templ} onChange={e => setTempl(e.target.value)} placeholder="Templ" />                    
                </div>
                
            
            </div>
            <div><button className='button-link-edit' onClick={TasksUpdateButton} >Edit task</button></div>
        </div> 
        }
    </div>
    )
}



export default EditTask

