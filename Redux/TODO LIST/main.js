import {createStore} from 'redux'
import {combineReducers} from 'redux'

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

function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
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

function visibilityFilter(state='SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default: 
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

/*
 * store
 */

let store = createStore(todoApp)

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

store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
store.dispatch(setVisibilityFilter('SHOW_ACTIVE'))