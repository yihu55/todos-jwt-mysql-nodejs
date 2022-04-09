import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function Logout() {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate('/login')
    }
  return (
    <Button onClick={logout}>Logout</Button>
  )
}
