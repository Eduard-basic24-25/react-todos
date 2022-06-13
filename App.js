// https://todomvc.com/examples/react/#/
// создать module.css для Todos и использовать его
import TodosInput from './components/TodoInput/index.js'
import TodoList from '../src/components/TodoList/index'
import { useState } from 'react';
import style from './App.module.css'




function Todos() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn JS', completed: false},
    {id: 2, title: 'Learn React', completed: true},
  ]);
  const [todoTitle, setTodoTitle] = useState('');
  const addTodos = (event) => {
    if(event.key === 'Enter'){
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed:false
        }
      ])
      setTodoTitle('');
    }
}

  return (
    <div className={style.todos}>

    <TodosInput 
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      addTodos={addTodos}
    />

    <TodoList todos={todos}/>

    </div>
  );
}

export default Todos;