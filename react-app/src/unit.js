import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import { Link } from "react-router-dom";


function UnitId(props) {

    //const [taskId, setTaskNum] = useState(0);    
    const [unit, setUnit] = useState([]);    
    let { id } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        console.log("reboot page")
        console.log("id: ", id)
    }, [id])

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                //here return to home
                navigate("/home");
            }
        };
        window.addEventListener('keydown', handleEsc);
    }, []) 

    const GetUnit = () => {
        const url = "http://localhost:7878/unit/" + id;
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer 349t4ujh89t4h78349h7',
                'Content-Type': 'text/plain'
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUnit(data);
            //setTask(data)
        });
    }


    useEffect(() => {
        GetUnit()
    }, [id])

    return (
        <div>
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>

            
        </div>
        <div className='Home-right'>
            <div className='Tasks-staff-create'>

                
            </div>
            <div className='Task-white'>
             { unit &&   
                    <div className='Tasks-container' key={unit.id}>
                        <p>id: {unit.id}</p>
                        <p>username: {unit.username}</p>
                        <p>email: {unit.email}</p>
                        <p>bio: {unit.bio}</p>
                        <p>task: {unit.task}</p>
                        <p>active: {unit.active ? "true" : "false"}</p>
                    </div>                
              }
              <div className='buttons-link'>
                <Link to={"/home/"} ><button className='button-link'>Back</button></Link>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default UnitId
