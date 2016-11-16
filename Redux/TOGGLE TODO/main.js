import {createStore} from 'redux'

/*
 * action
 */

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

function toggleTodo(index) {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

/*
 * reducer
 */

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, 
            {completed: !todo.completed}
          )
        }
        return todo
      })
    default:
      return state
  }
}

/*
 * store
 */

let store = createStore(todos)

// Every time the state changes, log it
store.subscribe(function () {
  return console.log(store.getState())
});

store.dispatch(addTodo('Learning HTML'))
store.dispatch(addTodo('Learning CSS'))
store.dispatch(addTodo('Learning javascript'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(2))
store.dispatch(toggleTodo(5))