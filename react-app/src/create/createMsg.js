import React, { useState, useEffect } from 'react'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function CreateMsg(props) {
    //const [id, setId] = useState(0);
    const {token, setToken} = useContext(TokenContext);
    const [idUnit, setIdUnit] = useState(0);
    const [title, setTitle] = useState(""); 
    const [text, setText] = useState(""); 

    //const [name, setName] = useState("");    
    //const [statusVal, setStatus] = useState("");
    //const [price, setPrice] = useState(0);
    //const [deadline, setDeadline] = useState(0); 
    //const [deskription, setDeskription] = useState("");
    //const [templ, setTempl] = useState(""); 
    let navigate = useNavigate();
    
    //const [injectID, setInjectID] = useState(0);
    //const [unitID, setUnitID] = useState(0);

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
        setIdUnit(props.idunit)
    }, [props.idunit])
    useEffect(() => {
        if(token === undefined || token === null || token === "") {
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
        setIdUnit(props.idunit)
        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/units/" + idUnit + "/messages";
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
            "title": title,
            "text": text,
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
        <div className='Create-task-small'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Task</div>
                <div className='Create-task-btn'><button onClick={TasksCreateButton}>Create</button></div>
            </div>
            <div className='Create-task-colums'>
                
                <div className='Create-task-left'>
                        title
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div className='Create-task-right'>
                        text
                        <input value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
              
                </div>
            
            </div>
        </div> 
        }
    </div>
    )
}



export default CreateMsg
