import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

/*
 * actions
 */

let nextTodoId = 0
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

/*
 *  reducers
 */

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]    
    default:
      return state
  }
}

/*
 * presentationl components
 */

const Todo = ({ text }) => {
  <li>{text}</li>
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

/*
 * other components
 */

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

/*
 * App Component
 */

const App = () => (
  <div>
    <AddTodo />
  </div>
)

/*
 *  Entry Point
 */

let store = createStore(todos)

render (
  <div store={store}>
    <App />
  </div>,
  document.getElementById('root')
)