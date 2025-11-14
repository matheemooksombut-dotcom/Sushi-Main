import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    axios.get('/api/test').then(res=>{
      setMessage(res.data)
    })
  },[])

  return (
    <div>
     <h1>MERN STARCK APP</h1>
     <p>{message}</p>
    </div>
  )
}

export default App
