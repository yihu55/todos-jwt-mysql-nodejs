import React,{useContext} from 'react'
import { Context } from '../App'
import Button from 'react-bootstrap/Button'
import { StyledUl } from '../styles/ListStyled'
import Todo from './Todo'




export default function GetCompletedTodos() {
  const {getTodoList,todos}=useContext(Context)
    
  const getAllTodos=(e)=>{
    e.preventDefault()
    console.log("hej")
   getTodoList()
  }

  

  return (<>
  {/* behöver åtgärda sort alfabeticlly och get all todos, vilket var konstig att även console.logade getTodoList()render iaf todos lista */}

  <Button variant="success" onClick={getAllTodos}>get all todos</Button>
  {/* <StyledUl> 
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

     </StyledUl> */}
  
     
  </>
    
  )
}