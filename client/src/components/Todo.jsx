import React,{useContext} from 'react'
import { Context } from '../App'


export default function Todo({id,content,completed,todo}) {
    
    const {todos,setTodos}=useContext(Context)
    
    const handleChangeStatus=()=>{
      
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
                return {
                    ...item,completed:!item.completed
                }
            }
            return item
        }))
      
    }
    
  return (
    <div>
        <p>id:{id} - {content} </p>
        <button onClick={handleChangeStatus}>{completed?"completed":"not completed"}</button>
        {console.log({id},{completed})}
    
        
    </div>
  )
  }
