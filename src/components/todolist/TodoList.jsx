import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './TodoList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { completedTodo, removeTodo } from '../../features/todoSlice'

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();  
  const removeTodos = (id) => {
    dispatch(removeTodo(id));
  }
  return (
    <div className={s.wrapper}>
        {todos.map(todo => (
            <div key={todo.id} className={s.div}>
                <div className={s.completed_div}>
                    <FontAwesomeIcon onClick={() => dispatch(completedTodo(todo.id))} className={s.completed} icon={faCheck} />
                </div>
                <div className={!todo.completed ? s.title : s.title1}>{todo.title}</div>
                <FontAwesomeIcon onClick={() => removeTodos(todo.id)} className={s.trash} icon={faTrash} />
            </div>
        ))}
    </div>
  )
}

export default TodoList