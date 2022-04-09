import React,{useContext} from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../App'
import { BaseFuncs } from '../data/BaseFuncs'
import { StyledList } from '../styles/ListStyled'



export default function Todo({id,content,completed,todo,createdAt}) {
    
    const {todos,setTodos}=useContext(Context)
   
    const formatedCreatedAt=new Date(createdAt).toLocaleString()
    const handleChangeStatus=()=>{
      
        BaseFuncs.editTodo({id})
        .then(res=>res.json())
        .then(data=>{
            setTodos(todos.map(item=>{
                    if(item.id===todo.id){
                        return {
                            ...item,completed:!item.completed
                        }
                    }
                    return item
                })) 
        })
    }
  return (
        <StyledList>
            <span>{content}</span>
            <p> created at {formatedCreatedAt}</p>
            {
            completed? 
            <Button onClick={handleChangeStatus} variant="success">completed</Button> 
            : <Button onClick={handleChangeStatus} variant="danger">not completed</Button>
            }
         </StyledList>   
  )
  }
