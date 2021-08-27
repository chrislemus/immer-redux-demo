import {  useSelector,useDispatch } from 'react-redux';
import {useState} from 'react'
import { addTodo, deleteTodo } from './actions';

function App() {
  const todos = useSelector(({todos}) => todos);
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')

  const renderedTodos = todos.map(({id, content}) => 
    <li key={id}>
      <span>{content}</span>
      <button onClick={() => dispatch((deleteTodo(id)))} className='delete-btn'>Delete</button>
    </li>
  );

  const handleNewTodo = () => {
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }

  return (
    <div className="App">
      <div>
        <input onChange={(e) =>  setNewTodo(e.target.value)} value={newTodo}/>
        <button onClick={handleNewTodo} >Add Todo</button>
      </div>
      <ul>
        {renderedTodos}
      </ul>
    </div>
  );
}

export default App;
