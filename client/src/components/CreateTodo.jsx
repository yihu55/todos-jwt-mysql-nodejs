import React,{useState,useContext} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import {Context}from '../App'

export default function CreateTodo() {
    const [content,setContent]=useState("")
    const {getTodoList}=useContext(Context)

    function handleOnSubmit(e){
        e.preventDefault()
        BaseFuncs.createTodo({content})
        .then(res=>res.json())
        .then(data=>getTodoList()) 
    }

  return (
    <div>
        <h1>CreateTodo</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="text" 
            value={content} 
            onChange={e=>{setContent(e.target.value)}}
            placeholder="todo Content"/>
            <button type='submit'>add todo</button>
        </form>



    </div>
  )
}
