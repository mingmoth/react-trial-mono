import TodoApp from './TodoApp'
import AddTodo from './AddTodo'
import { TodoProvider } from './TodoContext'
import './App.css'

function App() {

	return (
		<TodoProvider>
			<h1>todos</h1>
			<div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
				<AddTodo />
			</div>
			<TodoApp />
		</TodoProvider>
	)
}

export default App
