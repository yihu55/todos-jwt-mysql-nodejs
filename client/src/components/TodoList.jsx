import React, { useContext, useEffect} from 'react'
import { Context } from '../App'
import { StyledUl } from '../styles/ListStyled'
import Todo from './Todo'


export default function TodoList() {

const {todos}=useContext(Context)
useEffect(()=>{
   console.log("todos updated")
},[todos])


  return (

    <StyledUl> 
        {todos&&todos.map((todo)=>{
            return(
                <Todo 
                  key={todo.id}
                  todo={todo}
                  content={todo.content}
                  completed={todo.completed}
                  createdAt={todo.createdAt}
                  id={todo.id}
                />
            )
        })}

     </StyledUl>
  )
}
