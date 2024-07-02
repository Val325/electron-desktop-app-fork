import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';

function Units(props) {
    const [unitNum, setUnitNum] = useState(0);    
    const [units, setUnits] = useState([]);    
    let navigate = useNavigate();
    const [activePage, setActivePage] = useState(1);
    const [perTask, setPerTask] = useState(2); 
    const [amountPaginate, setAmountPaginate] = useState(1); 
    const {token, setToken} = useContext(TokenContext);
    
    const addPage = () => {
        if (activePage < amountPaginate) {
            setActivePage(activePage + 1)
        }
    }

    const minusPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1)
        }
    }

    const showPagination = num => {
        let content = [];
        for (let i = 0; i < num; i++) {
            const item = i + 1;
            content.push(<a key={item} onClick={() => setActivePage(item)}>{item}</a>);
        }
        return content;
    };

    const GetUnits = () => {
        const url = "http://localhost:7878/unit";
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
                'Content-Type': 'text/plain'
            },
            }).then((response) => response.json())
            .then((data) => {
              if (data === undefined){
                console.log("undefined")
              }else{  
                console.log(data);
                setUnitNum(data["unit_num"]);
                setUnits(data["units"]);
                let numPaginate = Math.ceil(unitNum / perTask);
                console.log("num paginate: ", numPaginate)
                setAmountPaginate(numPaginate)
                //setTaskNum(data["task_num"]);
                //setTasks(data["tasks"]);
              }

        });
        

    }


    useEffect(() => {
        if(token === undefined) {
            navigate("/")
        }
    
    }, [token]);

    useEffect(() => {
        GetUnits()
    }, [props.render])
    /*


     */
    return (
        <div>
             { 
              props.render && units !== undefined && 
                units.slice(0 + 2 * (activePage-1), 2 + 2 * (activePage-1)).map(unit =>
                    <div className='Tasks-container' key={unit.id}>
                        <p>id: {unit.id}</p>
                        <p>username: {unit.username}</p>
                        <p>email: {unit.email}</p>
                        <p>bio: {unit.bio}</p>
                        <p>task: {unit.task}</p>
                        <p>active: {unit.active ? "true" : "false"}</p>
                        <button className='button-link'><Link to={"/home/unit/" + unit.id} >Show task</Link></button>
                    </div>)                
              }
              {
                props.render && units !== undefined &&
                <div class="pagination">
                    <a onClick={minusPage}>&laquo;</a>
                      {showPagination(amountPaginate)} 
                    <a onClick={addPage}>&raquo;</a>
                </div>
              }
        </div>
    )
}

export default Units
