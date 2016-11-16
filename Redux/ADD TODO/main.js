import {createStore} from 'redux';

/*
 * action
 */

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
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
          text: action.text
        }
      ]
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
  return console.log(store.getState());
});

store.dispatch(addTodo('Learning HTML'))
store.dispatch(addTodo('Learning CSS'))
store.dispatch(addTodo('Learning javascript'))