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
                <div>number tasks {taskNum} </div>
              }
        </div>
    )
}

export default Task
