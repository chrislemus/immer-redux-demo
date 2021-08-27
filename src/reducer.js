import produce from 'immer';
const randomId = () =>   Math.random().toString(36).substr(2, 5);


const initialState = {
  todos: [
    {id: randomId(), content: 'buy pickles'}
  ]
};


// export const todoReducer = (state = initialState, action) =>  {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return { 
//         ...state,  
//         todos: [
//           ...state.todos,
//           {id: randomId(), content: action.payload }
//         ]
//       };
//     case 'DELETE_TODO':
//       const nextState = {...state}
//       nextState.todos = nextState.todos.filter(todo => todo.id !== action.payload)
//       return nextState
//     default:
//       return state;
//   }
// }

export const todoReducer = produce((state = initialState, action) =>  {
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push({id: randomId(), content: action.payload })
      break
    case 'DELETE_TODO':
      const index = state.todos.findIndex(todo => todo.id === action.payload)
      if (index !== -1) state.todos.splice(index, 1)
      break
    default:
      return state;
  }
})
