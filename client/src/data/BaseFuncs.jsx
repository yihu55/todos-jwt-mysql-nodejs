const ROOT_URL='http://localhost:5000/api/v1'

export const getToken=()=>{
    return localStorage.getItem('todo')
}

export const BaseFuncs={
    user:{
        create:payload=>{
            const url=`${ROOT_URL}/register`
            const token=getToken()
            return fetch(url,{
                method:'POST',
                headers:{
                     'Content-Type':'application/json',
                    //'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(payload)
            })
        },
        login: payload=>{
            const url=`${ROOT_URL}/login`
            const token=getToken()
            return fetch(url,{
                method:'POST',
                headers:{
                     'Content-Type':'application/json',
                     'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify(payload)
            })
        },
  
    },
    getTodoList:()=>{
        const token=getToken()
        const url=`${ROOT_URL}/my_todos`
        return fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
    },
    createTodo:(payload)=>{
        const url=`${ROOT_URL}/todo`
        const token=getToken()
        return fetch(url,{
            method:'POST',
            headers:{
                 'Content-Type':'application/json',
                 'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify(payload)
        })
    },
    getCompletedTodos:()=>{
        const url=`${ROOT_URL}/completed_todos`
        const token=getToken()
        return fetch(url,{
            method:'GET',
            headers:{
                 'Content-Type':'application/json',
                 'Authorization':`Bearer ${token}`
            },
            
        })
    },

    editTodo:({id,payload})=>{
        const url=`${ROOT_URL}/edit-todo/${id}`
        const token=getToken()
        return fetch(url,{
            method:'PUT',
            headers:{
                 'Content-Type':'application/json',
                 'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify(payload)
            
        })
    }




    
}