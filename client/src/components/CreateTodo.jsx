import React,{useState} from 'react'

export default function CreateTodo() {
    const [content,setContent]=useState("")
    function handleOnSubmit(e){
        e.preventDefault()
        const url='http://localhost:5000/api/v1/todo'
        const payload={content}
        const token=localStorage.getItem('todo')
        const headers={
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        
        }
        
        fetch(url,{
            method:'POST',
            headers:headers,
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        
        

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
