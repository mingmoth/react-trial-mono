import { useState } from 'react'
import Todo from './components/Todo'
// import './todoApp.css'

function TodoApp() {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState('')

	function addTodo() {
        if (!newTodo) return
		setTodos(oldTodos => {
			return [
				...oldTodos,
				{
					id: Date.now(),
					checked: false,
					name: newTodo,
                    editing: false,
				}
			]
		});
		setNewTodo('')
	}

	function deleteTodo(id) {
		setTodos(oldTodos => {
            return oldTodos.filter(todo => todo.id !== id)
		})
	}

	function handleKeyEnter(e) {
		if (e.key === 'Enter') {
			addTodo()
		}
	}

	function onToggleTodo(id) {
		setTodos(oldTodos => {
			return oldTodos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						checked: !todo.checked
					}
				}
				return todo
			})
		})
	}

    function onToggleTodoEditing(id) {
        setTodos(oldTodos => {
            return oldTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        editing: !todo.editing
                    }
                }
                return todo
            })
        })
    }

	return (
		<>
			<h1>todos</h1>
			<div>
				<input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyEnter} />
				<button onClick={addTodo} >Add</button>
			</div>
            <div style={{textAlign: 'start'}}>
                <select>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
			<div className='todo-container'>
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} setTodos={setTodos} onToggleTodo={onToggleTodo} deleteTodo={deleteTodo} onToggleTodoEditing={onToggleTodoEditing} />
				))}
			</div>
		</>
	)
}

export default TodoApp