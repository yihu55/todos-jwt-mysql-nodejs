import React,{useContext} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import { Context } from '../App'
import Button from 'react-bootstrap/Button'

//same as import {Button} from 'react-bootstrap'


export default function GetCompletedTodos() {
  const {setTodos}=useContext(Context)
    
  const getCompletedTodos=(e)=>{
      e.preventDefault()
      BaseFuncs.getCompletedTodos()
      .then(res=>res.json())
      .then(data=>{
        setTodos(data.completedTodos)
      })
  }

  return (
  <Button onClick={getCompletedTodos}>completed todos</Button>
  )
}
