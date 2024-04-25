import React, { useState } from 'react'

function CreateTask(props) {

    const [name, setName] = useState("");    
    const [statusVal, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [deadline, setDeadline] = useState(""); 
    const [deskription, setDeskription] = useState("");
    const [templ, setTempl] = useState(""); 

    const TasksCreateButton = () => {
        console.log("Name: ", name)
        console.log("statusVal: ", statusVal)
        console.log("price: ", price)
        console.log("deadline: ", deadline)
        console.log("deskription: ", deskription)
        console.log("templ: ", templ)
        console.log("Is render: ", props.render)
        //Здесь отправить http запрос к серверу
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



export default CreateTask

