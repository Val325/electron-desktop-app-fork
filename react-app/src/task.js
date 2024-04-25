import React, { useState } from 'react'

function Task(props) {

    const [taskNum, setTaskNum] = useState(0);    
    const [tasks, setTasks] = useState([]);    

    const GetTasks = () => {

    
        const url = "http://localhost/tasks";

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTaskNum(data["task_num"]);
            setTasks(data["tasks"]);
        });

  }



    return (
        <div>
             { props.render &&
                
                    tasks.map(task =>
                        <div key={task.id}>
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
