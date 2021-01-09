import React, {useState} from 'react'
import InputBar from './components/inputBar.js'
import SearchBar from './components/searchbar.js'
import TodoList from './components/todoList.js'
import { Link } from "react-router-dom";

const TodoPage = () => {
    const [todos, newTodo] = useState([])
    const [numTodos, changeNum] = useState(todos.length)
    const [filterText, changeFilt] = useState('')

    const handleChange = (newFilt) => { //change in filter text
        changeFilt(newFilt)
        console.log(filterText)
    }

    const handleSubmit = (nt) => {
        let tmp = {txt:nt, key:numTodos}
    // console.log('new todo: ', tmp) //numTodos =3 implies last existing key is 2, so next should be 3
        newTodo([...todos, tmp])
        // console.log('len: ', todos.length)
        changeNum(numTodos + 1)
    }

    return (
        <>
            <TodoList todos={todos} newTodo={newTodo} filtertxt={filterText} />
            <SearchBar value={filterText} txt='Filter' onChange={handleChange}/>
            <InputBar txt='Type Todo' onSubmit={handleSubmit} />
            <Link to='/'>Home</Link>
        </>
    )

}

export default TodoPage 