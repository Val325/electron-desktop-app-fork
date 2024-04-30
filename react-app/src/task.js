import React, { useState, useEffect } from 'react'

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
            console.log(data);
            setTaskNum(data["task_num"]);
            setTasks(data["tasks"]);
        });

  }
    useEffect(() => {
        GetTasks()
    }, [props.render])

    return (
        <div>
             { props.render && 
                
                    tasks.map(task =>
                        <div key={task.id}>
                        <p>id: {task.id}</p>
                        <p>{task.title}</p>
                        <p>{task.text}</p>
                        <p>template: {task.templ}</p>
                        <p>deadline: {task.deadline}</p>
                        <p>status: {task.status}</p>
                        <p>price: {task.price}</p>
                    </div>)
                
              }
        </div>
    )
}

export default Task
