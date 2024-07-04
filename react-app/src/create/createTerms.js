import React, { useState, useEffect } from 'react'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'

function CreateTerms(props) {
    //const [id, setId] = useState(0);
    const {token, setToken} = useContext(TokenContext);
    const [key, setKey] = useState("");    
    const [regTime, setRegTime] = useState(0);
    //const [price, setPrice] = useState(0);
    const [trust, setTrust] = useState(0); 
    //const [templ, setTempl] = useState(""); 
    let navigate = useNavigate();
    
    const [injectID, setInjectID] = useState(0);
    const [unitID, setUnitID] = useState(0);

    const GetTasks = () => {
        const url = "http://localhost:7878/terms";
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
        if(token === undefined || token === null || token === "") {
            navigate("/")
        } 
    }, [token]);

    const TermsCreateButton = () => {
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
        const url = "http://127.0.0.1:7878/terms";
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
            "key": key,
            "reg_time": parseInt(regTime),
            "trust": trust == 1 ? true : false, 
        };
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json"
            },
//            body: JSON.stringify(body),
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
                <div className='Create-task-btn'><button onClick={TermsCreateButton}>Create Term</button></div>
            </div>

        </div> 
        }
    </div>
    )
}



export default CreateTerms

