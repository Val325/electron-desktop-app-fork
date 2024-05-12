import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Units(props) {
    const [unitNum, setUnitNum] = useState(0);    
    const [units, setUnits] = useState([]);    

    const GetUnits = () => {
        const url = "http://localhost:7878/unit";
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
                setUnitNum(data["unit_num"]);
                setUnits(data["units"]);
                //setTaskNum(data["task_num"]);
                //setTasks(data["tasks"]);
              }

        });
        

    }


    useEffect(() => {
        GetUnits()
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
              props.render && units !== undefined && 
                units.map(unit =>
                    <div className='Tasks-container' key={unit.id}>
                        <p>id: {unit.id}</p>
                        <p>{unit.username}</p>
                    </div>)                
              }
        </div>
    )
}

export default Units
