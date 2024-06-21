import { useState, useReducer } from 'react'
import Todo from './components/Todo'
import { todoReducer } from './todoReducer'
// import './todoApp.css'

const filterOptions = ['all', 'active', 'completed']
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.checked)
        case 'completed':
            return todos.filter(todo => todo.checked)
        default:
            return todos
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, [])
	const [newTodo, setNewTodo] = useState('')
    const [filter, setFilter] = useState('all')

	function addTodo() {
        if (!newTodo) return
        dispatch({
            type: 'add',
            todo: {
                id: Date.now(),
				checked: false,
				name: newTodo,
                editing: false,
            }
        })
		setNewTodo('')
	}

	function handleKeyEnter(e) {
		if (e.key === 'Enter') {
			addTodo()
		}
	}

	return (
		<>
			<h1>todos</h1>
			<div>
				<input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyEnter} />
				<button onClick={addTodo} >Add</button>
			</div>
            <div style={{textAlign: 'start'}}>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    {filterOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
			<div className='todo-container'>
				{filterTodos(todos, filter).map((todo) => (
					<Todo key={todo.id} todo={todo} dispatch={dispatch} />
				))}
			</div>
		</>
	)
}

export default TodoApp