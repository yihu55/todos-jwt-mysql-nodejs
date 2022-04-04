import React,{useContext} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import { Context } from '../App'


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
  const getAllTodos=(e)=>{
    e.preventDefault()
    getTodoList()
  }
  

  return (<>
  <button onClick={getCompletedTodos}>completed todos</button>
  <button onClick={getAllTodos}>get all todos</button>

  </>
    
  )
}
