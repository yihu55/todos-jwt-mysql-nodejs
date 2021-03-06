import React,{useState} from 'react'
import {useNavigate}from 'react-router-dom'
import { BaseFuncs } from '../data/BaseFuncs'

export default function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    
    const navigate=useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        BaseFuncs.user.create({username,password})
        .then(res=>res.json())
        .then(data=>{
            navigate('/login')
        })
    }
  return (
    <div>
        <h2>Register User</h2>
        <form onSubmit={handleOnSubmit}>
            <input type="text" 
            value={username} 
            onChange={e=>setUsername(e.target.value) } 
            placeholder="Username"/>

             <input type="text" 
            value={password} 
            onChange={e=>setPassword(e.target.value) } 
            placeholder="password"/>
            <button type='submit'>register user</button>
        </form>
    </div>
  )
}