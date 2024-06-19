import React, { useState, useEffect } from 'react'

function CreateUnit(props) {
    //const [id, setId] = useState(0);
    const [name, setName] = useState("");    
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState(false); 
    const [task, setTask] = useState(0);

   /* 
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
            //setId(data["task_num"]);

        });

    }

    useEffect(() => {
        GetTasks()
    }, [props.render])
    */
    const UnitCreateButton = () => {
        //console.log("id: ", id)
        /*
        console.log("Name: ", name)
        console.log("statusVal: ", statusVal)
        console.log("price: ", price)
        console.log("deadline: ", deadline)
        console.log("deskription: ", deskription)
        console.log("templ: ", templ)
        console.log("Is render: ", props.render)
        */

        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/units";
        let body = {
            //"id": id,
            "username": name,
            "bio": bio,
            "email": email,
            "active": active,
            "task": parseInt(task),
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
const str2bool = (value) => {
   if (value && typeof value === "string") {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
   }
   return value;
}

//                        

    return (
    <div>
        { props.render &&
        <div className='Create-task'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Unit</div>
                <div className='Create-task-btn'><button onClick={UnitCreateButton}>Create</button></div>
            </div>
            <div className='Create-task-colums'>
                
                <div className='Create-task-left'>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                        <input value={bio} onChange={e => setBio(e.target.value)} placeholder="Bio" />
                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

                </div>
                <div className='Create-task-right'>
                        <input value={active} onChange={e => setActive(str2bool(e.target.value))} placeholder="Active" />
                        <input value={task} onChange={e => setTask(e.target.value)} placeholder="Task" />
                </div>
            
            </div>
        </div> 
        }
    </div>
    )
}



export default CreateUnit

