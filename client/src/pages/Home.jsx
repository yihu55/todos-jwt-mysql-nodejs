import React from 'react'
import CreateTodo from '../components/CreateTodo'
import ToggleCompletedTodos from '../components/ToggleCompletedTodos'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div>
        <CreateTodo/>
        <ToggleCompletedTodos />
        <TodoList />
        
    </div>
  )
}
