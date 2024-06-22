import { Fragment, useState } from 'react'
import { useTodoDispatch } from '../TodoContext'

export default function Todo({ todo }) {
    const dispatch = useTodoDispatch()
    const [editingTodo, setEditingTodo] = useState(todo.name)

    function editTodo(id) {
        setEditingTodo(todo.name)
        dispatch({
            type: 'toggle-edit',
            id
        })
    }

    function cancelEditTodo(id) {
        dispatch({
            type: 'toggle-edit',
            id
        })
        setEditingTodo('')
    }

    function saveEditingTodo(id) {
        dispatch({
            type: 'edit',
            id,
            name: editingTodo
        })
        dispatch({
            type: 'toggle-edit',
            id
        })
        setEditingTodo('')
    }

    return (
        <>
            <div key={todo.id} style={{display: 'grid', gap: '4px', gridTemplateColumns: 'auto 100px auto auto', alignItems: 'center', width: '100%'}}>
                <input type="checkbox" checked={todo.checked} onChange={() => dispatch({
                    type: 'toggle',
                    id: todo.id
                })} disabled={todo.editing} />
                <div style={{textAlign: 'start'}}>
                    {todo.editing
                        ? <div><input type='text' value={editingTodo} onChange={(e) => setEditingTodo(e.target.value)} style={{width: '100px', boxSizing: 'border-box'}} /></div>
                        : <div>{todo.name}</div>
                    }
                </div>
                {todo.editing
                    ? <Fragment>
                        <button onClick={() => saveEditingTodo(todo.id)} >Save</button>
                        <button onClick={() => cancelEditTodo(todo.id)} >Cancel</button>
                    </Fragment>
                    : <Fragment>
                        <button onClick={() => editTodo(todo.id)} >Edit</button>
                        <button onClick={() => dispatch({ type: 'delete', id: todo.id })} >Delete</button>
                    </Fragment>
                }

            </div>
        </>
    )
}