import React from 'react'
import CreateTodo from '../components/CreateTodo'
import CompletedTodos from '../components/CompletedTodos'
import TodoList from '../components/TodoList'
import GetMe from '../components/GetMe'
import FilterTodos from '../components/FilterTodos'
import SortTodos from '../components/SortTodos'
import GetAllTodos from '../components/GetAllTodos'

import {Container,Row,Col} from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
        <GetMe/>
        <CreateTodo/>
        <FilterTodos/>
        </Col>

        <Col>
        <h1>TodoList</h1>
        <CompletedTodos />
        <GetAllTodos />
        <SortTodos/>
        <TodoList />
        </Col>
      </Row>  
        
    </Container>
  )
}
