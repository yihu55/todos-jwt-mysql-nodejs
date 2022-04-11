import React,{useContext,useEffect,useState} from 'react'
import { Context } from '../App'
import Button from 'react-bootstrap/Button'

//same as import {Button} from 'react-bootstrap'


export default function SortTodos() {

  const {todos,setTodos}=useContext(Context)

  const sortTodosAlfabeticlly=()=>{
    
    const sortedTodos=[...todos].sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0))
  
    setTodos(sortedTodos)
  }

  return (
  <Button variant="warning" onClick={sortTodosAlfabeticlly}>Sort alfabeticlly</Button>
    
  )
}