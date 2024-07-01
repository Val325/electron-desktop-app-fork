import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import TokenContext from '../contextapi'
import {createContext, useContext } from 'react';

function Injs(props) {
    const [taskNum, setTaskNum] = useState(0);    
    const [tasks, setTasks] = useState([]);    
    const [isSet, setSend] = useState(false);    

    const [activePage, setActivePage] = useState(1);
    const [perTask, setPerTask] = useState(3); 
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
        //if (!getTask) GetTasks();
        //if (!getTask) getTask = true;

        // 
        for (let i = 0; i < num; i++) {
            const item = i + 1;
            content.push(<a key={item} onClick={() => setActivePage(item)}>{item}</a>);
        }
       return content;
    };

    const GetTasks = () => {
        const url = "http://localhost:7878/injs";
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
                console.log("lenght: ", data.len)
                console.log("Posts: ", data.list)
                console.log("First post.id: ", data.list[0].id)
                setTaskNum(data.len);
                setTasks(data.list);
                let numPaginate = Math.ceil(taskNum / perTask);
                console.log("num paginate: ", numPaginate)
                setAmountPaginate(numPaginate)
                setSend(true)
              }
        });
    }

    const ShowTaskId = () => {
        const url = "http://localhost:7878/tasks";


    }
    useEffect(() => {
       GetTasks() 
    }, [isSet])

    return (
        <div>
             { 
              props.render && tasks !== undefined && 
                tasks.slice(0 + perTask * (activePage), perTask + perTask * (activePage)).map(task =>
                    <div className='Tasks-container' key={task.id}>
                        <p>id: {task.id}</p>
                        <p>time: {task.time}</p>
                        <p>speed: {task.speed}</p>
                        <p>code: {task.code}</p>
                        <p>status: {task.status}</p>

                    </div>)

              }
              {
                props.render && 
                <div class="pagination">
                    <a onClick={minusPage}>&laquo;</a>
                      {console.log("amountPaginate: ", amountPaginate)}
                      {showPagination(amountPaginate)} 
                    <a onClick={addPage}>&raquo;</a>
                </div>
              }
        </div>
    )
}

export default Injs
