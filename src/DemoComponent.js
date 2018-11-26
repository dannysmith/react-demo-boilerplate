import React, { useState } from 'react'
import './DemoComponent.css'

export default function DemoComponent() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo === '') return
    setTodos([...todos, { text: newTodo, id: Date.now() }])
    e.target.reset()
  }

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value)
    e.preventDefault()
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="demo-component">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="New Todo"
          onChange={handleNewTodoChange}
        />
      </form>
    </div>
  )
}
