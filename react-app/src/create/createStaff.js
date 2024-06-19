import React, { useState, useEffect } from 'react'

function CreateStaff(props) {
    //const [id, setId] = useState(0);
    const [name, setName] = useState("");    
    const [statusVal, setStatus] = useState("");
    const [price, setPrice] = useState(0);
    const [deadline, setDeadline] = useState(0); 
    const [deskription, setDeskription] = useState("");
    const [templ, setTempl] = useState(""); 
    
    const GetTasks = () => {
        const url = "http://localhost:7878/aris";
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
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

    const TasksCreateButton = () => {
        //console.log("id: ", id)

        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/tasks";
        
        let body = {
            //"id": id,
            "title": name,
            "text": deskription,
            "templ": templ,
            "deadline": deadline,
            "status": statusVal,
            "price": price
        }; 

        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Bearer 349t4ujh89t4h78349h7",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
        .then((data) => { 
            console.log(data)

        });
    };



    return (
    <div>
        { props.render &&
        <div className='Create-task'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Task</div>
                <div className='Create-task-btn'><button onClick={TasksCreateButton}>Create</button></div>
            </div>
            <div className='Create-task-colums'>
                
                <div className='Create-task-left'>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        <input value={statusVal} onChange={e => setStatus(e.target.value)} placeholder="Status" />
                        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
                        <input value={deadline} onChange={e => setDeadline(e.target.value)} placeholder="Deadline" />

                </div>
                <div className='Create-task-right'>
                        <input value={deskription} onChange={e => setDeskription(e.target.value)} placeholder="Deskription" />
                        <input value={templ} onChange={e => setTempl(e.target.value)} placeholder="Templ" />                    
                </div>
            
            </div>
        </div> 
        }
    </div>
    )
}



export default CreateStaff

