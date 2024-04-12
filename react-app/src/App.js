import React, { useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'

function Main() {
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}

function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Здесь можно добавить логику для проверки логина и пароля
    console.log('Username:', username)
    console.log('Password:', password)
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div>
            <input
              type='password'
              id='password'
              value={password}
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
          </Routes>
        </HashRouter>
      </header>
    </div>
  )
}

export default App
