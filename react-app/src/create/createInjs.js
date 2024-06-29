import React, { useState, useEffect } from 'react'

function CreateInjs(props) {
    //const [id, setId] = useState(0);
    const [time, setTime] = useState(0);    
    const [speed, setSpeed] = useState(0);
    const [term, setTerm] = useState(0);
    const [code, setCode] = useState("17NF");
    const [statusInj, setStatusInj] = useState("on_server");


    //const [price, setPrice] = useState(0);
    //const [deadline, setDeadline] = useState(0); 
    //const [deskription, setDeskription] = useState("");
    //const [templ, setTempl] = useState(""); 
    
    const [injectID, setInjectID] = useState(0);
    const [unitID, setUnitID] = useState(0);

    const GetInjs = () => {
        const url = "http://localhost:7878/injs";
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + props.accessToken,
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            //console.log(token);
            //setId(data["task_num"]);

        });

    }

    useEffect(() => {
        GetInjs()
    }, [props.render])

    const InjsCreateButton = () => {
        //console.log("id: ", id)
        /*console.log("Name: ", name)
        console.log("statusVal: ", statusVal)
        console.log("price: ", price)
        console.log("deadline: ", deadline)
        console.log("deskription: ", deskription)
        console.log("templ: ", templ)
        console.log("Is render: ", props.render)
        */

        //Здесь отправить http запрос к серверу
        const url = "http://127.0.0.1:7878/injs";
        /* 
        let body = {
            //"id": id,
            "title": name,
            "text": deskription,
            "templ": templ,
            "deadline": parseInt(deadline),
            "status": statusVal,
            "price": parseInt(price)
        };*/ 
        let body = {
            "time": parseInt(time),
            "speed": parseInt(speed),
            "code": code,
            "status": statusInj,
            "term_id":parseInt(term)
        };
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + props.accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
        .then((data) => { 
            console.log(data)

        });
    };


//                        <input value={templ} onChange={e => setTempl(e.target.value)} placeholder="Templ" />   
    return (
    <div>
        { props.render &&
        <div className='Create-task'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Task</div>
                <div className='Create-task-btn'><button onClick={InjsCreateButton}>Create</button></div>
            </div>
            <div className='Create-task-colums'>
                
                <div className='Create-task-left'>
                        Time
                        <input value={time} onChange={e => setTime(e.target.value)} placeholder="Time" />
                        Speed
                        <input value={speed} onChange={e => setSpeed(e.target.value)} placeholder="Speed" />
                        Code
                        <input value={code} onChange={e => setCode(e.target.value)} placeholder="Code" />
                        statusInj
                        <input value={statusInj} onChange={e => setStatusInj(e.target.value)} placeholder="statusInj" />

                </div>
                <div className='Create-task-right'>
                        Term
                        <input value={term} onChange={e => setTerm(e.target.value)} placeholder="Term" />
              
                </div>
            
            </div>
        </div> 
        }
    </div>
    )
}



export default CreateInjs

