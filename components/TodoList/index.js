import TodoItem from '../TodoItem/index'
import style from './index.module.css'

function TodoList ({todos}) {

    return (
        <ul className={style.list}>
         {todos.map( todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    )
}

export default TodoList;