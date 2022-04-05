import React from 'react'
import CreateTodo from '../components/CreateTodo'
import ToggleCompletedTodos from '../components/ToggleCompletedTodos'
import TodoList from '../components/TodoList'
import Logout from '../components/Logout'
import GetMe from '../components/GetMe'
import FilterTodos from '../components/FilterTodos'

export default function Home() {
  return (
    <div>
        <GetMe/>
        <Logout/>
        <FilterTodos/>
        <CreateTodo/>
        <ToggleCompletedTodos />
        <TodoList />
        
        
    </div>
  )
}
