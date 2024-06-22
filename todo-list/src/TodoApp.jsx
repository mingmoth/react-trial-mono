import { useState } from 'react'
import Todo from './components/Todo'
import { useTodos, useTodoDispatch } from './TodoContext'
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
    const todos = useTodos()
    const [filter, setFilter] = useState('all')

	return (
		<>
			<h1>todos</h1>
			<div style={{display: 'flex', gap: '8px', alignItems: 'center', width: '100%'}}>
				<AddTodo />
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
					<Todo key={todo.id} todo={todo} />
				))}
			</div>
		</>
	)
}

function AddTodo() {
    const dispatch = useTodoDispatch()
	const [newTodo, setNewTodo] = useState('')

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

    return <>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyEnter} style={{flex: 1}} />
        <button onClick={addTodo} >Add</button>
    </>
}

export default TodoApp