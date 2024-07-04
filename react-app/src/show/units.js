import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';

function Units(props) {
    const [unitNum, setUnitNum] = useState(1);    
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
        const url = "http://localhost:7878/units";
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'text/plain'
            },
            }).then((response) => response.json())
            .then((data) => {
              if (data === undefined){
                console.log("undefined")
              }else{  
                console.log(data);
                setUnitNum(data.len);
                setUnits(data.list);
                let numPaginate = Math.ceil(unitNum / perTask);
                //console.log("num paginate: ", numPaginate)
                setAmountPaginate(numPaginate)
                //console.log("units: ", units)
                //console.log("first: ", 0 + perTask * (activePage))
                //console.log("two: ", perTask + perTask * (activePage))

              }

        });
        

    }


    useEffect(() => {
        if(token === undefined || token === null || token === "") {
            navigate("/")
        }
    
    }, [token]);

    useEffect(() => {
        GetUnits()
    }, [unitNum])
    /*


     */
    return (
        <div>
             { 
              props.render &&  
                units.slice(0 + perTask * (activePage-1), perTask + perTask * (activePage-1)).map(unit =>
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
