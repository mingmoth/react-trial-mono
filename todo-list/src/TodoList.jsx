import { useState } from 'react'
import { useTodos } from './TodoContext'
import Todo from './components/Todo'

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

export default function TodoList() {
    const todos = useTodos()
    const [filter, setFilter] = useState('all')

    return (
        <>
            <div style={{ textAlign: 'start' }}>
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
