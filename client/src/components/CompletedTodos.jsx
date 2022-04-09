import React,{useContext} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import { Context } from '../App'
import Button from 'react-bootstrap/Button'

//same as import {Button} from 'react-bootstrap'


export default function GetCompletedTodos() {
  const {todos,setTodos,getTodoList}=useContext(Context)
    
  const getCompletedTodos=(e)=>{
      e.preventDefault()
      BaseFuncs.getCompletedTodos()
      .then(res=>res.json())
      .then(data=>{
        setTodos(data.completedTodos)
      })
  }
 

  

  return (<>
  {/* behöver åtgärda sort alfabeticlly och get all todos, vilket var konstig att även console.logade getTodoList()render iaf todos lista */}
  <Button onClick={getCompletedTodos}>completed todos</Button>
 
  
     
  </>
    
  )
}
