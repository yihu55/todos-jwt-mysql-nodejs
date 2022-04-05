import React,{useEffect, useState} from 'react'
import { BaseFuncs } from '../data/BaseFuncs'
import {useSearchParams} from 'react-router-dom'


export default function FilterTodos({location}) {
    
  
  const [filteredTodos,setFilteredTodos]=useState(null)
  const [search,setSearch]=useState("")
  //const {search}=useLocation()
  //const searchParams=new URLSearchParams(document.location.search)
  
//   const params=new URLSearchParams(location.search)
//   const query=params.get('search')
//   setSearch(query?query:'not found')
//const [searchParams]=useSearchParams()
    //const searchWord=searchParams.get('search')
    //console.log("searchWord:",searchWord)


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
    <div>FilterTodos
        <form onSubmit={handleOnSubmit}>
            <input type="text"
            value={search}
            onChange={e=>{setSearch(e.target.value)}} 
            placeholder="search todos" />
            <button type="submit">search</button>
        </form>
    {filteredTodos&&filteredTodos.map(filteredTodo=>{
        return (
            <p key={filteredTodo.id}>content:{filteredTodo.content}</p>

        )
    })}
    </div>
  )
}
