import React, { useEffect,useState } from 'react'

export default function TodoList() {
const [todos,setTodos]=useState(null)
const [completed,setCompleted]=useState(false)

function handleOnClick(e){
    e.preventDefault()
    setCompleted(true)

}

useEffect(()=>{
    // fetchData(setTodos)
    fetchData()
},[])

function fetchData(){
    const url='http://localhost:5000/api/v1/my_todos'
        const token=localStorage.getItem('todo')
        const headers={
            'Content-Type':'application.json',
            'Authorization':`Bearer ${token}`
        }
    
    fetch(url,{
        headers:headers,
    })
    .then(res=>res.json())
    .then(data=>{
        setTodos(data.todos)
        console.log(data)
    })
}
  return (
    <div>
        <h1>TodoList</h1>
        {todos&&todos.map((todo)=>{
            const {id,content,completed}=todo
            return(
                <div key={id}>
                    <p key={id}>
                        {content} - {completed ? "completed" :"not completed"}
                        </p>
                        <form onClick={handleOnClick}>
                        <input type="checkbox" onChange={e=>{setCompleted(e.target.value)}} />
                        </form>
                   

                    </div>
            )
        })}

     </div>
  )
}
