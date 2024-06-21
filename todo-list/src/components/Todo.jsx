import { Fragment, useState } from 'react'

export default function Todo({ todo, setTodos, onToggleTodo, deleteTodo, onToggleTodoEditing }) {
    const [editingTodo, setEditingTodo] = useState(todo.name)

    function editTodo(id) {
        setEditingTodo(todo.name)
        onToggleTodoEditing(id)
    }

    function cancelEditTodo(id) {
        onToggleTodoEditing(id)
        setEditingTodo('')
    }

    function saveEditingTodo(id) {
        setTodos(oldTodos => {
            return oldTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        name: editingTodo,
                        editing: false
                    }
                }
                return todo
            })
        })
        setEditingTodo('')
    }

    return (
        <>
            <div key={todo.id}>
                <input type="checkbox" checked={todo.checked} onChange={() => onToggleTodo(todo.id)} disabled={todo.editing} />
                {todo.editing
                            ? <input type='text' value={editingTodo} onChange={(e) => setEditingTodo(e.target.value)} />
                            : <span>{todo.name}</span>
                        }
                {todo.editing
                    ? <Fragment>
                        <button onClick={() => saveEditingTodo(todo.id)} >Save</button>
                        <button onClick={() => cancelEditTodo(todo.id)} >Cancel</button>
                    </Fragment>
                    : <Fragment>
                        <button onClick={() => editTodo(todo.id)} >Edit</button>
                        <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                    </Fragment>
                }

            </div>
        </>
    )
}