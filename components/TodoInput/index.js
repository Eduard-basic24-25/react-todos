import style from './index.module.css'

function TodosInput (props) {
    console.log(props)
    return (
    <div className={style.container}>
      <h1>Todo app</h1>

        <div className={style.inputField}>
          <input 
            className={style.input}
            type="text"
            value={props.todoTitle}
            onChange={event => props.setTodoTitle(event.target.value)}
            onKeyPress={props.addTodos}
          />
          <label className={style.label}>Todo name</label>
        </div>

    </div>
  );
}

export default TodosInput;