import React, { useState, useEffect } from 'react'

function TaskId(props) {

    //const [taskId, setTaskNum] = useState(0);    
    const [task, setTask] = useState([]);    

    const GetTask = () => {
        const url = "http://localhost:7878/tasks" + "/" + props.id;
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTask(data)
        });

  }
    useEffect(() => {
        GetTask()
    }, [props.render])

    return (
        <div>
             { props.render && 
                    <div className='Tasks-container' key={task.id}>
                        <p>id: {task.id}</p>
                        <p>{task.title}</p>
                        <p>{task.text}</p>
                        <p>template: {task.templ}</p>
                        <p>deadline: {task.deadline}</p>
                        <p>status: {task.status}</p>
                        <p>price: {task.price}</p>
                    </div>
                
              }
        </div>
    )
}

export default TaskId
