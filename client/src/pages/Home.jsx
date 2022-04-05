import React from 'react'
import CreateTodo from '../components/CreateTodo'
import ToggleCompletedTodos from '../components/ToggleCompletedTodos'
import TodoList from '../components/TodoList'
import Logout from '../components/Logout'
import GetMe from '../components/GetMe'

export default function Home() {
  return (
    <div>
        <GetMe/>
        <Logout/>
        <CreateTodo/>
        <ToggleCompletedTodos />
        <TodoList />
        
        
    </div>
  )
}
