import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todoSlice';
import s from './Header.module.scss'

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const addTodos = () => {
    dispatch(addTodo(value));
    setValue('');
  }  
  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      dispatch(addTodo(value));
      setValue('');
    }
  }
  return (
    <div className={s.wrapper}>
        <div className={s.input}>
            <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} placeholder='some words...' type="text" />
            <button onClick={() => addTodos()} >+</button>
        </div>
    </div>
  )
}

export default Header