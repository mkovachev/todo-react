import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <button>0 left to do</button>
    </>
  )
}

export default App;
