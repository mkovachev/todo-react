import React, { useState, useRef } from 'react'
import TodoList from './TodoList'
import uuidv4 from './uuidv4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <button>0 left to do</button>
    </>
  )
}

export default App;
