import React from 'react'
import Todo from './todo.js'


const TodoList = (props) => {

  const handleDelete = (key, e) => {
      e.preventDefault()
      props.newTodo(props.todos.filter(item => item.key !== key))
      console.log(`Deleted at key ${key}`)
  }

  const filtered = props.todos.filter(todo => todo.txt.indexOf(props.filtertxt) > -1)

  return (<>
    <div>
      <ul> 
        {filtered.map((item) => 
            <li key={item.key}>
                <Todo txt={item.txt} key={item.key}/> 
                <button value={item.key} onClick={(e) => handleDelete(item.key, e)}>Delete</button>
                </li>)}
      </ul>
    </div>
  </>)
}

export default TodoList
