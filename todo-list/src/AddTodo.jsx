import { useState } from 'react'
import { useTodoDispatch } from './TodoContext'

export default function AddTodo() {
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
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyEnter} style={{ flex: 1 }} />
        <button onClick={addTodo} >Add</button>
    </>
}
