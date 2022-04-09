import React,{ useState} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import {Button} from 'react-bootstrap'
import { StyledInput, StyledList, StyledUl } from '../styles/ListStyled'


export default function FilterTodos({location}) {
    
  
  const [filteredTodos,setFilteredTodos]=useState(null)
  const [search,setSearch]=useState("")

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log(search)
 
    BaseFuncs.filterTodos({search})
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setFilteredTodos(data.filteredTodos)
        
    })
  }

  return (
    <div><h2>FilterTodos</h2>
        <form onSubmit={handleOnSubmit}>
            <StyledInput type="text"
            value={search}
            onChange={e=>{setSearch(e.target.value)}} 
            placeholder="search todos" />
            <Button variant="danger" type="submit">search</Button>
        </form>
        <StyledUl width="300px"><h3>filtered todos</h3>
    {filteredTodos&&filteredTodos.map(filteredTodo=>{
        return (
            <StyledList key={filteredTodo.id}>{filteredTodo.content}</StyledList>

        )
    })}</StyledUl>
    </div>
  )
}
