import React,{useState,useContext} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import {Context}from '../App'
import {Button}from 'react-bootstrap'
import { StyledInput } from '../styles/ListStyled'

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
        <h2>CreateTodo</h2>
        <form onSubmit={handleOnSubmit}>
            <StyledInput type="text" 
            value={content} 
            onChange={e=>{setContent(e.target.value)}}
            placeholder="todo Content"/>
            <Button variant="danger"type='submit'>add todo</Button>
        </form>

    </div>
  )
}
