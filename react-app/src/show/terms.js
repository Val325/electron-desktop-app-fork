import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams, redirect} from 'react-router-dom'

function Terms(props) {
    const [taskNum, setTaskNum] = useState(0);    
    const [tasks, setTasks] = useState([]);    

    const [activePage, setActivePage] = useState(1);
    const [perTask, setPerTask] = useState(4); 
    const [amountPaginate, setAmountPaginate] = useState(1); 
    const {token, setToken} = useContext(TokenContext);
    let navigate = useNavigate();

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
              if (data === undefined){
                console.log("undefined")
              }else{  
                //console.log(data);
                //console.log("lenght: ", data.len)
                //console.log("Posts: ", data.list)
                //console.log("First post.id: ", data.list[0].id)
                setTaskNum(data.len);
                setTasks(data.list);
                let numPaginate = Math.ceil(taskNum / perTask);
                //console.log("num paginate: ", numPaginate)
                setAmountPaginate(numPaginate)
              }
        });
    }

    const ShowTaskId = () => {
        const url = "http://localhost:7878/tasks";


    }
    useEffect(() => {
        GetTasks()
    }, [props.render])
    //                        <button className='button-link'><Link to={"/home/task/" + task.id} >Show task</Link></button>
    useEffect(() => {
        if(token === undefined || token === null || token === "") {
            navigate("/")
        }
    
    }, [token]);
    return (
        <div>
             { 
              props.render &&  
                tasks.slice(0 + perTask * (activePage-1), perTask + perTask * (activePage-1)).map(task =>
                    <div className='Tasks-container' key={task.id}>
                        <p>id term: {task.id}</p>

                    </div>)

              }
              {
                props.render && tasks !== undefined &&
                <div class="pagination">
                    <a onClick={minusPage}>&laquo;</a>
                      {showPagination(amountPaginate)} 
                    <a onClick={addPage}>&raquo;</a>
                </div>
              }
        </div>
    )
}

export default Terms
