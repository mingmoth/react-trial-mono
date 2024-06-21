export function todoReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.todo]
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo
            })
        case 'delete':
            return state.filter(todo => todo.id !== action.id)
        case 'toggle-edit':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        editing: !todo.editing
                    }
                }
                return todo
            })
        case 'edit':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        name: action.name
                    }
                }
                return todo
            })
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}