import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate, useNavigate, useParams} from 'react-router-dom'
import './App.css'
import Home from './home' 
import TaskId from './OneTask'

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
  const [stateSend, setSend] = useState(false)

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
    }).then((response) => response.json())
    .then((data) => console.log(data));
    
    navigate("/home");
  }
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
  return (
    <div className='App'>
      <header className='App-header'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/task/:id' element={<TaskId />} />

          </Routes>
        </HashRouter>
      </header>
    </div>
  )
}

export default App
