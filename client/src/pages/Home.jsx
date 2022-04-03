import React from 'react'
import CreateTodo from '../components/CreateTodo'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <div>
        <CreateTodo/>
        <TodoList />
    </div>
  )
}
