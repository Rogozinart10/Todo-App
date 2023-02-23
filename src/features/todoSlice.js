import { createSlice } from "@reduxjs/toolkit";



const items = localStorage.getItem('todoItems') !== null ? JSON.parse(localStorage.getItem('todoItems')) : []

const initialState = {
    todos: items,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Math.random(),
                title: action.payload,
                completed: false,
            });
            localStorage.setItem('todoItems', JSON.stringify(state.todos.map(item=>item)));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            const todos = JSON.parse(localStorage.getItem('todoItems'))
            localStorage.setItem('todoItems', JSON.stringify(todos.filter(todo => todo.id !== action.payload)))
        }, 
        completedTodo: (state, action) => {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload);
            toggleTodo.completed = !toggleTodo.completed;
            localStorage.setItem('todoItems', JSON.stringify(state.todos.map(item=>item)));
        }
    }
})

export const {addTodo, removeTodo, completedTodo} = todoSlice.actions;
export default todoSlice.reducer;