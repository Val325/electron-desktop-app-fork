import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
function Task(props) {
    const [taskNum, setTaskNum] = useState(0);    
    const [tasks, setTasks] = useState([]);    

    const GetTasks = () => {
        const url = "http://localhost:7878/tasks";
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
                setTaskNum(data["task_num"]);
                setTasks(data["tasks"]);
              }

        });
        

    }

    const ShowTaskId = () => {
        const url = "http://localhost:7878/tasks";


    }
    useEffect(() => {
        GetTasks()
    }, [props.render])
    /*
        <p>{task.text}</p>
        <p>template: {task.templ}</p>
        <p>deadline: {task.deadline}</p>
        <p>status: {task.status}</p>
        <p>price: {task.price}</p>
     */
    return (
        <div>
             { 
              props.render && tasks !== undefined && 
                tasks.map(task =>
                    <div className='Tasks-container' key={task.id}>
                        <p>id: {task.id}</p>
                        <p>{task.title}</p>
                        <button className='button-link'><Link to={"/home/task/" + task.id} >Show task</Link></button>
                    </div>)                
              }
        </div>
    )
}

export default Task
