import style from './index.module.css'


function TodoItem({title}) {
    return (
      <li className={style.todo}>
        <label className={style.labelLi}>
          <input
            className={style.checkbox}
            type="checkbox"
            defaultChecked={false}
          />
          <span>{title}</span>
            delete
        </label>
      </li>
    )
  }

export default TodoItem;