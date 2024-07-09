import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams, redirect} from 'react-router-dom'
import {createContext, useContext } from 'react';
import './App.css'
import Home from './home' 
import UnitId from './show/unit'
import TaskId from './show/OneTask'
import EditTask from './edit/editTask'
import TokenContext from './contextapi' 
//const TokenContext = createContext(null);

function Main() {
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}

function Auth() {
  const [usernameStat, setUsername] = useState('')
  const [passwordStat, setPassword] = useState('')
  const [navigatePath, setNavigate] = useState('')
  const [stateSend, setSend] = useState(false)
  const {token, setToken} = useContext(TokenContext);
  let navigate = useNavigate();

  const handleLogin = () => {
    // Здесь можно добавить логику для проверки логина и пароля
    console.log('Username:', usernameStat);
    console.log('Password:', passwordStat);
    
    const url = "http://127.0.0.1:7878/aris/sign_in";
    let body = {
        username: usernameStat,
        password: passwordStat
    }; 


    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    }).then((response) => {
        //if (!response.ok) {
            //navigate("/");
            //throw new Error('Something went wrong');
            //setSend(false)
            //window.location.replace("/")
            //document.location.href = '/'
            //redirect("/");
        //}
        //console.log(response)
        return response.json()
    }) 
    .then((data) => {
        //if (data !== undefined){
        setToken(data.token)
        setSend(true)
        //navigate("/home")  
        //}
    })

  }
    useEffect(() => {
        if(token === undefined || token === null || token === "") {
            navigate("/")
        }else{
            navigate("/home")
        }
    
    }, [token]);

    return (
    <div className='App'>
      
      <header className='App-header'>
        <h1>Application Name</h1>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type='text'
              id='username'
              value={usernameStat}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div>
            <input
              type='password'
              id='password'
              value={passwordStat}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </header>
    </div>
  )
}

function App() {
  const [token, setToken] = useState("")

  return (
    
    <div className='App'>
     
      <header className='App-header'>
        <TokenContext.Provider value={{
          token,
          setToken
        }}>

        <HashRouter>

          <Routes>

            <Route path='/' element={<Auth />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/task/:id' element={<TaskId />} />
            <Route path='/home/task/edit/:id' element={<EditTask render={true} />} />
            <Route path='/home/unit/:id' element={<UnitId />} />
        
          </Routes>

        </HashRouter>
      </TokenContext.Provider>       
      </header>
    </div>
   
  )
}

export default App
