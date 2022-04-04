import React,{useContext} from 'react'
import { Context } from '../App'
import { BaseFuncs } from '../data/BaseFuncs'
import GetCompletedTodos from './ToggleCompletedTodos'


export default function Todo({id,content,completed,todo}) {
    
    const {todos,setTodos}=useContext(Context)
    
    const handleChangeStatus=()=>{
      
        // setTodos(todos.map(item=>{
        //     if(item.id===todo.id){
        //         return {
        //             ...item,completed:!item.completed
        //         }
        //     }
        //     return item
        // }))
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
    <div>
        <p>id:{id} - {content} </p>
        <button onClick={handleChangeStatus}>{completed?"completed":"not completed"}</button>
        {console.log({id},{completed})}
    
        
    </div>
  )
  }
