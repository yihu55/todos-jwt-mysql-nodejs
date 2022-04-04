
import React, { useEffect,useContext,useState } from 'react'
import { Context } from '../App'
import Todo from './Todo'


export default function TodoList() {
// const [todos,setTodos]=useState(null)
//const [completed,setCompleted]=useState(false)
const {todos,setTodos,getTodoList,getTodo}=useContext(Context)


useEffect(()=>{
    getTodoList()
},[])

  return (
    <div>
        <h1>TodoList</h1>
        {todos&&todos.map((todo)=>{
            return(
                <Todo 
                  key={todo.id}
                  todo={todo}
                  content={todo.content}
                  completed={todo.completed}
                  id={todo.id}
                />
            )
        })}

     </div>
  )
}
