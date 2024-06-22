import { TodoProvider } from './TodoContext'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import './App.css'

function App() {

	return (
		<TodoProvider>
			<h1>todos</h1>
			<div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
				<AddTodo />
			</div>
			<TodoList />
		</TodoProvider>
	)
}

export default App
