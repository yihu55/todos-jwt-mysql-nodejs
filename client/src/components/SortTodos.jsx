import React,{useContext,useEffect,useState} from 'react'
import { Context } from '../App'
import Button from 'react-bootstrap/Button'
//same as import {Button} from 'react-bootstrap'


export default function SortTodos() {
  const {todos,setTodos}=useContext(Context)
  //const [sortedTodos,setSortedTodos]=useState(null)

  
  useEffect(()=>{
    console.log("sortedTodo")
  },[setTodos,todos])
  const sortTodosAlfabeticlly=()=>{
    
    const sortedTodos=todos.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0))
  
    setTodos(sortedTodos)
    console.log(todos)

    
  }
  

  return (<>
  {/* behöver åtgärda sort alfabeticlly och get all todos, vilket var konstig att även console.logade getTodoList()render iaf todos lista */}
  
  {/* {sortedTodos&&sortedTodos.map(todo=>{
      <p>{todo.content}</p>
  })} */}
  <Button variant="warning" onClick={sortTodosAlfabeticlly}>Sort alfabeticlly</Button>
</>
    
  )
}